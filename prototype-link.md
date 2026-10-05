# Prototype A/B/C

Mở `prototype/index.html` bằng Edge/Chrome rồi chọn A/B/C. Chạy offline, không cần cài đặt hoặc API.

- [A](prototype/index.html?option=A)
- [B](prototype/index.html?option=B)
- [C](prototype/index.html?option=C)

Nếu link có query không mở trong trình đọc Markdown, mở trực tiếp file HTML rồi chọn option trên đầu trang.

Cách chạy HTTP: tại thư mục repo chạy `python -m http.server 8000`, mở `http://localhost:8000/prototype/index.html?option=A`; đổi A thành B/C. Ctrl+C để dừng.

## Link công khai nộp bài
[Mở prototype công khai](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/) — link do Linh cung cấp.

Người dùng đã tải các file prototype lên GitHub. Ảnh Settings → Pages cho thấy “Your site is live at”, cấu hình `main / (root)`. Các lỗi kết nối dưới đây là kết quả kiểm tra trước khi người dùng tải lên; chưa kiểm tra trực quan và thao tác bản công khai trong môi trường này.

Sau khi tải gói lên, có thể mở trang gốc kèm `?option=A`, `?option=B` hoặc `?option=C`; trang gốc giữ lựa chọn khi chuyển vào prototype.

Chưa xác minh truy cập được: công cụ web không truy cập được URL, yêu cầu HTTP từ môi trường hiện tại không kết nối được. Đây không phải bằng chứng site hỏng hoặc trả về 404. Cần mở trên trình duyệt/thiết bị bên ngoài trước khi nộp.

Nếu bản xuất bản giữ cấu trúc thư mục source hiện tại, các đường dẫn trực tiếp dự kiến là:

- [A](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/prototype/index.html?option=A)
- [B](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/prototype/index.html?option=B)
- [C](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/prototype/index.html?option=C)

Các đường dẫn này chưa được xác minh; nếu bản đã xuất bản đặt `index.html` ở thư mục gốc, cần dùng URL gốc kèm `?option=A/B/C` thay thế.

## Phạm vi
Ba flow có bài học → tương tác → kết quả/ôn tập; cùng context và nội dung mẫu. Có căn cứ, bất định, từ chối/đổi hướng, quay lại và reset. AI dùng phản hồi dựng sẵn. Không lưu dữ liệu tester.

Kịch bản và ghi chú facilitator: [test-guide.md](test-guide.md). Linh xác nhận đã kiểm tra nội dung, luồng nút bấm, recovery và tính thống nhất của Option C với A/B. Chưa có ghi chép riêng về kiểm tra chéo của Thuý/Duyên.

## Kiểm tra kỹ thuật đã thực hiện
`node --check prototype/app.js` đã qua. `node prototype/check-flow.cjs` đã qua các trạng thái A/B/C, ba nội dung ôn, nhánh chẩn đoán, bác bỏ, fallback, trở về và reset. Các link file nội bộ tồn tại. Đây là kiểm tra logic trong môi trường mô phỏng, chưa thay thế kiểm tra hiển thị và thao tác thực tế trên trình duyệt.
