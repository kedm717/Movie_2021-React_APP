(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),i=a.n(r),c=a(17),o=a.n(c),l=a(29),u=a(11),j=a(12),m=a(14),d=a(13),p=a(30),b=a.n(p),v=a(7),h=a.n(v),O=(a(57),a(9)),x=a(1);function f(e){var t=e.title,a=e.year,n=e.summary,s=e.poster,r=e.genres;return Object(x.jsx)("div",{className:"movie",children:Object(x.jsx)(O.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:s,genres:r}},children:Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("img",{src:s,alt:t,title:t}),Object(x.jsx)("h3",{className:"movie__title",children:t}),Object(x.jsx)("h5",{className:"movie__year",children:a}),Object(x.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(x.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(x.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})})})}f.prototype={year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var y=f,g=(a(65),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(x.jsx)("section",{className:"cotainer",children:t?Object(x.jsx)("div",{className:"loder",children:Object(x.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(x.jsx)("div",{className:"movie",children:a.map((function(e){return Object(x.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(s.a.Component)),_=(a(66),a(2));a(67);var N=function(){return Object(x.jsxs)("div",{className:"about__container",children:[Object(x.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(x.jsx)("span",{children:" - George Orwell, 1984"})]})};a(68);var w=function(){return Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(O.b,{to:"/",children:"Home"}),Object(x.jsx)(O.b,{to:"/about",children:"About"})]})},k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(x.jsx)("span",{children:e.state.tit}):null}}]),a}(s.a.Component);var q=function(){return Object(x.jsxs)(O.a,{children:[Object(x.jsx)(w,{}),Object(x.jsx)(_.a,{path:"/",exact:!0,component:g}),Object(x.jsx)(_.a,{path:"/about",component:N}),Object(x.jsx)(_.a,{path:"/movie-detail",component:k})]})};i.a.render(Object(x.jsx)(q,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2a4e653b.chunk.js.map