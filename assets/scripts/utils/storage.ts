/**
 * [S0 占位] localStorage 封装：try/catch、容量保护、双 key 备份。
 *
 * 职责（设计稿 §11.3）：
 *  - 同步存取的统一入口；读写异常兜底；
 *  - 主备双 key 写入与恢复，防单点损坏；
 *  - 容量写入失败（配额超限）时的降级策略。
 *
 * 约束：
 *  - utils/ 目录纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 底层平台能力一律经 platform/ 适配层访问
 *    （getPlatformAdapter().setStorageSync 等），禁止直接依赖引擎 sys.localStorage
 *    或散落调用 wx.*；
 *  - 存档结构使用 models/save.ts 的类型，序列化 / 反序列化集中在本文件。
 *
 * TODO(后续阶段)：实现封装与双 key 备份（存档迁移为 vitest 必测区）。
 *
 * 关联：platform/index.ts、models/save.ts、managers/*
 */
