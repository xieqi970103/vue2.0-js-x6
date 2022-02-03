<!--
 * @Description: 
 * @Author: xxqq
 * @Date: 2022-02-03 17:24:51
 * @LastEditTime: 2022-02-03 21:52:28
 * @LastEditors: xxqq
-->
<template>
  <div class="node-bar-wrapper">
    <div>节点组件库</div>
    <div class="node-bar-content">
      <div @mousedown="startDrag" data-type="custom">test</div>
    </div>
  </div>
</template>
<script>
import { Addon } from "@antv/x6";
const { Dnd } = Addon;
export default {
  name: "NodeBar",
  data() {
    return {
      dnd: null,
    };
  },
  inject: ["getGraph"],
  computed: {
    graph() {
      return this.getGraph();
    },
  },
  watch: {
    graph: {
      handler() {
        this.initDnd();
      },
      immediate: true,
    },
  },
  methods: {
    initDnd() {
      this.dnd = new Dnd({
        target: this.graph,
        validateNode() {
          return true;
        },
      });
    },
    startDrag(e) {
      const target = e.currentTarget;
      const type = target.getAttribute("data-type");
      let node;
      if (type === "custom") {
        node = this.graph.createNode({
          shape: "vue-shape",
          component: "Custom",
          width: 160,
          height: 32,
          attrs: {
            text: {
              textWrap: {
                text: 123,
                id: 1,
              },
            },
          },
        });
      }
      this.dnd.start(node, e);
    },
  },
};
</script>
<style lang="less" scoped>
.node-bar-wrapper {
  width: 200px;
  height: 100%;
  border: 1px solid #ccc;
}
</style>
