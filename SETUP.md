# 快速设置指南

## 步骤1：创建Formspree账户

1. 访问 [Formspree](https://formspree.io/)
2. 点击"Sign Up"注册账户
3. 验证您的邮箱地址

## 步骤2：创建表单

1. 登录Formspree后，点击"New Form"
2. 给表单起个名字，比如"GLP-1 Legal Consultation"
3. 复制生成的表单端点URL（类似：`https://formspree.io/f/xpzgwqzg`）

## 步骤3：更新HTML文件

在以下文件中，将表单的action属性更新为您的Formspree端点：

- `index.html` (第972行)
- `legal-support-services.html` (第715行)

将：
```html
<form action="https://formspree.io/f/xpzgwqzg" method="POST">
```

替换为您的实际端点：
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 步骤4：配置邮件通知

1. 在Formspree仪表板中，点击您的表单
2. 进入"Settings"标签
3. 在"Email Notifications"部分，添加您的邮箱：`shenjunb@gmail.com`
4. 保存设置

## 步骤5：测试

1. 打开网站
2. 填写表单并提交
3. 检查您的邮箱是否收到通知

## 注意事项

- Formspree免费版每月限制100次提交
- 如果需要更多提交次数，可以考虑升级到付费版
- 确保在Formspree中正确配置了收件人邮箱 