# Prototype Feedback Note — Nguyễn Thùy Linh

## Nguồn và bối cảnh
**MÔ PHỎNG — không tính là phiên kiểm thử thực tế.** Xác nhận mới nhất của Linh cho biết P1/P2/P3 thuộc bộ mô phỏng, thay thế xác nhận “test thật” trước đó. Giữ [nguồn gốc](references/test-supplement-demo.txt) để đối chiếu; mọi hành vi bên dưới là hành vi mô phỏng.

- Người điều phối: Nguyễn Thùy Linh.
- Tester: P1 — sinh viên đang học khóa online. Mã này thuộc test Day 18; chưa xác định có trùng người P1 Day 17 hay không.
- Thiết bị: Laptop.
- Thứ tự: A → B → C.
- Bối cảnh: từng không hiểu một ký hiệu trong slide có công thức và mở ChatGPT hỏi thêm.
- Ngày trong mô phỏng: 01/10/2026, không phải ngày test thực tế được xác nhận.
- Persona P1 được mô tả là sinh viên ngoài nhóm trong bộ mô phỏng, học AI/ML và tìm giải thích qua ChatGPT/Google. Không xác nhận một người thật đã tham gia.
- Theo Linh, bộ mô phỏng dùng A/B/C của AI Tutor; tên hành động ghi theo nghĩa, không phải nguyên văn UI. Chưa đủ để xác lập thao tác đã diễn ra trên bản hiện tại.
- Theo ghi chép, không hỏi facilitator ở A/B/C. Chưa có mô tả riêng về can thiệp chủ động của facilitator.

## Ghi chép hành vi từ nguồn
Tên nút dưới đây được giữ theo ghi chép người dùng; một số khác bản source trong repo hiện tại. Chưa xác định là diễn đạt gần nghĩa hay test bản khác. Không sửa prototype để tạo vẻ khớp với một phiên đã diễn ra.

| Tiêu điểm | A | B | C |
|---|---|---|---|
| First Action | Bấm “Tôi chưa hiểu phần này” | Chọn “Tôi không hiểu ∇L(θ)” | Nhìn ba chủ đề, chọn Gradient |
| Hesitation | Dừng vài giây sau gợi ý về Gradient | Đọc hết lựa chọn trước khi chọn; ghi chép không nêu bị kẹt | Dừng khá lâu trước ba lựa chọn; chưa có thời lượng cụ thể |
| Evidence Checking | Mở “Tại sao AI nghĩ vậy?”, đọc căn cứ ký hiệu ∇L(θ) | Đọc lý do đề xuất Gradient sau diagnostic | Đọc mô tả ngắn các prerequisite |
| Misunderstanding | Chưa ghi nhận cụ thể | Chưa ghi nhận cụ thể | Chưa ghi nhận cụ thể |
| Help Needed | Không hỏi facilitator | Không hỏi facilitator | Không hỏi facilitator; dùng “Nhờ AI gợi ý” |
| Control & Recovery | Thử “Không phải phần này” | Chú ý “Chẩn đoán lại”; theo nguồn nói nút hữu ích nếu trả lời nhầm, chưa ghi đã bấm | Dùng “Nhờ AI gợi ý”; thấy “Chọn chủ đề khác” và “Quay lại bài”, chưa ghi đã bấm hai nút này |

- Selected Option: B.
- Lý do được ghi: AI hỗ trợ chẩn đoán nhưng không quyết định quá sớm.
- Trade-off: chấp nhận thêm 1–2 bước để có cảm giác kết quả có căn cứ hơn.
- Counter-evidence (diễn giải): quyền kiểm soát cao của C có thể chưa đủ hữu ích nếu user không biết thiếu kiến thức gì.
- Không có exact quote được xác nhận trong nguồn này; các lý do trên là tóm tắt, không trình bày như trích dẫn nguyên văn.

## Bốn tầng ghi nhận
- **Observed:** dừng sau gợi ý A, mở căn cứ A, đọc kết quả B, dùng gợi ý AI trong C và chọn B sau ba option, theo ghi chép cung cấp.
- **Interpreted:** việc hỏi thêm có thể khiến gợi ý B có vẻ có căn cứ hơn; C có thể tạo gánh nặng chọn nội dung. “Có vẻ tin hơn” là nhận định, không phải đo lường độ tin cậy.
- **Decided — đề xuất iteration:** thêm đường giải thích khác trước diagnostic B; nhóm đã chốt từ mô phỏng theo Linh, cần kiểm tra thực tế.
- **Still Unproven:** cảm giác có căn cứ chưa chứng minh hiểu bài tốt hơn/nhanh hơn; chưa biết lựa chọn có lặp lại trong học thực tế.

## Reflection cá nhân
Qua quá trình dựng và thử các option, tôi nhận ra việc tăng quyền tự động cho AI không đồng nghĩa trải nghiệm sẽ tốt hơn. Nếu AI đưa ra chẩn đoán quá nhanh, người dùng có thể không hiểu hệ thống dựa vào đâu để kết luận. Ngược lại, nếu giao toàn bộ lựa chọn cho người học thì họ có thể vẫn bị mắc kẹt vì chính họ chưa biết mình đang thiếu kiến thức gì. Tôi thấy hướng phù hợp hơn là AI hỏi vừa đủ để có căn cứ rồi vẫn để người học có quyền đổi hướng hoặc yêu cầu cách giải thích khác.

Đây là reflection Linh tự cung cấp về dựng/thử option. Bài học từ phiên thực tế vẫn cần bổ sung sau khi điều phối.
