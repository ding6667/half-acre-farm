/**
 * [S0 占位] 经济用例编排：商店购买 / 卖花 / 建筑升级。
 *
 * 职责（设计稿 §3 services/economy-service.ts）：
 *  - 金币扣减与入账、背包 / 地块状态变更的用例编排；
 *  - 价格与数量一律读取 config/shop-items.ts、config/buildings.ts、config/balance.ts。
 *
 * 约束：
 *  - services/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 状态变更只能由 services 发起；事件名只使用 GAME_EVENTS 枚举。
 *
 * TODO(后续阶段)：实现购买 / 卖花 / 升级用例。
 *
 * 关联：managers/user-data-manager.ts、managers/land-data-manager.ts、
 *      config/shop-items.ts、config/buildings.ts、api/index.ts（后端预留）
 */
