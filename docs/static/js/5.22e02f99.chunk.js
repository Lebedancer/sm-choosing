(this["webpackJsonpsm-choosing"]=this["webpackJsonpsm-choosing"]||[]).push([[5],{85:function(e,t,n){e.exports={buttonsBar:"style_buttonsBar__W2BqW"}},95:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(23),r=n(11),l=n(9),c=n(5),s=n(3),u=n(4),b=n(2),h=(n(19),n(1)),p=n(18);var f,d,m,w={push:function(e){window.location.href=e},back:function(){window.history.back()},reload:function(){window.location.reload()}},g=(f=function(){function e(){Object(s.a)(this,e),Object(c.a)(this,"title",d,this),Object(c.a)(this,"deleting",m,this),Object(h.l)(p.a,(function(e){}))}return Object(u.a)(e,[{key:"onDelete",value:function(){var e=this;return this.deleting=!0,p.a.removeBoard().then((function(){e.deleting=!1,w.push("http://localhost:3000/#/Dashboard")}))}}]),e}(),d=Object(b.a)(f.prototype,"title",[h.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return p.a.boardName}}),m=Object(b.a)(f.prototype,"deleting",[h.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(b.a)(f.prototype,"onDelete",[h.d],Object.getOwnPropertyDescriptor(f.prototype,"onDelete"),f.prototype),f),O=n(85),j=n.n(O),k=new g;t.default=Object(l.a)((function(e){var t=e.onClose,n=e.isVisible,o=k.deleting;return a.a.createElement(i.a,{onClose:t,isVisible:n},a.a.createElement("h1",null,"Delete this board?"),a.a.createElement("p",null,"You have bla-blabla"),a.a.createElement("section",{className:j.a.buttonsBar},a.a.createElement(r.a,{isLoading:o,onClick:function(){k.onDelete().then((function(){return t()}))}},"Delete"),a.a.createElement(r.a,{onClick:t},"Cancel")))}))}}]);
//# sourceMappingURL=5.22e02f99.chunk.js.map