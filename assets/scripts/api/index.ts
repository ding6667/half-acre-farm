/**
 * [S0 占位] getApi() 工厂：Mock ⇄ 远程切换点。
 *
 * 职责（设计稿 §7）：
 *  - 唯一获取 IFarmApi 实例的入口；切换实现只改本文件一处，业务代码零改动。
 *
 * 约束：
 *  - api/ 目录纯 TS：禁止 import 引擎模块（'cc'）。
 *
 * TODO(后续阶段)：实现工厂函数（MVP 默认返回 api/mock-api.ts 的 MockApi 实例）。
 *
 * 关联：api/types.ts、api/mock-api.ts、api/http-manager.ts
 */
