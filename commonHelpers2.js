import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form");let r={};function o(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;r=e;for(const a in e)t.elements[a].value=e[a]}catch(e){console.log(e)}}o();t.addEventListener("input",s);t.addEventListener("submit",m);function s(e){const{target:a}=e,l=a.name,n=a.value;r[l]=n,localStorage.setItem("feedback-form-state",JSON.stringify(r))}function m(e){if(!t.elements.email.value.trim()&&!t.elements.message.value.trim()){alert("Будь ласка, заповніть поле електронної пошти та поле коментару.");return}if(!t.elements.email.value.trim()){alert("Будь ласка, заповніть поле електронної пошти.");return}if(t.elements.message.value.trim())alert("Дякуємо за ваш відгук!"),e.preventDefault(),console.log(r),localStorage.removeItem("feedback-form-state"),t.reset();else{alert("Будь ласка, заповніть поле textarea.");return}}
//# sourceMappingURL=commonHelpers2.js.map