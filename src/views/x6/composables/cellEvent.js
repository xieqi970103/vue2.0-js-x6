/*
 * @Description: 事件
 * @Author: xxqq
 * @Date: 2022-02-05 20:23:45
 * @LastEditTime: 2022-02-09 21:21:13
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
  /**
   * 节点事件
   */
  graph.on("node:changed", ({ node }) => {
    changeNode(node, false);
  });
  /**
   * 键盘快捷键
   */
  // 重做
  graph.bindKey("ctrl+y", () => {
    if (graph.history.canRedo()) {
      graph.history.redo();
    }
  });
  // 撤销
  graph.bindKey("ctrl+z", () => {
    if (graph.history.canUndo()) {
      graph.history.undo();
    }
  });
};
