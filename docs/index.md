---
layout: home

hero:
  name: "ZXManage"
  text: "程序员的项目管家"
  tagline: 集“项目管理、Git管理、代码打包、笔记管理”于一体的桌面端利器。
  image:
    src: /ip.png
    alt: ZXManage 软件界面
  actions:
    - theme: brand
      text: github下载
      link: https://github.com/Summery-xm/zxmanage/releases/download/v1.0.0/ZXManage-1.0.0-x64-Setup.exe
    - theme: brand
      text: 夸克网盘下载
      link: https://pan.quark.cn/s/9a0de1aed236
    - theme: alt
      text: 使用文档
      link: /document

features:
  # --- 第一行：核心管理（原有）---
  - icon: 📦
    title: 多技术栈统一管理
    details: 无缝兼容 Vue、React、Uni-app、Java、微信小程序、PHP、Node、Cocos 等主流技术栈项目。
  - icon: 🚀
    title: 灵活的项目初始化
    details: 支持从零新建（可选模板或空项目）与外部导入。本地直接导入，或通过 Git URL 克隆导入。
  - icon: 🔄
    title: 简易 Git 可视化管理
    details: 内置轻量级 Git 图形界面，支持提交、拉取、推送及分支管理，无需记忆复杂命令。

  # --- 第二行：构建与部署（原有）---
  - icon: 🛠️
    title: 内置构建与打包
    details: 针对 Vue、React、Node 项目提供一键打包功能，无需繁琐的命令行操作，构建结果一目了然。
  - icon: 🌐
    title: 本地 Nginx 一键部署
    details: 独家支持将打包后的前端/Node项目一键托管至本地 Nginx，快速生成预览链接，联调演示更高效。
  - icon: ☁️
    title: 产物直传服务器
    details: 支持将打包后的产物直接提交至远程服务器，无需额外连接 FTP/SFTP 工具，实现真正的“打包即发布”。

  # --- 第三行：辅助工具（原有）---
  - icon: 📝
    title: 项目级笔记与文档
    details: 为每个项目配备独立的笔记功能，记录 API 文档、开发思路或 Bug 列表，知识沉淀不丢失。
  - icon: 🗂️
    title: 文件与代码管理
    details: 内置轻量级文件管理器，快速浏览项目结构；集成基础代码查看功能，无需切换 IDE。
  - icon: 🔗
    title: Git 项目快速导入
    details: 支持通过 Git 地址直接克隆项目到本地工作区，省去手动下载解压的繁琐步骤。
---


<h2 style="text-align: center;">关于我们 · ZXManage</h2>

<div style="background:#f8f9fa; border-radius:12px; padding:2rem; margin-top:1.5rem;">

<div style="background-color: #fff9f0; border: 1px solid #ffcc99; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
  <div style="display: flex; align-items: center; gap: 0.8rem; font-size: 1.2rem; font-weight: 600; color: #d48806;">
    <span>💡</span>
    <span>产品定位</span>
  </div>
  <p style="margin: 0.8rem 0 0 0; line-height: 1.8; color: #333;">
    专为开发者打造的本地项目全生命周期管理工具，解决多项目混杂、英文目录难识别、开发工具碎片化痛点，实现项目统一管控、高效管理。
  </p>
</div>

### 🎯 我们的产品初衷
身为开发者，我们深知日常开发里一个高频又棘手的痛点：为了规避代码运行报错、服务启动失败、路径兼容问题，项目代码目录几乎全是英文命名。短时间内还能清晰记住每个目录对应的项目用途、业务场景、技术细节，可随着经手的项目越来越多，Vue、React、Java、小程序、PHP等各类技术栈项目堆在一起，时间一长，看着满屏纯英文目录，常常想不起这个项目到底是做什么的、对应哪个业务、有哪些关键配置，只能一遍遍翻找代码、翻看零散笔记，既耽误时间，又打乱开发节奏。再加上日常开发还要来回切换文件管理器、代码工具、服务启动终端、笔记软件，流程繁琐又割裂。于是我们打造了ZXManage，初衷很简单：让每一个英文命名的项目都有清晰归属，把零散的开发管理环节整合到一起，不用再费力回忆项目信息，一站式管好所有本地项目。

### ✨ 核心价值与功能亮点
1. **破解英文目录遗忘痛点，项目一目了然**
告别对着英文代码目录猜项目的尴尬，通过ZXManage统一收纳管理所有项目，直观标注项目名称、业务用途、技术栈，每一个项目的核心信息清晰可见，再也不用靠记忆硬扛，快速定位目标项目，大幅提升开发前期准备效率。

2. **多技术栈全覆盖，全类型项目统一管理**
全面兼容Vue、React、Uni-app、Java、微信小程序、PHP、Node.js、Cocos等主流开发技术栈，支持本地已有项目一键导入，不管是前端、后端还是跨端项目，都能集中管理，告别多平台多工具分散管理的混乱。

3. **全流程功能闭环，告别多工具切换**
围绕项目开发全流程，整合四大核心模块，一站式完成所有管理操作，不用来回跳转各类软件：
- 文件管理模块：可视化管理项目文件与文件夹，支持新建、上传、重命名、删除、快速定位系统目录，本地资源随心管控
- 代码管理模块：树形结构浏览代码目录，支持文本代码在线查看、简易编辑，搭配语法高亮，快速查阅代码内容
- 本地服务运行模块：基于配置自动生成服务列表，一键完成服务启动、重启、停止，实时查看服务状态与访问地址，规避路径报错问题
- Markdown笔记模块：内置专业MD编辑器，支持实时预览，笔记以.md文件本地化存储，可详细记录项目用途、业务逻辑、踩坑心得、配置要点，彻底解决项目信息遗忘问题

4. **本地私有化存储，数据安全可控**
所有项目信息、文件、笔记均保存在本地指定目录，全程不依赖云端、不上传任何隐私数据，项目源码、核心配置、开发笔记完全由自己掌控，兼顾数据安全与使用便捷性。

5. **原生桌面体验，轻量化易上手**
基于Electron+React+Vite+TypeScript技术栈构建，拥有原生桌面应用的流畅响应速度，界面简洁干净，操作逻辑贴合开发者日常习惯，无冗余复杂功能，轻量化运行，适配各类开发场景。

### 🛠 核心技术栈
采用现代化前端技术体系，兼顾跨平台兼容性、运行性能与代码稳定性：
- 跨平台框架：Electron，实现Windows端原生桌面体验
- 界面构建：React，打造流畅交互界面
- 构建工具：Vite，极速编译，启动快、运行流畅
- 开发语言：TypeScript，强类型约束，保障工具稳定可靠

### 🎈 产品理念
我们坚持“实用至上，聚焦痛点”的理念，不做冗余功能堆砌，不搞复杂操作流程，只专注解决开发者本地项目管理的核心痛点，从日常开发的真实场景出发，打磨每一处功能细节，让ZXManage真正成为省心、好用、接地气的开发辅助工具。

### 🤝 公测与反馈
当前ZXManage处于全新公测版本，我们仍在持续优化功能、修复细节、提升使用体验。欢迎各位开发者在使用过程中提出宝贵的建议与问题反馈，我们会持续迭代优化，让工具越来越贴合大家的开发需求。
</div>

<div style="max-width: 1200px; margin: 60px auto;text-align: center;">
  <h2 style="margin-bottom: 32px;">联系我们</h2>
  <div style="display: inline-block; background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
    <img src="/group-qrcode.jpg" alt="ZXManage交流群" style="width: 188px;display:block;margin:0 auto;">
    <p style="font-size: 16px; color: #444;">
      扫码加入QQ交流群，一起交流反馈、共同完善工具
    </p>
  </div>
</div>