<template>
  <a-card class="panel">
    <div class="panel-content-wrapper">
      <!-- 左侧节点选择区 -->
      <!-- 中部内容区 -->
      <div class="content-wrapper">
        <div class="draw-wrapper" id="drag-container"></div>
      </div>
      <!-- 右侧节点配置区 -->
    </div>
  </a-card>
</template>

<script>
import "@antv/x6-vue-shape";
import { Graph } from "@antv/x6";
export default {
  name: "X6",
  components: {},
  data() {
    return {
      graph: null,
    };
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    // 初始化
    initGraph() {
      const that = this;
      that.graph = new Graph({
        container: document.getElementById("drag-container"), // 设置画布的容器
        // width: 1600, // 默认使用容器的宽高
        // height：900
        // 网格
        grid: {
          size: 10, // 网格大小 10px
          type: "doubleMesh",
          args: [
            {
              color: "#eee", // 主网格线颜色
              thickness: 1, // 主网格线宽度
            },
            {
              color: "#ddd", // 次网格线颜色
              thickness: 1, // 次网格线宽度
              factor: 4, // 主次网格线间隔
            },
          ],
          visible: true, // 渲染网格背景
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
::v-deep {
  .ant-card-body {
    width: 95vw;
    height: 95vh;
  }
}
.panel {
  .panel-content-wrapper {
    height: 100%;
    display: flex;
    .content-wrapper {
      height: 100%;
      width: 100%;
      .draw-wrapper {
        height: 100%;
      }
    }
  }
}
</style>
