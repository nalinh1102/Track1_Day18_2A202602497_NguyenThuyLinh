# Group Feedback Synthesis — Matcha

Người dùng xác nhận ba phiên là test thật. Tổng hợp bám vào mô tả từng phiên trong [nguồn gốc](references/test-supplement-demo.txt), không lấy bảng tóm tắt nguồn làm bằng chứng cho chi tiết không có trong từng phiên. Ngày test, việc cả ba tester ngoài nhóm và bản prototype đã dùng vẫn cần bổ sung.

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

## Đúng một Next Change đề xuất
Giữ cơ chế Guided Diagnostic B và thêm một lựa chọn nhanh **“Giải thích theo cách khác” trước khi bắt đầu diagnostic**.

Trạng thái quyết định: đề xuất trong tài liệu người dùng gửi; **[CHỜ XÁC NHẬN NHÓM ĐÃ THỐNG NHẤT]**. Chưa áp dụng vào prototype để giữ bản A/B/C so sánh hiện tại.

Evidence: P1/P3 chọn B và chấp nhận thêm bước; P2 chọn giải thích khác trong C và chọn C sau test. Đề xuất mở một đường hỗ trợ cho trường hợp cách diễn đạt là vấn đề, thay vì bắt buộc mọi người trả lời diagnostic.

## Still Unproven
Chưa chứng minh diagnostic giúp hiểu bài nhanh hoặc tốt hơn, B được phần lớn người học ưu tiên, hay shortcut mới cải thiện kết quả. Cần thử thay đổi ở vòng tiếp theo. Ba phiên cung cấp tín hiệu tương tác, không xác nhận giá trị thị trường.

## Cần đối chiếu trước khi nộp
- Ngày từng phiên; bối cảnh liên quan của P2/P3; xác nhận cả ba ngoài nhóm.
- Bản prototype đã test: tên nút/câu hỏi trong notes khác source hiện tại.
- Hai notes đồng đội dưới đây là bản tổ chức lại từ nguồn Linh cung cấp, chưa có xác nhận riêng của người điều phối. Nhóm cần rà soát.
