<template>
  <a-card class="panel">
    <div class="panel-content-wrapper">
      <!-- 左侧节点选择区 -->
      <node-bar></node-bar>
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
import NodeBar from "./components/NodeBar";
import registerNode from "./shape/registerNode";
import registerEdge from "./edge/registerEdge";
import cellHover from "./composables/cellHover";
registerNode(Graph); // 调用注册自定义节点方法
registerEdge(Graph); // 调用注册边方法
export default {
  name: "X6",
  components: {
    NodeBar,
  },
  data() {
    return {
      graph: null,
    };
  },
  provide() {
    return {
      getGraph: () => this.graph,
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
        // height：900,
        translating: {
          restrict: true, // 节点不能超出画布范围
        },
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
      // 移入节点效果
      cellHover(this.graph);
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
