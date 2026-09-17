/**
 * [S0 占位] 地块视图编排：创建 / 深度排序 / 触摸路由（@cocos/组件 层）。
 *
 * 职责（设计稿 §2.3 / §3 core/view/map-view.ts）：
 *  - 按 grid-math 投影结果批量摆放地块节点（每地块一个 Sprite 节点）；
 *  - 维护等距渲染深度（遮挡关系）；
 *  - 接收地块触摸并转发给 game/interact-router.ts（点击意图路由）。
 *
 * 约束：
 *  - 【@cocos/组件 层例外】本文件后续允许 import 'cc'
 *    （引擎 API 仅允许出现在 ui/、core/view/ 与组件类文件）；
 *  - 只做表现编排：状态变更必须走 services/，禁止直接改管理器数据。
 *
 * TODO(后续阶段)：实现地块节点创建与深度排序。
 *                 编辑器挂载方式：作为组件挂载到 WorldRoot 容器节点
 *                 （WorldRoot 为 Canvas 下的地图容器，由场景搭建阶段创建）。
 *
 * 关联：core/isometric/grid-math.ts、core/view/tile-view.ts、game/interact-router.ts
 */
