# Track 1 — Day 18: Three Prototypes, One Next Change

> Đã có thiết kế, prototype công khai, ba feedback thực tế, Next Change và reflection cá nhân. Nguồn dữ liệu được Linh xác nhận lại ngày 06/10/2026; các nhãn mô phỏng trong tài liệu gửi trước là nhầm lẫn.

## 1. Thông tin cá nhân & đội ngũ
- Nguyễn Thùy Linh — 2A202602497.
- Nhóm Matcha: Trần Thị Thuý — 2A202602960; Lê Thị Duyên — 2A202602411; Nguyễn Thùy Linh — 2A202602497.
- Case A — AI Tutor: Diagnostic Refresher, kế thừa Day 17.

Phân công dự kiến đang dùng để tiếp tục Day 18:

| Thành viên | Option phụ trách |
|---|---|
| Nguyễn Thùy Linh | C — Learner-Controlled Refresher |
| Trần Thị Thuý | A — Instant Diagnostic |
| Lê Thị Duyên | B — Guided Diagnostic |

Nếu nhóm thay đổi phân công, cập nhật trước khi nộp. Phân công không đồng nghĩa đã hoàn thành công việc.

## 2. Hypothesis Problem
Khi học viên đang học một bài và gặp nội dung không hiểu, họ gặp khó khăn trong việc xác định cần ôn kiến thức nào để tiếp tục bài, bởi vì nguyên nhân bị kẹt không rõ ràng, dẫn đến việc phải chuyển sang nguồn hoặc công cụ khác và mất thêm thời gian trước khi tiếp tục học.

Evidence hiện có: [Practice Note P1](interview/notes.md) mô tả chụp slide gửi AI, không biết bắt đầu từ đâu và mất 5–10 phút đến vài tiếng tùy nội dung. Chưa xác nhận chắc một sự kiện trong 7 ngày; chưa đủ để kết luận thiếu kiến thức nền là nguyên nhân chính. Hai notes thật của [Thuý](interview/day17-notes-thuy.md), [Duyên](interview/day17-notes-duyen.md) và [Parking Lot tám ý tưởng](solution-parking-lot.md) đã được bổ sung theo xác nhận của Linh.

## 3. Three Solution Options
| Option | Cơ chế | Mở prototype |
|---|---|---|
| A — Instant Diagnostic | AI đề xuất ngay; người học xác nhận hoặc bác bỏ | [A](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/?option=A) |
| B — Guided Diagnostic | AI hỏi hai câu rồi đề xuất; người học quyết định | [B](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/?option=B) |
| C — Learner-Controlled Refresher | Người học tự chọn kiến thức hoặc cách giải thích | [C](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/?option=C) |

Xem [thiết kế](three-option-design-sheet.md), [hướng dẫn mở](prototype-link.md), [kịch bản test](test-guide.md). [Prototype GitHub Pages](https://nalinh1102.github.io/Track1_Day18_2A202602497_NguyenThuyLinh/) đã được GitHub báo “Your site is live at” trong ảnh người dùng cung cấp. Cần kiểm tra thao tác và truy cập ẩn danh trước khi nộp.

## 4. Đóng góp cụ thể của tôi
Tôi phụ trách chính Option C — Learner-Controlled Refresher.

Tôi tham gia rà soát lại Hypothesis Problem và evidence từ Day 17, cùng nhóm xác định ba Solution Options và xây dựng Comparison Contract.

Ở Option C, tôi tập trung vào cơ chế để người học giữ quyền quyết định: AI không tự kết luận ngay kiến thức nào đang thiếu mà đưa ra các prerequisite liên quan để người học lựa chọn. Tôi cũng đưa vào lựa chọn “Giải thích theo cách khác” để xử lý trường hợp vấn đề không xuất phát từ thiếu kiến thức nền.

Tôi tham gia xây dựng các cơ chế Control & Recovery gồm:

- Chọn chủ đề khác.
- Nhờ AI gợi ý khi không biết lựa chọn.
- Quay lại bài học.
- Yêu cầu cách giải thích khác.

Tôi đồng thời kiểm tra để Option C sử dụng cùng Common Context, dữ liệu Gradient Descent và visual components với Option A/B, nhằm giữ nguyên quy tắc 70/30 của bài.

## 5. Dữ liệu kiểm thử & bài học
Ba phiên thực tế đều có tester ngoài nhóm Matcha, mỗi người thử đủ A/B/C. Linh xác nhận lại ngày 06/10/2026 rằng nhãn mô phỏng trước đó là nhầm lẫn.

- P1: Linh điều phối ngày 01/10/2026, A–B–C, laptop; sinh viên học AI/ML.
- P2: Thuý điều phối ngày 02/10/2026, B–C–A, laptop; sinh viên thường học qua slide/video online.
- P3: Duyên điều phối ngày 03/10/2026, C–A–B, laptop; từng không biết nên ôn kiến thức nào trước bài có công thức.
- [Feedback cá nhân](prototype-feedback-note.md) và [tổng hợp nhóm](group-feedback-synthesis.md): P1/P3 chọn B, P2 chọn C. P1/P3 chấp nhận thêm bước; P2 ưu tiên tự chọn cách giải thích. Không suy ra lựa chọn của số đông từ ba người.
- Pattern/counter-evidence: hỏi thêm có thể tăng cảm giác có căn cứ nhưng thêm bước; tự chọn có thể khó khi user chưa biết nguyên nhân; không phải trường hợp nào cũng cần ôn prerequisite.
- Một Next Change đã chốt: giữ Guided Diagnostic B và thêm “Giải thích theo cách khác” trước diagnostic sâu.
- Still Unproven: chưa chứng minh cơ chế giúp hiểu bài nhanh hơn hay phù hợp phần lớn người học.
- Tên hành động trong notes được ghi gần nghĩa theo Linh, không phải nguyên văn label UI. Giữ giới hạn này khi đọc các notes.

### Reflection cá nhân — nội dung Linh tự viết
Qua quá trình dựng và thử các option, tôi nhận ra việc tăng quyền tự động cho AI không đồng nghĩa trải nghiệm sẽ tốt hơn. Nếu AI đưa ra chẩn đoán quá nhanh, người dùng có thể không hiểu hệ thống dựa vào đâu để kết luận. Ngược lại, nếu giao toàn bộ lựa chọn cho người học thì họ có thể vẫn bị mắc kẹt vì chính họ chưa biết mình đang thiếu kiến thức gì. Tôi thấy hướng phù hợp hơn là AI hỏi vừa đủ để có căn cứ rồi vẫn để người học có quyền đổi hướng hoặc yêu cầu cách giải thích khác.

Reflection trên do Linh tự viết; AI chỉ đưa nội dung vào tài liệu.

## 6. AI Support Log
Codex hỗ trợ tổ chức tài liệu, thiết kế tương tác, prototype với phản hồi dựng sẵn và mẫu test. Không tạo evidence tester hoặc viết thay reflection. [Nhật ký đầy đủ](ai-support-log.md).

### Phần tôi kiểm tra và chỉnh sửa từ AI

AI hỗ trợ tôi phân tích đề bài, đề xuất ba solution mechanism, xây dựng cấu trúc Human–AI Decision Table và tạo nội dung mẫu cho prototype.

Tôi đối chiếu các đề xuất với yêu cầu chính thức của Day 18 và evidence từ repo Day 17 trước khi sử dụng.

Tôi không sử dụng AI để thay thế quyết định cuối cùng về phân công nhóm hoặc dữ liệu kiểm thử thực tế.

Khi xây dựng prototype, tôi kiểm tra lại nội dung, luồng nút bấm và recovery để đảm bảo ba option không chỉ khác giao diện mà khác thực sự về cơ chế Human–AI interaction.

## Checklist trước khi nộp
- [x] Đã bổ sung hai Practice Notes thật và Parking Lot Day 17 theo xác nhận Linh.
- [x] Phân công dự kiến và những phần Linh đã tham gia được xác nhận.
- [x] Bổ sung nội dung đóng góp do Linh tự cung cấp.
- [x] Bổ sung reflection do Linh tự viết về dựng/thử option.
- [x] Reflection cá nhân đã được cung cấp.
- [x] Linh xác nhận kiểm tra Option C/context/recovery và cung cấp link công khai.
- [ ] Kiểm tra link công khai trên thiết bị bên ngoài và đường dẫn trực tiếp A/B/C.
- [x] Ba tester ngoài nhóm thử đủ A/B/C theo xác nhận Linh.
- [x] Lưu ghi chép và xác nhận nguồn dữ liệu.
- [x] Đã có ba feedback thực tế độc lập.
- [x] Nhóm chốt một Next Change dựa trên ba feedback.
- [x] Đã liên kết evidence với quyết định.
- [x] Có pattern, counter-evidence, một Next Change và Still Unproven.
- [x] Bổ sung phần Linh tự kiểm tra AI theo nội dung Linh cung cấp.

Bản README cũ được giữ tại [day17-readme.md](day17-readme.md).
