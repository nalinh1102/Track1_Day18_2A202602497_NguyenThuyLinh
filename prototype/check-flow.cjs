const fs=require('fs'),vm=require('vm'),assert=require('assert');
const handlers={};
const pane={innerHTML:'',addEventListener:(type,fn)=>handlers[type]=fn};
const opts=['A','B','C'].map(v=>({dataset:{option:v},setAttribute(){},addEventListener(){}}));
const ctx={URLSearchParams,location:{search:'?option=A'},document:{getElementById:id=>id==='support'?pane:{addEventListener(){}},querySelectorAll:()=>opts},FormData:class{},console};
vm.createContext(ctx);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),ctx);
for(const o of ['A','B','C']){vm.runInContext('option='+JSON.stringify(o)+';reset();start();',ctx);assert(pane.innerHTML.includes(o==='A'?'Xem căn cứ':o==='B'?'Hai câu':'Bạn muốn hiểu'));}
for(const topic of ['gradient','rate','example']){vm.runInContext('read('+JSON.stringify(topic)+')',ctx);assert(pane.innerHTML.includes('Tôi có thể tiếp tục bài'));}
assert.equal(vm.runInContext("decide({direction:'unknown',step:'correct'})",ctx),'gradient');
assert.equal(vm.runInContext("decide({direction:'up',step:'wrong'})",ctx),'rate');
assert.equal(vm.runInContext("decide({direction:'up',step:'correct'})",ctx),'example');
vm.runInContext("answers={direction:'up'};reset()",ctx);
assert.equal(vm.runInContext('Object.keys(answers).length',ctx),0);
function click(action){handlers.click({target:{closest:()=>({dataset:{action}})}});}
click('reject');assert(pane.innerHTML.includes('Bạn muốn hiểu'));
click('recommend');assert(pane.innerHTML.includes('Xem căn cứ'));
const diagnosticScreen=pane.innerHTML;
click('read:gradient');click('previous');assert.equal(pane.innerHTML,diagnosticScreen);
click('choose');const choiceScreen=pane.innerHTML;
click('read:rate');click('previous');assert.equal(pane.innerHTML,choiceScreen);
click('read:example');click('done');assert(pane.innerHTML.includes('Trở lại bài học'));
click('back');assert(pane.innerHTML.includes('Hỗ trợ khi cần'));
console.log('PASS: A/B/C states; three refresher topics; diagnostic branches; reject, fallback, return and reset.');
