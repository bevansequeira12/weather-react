(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[5],{120:function(e,t,a){"use strict";var n=a(41),r=a.n(n);t.a=function(e){if(e){var t=e.split(".")[0],a=r()().format("H"),n=a>=6&&a<18?"day":"night-alt";switch(t){case"Blizzard":return"snow-wind";case"Clear":return"night-clear";case"CloudRainThunder":return"".concat(n,"-storm-showers");case"CloudSleetSnowThunder":return"".concat(n,"-snow-thunderstorm");case"Cloudy":return"cloudy";case"Fog":return"day"===n?"day-fog":"night-fog";case"FreezingDrizzle":return"".concat(n,"-sleet");case"FreezingFog":return"".concat(n,"-cloudy-windy");case"FreezingRain":return"".concat(n,"-rain-mix");case"HeavyRain":return"".concat(n,"-rain");case"HeavyRainSwrsDay":return"day-rain";case"HeavyRainSwrsNight":return"night-alt-rain";case"HeavySleet":return"snow-wind";case"HeavySleetSwrsDay":return"day-snow-wind";case"HeavySleetSwrsNight":return"night-alt-snow-wind";case"HeavySnow":return"snow";case"HeavySnowSwrsDay":return"day-snow-thunderstorm";case"HeavySnowSwrsNight":return"night-alt-snow-thunderstorm";case"IsoRainSwrsDay":return"day-showers";case"IsoRainSwrsNight":return"night-alt-showers";case"IsoSleetSwrsDay":return"day-sleet";case"IsoSleetSwrsNight":return"night-alt-sleet";case"IsoSnowSwrsDay":return"day-snow";case"IsoSnowSwrsNight":return"night-alt-snow";case"Mist":return"".concat(n,"-rain-mix");case"ModRain":return"sprinkle";case"ModRainSwrsDay":return"day-sprinkle";case"ModRainSwrsNight":return"night-alt-sprinkle";case"ModSleet":return"sleet";case"ModSleetSwrsDay":return"day-sleet";case"ModSleetSwrsNight":return"night-alt-sleet";case"ModSnow":return"snow";case"ModSnowSwrsDay":return"day-snow";case"ModSnowSwrsNight":return"night-alt-snow";case"OccLightRain":return"".concat(n,"-showers");case"OccLightSleet":return"".concat(n,"-sleet");case"OccLightSnow":return"".concat(n,"-snow");case"Overcast":return"day"===n?"day-sunny-overcast":"night-alt-cloudy";case"PartCloudRainThunderDay":return"day-thunderstorm";case"PartCloudRainThunderNight":return"night-alt-thunderstorm";case"PartCloudSleetSnowThunderDay":return"day-snow-thunderstorm";case"PartCloudSleetSnowThunderNight":return"night-alt-snow-thunderstorm";case"PartlyCloudyDay":return"day-cloudy";case"PartlyCloudyNight":return"night-alt-cloudy";case"Sunny":return"day-sunny";default:return"na"}}return"na"}},123:function(e,t,a){"use strict";t.a=function(e){return{width:"100%",slidesToShow:"time"===e?3:1,slidesToScroll:"time"===e?3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?.95:1,speed:1e3,easing:"easeCircleOut",edgeEasing:"easeCircleOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#A1A6B4",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},124:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(119),r=a(118),c=function(e){return(!Object(n.a)(e)||!Object(r.a)(e))&&e.photos.length>0},s=function(e){var t=(c(e)?e.photos[0]:{mobile:"",web:""}).image,a=c(e)?e.photos[0].attribution:{photographer:"",site:"",source:""};return{image:t,photographer:a.photographer,site:a.site,source:a.source}}},128:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(33),s=a(19),l=a.n(s),o=a(119),i=a(118),u=function(e,t){return"https://api.weatherunlocked.com/api/".concat(e,"/").concat(t,"?app_id=").concat("8779180b","&app_key=").concat("3f64def7d3415e36fdf24fac184babe7")};t.a=function(e){var t,a,n,s,m,d,f;return r.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:if(t=e.latlong,a={},n={},Object(o.a)(t)||Object(i.a)(t)){h.next=20;break}return h.prev=4,s=u("forecast",t),h.next=8,r.a.awrap(l.a.get(s).then((function(e){return e.data})));case 8:return m=h.sent,d=u("current",t),h.next=12,r.a.awrap(l.a.get(d).then((function(e){return e.data})));case 12:f=h.sent,n=Object(c.a)({},m),a=Object(c.a)({},f),h.next=20;break;case 17:h.prev=17,h.t0=h.catch(4),console.log(h.t0);case 20:return h.abrupt("return",{weatherCurrent:a,weatherForecast:n});case 21:case"end":return h.stop()}}),null,null,[[4,17]])}},129:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(23),s=a(19),l=a.n(s),o=a(119),i=a(118);t.a=function(e){var t,a,n,s,u,m,d,f;return r.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:if(t=e.split(","),a=Object(c.a)(t,2),n=a[0],s=a[1],u="",Object(o.a)(e)||Object(i.a)(e)){h.next=15;break}return h.prev=3,m="https://api.timezonedb.com/v2.1/get-time-zone?key=".concat("GNB0ZOUNM9BR","&format=json&by=position&lat=").concat(n,"&lng=").concat(s),h.next=7,r.a.awrap(l.a.get(m));case 7:d=h.sent,f=d.data,Object(o.a)(f)||Object(i.a)(f)||(u=f.formatted),h.next=15;break;case 12:h.prev=12,h.t0=h.catch(3),u="".concat(h.t0.message," forecast data. Please try again!");case 15:return h.abrupt("return",u);case 16:case"end":return h.stop()}}),null,null,[[3,12]])}},131:function(e,t,a){"use strict";var n=a(45),r=a(7),c=a.n(r),s=a(23),l=a(0),o=a.n(l),i=a(41),u=a.n(i),m=a(152),d=a(118),f=a(130),h=function(e){return"0"===e?"0:00":"1000"===e?"10:00":e.includes(":")?e:"".concat(e.split("0")[0],":00")},b=a(42),p=a(5),g=a(120),w=function(e){var t=e.day,a=e.icon,n=e.iconDesc,r=e.index,c=e.selectedIndex,s=Object(l.useContext)(b.a).weatherUnit,i=Object(l.useContext)(p.a),m=i.theme,d=i.colorTheme,f=function(e){return Math.round(t["temp_".concat(e,"_").concat(s.toLowerCase())])};return o.a.createElement("div",{className:"sm:border-t sm:border-r sm:border-b-0 sm:border-l-0 sm:border-".concat(d," sm:hover:bg-").concat(d," sm:hover:text-").concat(m," items-center text-center flex-1 py-1 pb-3 cursor-pointer ").concat(r===c?"sm:bg-".concat(d," sm:text-").concat(m):""," transition-colors duration-1000 ease-in-out"),onClick:function(){e.selectedDay({day:t,index:r})}},o.a.createElement("p",{className:"font-medium"},u()(t.date.split("/").reverse().join(", ")).format("ddd")),o.a.createElement("i",{title:n,className:"mx-auto text-xl wi wi-".concat(Object(g.a)(a))}),o.a.createElement("div",{className:"flex flex-row justify-center items-center font-light"},o.a.createElement("p",{className:"mx-2 text-sm"},f("max"),o.a.createElement("sup",null,"o")),o.a.createElement("p",{className:"mx-2 text-xs"},f("min"),o.a.createElement("sup",null,"o"))),o.a.createElement("div",{className:"flex flex-row justify-center sm:flex-col font-light mt-1"},o.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2"},o.a.createElement("i",{className:"text-sm wi wi-sunrise text-sun",title:"sunrise"}),o.a.createElement("p",{className:"text-sm ml-2"},h("".concat(t.sunrise_time)))),o.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2"},o.a.createElement("i",{className:"text-sm wi wi-sunset text-sun",title:"sunset"}),o.a.createElement("p",{className:"text-sm ml-2"},h("".concat(t.sunset_time))))))},x=function(e){var t=e.Timeframe,a=Object(l.useContext)(b.a).weatherUnit,n=Object(l.useContext)(p.a).theme,r=function(e){return Math.round(t["".concat(e,"_").concat(a.toLowerCase())])};return o.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light text-".concat("light"===n?"dark":"light")},o.a.createElement("i",{title:t.wx_desc,className:"wi wi-".concat(Object(g.a)(t.wx_icon)," text-xl")}),o.a.createElement("p",{className:"text-xl"},r("temp"),o.a.createElement("sup",null,"o")),o.a.createElement("p",{className:"text-sm italic"},r("feelslike"),o.a.createElement("sup",null,"o")),o.a.createElement("p",{className:"text-sm font-medium"},h("".concat(t.time))))},y=a(24),v=a(153),E=a(150),N=function(e,t){return Object(d.a)(e)?[]:e.Days.map((function(e){return Object(v.a)(e.Timeframes,t)})).map((function(e){return Object(E.a)(e,(function(e){return e.length}))})).map((function(e){return Object.keys(e).sort((function(t,a){return e[a]-e[t]}))[0]}))},j=a(123),O=a(27),S=a(44);t.a=function(e){var t=e.cityName,a=e.weatherForecast,r=e.formattedDateTime,i=Object(l.useState)(""),h=Object(s.a)(i,2),b=h[0],p=h[1],g=Object(l.useState)(-1),v=Object(s.a)(g,2),E=v[0],D=v[1],C=Object(l.useState)({}),k=Object(s.a)(C,2),F=k[0],T=k[1],M=function(e){D(e)};return Object(l.useEffect)((function(){!function(){var e,t;c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:r&&!r.includes("Failed")?(e=u()(r).format("DD/MM/YYYY"),t=Object(m.a)(a.Days,["date",e]),D(t<0?0:t)):p(r);case 1:case"end":return n.stop()}}))}(),function(){var e=N(a,"wx_icon"),t=N(a,"wx_desc");T({icons:Object(n.a)(e),iconDesc:Object(n.a)(t)})}()}),[r]),o.a.createElement(S.a,null,o.a.createElement(l.Fragment,null,Object(d.a)(a.Days)||-1===E?o.a.createElement("div",{className:"mb-3"},Object(d.a)(a.Days)||b?o.a.createElement(O.a,{errorMessage:Object(d.a)(a.Days)?"No forecast data available for this city!":b,showCloseBtn:!1}):o.a.createElement(y.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"sm:hidden py-3"},o.a.createElement(f.a,Object(j.a)("time"),a.Days[E]?a.Days[E].Timeframes.map((function(e,t){return o.a.createElement(x,{Timeframe:e,key:t})})):null)),o.a.createElement("div",{className:"hidden sm:flex py-3"},a.Days[E]?a.Days[E].Timeframes.map((function(e,t){return o.a.createElement(x,{Timeframe:e,key:t})})):null),o.a.createElement("div",{className:"sm:hidden py-3"},o.a.createElement(f.a,Object.assign({},Object(j.a)("day"),{slideIndex:E,afterSlide:function(e){return M(e)}}),a.Days?a.Days.map((function(e,t){return o.a.createElement(w,{day:e,key:t,index:t,icon:F.icons[t],iconDesc:F.iconDesc[t],selectedIndex:E,selectedDay:function(){return M(t)}})})):null)),o.a.createElement("div",{className:"hidden sm:flex w-full rounded sm:visible"},a.Days?a.Days.map((function(e,t){return o.a.createElement(w,{day:e,key:t,index:t,icon:F.icons[t],iconDesc:F.iconDesc[t],selectedIndex:E,selectedDay:function(){return M(t)}})})):null))))}},132:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(45),s=a(23),l=a(25),o=a(41),i=a.n(o),u=a(5),m=a(124),d=a(151),f=function(e){var t=e.address,a=e.latlong,o=e.urbanArea,f=e.formattedDateTime,h=Object(n.useContext)(l.a).updateFavorites,b=Object(n.useState)(""),p=Object(s.a)(b,2),g=p[0],w=p[1],x=Object(n.useState)(""),y=Object(s.a)(x,2),v=y[0],E=y[1],N=Object(n.useContext)(u.a).colorTheme,j=Object(m.a)(o),O=j.image,S=j.photographer,D=j.site,C=j.source,k=Object(n.useRef)(),F=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},T=f&&!f.includes("Failed"),M=function(e){w(e?e.format("MMMM DD, YYYY"):""),E(e?e.format("dddd h:mm A"):""),k.current=e||null};return Object(n.useEffect)((function(){M(""),T&&M(i()(f));var e=setInterval((function(){if(T){var e=i()(k.current).add(1,"second");M(e)}}),1e3);return function(){clearInterval(e)}}),[f]),r.a.createElement("div",{className:"relative"},r.a.createElement("div",null,Object(m.b)(o)?r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:O.mobile,alt:"city",className:"block sm:hidden h-40 w-full object-cover object-center rounded-t-2xl"}),r.a.createElement("img",{src:O.web,alt:"city",className:"hidden sm:block sm:h-32 md:h-24 xl:h-32 w-full object-cover object-center rounded-t-2xl"})):null),r.a.createElement("div",{className:"".concat(Object(m.b)(o)?"absolute top-0 left-0 right-0 bottom-0 text-light":"text-".concat(N)),style:Object(m.b)(o)?{background:"rgba(0,0,0,0.55)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"}:null},r.a.createElement("div",{className:"flex justify-between items-start"},r.a.createElement("div",{className:"pt-4 px-4"},r.a.createElement("p",{className:"font-bold ".concat(Object(m.b)(o)?"text-2xl":"")},t.cityName),r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row ".concat(Object(m.b)(o)?"font-medium":"font-light")},g&&v?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,g,r.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),r.a.createElement("p",null,v)):null)),r.a.createElement("div",{className:"mt-4 mr-4 cursor-pointer",title:F()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=Object(d.a)([].concat(Object(c.a)(e),[{address:t,latlong:a,urbanArea:o}]),["address.cityName"]),r=e.filter((function(e){return e.address.cityName===t.cityName}));if(r.length){var s=e.findIndex((function(e){return e.address.cityName===r[0].address.cityName}));if(-1!==s){var l=Object(d.a)(Object(c.a)(e),["address.cityName"]);l.splice(s,1),localStorage.setItem("favorites",JSON.stringify(l)),h({favorites:l})}}else localStorage.setItem("favorites",JSON.stringify(n)),h({favorites:n})}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a,urbanArea:o}])),h({favorites:[{address:t,latlong:a,urbanArea:o}]})}},F()?r.a.createElement("span",null,"\u2605"):r.a.createElement("span",null,"\u2606"))),r.a.createElement("div",{className:"hidden md:block text-right bottom-0 right-0 xl:mt-8 px-2"},S&&D?r.a.createElement("p",{className:"font-light tracking-wider",style:{fontSize:"0.5rem"}},"Photo by\xa0",r.a.createElement("span",{className:"italic font-normal"},S),"\xa0on\xa0",r.a.createElement("a",{className:"italic font-normal hover:no-underline hover:font-medium hover:text-light",href:C,target:"_blank",rel:"noreferrer noopener"},D)):null)))},h=a(42),b=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},p=a(120),g=function(e){var t=e.weatherCurrent,a=Object(n.useContext)(h.a),c=a.weatherUnit,s=a.updateWeatherUnit,l=function(e){s(e)},o=function(e){return Math.round(t["".concat(e,"_").concat(c.toLowerCase())])};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between mt-5 mb-5 px-4"},r.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},r.a.createElement("div",{className:"flex flex-row items-center"},r.a.createElement("div",null,r.a.createElement("i",{className:"wi wi-".concat(Object(p.a)(t.wx_icon)," text-4xl mt-3 mr-2"),title:t.wx_desc})),r.a.createElement("div",{className:"flex justify-start items-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-5xl font-bold"},o("temp"))),r.a.createElement("div",{className:"text-2xl -mt-6"},r.a.createElement("i",{className:"wi wi-fahrenheit cursor-pointer mx-2 ".concat("F"===c?"font-bold underline":""),onClick:function(){return l("F")}}),"|",r.a.createElement("i",{className:"wi wi-celsius cursor-pointer mx-2 ".concat("C"===c?"font-bold underline":""),onClick:function(){return l("C")}})))),r.a.createElement("p",{className:"sm:ml-3 capitalize"},t.wx_desc)),r.a.createElement("div",{className:"sm:w-full lg:w-1/2"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Humidity:"),"\xa0",t.humid_pct,"%"),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0","F"===c?"".concat(Math.round(t.windspd_mph)," mph"):"".concat(Math.round(t.windspd_kmh)," kmph")," "),r.a.createElement("p",null,r.a.createElement("i",{className:"mx-2 mt-2 text-3xl wi wi-direction-".concat(b(t.winddir_deg))}))),r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Feels like:"),"\xa0",o("feelslike"),r.a.createElement("sup",null,"o")))))},w=a(24),x=a(44);t.a=function(e){var t=e.weatherCurrent,a=e.address,c=e.latlong,s=e.urbanArea,l=e.formattedDateTime;return r.a.createElement(x.a,null,r.a.createElement(n.Fragment,null,a&&t?r.a.createElement("div",null,r.a.createElement(f,{address:a,latlong:c,urbanArea:s,formattedDateTime:l}),r.a.createElement(g,{weatherCurrent:t})):r.a.createElement(w.a,null)))}},149:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(23),s=a(0),l=a.n(s),o=a(131),i=a(132),u=a(25),m=a(128),d=a(129),f=a(5),h=a(119),b=a(118),p=a(24);t.default=function(){var e=Object(s.useContext)(u.a),t=Object(s.useContext)(f.a),a=t.theme,n=t.colorTheme,g=Object(s.useState)({}),w=Object(c.a)(g,2),x=w[0],y=w[1],v=Object(s.useState)({}),E=Object(c.a)(v,2),N=E[0],j=E[1],O=Object(s.useState)(""),S=Object(c.a)(O,2),D=S[0],C=S[1],k=Object(s.useState)(!1),F=Object(c.a)(k,2),T=F[0],M=F[1],I=Object(s.useRef)(""),_=function(){var t,a,n,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return M(!0),s.next=3,r.a.awrap(Object(m.a)(e));case 3:return t=s.sent,a=t.weatherCurrent,n=t.weatherForecast,j(a),y(n),s.next=10,r.a.awrap(Object(d.a)(e.latlong));case 10:c=s.sent,C(c),M(!1);case 13:case"end":return s.stop()}}))};return Object(s.useEffect)((function(){var t=setInterval((function(){_()}),36e5);return I.current!==e.latlong&&_(),I.current=e.latlong,function(){clearInterval(t)}}),[e]),l.a.createElement(s.Fragment,null,Object(h.a)(N)||Object(b.a)(N)?l.a.createElement(s.Fragment,null,T?l.a.createElement(p.a,{loaderText:"Fetching weather forecast ".concat(Object(b.a)(e.address.cityName)?null:"for ".concat(e.address.cityName))}):null):l.a.createElement(s.Fragment,null,l.a.createElement("div",{className:"flex justify-center px-5 py-10 bg-".concat(a)},l.a.createElement("div",{className:"sm:w-full md:w-5/6 xl:w-1/2 border border-".concat(n," bg-").concat(a," text-").concat(n," rounded-t-2xl shadow-lg")},l.a.createElement(i.a,{weatherCurrent:N,address:e.address,latlong:e.latlong,urbanArea:e.urbanArea,formattedDateTime:D}),l.a.createElement(o.a,{cityName:e.address.cityName,weatherForecast:x,formattedDateTime:D}))),l.a.createElement("div",{className:"bg-".concat(a)},e.urbanArea.slug?l.a.createElement("div",{className:"mx-auto text-center pb-5"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://teleport.org/cities/".concat(e.urbanArea.slug),target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline"},l.a.createElement("button",{className:"bg-".concat(n," text-").concat(a," font-bold py-3 px-6 rounded-full capitalize")},"Explore life in ",e.urbanArea.name))),l.a.createElement("p",{className:"py-1 text-xs italic font-light text-".concat(n)},"Powered by\xa0",l.a.createElement("a",{href:"https://teleport.org/",target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline hover:font-medium hover:text-".concat(n)},"Teleport"))):null)))}}}]);
//# sourceMappingURL=5.799af1e9.chunk.js.map