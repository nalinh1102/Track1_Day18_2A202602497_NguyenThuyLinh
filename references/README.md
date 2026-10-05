# Tài liệu mô phỏng do người dùng cung cấp

## Trạng thái nguồn mới nhất — thay thế xác nhận trước đó

Linh xác nhận Practice Notes Thuý/Duyên, Parking Lot tám ý tưởng và P1/P2/P3 thuộc bộ dữ liệu mô phỏng. Vì vậy các dòng xác nhận “test thật” ở phần lịch sử bên dưới không còn là trạng thái hiện tại. Evidence thực tế Day 17 hiện chỉ có Practice Note của Linh tại `interview/notes.md`. Chưa có ba phiên test thực tế Day 18.

Ngày 01/10, 02/10, 03/10/2026, bối cảnh sinh viên ngoài nhóm và các thao tác trong nguồn là dữ liệu mô phỏng. Linh giải thích tên hành động ghi gần nghĩa thay vì nguyên văn label UI. Next Change đã được nhóm chốt theo Linh, nhưng dựa vào mô phỏng, chưa phải quyết định được hỗ trợ bởi feedback người thật.

## Ghi chép test Day 18 — xác nhận mới

[Nguồn ba phiên](test-supplement-demo.txt) được lưu nguyên văn. Sau khi gửi, người dùng xác nhận trực tiếp “đây là test thật”. Vì vậy ba phiên được tổ chức vào feedback Day 18; đây là xác nhận riêng, không đổi trạng thái của feedback synthetic trong `user-supplied-demo.txt` hoặc tự xác nhận nguồn Practice Notes Day 17. Còn thiếu ngày, bối cảnh P2/P3, xác nhận tester ngoài nhóm và phiên bản prototype để đối chiếu tên nút. Next Change trong nguồn được viết dưới dạng đề xuất, chờ xác nhận nhóm đã chốt.

## Bổ sung Day 17 mới — chờ xác nhận nguồn

[Văn bản mới](day17-supplement-pending.txt) gồm Practice Notes Thuý/Duyên và Parking Lot tám hướng. Bản này không có nhãn DEMO, nhưng nội dung gần với bản mô phỏng đã gửi trước đó. Chưa chuyển vào evidence thật cho đến khi người dùng xác nhận hai notes là ghi chép từ phỏng vấn thực tế và Parking Lot là đầu vào nhóm đã có từ Day 17. Việc bỏ nhãn DEMO không tự xác lập nguồn dữ liệu.

[Nội dung nguyên gốc](user-supplied-demo.txt) được người dùng gửi trong phiên chat. Tài liệu tự ghi rõ DEMO/SYNTHETIC; không phải dữ liệu kiểm thử thực tế.

| Phần | Trạng thái | Cách sử dụng |
|---|---|---|
| Practice Note Linh | Tóm tắt dữ liệu thật đã có từ P1 trong repo | Đối chiếu với `interview/notes.md`; không tính là một người mới |
| Practice Notes Thuý/Duyên | Synthetic | Tham khảo tình huống; không tính thành hai phỏng vấn Day 17 |
| Parking Lot sáu ý tưởng | Demo | Tham khảo hướng giải pháp; không nhận là Parking Lot gốc Day 17 |
| Phân công C/A/B và đóng góp Linh trong bản demo | Mẫu | Phân công dự kiến đã được xác nhận riêng qua tin nhắn sau; chỉ dùng hoạt động Linh trực tiếp xác nhận, không dùng toàn bộ đoạn đóng góp demo |
| Feedback T01/T02/T03 và quote | Demo/synthetic | Không dùng làm Observed, exact quote hoặc bằng chứng ba phiên test |
| Next Change | Đề xuất trong demo | Có thể bàn với nhóm, chưa phải quyết định dựa trên test thật |
| Reflection | Mẫu | Cá nhân tự viết từ trải nghiệm thực tế |

## Điểm không khớp prototype hiện tại
Demo nhắc câu trả lời “Tôi không hiểu ∇L(θ)” và nút “Chẩn đoán lại”. Prototype hiện tại dùng hai câu về hướng gradient và bước cập nhật, cùng nút “Đổi câu trả lời”. Demo cũng dùng các tên nút khác như “Tại sao AI nghĩ vậy?” và “Không phải phần này”; giao diện hiện tại là “Xem căn cứ của gợi ý” và “Không đúng điều tôi cần”. Không sửa dữ liệu mô phỏng thành ghi chép có vẻ đã quan sát trên giao diện thật.

## Đề xuất có thể kiểm tra ở vòng sau
Shortcut giải thích khác trước diagnostic là một ý tưởng tham khảo. Cần xem tester thật có tìm đường này, bỏ qua câu hỏi hoặc chỉ cần cách diễn đạt khác hay không trước khi nhóm chốt Next Change.

## Dữ liệu vẫn cần
Hai Practice Notes thật và Parking Lot gốc hiện được Linh xác nhận chưa có trong repo. Vẫn cần ba feedback thật, reflection tự viết, phần người học tự kiểm tra/sửa AI và link prototype công khai. Phân công dự kiến và các hoạt động Linh đã tham gia đã được cập nhật trong README từ tin nhắn xác nhận trực tiếp, không từ bản demo.
