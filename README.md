# Math 2A - Digital Reader & Apple Pencil Note App

Ứng dụng Web / PWA đọc và viết sách toán Math 2A (112 trang) hỗ trợ chuyên sâu cho iPad và Apple Pencil, hoạt động 100% Offline.

---

## ✨ Tính Năng Nổi Bật

- ✍️ **Apple Pencil & iPad Stylus:** Nhận diện cảm ứng lực (Pressure Sensitivity), chống chạm lòng bàn tay (Palm Rejection) và làm mượt nét mực (Smooth Quadratic Ink Curve).
- 🛠️ **Bộ công cụ vẽ:** Bút viết (Pen), Bút dạ quang trong suốt (Highlighter), Tẩy thông minh (Eraser), Hoàn tác/Làm lại (Undo/Redo).
- 💾 **Lưu trữ Offline qua IndexedDB:** Tự động lưu nét vẽ cho từng trang sách với dung lượng không giới hạn.
- 📱 **Hỗ trợ PWA (Progressive Web App):** Cài đặt trực tiếp lên Màn hình chính iPad như ứng dụng độc lập không có thanh URL.
- 📑 **Quản lý học tập:** Đánh dấu trang (Bookmarks), ghi chú văn bản theo trang (Notes), thanh thu nhỏ 112 trang (Thumbnails).

---

## 🚀 Hướng Dẫn Upload Lên GitHub & Bật GitHub Pages

### 1. Đẩy code lên GitHub (Git Bash hoặc Terminal)
```bash
git init
git add .
git commit -m "Initial commit: Math 2A Reader App"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
git push -u origin main
```

### 2. Kích hoạt GitHub Pages (để tạo link mở trên iPad)
1. Vào repository trên GitHub > Chọn tab **Settings**.
2. Chọn mục **Pages** ở thanh menu bên trái.
3. Tại phần **Build and deployment > Source**: Chọn `Deploy from a branch`.
4. Tại phần **Branch**: Chọn `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
5. Đợi khoảng 1-2 phút, GitHub sẽ cấp cho bạn một đường link có dạng:
   `https://<tai-khoan-cua-ban>.github.io/<ten-repo>/`

---

## 📲 Cài Đặt Vào iPadOS (Sử Dụng Toàn Màn Hình & Offline)

1. Mở trình duyệt **Safari** trên iPad và truy cập vào đường link GitHub Pages của bạn.
2. Nhấn vào biểu tượng **Chia sẻ (Share)** ở góc trên bên phải Safari (hình vuông có mũi tên chỉ lên).
3. Chọn **"Thêm vào Màn hình chính" (Add to Home Screen)**.
4. Chạm vào icon **Math 2A** trên màn hình chính iPad để mở ứng dụng toàn màn hình không có thanh trình duyệt, hoạt động ngay cả khi tắt Wi-Fi.
