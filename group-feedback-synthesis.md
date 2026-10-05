# Group Feedback Synthesis — Matcha

**MÔ PHỎNG — chưa có ba feedback thực tế.** Linh xác nhận mới nhất P1/P2/P3 là persona trong bộ mô phỏng. Xác nhận này thay thế thông tin “test thật” trước đó. Bảng dưới đây chỉ so sánh các tình huống giả lập, không dùng làm pattern từ người dùng thực tế.

- Ngày mô phỏng: P1 01/10/2026; P2 02/10/2026; P3 03/10/2026.
- P1: sinh viên AI/ML, vướng ký hiệu/công thức, dùng ChatGPT/Google.
- P2: sinh viên học qua slide/video, đọc lại và tìm cách diễn đạt khác bằng AI.
- P3: sinh viên chưa biết ôn gì trước, chuyển nhiều nguồn để tìm hiểu.
- Cả ba được mô tả ngoài nhóm Matcha trong mô phỏng, không phải xác nhận ba người thật đã tham gia.
- Tên nút trong nguồn ghi theo nghĩa hành động, không phải nguyên văn UI; không dùng chúng làm exact quote hoặc thao tác thực đã xác minh.

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

## Đúng một Next Change nhóm đã chốt — căn cứ mô phỏng
Giữ cơ chế Guided Diagnostic B và thêm một lựa chọn nhanh **“Giải thích theo cách khác” trước khi bắt đầu diagnostic**.

Linh xác nhận nhóm đã chốt thay đổi này. Căn cứ hiện tại là mô phỏng; cần kiểm tra với người thật. Chưa áp dụng vào bộ prototype so sánh A/B/C hiện tại.

Evidence: P1/P3 chọn B và chấp nhận thêm bước; P2 chọn giải thích khác trong C và chọn C sau test. Đề xuất mở một đường hỗ trợ cho trường hợp cách diễn đạt là vấn đề, thay vì bắt buộc mọi người trả lời diagnostic.

## Still Unproven
Chưa chứng minh diagnostic giúp hiểu bài nhanh hoặc tốt hơn, B được phần lớn người học ưu tiên, hay shortcut mới cải thiện kết quả. Cần thử thay đổi ở vòng tiếp theo. Bộ mô phỏng không cung cấp bằng chứng hành vi người dùng thực tế hoặc giá trị thị trường.

## Cần hoàn thành trước khi nộp
- Ba người thật ngoài nhóm thử đủ A/B/C; mỗi thành viên trực tiếp điều phối một phiên.
- Feedback thực tế độc lập, pattern/counter-evidence và quyết định Next Change đối chiếu với dữ liệu thật.
- Không chuyển persona, ngày hoặc hành vi mô phỏng thành dữ liệu test thực tế.
