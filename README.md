# Track 1 — Day 18: Three Prototypes, One Next Change

> Đã có thiết kế, prototype công khai và bộ ghi chép mô phỏng Day 18. Chưa đủ ba phiên test thực tế theo yêu cầu đề; chưa hoàn tất bài nộp.

Tài liệu bổ sung có nhãn DEMO/SYNTHETIC được lưu riêng tại [references](references/README.md). Không tính mô phỏng thành Practice Notes hoặc feedback thực tế. Phân công dự kiến và hoạt động cá nhân dưới đây được cập nhật từ xác nhận trực tiếp của Linh.

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

Evidence hiện có: [Practice Note P1](interview/notes.md) mô tả chụp slide gửi AI, không biết bắt đầu từ đâu và mất 5–10 phút đến vài tiếng tùy nội dung. Chưa xác nhận chắc một sự kiện trong 7 ngày; chưa đủ để kết luận thiếu kiến thức nền là nguyên nhân chính. Người dùng xác nhận Practice Notes Thuý/Duyên và Parking Lot tám ý tưởng thuộc bộ mô phỏng. Chưa có hai Practice Notes thật và Parking Lot gốc Day 17 để thay thế.

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
Theo thông tin nguồn mới nhất do Linh cung cấp, ba phiên P1/P2/P3 thuộc **bộ mô phỏng**, không phải bằng chứng ba người ngoài nhóm đã test thực tế. Các ngày 01/10, 02/10 và 03/10/2026 là ngày ghi trong bộ mô phỏng.

- [Feedback cá nhân](prototype-feedback-note.md) và [tổng hợp nhóm](group-feedback-synthesis.md) được giữ làm tài liệu mô phỏng, không tính vào ba phiên bắt buộc.
- Trong mô phỏng, P1/P3 chọn B và P2 chọn C; đây không phải lựa chọn của người dùng thật.
- Next Change nhóm đã chốt theo thông tin Linh cung cấp: giữ Guided Diagnostic B, thêm “Giải thích theo cách khác” trước diagnostic. Căn cứ hiện tại là tình huống mô phỏng, cần kiểm tra lại bằng test thực tế.
- Still Unproven: chưa biết cơ chế giúp hiểu bài nhanh hơn hay phù hợp với phần lớn người học; chưa có feedback thực tế xác nhận lựa chọn thiết kế.

### Reflection cá nhân — nội dung Linh tự viết
Qua quá trình dựng và thử các option, tôi nhận ra việc tăng quyền tự động cho AI không đồng nghĩa trải nghiệm sẽ tốt hơn. Nếu AI đưa ra chẩn đoán quá nhanh, người dùng có thể không hiểu hệ thống dựa vào đâu để kết luận. Ngược lại, nếu giao toàn bộ lựa chọn cho người học thì họ có thể vẫn bị mắc kẹt vì chính họ chưa biết mình đang thiếu kiến thức gì. Tôi thấy hướng phù hợp hơn là AI hỏi vừa đủ để có căn cứ rồi vẫn để người học có quyền đổi hướng hoặc yêu cầu cách giải thích khác.

Reflection được cung cấp trong bối cảnh dựng/thử bộ mô phỏng; chưa thay thế phần học được từ một phiên thực tế do Linh điều phối.

## 6. AI Support Log
Codex hỗ trợ tổ chức tài liệu, thiết kế tương tác, prototype với phản hồi dựng sẵn và mẫu test. Không tạo evidence tester hoặc viết thay reflection. [Nhật ký đầy đủ](ai-support-log.md).

### Phần tôi kiểm tra và chỉnh sửa từ AI

AI hỗ trợ tôi phân tích đề bài, đề xuất ba solution mechanism, xây dựng cấu trúc Human–AI Decision Table và tạo nội dung mẫu cho prototype.

Tôi đối chiếu các đề xuất với yêu cầu chính thức của Day 18 và evidence từ repo Day 17 trước khi sử dụng.

Tôi không sử dụng AI để thay thế quyết định cuối cùng về phân công nhóm hoặc dữ liệu kiểm thử thực tế.

Khi xây dựng prototype, tôi kiểm tra lại nội dung, luồng nút bấm và recovery để đảm bảo ba option không chỉ khác giao diện mà khác thực sự về cơ chế Human–AI interaction.

## Checklist trước khi nộp
- [ ] Hai Practice Notes còn lại và Parking Lot gốc.
- [x] Phân công dự kiến và những phần Linh đã tham gia được xác nhận.
- [x] Bổ sung nội dung đóng góp do Linh tự cung cấp.
- [x] Bổ sung reflection do Linh tự viết về dựng/thử option.
- [ ] Bổ sung bài học từ phiên thực tế khi hoàn thành.
- [x] Linh xác nhận kiểm tra Option C/context/recovery và cung cấp link công khai.
- [ ] Kiểm tra link công khai trên thiết bị bên ngoài và đường dẫn trực tiếp A/B/C.
- [ ] Ba tester ngoài nhóm, mỗi người thử đủ A/B/C.
- [x] Lưu bộ ghi chép mô phỏng có nhãn rõ ràng.
- [ ] Bổ sung ba feedback thực tế độc lập.
- [x] Linh xác nhận nhóm đã chốt một Next Change từ mô phỏng.
- [ ] Đối chiếu quyết định với dữ liệu test thực tế.
- [ ] Pattern, counter-evidence, một Next Change, Still Unproven.
- [x] Bổ sung phần Linh tự kiểm tra AI theo nội dung Linh cung cấp.

Bản README cũ được giữ tại [day17-readme.md](day17-readme.md).
