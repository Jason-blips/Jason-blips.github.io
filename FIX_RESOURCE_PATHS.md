# 修复资源路径问题 - 重要说明

## 问题
控制台显示 Mixed Content 和 CORS 错误，因为资源使用了绝对 URL（`http://jiangluo.uk/`）而不是相对路径。

## 已完成的修复
已修改 `_includes/base_path` 使其始终返回相对路径。

## 必须执行的步骤

### 1. 停止 Jekyll 服务器
如果 Jekyll 正在运行，按 `Ctrl+C` 停止它。

### 2. 清除 Jekyll 构建缓存
```bash
bundle exec jekyll clean
```

或者手动删除 `_site` 文件夹（如果存在）。

### 3. 重新构建并启动服务器
```bash
bundle exec jekyll serve
```

### 4. 清除浏览器缓存
**非常重要！** 浏览器可能缓存了旧的 HTML。

#### Chrome/Edge:
1. 按 `F12` 打开开发者工具
2. 右键点击刷新按钮
3. 选择"清空缓存并硬性重新加载"
4. 或者按 `Ctrl+Shift+Delete`，选择"缓存的图片和文件"，点击"清除数据"

#### Firefox:
1. 按 `Ctrl+Shift+Delete`
2. 选择"缓存"
3. 点击"立即清除"

### 5. 验证修复
1. 打开开发者工具（F12）
2. 切换到 Network 标签
3. 刷新页面（`Ctrl+F5`）
4. 检查资源路径：
   - 应该显示为 `/assets/css/main.css`（相对路径）
   - **不应该**显示为 `http://jiangluo.uk/assets/css/main.css`
5. 检查控制台：
   - 不应该再有 Mixed Content 错误
   - 不应该再有 CORS 错误

## 如果问题仍然存在

如果执行上述步骤后问题仍然存在，请检查：

1. **确认文件已保存**：确保 `_includes/base_path` 文件已保存
2. **检查 Jekyll 输出**：查看终端输出，确认没有错误
3. **检查 HTML 源码**：在浏览器中右键 -> 查看页面源代码，搜索 `main.css`，确认路径是相对的
4. **检查服务器配置**：如果使用自定义域名，确保服务器正确配置了 HTTPS

## 技术说明

修改后的 `base_path` 现在：
- 始终返回相对路径（空字符串或 `baseurl`）
- 不包含协议（http/https）或域名
- 适用于任何域名访问
- 避免跨域和混合内容问题
