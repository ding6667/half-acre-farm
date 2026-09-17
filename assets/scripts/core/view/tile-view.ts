/**
 * [S0 占位] 单地块视图：显示状态 + 点击转发（@cocos/组件 层）。
 *
 * 职责（设计稿 §3 core/view/tile-view.ts）：
 *  - 根据地块数据（锁定 / 空地 / 种植中 / 成熟 / 枯萎）切换 Sprite 表现；
 *  - 点击事件转发给 map-view / interact-router，不直接改数据；
 *  - 订阅 GAME_EVENTS 相关事件做自身刷新（事件名见 game/event-bus.ts）。
 *
 * 约束：
 *  - 【@cocos/组件 层例外】本文件后续允许 import 'cc'；
 *  - 表现层只订阅事件刷新，禁止发起状态变更（状态变更只能由 services 发起）。
 *
 * TODO(后续阶段)：实现 Tile 组件类（@ccclass）。
 *                 编辑器挂载方式：挂载到地块预制体（Tile_Grass / Tile_Soil /
 *                 Tile_Locked 等）根节点，预制体由地块搭建阶段制作。
 *
 * 关联：core/view/map-view.ts、models/land.ts、game/event-bus.ts
 */
