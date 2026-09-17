/**
 * [S0 占位] 地块数据单例：地块数组 / 作物实例 / 建筑等级。
 *
 * 职责（设计稿 §3 managers/land-data-manager.ts）：
 *  - 持有全部地块运行时状态（解锁 / 种植 / 建筑等级）；
 *  - 提供读写接口；变更后发事件触发视图刷新与存档。
 *
 * 约束：
 *  - managers/ 目录纯 TS 单例：禁止 import 引擎模块（'cc'）；
 *  - 写操作只允许被 services/ 调用；UI / 视图层只读。
 *
 * TODO(后续阶段)：实现地块数据结构与读写接口。
 *
 * 关联：models/land.ts、models/crop.ts、models/building.ts、models/save.ts、
 *      services/farm-service.ts、game/event-bus.ts
 */
