# COLMO 空气场景

纯静态页面，可直接部署到 GitHub Pages。

## 本地预览

在仓库目录执行：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 添加场景详情图

1. 将图片放入 `assets/scenes/`，例如 `assets/scenes/open-window.jpg`。
2. 在 `app.js` 的 `SCENE_TARGETS` 中填入：

```js
"open-window": "assets/scenes/open-window.jpg"
```

用户点击已配置图片的场景后会进入 `scene.html` 显示图片；没有图片的场景只会变色、不跳转。点击左上角“返回空气场景”即可回主页，已经访问的卡片会保留高亮。

## GitHub Pages

在 GitHub 仓库 **Settings → Pages** 中，将发布来源设为 `Deploy from a branch`，选择 `main` 分支和 `/ (root)` 文件夹即可。
