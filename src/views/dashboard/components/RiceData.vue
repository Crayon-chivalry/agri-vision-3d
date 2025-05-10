<!-- 稻谷收购 -->
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const chartRef = ref(null);
let chartInstance = null;

const initChart = () => {
  const offsetX = 20; //bar宽
  const offsetY = 6; //倾斜角度
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint;
      // console.log(shape);
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - offsetX, shape.y - offsetY];
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath();
    },
  });
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
      const c4 = [shape.x + offsetX, shape.y - offsetY];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
      // const c3 = [shape.x, shape.y - offsetX];
      const c3 = [shape.x, shape.y - offsetY * 2];
      const c4 = [shape.x - offsetX, shape.y - offsetY];
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  // 注册三个面图形
  echarts.graphic.registerShape("CubeLeft", CubeLeft);
  echarts.graphic.registerShape("CubeRight", CubeRight);
  echarts.graphic.registerShape("CubeTop", CubeTop);
  let xAxisData = ["水稻总量", "早稻", "中稻", "晚稻"];
  let seriesData = [480, 260, 220, 390];
  let colorArr = [
    ["#12D5AF"],
    ["#0BC19D", "rgba(13,8,16,0)"],
    ["#68EFD4", "rgba(14,185,151,0)"],
  ];
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params, ticket, callback) {
        const item = params[1];
        return item.name + " : " + item.value;
      },
    },
    grid: {
      left: "10%",
      right: "10%",
      top: "15%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxisData,
      axisLine: {
        show: false,
        lineStyle: {
          width: 2,
          color: "#2B7BD6",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
        color: "#fff",
        fontFamily: "siyuan",
        margin: 15,
        fontWeight: "bold",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
        lineStyle: {
          width: 2,
          color: "#2B7BD6",
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#153D7D",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        fontSize: 14,
      },
      // boundaryGap: ['20%', '20%'],
    },
    series: [
      {
        type: "custom",
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorArr[1][0],
                    },
                    {
                      offset: 1,
                      color: colorArr[1][1],
                    },
                  ]),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorArr[2][0],
                    },
                    {
                      offset: 1,
                      color: colorArr[2][1],
                    },
                  ]),
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorArr[0][0],
                    },
                    {
                      offset: 1,
                      color: colorArr[0][0],
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: seriesData,
      },
      {
        type: "bar",
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: (e) => {
              return e.value + '/万吨';
            },
            fontSize: 12,
            color: "#fff",
            fontFamily: "siyuan",
            fontWeight: "bold",
            offset: [0, -15],
          },
        },
        itemStyle: {
          color: "transparent",
        },
        tooltip: {},
        data: seriesData,
      },
    ],
  };
  chartInstance = echarts.init(chartRef.value);
  chartInstance.setOption(option);
};

onMounted(() => {
  initChart();
});
</script>

<template>
  <div class="rice">
    <title-section title="稻谷收购" />
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<style scoped>
.chart {
  margin-top: 20px;
  width: 100%;
  height: 350px;
}
</style>
