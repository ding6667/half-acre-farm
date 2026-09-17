/**
 * [S0 占位] 等距视角常量定义（TILE_W / TILE_H / MAP_COL / MAP_ROW / 投影比例）。
 *
 * 职责（设计稿 §2.1 / §3 core/isometric/iso-constants.ts）：
 *  - 定义菱形地块的像素宽高与地图行列数；
 *  - 60° 等距投影比例系数（宽高比 2:1 基准，可配置）；
 *  - 为 grid-math 的投影 / 逆投影公式提供唯一样式来源。
 *
 * 约束：
 *  - core/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 所有数值后续必须从 config/ 读取（禁止魔法数字散落在逻辑层）。
 *
 * TODO(后续阶段)：定义并导出 TILE_W、TILE_H、MAP_COL、MAP_ROW 等常量，
 *                 初值一律取自 config/balance.ts。
 *
 * 关联：core/isometric/grid-math.ts、core/view/map-view.ts、config/balance.ts
 */
