/**
 * [S0 占位] 网格坐标 ⇄ 屏幕坐标换算纯函数。
 *
 * 职责（设计稿 §2.3 / §3 core/isometric/grid-math.ts）：
 *  - gridToScreen(col, row)：网格坐标 → 地块中心本地坐标（等距投影）；
 *  - screenToGrid(x, y)：本地坐标 → 网格坐标（逆投影，用于点击拾取）；
 *  - 纯函数、无副作用，是 vitest 必测区之一。
 *
 * 约束：
 *  - core/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 尺寸 / 比例常量只允许从 core/isometric/iso-constants.ts 取。
 *
 * TODO(后续阶段)：实现双向换算公式。
 *                 拾取链路：先经 UITransform.convertToNodeSpaceAR 得到本地坐标，
 *                 再调用 screenToGrid（见设计稿 §2.3）。
 *
 * 关联：core/isometric/iso-constants.ts、core/view/map-view.ts、core/view/tile-view.ts
 */
