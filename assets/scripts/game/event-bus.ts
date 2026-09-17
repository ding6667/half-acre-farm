/**
 * [S0 占位] 事件总线 + GAME_EVENTS 全量枚举定义。
 *
 * 职责（设计稿 §2.5 / §3 game/event-bus.ts）：
 *  - 提供跨模块瞬时通知（约 40 行自研 EventBus：on / off / emit / once）；
 *  - 定义 GAME_EVENTS 枚举：全项目事件名只允许使用该枚举，禁止字符串散落。
 *
 * 约束：
 *  - game/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - Cocos 无响应式绑定：管理器变更后必须显式发事件，UI 订阅刷新，更新时机完全可控。
 *
 * TODO(后续阶段)：实现 EventBus 单例与 GAME_EVENTS 枚举（事件清单随各阶段功能补充，
 *                 每个事件需在枚举中登记并注释触发时机）。
 *
 * 关联：managers/*、services/*、ui/*
 */
