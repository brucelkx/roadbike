(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var i=n(3),r=n(5),c=n.n(r),a=n(0),o=n.n(a),s=(n(38),n(15),n(90)),d=n.n(s),f=(n(1),n(4),n(18),function(){this.init=function(e,t){var n=document.createElement("iframe");n.src="/pdfjs/web/viewer.html?file="+encodeURIComponent(e),n.width="100%",n.height="100%",t.appendChild(n)}}),l={overflow:"hidden"},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).viewerRef=o.a.createRef(),n.backend=new f,n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e="/welcome.pdf",t=decodeURIComponent(window.location.hash||"");t&&/^#file=\/static/i.test(t)&&(e=t.substring(6));var n=this.viewerRef.current;this.backend.init(e,n)},n.render=function(){return o.a.createElement("div",{ref:this.viewerRef,id:"viewer",style:{width:"100%",height:"calc(100vh - 3.5rem)"}},o.a.createElement(d.a,null,o.a.createElement("htmlAttributes",{className:Object(i.css)(l)}),o.a.createElement("meta",{name:"Description",content:"小书匠 pdf 阅读"})))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-pdf-js-1b2084d4f2823b8d982f.js.map