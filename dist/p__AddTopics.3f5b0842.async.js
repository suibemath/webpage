(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[518],{90672:function(M,i,e){"use strict";var u=e(28991),l=e(81253),s=e(85893),E=e(67294),f=e(18462),a=["fieldProps","proFieldProps"],n=function(d,p){var h=d.fieldProps,t=d.proFieldProps,m=(0,l.Z)(d,a);return(0,s.jsx)(f.Z,(0,u.Z)({ref:p,valueType:"textarea",fieldProps:h,proFieldProps:t},m))};i.Z=E.forwardRef(n)},5966:function(M,i,e){"use strict";var u=e(28991),l=e(81253),s=e(85893),E=e(18462),f=["fieldProps","proFieldProps"],a=["fieldProps","proFieldProps"],n="text",D=function(t){var m=t.fieldProps,T=t.proFieldProps,F=(0,l.Z)(t,f);return(0,s.jsx)(E.Z,(0,u.Z)({valueType:n,fieldProps:m,filedConfig:{valueType:n},proFieldProps:T},F))},d=function(t){var m=t.fieldProps,T=t.proFieldProps,F=(0,l.Z)(t,a);return(0,s.jsx)(E.Z,(0,u.Z)({valueType:"password",fieldProps:m,proFieldProps:T,filedConfig:{valueType:n}},F))},p=D;p.Password=d,p.displayName="ProFormComponent",i.Z=p},952:function(M,i,e){"use strict";var u=e(56640),l=e.n(u),s=e(5894);i.ZP=s.A},56640:function(){},80510:function(M,i,e){"use strict";e.r(i),e.d(i,{default:function(){return R}});var u=e(58024),l=e(91894),s=e(11849),E=e(34792),f=e(48086),a=e(90636),n=e(3182),D=e(952),d=e(5966),p=e(90672),h=e(70844),t=e(57751),m=e(67294),T=e(82380);function F(P,c){return O.apply(this,arguments)}function O(){return O=(0,n.Z)((0,a.Z)().mark(function P(c,v){return(0,a.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,T.WY)("/api/topic/upload",(0,s.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:c},v||{})));case 1:case"end":return r.stop()}},P)})),O.apply(this,arguments)}var j=e(53776),Z=e(85893),W=function(){var P=(0,n.Z)((0,a.Z)().mark(function c(){var v;return(0,a.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,t.ar)();case 2:return v=r.sent,r.abrupt("return",v);case 4:case"end":return r.stop()}},c)}));return function(){return P.apply(this,arguments)}}(),I=function(){var c=(0,j.t)("@@initialState"),v=c.initialState,C=v||{},r=C.currentUser,L=r===void 0?{}:r,S=function(){var $=(0,n.Z)((0,a.Z)().mark(function A(x){var y,B,g,U;return(0,a.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return y=x.topicTitle,B=x.topicContent,o.next=3,F({topicTitle:y,topicContent:B,userId:L.id});case 3:if(g=o.sent,g.message!=="\u4E0A\u4F20\u6210\u529F"){o.next=12;break}return f.ZP.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u606D\u559C\u4F60\u83B7\u5F9710\u70B9\u79EF\u5206"),o.next=8,W();case 8:U=o.sent,K((0,s.Z)((0,s.Z)({},v),{},{currentUser:U})),o.next=13;break;case 12:f.ZP.error(g.message);case 13:case"end":return o.stop()}},A)}));return function(x){return $.apply(this,arguments)}}();return(0,Z.jsx)(h.ZP,{content:"\u4F60\u53EF\u4EE5\u4E0A\u4F20\u9898\u76EE\u6216\u8005\u53D1\u8868\u8BDD\u9898",children:(0,Z.jsx)(l.Z,{bordered:!1,children:(0,Z.jsxs)(D.ZP,{hideRequiredMark:!0,style:{margin:"auto",marginTop:8,maxWidth:600},name:"basic",layout:"vertical",initialValues:{public:"1"},onFinish:S,children:[(0,Z.jsx)(d.Z,{width:"md",label:"\u6807\u9898",name:"topicTitle",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}),(0,Z.jsx)(p.Z,{label:"\u5185\u5BB9",width:"xl",style:{whiteSpace:"pre-wrap"},name:"topicContent",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5177\u4F53\u5185\u5BB9"}],placeholder:"\u8BF7\u8F93\u5165\u5177\u4F53\u5185\u5BB9"})]})})})},R=I;function K(P){throw console.log(P),new Error("Function not implemented.")}}}]);