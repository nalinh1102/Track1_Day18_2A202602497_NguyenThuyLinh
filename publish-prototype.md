# Đưa prototype lên GitHub Pages

## Các file đã sẵn sàng
Mở `index.html` ở thư mục gốc để chạy thử offline. File này mở prototype ở `prototype/index.html`; có thể chọn A/B/C bằng các nút đầu trang.

Gói `prototype-upload.zip` chứa đúng các file cần xuất bản:

```text
index.html
.nojekyll
prototype/
  index.html
  style.css
  app.js
```

## Tải lên repository
1. Giải nén `prototype-upload.zip` vào một thư mục riêng.
2. Mở https://github.com/nalinh1102/Track1_Day18_2A202602497_NguyenThuyLinh.
3. Chọn **Add file → Upload files** tại thư mục gốc repo.
4. Kéo `index.html`, `.nojekyll` và cả thư mục `prototype` sau giải nén vào khu vực tải lên. Không tải file ZIP nguyên khối; giữ nguyên cấu trúc thư mục.
5. Chọn **Commit changes**.
6. Trong **Settings → Pages**, chọn **Deploy from a branch**, nhánh `main`, thư mục **/(root)** và **Save**, nếu chưa thiết lập.
7. Đợi GitHub Pages triển khai xong rồi mở các link bên dưới. Thử ở cửa sổ ẩn danh và bấm A/B/C, trợ giúp, đổi hướng, quay lại và reset.

## Link sau khi triển khai
- Trang gốc: https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/
- A: https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/?option=A
- B: https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/?option=B
- C: https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/?option=C

## Trạng thái
Các file được chuẩn bị trong workspace. Kiểm tra cú pháp và logic đã qua, gồm recovery quay về đúng màn hình trước. Chưa kiểm thử trực quan vì không có trình duyệt kết nối. GitHub connector đọc được README nhưng thao tác tạo file trả lỗi 403 `Resource not accessible by integration`; chưa có file nào được xuất bản trong lần thử này.

Gói này chỉ xuất bản prototype. Các tài liệu Day 18 trong repo local vẫn cần tải/cập nhật lên GitHub riêng khi hoàn tất dữ liệu bài nộp.
