/**
 * [S0 占位] 时间格式化 / 跨天判定工具（纯函数）。
 *
 * 职责：
 *  - 本地自然日 key 生成（如 yyyy-MM-dd）、跨天判定、时长格式化；
 *  - 纯函数、可脱离引擎单测（vitest 必测区之一）。
 *
 * 约束：
 *  - utils/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 只做纯计算，不持有状态；时间戳一律由调用方传入。
 *
 * TODO(后续阶段)：实现工具函数。
 *
 * 关联：game/time-system.ts、game/daily-reset.ts
 */
