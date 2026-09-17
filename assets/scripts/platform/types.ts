/**
 * 平台适配层 —— 类型契约（S0 交付）。
 *
 * 设计意图（设计稿 §7 后端预留 / S0 任务清单）：
 *  - 隔离微信小游戏（wx.*）等平台差异能力，游戏逻辑只依赖本接口；
 *  - S0 仅交付「类型契约 + Null 空实现」；真实平台实现于后续阶段接入
 *    （实现文件使用 wx.* 全局对象 + 最小环境声明，无需 import 引擎模块）；
 *  - 切换实现只经 platform/index.ts 的工厂入口，业务代码零改动。
 */

/** 平台系统信息（仅保留游戏会用到的精简字段，来源参考 wx.getSystemInfoSync） */
export interface PlatformSystemInfo {
  /** 平台标识：devtools / ios / android 等 */
  readonly platform: string;
  /** 窗口可用宽度（逻辑像素） */
  readonly windowWidth: number;
  /** 窗口可用高度（逻辑像素） */
  readonly windowHeight: number;
  /** 设备像素比 */
  readonly pixelRatio: number;
  /** 状态栏高度（逻辑像素，用于顶部安全区适配） */
  readonly statusBarHeight: number;
}

/**
 * 平台适配器契约。
 *
 * 实现约定（所有实现必须遵守，包括真实平台实现）：
 *  - 所有方法必须在实现内部捕获异常，禁止向外抛出；失败时返回安全默认值；
 *  - 必须保证 NullPlatformAdapter 可随时平替（同名同签名同语义）。
 */
export interface IPlatformAdapter {
  /** 适配器标识（调试与日志用）：'null' / 'wechat' / ... */
  readonly name: string;

  /** 读取平台系统信息；实现方失败时应返回可用的降级值 */
  getSystemInfo(): PlatformSystemInfo;

  /** 同步写入字符串键值；成功返回 true，失败返回 false（不抛异常） */
  setStorageSync(key: string, value: string): boolean;

  /** 同步读取字符串键值；键不存在或失败返回 null（不抛异常） */
  getStorageSync(key: string): string | null;

  /** 同步移除指定键；失败静默（不抛异常） */
  removeStorageSync(key: string): void;

  /** 短震动反馈；设备不支持时静默降级 */
  vibrateShort(): void;
}
