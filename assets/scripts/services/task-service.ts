/**
 * [S0 占位] 任务用例编排：任务进度推进 / 领奖。
 *
 * 职责（设计稿 §3 services/task-service.ts）：
 *  - 订阅游戏事件驱动每日任务进度；
 *  - 领奖结算（奖励数值读取 config/daily-tasks.ts）。
 *
 * 约束：
 *  - services/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 事件名只使用 GAME_EVENTS 枚举，禁止字符串散落。
 *
 * TODO(后续阶段)：实现任务进度与领奖用例。
 *
 * 关联：managers/task-data-manager.ts、managers/user-data-manager.ts、
 *      config/daily-tasks.ts、game/event-bus.ts、game/daily-reset.ts
 */
