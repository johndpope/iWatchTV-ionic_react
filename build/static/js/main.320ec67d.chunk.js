(this["webpackJsonpreact-iwatchtv"]=this["webpackJsonpreact-iwatchtv"]||[]).push([[8],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),o=(a(84),a(14)),c=a(1),m=a(54),s=a(3),d=a(197),u=a(198),p=a(199),h=a(196),E=a(16),g=function(e){var t=e.path,a=e.icon;return r.a.createElement(c.c,{slot:"icon-only",href:"/"+t},r.a.createElement(c.i,{slot:"icon-only",icon:a}))},f=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),f=m[0],b=m[1],v=window.screen.width,y=window.screen.height,j=Object(n.useCallback)((function(){!0===E.isMobile&&"Apple"===E.mobileVendor&&"iPhone"===E.mobileModel&&(812!==y&&812!==v||i({paddingTop:33,paddingBottom:0}),896!==y&&896!==v||i({paddingTop:33,paddingBottom:0}),667!==y&&667!==v||i({paddingTop:20,paddingBottom:0}),736!==y&&736!==v||i({paddingTop:20,paddingBottom:0}),568!==y&&812!==v||i({paddingTop:10,paddingBottom:0})),b(e.title)}),[y,v,e]);return Object(n.useEffect)((function(){j()}),[j]),r.a.createElement(c.h,null,r.a.createElement(c.p,{color:"primary",style:l},r.a.createElement(c.d,{slot:"start"},r.a.createElement(g,{path:"home",icon:d.a}),r.a.createElement(g,{path:"movies",icon:u.a})),r.a.createElement(c.o,null,f),r.a.createElement(c.d,{slot:"end"},r.a.createElement(g,{path:"account",icon:p.a}),r.a.createElement(g,{path:"search",icon:h.a}))))},b=a(200),v=a(23),y=a.n(v),j=function(e,t){return e+Math.random()*(t-e)};j.propTypes={mix:y.a.number.isRequired,max:y.a.number.isRequired};var w=a(4),k=a.n(w),_=function(e){var t=r.a.useState({movies:[],error:!1}),a=Object(s.a)(t,2),n=a[0],l=a[1],i=e.url;r.a.useEffect((function(){fetch(i).then((function(e){return e.json()})).then((function(e){l({movies:e.results})})).catch((function(e){l({error:!0})}))}),[i]);var o=r.a.useState(!0),m=Object(s.a)(o,2),d=m[0],u=m[1];return r.a.useEffect((function(){setTimeout((function(){u(!1)}),1550)}),[d]),!0===d?[{},{},{},{},{}].map((function(){return r.a.createElement("div",{key:j(0,9999),className:"swiper-slide slide"},r.a.createElement("div",{className:"",style:{backgroundColor:"#fff",borderRadius:"10px"}},r.a.createElement("div",null,r.a.createElement("div",{className:"SlideSubTitle"},r.a.createElement("p",{className:"SlideSubTitleText"},r.a.createElement(k.a,null))),r.a.createElement("div",{className:"SlideImg"},r.a.createElement(k.a,{width:"100%",widthRandomness:"0"})),r.a.createElement("h6",{className:"thumbDate"},r.a.createElement(k.a,null)),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(k.a,null)))))})):0!==n.movies.length?n.movies.map((function(e){var t=e.backdrop_path,a=e.title,n=e.id,l=e.release_date,i=e.vote_average;e.poster_path;return null===t||void 0===t?null:r.a.createElement("div",{key:n+j,className:"swiper-slide slide"},r.a.createElement("div",{className:"",style:{backgroundColor:"#fff",borderRadius:"10px"}},r.a.createElement("a",{href:"/movie/"+n},r.a.createElement("div",{className:"SlideSubTitle"},r.a.createElement("p",{className:"SlideSubTitleText"},a)),r.a.createElement("img",{className:"SlideImg",src:"https://image.tmdb.org/t/p/original/"+t,alt:"no"}),r.a.createElement("h6",{className:"thumbDate"},l),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(c.i,{icon:b.a}),i))))})):r.a.createElement(c.e,null,"No Movies")},N=function(e){return r.a.createElement("div",{className:"HomeSliderContainer"},r.a.createElement("div",{className:"swiper-container"},r.a.createElement(_,{url:e.url})))},S=function(e){var t=r.a.useState({movies:[],error:!1}),a=Object(s.a)(t,2),n=a[0],l=a[1],i=e.url;r.a.useEffect((function(){fetch(i).then((function(e){return e.json()})).then((function(e){l({movies:e.results})})).catch((function(e){l({error:!0})}))}),[i]);var o=r.a.useState(!0),m=Object(s.a)(o,2),d=m[0],u=m[1];return r.a.useEffect((function(){setTimeout((function(){u(!1)}),1510)}),[d]),!0===d?[{},{},{},{},{}].map((function(){return r.a.createElement("div",{key:j(0,999999),className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("div",null,r.a.createElement("h5",{className:"noScrollbar"},r.a.createElement(k.a,{width:"20vw"})),r.a.createElement(k.a,{height:"17vh",width:"22vw",widthRandomness:"0",heightRandomness:"0",borderRadius:"10px"}),r.a.createElement("br",null),r.a.createElement("h6",{className:"thumbDate"},r.a.createElement(k.a,{width:"20vw"})),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(k.a,{width:"15vw"})))))})):0!==n.movies.length?n.movies.map((function(e){var t=e.title,a=e.id,n=e.vote_average,l=e.release_date,i=e.poster_path;return r.a.createElement("div",{key:a,className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("a",{href:"/movie/"+a},r.a.createElement("h5",{className:"thumbTitle noScrollbar"},t),r.a.createElement("img",{className:"thumbImg",src:"https://image.tmdb.org/t/p/w500/"+i,alt:a}),r.a.createElement("h6",{className:"thumbDate"},l),r.a.createElement("h6",{className:"thumbVote"},r.a.createElement(c.i,{icon:b.a}),n))))})):r.a.createElement(c.f,{style:{marginLeft:"34%",marginTop:100}},"No Movies")},T=function(e){var t=e.url,a=e.title;return""!==t?r.a.createElement("div",null,r.a.createElement(c.e,{style:{marginBottom:-15,paddingTop:20}},a),r.a.createElement("div",{className:"thumbSlider noScrollbar"},r.a.createElement(S,{url:t}))):r.a.createElement(c.e,null,"No URL Available")},x=j(1,10),O=j(1,10),A=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{class:"noScrollbar",style:{textAlign:"center"}},r.a.createElement(N,{url:"https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(j(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(j(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(j(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/upcoming?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(j(x,O))}),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat(j(x,O))})))},B=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Account")))},V=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Search")))},R=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Settings")))},U=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Terms")))},W=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Privacy")))},C=a(201),D=a(202),P=a(203),M=a(204),L=a(205),F=a(206),I=[{path:"movies",icon:"film",name:"Movies"},{path:"shows",icon:"easel",name:"Shows"},{path:"livetv",icon:"tv",name:"Live TV"},{path:"kids",icon:"happy",name:"Kids"},{path:"anime",icon:"walk",name:"Anime"},{path:"sports",icon:"basketball",name:"Sports"}],z=function(e){return e.tabs.map((function(e){return r.a.createElement(c.n,{key:e.path,tab:e.path,href:"/"+e.path},r.a.createElement(q,{icon:e.icon}),e.name)}))},q=function(e){var t=e.icon;return"film"===t?r.a.createElement(c.i,{icon:C.a}):"easel"===t?r.a.createElement(c.i,{icon:D.a}):"tv"===t?r.a.createElement(c.i,{icon:P.a}):"happy"===t?r.a.createElement(c.i,{icon:M.a}):"walk"===t?r.a.createElement(c.i,{icon:L.a}):"basketball"===t?r.a.createElement(c.i,{icon:F.a}):"person"===t?r.a.createElement(c.i,{icon:p.a}):"home"===t?r.a.createElement(c.i,{icon:d.a}):"logoYoutube"===t?r.a.createElement(c.i,{icon:u.a}):null},J=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],i=a[1],o=window.screen.width,m=window.screen.height,d=Object(n.useCallback)((function(){!0===E.isMobile&&"Apple"===E.mobileVendor&&"iPhone"===E.mobileModel&&(812!==m&&812!==o||i({paddingTop:0,paddingBottom:30,textAlign:"center"}),896!==m&&896!==o||i({paddingTop:0,paddingBottom:30,textAlign:"center"}))}),[m,o]);return Object(n.useEffect)((function(){d()}),[d]),r.a.createElement(c.m,{color:"primary",style:l,slot:"bottom"},z({tabs:I}))},K=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding noScrollbar",style:{textAlign:"center"}},r.a.createElement(c.f,null,"Movies"),r.a.createElement(T,{title:"Popular",url:"https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")}),r.a.createElement(T,{title:"Now Playing",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")}),r.a.createElement(T,{title:"Top Rated",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")})),r.a.createElement(J,null))},$=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Shows"),r.a.createElement(T,{url:"https://api.themoviedb.org/3/tv/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")})),r.a.createElement(J,null))},H=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Anime")),r.a.createElement(J,null))},Y=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Live TV")),r.a.createElement(J,null))},G=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Kids"),r.a.createElement(T,{url:"https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=".concat("1")})),r.a.createElement(J,null))},Q=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Sports")),r.a.createElement(J,null))},X=a(195),Z=function(e){var t=e.path,a=e.icon;return r.a.createElement(c.c,{slot:"icon-only",href:"/"+t},r.a.createElement(c.i,{slot:"icon-only",icon:a}))},ee=function(e){var t=e.value;return r.a.createElement(c.o,null,t)},te=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),p=m[0],h=m[1],g=window.screen.width,f=window.screen.height,b=window.history.length;var v=Object(n.useCallback)((function(){!0===E.isMobile&&"Apple"===E.mobileVendor&&"iPhone"===E.mobileModel&&(812!==f&&812!==g||i({paddingTop:33,paddingBottom:0}),896!==f&&896!==g||i({paddingTop:33,paddingBottom:0}),667!==f&&667!==g||i({paddingTop:20,paddingBottom:0}),736!==f&&736!==g||i({paddingTop:20,paddingBottom:0}),568!==f&&812!==g||i({paddingTop:10,paddingBottom:0})),h(e.title)}),[f,g,e]);return Object(n.useEffect)((function(){v()}),[v]),r.a.createElement(c.h,null,r.a.createElement(c.p,{color:"primary",style:l},r.a.createElement(c.d,{slot:"start"},r.a.createElement(Z,{path:"home",icon:d.a}),r.a.createElement(Z,{path:"movies",icon:u.a})),r.a.createElement(ee,{value:p}),r.a.createElement(c.d,{slot:"end"},r.a.createElement(c.c,{onClick:function(){(2===b||b>=1)&&window.history.back()}},r.a.createElement(c.i,{slot:"icon-only",icon:X.a})," Back"))))},ae=function(e){var t=e.id,a=r.a.useState([]),n=Object(s.a)(a,2),l=n[0],i=n[1],o=r.a.useState(!0),m=Object(s.a)(o,2),d=m[0],u=m[1];return r.a.useEffect((function(){setTimeout((function(){u(!1)}),1530)}),[d]),r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=046fdb0d753c6903e673934705cb553f&language=en-US")).then((function(e){return e.json()})).then((function(e){i(e.results)})).catch((function(e){console.log(e)}))}),[t]),!0===d?r.a.createElement("div",{style:{paddingTop:40,paddingBottom:20}},r.a.createElement(c.e,null,"Trailers"),r.a.createElement("div",{className:"trailers noScrollbar"},r.a.createElement("div",{style:{margin:10}},r.a.createElement(k.a,{width:"30vw",height:"15vh",widthRandomness:"0",heightRandomness:"0"})),r.a.createElement("div",{style:{margin:10}},r.a.createElement(k.a,{width:"30vw",height:"15vh",widthRandomness:"0",heightRandomness:"0"})),r.a.createElement("div",{style:{margin:10}},r.a.createElement(k.a,{width:"30vw",height:"15vh",widthRandomness:"0",heightRandomness:"0"})))):0!==l.length?r.a.createElement("div",{style:{paddingTop:40,paddingBottom:20}},r.a.createElement(c.e,null,"Trailers"),r.a.createElement("div",{className:"trailers noScrollbar"},l.map((function(e){var t=e.key,a=e.id;return r.a.createElement("iframe",{key:t,title:a,width:"120vw",height:"120vh",frameBorder:"0",style:{padding:5},src:"https://www.youtube.com/embed/"+t})})))):r.a.createElement(c.e,null,"no trailers available")},ne=a(76),re=function(e){var t=e.movie,a=r.a.useState(!0),n=Object(s.a)(a,2),l=n[0],i=n[1];return r.a.useEffect((function(){setTimeout((function(){i(!1)}),1520)}),[l]),!0===l?r.a.createElement("div",null,r.a.createElement(k.a,{height:"35vh",width:"100%",widthRandomness:"0"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.f,null,r.a.createElement(k.a,{width:"70vw"})),r.a.createElement("br",null),r.a.createElement(c.e,null,r.a.createElement(k.a,{width:"50vw"})),r.a.createElement("br",null),r.a.createElement(c.e,null,r.a.createElement(k.a,{count:10,width:"80vw"})),r.a.createElement("br",null),r.a.createElement(c.e,null,r.a.createElement(k.a,{count:3,width:"30vw"}))):r.a.createElement("div",null,r.a.createElement("div",{className:"BackDropBox"},r.a.createElement("img",{className:"movieBackDrop",src:"https://image.tmdb.org/t/p/original/"+t.backdrop_path,alt:""})),r.a.createElement("img",{className:"moviePoster",src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:""}),r.a.createElement(c.f,{class:"ion-padding"},t.title),r.a.createElement(c.e,null,"Released: ",t.release_date),r.a.createElement(c.e,{class:"ion-padding"},t.overview),r.a.createElement(c.e,null,"length: ",t.runtime," mins"),r.a.createElement(c.e,null,"rating: ",r.a.createElement(c.i,{icon:b.a})," ",t.vote_average),r.a.createElement(ne.a,{value:t.revenue,displayType:"text",thousandSeparator:!0,prefix:"$",renderText:function(e){return r.a.createElement(c.e,null,"revenue: ",e)}}))},le=function(e){var t=e.id,a=r.a.useState(e.stream),n=Object(s.a)(a,2),l=n[0],i=n[1],o=r.a.useState(!0),m=Object(s.a)(o,2),d=m[0],u=m[1];return r.a.useEffect((function(){setTimeout((function(){u(!1)}),1540)}),[d]),r.a.createElement("div",{style:{height:300,width:"100%",marginBottom:40}},r.a.createElement(c.e,null,"Movie Player"),r.a.createElement(c.d,null,r.a.createElement(c.c,{onClick:function(e){i(1===l?2:2===l?3:1)}},"Change Player")),!0===d?r.a.createElement(k.a,{width:"100%",height:"100%",heightRandomness:"0",widthRandomness:"0"}):1===l?r.a.createElement("iframe",{title:t,src:"https://database.gdriveplayer.us/player.php?imdb=".concat(t),height:"300px",width:"100%",frameBorder:"0",loading:"lazy",allowFullScreen:!0}):2===l?r.a.createElement("iframe",{title:t,src:"https://gomostream.com/movie/".concat(t),height:"300px",width:"100%",frameBorder:"0",loading:"lazy",allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-forms"}):r.a.createElement("iframe",{title:t,src:"http://movie2konline.net/api/openload.php?id=".concat(t),height:"300px",width:"100%",frameBorder:"0",loading:"lazy",allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-forms"}))},ie=function(e){var t=r.a.useState({cast:[{}],error:!1}),a=Object(s.a)(t,2),n=a[0],l=a[1],i=e.id;r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"/credits?api_key=046fdb0d753c6903e673934705cb553f")).then((function(e){return e.json()})).then((function(e){l({cast:e.cast})})).catch((function(e){l({error:!0})}))}),[i]);var o=r.a.useState(!0),c=Object(s.a)(o,2),m=c[0],d=c[1];return r.a.useEffect((function(){setTimeout((function(){d(!1)}),1500)}),[m]),!0===m?[{},{},{},{},{}].map((function(){return r.a.createElement("div",{key:j(0,999999),className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("div",null,r.a.createElement("h5",{className:"noScrollbar"},r.a.createElement(k.a,{width:"20vw"})),r.a.createElement(k.a,{height:"17vh",width:"22vw",widthRandomness:"0",heightRandomness:"0",borderRadius:"10px"}),r.a.createElement("br",null),r.a.createElement("h6",{className:"thumbDate"},r.a.createElement(k.a,{width:"20vw"})))))})):n.cast.map((function(e){var t=e.name,a=e.id,n=e.character,l=e.profile_path;return r.a.createElement("div",{key:a+j(100,99999),className:""},r.a.createElement("div",{className:"thumbCard"},r.a.createElement("a",{href:"/movie/"+a},r.a.createElement("h5",{className:"thumbTitle noScrollbar"},t),r.a.createElement("img",{className:"thumbImg",src:"https://image.tmdb.org/t/p/w500/"+l,alt:a}),r.a.createElement("h6",{className:"thumbDate"},n))))}))},oe=function(e){var t=e.id;return""!==t?r.a.createElement("div",null,r.a.createElement(c.e,{style:{marginBottom:-15,paddingTop:20}},"Cast"),r.a.createElement("div",{className:"thumbSlider noScrollbar"},r.a.createElement(ie,{id:t}))):r.a.createElement("p",null,"No Data Available")},ce=function(e){var t=e.match.params.id,a=r.a.useState(Array),n=Object(s.a)(a,2),l=n[0],i=n[1];return r.a.useEffect((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=046fdb0d753c6903e673934705cb553f&language=en-US")).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)}))}),[t]),r.a.createElement(c.k,null,r.a.createElement(te,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ContentBackground",style:{textAlign:"center"}},r.a.createElement(re,{movie:l}),r.a.createElement(ae,{id:t}),r.a.createElement(le,{stream:1,id:l.imdb_id}),r.a.createElement(oe,{id:t}),r.a.createElement(T,{title:"Similar",url:"https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1")}),r.a.createElement(T,{title:"Recommended",url:"https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1")})))},me=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Show Details")))},se=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Channel Details")))},de=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Sport Details")))},ue=function(){return r.a.createElement(c.k,null,r.a.createElement(f,{title:"iWatchTV"}),r.a.createElement(c.g,{className:"ion-padding",style:{textAlign:"center"}},r.a.createElement("h4",null,"Anime Details")))},pe=(a(94),a(95),a(96),a(97),a(98),a(99),a(100),a(101),a(102),a(103),a(104),a(105),function(e){return r.a.createElement(c.b,null,r.a.createElement(m.a,null,r.a.createElement(c.l,null,r.a.createElement(o.b,{path:"/home",component:A,exact:!0}),r.a.createElement(o.b,{path:"/movies",component:K}),r.a.createElement(o.b,{path:"/shows",component:$}),r.a.createElement(o.b,{path:"/kids",component:G}),r.a.createElement(o.b,{path:"/sports",component:Q}),r.a.createElement(o.b,{path:"/anime",component:H}),r.a.createElement(o.b,{path:"/livetv",component:Y}),r.a.createElement(o.b,{path:"/movie/:id",component:ce}),r.a.createElement(o.b,{path:"/show/:id",component:me}),r.a.createElement(o.b,{path:"/sport/:id",component:de}),r.a.createElement(o.b,{path:"/live/ch/:id",component:se}),r.a.createElement(o.b,{path:"/anime/:id",component:ue}),r.a.createElement(o.b,{path:"/settings",component:R}),r.a.createElement(o.b,{path:"/search",component:V}),r.a.createElement(o.b,{path:"/account",component:B}),r.a.createElement(o.b,{path:"/terms",component:U}),r.a.createElement(o.b,{path:"/privacy",component:W}),r.a.createElement(o.b,{exact:!0,path:"/",render:function(){return r.a.createElement(o.a,{to:"/home"})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,t,a){e.exports=a(106)},84:function(e,t,a){},86:function(e,t,a){var n={"./ion-action-sheet-controller_8.entry.js":[112,43],"./ion-action-sheet-ios.entry.js":[113,44],"./ion-action-sheet-md.entry.js":[114,45],"./ion-alert-ios.entry.js":[115,24],"./ion-alert-md.entry.js":[116,25],"./ion-app_8-ios.entry.js":[117,11],"./ion-app_8-md.entry.js":[118,12],"./ion-avatar_3-ios.entry.js":[119,46],"./ion-avatar_3-md.entry.js":[120,47],"./ion-back-button-ios.entry.js":[121,48],"./ion-back-button-md.entry.js":[122,49],"./ion-backdrop-ios.entry.js":[123,81],"./ion-backdrop-md.entry.js":[124,82],"./ion-button_2-ios.entry.js":[125,50],"./ion-button_2-md.entry.js":[126,51],"./ion-card_5-ios.entry.js":[127,52],"./ion-card_5-md.entry.js":[128,53],"./ion-checkbox-ios.entry.js":[129,54],"./ion-checkbox-md.entry.js":[130,55],"./ion-chip-ios.entry.js":[131,56],"./ion-chip-md.entry.js":[132,57],"./ion-col_3.entry.js":[133,83],"./ion-datetime_3-ios.entry.js":[134,20],"./ion-datetime_3-md.entry.js":[135,21],"./ion-fab_3-ios.entry.js":[136,58],"./ion-fab_3-md.entry.js":[137,59],"./ion-img.entry.js":[138,84],"./ion-infinite-scroll_2-ios.entry.js":[139,39],"./ion-infinite-scroll_2-md.entry.js":[140,40],"./ion-input-ios.entry.js":[141,60],"./ion-input-md.entry.js":[142,61],"./ion-item-option_3-ios.entry.js":[143,62],"./ion-item-option_3-md.entry.js":[144,63],"./ion-item_8-ios.entry.js":[145,64],"./ion-item_8-md.entry.js":[146,65],"./ion-loading-ios.entry.js":[147,26],"./ion-loading-md.entry.js":[148,27],"./ion-menu_4-ios.entry.js":[149,18],"./ion-menu_4-md.entry.js":[150,19],"./ion-modal-ios.entry.js":[151,14],"./ion-modal-md.entry.js":[152,15],"./ion-nav_5.entry.js":[153,13],"./ion-popover-ios.entry.js":[154,16],"./ion-popover-md.entry.js":[155,17],"./ion-progress-bar-ios.entry.js":[156,66],"./ion-progress-bar-md.entry.js":[157,67],"./ion-radio_2-ios.entry.js":[158,32],"./ion-radio_2-md.entry.js":[159,33],"./ion-range-ios.entry.js":[160,68],"./ion-range-md.entry.js":[161,69],"./ion-refresher_2-ios.entry.js":[162,41],"./ion-refresher_2-md.entry.js":[163,42],"./ion-reorder_2-ios.entry.js":[164,37],"./ion-reorder_2-md.entry.js":[165,38],"./ion-ripple-effect.entry.js":[166,85],"./ion-route_4.entry.js":[167,70],"./ion-searchbar-ios.entry.js":[168,28],"./ion-searchbar-md.entry.js":[169,29],"./ion-segment_2-ios.entry.js":[170,71],"./ion-segment_2-md.entry.js":[171,72],"./ion-select_3-ios.entry.js":[172,34],"./ion-select_3-md.entry.js":[173,35],"./ion-slide_2-ios.entry.js":[174,86],"./ion-slide_2-md.entry.js":[175,87],"./ion-spinner.entry.js":[176,73],"./ion-split-pane-ios.entry.js":[177,88],"./ion-split-pane-md.entry.js":[178,89],"./ion-tab-bar_2-ios.entry.js":[179,74],"./ion-tab-bar_2-md.entry.js":[180,75],"./ion-tab_2.entry.js":[181,36],"./ion-text.entry.js":[182,76],"./ion-textarea-ios.entry.js":[183,77],"./ion-textarea-md.entry.js":[184,78],"./ion-toast-ios.entry.js":[185,30],"./ion-toast-md.entry.js":[186,31],"./ion-toggle-ios.entry.js":[187,22],"./ion-toggle-md.entry.js":[188,23],"./ion-virtual-scroll.entry.js":[189,90]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=86,e.exports=r},87:function(e,t,a){var n={"./ion-icon.entry.js":[193,98]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=87,e.exports=r}},[[79,9,10]]]);
//# sourceMappingURL=main.320ec67d.chunk.js.map