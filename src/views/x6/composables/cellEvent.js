/*
 * @Description: 事件
 * @Author: xxqq
 * @Date: 2022-02-05 20:23:45
 * @LastEditTime: 2022-02-05 20:59:29
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
  /**
   * 边事件
   */
  // 连接成功
  graph.on("edge:connected", (args) => {
    const edge = args.edge;
    const node = args.currentCell;
    const elem = args.currentMagnet;
    console.log(elem);
    const portId = elem.getAttribute("port");
    // 触发 port 重新渲染
    node && node.setPortProp(portId, "connected", true);
    changeNode(args.currentCell, false);
    // 更新连线样式
    edge.attr({
      line: {
        strokeDasharray: "",
      },
    });
  });
};
