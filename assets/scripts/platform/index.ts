/**
 * 平台适配层 —— 入口与切换工厂（S0 交付）。
 *
 * 使用约定：
 *  - 业务层只允许 `import { getPlatformAdapter } from '../platform'`（或对应相对路径），
 *    禁止散落引用具体适配器实现类；
 *  - 后续阶段接入微信小游戏时：新增 platform/wechat-adapter.ts（使用 wx.* 全局对象，
 *    不 import 引擎模块），并仅在引导层启动阶段调用一次 setPlatformAdapter()；
 *    业务代码零改动。
 */
import { NullPlatformAdapter } from './null-adapter';
import type { IPlatformAdapter } from './types';

// 对外只导出契约与 Null 实现，不导出未来的真实平台实现细节
export { NullPlatformAdapter } from './null-adapter';
export type { IPlatformAdapter, PlatformSystemInfo } from './types';

/** 当前生效的平台适配器；默认 Null（全部能力安全降级） */
let currentAdapter: IPlatformAdapter = new NullPlatformAdapter();

/** 获取当前平台适配器（业务层唯一入口） */
export function getPlatformAdapter(): IPlatformAdapter {
  return currentAdapter;
}

/**
 * 注册平台适配器。
 *
 * 约定：仅允许引导层（后续阶段的启动用例）在启动阶段调用一次；
 * 重复调用属于编程错误，本函数不负责去重保护（由调用方自律）。
 */
export function setPlatformAdapter(adapter: IPlatformAdapter): void {
  currentAdapter = adapter;
}
