(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{109:function(e,t,s){"use strict";s.r(t);var c=s(8),a=s(47),n=s.n(a),r=s(52),o=s(18),i=s(48),l=s(51),d=(s(61),s(49)),j=s.n(d)()("https://servernodejuan.herokuapp.com/"),b=s(50),u=s.n(b),m=s(0),h=function(){var e=Object(m.jsx)(i.a,{icon:l.a}),t=Object(c.useState)("Juan"),s=Object(o.a)(t,2),a=s[0],n=s[1],d=Object(c.useState)([]),b=Object(o.a)(d,2),h=b[0],x=b[1],O=Object(c.useState)([]),p=Object(o.a)(O,2),v=p[0],g=p[1];Object(c.useEffect)((function(){console.log("Conectando a la API AWS JK .."),u.a.get("https://deploy2chat.herokuapp.com/saludo").then((function(e){console.log(e.data)}));var e=document.querySelector("#chat");return j.on("sendMessages",(function(e){x([].concat(Object(r.a)(h),[e])),console.log(e)})),j.on("questionsDB",(function(e){console.log("Question res"),console.log(e),g(e)})),e.scrollTop=e.scrollHeight,function(){j.off()}}),[h]);var N=function(e){e.preventDefault();var t=document.querySelector("#chat"),s=a,c=document.getElementById("messageForm"),n={user:s,message:c.value,livesName:"Lives test 1"};j.emit("sendMessages",n),c.value="",c.focus(),t.scrollTop=t.scrollHeight};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"text-center text-title mt-5",children:"CHAT AWS JK 2"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-6 container-video",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-8",children:[Object(m.jsx)("label",{htmlFor:"",className:"text-secondary",children:"Usuario DB"}),Object(m.jsx)("input",{type:"text",className:"form-control mt-1",placeholder:"Ingresar usuario",value:a,onChange:function(e){return n(e.target.value)},autoComplete:"off"}),Object(m.jsx)("button",{className:"btn btn-info",hidden:!0,type:"submit",children:"Guardar"}),Object(m.jsx)("hr",{}),v.map((function(e,t){return Object(m.jsxs)("div",{className:"card__question me-2",children:[Object(m.jsx)("div",{className:"card__header text-white",children:Object(m.jsx)("span",{children:e.user})}),Object(m.jsx)("div",{className:"card__body text-white",children:e.message})]},t)}))]})})}),Object(m.jsxs)("div",{className:"col-6 ",children:[Object(m.jsxs)("div",{class:"container__buttons",children:[Object(m.jsx)("button",{class:"btn btn-outline-secondary",type:"button",children:"Chat Academy"}),Object(m.jsx)("button",{class:"btn btn-outline-secondary",type:"button",children:"Preguntas Academy"})]}),Object(m.jsxs)("div",{className:"container-chat",children:[Object(m.jsx)("div",{className:"container-messsages",id:"chat",children:h.map((function(e,t){return"question"===e.type?Object(m.jsxs)("div",{className:"card__question me-2",children:[Object(m.jsx)("div",{className:"card__header text-white",children:Object(m.jsx)("span",{children:e.user})}),Object(m.jsx)("div",{className:"card__body text-white",children:e.message})]},t):Object(m.jsxs)("div",{className:"card me-2 ",children:[Object(m.jsx)("div",{className:"card__header",children:Object(m.jsx)("span",{children:e.user})}),Object(m.jsx)("div",{className:"card__body",children:e.message})]},t)}))}),Object(m.jsx)("hr",{}),Object(m.jsx)("form",{onSubmit:N,children:Object(m.jsxs)("div",{className:"container-message",children:[Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("input",{type:"text",className:"form-control",id:"messageForm",placeholder:"Escribe tu comentario","aria-label":"Recipient's username","aria-describedby":"button-addon2",autoComplete:"off"}),Object(m.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:N,children:e})]}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",hidden:!0,children:"Enviar"}),Object(m.jsx)("small",{className:"text-secondary",children:'* Recuerda el signo de interrogaci\xf3n " ? " si vas a preguntar. '})]})})]})]})]})})]})};n.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))},61:function(e,t,s){}},[[109,1,2]]]);
//# sourceMappingURL=main.31f4da3c.chunk.js.map