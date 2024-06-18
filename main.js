(()=>{"use strict";class t{constructor(){this.container=null}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}drawUI(){this.checkBinding(),this.container.innerHTML=t.markup}static get markup(){return'<div class="validator__body">\n    <div class="validator__content">\n      <div class="validator__tittle">\n        <h1>Credit Card Validator</h1>\n      </div>\n      <div class="validator__widget widget">\n        <ul class="widget__list">\n           <div class="widget__item_absolute">\n             <li class="widget__item visa"><span class="card__tittle visually_hidden">Visa</span></li>\n           </div>\n           <div class="widget__item_absolute">\n             <li class="widget__item mastercard"><span class="card__tittle visually_hidden">MasterCard</span>\n             </li>\n           </div>\n           <div class="widget__item_absolute">\n             <li class="widget__item amex"><span class="card__tittle visually_hidden">American Express</span></li>\n           </div>\n           <div class="widget__item_absolute">\n             <li class="widget__item discover"><span class="card__tittle visually_hidden">Discover</span></li>\n           </div>\n           <div class="widget__item_absolute">\n             <li class="widget__item jcb"><span class="card__tittle visually_hidden">JCB</span></li>\n           </div>\n           <div class="widget__item_absolute">\n             <li class="widget__item diners"><span class="card__tittle visually_hidden">Dinners Club</span></li>\n           </div>\n           <div class="widget__item_absolute">\n             <li class="widget__item mir"><span class="card__tittle visually_hidden">МИР</span></li>\n           </div>\n         </ul>\n        <form class="widget__form">\n          <div class="widget__row">\n            <input class="input" type="number" placeholder="Enter the card number">\n            <button class="button" type="submit">Click to Validate</button>\n          </div>\n          <div class="mes d_none">\n            <p class="text"></p>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>'}checkBinding(){if(null===this.container)throw new Error("Widget is not bind to DOM")}}class e{constructor(t){this.regex1=/^[0-9]{14}$/,this.regex2=/^[0-9]{15}$/,this.regex3=/^[0-9]{16}$/,this.paySistem=t}checkNumLength(t){return this.regex1.test(t)||this.regex2.test(t)||this.regex3.test(t)}checkLuhnAlgo(t){let e=0,s=!1;if(t&&+t){this.temp=String(t).replace(/[^\d]/g,"");for(let t=this.temp.length-1;t>=0;t-=1){let i=parseInt(this.temp.charAt(t),10);s&&(i*=2,i>9&&(i-=9)),e+=i,s=!s}return e%10==0}return!1}checkPaySystem(t){return!!(t&&(this.value=String(t).trim(),this.paySistem[this.value]&&this.value.startsWith(this.paySistem[this.value].starts)))&&this.paySistem[this.value].name}}class s{constructor(t,s){this.widget=t,this.paySistem=s,this.input=this.widget.querySelector(".input"),this.mes=this.widget.querySelector(".mes"),this.mesText=this.widget.querySelector(".text"),this.widgetList=this.widget.querySelector(".widget__list"),this.validator=new e(this.paySistem),this.form=this.widget.querySelector(".widget__form"),this.button=this.widget.querySelector(".button")}toAppoint(){this.input.addEventListener("input",(()=>this.showPaySistem())),this.form.addEventListener("submit",(t=>{t.preventDefault(),this.inputHandler()}))}showPaySistem(){const t=this.input.value.length;if(2===t){const t=this.getPaySistem(this.input.value);t?(this.removeMes(),this.addCheckedTransparent(t)):this.addMes("the payment system was not found","colorInvalid","bgInvalid")}t<2&&(this.clean(),this.removeMes())}inputHandler(){const{value:t}=this.input;if(this.getPaySistem(t))if(this.validator.checkNumLength(t)&&this.validator.checkLuhnAlgo(t)){const e=this.getPaySistem(t),s=this.getFullName(e);s&&(this.clean(),this.removeMes(),this.addMes(`The card is valid, the ${s} payment system`,"colorValid","bgValid"),this.addCheckedTransparent(e))}else this.addMes("The card is not valid","colorInvalid","bgInvalid"),this.clean();else this.addMes("the payment system was not found","colorInvalid","bgInvalid")}getFullName(t,e=this.paySistem){const s=Object.values(e).find((e=>e.name===t));return s?(this.fullName=s.fullName,this.fullName):""}addCheckedTransparent(t){this.widgetList.querySelector(`.${t}`).classList.add("checked"),this.widgetList.querySelectorAll(".widget__item").forEach((t=>{t.classList.add("transparent")}))}clean(){this.widgetList.querySelectorAll(".widget__item").forEach((t=>{t.classList.remove("checked","transparent")}))}getPaySistem(t){const e=t.split(""),s=e[0]+e[1];return!(!this.paySistem[e[0]]&&!this.paySistem[s])&&(this.validator.checkPaySystem(e[0])||this.validator.checkPaySystem(s))}addMes(t,e,s){this.mesText.textContent=t,this.mesText.classList.add(e),this.mes.classList.remove("d_none"),this.input.classList.add(s)}removeMes(){this.mesText.textContent="",this.mesText.className="text",this.mes.className="mes d_none",this.input.className="input"}}const i={34:{starts:34,name:"amex",fullName:"American Express",length:15},37:{starts:37,name:"amex",fullName:"American Express",length:15},30:{starts:30,name:"diners",fullName:"Dinners Club",length:14},36:{starts:36,name:"diners",fullName:"Dinners Club",length:14},38:{starts:38,name:"diners",fullName:"Dinners Club",length:14},39:{starts:39,name:"diners",fullName:"Dinners Club",length:14},60:{starts:60,name:"discover",fullName:"Discover",length:16},62:{starts:62,name:"discover",fullName:"Discover",length:16},64:{starts:64,name:"discover",fullName:"Discover",length:16},65:{starts:65,name:"discover",fullName:"Discover",length:16},35:{starts:35,name:"jcb",fullName:"JCB",length:16},51:{starts:51,name:"mastercard",fullName:"MasterCard",length:16},52:{starts:52,name:"mastercard",fullName:"MasterCard",length:16},53:{starts:53,name:"mastercard",fullName:"MasterCard",length:16},54:{starts:54,name:"mastercard",fullName:"MasterCard",length:16},55:{starts:55,name:"mastercard",fullName:"MasterCard",length:16},2:{starts:2,name:"mir",fullName:"МИР",length:16},4:{starts:4,name:"visa",fullName:"Visa",length:16}};(new class{init(e){this.widget=new t,this.widget.bindToDOM(e),this.widget.drawUI(),this.handler=new s(this.widget.container,i),this.handler.toAppoint()}}).init(document.querySelector(".validator"))})();