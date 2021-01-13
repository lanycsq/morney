
<template>
  <lay-out>
    <tabs
      class-prefix="types"
      :data-source="recordTypeList"
      :value.sync="recordType"
    />
    <Chart :options="x"></Chart>
    <div>
      <ol v-if="groupedList.length > 0">
        <li v-for="(group, index) in groupedList" :key="index">
          <h3 class="title">
            {{ beautify(group.title) }}<span>{{ group.total }}</span>
          </h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }} </span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="no-result">目前没有相关记录</div>
    </div>
  </lay-out>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import LayOut from "@/components/LayOut.vue";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import intervalList from "@/constants/intervalList";
import Chart from "@/components/Chart.vue";
import dayjs from "dayjs";
import clone from "@/lib/clone";
import  _ from 'lodash'


@Component({
  components: { LayOut, Tabs, Chart },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.map((t) => t.name).join("，");
  }
  get recordList() {
    return (this.$store.state as RootStore).recordList;
  }
  get groupedList() {
    const { recordList } = this;
    type Result = { title: string; total?: number; items: RecordItem[] }[];

    const newList = clone(recordList)
      .filter((r) => r.type === this.recordType)
      .sort(
        (a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
      );
    if (newList.length === 0) {
      return [];
    }
    const result: Result = [
      {
        title: dayjs(newList[0].createAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });
    return result;
  }
  get x() {
    console.log(this.recordList);
    const array=[];
    const today=new Date();
    for (let i=0;i<=29;i++){
      const dateString=dayjs(today).subtract(i,'day').format("YYYY-MM-DD");
      const found=_.find(this.recordList,{createAt:dateString})
       array.push({date:dateString,value:found?found.amount:0});
    }
    array.sort((a,b)=>{
      if(a.date>b.date){
        return 1
      }else if (a.date===b.date){
        return 0
      }else {
        return -1
      }
    })
    const keys=array.map(item=>item.date)
    const values=array.map(item=>item.value)
    console.log(array)
    return {
      xAxis: {
        type: "category",
        data: keys,
        axisLabel:{
          formatter: function (value: string,index: number) {
            // 格式化成月/日，只在第一个刻度显示年份
            return value.substr(5)
          }
        },
        axisTick:{
          alignWithLabel:true
        },
        axisLine:{
          lineStyle:{color:"#666"}
        },

      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        show: true,
      },
      series: [
        {
          data: values,
          type: "line",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
          itemStyle:{
            borderWidth:1,
            color:'#666'
          },
          symbol:'circle',
          symbolSize:20
        },
      ],
    };
  }
  beautify(string: string) {
    const now = dayjs();
    const day = dayjs(string);
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("MM月D日");
    } else {
      return day.format("YYYY年MM月D日");
    }
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  recordType = "-";
  interval = "day";
  recordTypeList = recordTypeList;
  intervalList = intervalList;
}
</script>
<style scoped lang="scss">
.no-result {
  padding: 16px;
  text-align: center;
}
::v-deep {
  .types-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
%item {
  padding: 6px 16px;
  line-height: 24px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
.echarts {
  max-width: 100%;
  height: 400px;
}
</style>

