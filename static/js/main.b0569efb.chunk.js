(this["webpackJsonpbackend-ui"]=this["webpackJsonpbackend-ui"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a.n(n),r=a(46),s=a.n(r),i=(a(72),a(29)),l=a(20),o=(a(73),a.p+"static/media/liocam-logo.b1925105.jpg"),d=a(3);var u=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:"nav-section",children:[Object(d.jsx)("div",{className:"nav-logo-container",children:Object(d.jsx)("img",{src:o,alt:"",className:"nav-logo"})}),Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"LIOCAM ADMIN DASHBOARD"})}),Object(d.jsx)("div",{className:"user-icon-cont",children:Object(d.jsx)("i",{className:"fas fa-user fa-2x"})})]})})},j=a(19),m=(a(50),a(0)),b=a.n(m),p=a(4),h=a(5),v=a(25),O=a(18),x=a(21),f=a(13),g=a(66),N=(a(105),a(104),Object({NODE_ENV:"production",PUBLIC_URL:"/liocam-admin-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDryn4fgzmP2TIIXgYoOHUg9X6YdWzSQ9k",REACT_APP_FIREBASE_APP_ID:"1:440140514136:web:56b5f9357e87f95981db2d",REACT_APP_FIREBASE_AUTH_DOMAIN:"liocam-a9722.firebaseapp.com",REACT_APP_FIREBASE_LOCATION_ID:"us-central",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"440140514136",REACT_APP_FIREBASE_PROJECT_ID:"liocam-a9722",REACT_APP_FIREBASE_STORAGE_BUCKET:"liocam-a9722.appspot.com"})),P=N.REACT_APP_FIREBASE_PROJECT_ID,C=N.REACT_APP_FIREBASE_APP_ID,A=N.REACT_APP_FIREBASE_STORAGE_BUCKET,E=N.REACT_APP_FIREBASE_LOCATION_ID,y=N.REACT_APP_API_KEY,_=N.REACT_APP_FIREBASE_AUTH_DOMAIN,S=N.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,F=g.a.initializeApp({projectId:P,appId:C,storageBucket:A,locationId:E,apiKey:y,authDomain:_,messagingSenderId:S}),R=a(35),w=a.n(R),D=a(43),k=a.n(D),I=Object({NODE_ENV:"production",PUBLIC_URL:"/liocam-admin-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDryn4fgzmP2TIIXgYoOHUg9X6YdWzSQ9k",REACT_APP_FIREBASE_APP_ID:"1:440140514136:web:56b5f9357e87f95981db2d",REACT_APP_FIREBASE_AUTH_DOMAIN:"liocam-a9722.firebaseapp.com",REACT_APP_FIREBASE_LOCATION_ID:"us-central",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"440140514136",REACT_APP_FIREBASE_PROJECT_ID:"liocam-a9722",REACT_APP_FIREBASE_STORAGE_BUCKET:"liocam-a9722.appspot.com"}).PORT||"http://localhost:5000",T=k.a.create({baseURL:I,headers:{"Content-Type":"application/json",Accept:"*/*",Origin:I}}),B=function(e,t){var a=Object(n.useState)(!1),c=Object(f.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),l=Object(f.a)(i,2),o=l[0],d=l[1],u=Object(n.useState)("Drag and drop images here (max : 5)"),m=Object(f.a)(u,2),g=m[0],N=m[1],P=Object(n.useState)([]),C=Object(f.a)(P,2),A=C[0],E=C[1],y=Object(n.useState)([]),_=Object(f.a)(y,2),S=_[0],R=_[1],D=Object(n.useState)({id:w()()}),k=Object(f.a)(D,2),I=k[0],B=k[1],L=function(){return d("bad")},W=function(){return d("false")},U=function(e){return e.preventDefault()},q=function(e){if(A.length+e.length>5)return N("Note more than 5 images please."),E([]),L();var t,a=/image-*/,n=Object(x.a)(e);try{var c=function(){var e=t.value;if(!e.type.match(a))return alert("Bad files chosen. Please select only images"),"break";W(),E((function(t){return[].concat(Object(O.a)(t),[e])}))};for(n.s();!(t=n.n()).done;){if("break"===c())break}}catch(r){n.e(r)}finally{n.f()}},K=function(){var e=Object(p.a)(b.a.mark((function e(a){var n,c,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w()(),c=F.storage().ref(t),r=c.child(n),e.next=5,r.put(a);case 5:return e.next=7,r.getDownloadURL();case 7:return s=e.sent,R((function(e){return[].concat(Object(O.a)(e),[s])})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var t=Object(p.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),0!==A.length){t.next=3;break}return t.abrupt("return",alert("Please add image(s)"));case 3:return t.prev=3,t.next=6,Promise.all(A.map((function(e){return K(e)})));case 6:return n=t.sent,t.next=9,T.post("/".concat(e),Object(v.a)(Object(v.a)({},I),{},{images:n})).then((function(e){j.b.success(e.data.message)}));case 9:console.log(I),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),j.b.error("Failed to add item. Please try again."),console.log(t.t0);case 16:return t.prev=16,a.target.reset(),B({id:w()()}),E([]),R([]),t.finish(16);case 22:case"end":return t.stop()}}),t,null,[[3,12,16,22]])})));return function(e){return t.apply(this,arguments)}}();return{plan:I,active:o,errorMessage:g,dragenter:function(e){U(e);var t=e.dataTransfer,a=Object(O.a)(t.items),n=/image-*/;if(a.length>5)return N("Note more than 5 images please."),L();var c,r=Object(x.a)(a);try{for(r.s();!(c=r.n()).done;){if(!c.value.type.match(n)){N("Bad file types chosen. Please add only images"),L();break}d("true"),N("Drop images to upload")}}catch(s){r.e(s)}finally{r.f()}},dragleave:function(e){U(e),W(),N("Drag and drop images here (max : 5)")},drop:function(e){U(e),W();var t=e.dataTransfer,a=Object(O.a)(t.files);q(a)},handleFileChange:function(e){U(e),W();var t=Object(O.a)(e.target.files);q(t)},handleChange:function(e){var t=e.target,a=t.name,n=t.value;B((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},a,n))}))},handleSubmit:M,filter:function(e){E(A.filter((function(t){return t.name!==e})))},updatePlan:r,showUpdate:function(e){B(e),s(!0)},setPlan:B,files:A,setFiles:E,urls:S,setUrls:R}};var L=function(){var e=Object(n.useRef)(),t=B("plans","designs"),a=t.plan,c=t.active,r=t.errorMessage,s=t.dragenter,l=t.dragleave,o=t.drop,u=t.handleFileChange,m=t.handleChange,b=t.handleSubmit,p=t.files,h=t.filter;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"new-plan-container",children:[Object(d.jsx)("h1",{children:"Add New Plan"}),Object(d.jsxs)("form",{ref:e,onSubmit:b,children:[Object(d.jsxs)("div",{className:"new-plan-details",children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Plan Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",className:"name",value:a.name,onChange:m,placeholder:"Enter Plan Name",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"category",children:"Category"}),Object(d.jsxs)("select",{name:"category",id:"category",className:"category",value:a.category,onChange:m,required:!0,children:[Object(d.jsx)("option",{value:"",children:"Select"}),Object(d.jsx)("option",{value:"bungalow",children:"Bungalow"}),Object(d.jsx)("option",{value:"duplex",children:"Duplex"}),Object(d.jsx)("option",{value:"apartment",children:"Apartment"}),Object(d.jsx)("option",{value:"other",children:"Other"})]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"basicPrice",children:"Basic Price"}),Object(d.jsx)("input",{type:"number",name:"basicPrice",id:"basicPrice",className:"basicPrice",value:a.basicPrice,onChange:m,placeholder:"Enter Basic Price",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"standardPrice",children:"Standard Price"}),Object(d.jsx)("input",{type:"number",name:"standardPrice",id:"standardPrice",className:"standardPrice",value:a.standardPrice,onChange:m,placeholder:"Enter Standard Price",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"premiumPrice",children:"Premium Price"}),Object(d.jsx)("input",{type:"number",name:"premiumPrice",id:"premiumPrice",className:"premiumPrice",value:a.premiumPrice,onChange:m,placeholder:"Enter Premium Price",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"plotWidth",children:"Plot Width"}),Object(d.jsx)("input",{type:"text",className:"plotWidth",id:"plotWidth",name:"plotWidth",value:a.plotWidth,onChange:m,placeholder:"Enter Plot Width in metres (m)"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"plotLength",children:"Plot Length"}),Object(d.jsx)("input",{type:"text",className:"plotLength",id:"plotLength",name:"plotLength",value:a.plotLength,onChange:m,placeholder:"Enter Plot Length in metres (m)"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"plotArea",children:"Plot Area"}),Object(d.jsx)("input",{type:"text",className:"plotArea",id:"plotArea",name:"plotArea",value:a.plotArea,onChange:m,placeholder:"Enter Plot Area in metres (m)"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"parking",children:"Parking"}),Object(d.jsxs)("select",{className:"parking",id:"parking",name:"parking",value:a.parking,onChange:m,children:[Object(d.jsx)("option",{value:"yes",children:"Yes"}),Object(d.jsx)("option",{value:"no",children:"No"})]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"freeSpace",children:"Free Space"}),Object(d.jsx)("input",{type:"text",className:"freeSpace",id:"freeSpace",name:"freeSpace",value:a.freeSpace,onChange:m,placeholder:"Free Space"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"stories",children:"Stories"}),Object(d.jsx)("input",{type:"number",className:"stories",id:"stories",name:"stories",value:a.stories,onChange:m,placeholder:"Number of Stories"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"apartments",children:"Apartments"}),Object(d.jsx)("input",{type:"number",className:"apartments",id:"apartments",name:"apartments",value:a.apartments,onChange:m,placeholder:"Number of apartments"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"livingRooms",children:"Living Rooms"}),Object(d.jsx)("input",{type:"number",className:"livingRooms",id:"livingRooms",name:"livingRooms",value:a.livingRooms,onChange:m,placeholder:"Number of living rooms"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"rooms",children:"Rooms"}),Object(d.jsx)("input",{type:"number",className:"rooms",id:"rooms",name:"rooms",value:a.rooms,onChange:m,placeholder:"Number of rooms"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"toilets",children:"Toilets"}),Object(d.jsx)("input",{type:"number",className:"toilets",id:"toilets",name:"toilets",value:a.toilets,onChange:m,placeholder:"Number of toilet rooms"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"kitchens",children:"Kitchens"}),Object(d.jsx)("input",{type:"number",className:"kitchens",id:"kitchens",name:"kitchens",value:a.kitchens,onChange:m,placeholder:"Number of kitchens"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"balconies",children:"Balconies"}),Object(d.jsx)("input",{type:"number",className:"balconies",id:"balconies",name:"balconies",value:a.balconies,onChange:m,placeholder:"Number of balconies"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"verandas",children:"Verandas"}),Object(d.jsx)("input",{type:"number",className:"verandas",id:"verandas",name:"verandas",value:a.verandas,onChange:m,placeholder:"Number of verandas"})]})]}),Object(d.jsx)("div",{className:"plan-description-cont",children:Object(d.jsx)("textarea",{rows:"5",className:"description",id:"descriptio",name:"description",value:a.description,onChange:m,placeholder:"Describe this plan here",required:!0})}),Object(d.jsxs)("div",{className:"true"===c?"add-image-cont active":"bad"===c?"add-image-cont badfile":"add-image-cont",onDragEnter:s,onDragLeave:l,onDrop:o,onDragOver:s,children:[Object(d.jsx)("p",{className:"add-image-text",children:r}),Object(d.jsx)("span",{children:"Or"}),Object(d.jsx)("input",{type:"file",name:"images",id:"add-image",className:"add-image",accept:"image/jpg, image/png, image/jpeg",multiple:!0,onChange:u}),Object(d.jsx)("label",{htmlFor:"add-image",className:"browse",children:"Browse"}),Object(d.jsxs)("p",{children:[p.length," Image(s) added"]})]}),Object(d.jsxs)("div",{className:"plans-and-btns",children:[Object(d.jsx)("div",{className:"plan-files",children:null===p||void 0===p?void 0:p.map((function(e){return Object(d.jsxs)("div",{className:"file",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(){h(e.name)}})]})}))}),Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("button",{className:"btn",children:Object(d.jsx)(i.b,{to:"/",children:"Cancel"})}),Object(d.jsx)("button",{className:"btn-sub btn",type:"submit",children:"Submit"})]})]})]})]}),Object(d.jsx)(j.a,{})]})};a(102);var W=function(){var e=Object(n.useRef)(null),t=B("products","products"),a=t.plan,c=t.active,r=t.errorMessage,s=t.dragenter,l=t.dragleave,o=t.drop,u=t.handleFileChange,m=t.handleSubmit,b=t.handleChange,p=t.files,h=t.filter;return Object(d.jsxs)("div",{className:"new-product",children:[Object(d.jsx)("h1",{children:"Add New Product"}),Object(d.jsx)("form",{ref:e,onSubmit:m,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"form-control-group",children:[Object(d.jsx)("label",{htmlFor:"productName",children:"Product Name"}),Object(d.jsx)("input",{type:"text",name:"productName",id:"productName",className:"productName",onChange:b,value:a.productName,required:!0,placeholder:"Enter Product Name"})]}),Object(d.jsx)("div",{className:"form-control-group",children:Object(d.jsx)("textarea",{name:"description",id:"description",rows:"10",onChange:b,placeholder:"Enter Description",value:a.description,required:!0})}),Object(d.jsxs)("div",{className:"true"===c?"add-image-cont active":"bad"===c?"add-image-cont badfile":"add-image-cont",onDragEnter:s,onDragLeave:l,onDrop:o,onDragOver:s,children:[Object(d.jsx)("p",{className:"add-image-text",children:r}),Object(d.jsx)("span",{children:"Or"}),Object(d.jsx)("input",{type:"file",name:"images",id:"add-image",className:"add-image",accept:"image/jpg, image/png, image/jpeg",multiple:!0,onChange:u}),Object(d.jsx)("label",{htmlFor:"add-image",className:"browse",children:"Browse"}),Object(d.jsxs)("p",{children:[p.length," Image(s) Added"]})]}),Object(d.jsxs)("div",{className:"plans-and-btns",children:[Object(d.jsx)("div",{className:"plan-files",children:null===p||void 0===p?void 0:p.map((function(e){return Object(d.jsxs)("div",{className:"file",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(){h(e.name)}})]})}))}),Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("button",{className:"btn",children:Object(d.jsx)(i.b,{to:"/",children:"Cancel"})}),Object(d.jsx)("button",{className:"btn-sub btn",type:"submit",children:"Submit"})]})]})]})}),Object(d.jsx)(j.a,{})]})};a(63);var U=function(e,t){var a=Object(n.useState)([]),c=Object(f.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)({}),l=Object(f.a)(i,2),o=l[0],d=l[1],u=Object(n.useState)(!1),m=Object(f.a)(u,2),h=m[0],v=m[1],O=Object(n.useState)(!1),x=Object(f.a)(O,2),g=x[0],N=x[1];Object(n.useEffect)((function(){var t=k.a.CancelToken.source(),a=!1;return P(t,a,e),function(){a=!0,t.cancel("Cancelling request")}}),[e]);var P=function(){var e=Object(p.a)(b.a.mark((function e(t,a,n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,T.get("/".concat(n));case 4:return c=e.sent,e.t0=s,e.next=8,c.data;case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=15;break;case 12:e.prev=12,e.t2=e.catch(0),a||(k.a.isCancel(e.t2)?console.log("Request Cancelled"):console.log("Something went wrong"));case 15:return e.prev=15,v(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(){var t=Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("/".concat(e)).then(function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(e){d(e),N(!0)},E=function(){A({}),N(!1)},y=function(){var e=Object(p.a)(b.a.mark((function e(a){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.split("%")[1].split("?")[0].slice(2),c=F.storage().ref(t),e.next=4,c.child(n).delete();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var t=Object(p.a)(b.a.mark((function t(){var a,n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,T.patch("/".concat(e),o);case 4:return n=t.sent,t.next=7,n.data;case 7:return c=t.sent,j.b.success(c.message),C(),t.next=12,Promise.all(null===(a=o.images)||void 0===a?void 0:a.map((function(e){y(e)})));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),j.b.error("Failed to delete item. Please try again");case 17:return t.prev=17,v(!1),E(),t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[1,14,17,21]])})));return function(){return t.apply(this,arguments)}}();return{data:r,loader:h,refetchData:C,handleDelete:_,setDeleteItem:A,deleteBox:g,hideDeleteBox:E}};var q=function(e){var t=e.data,a=e.route,c=Object(n.useRef)(),r=Object(l.f)(),s=Object(l.g)().pathname,o=Object(n.useState)(""),u=Object(f.a)(o,2),m=u[0],b=u[1],p=U("/"===s?"plans":"products","/"===s?"designs":"products"),h=p.handleDelete,v=p.setDeleteItem,O=p.deleteBox,x=p.hideDeleteBox,g=function(e){b(e.target.value)};function N(e){var t=c.current;t&&!t.contains(e.target)&&x()}return Object(n.useEffect)((function(){return document.addEventListener("mousedown",N),function(){document.removeEventListener("mousedown",N)}}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("section",{className:"projects-section",children:[Object(d.jsxs)("div",{className:"filter-options",children:[Object(d.jsxs)("div",{className:"filters",children:[Object(d.jsx)("span",{className:"/"===s?"filter-option active":"filter-option not-active",onClick:function(){b(""),r.push("/")},children:"Plans"}),Object(d.jsx)("span",{className:"/"!==s?"filter-option active":"filter-option not-active",onClick:function(){b(""),r.push("/products")},children:"Products"})]}),Object(d.jsxs)("div",{className:"options-container",children:[Object(d.jsx)(i.b,{to:"/new-plan",children:Object(d.jsx)("input",{type:"button",value:"Add New Plan",className:"btn addPlan"})}),Object(d.jsx)(i.b,{to:"/new-product",children:Object(d.jsx)("input",{type:"button",value:"Add Product",className:"btn addProduct"})})]})]}),Object(d.jsx)("div",{className:"filterations",children:Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"filter-input",children:"/"===s?"Filter by Category":"Filter Products"}),"/"===s?Object(d.jsxs)("select",{type:"text",name:"filter",value:m,onChange:g,id:"filter-input",className:"filter-input",children:[Object(d.jsx)("option",{value:"",className:"select-option",children:"Select"}),Object(d.jsx)("option",{value:"bungalow",children:"Bungalow"}),Object(d.jsx)("option",{value:"duplex",children:"Duplex"}),Object(d.jsx)("option",{value:"apartment",children:"Apartments"}),Object(d.jsx)("option",{value:"other",children:"Other Designs"})]}):Object(d.jsx)("input",{type:"text",name:"product-filter",value:m,onChange:g,id:"filter-input",className:"filter-input"})]})})]}),Object(d.jsx)("section",{className:"projects-display-section",children:null===t||void 0===t?void 0:t.filter((function(e){var t,a,n;return!m||""===m||(!!((null===(t=e.category)||void 0===t?void 0:t.toLowerCase().includes(null===m||void 0===m?void 0:m.toLowerCase()))||(null===(a=e.title)||void 0===a?void 0:a.toLowerCase().includes(null===m||void 0===m?void 0:m.toLowerCase()))||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(null===m||void 0===m?void 0:m.toLowerCase())))||void 0)})).map((function(e){var t,n;return Object(d.jsxs)("div",{className:"project-item",children:[Object(d.jsx)("div",{className:"item-image-container",onClick:function(){r.push("/".concat(a,"/").concat(e.id,"/edit"))},children:Object(d.jsx)("img",{src:e.images[0],alt:"Project Item",className:"item-image"})}),Object(d.jsxs)("div",{className:"text-cont",children:[Object(d.jsxs)("p",{onClick:function(){r.push("/".concat(a,"/").concat(e.id,"/edit"))},children:[(null===(t=e.productName)||void 0===t?void 0:t.slice(0,25))||(null===(n=e.name)||void 0===n?void 0:n.slice(0,25)),"..."]}),Object(d.jsx)("i",{className:"fas fa-trash",onClick:function(){v(e)}})]})]},e._id)}))}),O&&Object(d.jsx)("div",{className:"delete-box-cont",children:Object(d.jsxs)("div",{className:"delete-box",ref:c,children:[Object(d.jsx)("p",{children:"Are you sure you want to delete this item?"}),Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("button",{className:"btn",onClick:x,children:"No.Cancel"}),Object(d.jsx)("button",{className:"btn btn-delete",onClick:h,children:"Yes, Delete"})]})]})}),Object(d.jsx)(j.a,{})]})};var K=function(){var e,t,a=Object(n.useRef)(null),c=B("add-plan","designs"),r=c.plan,s=c.active,o=c.errorMessage,u=c.dragenter,m=c.dragleave,h=c.drop,x=c.handleFileChange,f=c.handleChange,g=c.files,N=c.setFiles,P=(c.urls,c.setUrls),C=c.filter,A=c.setPlan,E=U("plans").data,y=Object(l.h)().id;Object(n.useEffect)((function(){var e=null===E||void 0===E?void 0:E.filter((function(e){return e.id===y}));A(e[0])}),[E]);var _=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w()(),n=F.storage().ref("designs"),c=n.child(a),e.next=5,c.put(t);case 5:return e.next=7,c.getDownloadURL();case 7:return r=e.sent,P((function(e){return[].concat(Object(O.a)(e),[r])})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.images.length>0)){e.next=6;break}return e.next=4,T.put("plans",Object(v.a)({},r)).then((function(e){j.b.success(e.data.message)})).catch((function(e){j.b.error("Failed to update item. Please try again later.")})).finally((function(){A({}),N([]),P([])}));case 4:e.next=25;break;case 6:if(0!==g.length){e.next=8;break}return e.abrupt("return",alert("Please add image(s)"));case 8:return e.prev=8,e.next=11,Promise.all(g.map((function(e){return _(e)})));case 11:return a=e.sent,e.next=14,T.put("plans",Object(v.a)(Object(v.a)({},r),{},{images:a})).then((function(e){j.b.success(e.data.message)}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(8),console.log(e.t0),j.b.error("Failed to update item. Please try again later.");case 20:return e.prev=20,A({}),N([]),P([]),e.finish(20);case 25:case"end":return e.stop()}}),e,null,[[8,16,20,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"new-plan-container",children:[Object(d.jsx)("h1",{children:"View and/or Edit Plan"}),Object(d.jsxs)("form",{ref:a,onSubmit:S,children:[Object(d.jsxs)("div",{className:"new-plan-details",children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Plan Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",className:"name",value:null===r||void 0===r?void 0:r.name,onChange:f,placeholder:"Enter Plan Name",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"category",children:"Category"}),Object(d.jsxs)("select",{name:"category",id:"category",className:"category",value:null===r||void 0===r?void 0:r.category,onChange:f,required:!0,children:[Object(d.jsx)("option",{value:"",children:"Select"}),Object(d.jsx)("option",{value:"bungalow",children:"Bungalow"}),Object(d.jsx)("option",{value:"duplex",children:"Duplex"}),Object(d.jsx)("option",{value:"apartment",children:"Apartment"}),Object(d.jsx)("option",{value:"other",children:"Other"})]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"basicPrice",children:"Basic Price"}),Object(d.jsx)("input",{type:"number",name:"basicPrice",id:"basicPrice",className:"basicPrice",value:null===r||void 0===r?void 0:r.basicPrice,onChange:f,placeholder:"Enter Basic Price",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"standardPrice",children:"Standard Price"}),Object(d.jsx)("input",{type:"number",name:"standardPrice",id:"standardPrice",className:"standardPrice",value:null===r||void 0===r?void 0:r.standardPrice,onChange:f,placeholder:"Enter Standard Price",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"premiumPrice",children:"Premium Price"}),Object(d.jsx)("input",{type:"number",name:"premiumPrice",id:"premiumPrice",className:"premiumPrice",value:null===r||void 0===r?void 0:r.premiumPrice,onChange:f,placeholder:"Enter Premium Price",required:!0})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"plotWidth",children:"Plot Width"}),Object(d.jsx)("input",{type:"text",className:"plotWidth",id:"plotWidth",name:"plotWidth",value:null===r||void 0===r?void 0:r.plotWidth,onChange:f,placeholder:"Enter Plot Width in metres (m)"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"plotLength",children:"Plot Length"}),Object(d.jsx)("input",{type:"text",className:"plotLength",id:"plotLength",name:"plotLength",value:null===r||void 0===r?void 0:r.plotLength,onChange:f,placeholder:"Enter Plot Length in metres (m)"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"plotArea",children:"Plot Area"}),Object(d.jsx)("input",{type:"text",className:"plotArea",id:"plotArea",name:"plotArea",value:null===r||void 0===r?void 0:r.plotArea,onChange:f,placeholder:"Enter Plot Area in metres (m)"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"parking",children:"Parking"}),Object(d.jsxs)("select",{className:"parking",id:"parking",name:"parking",value:null===r||void 0===r?void 0:r.parking,onChange:f,children:[Object(d.jsx)("option",{value:"yes",children:"Yes"}),Object(d.jsx)("option",{value:"no",children:"No"})]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"freeSpace",children:"Free Space"}),Object(d.jsx)("input",{type:"text",className:"freeSpace",id:"freeSpace",name:"freeSpace",value:null===r||void 0===r?void 0:r.freeSpace,onChange:f,placeholder:"Free Space"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"stories",children:"Stories"}),Object(d.jsx)("input",{type:"number",className:"stories",id:"stories",name:"stories",value:null===r||void 0===r?void 0:r.stories,onChange:f,placeholder:"Number of Stories"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"apartments",children:"Apartments"}),Object(d.jsx)("input",{type:"number",className:"apartments",id:"apartments",name:"apartments",value:null===r||void 0===r?void 0:r.apartments,onChange:f,placeholder:"Number of apartments"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"livingRooms",children:"Living Rooms"}),Object(d.jsx)("input",{type:"number",className:"livingRooms",id:"livingRooms",name:"livingRooms",value:null===r||void 0===r?void 0:r.livingRooms,onChange:f,placeholder:"Number of living rooms"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"rooms",children:"Rooms"}),Object(d.jsx)("input",{type:"number",className:"rooms",id:"rooms",name:"rooms",value:null===r||void 0===r?void 0:r.rooms,onChange:f,placeholder:"Number of rooms"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"toilets",children:"Toilets"}),Object(d.jsx)("input",{type:"number",className:"toilets",id:"toilets",name:"toilets",value:null===r||void 0===r?void 0:r.toilets,onChange:f,placeholder:"Number of toilet rooms"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"kitchens",children:"Kitchens"}),Object(d.jsx)("input",{type:"number",className:"kitchens",id:"kitchens",name:"kitchens",value:null===r||void 0===r?void 0:r.kitchens,onChange:f,placeholder:"Number of kitchens"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"balconies",children:"Balconies"}),Object(d.jsx)("input",{type:"number",className:"balconies",id:"balconies",name:"balconies",value:null===r||void 0===r?void 0:r.balconies,onChange:f,placeholder:"Number of balconies"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"verandas",children:"Verandas"}),Object(d.jsx)("input",{type:"number",className:"verandas",id:"verandas",name:"verandas",value:null===r||void 0===r?void 0:r.verandas,onChange:f,placeholder:"Number of verandas"})]})]}),Object(d.jsx)("div",{className:"plan-description-cont",children:Object(d.jsx)("textarea",{rows:"5",className:"description",id:"descriptio",name:"description",value:null===r||void 0===r?void 0:r.description,onChange:f,placeholder:"Describe this plan here",required:!0})}),(null===r||void 0===r||null===(e=r.images)||void 0===e?void 0:e.length)>0?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:null===r||void 0===r||null===(t=r.images)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("div",{className:"update-img-cont",style:{width:"10rem",overflow:"hidden",height:"10rem"},children:Object(d.jsx)("img",{src:e,alt:"uploaded image",style:{width:"100%",height:"100%",objectFit:"cover"}})},t)}))}),Object(d.jsx)("p",{style:{color:"var(--main-background)",textAlign:"center",cursor:"pointer"},onClick:function(){A((function(e){return Object(v.a)(Object(v.a)({},e),{},{images:[]})}))},children:"Remove All Images"})]}):Object(d.jsxs)("div",{className:"true"===s?"add-image-cont active":"bad"===s?"add-image-cont badfile":"add-image-cont",onDragEnter:u,onDragLeave:m,onDrop:h,onDragOver:u,children:[Object(d.jsx)("p",{className:"add-image-text",children:o}),Object(d.jsx)("span",{children:"Or"}),Object(d.jsx)("input",{type:"file",name:"images",id:"add-image",className:"add-image",accept:"image/jpg, image/png, image/jpeg",multiple:!0,onChange:x}),Object(d.jsx)("label",{htmlFor:"add-image",className:"browse",children:"Browse"}),Object(d.jsxs)("p",{children:[g.length," Image(s) added"]})]}),Object(d.jsxs)("div",{className:"plans-and-btns",children:[Object(d.jsx)("div",{className:"plan-files",children:null===g||void 0===g?void 0:g.map((function(e){return Object(d.jsxs)("div",{className:"file",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(){C(e.name)}})]})}))}),Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("button",{className:"btn",children:Object(d.jsx)(i.b,{to:"/products",children:"Cancel"})}),Object(d.jsx)("button",{className:"btn-sub btn",type:"submit",children:"Update"})]})]})]})]}),Object(d.jsx)(j.a,{})]})};var M=function(){var e,t,a=Object(n.useRef)(null),c=B("products","products"),r=c.plan,s=c.active,o=c.errorMessage,u=c.dragenter,m=c.dragleave,h=c.drop,x=c.handleFileChange,f=c.handleChange,g=c.files,N=c.setFiles,P=(c.urls,c.setUrls),C=c.filter,A=c.setPlan,E=U("products","products").data,y=Object(l.h)().id;Object(n.useEffect)((function(){var e=null===E||void 0===E?void 0:E.filter((function(e){return e.id===y}));A(e[0])}),[E]);var _=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w()(),n=F.storage().ref("products"),c=n.child(a),e.next=5,c.put(t);case 5:return e.next=7,c.getDownloadURL();case 7:return r=e.sent,P((function(e){return[].concat(Object(O.a)(e),[r])})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.images.length>0)){e.next=6;break}return e.next=4,T.put("products",Object(v.a)({},r)).then((function(e){j.b.success(e.data.message)}));case 4:e.next=24;break;case 6:if(0!==g.length){e.next=8;break}return e.abrupt("return",alert("Please add image(s)"));case 8:return e.prev=8,e.next=11,Promise.all(g.map((function(e){return _(e)})));case 11:return a=e.sent,e.next=14,T.put("products",Object(v.a)(Object(v.a)({},r),{},{images:a})).then((function(e){j.b.success(e.data.message)}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.log(e.t0);case 19:return e.prev=19,A({}),N([]),P([]),e.finish(19);case 24:case"end":return e.stop()}}),e,null,[[8,16,19,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"new-product",children:[Object(d.jsx)("h1",{children:"View and/or update Product"}),Object(d.jsx)("form",{ref:a,onSubmit:S,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"form-control-group",children:[Object(d.jsx)("label",{htmlFor:"productName",children:"Product Name"}),Object(d.jsx)("input",{type:"text",name:"productName",id:"productName",className:"productName",onChange:f,value:null===r||void 0===r?void 0:r.productName,required:!0,placeholder:"Enter Product Name"})]}),Object(d.jsx)("div",{className:"form-control-group",children:Object(d.jsx)("textarea",{name:"description",id:"description",rows:"10",onChange:f,placeholder:"Enter Description",value:null===r||void 0===r?void 0:r.description,required:!0})}),(null===r||void 0===r||null===(e=r.images)||void 0===e?void 0:e.length)>0?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:null===r||void 0===r||null===(t=r.images)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("div",{className:"update-img-cont",style:{width:"10rem",overflow:"hidden",height:"10rem"},children:Object(d.jsx)("img",{src:e,alt:"uploaded image",style:{width:"100%",height:"100%",objectFit:"cover"}})},t)}))}),Object(d.jsx)("p",{style:{color:"var(--main-background)",textAlign:"center",cursor:"pointer"},onClick:function(){A((function(e){return Object(v.a)(Object(v.a)({},e),{},{images:[]})}))},children:"Remove All Images"})]}):Object(d.jsxs)("div",{className:"true"===s?"add-image-cont active":"bad"===s?"add-image-cont badfile":"add-image-cont",onDragEnter:u,onDragLeave:m,onDrop:h,onDragOver:u,children:[Object(d.jsx)("p",{className:"add-image-text",children:o}),Object(d.jsx)("span",{children:"Or"}),Object(d.jsx)("input",{type:"file",name:"images",id:"add-image",className:"add-image",accept:"image/jpg, image/png, image/jpeg",multiple:!0,onChange:x}),Object(d.jsx)("label",{htmlFor:"add-image",className:"browse",children:"Browse"}),Object(d.jsxs)("p",{children:[g.length," Image(s) Added"]})]}),Object(d.jsxs)("div",{className:"plans-and-btns",children:[Object(d.jsx)("div",{className:"plan-files",children:null===g||void 0===g?void 0:g.map((function(e){return Object(d.jsxs)("div",{className:"file",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(){C(e.name)}})]})}))}),Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("button",{className:"btn",children:Object(d.jsx)(i.b,{to:"/",children:"Cancel"})}),Object(d.jsx)("button",{className:"btn-sub btn",type:"submit",children:"Update"})]})]})]})}),Object(d.jsx)(j.a,{})]})};var H=function(){var e=U("plans"),t=e.data,a=e.handleDelete,n=U("products"),c=n.data,r=n.handleDelete;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,children:Object(d.jsx)(q,{data:t,handleDelete:a,route:"designs"})}),Object(d.jsx)(l.a,{path:"/designs/:id/edit",exact:!0,children:Object(d.jsx)(K,{data:t,route:"designs"})}),Object(d.jsx)(l.a,{path:"/products",exact:!0,children:Object(d.jsx)(q,{data:c,handleDelete:r,route:"products"})}),Object(d.jsx)(l.a,{path:"/new-plan",exact:!0,children:Object(d.jsx)(L,{})}),Object(d.jsx)(l.a,{path:"/new-product",exact:!0,children:Object(d.jsx)(W,{})}),Object(d.jsx)(l.a,{path:"/products/:id/edit",exact:!0,children:Object(d.jsx)(M,{})})]})]})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))},50:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.b0569efb.chunk.js.map