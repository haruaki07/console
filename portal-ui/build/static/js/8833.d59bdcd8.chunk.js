"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8833],{47986:function(e,t,n){n(72791);var i=n(61889),s=n(64554),r=n(23804),a=n(80184);t.Z=function(e){var t=e.iconComponent,n=e.entity;return(0,a.jsx)(i.ZP,{container:!0,alignItems:"center",children:(0,a.jsx)(i.ZP,{item:!0,xs:12,children:(0,a.jsx)(r.Z,{title:"".concat(n," not available"),iconComponent:t,help:(0,a.jsxs)(s.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,a.jsx)("div",{children:"This feature is not available for a single-disk setup."}),(0,a.jsxs)("div",{children:["Please deploy a server in"," ",(0,a.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},56028:function(e,t,n){var i=n(29439),s=n(1413),r=n(72791),a=n(60364),o=n(13400),l=n(55646),c=n(5574),d=n(65661),p=n(39157),x=n(11135),u=n(25787),h=n(23814),f=n(29823),m=n(28057),g=n(87995),j=n(80184);t.Z=(0,u.Z)((function(e){return(0,x.Z)((0,s.Z)((0,s.Z)({},h.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},h.sN))}))((function(e){var t=e.onClose,n=e.modalOpen,x=e.title,u=e.children,h=e.classes,Z=e.wideLimit,v=void 0===Z||Z,b=e.noContentPadding,y=e.titleIcon,w=void 0===y?null:y,k=(0,a.I0)(),C=(0,r.useState)(!1),S=(0,i.Z)(C,2),I=S[0],T=S[1],N=(0,a.v9)((function(e){return e.system.modalSnackBar}));(0,r.useEffect)((function(){k((0,g.MK)(""))}),[k]),(0,r.useEffect)((function(){if(N){if(""===N.message)return void T(!1);"error"!==N.type&&T(!0)}}),[N]);var z=v?{classes:{paper:h.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},L="";return N&&(L=N.detailedErrorMsg,(""===N.detailedErrorMsg||N.detailedErrorMsg.length<5)&&(L=N.message)),(0,j.jsxs)(c.Z,(0,s.Z)((0,s.Z)({open:n,classes:h},z),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:h.root,children:[(0,j.jsxs)(d.Z,{className:h.title,children:[(0,j.jsxs)("div",{className:h.titleText,children:[w," ",x]}),(0,j.jsx)("div",{className:h.closeContainer,children:(0,j.jsx)(o.Z,{"aria-label":"close",id:"close",className:h.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,j.jsx)(f.Z,{})})})]}),(0,j.jsx)(m.Z,{isModal:!0}),(0,j.jsx)(l.Z,{open:I,className:h.snackBarModal,onClose:function(){T(!1),k((0,g.MK)(""))},message:L,ContentProps:{className:"".concat(h.snackBar," ").concat(N&&"error"===N.type?h.errorSnackBar:"")},autoHideDuration:N&&"error"===N.type?1e4:5e3}),(0,j.jsx)(p.Z,{className:b?"":h.content,children:u})]}))}))},58833:function(e,t,n){n.r(t);var i=n(15861),s=n(29439),r=n(1413),a=n(87757),o=n.n(a),l=n(72791),c=n(64554),d=n(36151),p=n(51691),x=n(32291),u=n(74794),h=n(21435),f=n(37516),m=n(62410),g=n(56028),j=n(11135),Z=n(23814),v=n(25787),b=n(60364),y=n(23804),w=n(45248),k=n(47986),C=n(25183),S=n(73669),I=n(87995),T=n(80184),N=function(e){var t=e.volumeVal,n=e.pathVal;return(0,T.jsx)(c.Z,{className:"code-block-container",children:(0,T.jsxs)(c.Z,{className:"example-code-block",children:[(0,T.jsxs)(c.Z,{sx:{display:"flex",marginBottom:"5px",flexFlow:{sm:"row",xs:"column"}},children:[(0,T.jsx)("label",{children:"Volume/bucket Name :"})," ",(0,T.jsx)("code",{children:t})]}),(0,T.jsxs)(c.Z,{sx:{display:"flex",flexFlow:{sm:"row",xs:"column"}},children:[(0,T.jsx)("label",{children:"Path : "}),(0,T.jsx)("code",{children:n})]})]})})};t.default=(0,v.Z)((function(e){return(0,j.Z)((0,r.Z)((0,r.Z)({switchLabel:{fontWeight:"normal"}},Z.Qw),Z.ID))}))((function(e){var t=e.classes,n=(0,b.I0)(),r=(0,b.v9)((function(e){return e.system.distributedSetup})),a=(0,l.useState)(""),j=(0,s.Z)(a,2),Z=j[0],v=j[1],z=(0,l.useState)(""),L=(0,s.Z)(z,2),P=L[0],B=L[1],V=(0,l.useState)(!0),_=(0,s.Z)(V,2),D=_[0],E=_[1],W=(0,l.useState)(""),F=(0,s.Z)(W,2),M=F[0],R=F[1],q=(0,l.useState)(""),O=(0,s.Z)(q,2),G=O[0],K=O[1],A=(0,l.useState)(!1),H=(0,s.Z)(A,2),Q=H[0],U=H[1],Y=(0,l.useState)(""),J=(0,s.Z)(Y,2),X=J[0],$=J[1],ee=(0,l.useState)(""),te=(0,s.Z)(ee,2),ne=te[0],ie=te[1];(0,l.useEffect)((function(){var e,t;(e=Z.trim().length>0)?"/"===Z.slice(0,1)&&(e=!1,$("Volume/Bucket name cannot start with /")):$("This field is required"),t=P.trim().length>0,P?"/"===P.slice(0,1)&&(t=!1,ie("Path cannot start with /")):ie("This field is required");var n=e&&t;e&&$(""),t&&ie(""),U(n)}),[Z,P]);var se=function(){var e=(0,i.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=(0,i.Z)(o().mark((function e(){var t,s,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,w.LL)(P),s=(0,w.LL)(Z),r="/api/v1/admin/inspect?volume=".concat(s,"&file=").concat(t,"&encrypt=").concat(D),se(r).then(function(){var e=(0,i.Z)(o().mark((function e(t){var i,s,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=5;break}return e.next=3,t.json();case 3:i=e.sent,n((0,I.Ih)({errorMessage:i.message,detailedError:i.code}));case 5:return e.next=7,t.blob();case 7:s=e.sent,r=t.headers.get("content-disposition").split('"')[1],a=(0,w.Do)(r)||"",(0,w.zZ)(s,r),K(r),R(a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){n((0,I.Ih)(e))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){v(""),B(""),E(!0)};return(0,T.jsxs)(l.Fragment,{children:[(0,T.jsx)(x.Z,{label:"Inspect"}),(0,T.jsxs)(u.Z,{children:[r?(0,T.jsxs)(c.Z,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",border:"1px solid #eaeaea",padding:{lg:"40px",xs:"15px"},flexWrap:"wrap",gap:{lg:"55px",xs:"20px"},height:{md:"calc(100vh - 120px)",xs:"100%"},flexFlow:{lg:"row",xs:"column"}},children:[(0,T.jsx)(c.Z,{sx:{border:"1px solid #eaeaea",flex:{md:2,xs:1},width:{lg:"auto",xs:"100%"},padding:{lg:"40px",xs:"15px"}},children:(0,T.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),re()},children:[(0,T.jsx)(c.Z,{children:(0,T.jsx)(h.Z,{id:"inspect_volume",name:"inspect_volume",extraInputProps:{"data-test-id":"inspect_volume"},onChange:function(e){v(e.target.value)},label:"Volume or Bucket Name",value:Z,error:X,required:!0,placeholder:"test-bucket"})}),(0,T.jsx)(c.Z,{sx:{marginTop:"15px"},children:(0,T.jsx)(h.Z,{id:"inspect_path",name:"inspect_path",extraInputProps:{"data-test-id":"inspect_path"},error:ne,onChange:function(e){B(e.target.value)},label:"File or Path to inspect",value:P,required:!0,placeholder:"test*/xl.meta"})}),(0,T.jsx)(c.Z,{sx:{marginTop:"25px"},children:(0,T.jsx)(f.Z,{classes:{inputLabel:t.switchLabel},extraInputProps:{"data-test-id":"inspect_encrypt"},label:"Encrypt",indicatorLabels:["True","False"],checked:D,value:"true",id:"inspect_encrypt",name:"inspect_encrypt",onChange:function(e){E(!D)}})}),(0,T.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"55px"},children:[(0,T.jsx)(d.Z,{sx:{marginRight:"15px"},type:"button",color:"primary",variant:"outlined","data-test-id":"inspect-clear-button",onClick:ae,children:"Clear"}),(0,T.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary","data-test-id":"inspect-submit-button",disabled:!Q,children:"Inspect"})]})]})}),(0,T.jsx)(c.Z,{sx:{flex:1,minWidth:{md:"365px",xs:"100%"},width:"100%"},children:(0,T.jsx)(y.Z,{title:"",iconComponent:null,help:(0,T.jsxs)(l.Fragment,{children:[(0,T.jsxs)(c.Z,{sx:{marginTop:"-25px",fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"2px"},children:[(0,T.jsx)(c.Z,{sx:{backgroundColor:"#07193E",height:"15px",width:"15px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",marginRight:"18px",padding:"3px","& .min-icon":{height:"11px",width:"11px",fill:"#ffffff"}},children:(0,T.jsx)(C.Gp,{})}),"Learn more about the Inspect feature"]}),(0,T.jsx)(c.Z,{sx:{marginTop:"16px",fontWeight:600,fontStyle:"italic",fontSize:"14px"},children:"Examples:"}),(0,T.jsxs)(c.Z,{sx:{display:"flex",flexFlow:"column",fontSize:"14px",flex:"2","& .step-number":{color:"#ffffff",height:"25px",width:"25px",background:"#081C42",marginRight:"10px",textAlign:"center",fontWeight:600,borderRadius:"50%"},"& .step-row":{fontSize:"14px",display:"flex",marginTop:"15px",marginBottom:"15px","&.step-text":{fontWeight:400},"&:before":{content:"' '",height:"7px",width:"7px",backgroundColor:"#2781B0",marginRight:"10px",marginTop:"7px",flexShrink:0}},"& .code-block-container":{flex:"1",marginTop:"15px",marginLeft:"35px","& input":{color:"#737373"}},"& .example-code-block label":{display:"inline-block",width:{sm:"160px",xs:"100%"},fontWeight:600,fontSize:"14px"},"& code":{width:{sm:"100px",xs:"100%"},paddingLeft:"10px",fontFamily:"monospace",paddingRight:"10px",paddingTop:"3px",paddingBottom:"3px",borderRadius:"2px",border:"1px solid #eaeaea",fontSize:"10px",color:"#082146",fontWeight:500},"& .spacer":{marginBottom:"5px"}},children:[(0,T.jsxs)(c.Z,{children:[(0,T.jsx)(c.Z,{className:"step-row",children:(0,T.jsx)("div",{className:"step-text",children:"To Download 'xl.meta' for a specific object from all the drives in a zip file:"})}),(0,T.jsx)(N,{pathVal:"test*/xl.meta",volumeVal:"test-bucket"})]}),(0,T.jsxs)(c.Z,{children:[(0,T.jsx)(c.Z,{className:"step-row",children:(0,T.jsx)("div",{className:"step-text",children:"To Download all constituent parts for a specific object, and optionally encrypt the downloaded zip:"})}),(0,T.jsx)(N,{pathVal:"test*/xl.meta",volumeVal:"test*/*/part.*"})]}),(0,T.jsxs)(c.Z,{children:[(0,T.jsx)(c.Z,{className:"step-row",children:(0,T.jsxs)("div",{className:"step-text",children:["To Download recursively all objects at a prefix.",(0,T.jsx)("br",{}),"NOTE: This can be an expensive operation use it with caution."]})}),(0,T.jsx)(N,{pathVal:"test*/xl.meta",volumeVal:"test/**"})]})]}),(0,T.jsxs)(c.Z,{sx:{marginTop:"30px",marginLeft:"15px",fontSize:"14px"},children:["You can learn more at our"," ",(0,T.jsx)("a",{href:"https://github.com/minio/minio/tree/master/docs/debugging?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})]})})})]}):(0,T.jsx)(k.Z,{iconComponent:(0,T.jsx)(C.Gp,{}),entity:"Inspect"}),M?(0,T.jsx)(g.Z,{modalOpen:!0,title:"Inspect Decryption Key",onClose:function(){(0,w.kT)(G),R(""),ae()},titleIcon:(0,T.jsx)(m.tvm,{}),children:(0,T.jsxs)(p.Z,{component:"div",children:[(0,T.jsxs)(c.Z,{children:["This will be displayed only once. It cannot be recovered.",(0,T.jsx)("br",{}),"Use secure medium to share this key."]}),(0,T.jsx)("form",{noValidate:!0,onSubmit:function(){return!1},children:(0,T.jsx)(S.Z,{value:M})})]})}):null]})]})}))},73669:function(e,t,n){var i=n(29439),s=n(64554),r=n(36151),a=n(21435),o=n(62410),l=n(72791),c=n(80184);t.Z=function(e){var t=e.value,n=(0,l.useState)(!1),d=(0,i.Z)(n,2),p=d[0],x=d[1];return(0,c.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",flexFlow:{sm:"row",xs:"column"}},children:[(0,c.jsx)(a.Z,{id:"inspect-dec-key",name:"inspect-dec-key",placeholder:"",label:"",type:p?"text":"password",onChange:function(){},value:t,overlayIcon:(0,c.jsx)(o.TIy,{}),extraInputProps:{readOnly:!0},overlayAction:function(){return navigator.clipboard.writeText(t)}}),(0,c.jsx)(r.Z,{sx:{marginLeft:"10px"},variant:"contained",onClick:function(){return x(!p)},children:"Show/Hide"})]})}},15861:function(e,t,n){function i(e,t,n,i,s,r,a){try{var o=e[r](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(i,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var a=e.apply(t,n);function o(e){i(a,s,r,o,l,"next",e)}function l(e){i(a,s,r,o,l,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=8833.d59bdcd8.chunk.js.map