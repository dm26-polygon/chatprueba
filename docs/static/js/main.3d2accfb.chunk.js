(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{51:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c(38),a=c.n(n),r=c(42),i=c(17),o=c(39),l=c(41),d=(c(51),c(40)),j=c.n(d)()("http://servernodeio.herokuapp.com/"),b=c(0),u=function(){var e=Object(b.jsx)(o.a,{icon:l.a}),t=Object(s.useState)("Juan"),c=Object(i.a)(t,2),n=c[0],a=c[1],d=Object(s.useState)([]),u=Object(i.a)(d,2),m=u[0],h=u[1],x=Object(s.useState)([]),O=Object(i.a)(x,2),v=O[0],p=O[1];Object(s.useEffect)((function(){console.log("Effect");var e=document.querySelector("#chat");return j.on("actions",(function(e){h([].concat(Object(r.a)(m),[e])),console.log(e)})),j.on("questionsDB",(function(e){console.log("Question res"),console.log(e),p(e)})),e.scrollTop=e.scrollHeight,function(){j.off()}}),[m]);var f=function(e){e.preventDefault();var t=document.querySelector("#chat"),c=n,s=document.getElementById("messageForm"),a={user:c,message:s.value,livesName:"Lives test 1"};j.emit("actions",a),s.value="",s.focus(),t.scrollTop=t.scrollHeight};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"text-center text-title mt-5",children:"CHAT HEROKU HTTP"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-6 container-video",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("label",{htmlFor:"",className:"text-secondary",children:"Usuario DB"}),Object(b.jsx)("input",{type:"text",className:"form-control mt-1",placeholder:"Ingresar usuario",value:n,onChange:function(e){return a(e.target.value)},autoComplete:"off"}),Object(b.jsx)("button",{className:"btn btn-info",hidden:!0,type:"submit",children:"Guardar"}),Object(b.jsx)("hr",{}),v.map((function(e,t){return Object(b.jsxs)("div",{className:"card__question me-2",children:[Object(b.jsx)("div",{className:"card__header text-white",children:Object(b.jsx)("span",{children:e.user})}),Object(b.jsx)("div",{className:"card__body text-white",children:e.message})]},t)}))]})})}),Object(b.jsxs)("div",{className:"col-6 ",children:[Object(b.jsxs)("div",{class:"container__buttons",children:[Object(b.jsx)("button",{class:"btn btn-outline-secondary",type:"button",children:"Chat Academy"}),Object(b.jsx)("button",{class:"btn btn-outline-secondary",type:"button",children:"Preguntas Academy"})]}),Object(b.jsxs)("div",{className:"container-chat",children:[Object(b.jsx)("div",{className:"container-messsages",id:"chat",children:m.map((function(e,t){return"question"===e.type?Object(b.jsxs)("div",{className:"card__question me-2",children:[Object(b.jsx)("div",{className:"card__header text-white",children:Object(b.jsx)("span",{children:e.user})}),Object(b.jsx)("div",{className:"card__body text-white",children:e.message})]},t):Object(b.jsxs)("div",{className:"card me-2 ",children:[Object(b.jsx)("div",{className:"card__header",children:Object(b.jsx)("span",{children:e.user})}),Object(b.jsx)("div",{className:"card__body",children:e.message})]},t)}))}),Object(b.jsx)("hr",{}),Object(b.jsx)("form",{onSubmit:f,children:Object(b.jsxs)("div",{className:"container-message",children:[Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("input",{type:"text",className:"form-control",id:"messageForm",placeholder:"Escribe tu comentario","aria-label":"Recipient's username","aria-describedby":"button-addon2",autoComplete:"off"}),Object(b.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:f,children:e})]}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",hidden:!0,children:"Enviar"}),Object(b.jsx)("small",{className:"text-secondary",children:'* Recuerda el signo de interrogaci\xf3n " ? " si vas a preguntar. '})]})})]})]})]})})]})};a.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.3d2accfb.chunk.js.map