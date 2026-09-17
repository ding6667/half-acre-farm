/**
 * [S0 占位] WorldRoot 平移缩放控制（单指拖动 / 双指缩放）（@cocos/组件 层）。
 *
 * 职责（设计稿 §3 core/camera-controller.ts）：
 *  - 单指拖拽平移地图容器（WorldRoot）；
 *  - 双指捏合缩放，限制缩放范围；
 *  - 边界约束：地图不允许被拖出可视区。
 *
 * 约束：
 *  - 【@cocos/组件 层例外】本文件后续允许 import 'cc'；
 *  - 缩放上下限、边界留白等数值必须从 config/ 读取（禁止魔法数字）。
 *
 * TODO(后续阶段)：实现组件类（@ccclass）。
 *                 编辑器挂载方式：挂载到 WorldRoot 节点（与 map-view 同节点或
 *                 父节点，具体以场景搭建阶段的节点树为准）。
 *
 * 关联：core/view/map-view.ts、config/balance.ts
 */
