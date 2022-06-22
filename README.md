# unocss-preset-antd

(WIP)

## 设计之路

### Button

通过 `antd-btn-<type>-<state>` 的语法进行支持

### Typography

- Title `antd-title-{1-5}`
- Text 为 `text` 新增属性进行样式支持，为可能冲突的部分进行考虑 `text-{default | secondary | success | warning | danger | disable | mark | code | keyboard | underline | delete | strong | italic | link}`

> TODO 其他待定进行排版处理

### Divider

> 不太能支持，涉及到 DOM 的更改

### Grid

> Grid 有默认方案，可以考虑使用 shortcuts 进行平替

### Layout

> Layout.Sider 支持侧边栏样式

### Space

> 支持间距样式大小

### Affix

> 图钉是一种定位的布局

### Breadcrumb

> 可以深度整合路由，实现对组件的平替

### Dropdown
