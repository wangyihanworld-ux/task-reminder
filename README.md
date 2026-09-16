# 时刻台 & 晷：本地事务提醒

[![tests](https://github.com/wangyihanworld-ux/task-reminder/actions/workflows/html-check.yml/badge.svg)](https://github.com/wangyihanworld-ux/task-reminder/actions/workflows/html-check.yml)

两个无需后端的中文事务提醒网页：一个适合按时间与优先级统筹关键事项，一个内置番茄钟与子任务管理。数据只保存在当前浏览器中，适合个人日常规划。

## 在线体验

- [时刻台：关键事务提醒](https://wangyihanworld-ux.github.io/task-reminder/)
- [晷：事务提醒中心](https://wangyihanworld-ux.github.io/task-reminder/%E4%BB%BB%E5%8A%A1%E6%8F%90%E9%86%92.html)

## 功能

- 新建、完成、搜索与分类事务
- 按时间、优先级和标签查看；时刻台支持手动拖拽排序
- 单次、每日、工作日和每周提醒
- 浏览器通知、闹钟弹窗与稍后提醒
- 深浅色主题、番茄钟（晷）
- JSON 导入、导出与合并备份
- 导入文件大小、任务数量、日期和枚举字段校验，避免异常备份污染本地数据

## 本地运行

这是一个纯静态项目，无需安装依赖。直接在浏览器打开任一 HTML 文件即可：

- `时刻台-任务闹钟提醒.html`
- `任务提醒.html`

如需运行自动化检查：`npm test`。

如需使用浏览器通知，请通过本地 HTTP 服务或 HTTPS 站点访问，并在页面中主动允许通知权限。

## 数据与隐私

事务、主题和番茄钟数据储存在浏览器 `localStorage`，不会由本项目上传至服务器。导出的 JSON 备份可能包含个人待办与备注，请自行妥善保存；清除浏览器站点数据会一并清除本地事务。

## 部署

项目已发布到 GitHub Pages。根目录的 `index.html` 会自动跳转至 `时刻台-任务闹钟提醒.html`；`任务提醒.html` 保持原文件名，可通过上方链接直接访问。也可部署到任意支持静态文件的托管服务。

## 项目结构

```text
.
├── 时刻台-任务闹钟提醒.html  # 时刻台主页面
├── 任务提醒.html              # 晷：事务提醒中心
└── .github/workflows/         # 静态页面基础检查
```

## 开源许可

暂未添加许可证。若计划接受复用或协作，建议补充 `MIT License`。
