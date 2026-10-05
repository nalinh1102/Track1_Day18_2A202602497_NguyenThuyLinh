'use strict';
const pane=document.getElementById('support');
let option=['A','B','C'].includes(new URLSearchParams(location.search).get('option'))?new URLSearchParams(location.search).get('option'):'A';
let answers={};
let previousScreen=null;
const topics={
 gradient:{title:'Gradient và hướng giảm loss',body:'Gradient chỉ hướng tăng nhanh nhất của loss. Muốn giảm loss, ta thử đi ngược hướng đó bằng cách trừ gradient. Với L(θ) = θ² và θ = 2, gradient là 4. Trừ một bước 0,4 đưa θ về 1,6: loss giảm từ 4 xuống 2,56. Bước quá lớn vẫn có thể làm loss tăng.'},
 rate:{title:'Learning rate và độ lớn bước đi',body:'Learning rate α nhân với gradient để xác định bước cập nhật. α = 0,1 và gradient = 4 tạo bước 0,4. α quá nhỏ khiến tiến triển chậm; quá lớn có thể vượt qua vùng loss thấp và gây dao động. Learning rate không quyết định dấu của gradient.'},
 example:{title:'Giải thích bằng ví dụ khác',body:'Hãy hình dung đang đứng trên một sườn đồi. Gradient chỉ hướng lên dốc nhanh nhất tại vị trí hiện tại. Muốn đi xuống, bạn bước theo hướng ngược lại. Learning rate giống độ dài bước chân. Địa hình thay đổi nên sau mỗi bước, bạn cần kiểm tra lại hướng dốc.'}
};
const button=(text,action,secondary=false)=>`<button ${secondary?'class="secondary"':''} data-action="${action}">${text}</button>`;
const actions=(items)=>`<div class="actions">${items.join('')}</div>`;
function render(html){pane.innerHTML=html;}
function reset(){answers={};previousScreen=null;document.querySelectorAll('[data-option]').forEach(b=>b.setAttribute('aria-current',String(b.dataset.option===option)));render('<span class="tag">Hỗ trợ khi cần</span><h2>Bạn có thể tiếp tục từ đây</h2><p class="muted">Khi gặp phần chưa hiểu, hãy yêu cầu hỗ trợ ngay trong bài học.</p>');}
function start(){
 if(option==='A') diagnostic('gradient','Bài hiện tại dùng gradient và dấu trừ để cập nhật tham số. Chưa có câu trả lời của bạn để xác định nguyên nhân.');
 if(option==='B') quiz();
 if(option==='C') choose();
}
function diagnostic(topic,reason){render(`<span class="tag">Gợi ý ôn tập</span><h2>Có thể bạn cần: ${topics[topic].title}</h2><p>Đây là gợi ý, bạn quyết định có ôn phần này hay không.</p><div class="warning">Chưa chắc đúng: không hiểu bài có thể do cách diễn đạt, không nhất thiết do thiếu kiến thức nền.</div><details><summary>Xem căn cứ của gợi ý</summary><p>${reason}</p><p>Nguồn: công thức và ví dụ trong bài Gradient Descent bên trái.</p></details>${actions([button('Ôn phần này','read:'+topic),button('Không đúng điều tôi cần','reject',true),button('Giải thích theo cách khác','read:example',true),...(option==='B'?[button('Đổi câu trả lời','quiz',true)]:[]),button('Quay lại bài','back',true)])}`);}
function quiz(){render(`<span class="tag">Hai câu để chọn hỗ trợ</span><h2>Cho biết phần bạn đang vướng</h2><p>AI dùng câu trả lời để gợi ý; hai câu này chưa đủ đánh giá đầy đủ kiến thức của bạn.</p><form id="quiz"><fieldset><legend>1. Gradient chỉ hướng nào?</legend>${radio('direction','up','Hướng loss tăng nhanh nhất')}${radio('direction','down','Hướng loss giảm nhanh nhất')}${radio('direction','unknown','Tôi chưa chắc')}</fieldset><fieldset><legend>2. Với θ = 2, gradient = 4 và α = 0,1, θ mới bằng bao nhiêu?</legend>${radio('step','correct','1,6')}${radio('step','wrong','−2')}${radio('step','unknown','Tôi chưa chắc')}</fieldset><p id="form-error" class="warning" hidden>Hãy chọn một câu trả lời ở mỗi câu, hoặc bỏ qua để tự chọn phần hỗ trợ.</p><button type="submit">Xem gợi ý</button></form>${actions([button('Bỏ qua và tự chọn','choose',true),button('Quay lại bài','back',true)])}`);}
function radio(name,value,label){return `<label><input type="radio" name="${name}" value="${value}" ${answers[name]===value?'checked':''}>${label}</label>`;}
function decide(a){if(a.direction!=='up')return 'gradient';if(a.step!=='correct')return 'rate';return 'example';}
function choose(){render(`<span class="tag">Bạn chọn nội dung hỗ trợ</span><h2>Bạn muốn hiểu rõ phần nào?</h2><p>Các chủ đề dưới đây có liên quan tới bài. Bạn tự chọn; AI chưa kết luận bạn thiếu kiến thức nào.</p><div class="choices">${Object.entries(topics).map(([key,t])=>button(t.title,'read:'+key)).join('')}</div>${actions([button('Tôi chưa biết chọn — nhờ AI gợi ý','recommend',true),button('Quay lại bài','back',true)])}`);}
function read(topic){const t=topics[topic];previousScreen=pane.innerHTML;render(`<span class="tag">Ôn tập ngắn</span><h2>${t.title}</h2><p>${t.body}</p><details><summary>Đối chiếu với bài học</summary><p>Nội dung này giải thích công thức θ mới = θ cũ − α∇L(θ) và ví dụ L(θ) = θ² ở bên trái. Đây là giải thích mẫu, chưa có bằng chứng bạn đã hiểu.</p></details><div class="warning">Nếu chưa đúng phần bạn cần, bạn có thể đổi nội dung hoặc quay lại gợi ý.</div>${actions([button('Tôi có thể tiếp tục bài','done'),button('Chọn phần khác','choose',true),button('Quay lại bước trước','previous',true),button('Quay lại bài','back',true)])}`);}
pane.addEventListener('click',e=>{const target=e.target.closest('[data-action]');if(!target)return;const action=target.dataset.action;
 if(action.startsWith('read:'))return read(action.split(':')[1]);
 if(action==='start')return start();if(action==='quiz')return quiz();if(action==='choose'||action==='reject')return choose();
 if(action==='previous'){if(previousScreen)render(previousScreen);else start();return;}
 if(action==='recommend')return diagnostic('gradient','Bạn đã yêu cầu AI gợi ý. Công thức bài học cần hiểu gradient; chưa có bằng chứng riêng về kiến thức của bạn.');
 if(action==='back')return reset();
 if(action==='done')render(`<div class="success"><h2>Trở lại bài học</h2><p>Bạn đã chọn tiếp tục. Hãy đọc lại công thức và ví dụ trong bài; lựa chọn này không phải kết quả đánh giá kiến thức.</p></div>${actions([button('Tôi vẫn cần hỗ trợ','start',true)])}`);
});
pane.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);if(!data.get('direction')||!data.get('step')){document.getElementById('form-error').hidden=false;return;}answers={direction:data.get('direction'),step:data.get('step')};const topic=decide(answers);const direction={up:'hướng tăng nhanh nhất',down:'hướng giảm nhanh nhất',unknown:'chưa chắc'};const step={correct:'1,6',wrong:'−2',unknown:'chưa chắc'};diagnostic(topic,`Bạn chọn gradient là “${direction[answers.direction]}” và tham số mới là “${step[answers.step]}”. Đối chiếu bài: gradient chỉ hướng tăng; ví dụ cho kết quả 1,6. Gợi ý này chỉ dựa trên hai câu trả lời.`);});
document.getElementById('help').addEventListener('click',start);
document.getElementById('reset').addEventListener('click',reset);
document.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{option=b.dataset.option;reset();}));
reset();
