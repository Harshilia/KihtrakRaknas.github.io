(this["webpackJsonpkihtrak.com"]=this["webpackJsonpkihtrak.com"]||[]).push([[1],{18:function(e,t,a){e.exports=a.p+"static/media/favicon.291eccc8.ico"},26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/Karthik.38fe051d.webp"},40:function(e,t,a){e.exports=a.p+"static/media/Karthik-compressed.eaf20dfc.webp"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(31),a(2)),o=a(3),s=a(4),m=a(5),u=a(6),d=(a(32),a(18)),h=a.n(d),b=a(19),v=a(20),E=a.n(v),p=(a(36),a(37)),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Parallax,{bgImage:window.outerWidth>992?a(39):a(40),bgImageAlt:"A picture of Karthik Sankar",bgImageStyle:window.chrome?{height:"200vh",overflow:"hidden",width:"300vh"}:{},strength:-300},r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(E.a,{centered:!0,className:"center-vert",percentage:window.outerHeight>700?.1:window.outerHeight>620?.1:.5,speed:-3,style:{fontSize:"10vh",color:"black",fontWeight:"bold"}},r.a.createElement(p,{items:window.outerWidth/window.outerHeight>=.8?["Karthik Sankar","Kihtrak Raknas"]:["Karthik","Kihtrak"]}))))}}]),t}(r.a.Component),w=a(21),f=a.n(w),k=a(22),N=a.n(k),y=a(7),x=a(8),j=(a(44),a(23)),S=a.n(j),M=a(24),O=a.n(M),A=function(e){function t(){var e;Object(c.a)(this,t),e=Object(s.a)(this,Object(m.a)(t).call(this));var a=window.innerHeight;return window.innerWidth<a&&(a=window.innerWidth),e.state={vmin:a},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getMin",value:function(){return window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight}},{key:"updateDimensions",value:function(){var e=this.getMin();this.setState({vmin:e})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{bottom:!0},r.a.createElement("h1",{className:"text-center display-2"},"About Me")),r.a.createElement(N.a,null),r.a.createElement("div",{className:"row",style:{overflowX:"hidden"}},r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement(S.a,{left:!0},r.a.createElement("div",null,r.a.createElement(y.a,{icon:x.i,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"New Jersey")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(y.a,{icon:x.h,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"South Brunswick High School")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(y.a,{icon:x.g,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"Captain of ",r.a.createElement("a",{href:"http://750s.github.io"},"750S"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(y.a,{icon:x.a,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"Teach programming @ Code Ninjas")),r.a.createElement("br",null))),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement(O.a,{right:!0},r.a.createElement(y.a,{icon:x.f,size:Math.round(this.state.vmin/175)+"x",style:{marginRight:"10px"}}),r.a.createElement("p",{className:"about-txt"},"Full-stack developer"),r.a.createElement("p",{className:"about-txt"},"Fluent in HTML, CSS, Javascript, Node.js, Java & C++"),r.a.createElement("p",{className:"about-txt"},"Favorite frameworks: React & React Native"),r.a.createElement("p",{className:"about-txt"},"Favorite editors: Andriod Studio, Visual Studio Code & Xcode")))),r.a.createElement("div",null))}}]),t}(r.a.Component),P=a(13),W=a.n(P),C=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(4)]).then(a.bind(null,284))})),z=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6),a.e(7)]).then(a.bind(null,283))})),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showProjects:!1},a.componentDidMount=function(){return[window.addEventListener("scroll",a.handleScroll)]},a.handleScroll=function(){!a.state.showProjects&&2*window.innerHeight>document.getElementById("Projects").getBoundingClientRect().top&&a.setState({showProjects:!0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showProjects;return!t&&2*window.innerHeight<window.scrollY&&(t=!0),r.a.createElement("div",null,r.a.createElement(g,{id:"Top"}),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},r.a.createElement("a",{className:"navbar-brand",href:"#Top"},r.a.createElement("img",{src:h.a,style:{height:"100%"},alt:"3D K spinning"}),r.a.createElement("span",null,"arthik")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("a",{className:"nav-item nav-link",href:"#About-Me"},"About Me"),r.a.createElement("a",{className:"nav-item nav-link",href:"#Projects"},"Projects"),r.a.createElement("a",{className:"nav-item nav-link",href:"#Around-The-Web"},"Around the Web")))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"display-1 text-center"},"Karthik Sankar"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"About-Me"},r.a.createElement(A,null)),r.a.createElement("br",null),r.a.createElement("div",{id:"Projects"},r.a.createElement("br",null),r.a.createElement("br",null),this.state.showProjects?r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"contain"},r.a.createElement("h1",null,"Loading\u2026"),r.a.createElement(W.a,{type:"bubbles",color:"#000000",height:"20%",width:"20%",className:"text-center"}))},r.a.createElement(C,null)):r.a.createElement("div",{className:"contain"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-danger",onClick:function(){return e.setState({showProjects:!0})}},"If you see this button, that means something went wrong. Click me to load the content."))),r.a.createElement("br",null),r.a.createElement("div",{id:"Around-The-Web"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"contain"},r.a.createElement("h1",null,"Still Loading\u2026"),r.a.createElement(W.a,{type:"bubbles",color:"#000000",height:"20%",width:"20%",className:"text-center"}))},r.a.createElement(z,null))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,2,3]]]);
//# sourceMappingURL=main.201ab4ee.chunk.js.map