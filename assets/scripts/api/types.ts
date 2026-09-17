/**
 * [S0 占位] 后端接口层类型：ApiResponse<T> / IFarmApi。
 *
 * 职责（设计稿 §7）：
 *  - 统一响应包装类型与农场 API 接口签名；
 *  - Mock 与未来云开发 / REST 实现同签名，切换只改 api/index.ts 工厂一处。
 *
 * 约束：
 *  - api/ 目录纯 TS：禁止 import 引擎模块（'cc'）。
 *
 * TODO(后续阶段)：定义 ApiResponse<T> 与 IFarmApi 接口。
 *
 * 关联：api/mock-api.ts、api/http-manager.ts、api/index.ts
 */
