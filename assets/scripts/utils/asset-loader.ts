/**
 * [S0 占位] 资源 / Bundle 加载 Promise 封装（引擎能力封装层）。
 *
 * 职责（设计稿 §9.1）：
 *  - 将 Bundle（BUNDLE_KEYS）与资源（ASSET_KEYS）加载封装为 Promise；
 *  - 供 ui/ui-manager.ts 与各系统按需加载（分包加载时序：bundle-ui 启动即加载、
 *    bundle-tiles 进场景前、bundle-crops 首次种植前预加载……见设计稿 §9.1 表格）。
 *
 * 约束：
 *  - 【@cocos/组件 层例外标注】本文件实现时需要使用引擎资源加载 API（import 'cc'），
 *    属于显式标注的引擎能力封装；全项目只允许经本文件访问资源加载，
 *    业务调用方（ui/、组件类）不得绕过；
 *  - Bundle / 资源名只允许使用常量（BUNDLE_KEYS / ASSET_KEYS，后续阶段定义），
 *    禁止字符串散落。
 *
 * TODO(后续阶段)：实现 Promise 化加载接口。
 *
 * 关联：ui/ui-manager.ts、config/（BUNDLE_KEYS / ASSET_KEYS 常量归属后续阶段确定）
 */
