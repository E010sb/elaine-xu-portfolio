# Elaine Xu 个人网站重建版

这是根据线上生产环境还原出的可编辑版本。项目刻意保持为静态 HTML/CSS/JavaScript，避免被原生产包的 Next.js 压缩代码绑住，方便后续直接修改内容和样式。

## 预览

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:4173
```

如果你只是想快速看页面，也可以直接打开 `index.html`。推荐用本地服务预览，因为浏览器对本地 ES module 的限制不完全一致。

## 常改文件

- `src/main.js`：页面结构、服务、FAQ、联系邮箱、交互逻辑。
- `src/data/projects.js`：作品列表、作品详情文案、项目链接、远程详情图。
- `src/styles.css`：字体、布局、颜色、响应式、动效。
- `src/marks.js`：Elaine Xu 字标和从原站提取的星形 SVG。
- `public/images/`：已保存到本地的作品缩略图和本人照片。
- `public/fonts/`：从原站生产包提取的字体文件。

## 还原范围

已还原：

- 首屏大字标、主文案、导航和按钮样式。
- Work 作品列表、悬浮缩略图、作品详情弹窗。
- Services、FAQ、About、Contact/Footer。
- 原站字体、浅蓝/深色主题、按钮阴影、12 栅格风格、基础入场动效。

说明：

- 作品列表缩略图和本人照片已本地化。
- 作品详情里的第二张及后续大图仍使用原站 DigitalOcean CDN 地址，因为生产首页只直接暴露了缩略图；数据已保留在 `src/data/projects.js`，后续可逐步下载替换成本地路径。
- 原站首屏使用 Spline 3D 场景；这里用本地 canvas 动效复刻视觉氛围，避免依赖外部 Spline 运行时。
