/**
 * [S0 占位] 点击意图 → 服务调用路由（表现层回调）。
 *
 * 职责（设计稿 §3 game/interact-router.ts）：
 *  - 接收地块点击意图（来自 core/view 的触摸转发）；
 *  - 根据当前选中工具 / 状态，路由到对应 services/ 用例（种植 / 浇水 / 收获 /
 *    铲除 / 建造等）。
 *
 * 约束：
 *  - 纯 TS 回调编排：禁止 import 引擎模块（'cc'）；
 *  - 只允许调用 services/，禁止直接改管理器数据（状态变更只能由 services 发起）。
 *
 * TODO(后续阶段)：实现意图路由（意图枚举随功能阶段补充）。
 *
 * 关联：core/view/map-view.ts、core/view/tile-view.ts、services/farm-service.ts
 */
