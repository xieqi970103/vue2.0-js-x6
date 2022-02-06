<!--
 * @Description: 工具栏
 * @Author: xxqq
 * @Date: 2022-02-05 23:11:09
 * @LastEditTime: 2022-02-06 14:19:35
 * @LastEditors: xxqq
-->
<template>
  <div class="toolbar-wrapper">
    <link
      rel="stylesheet"
      type="text/css"
      href="//at.alicdn.com/t/font_598462_3xve1872wizzolxr.css"
    />
    <em class="command iconfont icon-undo" title="撤销" @click="undo"></em>
    <em class="command iconfont icon-redo" title="重做" @click="redo"></em>
  </div>
</template>
<script>
export default {
  name: "Toolbar",
  inject: ["getGraph"],
  computed: {
    group() {
      return this.getGraph();
    },
  },
  methods: {
    undo() {
      this.group.history.undo();
    },
    redo() {
      this.group.history.redo();
    },
  },
};
</script>
<style lang="less" scoped>
.toolbar {
  &-wrapper {
    box-sizing: border-box;
    padding: 8px 0px;
    width: 100%;
    border: 1px solid #e9e9e9;
    height: 42px;
    z-index: 3;
    box-shadow: 0px 8px 12px 0px rgba(0, 52, 107, 0.04);
    text-align: left;
    .command {
      box-sizing: border-box;
      width: 27px;
      height: 27px;
      margin: 0px 6px;
      border-radius: 2px;
      padding-left: 4px;
      display: inline-block;
      border: 1px solid rgba(2, 2, 2, 0);
      &:nth-of-type(1) {
        margin-left: 24px;
      }
      &:hover {
        cursor: pointer;
        border: 1px solid #e9e9e9;
      }
    }
  }
}
</style>
