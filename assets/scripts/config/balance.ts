/**
 * [S0 占位] 全局数值配置（设计稿附录 A）。
 *
 * 职责：
 *  - 全项目数值唯一来源：经济、水分、生长、偷花贼、地图尺寸、缩放范围等；
 *  - 逻辑层禁止魔法数字，一律 import 本文件（或对应 config 子文件）。
 *
 * 约束：
 *  - config/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 导出对象一律只读（as const / Readonly），禁止运行时修改配置。
 *
 * TODO(后续阶段)：按设计稿附录 A 填入数值并导出只读常量对象。
 *
 * 关联：game/*、services/*、core/isometric/iso-constants.ts、core/camera-controller.ts
 */
