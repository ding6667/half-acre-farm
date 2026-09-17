/**
 * [S0 占位] 游戏时间源 / 离线结算入口。
 *
 * 职责（设计稿 §3 game/time-system.ts）：
 *  - 提供统一的游戏时间源（可注入时钟函数，便于单测）；
 *  - 计算离线时长，作为生长推进 / 离线结算的输入。
 *
 * 约束：
 *  - game/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *    时间戳读取只允许通过注入的时钟函数，禁止直接散落调用 Date.now()。
 *
 * TODO(后续阶段)：实现时间源注入与离线时长计算。
 *
 * 关联：game/crop-growth.ts、game/daily-reset.ts、utils/date-utils.ts
 */
