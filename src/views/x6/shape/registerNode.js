/*
 * @Description: 注册节点
 * @Author: xxqq
 * @Date: 2022-02-03 18:24:29
 * @LastEditTime: 2022-02-04 16:50:16
 * @LastEditors: xxqq
 */
import CustomNode from "./CustomNode";
import "@antv/x6-vue-shape";
export default (Graph) => {
  Graph.registerVueComponent(
    "Custom",
    {
      template: "<custom-node/>",
      components: { CustomNode },
    },
    true
  );
};
