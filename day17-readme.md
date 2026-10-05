# Track 1 - Day 17 - Lab 2

## 1. Thông tin cá nhân và nhóm

- MHV: 2A202602497
- Họ và tên: Nguyễn Thùy Linh
- Tên nhóm: Matcha
- Thành viên:
Trần Thị Thuý - 2A202602960
Lê Thị Duyên - 2A202602411
Nguyễn Thùy Linh - 2A202602497
- Case đã chọn: Case A — AI Tutor: Diagnostic Refresher

---

## 2. Problem Hypothesis Brief

### Solution Directive

Khi học viên bấm “Tôi vẫn chưa hiểu”, hệ thống sử dụng nội dung bài hiện tại, các câu trả lời gần đây và lịch sử học tập để đặt câu hỏi chẩn đoán, xác định một khái niệm nền cần ôn, giải thích ngắn và đưa học viên trở lại bài đang học.

### Capability trung tính

Hỗ trợ người học xác định nguyên nhân khiến họ bị kẹt trong một bài học, cung cấp phần kiến thức cần thiết để họ hiểu lại và tiếp tục bài đang học.

### Expected Change

1. Học viên xác định rõ hơn phần kiến thức khiến họ không theo kịp bài.
2. Học viên giảm việc thử nhiều nguồn hoặc cách xử lý khác nhau một cách ngẫu nhiên.
3. Học viên có thể tiếp tục bài hiện tại với ít gián đoạn hơn.

### Actor được chọn

Học viên.

Học viên là người trực tiếp trải nghiệm tình huống không hiểu bài, thực hiện workaround và chịu hậu quả nếu vấn đề không được giải quyết.

### Situation & Job

Khi đang học một bài và gặp một khái niệm không hiểu, học viên đang cố hiểu đủ nội dung để tiếp tục bài bằng cách đọc lại, tìm tài liệu khác, hỏi AI hoặc hỏi người khác.

### JTBD Hypothesis

Khi bị kẹt ở một khái niệm trong lúc học, tôi muốn nhanh chóng hiểu mình đang thiếu kiến thức gì để có thể tiếp tục bài hiện tại mà không bị gián đoạn quá lâu.

### Pain Hypothesis A

Khi đang học một nội dung khó, học viên gặp khó khăn trong việc tiếp tục bài vì họ không xác định được phần kiến thức nền mình đang thiếu, dẫn đến việc phải thử nhiều nguồn hoặc cách giải thích khác nhau và bị gián đoạn mạch học.

### Pain Hypothesis B

Khi đang học một nội dung khó, học viên gặp khó khăn trong việc tiếp tục bài không phải vì thiếu kiến thức nền, mà vì cách giải thích hiện tại chưa phù hợp với cách họ tiếp thu, dẫn đến việc phải tìm một cách diễn đạt, ví dụ hoặc nguồn học khác.

### Giả thuyết chọn để điều tra trước

Pain Hypothesis A.

Lý do: solution directive hiện tại ngầm giả định vấn đề cốt lõi là thiếu kiến thức nền, nên nhóm cần kiểm tra xem giả định này có thực sự xuất hiện trong các tình huống gần đây hay không.

### Problem Hypothesis

Khi đang học một bài và gặp một khái niệm không hiểu, học viên có thể khó xác định phần kiến thức nền mình đang thiếu. Họ phải thử nhiều cách như đọc lại, tìm nguồn khác hoặc hỏi người khác, dẫn đến gián đoạn mạch học và mất thêm thời gian trước khi có thể tiếp tục bài.

### Điều gì phải đúng để giả thuyết đứng vững

- Học viên thực sự gặp tình huống này gần đây.
- Họ không dễ tự xác định nguyên nhân.
- Họ đã dùng workaround để xử lý.
- Workaround tạo ra chi phí hoặc gián đoạn đáng kể.

### Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết

Nếu phần lớn người học chỉ cần một cách giải thích khác, tự xử lý rất nhanh hoặc không coi việc bị kẹt là vấn đề đáng kể, giả thuyết về thiếu kiến thức nền cần được sửa.

### Evidence Map

| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
|---|---|---|
| Situation có thật | User kể được một lần gần đây bị kẹt khi học với trình tự cụ thể | User không nhớ được tình huống cụ thể hoặc tình huống xảy ra rất hiếm |
| Pain có ý nghĩa | User phải dừng bài, đổi nguồn, mất nhiều thời gian hoặc ảnh hưởng tiến độ học | User xử lý rất nhanh và không thấy ảnh hưởng đáng kể |
| Workaround tồn tại | User đọc lại bài, tìm Google, YouTube, hỏi ChatGPT, hỏi bạn hoặc mentor | User gần như không cần dùng cách hỗ trợ nào khác |
| Consequence tồn tại | User mất thời gian, mất mạch học, bỏ qua nội dung hoặc trì hoãn việc học | Tình huống không tạo ra hậu quả đáng kể |
| Pattern có lặp | User kể được nhiều lần tương tự gần đây | Đây chỉ là một trường hợp hiếm hoặc cá biệt |

### Big 3 — Ba điều quan trọng nhất cần học

| Điều cần học | Evidence cần tìm | Điều gì khiến nhóm xem lại giả thuyết? |
|---|---|---|
| 1. Người học có thật sự gặp tình huống bị kẹt trong một bài gần đây không? | Một sự kiện cụ thể trong 7 ngày gần đây | Không có sự kiện cụ thể hoặc tình huống rất hiếm |
| 2. Khi bị kẹt, người học thực sự đã làm gì? | Chuỗi hành động, nguồn, công cụ và workaround đã sử dụng | User xử lý gần như ngay lập tức mà không tốn công |
| 3. Nguyên nhân của việc bị kẹt là gì và hậu quả có đáng kể không? | Nguyên nhân user tự mô tả, thời gian bỏ ra và ảnh hưởng tới việc tiếp tục học | Nguyên nhân chủ yếu chỉ là cách diễn đạt chưa phù hợp hoặc đây chỉ là bất tiện nhỏ |

### Câu hỏi đáng sợ

Điều gì sẽ xảy ra nếu người học thực tế không bị kẹt vì thiếu kiến thức nền, mà chỉ cần một cách giải thích khác phù hợp hơn?

Nếu evidence cho thấy điều này lặp lại ở nhiều interview, nhóm cần xem lại Pain Hypothesis A và có thể chuyển trọng tâm sang Pain Hypothesis B.

## 3. Conversation Guide - Final Version

### Tiêu chí tuyển người

Người tham gia cần có ít nhất một lần trong 7 ngày gần đây đang học nhưng gặp một phần không hiểu và đã phải làm gì đó để xử lý.

### Recruitment Check

Trong 7 ngày gần đây, bạn có lần nào đang học mà gặp một phần không hiểu và phải tự làm gì đó để xử lý không?

### Lời mở đầu

Mình đang tìm hiểu cách mọi người xử lý khi gặp một phần nội dung chưa hiểu trong lúc học.

Không có câu trả lời đúng hay sai. Mình muốn nghe về một tình huống thật đã xảy ra gần đây.

Mình xin phép ghi âm cuộc trò chuyện để xem lại cách mình phỏng vấn và phục vụ bài học. Bản ghi chỉ dùng cho mục đích học tập và không được chia sẻ công khai.

Bạn có đồng ý cho mình ghi âm không?

### Story Opener

Kể mình nghe về lần gần nhất trong 7 ngày qua bạn đang học mà gặp một phần không hiểu và phải tìm cách xử lý?

### Big 3 Questions

**1. Tình huống thực tế**

Lúc đó bạn đang học gì, và chuyện gì khiến bạn nhận ra mình chưa hiểu?

**2. Hành vi và workaround**

Sau khi nhận ra mình chưa hiểu, việc đầu tiên bạn làm là gì?

Sau đó chuyện gì xảy ra tiếp theo?

**3. Nguyên nhân và consequence**

Theo bạn lúc đó điều gì khiến bạn bị kẹt nhất?

Việc đó ảnh hưởng thế nào đến việc tiếp tục học?

### Probe Bank

- Sau đó chuyện gì xảy ra?
- Bạn làm gì tiếp theo?
- Vì sao bạn chọn cách đó?
- Bạn đã thử cách nào khác chưa?
- Bạn dùng nguồn hoặc công cụ nào?
- Bạn mất khoảng bao lâu?
- Kết quả sau đó thế nào?
- Bạn có phải dừng bài hoặc quay lại sau không?
- Lần gần nhất trước đó có tình huống tương tự là khi nào?

### Competing Hypothesis Check

Sau khi người tham gia đã kể đầy đủ câu chuyện:

Theo bạn, lúc đó bạn bị kẹt chủ yếu vì chưa có đủ kiến thức nền, vì cách giải thích chưa phù hợp, hay vì một lý do khác?

Follow-up:

Điều gì khiến bạn nghĩ như vậy?

### Questions to Avoid

Không hỏi:

- Bạn có muốn AI giúp bạn không?
- Nếu có nút “Tôi vẫn chưa hiểu” bạn có dùng không?
- Theo bạn nên thêm tính năng gì?
- Bạn nghĩ nền tảng nên phát triển như thế nào?
- Bạn có thích AI Tutor không?
- Feature này có hữu ích không?
---

## 4. Practice Reflection

**1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?**

Câu hỏi “Bạn có thể kể lần gần nhất bạn gặp một phần không hiểu và bạn đã giải quyết nó như thế nào?” giúp người tham gia bắt đầu mô tả hành vi thực tế. Từ đó, người tham gia cho biết họ chụp ảnh phần slide không hiểu, gửi sang AI bên ngoài và yêu cầu giải thích hoặc tạo lộ trình kiến thức.

Các câu hỏi về thời gian như “Quá trình đó thường mất khoảng bao nhiêu thời gian?” cũng giúp làm rõ consequence. Người tham gia cho biết nội dung đơn giản có thể mất khoảng 5–10 phút, trong khi nội dung phức tạp có thể mất vài tiếng và phải xem lại sau.

**2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?**

Tôi chưa giữ cuộc phỏng vấn tập trung đủ lâu vào một sự kiện cụ thể. Sau khi người tham gia bắt đầu kể, tôi nên tiếp tục hỏi theo trình tự “sau đó chuyện gì xảy ra?” thay vì chuyển sang các tình huống chung khác.

Ngoài ra, câu hỏi “Theo bạn nền tảng hiện tại có cách nào có thể phát triển để giúp bạn giải quyết việc hiểu bài nhanh hơn không?” đã chuyển từ problem interview sang hỏi ý tưởng solution. Điều này khiến người tham gia bắt đầu đề xuất một nút và cách AI nên hoạt động, trong khi mục tiêu của bài là tìm evidence về problem chứ không phải thiết kế feature.

Trong lần phỏng vấn thật, tôi sẽ tránh hỏi user nên xây tính năng gì và thay bằng các câu hỏi về cách họ đang xử lý vấn đề hiện tại.

**3. Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?**

Nhóm sửa Conversation Guide theo ba hướng:

- Neo mạnh hơn vào một sự kiện gần nhất thay vì hỏi về hành vi chung.
- Thêm các câu follow-up theo trình tự hành động như “Sau đó chuyện gì xảy ra?” và “Bạn làm gì tiếp theo?”.
- Loại bỏ các câu hỏi yêu cầu user đề xuất solution hoặc đánh giá feature.

Nhóm cũng bổ sung câu hỏi để kiểm tra giả thuyết cạnh tranh: người học bị kẹt vì thiếu kiến thức nền, vì cách giải thích chưa phù hợp hay vì một nguyên nhân khác.

Mục tiêu của các thay đổi này là giữ cuộc phỏng vấn tập trung vào behavior, workaround và consequence đã thực sự xảy ra.### Practice Reflection

**1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?**

Câu hỏi “Bạn có thể kể lần gần nhất bạn gặp một phần không hiểu và bạn đã giải quyết nó như thế nào?” giúp người tham gia bắt đầu mô tả hành vi thực tế. Từ đó, người tham gia cho biết họ chụp ảnh phần slide không hiểu, gửi sang AI bên ngoài và yêu cầu giải thích hoặc tạo lộ trình kiến thức.

Các câu hỏi về thời gian như “Quá trình đó thường mất khoảng bao nhiêu thời gian?” cũng giúp làm rõ consequence. Người tham gia cho biết nội dung đơn giản có thể mất khoảng 5–10 phút, trong khi nội dung phức tạp có thể mất vài tiếng và phải xem lại sau.

**2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?**

Tôi chưa giữ cuộc phỏng vấn tập trung đủ lâu vào một sự kiện cụ thể. Sau khi người tham gia bắt đầu kể, tôi nên tiếp tục hỏi theo trình tự “sau đó chuyện gì xảy ra?” thay vì chuyển sang các tình huống chung khác.

Ngoài ra, câu hỏi “Theo bạn nền tảng hiện tại có cách nào có thể phát triển để giúp bạn giải quyết việc hiểu bài nhanh hơn không?” đã chuyển từ problem interview sang hỏi ý tưởng solution. Điều này khiến người tham gia bắt đầu đề xuất một nút và cách AI nên hoạt động, trong khi mục tiêu của bài là tìm evidence về problem chứ không phải thiết kế feature.

Trong lần phỏng vấn thật, tôi sẽ tránh hỏi user nên xây tính năng gì và thay bằng các câu hỏi về cách họ đang xử lý vấn đề hiện tại.

**3. Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?**

Nhóm sửa Conversation Guide theo ba hướng:

- Neo mạnh hơn vào một sự kiện gần nhất thay vì hỏi về hành vi chung.
- Thêm các câu follow-up theo trình tự hành động như “Sau đó chuyện gì xảy ra?” và “Bạn làm gì tiếp theo?”.
- Loại bỏ các câu hỏi yêu cầu user đề xuất solution hoặc đánh giá feature.

Nhóm cũng bổ sung câu hỏi để kiểm tra giả thuyết cạnh tranh: người học bị kẹt vì thiếu kiến thức nền, vì cách giải thích chưa phù hợp hay vì một nguyên nhân khác.

Mục tiêu của các thay đổi này là giữ cuộc phỏng vấn tập trung vào behavior, workaround và consequence đã thực sự xảy ra.

**1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?**

Câu hỏi “Bạn có thể kể lần gần nhất bạn gặp một phần không hiểu và bạn đã giải quyết nó như thế nào?” giúp người tham gia bắt đầu mô tả hành vi thực tế. Từ đó, người tham gia cho biết họ chụp ảnh phần slide không hiểu, gửi sang AI bên ngoài và yêu cầu giải thích hoặc tạo lộ trình kiến thức.

Các câu hỏi về thời gian như “Quá trình đó thường mất khoảng bao nhiêu thời gian?” cũng giúp làm rõ consequence. Người tham gia cho biết nội dung đơn giản có thể mất khoảng 5–10 phút, trong khi nội dung phức tạp có thể mất vài tiếng và phải xem lại sau.

**2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?**

Tôi chưa giữ cuộc phỏng vấn tập trung đủ lâu vào một sự kiện cụ thể. Sau khi người tham gia bắt đầu kể, tôi nên tiếp tục hỏi theo trình tự “sau đó chuyện gì xảy ra?” thay vì chuyển sang các tình huống chung khác.

Ngoài ra, câu hỏi “Theo bạn nền tảng hiện tại có cách nào có thể phát triển để giúp bạn giải quyết việc hiểu bài nhanh hơn không?” đã chuyển từ problem interview sang hỏi ý tưởng solution. Điều này khiến người tham gia bắt đầu đề xuất một nút và cách AI nên hoạt động, trong khi mục tiêu của bài là tìm evidence về problem chứ không phải thiết kế feature.

Trong lần phỏng vấn thật, tôi sẽ tránh hỏi user nên xây tính năng gì và thay bằng các câu hỏi về cách họ đang xử lý vấn đề hiện tại.

**3. Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?**

Nhóm sửa Conversation Guide theo ba hướng:

- Neo mạnh hơn vào một sự kiện gần nhất thay vì hỏi về hành vi chung.
- Thêm các câu follow-up theo trình tự hành động như “Sau đó chuyện gì xảy ra?” và “Bạn làm gì tiếp theo?”.
- Loại bỏ các câu hỏi yêu cầu user đề xuất solution hoặc đánh giá feature.

Nhóm cũng bổ sung câu hỏi để kiểm tra giả thuyết cạnh tranh: người học bị kẹt vì thiếu kiến thức nền, vì cách giải thích chưa phù hợp hay vì một nguyên nhân khác.

Mục tiêu của các thay đổi này là giữ cuộc phỏng vấn tập trung vào behavior, workaround và consequence đã thực sự xảy ra.

---

## 5. AI Support Log

Trong bài lab này, tôi có sử dụng AI như một công cụ hỗ trợ.

### AI đã hỗ trợ

- Giúp rà soát cách diễn đạt Problem Hypothesis và JTBD Hypothesis.
- Giúp kiểm tra Conversation Guide để phát hiện các câu hỏi có khả năng dẫn dắt người được phỏng vấn.
- Giúp tổ chức lại cấu trúc README và Practice Notes.
- Sau buổi practice interview, AI hỗ trợ chỉ ra các đoạn câu hỏi đã chuyển từ problem interview sang solution/feature ideation.
- Giúp gợi ý cách sửa Conversation Guide theo hướng tập trung hơn vào sự kiện, hành vi, workaround và consequence đã xảy ra.

### Điểm AI chưa thể thay thế

AI không được sử dụng để:

- tạo dữ liệu phỏng vấn;
- bịa lời nói hoặc exact quote của người tham gia;
- tạo fake evidence;
- tự suy diễn những thông tin người tham gia chưa nói;
- thay thế việc tôi tự nghe lại bản ghi và đánh giá cách mình phỏng vấn.

### Điểm tôi tự kiểm tra và sửa

Tôi đối chiếu các nhận định với bản ghi phỏng vấn thật.

Sau khi nghe lại, tôi nhận ra một số câu hỏi của mình đã chuyển sang hỏi người tham gia đề xuất cách phát triển nền tảng. Tôi sửa Conversation Guide bằng cách loại bỏ các câu hỏi về feature tương lai và thay bằng các câu hỏi về hành vi, nguyên nhân và hậu quả đã xảy ra.
