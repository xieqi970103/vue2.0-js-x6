/*
 * @Description: 连接柱
 * @Author: xxqq
 * @Date: 2022-02-04 16:02:01
 * @LastEditTime: 2022-02-04 16:47:20
 * @LastEditors: xxqq
 */
export default {
  items: [
    { group: "in", id: "p_top" },
    { group: "out", id: "p_bottom" },
  ],
  groups: {
    in: {
      position: "top",
      zIndex: 100,
      attrs: {
        circle: {
          r: 4,
          magnent: true,
          stroke: "#1890ff",
          strokeWidth: 2,
          fill: "#fff",
        },
      },
    },
    out: {
      position: "bottom",
      zIndex: 100,
      attrs: {
        circle: {
          r: 4,
          magnent: true,
          stroke: "#1890ff",
          strokeWidth: 2,
          fill: "#fff",
        },
      },
    },
  },
};
