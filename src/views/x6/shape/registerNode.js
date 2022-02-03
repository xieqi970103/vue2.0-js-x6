/*
 * @Description: 注册节点
 * @Author: xxqq
 * @Date: 2022-02-03 18:24:29
 * @LastEditTime: 2022-02-03 22:12:25
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
      // ports: {
      //   item: [
      //     { group: "in", id: "p_top" },
      //     { group: "out", id: "p_bottom" },
      //   ],
      //   groups: {
      //     in: {
      //       position: "top",
      //       zIndex: 1,
      //       attrs: {
      //         circle: {
      //           r: 4,
      //           magnent: true,
      //           stroke: "#1890ff",
      //           strokeWidth: 2,
      //           fill: "#fff",
      //         },
      //       },
      //     },
      //     out: {
      //       position: "bottom",
      //       zIndex: 1,
      //       attrs: {
      //         circle: {
      //           r: 4,
      //           magnent: true,
      //           stroke: "#1890ff",
      //           strokeWidth: 2,
      //           fill: "#fff",
      //         },
      //       },
      //     },
      //   },
      // },
    },
    true
  );
};
