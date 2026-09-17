/**
 * [S0 占位] 作物生长推进 / 成熟判定 / 枯萎判定。
 *
 * 职责（设计稿 §3 game/crop-growth.ts）：
 *  - 依据经过时长推进作物生长阶段；
 *  - 判定成熟、枯萎状态；
 *  - 纯函数实现，可脱离引擎在 Node 环境（vitest）单测。
 *
 * 约束：
 *  - game/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 生长时长 / 阶段数 / 枯萎阈值等数值一律从 config/crops.ts 读取。
 *
 * TODO(后续阶段)：实现生长推进与判定逻辑。
 *
 * 关联：game/time-system.ts、game/water-system.ts、managers/land-data-manager.ts、
 *      services/farm-service.ts、config/crops.ts
 */
