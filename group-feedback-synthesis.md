# Group Feedback Synthesis — Matcha

Ba phiên thực tế theo xác nhận mới nhất của Linh ngày 06/10/2026; thông tin mô phỏng trước đó được đính chính là nhầm lẫn. Bảng tổng hợp bám vào ghi chép từng phiên, phân biệt hành vi và diễn giải.

- Ngày test: P1 01/10/2026; P2 02/10/2026; P3 03/10/2026.
- P1: sinh viên AI/ML, vướng ký hiệu/công thức, dùng ChatGPT/Google.
- P2: sinh viên học qua slide/video, đọc lại và tìm cách diễn đạt khác bằng AI.
- P3: sinh viên chưa biết ôn gì trước, chuyển nhiều nguồn để tìm hiểu.
- Cả ba tester ngoài nhóm Matcha, mỗi người thử đủ A/B/C theo xác nhận Linh.
- Tên nút trong nguồn ghi theo nghĩa hành động, không phải nguyên văn UI; không trình bày các tên này như nguyên văn label UI hoặc exact quote.

| Tester | Điều phối | Thiết bị | Thứ tự | Ghi chép |
|---|---|---|---|---|
| P1 | Nguyễn Thùy Linh | Laptop | A–B–C | [Feedback cá nhân](prototype-feedback-note.md) |
| P2 | Trần Thị Thuý | Laptop | B–C–A | [Note P2](interview/day18-feedback-thuy.md) |
| P3 | Lê Thị Duyên | Laptop | C–A–B | [Note P3](interview/day18-feedback-duyen.md) |

| Nội dung | P1 | P2 | P3 | Pattern / điểm đối lập |
|---|---|---|---|---|
| Hành động ghi nhận | A bấm trợ giúp; B chọn câu trả lời; C chọn Gradient | A bấm trợ giúp; C chọn giải thích khác | C đọc ba lựa chọn; chưa nêu nút đầu tiên được bấm | Chưa đủ để kết luận cả ba có cùng first action |
| Major Breakdown | A dừng sau gợi ý; C khó tự chọn | B được mô tả là sốt ruột vì thêm bước | C được nhận xét khó chọn khi chưa biết nguyên nhân | Diagnostic thêm bước; tự chọn có thể tăng gánh nặng |
| Evidence Checking | Đọc căn cứ A và giải thích B | Bỏ qua evidence ban đầu ở A | Đọc kỹ kết quả B | Cách xem evidence khác nhau; không suy ra P2 bỏ qua evidence ở mọi option |
| Control Taken | Thử bác bỏ A; dùng gợi ý AI C | Tìm giải thích khác A; chọn giải thích khác C | Tìm đổi chẩn đoán A; dùng chẩn đoán lại B | Có hành vi tìm hoặc sử dụng recovery; phân biệt tìm nút với đã bấm |
| Selected Option | B | C | B | Hai lựa chọn B, một C trong ba phiên; không đại diện số đông |
| Key Trade-off | Thêm bước để cảm thấy có căn cứ | Tự quyết nhiều hơn để giữ kiểm soát | Chấp nhận quy trình dài hơn A | Tốc độ, căn cứ và quyền chủ động có đánh đổi |
| Counter-evidence | User không biết thiếu gì có thể cần AI hỗ trợ chọn | Có trường hợp chỉ cần giải thích khác | Nhiều quyền kiểm soát không tự bảo đảm dễ dùng | Không nên mặc định mọi người cần cùng một kiểu trợ giúp |

## Đúng một Next Change nhóm đã chốt
Giữ cơ chế Guided Diagnostic B và thêm một lựa chọn nhanh **“Giải thích theo cách khác” trước khi bắt đầu diagnostic**.

Linh xác nhận nhóm đã chốt thay đổi này dựa trên ba phiên thực tế. Chưa áp dụng vào bộ prototype so sánh A/B/C hiện tại.

Evidence: P1/P3 chọn B và chấp nhận thêm bước; P2 chọn giải thích khác trong C và chọn C sau test. Đề xuất mở một đường hỗ trợ cho trường hợp cách diễn đạt là vấn đề, thay vì bắt buộc mọi người trả lời diagnostic.

## Still Unproven
Chưa chứng minh diagnostic giúp hiểu bài nhanh hoặc tốt hơn, B được phần lớn người học ưu tiên, hay shortcut mới cải thiện kết quả. Cần thử thay đổi ở vòng tiếp theo. Ba phiên cung cấp tín hiệu tương tác, không đủ để xác nhận giá trị thị trường.

## Giới hạn ghi chép
Một số hành vi P2/P3 chưa được ghi chi tiết; giữ “chưa ghi rõ” thay vì bổ sung suy đoán. Thuý/Duyên nên rà soát notes của phiên mình điều phối. Tên hành động ghi gần nghĩa theo giải thích của Linh, không phải nguyên văn UI.
