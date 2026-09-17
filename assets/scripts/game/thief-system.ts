/**
 * [S0 占位] 偷花贼生成 / 驱赶 / 报复逻辑。
 *
 * 职责（设计稿 §3 game/thief-system.ts）：
 *  - 偷花贼出现调度与生成（由 daily-reset 触发）；
 *  - 驱赶交互结算与未驱赶时的报复结算。
 *
 * 约束：
 *  - game/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 出现概率 / 损失比例 / 驱赶冷却等数值一律从 config/balance.ts 读取。
 *
 * TODO(后续阶段)：实现偷花贼完整逻辑。
 *
 * 关联：game/daily-reset.ts、services/farm-service.ts、config/balance.ts
 */
