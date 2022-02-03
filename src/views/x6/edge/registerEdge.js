/*
 * @Description: 注册边
 * @Author: xxqq
 * @Date: 2022-02-03 23:23:36
 * @LastEditTime: 2022-02-03 23:31:31
 * @LastEditors: xxqq
 */
export default (Graph) => {
  Graph.registerConnector("algo-edge", (source, target) => {
    const offset = 4;
    const contorl = 80;
    const v1 = { x: source.x, y: source.y + offset + contorl };
    const v2 = { x: source.x, y: source.y - offset + contorl };
    return `M ${source.x} ${source.y}
            L ${source.x} ${source.y + offset}
            C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${target.x} ${target.y - offset}
            L ${target.x} ${target.y}
            `;
  });
};
