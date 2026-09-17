/**
 * [S0 占位] 存档模型类型（SaveData / 版本号 / 迁移入口类型）。
 *
 * 约束：
 *  - models/ 目录只定义类型与常量；存档版本号常量（SAVE_VERSION）集中在本文件；
 *  - 纯 TS：禁止 import 引擎模块（'cc'）；
 *  - 存档迁移逻辑（未来随版本演进）为 vitest 必测区。
 *
 * TODO(后续阶段)：定义 SaveData 类型与 SAVE_VERSION 常量（结构以设计稿 §4 / §11 为准）。
 *
 * 关联：utils/storage.ts、models/user.ts、models/land.ts、managers/*
 */
