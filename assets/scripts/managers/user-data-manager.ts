/**
 * [S0 占位] 玩家数据单例：金币 / 经验 / 等级 + 存档触发。
 *
 * 职责（设计稿 §3 managers/user-data-manager.ts）：
 *  - 持有运行时玩家数据（金币 / 经验 / 等级）；
 *  - 数据变更后发 GAME_EVENTS 事件并触发存档（经 utils/storage.ts）。
 *
 * 约束：
 *  - managers/ 目录纯 TS 单例：禁止 import 引擎模块（'cc'）；
 *  - 只暴露读接口与受控写接口（写接口仅供 services/ 调用），外部禁止直接改内部状态。
 *
 * TODO(后续阶段)：实现数据结构与存档触发。
 *
 * 关联：models/user.ts、models/save.ts、utils/storage.ts、game/event-bus.ts、
 *      services/economy-service.ts
 */
