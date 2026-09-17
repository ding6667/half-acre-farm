/**
 * [S0 占位] 水分蒸发 / 水量池 / 浇水校验。
 *
 * 职责（设计稿 §3 game/water-system.ts）：
 *  - 计算水分随时间蒸发；
 *  - 维护水量池（水井产出与上限）；
 *  - 浇水操作的合法性校验（纯函数部分，供 services 调用）。
 *
 * 约束：
 *  - game/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 蒸发速度 / 水量上限 / 浇水消耗等数值一律从 config/balance.ts 读取。
 *
 * TODO(后续阶段)：实现水分与水量池逻辑。
 *
 * 关联：game/crop-growth.ts、config/balance.ts、services/farm-service.ts
 */
