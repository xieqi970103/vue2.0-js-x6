<!--
 * @Description: 
 * @Author: xxqq
 * @Date: 2022-01-31 12:39:59
 * @LastEditTime: 2022-02-01 18:32:06
 * @LastEditors: xxqq
-->
<template>
  <div class="home">
    <x6-demo></x6-demo>
  </div>
</template>
<script>
import X6Demo from "./x6";
export default {
  name: "Home",
  components: {
    X6Demo,
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
</style>
