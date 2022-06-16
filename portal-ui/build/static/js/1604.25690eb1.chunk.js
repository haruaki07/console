"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1604],{1604:function(e,t,n){n.r(t);var i=n(29439),a=n(1413),o=n(72791),s=n(36151),l=n(40986),r=n(11135),c=n(25787),u=n(61889),d=n(23814),m=n(81207),f=n(56028),Z=n(83679),h=n(21435),p=n(72401),x=n(87995),v=n(81551),b=n(80184);t.default=(0,c.Z)((function(e){return(0,r.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},d.bK),d.QV),d.DF),d.ID))}))((function(e){var t=e.classes,n=e.open,a=e.bucketName,r=e.closeModalAndRefresh,c=(0,v.TL)(),d=(0,o.useState)(!1),j=(0,i.Z)(d,2),g=j[0],y=j[1],C=(0,o.useState)(!0),N=(0,i.Z)(C,2),S=N[0],k=N[1],P=(0,o.useState)("compliance"),w=(0,i.Z)(P,2),M=w[0],R=w[1],B=(0,o.useState)("days"),E=(0,i.Z)(B,2),_=E[0],D=E[1],F=(0,o.useState)(1),T=(0,i.Z)(F,2),z=T[0],O=T[1],K=(0,o.useState)(!1),L=(0,i.Z)(K,2),V=L[0],W=L[1];return(0,o.useEffect)((function(){Number.isNaN(z)||z<1?W(!1):W(!0)}),[z]),(0,o.useEffect)((function(){S&&m.Z.invoke("GET","/api/v1/buckets/".concat(a,"/retention")).then((function(e){k(!1),R(e.mode),O(e.validity),D(e.unit)})).catch((function(e){k(!1)}))}),[S,a]),(0,b.jsx)(f.Z,{title:"Set Retention Configuration",modalOpen:n,onClose:function(){r()},children:S?(0,b.jsx)(p.Z,{style:{width:16,height:16}}):(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),g||(y(!0),m.Z.invoke("PUT","/api/v1/buckets/".concat(a,"/retention"),{mode:M,unit:_,validity:z}).then((function(){y(!1),r()})).catch((function(e){y(!1),c((0,x.zb)(e))})))},children:(0,b.jsxs)(u.ZP,{container:!0,children:[(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.modalFormScrollable,children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(Z.Z,{currentSelection:M,id:"retention_mode",name:"retention_mode",label:"Retention Mode",onChange:function(e){R(e.target.value)},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}]})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(Z.Z,{currentSelection:_,id:"retention_unit",name:"retention_unit",label:"Retention Unit",onChange:function(e){D(e.target.value)},selectorOptions:[{value:"days",label:"Days"},{value:"years",label:"Years"}]})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(h.Z,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(e){O(e.target.valueAsNumber)},label:"Retention Validity",value:String(z),required:!0,min:"1"})})]}),(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,b.jsx)(s.Z,{type:"button",variant:"outlined",color:"primary",disabled:g,onClick:function(){r()},children:"Cancel"}),(0,b.jsx)(s.Z,{type:"submit",variant:"contained",color:"primary",disabled:g||!V,children:"Set"})]}),g&&(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{})})]})})})}))},56028:function(e,t,n){var i=n(29439),a=n(1413),o=n(72791),s=n(60364),l=n(13400),r=n(55646),c=n(5574),u=n(65661),d=n(39157),m=n(11135),f=n(25787),Z=n(23814),h=n(81551),p=n(29823),x=n(28057),v=n(87995),b=n(80184);t.Z=(0,f.Z)((function(e){return(0,m.Z)((0,a.Z)((0,a.Z)({},Z.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},Z.sN))}))((function(e){var t=e.onClose,n=e.modalOpen,m=e.title,f=e.children,Z=e.classes,j=e.wideLimit,g=void 0===j||j,y=e.noContentPadding,C=e.titleIcon,N=void 0===C?null:C,S=(0,h.TL)(),k=(0,o.useState)(!1),P=(0,i.Z)(k,2),w=P[0],M=P[1],R=(0,s.v9)((function(e){return e.system.modalSnackBar}));(0,o.useEffect)((function(){S((0,v.MK)(""))}),[S]),(0,o.useEffect)((function(){if(R){if(""===R.message)return void M(!1);"error"!==R.type&&M(!0)}}),[R]);var B=g?{classes:{paper:Z.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return R&&(E=R.detailedErrorMsg,(""===R.detailedErrorMsg||R.detailedErrorMsg.length<5)&&(E=R.message)),(0,b.jsxs)(c.Z,(0,a.Z)((0,a.Z)({open:n,classes:Z},B),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:Z.root,children:[(0,b.jsxs)(u.Z,{className:Z.title,children:[(0,b.jsxs)("div",{className:Z.titleText,children:[N," ",m]}),(0,b.jsx)("div",{className:Z.closeContainer,children:(0,b.jsx)(l.Z,{"aria-label":"close",id:"close",className:Z.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,b.jsx)(p.Z,{})})})]}),(0,b.jsx)(x.Z,{isModal:!0}),(0,b.jsx)(r.Z,{open:w,className:Z.snackBarModal,onClose:function(){M(!1),S((0,v.MK)(""))},message:E,ContentProps:{className:"".concat(Z.snackBar," ").concat(R&&"error"===R.type?Z.errorSnackBar:"")},autoHideDuration:R&&"error"===R.type?1e4:5e3}),(0,b.jsx)(d.Z,{className:y?"":Z.content,children:f})]}))}))}}]);
//# sourceMappingURL=1604.25690eb1.chunk.js.map