<!--
 * @Description: 自定义节点
 * @Author: xxqq
 * @Date: 2022-02-03 18:22:54
 * @LastEditTime: 2022-02-03 18:23:57
 * @LastEditors: xxqq
-->
<template>
  <span class="custom-node active"></span>
</template>
<script>
export default {
  name: "CustomNode",
};
</script>
<style lang="less" scoped>
.custom-node {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 160px;
  height: 32px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c2c8d5;
  border-left: 4px solid #5f95ff;
  border-radius: 4px;
}
.x6-node-selected .active {
  border-color: #1890ff;
  border-radius: 2px;
  box-shadow: 0 0 0 4px #d4e8fe;
}
</style>
