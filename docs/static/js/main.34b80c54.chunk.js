(this["webpackJsonpsm-choosing"]=this["webpackJsonpsm-choosing"]||[]).push([[0],{11:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),i=a(6),l=a(0),c=a.n(l),s=a(29),u=a.n(s),b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"renderLoading",value:function(){return c.a.createElement("span",{className:u.a.loading},"Loading")}},{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.children,n=e.isLoading;return c.a.createElement("button",{className:u.a.mButton,onClick:t},n?this.renderLoading():a)}}]),a}(c.a.Component);t.a=b},18:function(e,t,a){"use strict";var n,r,o,i,l=a(5),c=a(3),s=a(4),u=a(2),b=(a(19),a(1)),p=a(21),h=a.n(p),m=(n=function(){function e(){var t=this;Object(c.a)(this,e),Object(l.a)(this,"boardName",r,this),Object(l.a)(this,"boardId",o,this),Object(l.a)(this,"loading",i,this),this.loading=!0,h.a.get("http://localhost:3001/boardInfo").then((function(e){return e.data})).then((function(e){var a=e.boardName,n=e.boardId;t.boardName=a,t.boardId=n,t.loading=!1}))}return Object(s.a)(e,[{key:"onChangeTitle",value:function(e){var t=e.title;this.boardName=t}},{key:"removeBoard",value:function(){return e=this.boardId,h.a.post("http://localhost:3001/board/delete",{id:e});var e}}]),e}(),r=Object(u.a)(n.prototype,"boardName",[b.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),o=Object(u.a)(n.prototype,"boardId",[b.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),i=Object(u.a)(n.prototype,"loading",[b.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Object(u.a)(n.prototype,"onChangeTitle",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"onChangeTitle"),n.prototype),Object(u.a)(n.prototype,"removeBoard",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"removeBoard"),n.prototype),n);t.a=new m},22:function(e,t,a){e.exports={item:"style_item__2343w",tip:"style_tip__2zmJL"}},23:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),i=a(6),l=a(0),c=a.n(l),s=a(24),u=a.n(s),b=a(81),p=a(30),h=a.n(p),m=u.a.bind(h.a),d=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).modal=void 0,r.getWrapClassNames=function(){var e=r.props.isVisible;return m("modal__wrap",{modalAnimationIn:e,modalAnimationOut:!e})},r.onMouseDown=function(e){!!e.target.getAttribute("data-overlay")&&r.props.onClose()},r.modal=c.a.createRef(),r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement(b.a,null,c.a.createElement("div",{ref:this.modal,className:this.getWrapClassNames(),onMouseDown:this.onMouseDown,role:"presentation","data-overlay":"1"},c.a.createElement("div",{className:h.a.modal},e)))}}]),a}(c.a.Component);t.a=d},25:function(e,t,a){e.exports={testSection:"style_testSection__2-Hgo",testSectionList:"style_testSectionList__2pVrc",tip:"style_tip__3n_Hq"}},26:function(e,t,a){e.exports={item:"style_item__zOKNe",textBlock:"style_textBlock__cK_nS",actions:"style_actions__2Q_Rv"}},29:function(e,t,a){e.exports={mButton:"style_mButton__sozU8",loading:"style_loading__2TbSY","blink-animation":"style_blink-animation__2y1OE"}},30:function(e,t,a){e.exports={modal__wrap:"style_modal__wrap__3YJZV",modal:"style_modal__2m6kQ",modalAnimationIn:"style_modalAnimationIn__2G8EA",fadein:"style_fadein__sbovT",modalAnimationOut:"style_modalAnimationOut__1xKkO",fadeout:"style_fadeout__18FUp"}},31:function(e,t,a){e.exports={nav:"style_nav__3wEDU"}},45:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(21),r=a.n(n),o=function(){return r.a.get("http://localhost:3001/accessRules").then((function(e){return e.data}))},i=function(e){var t=e.boardId,a=e.userId;return r.a.get("http://localhost:3001/accessRulesForBoard",{params:{boardId:t,userId:a}}).then((function(e){return e.data}))}},46:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),i=a(6),l=a(0),c=a.n(l),s=a(24),u=a.n(s),b=a(48),p=a.n(b),h=u.a.bind(p.a),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"onBlur",value:function(){var e=this.props.onBlur;e&&e()}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.className,n=e.onChange;return c.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},onBlur:this.onBlur,className:h("input",a)})}}]),a}(c.a.Component);t.a=m},48:function(e,t,a){e.exports={input:"style_input__1k1f5"}},49:function(e,t,a){e.exports={buttonsBar:"style_buttonsBar__ktykb"}},52:function(e,t,a){e.exports=a(80)},57:function(e,t,a){},58:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n,r,o,i,l,c,s,u,b,p,h,m,d,f=a(0),y=a.n(f),g=a(12),O=a.n(g),j=a(28),v=(a(57),a(3)),w=a(4),D=a(7),k=a(6),E=a(8),C=(a(58),function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"canvas"})}}]),a}(y.a.Component)),S=a(11),_=a(5),T=a(2),A=(a(19),a(1)),M=a(18),x=a(45),N=new(n=function e(){var t=this;Object(v.a)(this,e),Object(_.a)(this,"loading",r,this),Object(_.a)(this,"canShowShareButton",o,this),Object(x.b)().then((function(e){var a=e.canShowShareButton;t.canShowShareButton=a}))},r=Object(T.a)(n.prototype,"loading",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),o=Object(T.a)(n.prototype,"canShowShareButton",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),n),B=(i=function(){function e(){Object(v.a)(this,e),Object(_.a)(this,"isLoading",l,this),Object(_.a)(this,"boardTitle",c,this),Object(_.a)(this,"canShowShareButton",s,this),Object(_.a)(this,"isTitleDialogVisible",u,this),Object(_.a)(this,"isShareDialogVisible",b,this),this.initObservers()}return Object(w.a)(e,[{key:"showModal",value:function(){this.isTitleDialogVisible=!0,this.isShareDialogVisible=!1}},{key:"showShareModal",value:function(){this.isShareDialogVisible=!0,this.isTitleDialogVisible=!1}},{key:"hideModal",value:function(){this.isTitleDialogVisible=!1}},{key:"hideShareModal",value:function(){this.isShareDialogVisible=!1}},{key:"initObservers",value:function(){var e=this;Object(A.l)(M.a,(function(t){if("update"===t.type){var a=t.name,n=t.newValue;"boardName"===a&&(e.boardTitle=n),"loading"===a&&(e.isLoading=n)}})),Object(A.l)(N,(function(t){if("update"===t.type){var a=t.name,n=t.newValue;"canShowShareButton"===a&&(e.canShowShareButton=n)}}))}}]),e}(),l=Object(T.a)(i.prototype,"isLoading",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return M.a.loading}}),c=Object(T.a)(i.prototype,"boardTitle",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return M.a.boardName}}),s=Object(T.a)(i.prototype,"canShowShareButton",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return N.canShowShareButton}}),u=Object(T.a)(i.prototype,"isTitleDialogVisible",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=Object(T.a)(i.prototype,"isShareDialogVisible",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(T.a)(i.prototype,"showModal",[A.d],Object.getOwnPropertyDescriptor(i.prototype,"showModal"),i.prototype),Object(T.a)(i.prototype,"showShareModal",[A.d],Object.getOwnPropertyDescriptor(i.prototype,"showShareModal"),i.prototype),Object(T.a)(i.prototype,"hideModal",[A.d],Object.getOwnPropertyDescriptor(i.prototype,"hideModal"),i.prototype),Object(T.a)(i.prototype,"hideShareModal",[A.d],Object.getOwnPropertyDescriptor(i.prototype,"hideShareModal"),i.prototype),i),I=a(9),V=(a(75),a(23)),z=a(46),P=(p=function(){function e(){Object(v.a)(this,e),Object(_.a)(this,"title",h,this),Object(_.a)(this,"isDeleteDialogShown",m,this),Object(_.a)(this,"isDuplicateDialogShown",d,this),Object(A.l)(M.a,(function(e){}))}return Object(w.a)(e,[{key:"onChangeTitle",value:function(e){this.title=e}},{key:"onSave",value:function(){M.a.onChangeTitle({title:this.title})}},{key:"showDeleteDialog",value:function(){this.isDeleteDialogShown=!0,this.isDuplicateDialogShown=!1}},{key:"hideDeleteDialog",value:function(){this.isDeleteDialogShown=!1}},{key:"showDuplicateDialog",value:function(){this.isDuplicateDialogShown=!0,this.isDeleteDialogShown=!1}},{key:"hideDuplicateDialog",value:function(){this.isDuplicateDialogShown=!1}}]),e}(),h=Object(T.a)(p.prototype,"title",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return M.a.boardName}}),m=Object(T.a)(p.prototype,"isDeleteDialogShown",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=Object(T.a)(p.prototype,"isDuplicateDialogShown",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(T.a)(p.prototype,"onChangeTitle",[A.d],Object.getOwnPropertyDescriptor(p.prototype,"onChangeTitle"),p.prototype),Object(T.a)(p.prototype,"onSave",[A.d],Object.getOwnPropertyDescriptor(p.prototype,"onSave"),p.prototype),Object(T.a)(p.prototype,"showDeleteDialog",[A.d],Object.getOwnPropertyDescriptor(p.prototype,"showDeleteDialog"),p.prototype),Object(T.a)(p.prototype,"hideDeleteDialog",[A.d],Object.getOwnPropertyDescriptor(p.prototype,"hideDeleteDialog"),p.prototype),Object(T.a)(p.prototype,"showDuplicateDialog",[A.d],Object.getOwnPropertyDescriptor(p.prototype,"showDuplicateDialog"),p.prototype),Object(T.a)(p.prototype,"hideDuplicateDialog",[A.d],Object.getOwnPropertyDescriptor(p.prototype,"hideDuplicateDialog"),p.prototype),p),L=a(49),U=a.n(L),W=y.a.lazy((function(){return a.e(5).then(a.bind(null,95))})),F=y.a.lazy((function(){return a.e(6).then(a.bind(null,96))})),J=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).store=void 0,n.onCloseModal=function(){var e=n.props.onClose;n.store.onSave(),e&&e()},n.store=new P,n}return Object(w.a)(a,[{key:"renderDuplicateDialog",value:function(){var e=this;return y.a.createElement(f.Suspense,{fallback:y.a.createElement("div",null,"Loading...")},y.a.createElement(F,{isVisible:!0,onClose:function(){return e.store.hideDeleteDialog()},onSubmit:function(){}}))}},{key:"renderDeleteDialog",value:function(){var e=this;return y.a.createElement(f.Suspense,{fallback:y.a.createElement("div",null,"Loading...")},y.a.createElement(W,{isVisible:!0,onClose:function(){return e.store.hideDeleteDialog()}}))}},{key:"renderOwnView",value:function(){var e=this,t=this.props.isVisible,a=this.store.title;return y.a.createElement(V.a,{onClose:this.onCloseModal,isVisible:t},y.a.createElement("section",null,y.a.createElement(z.a,{value:a,onChange:function(t){return e.store.onChangeTitle(t)}})),y.a.createElement("section",{className:U.a.buttonsBar},y.a.createElement(S.a,{onClick:function(){return e.store.showDeleteDialog()}},"Delete"),y.a.createElement(S.a,{onClick:function(){return e.store.showDuplicateDialog()}},"Duplicate"),y.a.createElement(S.a,null,"Share")))}},{key:"render",value:function(){var e=this.store,t=e.isDeleteDialogShown,a=e.isDuplicateDialogShown;return t?this.renderDeleteDialog():a?this.renderDuplicateDialog():this.renderOwnView()}}]),a}(y.a.Component),R=Object(I.a)(J);new function e(){Object(v.a)(this,e)};var K,H,Q,Y,q,G,Z,X,$,ee,te,ae,ne=Object(I.a)((function(e){var t=e.onClose,a=e.isVisible;return y.a.createElement(V.a,{onClose:t,isVisible:a})})),re=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).store=void 0,n.store=new B,n}return Object(w.a)(a,[{key:"renderContent",value:function(){var e=this,t=this.store,a=t.canShowShareButton,n=t.boardTitle;return y.a.createElement(y.a.Fragment,null,y.a.createElement("a",{href:"#grid"},y.a.createElement("h1",null,"Miro")),y.a.createElement("button",{onClick:function(){return e.store.showModal()}},y.a.createElement("h1",null,n)),a&&y.a.createElement(S.a,{onClick:function(){return e.store.showShareModal()}},"Share"))}},{key:"render",value:function(){var e=this,t=this.store,a=t.isTitleDialogVisible,n=t.isShareDialogVisible,r=t.isLoading;return y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:"titleBar"},r?"loading":this.renderContent()),a&&y.a.createElement(R,{onClose:function(){return e.store.hideModal()},isVisible:!0}),n&&y.a.createElement(ne,{onClose:function(){return e.store.hideModal()},isVisible:!0}))}}]),a}(y.a.Component),oe=Object(I.a)(re),ie=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"board"},y.a.createElement(oe,null))}}]),a}(y.a.Component),le=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"board"},y.a.createElement(ie,null),y.a.createElement(C,null))}}]),a}(y.a.Component),ce=Object(I.a)(le),se=(K=function(){function e(){Object(v.a)(this,e),Object(_.a)(this,"canShowMobile",H,this),Object(_.a)(this,"canShowWeb",Q,this),this.choosePlatform()}return Object(w.a)(e,[{key:"choosePlatform",value:function(){this.canShowWeb=!0}}]),e}(),H=Object(T.a)(K.prototype,"canShowMobile",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Q=Object(T.a)(K.prototype,"canShowWeb",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),K),ue=y.a.lazy((function(){return a.e(4).then(a.bind(null,94))})),be=y.a.lazy((function(){return a.e(3).then(a.bind(null,93))})),pe=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).store=void 0,n.store=new se,n}return Object(w.a)(a,[{key:"renderWebView",value:function(){return y.a.createElement(f.Suspense,{fallback:y.a.createElement("div",null,"Loading...")},y.a.createElement(be,null))}},{key:"renderMobileView",value:function(){return y.a.createElement(f.Suspense,{fallback:y.a.createElement("div",null,"Loading...")},y.a.createElement(ue,null))}},{key:"render",value:function(){var e=this.store.canShowMobile;return y.a.createElement(f.Fragment,null,e?this.renderMobileView():this.renderWebView())}}]),a}(y.a.Component),he=Object(I.a)(pe),me=a(25),de=a.n(me),fe=new(Y=function(){function e(){Object(v.a)(this,e),Object(_.a)(this,"autoIncrementTestName",q,this),Object(_.a)(this,"autoIncrementCount",G,this)}return Object(w.a)(e,[{key:"initAutoUpdater",value:function(){var e=this;Z=setInterval((function(){e.autoIncrementTestName+=1}),300)}},{key:"removeAutoUpdater",value:function(){clearInterval(Z),Z=null}},{key:"toggleIncrement",value:function(){Z?this.removeAutoUpdater():this.initAutoUpdater()}}]),e}(),q=Object(T.a)(Y.prototype,"autoIncrementTestName",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),G=Object(T.a)(Y.prototype,"autoIncrementCount",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),Object(T.a)(Y.prototype,"toggleIncrement",[A.d],Object.getOwnPropertyDescriptor(Y.prototype,"toggleIncrement"),Y.prototype),Y),ye=a(26),ge=a.n(ye),Oe=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"renderContent",value:function(){var e=this.props.store.autoIncrementTestName;return y.a.createElement(f.Fragment,null,y.a.createElement("div",{className:ge.a.image}),y.a.createElement("div",{className:ge.a.textBlock},e))}},{key:"render",value:function(){return y.a.createElement("div",{className:ge.a.item},this.renderContent())}}]),a}(y.a.Component),je=Object(I.a)(Oe),ve=a(22),we=a.n(ve),De=a(51),ke=new(X=function(){function e(){Object(v.a)(this,e),Object(_.a)(this,"massData",$,this),Object(_.a)(this,"testArray",ee,this),Object(_.a)(this,"testObj",te,this),Object(_.a)(this,"testCombination",ae,this)}return Object(w.a)(e,[{key:"toggleTestArrayChange",value:function(){this.testArray[0].text="".concat(Math.random())}},{key:"toggleTestObjChange",value:function(){this.testObj.four[0]="".concat(Math.random())}},{key:"toggleTestObjBlock",value:function(){this.testObj.four=["".concat(Math.random()),"".concat(Math.random()),"".concat(Math.random())]}},{key:"toggleTestCombiBlock",value:function(){this.testCombination[0].obj.four=["".concat(Math.random()),"".concat(Math.random()),"".concat(Math.random())]}},{key:"toggleTestCombiItem",value:function(){this.testCombination[0].obj.four[0]="".concat(Math.random())}},{key:"toggleMasData",value:function(){this.massData=Object(De.a)(this.massData)}},{key:"injectMasData",value:function(){this.massData[0].obj.four=[{text:"testArray1"},{text:"testArray1"},{text:"testArray1"},{text:"testArray1"}]}}]),e}(),$=Object(T.a)(X.prototype,"massData",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:[{text:"testArray1"},{text:"testArray1"},{text:"testArray1"},{text:"testArray1"}]}},{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:[{text:"testArray1"},{text:"testArray1"},{text:"testArray1"},{text:"testArray1"}]}},{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:[{text:"testArray1"},{text:"testArray1"},{text:"testArray1"},{text:"testArray1"}]}},{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:[{text:"testArray1"},{text:"testArray1"},{text:"testArray1"},{text:"testArray1"}]}}]}}),ee=Object(T.a)(X.prototype,"testArray",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{text:"testArray1"},{text:"testArray2"},{text:"testArray3"},{text:"testArray4"}]}}),te=Object(T.a)(X.prototype,"testObj",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:["4444444","4444444","4444444","4444444"]}}}),ae=Object(T.a)(X.prototype,"testCombination",[A.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:["4444444","4444444","4444444","4444444"]}},{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:["4444444","4444444","4444444","4444444"]}},{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:["4444444","4444444","4444444","4444444"]}},{obj:{one:["123213","123213","123213"],two:["22222","22222","22222","22222"],three:["333333","333333","333333"],four:["4444444","4444444","4444444","4444444"]}}]}}),Object(T.a)(X.prototype,"toggleTestArrayChange",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"toggleTestArrayChange"),X.prototype),Object(T.a)(X.prototype,"toggleTestObjChange",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"toggleTestObjChange"),X.prototype),Object(T.a)(X.prototype,"toggleTestObjBlock",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"toggleTestObjBlock"),X.prototype),Object(T.a)(X.prototype,"toggleTestCombiBlock",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"toggleTestCombiBlock"),X.prototype),Object(T.a)(X.prototype,"toggleTestCombiItem",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"toggleTestCombiItem"),X.prototype),Object(T.a)(X.prototype,"toggleMasData",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"toggleMasData"),X.prototype),Object(T.a)(X.prototype,"injectMasData",[A.d],Object.getOwnPropertyDescriptor(X.prototype,"injectMasData"),X.prototype),X),Ee=Object(I.a)((function(e){var t=ke.testArray[e.kiy].text;return y.a.createElement("li",null,t)})),Ce=Object(I.a)((function(e){return e.item.map((function(e){return y.a.createElement("li",null,e)}))})),Se=Object(I.a)((function(e){return e.items.map((function(e){return y.a.createElement("li",null,e)}))})),_e=Object(I.a)((function(e){var t=e.item;return Object.values(t.obj).map((function(e){return y.a.createElement(Se,{items:e})}))})),Te=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render1lvlArray",value:function(){var e=ke.testArray;return y.a.createElement("ul",null,e.map((function(e,t){return y.a.createElement(Ee,{store:ke,kiy:t})})))}},{key:"render1lvlObj",value:function(){var e=ke.testObj,t=Object.values(e);return y.a.createElement("ul",null,t.map((function(e,t){return y.a.createElement(Ce,{item:e})})))}},{key:"renderMultiLvlArray",value:function(){var e=ke.testCombination;return y.a.createElement("ul",{style:{paddingLeft:60}},e.map((function(e,t){return y.a.createElement(_e,{item:e})})))}},{key:"render",value:function(){return y.a.createElement("div",{className:we.a.item},y.a.createElement("section",null,y.a.createElement("div",{className:we.a.tip},"Test shows how mobx will update nested values in object"),y.a.createElement(S.a,{onClick:function(){return ke.toggleTestArrayChange()}},"toggle"),this.render1lvlArray()),y.a.createElement("section",null,y.a.createElement("div",{className:we.a.tip},"Test shows how mobx will update nested values in array"),y.a.createElement(S.a,{onClick:function(){return ke.toggleTestObjChange()}},"toggle obj"),y.a.createElement(S.a,{onClick:function(){return ke.toggleTestObjBlock()}},"toggle obj section"),this.render1lvlObj()),y.a.createElement("section",null,y.a.createElement("div",{className:we.a.tip},"Test shows how mobx will update deeeep nested values"),y.a.createElement(S.a,{onClick:function(){return ke.toggleTestCombiBlock()}},"toggle block"),y.a.createElement(S.a,{onClick:function(){return ke.toggleTestCombiItem()}},"toggle item"),this.renderMultiLvlArray()),y.a.createElement("section",null,y.a.createElement("div",{className:we.a.tip},"Test shows how much memory mobx needed to change huge amounts of data "),y.a.createElement(S.a,{onClick:function(){return ke.toggleMasData()}},"toggleMasData"),y.a.createElement(S.a,{onClick:function(){return ke.injectMasData()}},"injectMasData")))}}]),a}(y.a.Component),Ae=Object(I.a)(Te),Me=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"renderUiTest",value:function(){for(var e=fe.autoIncrementCount,t=[],a=0;a<=e;a++)t.push(y.a.createElement(je,{store:fe}));return y.a.createElement("div",{className:de.a.testSection},y.a.createElement("div",{className:de.a.tip},"Test shows how fast mobx will render changes in dozen components from single store"),y.a.createElement("section",{className:de.a.testSectionList},t),y.a.createElement("section",null,y.a.createElement(S.a,{onClick:function(){return fe.toggleIncrement()}},"Start/stop")))}},{key:"renderStoreMemoryTest",value:function(){return y.a.createElement("div",null,y.a.createElement(Ae,null))}},{key:"render",value:function(){return y.a.createElement("div",null,this.renderUiTest(),y.a.createElement("hr",null),this.renderStoreMemoryTest())}}]),a}(y.a.Component),xe=Object(I.a)(Me),Ne=a(31),Be=a.n(Ne),Ie=function(e){Object(D.a)(a,e);var t=Object(k.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return y.a.createElement("div",{className:Be.a.App},y.a.createElement("section",{className:Be.a.nav},y.a.createElement("a",{href:"#/"},"main"),y.a.createElement("a",{href:"#/dashboard"},"dashboard"),y.a.createElement("a",{href:"#/test"},"test")),y.a.createElement(E.c,null,y.a.createElement(E.a,{path:"/",component:ce,exact:!0}),y.a.createElement(E.a,{path:"/Dashboard",component:he}),y.a.createElement(E.a,{path:"/test",component:xe})))}}]),a}(y.a.Component),Ve=Object(E.f)(Ie);O.a.render(y.a.createElement(j.a,null,y.a.createElement(Ve,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.34b80c54.chunk.js.map