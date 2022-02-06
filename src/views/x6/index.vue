<template>
  <a-card class="panel">
    <div class="panel-content-wrapper">
      <!-- 左侧节点选择区 -->
      <node-bar></node-bar>
      <!-- 中部内容区 -->
      <div class="content-wrapper">
        <toolbar></toolbar>
        <div class="draw-wrapper" id="drag-container"></div>
      </div>
      <!-- 右侧节点配置区 -->
    </div>
  </a-card>
</template>

<script>
import "@antv/x6-vue-shape";
import { Graph, Platform } from "@antv/x6";
import NodeBar from "./components/NodeBar";
import Toolbar from "./components/Toolbar";
import registerNode from "./shape/registerNode";
import registerEdge from "./edge/registerEdge";
import cellHover from "./composables/cellHover";
import cellEvent from "./composables/cellEvent";
registerNode(Graph); // 调用注册自定义节点方法
registerEdge(Graph); // 调用注册边方法
export default {
  name: "X6",
  components: {
    NodeBar,
    Toolbar,
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
        // 节点连接
        connecting: {
          anchor: "center",
          snap: true,
          connector: "algo-edge",
          allowBlank: false,
          allowMulti: false,
          allowLoop: false,
          allowNode: false,
          allowEdge: false,
          allowPort: true,
          highlight: true,
          sourceAnchor: {
            name: "bottom",
            args: {
              dx: Platform.IS_SAFARI ? 5 : 0,
            },
          },
          targetAnchor: {
            name: "center",
            args: {
              dx: Platform.IS_SAFARI ? 5 : 0,
            },
          },
          connectionPoint: "anchor",
          createEdge() {
            return that.graph.createEdge({
              attrs: {
                line: {
                  strokeDasharray: "5 5",
                  stroke: "#808080",
                  strokeWidth: 1,
                  targetMarker: {
                    name: "block",
                    args: {
                      size: "6",
                    },
                  },
                },
              },
            });
          },
          validateMagnet({ magnet }) {
            return magnet.getAttribute("port-group") !== "in";
          },
          validateConnection({ targetView, sourceMagnet, targetMagnet }) {
            // 只能从输出链接桩创建连接
            if (
              !sourceMagnet ||
              sourceMagnet.getAttribute("port-group") === "in"
            ) {
              return false;
            }

            // 只能连接到输入链接桩
            if (
              !targetMagnet ||
              targetMagnet.getAttribute("port-group") !== "in"
            ) {
              return false;
            }

            // 判断目标链接桩是否可连接
            const portId = targetMagnet.getAttribute("port");
            const node = targetView.cell;
            const port = node.getPort(portId);
            if (port && port.connected) {
              return false;
            }

            return true;
          },
        },
        history: true,
      });
      // 移入节点效果
      cellHover(this.graph);
      // 引入一些事件
      cellEvent(this.graph);
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
      flex: 1;
      .draw-wrapper {
        height: calc((100% - 42px));
      }
    }
  }
}
</style>
