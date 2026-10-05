# AI Support Log — Nguyễn Thùy Linh

## Đính chính nguồn theo thông tin mới nhất của Linh
- Linh xác nhận Practice Notes Thuý/Duyên, Parking Lot tám ý tưởng và P1/P2/P3 thuộc bộ mô phỏng. Những dòng “test thật” trong lịch sử log là xác nhận cũ, đã được thay thế; không dùng để coi bài đã có ba phiên thực tế.
- Ngày 01–03/10/2026 và persona ngoài nhóm là thông tin mô phỏng. Tên hành động ghi gần nghĩa, không phải exact UI labels.
- Linh cung cấp reflection tự viết và xác nhận nhóm chốt Next Change. AI đưa nguyên nội dung reflection vào bài, ghi quyết định dựa trên mô phỏng, không tạo evidence thật.
- Kiểm tra bản công khai: trang gốc, prototype HTML, CSS và JS trả HTTP 200; logic A/B/C và recovery đã qua. Chưa kiểm thử trực quan bằng trình duyệt.
- Báo cáo đã đồng bộ bằng Git trên máy trước đó; lỗi 403 chỉ thuộc connector. Lịch sử “chưa ghi lên GitHub” bên dưới mô tả trạng thái ở thời điểm đó.

## Chuẩn bị cập nhật báo cáo lên GitHub sau khi xuất bản
- Ảnh người dùng cung cấp xác nhận GitHub Pages báo site đã live, cấu hình `main / (root)`.
- Cập nhật README với link công khai trực tiếp A/B/C; cập nhật trạng thái prototype. Không coi thông báo triển khai là kiểm tra mọi thao tác giao diện.
- Thử cập nhật README qua connector: lỗi 403 `Resource not accessible by integration`; chưa ghi báo cáo lên GitHub. Đóng gói báo cáo để người dùng tải lên thủ công.
- Các mục reflection, ngày/bối cảnh test, xác nhận ngoài nhóm, bản test, nguồn Day 17 và Next Change chung vẫn giữ đúng trạng thái chờ.

## Phần tôi kiểm tra và chỉnh sửa từ AI — nội dung Linh tự cung cấp

AI hỗ trợ tôi phân tích đề bài, đề xuất ba solution mechanism, xây dựng cấu trúc Human–AI Decision Table và tạo nội dung mẫu cho prototype.

Tôi đối chiếu các đề xuất với yêu cầu chính thức của Day 18 và evidence từ repo Day 17 trước khi sử dụng.

Tôi không sử dụng AI để thay thế quyết định cuối cùng về phân công nhóm hoặc dữ liệu kiểm thử thực tế.

Khi xây dựng prototype, tôi kiểm tra lại nội dung, luồng nút bấm và recovery để đảm bảo ba option không chỉ khác giao diện mà khác thực sự về cơ chế Human–AI interaction.

Phần này xác nhận hoạt động kiểm tra do Linh mô tả; chưa có ví dụ cụ thể về nội dung đã sửa hoặc bác bỏ. Các mục chờ trong log bên dưới ghi trạng thái ở từng bước trước đó, không phải yêu cầu viết lại phần đã cung cấp.

## Phiên chuẩn bị 05/10/2026
- Công cụ: Codex trong phiên chat này.
- Mục đích: đọc yêu cầu Day 18, đối chiếu repo, chuẩn bị tài liệu và prototype A/B/C.
- Đầu vào: đề bài Bai ngay 18 .txt; README Day 17; conversation guide; ghi chú P1; design sheet sẵn có.
- Kết quả AI tạo: README Day 18; bổ sung Human–AI design; prototype HTML/CSS/JS với phản hồi dựng sẵn; test guide; mẫu feedback/tổng hợp; hướng dẫn mở.
- Dữ liệu mô phỏng: bài Gradient Descent và câu trả lời mẫu trong prototype, không phải phản hồi tester hay evidence phỏng vấn.
- Giới hạn: chưa có feedback Day 18, phân công thực tế, reflection, hai Practice Notes khác hoặc Parking Lot gốc. Các phần này để chờ dữ liệu.
- Người học tự kiểm tra/chỉnh sửa/bác bỏ: **[NGƯỜI HỌC TỰ ĐIỀN sau khi thực hiện]**.

AI không tạo fake quotes hoặc hành vi tester; không viết thay đóng góp và reflection cá nhân. Bổ sung công cụ AI khác nếu thực sự dùng. Không nhận đã tự chỉnh sửa nếu chưa làm.

## Đối chiếu tài liệu bổ sung do người dùng gửi
- Công cụ: Codex.
- Mục đích: phân loại nguồn bổ sung và kiểm tra khả năng dùng vào bài.
- Đầu vào: văn bản có nhãn DEMO/SYNTHETIC do người dùng cung cấp. Chưa biết công cụ tạo ra bản demo gốc; không nhận là dữ liệu AI tạo trong phiên này.
- Kết quả: lưu nguyên văn ở `references/user-supplied-demo.txt`; lập bảng nguồn và chỉ ra khác biệt tên nút/câu hỏi so với prototype hiện tại.
- Quyết định biên tập: không chuyển feedback mô phỏng thành quan sát thực; không coi phân công mẫu là xác nhận; giữ reflection và kết quả test thật ở trạng thái chờ.
- Phần người học tự sửa/bác bỏ: **[CHỜ NGƯỜI HỌC TỰ ĐIỀN]**.

## Cập nhật từ xác nhận trực tiếp của Linh
- Đầu vào: tin nhắn xác nhận phân công dự kiến C/A/B, các hoạt động Linh đã tham gia và trạng thái dữ liệu còn thiếu.
- Kết quả AI hỗ trợ: cập nhật README, design sheet và trạng thái nguồn; ghi hoạt động cá nhân theo danh sách Linh cung cấp, không lấy đoạn đóng góp/reflection mẫu làm sự thật.
- Phân công hiện tại: Linh C, Thuý A, Duyên B; có thể thay đổi trước khi nộp.
- Tình trạng: hai Practice Notes thật và Parking Lot gốc chưa có trong repo; ba phiên test chưa hoàn tất. Không tạo dữ liệu thay thế.
- Reflection và phần Linh tự sửa/bác bỏ AI: Linh tự viết sau khi hoàn thiện prototype và điều phối phiên test, hiện vẫn chờ.

## Tổ chức ghi chép ba phiên test sau xác nhận của người dùng
- Công cụ: Codex.
- Đầu vào: file ba phiên A/B/C và xác nhận trực tiếp “đây là test thật”.
- Kết quả: feedback Linh/P1; notes P2/P3 từ nguồn cung cấp; bảng tổng hợp, pattern/counter-evidence, đề xuất Next Change và Still Unproven; cập nhật trạng thái README.
- Cách xử lý: giữ file nguồn nguyên văn, phân biệt hành động với diễn giải; không biến việc thấy/tìm nút thành đã bấm; không suy ra mọi tester có cùng first action hoặc bỏ qua mọi evidence. Không tạo exact quotes.
- Các phần chưa biết: ngày test, bối cảnh P2/P3, xác nhận ngoài nhóm, phiên bản prototype và quyết định chung của nhóm. Không tự bổ sung. Reflection và phần người học sửa/bác bỏ vẫn do Linh tự viết.

## Cập nhật đóng góp và link công khai
- Đầu vào: đoạn đóng góp và kiểm tra AI do Linh tự viết; URL GitHub Pages do Linh cung cấp.
- Kết quả: đưa nội dung vào README/AI log, chuẩn hóa dấu xuống dòng và Markdown; giữ reflection riêng ở trạng thái chờ.
- Kiểm tra link: web không truy cập được; HTTP từ môi trường hiện tại không kết nối được. Không kết luận URL hỏng, không nhận đã xác minh link công khai hoạt động.

## Hoàn thiện prototype và chuẩn bị xuất bản
- Thêm trang gốc giữ query A/B/C, `.nojekyll` và gói file tải lên GitHub Pages.
- Sửa recovery “Quay lại bước trước” để phục hồi đúng màn hình trước nội dung ôn, gồm màn hình gợi ý hoặc tự chọn; kiểm tra logic đã qua.
- Browser runtime không có trình duyệt kết nối nên chưa kiểm thử trực quan.
- GitHub đọc được README; tạo `index.html` bị từ chối 403 `Resource not accessible by integration`. Không có file nào được ghi lên GitHub; chuẩn bị gói ZIP và hướng dẫn tải lên.
