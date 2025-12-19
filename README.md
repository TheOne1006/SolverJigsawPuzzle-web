# Solver Jigsaw Puzzle Web

这是一个用于拼图助手的 PWA 应用，这里主要包含三个页面，基于 Ionic 的 app。

- 界面 UI 接近原生 APP UI
- 支持 theme: default、dark theme
- 支持 iOS 和 Android 样式

## 技术栈

基于 package.json 的分析，以下是项目主要使用的技术栈：

13→- **前端框架**：React 19.0.0
14→- **UI 框架**：@ionic/react 8.5.0
15→- **路由**：react-router 5.3.4
16→- **图标**：ionicons 7.4.0
17→- **移动端支持**：@capacitor/core 7.4.3
18→- **构建工具**：Vite 5.2.0（包含 PWA 支持 via vite-plugin-pwa）
19→- **类型检查**：TypeScript 5.1.6
20→- **测试框架**：Vitest、Cypress、@testing-library
21→- **代码检查**：ESLint

## 相关页面

### 隐私政策页面 `Privacy`

- 解析 markdown 文件 构建对应的 html

### 服务条款页面 `Terms`

- 解析 markdown 文件 构建对应的 html

### 智能客服聊天页面 `Support`

- 类似聊天对话，支持图片发送 提问
- 根据 api 返回 信息

## 打包 PWA 

### 前置条件

确保项目已正确配置 PWA 相关文件：

- `public/manifest.json` - PWA 应用清单
- `index.html` 中引用了 manifest 文件
- Service Worker 配置（通过 Vite 自动生成）

### 安装 PWA 插件

```bash
npm install vite-plugin-pwa --save-dev
```

### 配置 vite.config.ts

在 `vite.config.ts` 中添加 PWA 插件配置：

```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({...})
```

### 构建命令

```bash
# 开发模式
yarn dev

# 构建生产版本
yarn build

# 预览构建结果
yarn preview
```

### PWA 部署步骤

1. **构建项目**

   ```bash
   npm run build
   ```
2. **PWA 功能验证**
   - 打开浏览器开发者工具
   - 切换到 Application/应用程序 标签
   - 检查 Service Worker 是否正常注册
   - 检查 Manifest 配置是否正确
   - 测试离线功能

3. **部署到服务器**
   - 将 `dist` 目录内容上传到 web 服务器
   - 确保服务器支持 HTTPS（PWA 要求）
   - 配置正确的 MIME 类型

### PWA 特性

- ✅ 离线访问支持
- ✅ 桌面/移动端安装
- ✅ 响应式设计
- ✅ 原生 App 体验
- ✅ 自动更新机制

### 图标要求

确保在 `public` 目录中包含以下图标：

- `favicon.png` (64x64)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

### 测试 PWA

1. 使用 Chrome DevTools 的 Lighthouse 审计
2. 测试离线功能
3. 测试安装提示
4. 验证在不同设备上的显示效果
