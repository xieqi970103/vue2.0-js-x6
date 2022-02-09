/*
 * @Description:
 * @Author: xxqq
 * @Date: 2022-02-04 00:15:25
 * @LastEditTime: 2022-02-08 22:06:22
 * @LastEditors: xxqq
 */
const changeNode = (node, visible) => {
  // 显示连接柱
  const ports = document.querySelectorAll(
    `g[data-cell-id="${node.id}"] .x6-port-body`
  );
  ports.forEach((port) => {
    port.style.visibility = visible ? "visible" : "hidden";
  });
};
export default (graph) => {
  // 鼠标移入节点
  graph.on("node:mouseenter", ({ node }) => {
    changeNode(node, true);
  });
  // 鼠标移出节点
  graph.on("node:mouseleave", ({ node }) => {
    changeNode(node, false);
  });
};
