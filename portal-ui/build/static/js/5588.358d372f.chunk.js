"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5588],{23804:function(e,t,n){n(72791);var r=n(11135),i=n(25787),a=n(61889),u=n(80184);t.Z=(0,i.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,r=e.title,i=e.help;return(0,u.jsx)("div",{className:t.root,children:(0,u.jsxs)(a.ZP,{container:!0,children:[(0,u.jsxs)(a.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,r]}),(0,u.jsx)(a.ZP,{item:!0,xs:12,className:t.helpText,children:i})]})})}))},45588:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(29439),i=n(1413),a=n(72791),u=n(61889),o=n(36151),c=n(40986),s=n(11135),d=n(25787),l=n(23814),b=n(81207),f=n(21435),m=n(83679),h=n(45248),k=n(62666),p=n(60364),x=n(42209);function g(e,t){return e===t}function v(e){return"function"===typeof e?function(){return e}:e}function j(e,t,n){var r=n&&n.equalityFn||g,i=function(e){var t=(0,a.useState)(v(e)),n=t[0],r=t[1];return[n,(0,a.useCallback)((function(e){return r(v(e))}),[])]}(e),u=i[0],o=i[1],c=function(e,t,n){var r=this,i=(0,a.useRef)(null),u=(0,a.useRef)(0),o=(0,a.useRef)(null),c=(0,a.useRef)([]),s=(0,a.useRef)(),d=(0,a.useRef)(),l=(0,a.useRef)(e),b=(0,a.useRef)(!0);l.current=e;var f=!t&&0!==t&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");t=+t||0;var m=!!(n=n||{}).leading,h=!("trailing"in n)||!!n.trailing,k="maxWait"in n,p=k?Math.max(+n.maxWait||0,t):null;(0,a.useEffect)((function(){return b.current=!0,function(){b.current=!1}}),[]);var x=(0,a.useMemo)((function(){var e=function(e){var t=c.current,n=s.current;return c.current=s.current=null,u.current=e,d.current=l.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(o.current),o.current=f?requestAnimationFrame(e):setTimeout(e,t)},a=function(e){if(!b.current)return!1;var n=e-i.current,r=e-u.current;return!i.current||n>=t||n<0||k&&r>=p},x=function(t){return o.current=null,h&&c.current?e(t):(c.current=s.current=null,d.current)},g=function e(){var r=Date.now();if(a(r))return x(r);if(b.current){var o=r-i.current,c=r-u.current,s=t-o,d=k?Math.min(s,p-c):s;n(e,d)}},v=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];var h=Date.now(),p=a(h);if(c.current=l,s.current=r,i.current=h,p){if(!o.current&&b.current)return u.current=i.current,n(g,t),m?e(i.current):d.current;if(k)return n(g,t),e(i.current)}return o.current||n(g,t),d.current};return v.cancel=function(){o.current&&(f?cancelAnimationFrame(o.current):clearTimeout(o.current)),u.current=0,c.current=i.current=s.current=o.current=null},v.isPending=function(){return!!o.current},v.flush=function(){return o.current?x(Date.now()):d.current},v}),[m,k,t,p,h,f]);return x}((0,a.useCallback)((function(e){return o(e)}),[o]),t,n),s=(0,a.useRef)(e);return r(s.current,e)||(c(e),s.current=e),[u,c]}var Z=n(37516),B=n(32291),y=n(84669),C=n(85543),R=n(42649),S=n(74794),E=n(56578),_=n(25739),q=n(38442),N=n(56087),P=n(81806),T=n(23804),F=n(80184),w=(0,p.$j)((function(e){return{addBucketModalOpen:e.buckets.open,bucketName:e.buckets.addBucketName,versioningEnabled:e.buckets.addBucketVersioningEnabled,lockingEnabled:e.buckets.addBucketLockingEnabled,quotaEnabled:e.buckets.addBucketQuotaEnabled,quotaType:e.buckets.addBucketQuotaType,quotaSize:e.buckets.addBucketQuotaSize,quotaUnit:e.buckets.addBucketQuotaUnit,retentionEnabled:e.buckets.addBucketRetentionEnabled,retentionMode:e.buckets.addBucketRetentionMode,retentionUnit:e.buckets.addBucketRetentionUnit,retentionValidity:e.buckets.addBucketRetentionValidity,distributedSetup:e.system.distributedSetup}}),{addBucketName:x.pK,addBucketVersioned:x.Og,enableObjectLocking:x.YP,addBucketQuota:x.hN,addBucketQuotaType:x.i9,addBucketQuotaSize:x._X,addBucketQuotaUnit:x.FB,addBucketRetention:x._n,addBucketRetentionMode:x.Tv,addBucketRetentionUnit:x.Mf,addBucketRetentionValidity:x.bC,setErrorSnackMessage:R.Ih})((0,d.Z)((function(e){return(0,s.Z)((0,i.Z)({buttonContainer:{marginTop:24,textAlign:"right","& .MuiButton-root":{marginLeft:8}},error:{color:"#b53b4b",border:"1px solid #b53b4b",padding:8,borderRadius:3},title:{marginBottom:8},headTitle:{fontWeight:"bold",fontSize:16,paddingLeft:8},h6title:{fontWeight:"bold",color:"#000000",fontSize:20,paddingBottom:8}},(0,l.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.addBucketName,i=e.addBucketVersioned,s=e.enableObjectLocking,d=e.addBucketQuota,l=e.addBucketQuotaType,p=e.addBucketQuotaSize,x=e.addBucketQuotaUnit,g=e.addBucketRetention,v=e.addBucketRetentionMode,R=e.addBucketRetentionUnit,w=e.addBucketRetentionValidity,M=e.setErrorSnackMessage,z=e.bucketName,Q=e.versioningEnabled,U=e.lockingEnabled,L=e.quotaEnabled,V=e.quotaType,A=e.quotaSize,O=e.quotaUnit,I=e.retentionEnabled,D=e.retentionMode,W=e.retentionUnit,K=e.retentionValidity,Y=e.distributedSetup,G=(0,a.useState)(!1),X=(0,r.Z)(G,2),$=X[0],H=X[1],J=(0,a.useState)(!1),ee=(0,r.Z)(J,2),te=ee[0],ne=ee[1],re=(0,a.useState)(!1),ie=(0,r.Z)(re,2),ae=ie[0],ue=ie[1],oe=j(z,1e3),ce=(0,r.Z)(oe,1)[0];(0,a.useEffect)((function(){n(ce)}),[ce,n]);var se=function(){n(""),i(!1),s(!1),d(!1),l("hard"),p("1"),x("TiB"),g(!1),v("compliance"),R("days"),w(1)};return(0,a.useEffect)((function(){var e=!1;""!==z.trim()&&(e=!0),L&&e&&(""!==A.trim()&&0!==parseInt(A)||(e=!1)),Q&&I||(g(!1),v("compliance"),R("days"),w(1)),I?(s(!0),ue(!0)):ue(!1),I&&(Number.isNaN(K)||K<1)&&(e=!1),ne(e)}),[z,I,U,V,A,O,L,g,v,R,w,K,Q,s]),(0,F.jsxs)(a.Fragment,{children:[(0,F.jsx)(B.Z,{label:(0,F.jsx)(y.Z,{to:"/buckets",label:"Buckets"})}),(0,F.jsx)(S.Z,{children:(0,F.jsx)(_.Z,{title:"Create Bucket",icon:(0,F.jsx)(C.wN,{}),helpbox:(0,F.jsx)(T.Z,{iconComponent:(0,F.jsx)(C.wN,{}),title:"Buckets",help:(0,F.jsxs)(a.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,F.jsxs)(q.s,{scopes:[N.Ft.S3_CREATE_BUCKET],resource:N.C3,children:[(0,F.jsx)("br",{}),(0,F.jsx)("br",{}),"To get started,\xa0",(0,F.jsx)(P.Z,{onClick:function(){k.Z.push("/add-bucket")},children:"Create a Bucket."})]})]})}),children:(0,F.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),!$){H(!0);var t={name:z,versioning:!!Y&&Q,locking:!!Y&&U};if(Y){if(L){var n=(0,h.Pw)(A,O,!0);t.quota={enabled:!0,quota_type:V,amount:parseInt(n)}}I&&(t.retention={mode:D,unit:W,validity:K})}b.Z.invoke("POST","/api/v1/buckets",t).then((function(e){H(!1);var t="".concat(z);se(),k.Z.push("/buckets/".concat(t,"/browse"))})).catch((function(e){H(!1),M(e)}))}}(e)},children:[(0,F.jsxs)(u.ZP,{item:!0,xs:12,container:!0,children:[(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(f.Z,{id:"bucket-name",name:"bucket-name",autoFocus:!0,onChange:function(e){n(e.target.value)},label:"Bucket Name",value:z})}),(0,F.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,F.jsx)("div",{className:t.h6title,children:"Features"}),(0,F.jsx)("br",{}),!Y&&(0,F.jsxs)(a.Fragment,{children:[(0,F.jsxs)("div",{className:t.error,children:["These features are unavailable in a single-disk setup.",(0,F.jsx)("br",{}),"Please deploy a server in"," ",(0,F.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use these features."]}),(0,F.jsx)("br",{}),(0,F.jsx)("br",{})]})]}),(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{value:"versioned",id:"versioned",name:"versioned",checked:Q,onChange:function(e){i(e.target.checked)},description:"Allows to keep multiple versions of the same object under the same key.",label:"Versioning",disabled:!Y||U})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{value:"locking",id:"locking",name:"locking",disabled:ae||!Y,checked:U,onChange:function(e){s(e.target.checked),e.target.checked&&i(!0)},label:"Object Locking",description:"Required to support retention and legal hold. Can only be enabled at bucket creation."})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:L,onChange:function(e){d(e.target.checked)},label:"Quota",description:"Limit the amount of data in the bucket.",disabled:!Y})}),L&&Y&&(0,F.jsx)(a.Fragment,{children:(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(f.Z,{type:"number",id:"quota_size",name:"quota_size",onChange:function(e){e.target.validity.valid&&p(e.target.value)},label:"Quota",value:A,required:!0,min:"1",pattern:"[0-9]*",overlayObject:(0,F.jsx)(E.Z,{id:"quota_unit",onUnitChange:function(e){x(e)},unitSelected:O,unitsList:(0,h.zQ)(["Ki"]),disabled:!1})})})}),Q&&Y&&(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(Z.Z,{value:"bucket_retention",id:"bucket_retention",name:"bucket_retention",checked:I,onChange:function(e){g(e.target.checked)},label:"Retention",description:"Impose rules to prevent object deletion for a period of time."})}),I&&Y&&(0,F.jsxs)(a.Fragment,{children:[(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(m.Z,{currentSelection:D,id:"retention_mode",name:"retention_mode",label:"Retention Mode",onChange:function(e){v(e.target.value)},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(m.Z,{currentSelection:W,id:"retention_unit",name:"retention_unit",label:"Retention Unit",onChange:function(e){R(e.target.value)},selectorOptions:[{value:"days",label:"Days"},{value:"years",label:"Years"}]})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(f.Z,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(e){w(e.target.valueAsNumber)},label:"Retention Validity",value:String(K),required:!0,min:"1"})})]})]}),(0,F.jsxs)(u.ZP,{item:!0,xs:12,className:t.buttonContainer,children:[(0,F.jsx)(o.Z,{type:"button",variant:"outlined",className:t.clearButton,onClick:se,children:"Clear"}),(0,F.jsx)(o.Z,{type:"submit",variant:"contained",color:"primary",disabled:$||!te,children:"Create Bucket"})]}),$&&(0,F.jsx)(u.ZP,{item:!0,xs:12,children:(0,F.jsx)(c.Z,{})})]})})})]})})))},81806:function(e,t,n){var r=n(1413),i=n(45987),a=(n(72791),n(11135)),u=n(25787),o=n(80184),c=["classes","children"];t.Z=(0,u.Z)((function(e){return(0,a.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var t=e.classes,n=e.children,a=(0,i.Z)(e,c);return(0,o.jsx)("button",(0,r.Z)((0,r.Z)({},a),{},{className:t.root,children:n}))}))},25739:function(e,t,n){n(72791);var r=n(64554),i=n(50896),a=n(80184);t.Z=function(e){var t=e.children,n=e.title,u=e.helpbox,o=e.icon;return(0,a.jsxs)(r.Z,{sx:{display:"grid",padding:"25px",gap:"25px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{icon:o,children:n}),t]}),u]})}}}]);
//# sourceMappingURL=5588.358d372f.chunk.js.map