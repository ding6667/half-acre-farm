/**
 * [S0 占位] 面板栈管理：open / close，Prefab 实例化（@cocos/组件 层）。
 *
 * 职责（设计稿 §2.2 / §3 ui/ui-manager.ts）：
 *  - 维护面板打开栈（层级、互斥、返回关闭）；
 *  - 动态实例化面板 Prefab 到 Canvas 下的 PanelLayer；
 *  - 所有 UI（商店、任务面板、按钮）由 Prefab 组成，运行时经本管理器装载。
 *
 * 约束：
 *  - 【@cocos/组件 层例外】本文件后续允许 import 'cc'；
 *  - Prefab / Bundle 名称只允许使用常量（ASSET_KEYS / BUNDLE_KEYS，后续阶段在
 *    config/ 或 utils/ 定义），禁止字符串散落。
 *
 * TODO(后续阶段)：实现面板栈与 Prefab 加载（经 utils/asset-loader.ts）。
 *
 * 关联：utils/asset-loader.ts、ui/panels/*、ui/hud/*
 */
