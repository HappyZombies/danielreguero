(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{151:function(e,t,n){var c={"./blogs/1-28-2021.md":152,"./blogs/blogs":32,"./blogs/blogs.json":32,"./bugs/1-28-2021.md":153,"./bugs/bugs":33,"./bugs/bugs.json":33,"./ketorecipes/1-28-2021.md":154,"./ketorecipes/ketorecipes":34,"./ketorecipes/ketorecipes.json":34,"./projects/1-28-2021.md":155,"./projects/projects":35,"./projects/projects.json":35};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=r,e.exports=o,o.id=151},152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1-28-2021.5b887a62.md"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1-28-2021.e96c05ec.md"},154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1-28-2021.6232e20e.md"},155:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1-28-2021.cad59031.md"},156:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),s=n(29),i=n.n(s),a=n(15),l=n(10),d=n(3);n(76),n(19);var j=function(){return Object(c.jsxs)("div",{className:"App App-center-screen",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h1",{children:"Daniel Reguero"}),Object(c.jsx)("h4",{children:Object(c.jsx)("b",{children:"> I just wanna make stuff"})}),Object(c.jsx)("i",{children:"Isaiah 40:31"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("nav",{className:"App-menu",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"App-link",children:Object(c.jsx)(l.b,{to:"/projects",children:"projects"})}),Object(c.jsx)("li",{className:"App-link",children:Object(c.jsx)(l.b,{to:"/blogs",children:"blog"})}),Object(c.jsx)("li",{className:"App-link",children:Object(c.jsx)(l.b,{to:"/about",children:"about"})})]})})})]})};var u=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"About"}),Object(c.jsx)("p",{children:"Hey there, I'm Daniel. A software engineer focused primarly on web development."}),Object(c.jsx)("p",{children:"I use Node.js along with relational databases in a lot of my applications."}),Object(c.jsx)("p",{children:"I enjoy gardening, board games, video games and learning new things about software."})]})},p=function(e){return{type:"UPDATE_LINK",payload:{link:e}}};var b=Object(a.b)(null,(function(e){return{updateLink:function(t){return e(p(t))}}}))((function(e){var t=e.type,o=e.title;(0,e.updateLink)("/danielreguero");var r=n(47)("./".concat(t,"/").concat(t,".json"));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:o}),Object(c.jsx)("div",{children:Object(c.jsx)("ul",{id:"wall",children:r.map((function(e,n){return Object(c.jsxs)("li",{children:[Object(c.jsxs)(l.b,{to:"/".concat(t,"/").concat(e.date),children:[e.date,"\xa0",e.title]}),"\xa0-\xa0[",e.category,"]\xa0"]},n)}))})})]})}));var h=function(){return Object(c.jsx)(b,{type:"blogs",title:"Blog"})},O=n(16),x=n(62),f=n(63),g=n(66),m=n(65),v=n(64),k=n.n(v),y=function(e){var t=e.date;return Object(c.jsx)("h5",{className:"feat",children:Object(c.jsx)("span",{children:Object(c.jsx)("i",{children:t})})})},N=function(e){Object(g.a)(o,e);var t=Object(m.a)(o);function o(e){var n;return Object(x.a)(this,o),(n=t.call(this,e)).state={content:null,date:null},n.notFoundText="# Not Found\nSorry, couldn't find this post :(",e.updateLink("".concat("/danielreguero","/").concat(e.type)),n}return Object(f.a)(o,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,c=this.props.type,o=null;if(n(47)("./".concat(c,"/").concat(c,".json")).forEach((function(e){e.id!==t||(o=e)})),null!==o){var r;try{r=n(151)("./".concat(c,"/").concat(o.path)).default}catch(s){return void this.setState({content:this.notFoundText})}fetch(r).then((function(e){return e.text()})).then((function(t){e.setState({content:t,date:o.date,title:o.title})})).catch((function(){e.setState({content:e.notFoundText})}))}else this.setState({content:this.notFoundText})}},{key:"render",value:function(){var e=this.state,t=e.content,n=e.date,o=e.title;return Object(c.jsxs)("div",{className:"App post-display",children:[n?Object(c.jsx)(y,{date:n}):null,Object(c.jsx)("h1",{children:o}),Object(c.jsx)("div",{className:"post-content",children:Object(c.jsx)(k.a,{source:t})})]})}}]),o}(o.Component),A=Object(a.b)((function(e){return{link:e.link.link}}),(function(e){return{updateLink:function(t){return e(p(t))}}}))(N);var w=function(e){return Object(c.jsx)(A,Object(O.a)({type:"blogs"},e))};var F=function(){return Object(c.jsx)(b,{type:"projects",title:"Projects"})};var S=function(e){return Object(c.jsx)(A,Object(O.a)({type:"projects"},e))};var D=Object(a.b)((function(e){return{link:e.link.link}}),null)((function(e){var t=e.children,n=e.link;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("nav",{id:"App-nav-menu",children:["/"!==n?Object(c.jsxs)(l.b,{to:"/",children:["<-",Object(c.jsx)("i",{children:"Home"})]}):null,Object(c.jsx)(l.b,{to:n,children:"<-"})]}),t]})})),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))},L=n(23),T={link:"/"},I=Object(L.c)(Object(L.b)({link:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return console.log(t),"UPDATE_LINK"===t.type?{link:t.payload.link}:e}}));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(a.a,{store:I,children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/danielreguero",component:j}),Object(c.jsxs)(D,{children:[Object(c.jsx)(d.a,{exact:!0,path:"".concat("/danielreguero","/about"),component:u}),Object(c.jsx)(d.a,{exact:!0,path:"".concat("/danielreguero","/blogs"),component:h}),Object(c.jsx)(d.a,{exact:!0,path:"".concat("/danielreguero","/blogs/:id"),component:w}),Object(c.jsx)(d.a,{exact:!0,path:"".concat("/danielreguero","/projects"),component:F}),Object(c.jsx)(d.a,{exact:!0,path:"".concat("/danielreguero","/projects/:id"),component:S})]})]})})})}),document.getElementById("root")),E()},19:function(e,t,n){},32:function(e){e.exports=JSON.parse('[{"title":"How to make better Error responses in Node/Express","date":"1-28-2021","id":"1-28-2021","path":"1-28-2021.md","category":"node"}]')},33:function(e){e.exports=JSON.parse('[{"title":"Bug Post","date":"1-28-2021","id":"1-28-2021","path":"1-28-2021.md","category":"node"}]')},34:function(e){e.exports=JSON.parse('[{"title":"Keto Recipe #1","date":"1-28-2021","id":"1-28-2021","path":"1-28-2021.md","category":"node"}]')},35:function(e){e.exports=JSON.parse('[{"title":"Project #1 Here","date":"1-28-2021","id":"1-28-2021","path":"1-28-2021.md","category":"node"}]')},47:function(e,t,n){var c={"./blogs/blogs.json":32,"./bugs/bugs.json":33,"./ketorecipes/ketorecipes.json":34,"./projects/projects.json":35};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=r,e.exports=o,o.id=47},76:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.54f644b0.chunk.js.map