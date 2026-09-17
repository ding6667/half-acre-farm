/**
 * 平台适配层 —— Null 空实现（S0 交付）。
 *
 * 用途：
 *  - S0 阶段（无游戏逻辑、无平台接入）的默认适配器：所有能力安全降级；
 *  - 保证上层（utils/storage、后续引导层）在真实平台接入前可正常编译与运行；
 *  - 亦作为单测 / 异常兜底的基准实现。
 *
 * 关于“中性值”的说明：
 *  - 下述 0 / 1 等数值是适配器契约的「单位元 / 零值」（如 pixelRatio=1 保证乘法中性），
 *    属于接口语义的一部分，不是游戏平衡数值；
 *    游戏平衡数值一律放在 config/ 目录，两者的性质不同，不违反“禁止魔法数字”约定。
 */
import type { IPlatformAdapter, PlatformSystemInfo } from './types';

/** 中性系统信息：所有数值取“不影响逻辑运算”的单位 / 零值，冻结防误改 */
const NEUTRAL_SYSTEM_INFO: PlatformSystemInfo = Object.freeze({
  platform: 'null',
  windowWidth: 0,
  windowHeight: 0,
  pixelRatio: 1,
  statusBarHeight: 0,
});

/** Null 适配器：全部能力为安全空实现，任何调用都不会抛异常 */
export class NullPlatformAdapter implements IPlatformAdapter {
  public readonly name = 'null';

  public getSystemInfo(): PlatformSystemInfo {
    return NEUTRAL_SYSTEM_INFO;
  }

  public setStorageSync(_key: string, _value: string): boolean {
    // 无平台存储可写：恒定失败，由上层封装负责降级策略
    return false;
  }

  public getStorageSync(_key: string): string | null {
    // 无平台存储可读：恒定无数据
    return null;
  }

  public removeStorageSync(_key: string): void {
    // 空实现：无平台存储可移除
  }

  public vibrateShort(): void {
    // 空实现：无震动能力
  }
}
