/**
 * [S0 占位] wx.request 的 Promise 异步封装（备用）。
 *
 * 职责（设计稿 §7）：
 *  - 统一超时 / 重试 / 错误码处理，供远程 IFarmApi 实现复用。
 *
 * 约束：
 *  - api/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 平台 API 通过 platform/ 适配层（或 wx.* 全局对象的最小环境声明）访问，
 *    禁止散落调用平台 API。
 *
 * TODO(后续阶段)：接入远程后端时实现（MVP 不使用）。
 *
 * 关联：platform/types.ts、api/types.ts、api/index.ts
 */
