# Kịch bản kiểm thử Day 18

## Chuẩn bị
Mỗi thành viên tìm một tester ngoài nhóm, thử đủ A/B/C. Cùng thiết bị, context, task. Luân phiên: Tester 1 A–B–C; Tester 2 B–C–A; Tester 3 C–A–B. Ghi thứ tự thực tế. Reset trước mỗi option.

## 0–2 phút: mở đầu và context
“Nhóm mình đang thử ba cách hỗ trợ học tập, không kiểm tra năng lực của bạn. Bạn hãy tự thao tác và nói ra suy nghĩ; mình sẽ quan sát và hạn chế hướng dẫn. Đây là prototype dùng phản hồi dựng sẵn, không phải AI đang chạy thật.”

“Gần đây bạn có từng đang học mà gặp một phần không hiểu và phải tìm cách xử lý không? Kể ngắn về lần đó nhé.”

Nếu không có bối cảnh liên quan, chỉ dùng phiên để tìm lỗi tương tác và ghi hạn chế.

## 2–14 phút: Outcome Task, khoảng 4 phút/option
“Bạn đang học Gradient Descent và chưa hiểu vì sao công thức cập nhật tham số lại trừ gradient. Hãy dùng từng phương án để tìm phần hỗ trợ bạn thấy phù hợp, kiểm tra kết quả và quay lại bài khi thấy có thể tiếp tục. Nếu hỗ trợ chưa đúng điều bạn cần, hãy xử lý theo cách bạn thấy hợp lý.”

Không chỉ nút, không đổi task, không giải thích cơ chế hộ, không tiết lộ option mong thắng. Người dùng tự cầm chuột. Im lặng khi họ do dự.

## Bảy hành vi cần quan sát
| Hành vi | Ghi nhận |
|---|---|
| First Action | Thành phần đầu tiên bấm/đọc; chỉ ghi ánh mắt nếu quan sát được |
| Hesitation | Vị trí, thời gian dừng, đặc biệt hơn 3 giây |
| Evidence Read / Ignored | Mở căn cứ/đọc cảnh báo/bỏ qua; không suy ra đã hiểu từ một lần bấm |
| Misunderstanding | Kỳ vọng được nói ra khác hệ thống thế nào |
| Help Needed | Số lần, nguyên văn hỏi và can thiệp |
| Correction / Recovery | Nút dùng khi hỗ trợ sai, kết quả thao tác |
| Selected Option & Trade-offs | Lựa chọn sau cả ba, lý do và đánh đổi |

## 14–18 phút: so sánh
- “Bạn chọn phương án nào trong tình huống này? Vì sao?”
- “Bạn muốn tự quyết khâu nào và giao AI khâu nào?”
- “Bạn chấp nhận mất gì để có lợi ích đó?”
- “Điểm nào vẫn khiến bạn lấn cấn?”

Khi hỏi cách dùng: “Theo bạn nó nên hoạt động thế nào?” Khi kẹt: “Bạn dự định làm gì tiếp theo?” Nếu buộc can thiệp, ghi đúng việc đã làm.

## 18–20 phút: ghi note
Phân biệt Observed / Interpreted / Decided / Still Unproven. Không kết luận validated.

## Ghi chú riêng facilitator — không hiện trong UI tester
| Option | Kỳ vọng cần kiểm tra | Watch for | Không giải thích hộ |
|---|---|---|---|
| A | Nhận biết đề xuất chưa chắc đúng và có thể bác bỏ | Bỏ qua căn cứ, chấp nhận sai, tìm giải thích khác | Vì sao chọn gradient; nút từ chối |
| B | Tự trả lời, kiểm tra căn cứ, đổi câu trả lời nếu cần | Do dự, skip, tốn thời gian | Đáp án đúng, kết quả sắp hiện |
| C | Tự chọn hỗ trợ, đổi chủ đề | Không biết chọn; xin AI gợi ý | Chủ đề nào tốt nhất cho task |
