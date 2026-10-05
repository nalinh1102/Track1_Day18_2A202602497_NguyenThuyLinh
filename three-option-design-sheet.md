# Three Option Design Sheet — Day 18

> Bản thiết kế có AI hỗ trợ. Evidence Day 17 thật hiện chỉ có Practice Note Linh/P1. Người dùng xác nhận mới nhất hai notes Thuý/Duyên, Parking Lot tám ý tưởng và ba phiên Day 18 đều thuộc bộ mô phỏng; không tính là phỏng vấn/test thực tế. Prototype đã xuất bản; còn thiếu kiểm thử thực tế theo đề.

## 1. Thông tin nhóm

- Họ tên: Nguyễn Thùy Linh
- MHV: 2A202602497
- Tên nhóm: Matcha
- Case: Case A — AI Tutor: Diagnostic Refresher

### Phân công dự kiến được Linh xác nhận

- Linh: Option C — Learner-Controlled Refresher.
- Thuý: Option A — Instant Diagnostic.
- Duyên: Option B — Guided Diagnostic.

Đây là phân công đang dùng để tiếp tục làm Day 18; cập nhật nếu nhóm thay đổi. Practice Notes Thuý/Duyên và Parking Lot được xác nhận là mô phỏng. Xác nhận mới nhất cũng mô tả ba phiên Day 18 thuộc mô phỏng, thay thế xác nhận “test thật” trước đó. Xem tổng hợp nhóm để phân biệt dữ liệu.

---

## 2. Evidence Snapshot từ Day 17

### Hypothesis Problem

Khi đang học một bài và gặp một khái niệm không hiểu, học viên có thể khó xác định phần kiến thức nền mình đang thiếu. Họ phải thử nhiều cách như đọc lại, tìm nguồn khác hoặc hỏi người khác, dẫn đến gián đoạn mạch học và mất thêm thời gian trước khi có thể tiếp tục bài.

### Evidence ban đầu

| Evidence từ Day 17 | Raw Fact | Interpretation |
|---|---|---|
| Practice Note 1 | Người tham gia chụp ảnh phần slide không hiểu và gửi sang AI bên ngoài để hỏi. | Người học phải rời khỏi flow học hiện tại để tìm hỗ trợ. |
| Practice Note 1 | Người tham gia nói rằng đôi khi không biết nên bắt đầu học từ đâu. | Có khả năng người học gặp khó khăn trong việc xác định prerequisite cần ôn. |
| Practice Note 1 | Nội dung đơn giản có thể mất khoảng 5–10 phút; nội dung phức tạp có thể mất vài tiếng. | Việc bị kẹt tạo ra chi phí thời gian và gián đoạn đáng kể. |

### Ẩn số vẫn chưa được chứng minh

- Không phải mọi trường hợp bị kẹt đều do thiếu kiến thức nền.
- Một số trường hợp có thể chỉ cần cách giải thích khác phù hợp hơn.
- Chưa đủ evidence để kết luận AI nên tự động chẩn đoán mức nào.

---

## 3. Hypothesis Problem theo công thức 5 thành tố

Khi học viên đang học một bài và gặp một nội dung không hiểu, họ gặp khó khăn trong việc xác định cần ôn lại kiến thức nào để tiếp tục bài, bởi vì nguyên nhân của việc bị kẹt không rõ ràng, dẫn đến việc phải chuyển sang nhiều nguồn hoặc công cụ khác và mất thêm thời gian trước khi tiếp tục học.

---

## 4. Comparison Contract

### Các thành phần giữ nguyên ở cả A/B/C

- Target User: Học viên đang tự học
- Situation: Gặp một đoạn bài học không hiểu
- Task: Tìm cách hiểu phần đang bị kẹt để tiếp tục bài
- Desired Outcome: Tiếp tục bài với ít gián đoạn hơn
- Content Fixture: Cùng một đoạn bài học về Gradient Descent

---

## 5. Three Solution Options

### Option A — Instant Diagnostic

**Solution Mechanism:**  
AI tự phân tích context bài học và đề xuất ngay prerequisite mà học viên có thể đang thiếu.

**User Action:**  
User xác nhận hoặc bác bỏ chẩn đoán.

**AI Action:**  
AI chủ động đưa ra chẩn đoán và refresher.

**Trigger:**  
User bấm “Tôi chưa hiểu”.

**Primary Trade-off:**  
Nhanh, ít bước; nhưng AI có thể đoán sai nguyên nhân.

---

### Option B — Guided Diagnostic

**Solution Mechanism:**  
AI hỏi user 1–2 câu chẩn đoán trước khi đề xuất prerequisite.

**User Action:**  
User trả lời câu hỏi diagnostic.

**AI Action:**  
AI dùng câu trả lời để đưa ra chẩn đoán.

**Trigger:**  
User bấm “Tôi chưa hiểu”.

**Primary Trade-off:**  
Đáng tin hơn nhưng chậm hơn Option A.

---

### Option C — Learner-Controlled Refresher

**Solution Mechanism:**  
AI chỉ gợi ý các chủ đề có liên quan; user tự chọn phần muốn ôn hoặc yêu cầu cách giải thích khác.

**User Action:**  
User chọn prerequisite hoặc cách giải thích.

**AI Action:**  
AI đưa ra các lựa chọn và giải thích phần user chọn.

**Trigger:**  
User bấm “Tôi chưa hiểu”.

**Primary Trade-off:**  
User kiểm soát cao hơn nhưng có thể không biết nên chọn gì.

---

## 6. Distance Check

- Option A khác Option B ở chỗ AI đưa ra chẩn đoán ngay thay vì hỏi thêm user trước.
- Option B khác Option C ở chỗ AI vẫn là bên đưa ra chẩn đoán sau khi thu thập thêm evidence, trong khi Option C để user tự chọn.
- Option A khác Option C ở mức quyền tự trị của AI: A có AI agency cao, C có user agency cao.

---

## 7. Human–AI Decision Table

| Trụ cột | Option A | Option B | Option C |
|---|---|---|---|
| Expectation | AI đưa ra gợi ý nhanh dựa trên context bài học | AI cần thêm câu trả lời trước khi diagnostic | AI chỉ gợi ý, không tự quyết thay user |
| Role & Agency | AI chủ động đề xuất, user xác nhận | AI hỏi và đề xuất, user cung cấp evidence | User quyết định phần cần ôn |
| Evidence & Uncertainty | Hiển thị: “Có thể bạn đang thiếu…” và nêu context từ slide | Hiển thị lý do dựa trên câu trả lời của user | Hiển thị danh sách prerequisite có liên quan |
| Control & Recovery | Reject / Diagnose again / Explain differently | Restart diagnostic / Skip / Change answer | Choose another topic / Ask AI to recommend / Back |

---

## 8. Critical Interaction

Điểm tương tác then chốt của cả ba option là:

User gặp một đoạn bài học không hiểu và kích hoạt trợ giúp.

Ba option khác nhau ở cách hệ thống quyết định “người học nên ôn gì tiếp theo”.

---

## 9. Common Context Fixture

Lesson: Gradient Descent

Nội dung mẫu:

Gradient Descent cập nhật tham số theo công thức:

θ_new = θ_old - α∇L(θ)

Trong đó:
- α là learning rate
- ∇L(θ) là gradient của loss function

Nút chung:
“Tôi chưa hiểu phần này”

## 10. Chi tiết quyết định triển khai trong prototype

Critical interaction chính xác: **ai chọn nội dung hỗ trợ tiếp theo và dựa vào căn cứ nào**, sau khi user kích hoạt trợ giúp. Không chỉ là thao tác bấm nút.

| Trụ cột | A | B | C |
|---|---|---|---|
| Expectation & giới hạn | Gợi ý ngay từ bài; nói rõ chưa có dữ liệu cá nhân để chẩn đoán | Hai câu giúp chọn hỗ trợ, không phải đánh giá đầy đủ năng lực | Danh sách chủ đề liên quan; AI không kết luận user thiếu kiến thức |
| Role / Act–Ask–Don't Act | Act: tạo gợi ý; Ask: user chọn ôn; Don't Act: không tự xác nhận user đã hiểu | Act: đối chiếu hai câu; Ask: user chọn ôn; Don't Act: không áp đặt kết luận năng lực | User quyết định chủ đề; AI chỉ hiển thị phần chọn. Chỉ gợi ý chẩn đoán khi user yêu cầu |
| Evidence & uncertainty | Mở căn cứ từ công thức; cảnh báo nguyên nhân có thể là cách diễn đạt | Mở căn cứ nêu câu trả lời và đối chiếu bài; cảnh báo hai câu chưa đủ | Danh sách không phải chẩn đoán; nội dung ôn có đối chiếu công thức; khi xin AI gợi ý, cảnh báo chưa chắc đúng |
| Control & recovery | Bác bỏ, giải thích khác, chọn nội dung khác, trở về bài, reset | Đổi câu trả lời (giữ lựa chọn), skip sang tự chọn, quay lại, reset | Đổi chủ đề, xin gợi ý tùy chọn, trở về bài, reset |
| Cost of failure | Chọn sai phần ôn gây mất thời gian; không ép user học | Câu hỏi không đủ có thể gợi ý sai; cho đổi đáp án hoặc tự chọn | User có thể chọn sai hoặc không biết chọn; cho đổi phần hoặc gọi gợi ý |

### Nội dung và state dùng chung
- Context: cùng công thức, giải nghĩa ký hiệu, ví dụ L(θ)=θ² tại θ=2, α=0,1.
- Ba nội dung ôn dùng chung: gradient/hướng giảm, learning rate, ví dụ sườn đồi.
- State: bài → tương tác khác biệt → nội dung ôn và quyết định trở về.
- B sử dụng câu trả lời thật trong phiên để chọn phản hồi dựng sẵn: sai/chưa chắc gradient → ôn gradient; hiểu gradient nhưng sai bước cập nhật → ôn learning rate; đúng cả hai → cách giải thích khác. Đây là luật mô phỏng, không phải mô hình chẩn đoán đã kiểm chứng.
- Không lưu lịch sử, không thu thập thông tin cá nhân, không dùng Like/Dislike để học lại. Câu trả lời chỉ trong bộ nhớ trang và bị xóa khi reset/đổi option.
- C thêm đường xin AI gợi ý như fallback; cơ chế chính vẫn do user tự chọn. Khi test cần ghi việc dùng fallback để biết sự khác biệt cơ chế có còn rõ không.

### Test prompt và observation
Xem [test-guide.md](test-guide.md) cho context question, outcome task, bảy hành vi quan sát, thứ tự luân phiên và ghi chú riêng facilitator. Prototype tại [prototype/index.html](prototype/index.html).

### Kiểm định hiện tại
- Gate 1: có evidence P1 và ẩn số; thiếu hai notes/Parking Lot gốc.
- Gate 2–3: đã chuẩn bị cơ chế và quyền kiểm soát; cần nhóm kiểm tra chéo.
- Gate 4: prototype công khai và các file HTML/CSS/JS trả HTTP 200; kiểm tra logic đã qua. Chưa kiểm thử trực quan/tự vận hành với người thật trong môi trường này.
- Gate 5: chưa đạt yêu cầu ba phiên thực tế. Có bộ mô phỏng và một Next Change nhóm chốt từ mô phỏng, cần test thật để đối chiếu.
