(this["webpackJsonpreact-iwatchtv"]=this["webpackJsonpreact-iwatchtv"]||[]).push([[8],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),c=(a(89),a(14)),o=a(1),m=a(60),s=a(4),u=a(211),d=a(212),p=a(213),h=a(210),E=a(17),g=function(e){var t=e.path,a=e.icon;return r.a.createElement(o.c,{slot:"icon-only",href:"/"+t},r.a.createElement(o.i,{slot:"icon-only",icon:a}))},f=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),f=m[0],b=m[1],v=window.screen.width,y=window.screen.height,w=Object(n.useCallback)((function(){!0===E.isMobile&&"Apple"===E.mobileVendor&&"iPhone"===E.mobileModel&&(812!==y&&812!==v||i({paddingTop:33,paddingBottom:0}),896!==y&&896!==v||i({paddingTop:33,paddingBottom:0}),667!==y&&667!==v||i({paddingTop:20,paddingBottom:0}),736!==y&&736!==v||i({paddingTop:20,paddingBottom:0}),568!==y&&812!==v||i({paddingTop:10,paddingBottom:0})),b(e.title)}),[y,v,e]);return Object(n.useEffect)((function(){w()}),[w]),r.a.createElement(o.h,null,r.a.createElement(o.p,{color:"primary",style:l},r.a.createElement(o.d,{slot:"start"},r.a.createElement(g,{path:"home",icon:u.a}),r.a.createElement(g,{path:"movies",icon:d.a})),r.a.createElement(o.o,null,f),r.a.createElement(o.d,{slot:"end"},r.a.createElement(g,{path:"account",icon:p.a}),r.a.createElement(g,{path:"search",icon:h.a}))))},b=a(214),v=a(16),y=a.n(v),w=function(e,t){return e+Math.random()*(t-e)};w.propTypes={mix:y.a.number.isRequired,max:y.a.number.isRequired};var j=a(3),_=a.n(j),k=(a(33),function(e){var t=r.a.useState({movies:[],error:!1}),a=Object(s.a)(t,2),n=a[0],l=a[1],i=e.url,c=[{},{},{},{},{}];r.a.useEffect((function(){fetch(i).then((function(e){return e.json()})).then((function(e){l({movies:e.results})})).catch((function(e){l({error:!0})}))}),[i]);var m=r.a.useState(!0),u=Object(s.a)(m,2),d=u[0],p=u[1];r.a.useEffect((function(){setTimeout((function(){p(!1)}),1550)}),[d]);return!0===d?r.a.createElement((function(){return c.map((function(){return r.a.createElement("div",{key:w(0,9999),className:"swiper-slide",style:{backgroundColor:"#fff",borderRadius:"10px"}},r.a.createElement("div",null,r.a.createElement("div",{className:"SlideSubTitle"},r.a.createElement("p",{className:"SlideSubTitleText"},r.a.createElement(_.a,null))),r.a.createElement("div",{className:"SlideImg"},r.a.createElement(_.a,{width:"100%",widthRandomness:"0"})),r.a.createElement("h6",{className:"thumbDate"},r.a.createElement(_.a,null)),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(_.a,null))))}))}),null):void 0!==n.movies[0]?r.a.createElement((function(){return n.movies.map((function(e){var t=e.backdrop_path,a=e.title,n=e.id,l=e.release_date,i=e.vote_average;e.poster_path;return r.a.createElement("div",{key:n+w,className:"swiper-slide slide slidein",style:{backgroundColor:"#fff",borderRadius:"10px"}},r.a.createElement("a",{href:"/movie/"+n},r.a.createElement("div",{className:"SlideSubTitle"},r.a.createElement("p",{className:"SlideSubTitleText"},a)),r.a.createElement("img",{className:"SlideImg",src:"https://image.tmdb.org/t/p/original/"+t,alt:"no"}),r.a.createElement("h6",{className:"thumbDate"},l),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(o.i,{icon:b.a}),i)))}))}),null):r.a.createElement(o.e,null,"No Movies")}),S=function(e){return r.a.createElement("div",{className:"slider-wrapper HomeSliderContainer"},r.a.createElement("div",{className:"swiper-container slider"},r.a.createElement(k,{url:e.url})))},N=function(e){var t=r.a.useState({movies:[],error:!1}),a=Object(s.a)(t,2),n=a[0],l=a[1],i=e.url;r.a.useEffect((function(){fetch(i).then((function(e){return e.json()})).then((function(e){void 0!==e.results?l({movies:e.results}):void 0!==e.cast?l({movies:e.cast}):l({movies:[]})})).catch((function(e){l({error:!0})}))}),[i]);var c=r.a.useState(!0),m=Object(s.a)(c,2),u=m[0],d=m[1];return r.a.useEffect((function(){setTimeout((function(){d(!1)}),1510)}),[u]),!0===u?[{},{},{},{},{}].map((function(){return r.a.createElement("div",{key:w(0,999999),className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("div",null,r.a.createElement("h5",{className:"noScrollbar"},r.a.createElement(_.a,{width:"20vw"})),r.a.createElement(_.a,{height:"17vh",width:"22vw",widthRandomness:"0",heightRandomness:"0",borderRadius:"10px"}),r.a.createElement("br",null),r.a.createElement("h6",{className:"thumbDate"},r.a.createElement(_.a,{width:"20vw"})),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(_.a,{width:"15vw"})))))})):0!==n.movies.length?n.movies.map((function(e){var t=e.title,a=e.id,n=e.vote_average,l=e.release_date,i=e.poster_path;return r.a.createElement("div",{key:a,className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("a",{href:"/movie/"+a},r.a.createElement("h5",{className:"thumbTitle noScrollbar"},t),r.a.createElement("img",{className:"thumbImg",src:"https://image.tmdb.org/t/p/w500/"+i,alt:a}),r.a.createElement("h6",{className:"thumbDate"},l),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(o.i,{icon:b.a}),n))))})):r.a.createElement(o.f,{style:{marginLeft:"34%",marginTop:100}},"No Movies")},T=function(e){var t=e.url,a=e.title;return""!==t?r.a.createElement("div",null,r.a.createElement(o.e,{style:{marginBottom:-15,paddingTop:20}},a),r.a.createElement("div",{className:"thumbSlider noScrollbar"},r.a.createElement(N,{url:t}))):r.a.createElement(o.e,null,"No URL Available")},x=w(1,5),O=w(1,5),B=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{class:"noScrollbar",style:{textAlign:"center"}},r.a.createElement(S,{url:"https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(w(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(w(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(w(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/upcoming?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(w(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(w(x,O))})))},A=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Account")))},V=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Search")))},R=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Settings")))},U=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Terms")))},C=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Privacy")))},W=a(215),D=a(216),P=a(217),M=a(218),L=a(219),F=a(220),I=[{path:"movies",icon:"film",name:"Movies"},{path:"shows",icon:"easel",name:"Shows"},{path:"livetv",icon:"tv",name:"Live TV"},{path:"kids",icon:"happy",name:"Kids"},{path:"anime",icon:"walk",name:"Anime"},{path:"sports",icon:"basketball",name:"Sports"}],z=function(e){return e.tabs.map((function(e){return r.a.createElement(o.n,{key:e.path,tab:e.path,href:"/"+e.path},r.a.createElement($,{icon:e.icon}),e.name)}))},$=function(e){var t=e.icon;return"film"===t?r.a.createElement(o.i,{icon:W.a}):"easel"===t?r.a.createElement(o.i,{icon:D.a}):"tv"===t?r.a.createElement(o.i,{icon:P.a}):"happy"===t?r.a.createElement(o.i,{icon:M.a}):"walk"===t?r.a.createElement(o.i,{icon:L.a}):"basketball"===t?r.a.createElement(o.i,{icon:F.a}):"person"===t?r.a.createElement(o.i,{icon:p.a}):"home"===t?r.a.createElement(o.i,{icon:u.a}):"logoYoutube"===t?r.a.createElement(o.i,{icon:d.a}):null},q=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=window.screen.width,m=window.screen.height,u=Object(n.useCallback)((function(){!0===E.isMobile&&"Apple"===E.mobileVendor&&"iPhone"===E.mobileModel&&(812!==m&&812!==c||i({paddingTop:0,paddingBottom:30,textAlign:"center"}),896!==m&&896!==c||i({paddingTop:0,paddingBottom:30,textAlign:"center"}))}),[m,c]);return Object(n.useEffect)((function(){u()}),[u]),r.a.createElement(o.m,{color:"primary",style:l,slot:"bottom"},z({tabs:I}))},J=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding noScrollbar",style:{textAlign:"center"}},r.a.createElement(o.f,null,"Movies"),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")}),r.a.createElement(T,{title:"Now Playing",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")}),r.a.createElement(T,{title:"Top Rated",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")})),r.a.createElement(q,null))},K=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Shows"),r.a.createElement(T,{url:"https://api.themoviedb.org/3/tv/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")})),r.a.createElement(q,null))},H=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Anime")),r.a.createElement(q,null))},Y=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Live TV")),r.a.createElement(q,null))},G=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Kids"),r.a.createElement(T,{url:"https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")})),r.a.createElement(q,null))},Q=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Sports")),r.a.createElement(q,null))},X=a(209),Z=function(e){var t=e.path,a=e.icon;return r.a.createElement(o.c,{slot:"icon-only",href:"/"+t},r.a.createElement(o.i,{slot:"icon-only",icon:a}))},ee=function(e){var t=e.value;return r.a.createElement(o.o,null,t)},te=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),p=m[0],h=m[1],g=window.screen.width,f=window.screen.height,b=window.history.length;var v=Object(n.useCallback)((function(){!0===E.isMobile&&"Apple"===E.mobileVendor&&"iPhone"===E.mobileModel&&(812!==f&&812!==g||i({paddingTop:33,paddingBottom:0}),896!==f&&896!==g||i({paddingTop:33,paddingBottom:0}),667!==f&&667!==g||i({paddingTop:20,paddingBottom:0}),736!==f&&736!==g||i({paddingTop:20,paddingBottom:0}),568!==f&&812!==g||i({paddingTop:10,paddingBottom:0})),h(e.title)}),[f,g,e]);return Object(n.useEffect)((function(){v()}),[v]),r.a.createElement(o.h,null,r.a.createElement(o.p,{color:"primary",style:l},r.a.createElement(o.d,{slot:"start"},r.a.createElement(Z,{path:"home",icon:u.a}),r.a.createElement(Z,{path:"movies",icon:d.a})),r.a.createElement(ee,{value:p}),r.a.createElement(o.d,{slot:"end"},r.a.createElement(o.c,{onClick:function(){(2===b||b>=1)&&window.history.back()}},r.a.createElement(o.i,{slot:"icon-only",icon:X.a})," Back"))))},ae=function(e){var t=e.id,a=r.a.useState([]),n=Object(s.a)(a,2),l=n[0],i=n[1],c=r.a.useState(!0),m=Object(s.a)(c,2),u=m[0],d=m[1];return r.a.useEffect((function(){setTimeout((function(){d(!1)}),1530)}),[u]),r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=046fdb0d753c6903e673934705cb553f&language=en-US")).then((function(e){return e.json()})).then((function(e){i(e.results)})).catch((function(e){console.log(e)}))}),[t]),!0===u?r.a.createElement("div",{style:{paddingTop:40,paddingBottom:20}},r.a.createElement(o.e,null,"Trailers"),r.a.createElement("div",{className:"trailers noScrollbar"},r.a.createElement("div",{style:{margin:10}},r.a.createElement(_.a,{width:"30vw",height:"15vh",widthRandomness:"0",heightRandomness:"0"})),r.a.createElement("div",{style:{margin:10}},r.a.createElement(_.a,{width:"30vw",height:"15vh",widthRandomness:"0",heightRandomness:"0"})),r.a.createElement("div",{style:{margin:10}},r.a.createElement(_.a,{width:"30vw",height:"15vh",widthRandomness:"0",heightRandomness:"0"})))):0!==l.length?r.a.createElement("div",{style:{paddingTop:40,paddingBottom:20}},r.a.createElement(o.e,null,"Trailers"),r.a.createElement("div",{className:"trailers noScrollbar"},l.map((function(e){var t=e.key,a=e.id;return r.a.createElement("iframe",{key:t,title:a,width:"120vw",height:"120vh",frameBorder:"0",style:{padding:5},src:"https://www.youtube.com/embed/"+t})})))):r.a.createElement(o.e,null,"no trailers available")},ne=a(29),re=function(e){var t=e.movie,a=r.a.useState(!0),n=Object(s.a)(a,2),l=n[0],i=n[1];return r.a.useEffect((function(){setTimeout((function(){i(!1)}),1520)}),[l]),!0===l?r.a.createElement("div",null,r.a.createElement(_.a,{height:"35vh",width:"100%",widthRandomness:"0"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.f,null,r.a.createElement(_.a,{width:"70vw"})),r.a.createElement("br",null),r.a.createElement(o.e,null,r.a.createElement(_.a,{width:"50vw"})),r.a.createElement("br",null),r.a.createElement(o.e,null,r.a.createElement(_.a,{count:10,width:"80vw"})),r.a.createElement("br",null),r.a.createElement(o.e,null,r.a.createElement(_.a,{count:3,width:"30vw"}))):r.a.createElement("div",null,r.a.createElement("div",{className:"BackDropBox"},r.a.createElement("img",{className:"movieBackDrop",src:"https://image.tmdb.org/t/p/original/"+t.backdrop_path,alt:""})),r.a.createElement("img",{className:"moviePoster",src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:""}),r.a.createElement(o.f,{class:"ion-padding"},t.title),r.a.createElement(o.e,null,"Released: ",t.release_date),r.a.createElement(o.e,{class:"ion-padding"},t.overview),r.a.createElement(o.e,null,"length: ",t.runtime," mins"),r.a.createElement(o.e,null,"rating: ",r.a.createElement(o.i,{icon:b.a})," ",t.vote_average),r.a.createElement(ne.a,{value:t.revenue,displayType:"text",thousandSeparator:!0,prefix:"$",renderText:function(e){return r.a.createElement(o.e,null,"revenue: ",e)}}))},le=function(e){var t=e.id,a=r.a.useState(e.stream),n=Object(s.a)(a,2),l=n[0],i=n[1],c=r.a.useState(!0),m=Object(s.a)(c,2),u=m[0],d=m[1];return r.a.useEffect((function(){setTimeout((function(){d(!1)}),1540)}),[u]),r.a.createElement("div",{style:{height:300,width:"100%",marginBottom:40}},r.a.createElement(o.e,null,"Movie Player"),r.a.createElement(o.d,null,r.a.createElement(o.c,{onClick:function(e){i(1===l?2:2===l?3:1)}},"Change Player")),!0===u?r.a.createElement(_.a,{width:"100%",height:"100%",heightRandomness:"0",widthRandomness:"0"}):1===l?r.a.createElement("iframe",{title:t,src:"https://database.gdriveplayer.us/player.php?imdb=".concat(t),height:"300px",width:"100%",frameBorder:"0",loading:"lazy",allowFullScreen:!0}):2===l?r.a.createElement("iframe",{title:t,src:"https://gomostream.com/movie/".concat(t),height:"300px",width:"100%",frameBorder:"0",loading:"lazy",allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-forms"}):r.a.createElement("iframe",{title:t,src:"http://movie2konline.net/api/openload.php?id=".concat(t),height:"300px",width:"100%",frameBorder:"0",loading:"lazy",allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-forms"}))},ie=function(e){var t=r.a.useState({cast:[{}],error:!1}),a=Object(s.a)(t,2),n=a[0],l=a[1],i=e.id;r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"/credits?api_key=046fdb0d753c6903e673934705cb553f")).then((function(e){return e.json()})).then((function(e){l({cast:e.cast})})).catch((function(e){l({error:!0})}))}),[i]);var c=r.a.useState(!0),o=Object(s.a)(c,2),m=o[0],u=o[1];return r.a.useEffect((function(){setTimeout((function(){u(!1)}),1500)}),[m]),!0===m?[{},{},{},{},{}].map((function(){return r.a.createElement("div",{key:w(0,999999),className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement(_.a,{width:"20vw"})),r.a.createElement(_.a,{height:"17vh",width:"22vw",widthRandomness:"0",heightRandomness:"0",borderRadius:"10px"}),r.a.createElement("br",null),r.a.createElement("h6",{className:"thumbDate"},r.a.createElement(_.a,{width:"20vw"})))))})):n.cast.map((function(e){var t=e.name,a=e.id,n=e.character,l=e.profile_path;return r.a.createElement("div",{key:a+w(100,99999),className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("a",{href:"/cast/"+a},r.a.createElement("h5",{className:"thumbTitle noScrollbar"},t),r.a.createElement("img",{className:"thumbImg",src:"https://image.tmdb.org/t/p/w500/"+l,alt:a}),r.a.createElement("h6",{className:"thumbDate"},n))))}))},ce=function(e){var t=e.id;return""!==t?r.a.createElement("div",null,r.a.createElement(o.e,{style:{marginBottom:-15,paddingTop:20}},"Cast"),r.a.createElement("div",{className:"thumbSlider noScrollbar"},r.a.createElement(ie,{id:t}))):r.a.createElement("p",null,"No Data Available")},oe=function(e){var t=e.match.params.id,a=r.a.useState(Array),n=Object(s.a)(a,2),l=n[0],i=n[1];return r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=046fdb0d753c6903e673934705cb553f&language=en-US")).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)}))}),[t]),r.a.createElement(o.k,null,r.a.createElement(te,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ContentBackground",style:{textAlign:"center"}},r.a.createElement(re,{movie:l}),r.a.createElement(ae,{id:t}),r.a.createElement(le,{stream:1,id:l.imdb_id}),r.a.createElement(ce,{id:t}),r.a.createElement(T,{title:"Similar",url:"https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1")}),r.a.createElement(T,{title:"Recommended",url:"https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1")})))},me=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Show Details")))},se=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Channel Details")))},ue=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Sport Details")))},de=function(){return r.a.createElement(o.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Anime Details")))},pe=function(e){var t=e.cast,a=r.a.useState(!0),n=Object(s.a)(a,2),l=n[0],i=n[1];return r.a.useEffect((function(){setTimeout((function(){i(!1)}),1520)}),[l]),!0===l?r.a.createElement("div",null,r.a.createElement(_.a,{height:"35vh",width:"100%",widthRandomness:"0"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.f,null,r.a.createElement(_.a,{width:"70vw"})),r.a.createElement("br",null),r.a.createElement(o.e,null,r.a.createElement(_.a,{width:"50vw"})),r.a.createElement("br",null),r.a.createElement(o.e,null,r.a.createElement(_.a,{count:10,width:"80vw"})),r.a.createElement("br",null),r.a.createElement(o.e,null,r.a.createElement(_.a,{count:3,width:"30vw"}))):r.a.createElement("div",null,r.a.createElement("div",{className:"BackDropBox"},r.a.createElement("img",{className:"movieBackDrop",src:"https://image.tmdb.org/t/p/original/"+t.profile_path,alt:""})),r.a.createElement("img",{className:"moviePoster",src:"https://image.tmdb.org/t/p/w500/"+t.profile_path,alt:""}),r.a.createElement(o.f,{class:"ion-padding"},t.name),r.a.createElement(o.e,null,"Birthday: ",t.birthday),r.a.createElement(o.e,null,"Birth place: ",t.place_of_birth),r.a.createElement(o.e,{class:"ion-padding"},t.biography),r.a.createElement(o.e,null,"rating: ",r.a.createElement(o.i,{icon:b.a})," ",t.vote_average),r.a.createElement(ne.a,{value:t.revenue,displayType:"text",thousandSeparator:!0,prefix:"$",renderText:function(e){return r.a.createElement(o.e,null,"revenue: ",e)}}))},he=function(e){var t=e.match.params.id,a=r.a.useState(Array),n=Object(s.a)(a,2),l=n[0],i=n[1];return r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/person/".concat(t,"?api_key=046fdb0d753c6903e673934705cb553f&language=en-US")).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)}))}),[t]),r.a.createElement(o.k,null,r.a.createElement(te,{title:"iWatchTV"}),r.a.createElement(o.g,{className:"ContentBackground",style:{textAlign:"center"}},r.a.createElement(pe,{cast:l}),r.a.createElement(T,{title:"Movie Credits",url:"https://api.themoviedb.org/3/person/".concat(t,"/movie_credits?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1")}),r.a.createElement(T,{title:"TV Credits",url:"https://api.themoviedb.org/3/person/".concat(t,"/tv_credits?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1")})))},Ee=(a(109),a(110),a(111),a(112),a(113),a(114),a(115),a(116),a(117),a(118),a(119),function(e){return r.a.createElement(o.b,null,r.a.createElement(m.a,null,r.a.createElement(o.l,null,r.a.createElement(c.b,{path:"/home",component:B,exact:!0}),r.a.createElement(c.b,{path:"/movies",component:J}),r.a.createElement(c.b,{path:"/shows",component:K}),r.a.createElement(c.b,{path:"/kids",component:G}),r.a.createElement(c.b,{path:"/sports",component:Q}),r.a.createElement(c.b,{path:"/anime",component:H}),r.a.createElement(c.b,{path:"/livetv",component:Y}),r.a.createElement(c.b,{path:"/movie/:id",component:oe}),r.a.createElement(c.b,{path:"/show/:id",component:me}),r.a.createElement(c.b,{path:"/sport/:id",component:ue}),r.a.createElement(c.b,{path:"/live/ch/:id",component:se}),r.a.createElement(c.b,{path:"/anime/:id",component:de}),r.a.createElement(c.b,{path:"/cast/:id",component:he}),r.a.createElement(c.b,{path:"/settings",component:R}),r.a.createElement(c.b,{path:"/search",component:V}),r.a.createElement(c.b,{path:"/account",component:A}),r.a.createElement(c.b,{path:"/terms",component:U}),r.a.createElement(c.b,{path:"/privacy",component:C}),r.a.createElement(c.b,{exact:!0,path:"/",render:function(){return r.a.createElement(c.a,{to:"/home"})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(120)},89:function(e,t,a){},91:function(e,t,a){var n={"./ion-action-sheet-controller_8.entry.js":[126,43],"./ion-action-sheet-ios.entry.js":[127,44],"./ion-action-sheet-md.entry.js":[128,45],"./ion-alert-ios.entry.js":[129,24],"./ion-alert-md.entry.js":[130,25],"./ion-app_8-ios.entry.js":[131,11],"./ion-app_8-md.entry.js":[132,12],"./ion-avatar_3-ios.entry.js":[133,46],"./ion-avatar_3-md.entry.js":[134,47],"./ion-back-button-ios.entry.js":[135,48],"./ion-back-button-md.entry.js":[136,49],"./ion-backdrop-ios.entry.js":[137,81],"./ion-backdrop-md.entry.js":[138,82],"./ion-button_2-ios.entry.js":[139,50],"./ion-button_2-md.entry.js":[140,51],"./ion-card_5-ios.entry.js":[141,52],"./ion-card_5-md.entry.js":[142,53],"./ion-checkbox-ios.entry.js":[143,54],"./ion-checkbox-md.entry.js":[144,55],"./ion-chip-ios.entry.js":[145,56],"./ion-chip-md.entry.js":[146,57],"./ion-col_3.entry.js":[147,83],"./ion-datetime_3-ios.entry.js":[148,20],"./ion-datetime_3-md.entry.js":[149,21],"./ion-fab_3-ios.entry.js":[150,58],"./ion-fab_3-md.entry.js":[151,59],"./ion-img.entry.js":[152,84],"./ion-infinite-scroll_2-ios.entry.js":[153,39],"./ion-infinite-scroll_2-md.entry.js":[154,40],"./ion-input-ios.entry.js":[155,60],"./ion-input-md.entry.js":[156,61],"./ion-item-option_3-ios.entry.js":[157,62],"./ion-item-option_3-md.entry.js":[158,63],"./ion-item_8-ios.entry.js":[159,64],"./ion-item_8-md.entry.js":[160,65],"./ion-loading-ios.entry.js":[161,26],"./ion-loading-md.entry.js":[162,27],"./ion-menu_4-ios.entry.js":[163,18],"./ion-menu_4-md.entry.js":[164,19],"./ion-modal-ios.entry.js":[165,14],"./ion-modal-md.entry.js":[166,15],"./ion-nav_5.entry.js":[167,13],"./ion-popover-ios.entry.js":[168,16],"./ion-popover-md.entry.js":[169,17],"./ion-progress-bar-ios.entry.js":[170,66],"./ion-progress-bar-md.entry.js":[171,67],"./ion-radio_2-ios.entry.js":[172,32],"./ion-radio_2-md.entry.js":[173,33],"./ion-range-ios.entry.js":[174,68],"./ion-range-md.entry.js":[175,69],"./ion-refresher_2-ios.entry.js":[176,41],"./ion-refresher_2-md.entry.js":[177,42],"./ion-reorder_2-ios.entry.js":[178,37],"./ion-reorder_2-md.entry.js":[179,38],"./ion-ripple-effect.entry.js":[180,85],"./ion-route_4.entry.js":[181,70],"./ion-searchbar-ios.entry.js":[182,28],"./ion-searchbar-md.entry.js":[183,29],"./ion-segment_2-ios.entry.js":[184,71],"./ion-segment_2-md.entry.js":[185,72],"./ion-select_3-ios.entry.js":[186,34],"./ion-select_3-md.entry.js":[187,35],"./ion-slide_2-ios.entry.js":[188,86],"./ion-slide_2-md.entry.js":[189,87],"./ion-spinner.entry.js":[190,73],"./ion-split-pane-ios.entry.js":[191,88],"./ion-split-pane-md.entry.js":[192,89],"./ion-tab-bar_2-ios.entry.js":[193,74],"./ion-tab-bar_2-md.entry.js":[194,75],"./ion-tab_2.entry.js":[195,36],"./ion-text.entry.js":[196,76],"./ion-textarea-ios.entry.js":[197,77],"./ion-textarea-md.entry.js":[198,78],"./ion-toast-ios.entry.js":[199,30],"./ion-toast-md.entry.js":[200,31],"./ion-toggle-ios.entry.js":[201,22],"./ion-toggle-md.entry.js":[202,23],"./ion-virtual-scroll.entry.js":[203,90]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=91,e.exports=r},92:function(e,t,a){var n={"./ion-icon.entry.js":[207,98]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=92,e.exports=r}},[[84,9,10]]]);
//# sourceMappingURL=main.2a0ba2ef.chunk.js.map