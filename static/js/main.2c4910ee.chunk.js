(this["webpackJsonpslider-new"]=this["webpackJsonpslider-new"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var n,s,a,c,r,l=i(1),o=i.n(l),u=i(7),d=i.n(u),h=(i(13),i(14),i(15),i(16),i(3)),p=i(8),j=i(2),b=i(4),f=function(e){return Object(j.b)("div",{css:Object(j.a)(n||(n=Object(b.a)(["\n      transform: translateX(-","px);\n      transition: transform ease-out ","s;\n      height: 100%;\n      width: ","px;\n      display: flex;\n    "])),e.translate,e.transition,e.width)},e.children)},g=(i(20),function(e){var t=e.content;return Object(j.b)("div",{className:"slide",css:Object(j.a)(s||(s=Object(b.a)(['background-image: url("','");'])),t)})}),m=i.p+"static/media/left-arrow.bb288448.svg",O=i.p+"static/media/right-arrow.1884d75a.svg",_=function(e){var t=e.direction,i=e.handleClick;return Object(j.b)("div",{onClick:i,css:Object(j.a)(a||(a=Object(b.a)(["\n        display: flex;\n        position: absolute;\n        top: 45%;\n        ",";\n        height: 20px;\n        width: 20px;\n        justify-content: center;\n        background: white;\n        border-radius: 50%;\n        cursor: pointer;\n        align-items: center;\n        transition: transform ease-in 0.55s;\n        opacity: 60%;\n        transition: .55s opacity;\n        // border: solid red 3px;\n\n        &:hover {\n          opacity: 90%;\n          transform: scale(1.1);\n        }\n  \n        img {\n          width: 15px;\n          height: 15px;\n          transform: translateX(","px);\n  \n          &:focus {\n            outline: 0;\n          }\n        }\n\n        @media (max-width: 850px) {\n          top: 45%;\n          ",";\n          height: 30px;\n          width: 30px;\n          // border: solid blue 3px;          \n        // }\n\n        img {\n          width: 20px;\n          height: 20px;\n\n          transform: translateX(","px);\n  \n          // &:focus {\n          //   outline: 0;\n          // }\n        }\n      }\n      "])),"right"===t?"right: 15px":"left: 15px","left"===t?"-1":"1","right"===t?"right: 25px":"left: 25px","left"===t?"-2":"2")},"right"===t?Object(j.b)("img",{src:O,alt:""}):Object(j.b)("img",{src:m,alt:""}))},v=Object(l.memo)(_),x=function(e){var t=e.active;return Object(j.b)("span",{css:Object(j.a)(c||(c=Object(b.a)(["\n        // padding: 3px;\n        padding: ",";\n        margin-right: 5px;\n        cursor: pointer;\n        border-radius: 50%;\n        background: ",";\n        opacity: ",";\n      "])),t?"4px":"3px",t?"white":"rgb(192, 192, 192)",t?"90%":"50%")})},y=Object(l.memo)(x),w=function(e){var t=e.slides,i=e.activeSlide;return Object(j.b)("div",{css:Object(j.a)(r||(r=Object(b.a)(["\n        position: absolute;\n        bottom: 15px;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      "])))},t.map((function(e,t){return Object(j.b)(y,{key:e,active:i===t})})))},N=(i(21),function(){return window.innerWidth>850?262:400}),R=function(e){var t=e.slides,i=t[0],n=t[1],s=t[t.length-1],a=Object(l.useState)({activeSlide:0,translate:N(),transition:.45,transitioning:!1,_slides:[s,i,n]}),c=Object(p.a)(a,2),r=c[0],o=c[1],u=r.activeSlide,d=r.translate,b=r._slides,m=r.transition,O=r.transitioning,_=Object(l.useRef)(),x=Object(l.useRef)(),y=Object(l.useRef)();Object(l.useEffect)((function(){_.current=k,x.current=z,y.current=R})),Object(l.useEffect)((function(){var e=window.addEventListener("transitionend",(function(e){e.target.className.includes("SliderContent")&&x.current()})),t=window.addEventListener("resize",(function(){y.current()}));return function(){window.removeEventListener("transitionend",e),window.removeEventListener("resize",t)}}),[]),Object(l.useEffect)((function(){var t=null;return e.autoPlay&&(t=setInterval((function(){_.current()}),1e3*e.autoPlay)),function(){e.autoPlay&&clearInterval(t)}}),[e.autoPlay]),Object(l.useEffect)((function(){0===m&&o(Object(h.a)(Object(h.a)({},r),{},{transition:.45,transitioning:!1}))}),[m,r]);var R=function(){o(Object(h.a)(Object(h.a)({},r),{},{translate:N(),transition:0}))},k=function(){O||o(Object(h.a)(Object(h.a)({},r),{},{translate:d+N(),activeSlide:u===t.length-1?0:u+1}))},z=function(){var e=[];e=u===t.length-1?[t[t.length-2],s,i]:0===u?[s,i,n]:t.slice(u-1,u+2),o(Object(h.a)(Object(h.a)({},r),{},{_slides:e,transition:0,translate:N()}))};return Object(j.b)("div",{className:"slider"},Object(j.b)(f,{translate:d,transition:m,width:N()*b.length},b.map((function(e,t){return Object(j.b)(g,{key:e+t,content:e})}))),Object(j.b)("div",{className:"showme"},Object(j.b)(v,{direction:"left",handleClick:function(){O||o(Object(h.a)(Object(h.a)({},r),{},{translate:0,activeSlide:0===u?t.length-1:u-1}))}}),Object(j.b)(v,{direction:"right",handleClick:k}),Object(j.b)(w,{slides:e.slides,activeSlide:u})))},k=i(0);var z=function(e){var t=e.images,i=e.location,n=e.category,s=e.title,a=e.facility01,c=e.facility02,r=e.facility03,l=e.facility04,o=e.roomtype,u=e.pansion,d=e.price,h=e.checkIn,p=e.guests;return Object(k.jsxs)("div",{className:"searchResult",children:[null===t?"":Object(k.jsx)(R,{slides:t}),Object(k.jsxs)("div",{className:"searchResult__info",children:[Object(k.jsxs)("div",{className:"searchResult__infoTop",children:[Object(k.jsx)("p",{className:"searchResult__infoTop_p",children:i}),Object(k.jsxs)("div",{className:"searchResult__infoTop_div1",children:[Object(k.jsx)("h3",{children:s}),Object(k.jsx)("span",{children:n})]}),Object(k.jsxs)("div",{className:"searchResult__infoTop_div2",children:[Object(k.jsx)("span",{className:"searchResult__infoTop_span",children:"\u2714"}),Object(k.jsxs)("p",{className:"searchResult__infoTop_p",children:[a,"\xa0\xa0"]}),Object(k.jsx)("span",{className:"searchResult__infoTop_span",children:"\u2714"})," ",Object(k.jsxs)("p",{className:"searchResult__infoTop_p",children:[c,"\xa0\xa0"]}),Object(k.jsx)("span",{className:"searchResult__infoTop_span",children:"\u2714"})," ",Object(k.jsxs)("p",{className:"searchResult__infoTop_p",children:[r,"\xa0\xa0"]}),Object(k.jsx)("span",{className:"searchResult__infoTop_span",children:"\u2714"})," ",Object(k.jsx)("p",{className:"searchResult__infoTop_p",children:l})]})]}),Object(k.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(k.jsxs)("div",{className:"searchResult__infoBottomLeft",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Pansion: "}),Object(k.jsx)("p",{children:u})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Room Type: "}),Object(k.jsx)("p",{children:o})]})]}),Object(k.jsxs)("div",{className:"searchResult__infoBottomRight",children:[Object(k.jsxs)("p",{children:[d," \u20ac"]}),Object(k.jsx)("p",{children:h}),Object(k.jsxs)("p",{children:["for ",p]}),Object(k.jsx)("button",{children:" View Deal"})]})]})]})]})},T=["https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188235.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188255.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188236.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188233.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188254.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105748.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33621.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188253.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188241.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188251.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188234.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188222.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188240.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188248.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188246.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33627.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105745.jpeg?preset=b","https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33633.jpeg?preset=b"];var S=function(){return Object(k.jsx)("div",{className:"searchPage",children:Object(k.jsxs)("div",{children:[Object(k.jsx)(z,{images:T,location:"Fourka, Chalkidiki-Kassandra, Greece",category:"Apartments",title:"Ioli Apartments Fourka Beach",facility01:"Kitchen",facility02:"WiFi",facility03:"Billiards",facility04:"Parking",roomtype:"Apartment Room Standard",pansion:"Not Included",price:"330",checkIn:"05 Sep 21 for 7 nights",guests:"2 adults and 1 child"}),Object(k.jsx)(z,{images:null,location:"Fourka, Chalkidiki-Kassandra, Greece",category:"\u2605\u2605\u2605",title:"Bomo Julia Hotel",facility01:"Parking",facility02:"WiFi",facility03:"Swimming Pool",facility04:"Table Tennis",roomtype:"Apartment Room Standard",pansion:"Not Included",price:"404",checkIn:"05 Sep 21 for 7 nights",guests:"2 adults and 1 child"})]})})};var P=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(S,{})})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};d.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root")),C()}],[[23,1,2]]]);
//# sourceMappingURL=main.2c4910ee.chunk.js.map