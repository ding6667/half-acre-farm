/**
 * [S0 占位] 农场用例编排：种植 / 浇水 / 收获 / 铲除。
 *
 * 职责（设计稿 §3 services/farm-service.ts）：
 *  - 编排 game/ 领域系统与 managers/ 数据，完成农场核心用例；
 *  - 状态变更的唯一发起入口之一（UI 与视图层禁止直接改数据）。
 *
 * 约束：
 *  - services/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 校验不通过时通过事件 / 返回值通知表现层，不抛引擎异常；
 *  - 事件名只使用 GAME_EVENTS 枚举（game/event-bus.ts）。
 *
 * TODO(后续阶段)：实现种植 / 浇水 / 收获 / 铲除用例。
 *
 * 关联：managers/land-data-manager.ts、managers/user-data-manager.ts、
 *      game/crop-growth.ts、game/water-system.ts、game/interact-router.ts
 */
