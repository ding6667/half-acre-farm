/**
 * [S0 占位] 商店商品配置：种子 / 道具的 id、价格、图标引用。
 *
 * 约束：
 *  - config/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 图标 / 资源引用只允许使用常量（ASSET_KEYS / BUNDLE_KEYS，后续阶段定义），
 *    禁止字符串散落。
 *
 * TODO(后续阶段)：定义商品配置表（数值从设计稿附录 A 读取）。
 *
 * 关联：services/economy-service.ts、ui/panels/*、config/balance.ts
 */
