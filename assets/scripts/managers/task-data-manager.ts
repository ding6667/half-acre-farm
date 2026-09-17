/**
 * [S0 占位] 每日任务数据单例。
 *
 * 职责（设计稿 §3 managers/task-data-manager.ts）：
 *  - 持有当日任务列表与进度；
 *  - 跨天重置由 game/daily-reset.ts 触发（本管理器不自判跨天）。
 *
 * 约束：
 *  - managers/ 目录纯 TS 单例：禁止 import 引擎模块（'cc'）；
 *  - 写操作只允许被 services/ 与 game/daily-reset.ts 调用。
 *
 * TODO(后续阶段)：实现任务数据结构。
 *
 * 关联：models/task.ts、services/task-service.ts、game/daily-reset.ts、utils/storage.ts
 */
