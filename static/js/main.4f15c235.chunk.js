(this.webpackJsonpmaks=this.webpackJsonpmaks||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var o,r=n(1),c=n.n(r),i=(n(144),n(11),void 0);c.a.send("VKWebAppInit",{}),o=c.a.send("VKWebAppGetAds",{}),console.log("date:",o),c.a.send("VKWebAppGetAds").then((function(e){i.setState({promoBannerProps:e})})),(void 0).state.promoBannerProps&&(PromoBanner,(void 0).state.promoBannerProps),c.a.subscribe((function(e){return console.log(e)})),c.a.send("VKWebAppInit",{}),console.log(c.a.send("VKWebAppInit",{})),c.a.send("VKWebAppAllowMessagesFromGroup",{group_id:209170333,key:"dBuBKe1kFcdemzB"});var a=[{question:"\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u041a\u0443\u043f\u043b\u0438\u043d\u043e\u0432\u0430?",a:"1988 \u0433.",b:"1999 \u0433.",c:"1979 \u0433.",correct:"a"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432 \u0443 \u041a\u0443\u043f\u043b\u0438\u043d\u043e\u0432\u0430?",a:"1,8 \u043c\u043b\u043d",b:"3 \u043c\u043b\u043d",c:"9,9 \u043c\u043b\u043d",correct:"c"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0442\u0435\u0439 \u0443 \u041a\u0443\u043f\u043b\u0438\u043d\u043e\u0432\u0430?",a:"1",b:"0",c:"3",correct:"b"},{question:"\u0413\u0434\u0435 \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u041a\u0443\u043f\u043b\u0438\u043d\u043e\u0432?",a:"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430",b:"\u0433. \u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433",c:"\u0433. \u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",correct:"b"},{question:"\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435 \u0440\u0430\u0434\u0438\u043b\u0441\u044f \u041a\u0443\u043f\u043b\u0438\u043d\u043e\u0432?",a:"\u0420\u043e\u0441\u0441\u0438\u044f",b:"\u0421\u0421\u0421\u0420",c:"\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f",correct:"a"}],s=document.getElementById("quiz"),p=document.querySelectorAll(".answer"),d=document.getElementById("question"),u=document.getElementById("a_text"),l=document.getElementById("b_text"),m=document.getElementById("c_text"),g=document.getElementById("submit"),b=0,h=0;function A(){p.forEach((function(e){return e.checked=!1}));var e=a[b];d.innerText=e.question,u.innerText=e.a,l.innerText=e.b,m.innerText=e.c}A(),g.addEventListener("click",(function(){var e=function(){var e;return p.forEach((function(t){t.checked&&(e=t.id)})),e}();e&&(e===a[b].correct&&h++,++b<a.length?A():(h=h/a.length*100,s.innerHTML='<h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u0432\u044b \u0431\u044b\u043b\u0438 \u043f\u0440\u0430\u0432\u044b \u043d\u0430:</h2>\n            <p>'.concat(h,'%</p>\n            <h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u041a\u0443\u043f\u043e\u043d \u043d\u0430 \u0441\u043a\u0438\u0434\u043a\u0443:</h2>\n            <p align="center" style="color:#00CED1;width:300px;margin-left: auto;margin-right: auto;padding-top: 6px;padding-bottom: 6px;">Kuplinovv</p>\n            <h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u0417\u0430\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u043d\u0430 \u0441\u0430\u0439\u0442\u0435</h2>\n            <p align="center" style="color:#00CED1; border: 4px solid #00CED1;border-radius: 15px;width:300px;margin-left: auto;margin-right: auto;padding-top: 6px;padding-bottom: 6px;"><a href="https://satisfied-tern.contact-me.info/">\u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u041d\u0410 \u0421\u0410\u0419\u0422</a></p>\n            <br>\n\n            ')))}))}},[[12,1,2]]]);
//# sourceMappingURL=main.4f15c235.chunk.js.map