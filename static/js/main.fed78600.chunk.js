(this["webpackJsonpsimply-joke"]=this["webpackJsonpsimply-joke"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),s=n.n(r),o=(n(38),n(15)),i=n(3),l=(n(39),n(7)),u=(n(45),n(10)),j=n.n(u),d=n(19),f=n(11),b=n(17),h=n(13),v=n.n(h),p=Object(b.b)({name:"jokes",initialState:{jokeArray:[],flags:[],categories:[]},reducers:{addJokes:function(e,t){var n=t.payload;e.jokeArray=n},toggleFavorite:function(e,t){var n=t.payload;e.jokeArray=e.jokeArray.map((function(e){return e.id!==n?e:Object(f.a)(Object(f.a)({},e),{},{isFav:!e.isFav})}))},getMoreJokes:function(e,t){var n=t.payload;e.jokeArray=n},getMetaData:function(e,t){var n=t.payload;e.categories=n.categories,e.flags=n.flags},toggleCheckbox:function(e,t){var n=t.payload;e.categories.find((function(e){return e.value===n}))?e.categories=e.categories.map((function(e){return e.value!==n?e:Object(f.a)(Object(f.a)({},e),{},{isSelected:!e.isSelected})})):e.flags=e.flags.map((function(e){return e.value!==n?e:Object(f.a)(Object(f.a)({},e),{},{isSelected:!e.isSelected})}))}}}),m=p.actions,g=m.addJokes,k=m.toggleFavorite,x=m.getMoreJokes,O=m.getMetaData,y=m.toggleCheckbox,_=(m.clearMetaData,function(e){return e.jokes.jokeArray}),N=function(e){return{flags:e.jokes.flags,categories:e.jokes.categories}},S=p.reducer,w=function(){return function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://v2.jokeapi.dev/joke/Any?type=single&amount=10");case 3:n=e.sent,a=n.data.jokes.map((function(e){return{id:e.id,category:e.category,joke:e.joke,isFav:!1}})),t(g(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://sv443.net/jokeapi/v2/categories");case 3:return n=e.sent,e.next=6,v.a.get("https://sv443.net/jokeapi/v2/flags");case 6:a=e.sent,n=n.data.categories.reduce((function(e,t){return"Any"!==t&&e.push({value:t,isSelected:!0}),e}),[]),a=a.data.flags.map((function(e){return{value:e,isSelected:!1}})),t(O({categories:n,flags:a})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},C=n(18),J=(n(66),n(1));var A=function(e){var t=e.item,n=Object(l.b)();return Object(J.jsxs)("div",{className:"card",children:[Object(J.jsxs)("div",{className:"card__header",children:[Object(J.jsx)("h3",{children:t.category}),t.isFav?Object(J.jsx)(C.a,{onClick:function(){return n(k(t.id))},style:{cursor:"pointer"},color:"red",size:"22"}):Object(J.jsx)(C.b,{onClick:function(){return n(k(t.id))},style:{cursor:"pointer"},color:"red",size:"22"})]}),Object(J.jsx)("p",{children:t.joke})]})},M=function(e){var t=e.label,n=e.isSelected,a=e.onCheckboxChange;return Object(J.jsxs)("label",{className:"form__check",children:[Object(J.jsx)("input",{type:"checkbox",name:t,checked:n,onChange:a,className:"form__checkInput"}),t]})};var D=function(){var e=Object(l.c)(_),t=Object(l.c)(N),n=Object(l.b)(),a=function(e){var t=e.target.name;n(y(t))},c=function(e){return Object(J.jsx)(M,{label:e.value,isSelected:e.isSelected,onCheckboxChange:a},e.value)};return Object(J.jsxs)("div",{className:"home",children:[Object(J.jsxs)("div",{className:"home__header",children:[Object(J.jsx)("h2",{children:"Add more jokes"}),Object(J.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var a=t.categories.reduce((function(e,t){return t.isSelected&&e.push(t.value),e}),[]),c=t.flags.reduce((function(e,t){return t.isSelected&&e.push(t.value),e}),[]);n(function(e,t){return function(){var n=Object(d.a)(j.a.mark((function n(a){var c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!e||t){n.next=7;break}return n.next=4,v.a.get("https://v2.jokeapi.dev/joke/"+e+"?type=single&amount=10");case 4:c=n.sent,n.next=11;break;case 7:if(!e||!t){n.next=11;break}return n.next=10,v.a.get("https://v2.jokeapi.dev/joke/"+e+"?blacklistFlags="+t+"&type=single&amount=10");case 10:c=n.sent;case 11:r=c.data.jokes.map((function(e){return{id:e.id,category:e.category,joke:e.joke,isFav:!1}})),a(x(r)),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}()}(a.join(),c.join()))},onReset:function(){return n(F())},children:[Object(J.jsxs)("div",{className:"form__section",children:[Object(J.jsx)("h3",{children:"Select Categories:"}),Object(J.jsx)("div",{className:"form__input",children:t.categories.map(c)})]}),Object(J.jsxs)("div",{className:"form__section",children:[Object(J.jsx)("h3",{children:"Select flags to blacklist:"}),Object(J.jsx)("div",{className:"form__input",children:t.flags.map(c)})]}),Object(J.jsxs)("div",{className:"form__btn",children:[Object(J.jsx)("button",{type:"submit",children:"Get Jokes"}),Object(J.jsx)("button",{type:"reset",children:"Reset to Default"})]})]})]}),Object(J.jsxs)("div",{className:"home__title",children:[Object(J.jsx)("h1",{children:"Jokes"}),Object(J.jsx)("button",{onClick:function(){n(w()),n(F())},children:"Refresh"})]}),Object(J.jsx)("div",{className:"home__grid",children:e.map((function(e){return Object(J.jsx)(A,{item:e},e.id)}))})]})};n(68);var R=function(){var e=Object(i.f)().pathname;return Object(J.jsxs)("div",{className:"header",children:[Object(J.jsx)(o.b,{to:"/",className:"header__item "+("/"===e?"active":""),children:"Home"}),Object(J.jsx)(o.b,{to:"/favorites",className:"header__item "+("/favorites"===e?"active":""),children:"Favorites"})]})};n(73);var z=function(){var e=Object(l.c)(_);return Object(J.jsx)("div",{className:"favorites",children:e.filter((function(e){return e.isFav})).length>0?Object(J.jsx)("div",{className:"favorite__grid",children:e.reduce((function(e,t){return t.isFav&&e.push(Object(J.jsx)(A,{item:t},t.id)),e}),[])}):Object(J.jsx)("h1",{children:"No Jokes added in Favorites"})})};var B=function(){var e=Object(l.b)();return Object(a.useEffect)((function(){e(w()),e(F())}),[e]),Object(J.jsx)("div",{className:"app",children:Object(J.jsxs)(o.a,{basename:"/Simply-Joke",children:[Object(J.jsx)(R,{}),Object(J.jsxs)(i.c,{children:[Object(J.jsx)(i.a,{path:"/",exact:!0,component:D}),Object(J.jsx)(i.a,{path:"/favorites",component:z})]})]})})},E=Object(b.a)({reducer:{jokes:S}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(l.a,{store:E,children:Object(J.jsx)(B,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.fed78600.chunk.js.map