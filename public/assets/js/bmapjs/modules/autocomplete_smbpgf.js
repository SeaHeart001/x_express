/**/_jsload2&&_jsload2('autocomplete', 'z.lang.Ga.prototype.Rh=ia(0,function(){delete window[z.ea]._instances[this.ea];for(var a in this)z.lang.Gs(this[a])||delete this[a]});z.R.getComputedStyle=function(a,b){var a=z.R.Dj(a),c=z.R.PC(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,s))?c[b]||c.getPropertyValue(b):""};z.R.remove=function(a){var a=z.R.Dj(a),b=a.parentNode;b&&b.removeChild(a)};z.lang.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)}; z.event=z.event||{};z.event.stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=p};z.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=t};z.event.stop=function(a){var b=z.event;b.stopPropagation(a);b.preventDefault(a)};z.lc.indexOf=function(a,b,c){var e=a.length,c=c|0;for(0>c&&(c=Math.max(0,e+c));c<e;c++)if(c in a&&a[c]===b)return c;return-1};z.lc.contains=function(a,b){return 0<=z.lc.indexOf(a,b)};z.Pb=z.Pb||{version:"1.3.9"}; z.Pb.fX=function(a){for(var a=a.split("-"),b=z.Pb,c=a.length,e=0;e<c;e++)b=b[a[e].charAt(0).toUpperCase()+a[e].slice(1)];return b};z.Pb.create=function(a,b){z.lang.og(a)&&(a=z.Pb.fX(a));return new a(b)};z.event.$z=z.event.$z||[]; z.event.V=function(a,b,c){function e(b){c.call(a,b)}var b=b.replace(/^on/i,""),a=z.R.Dj(a),f=z.event.$z,g=z.event.I0,i=b,b=b.toLowerCase();g&&g[b]&&(g=g[b](a,b,e),i=g.type,e=g.D3);a&&a.addEventListener?a.addEventListener(i,e,t):a&&a.attachEvent&&a.attachEvent("on"+i,e);f[f.length]=[a,b,c,e,i];return a};z.V=z.event.V; z.event.dd=function(a,b,c){for(var a=z.R.Dj(a),b=b.replace(/^on/i,"").toLowerCase(),e=z.event.$z,f=e.length,g=!c,i,k;f--;)if(i=e[f],i[1]===b&&i[0]===a&&(g||i[2]===c))k=i[4],i=i[3],a.removeEventListener?a.removeEventListener(k,i,t):a.detachEvent&&a.detachEvent("on"+k,i),e.splice(f,1);return a};z.dd=z.event.dd; z.Pb.qF={id:"",Xb:function(a){var b;b="tangram-"+this.Lt+"--"+(this.id?this.id:this.ea);return a?b+"-"+a:b},es:function(a){var b=this.kJ,c=this.YZ;a&&(b+="-"+a,c+="-"+a);this.YZ&&(b+=" "+c);return b},Wh:function(){return z.da(this.PL)},kW:function(){return z.da(this.Xb())},Lt:"",Bo:function(){return"window[\'$BAIDU$\']._instances[\'"+this.ea+"\']"},r2:function(a){for(var b=0,c=Array.prototype.slice.call(arguments,1),e=c.length;b<e;b++)"string"==typeof c[b]&&(c[b]="\'"+c[b]+"\'");return this.Bo()+"."+a+ "("+c.join(",")+");"},V:function(a,b,c){z.V(a,b,c);this.addEventListener("ondispose",function(){z.dd(a,b,c)})},dZ:function(a){if(!this.Wh())return a=z.da(a),a||(a=document.createElement("div"),document.body.appendChild(a),a.style.position="absolute",a.className=this.es("main")),a.id||(a.id=this.Xb("main")),this.PL=a.id,a.setAttribute("data-guid",this.ea),a},Rh:function(){this.dispatchEvent("dispose");z.lang.Ga.prototype.Rh.call(this)}}; z.Pb.$U=function(a){function b(){}function c(b,e){var o=this,b=b||{};f.call(o,!g?b:b.ea||"",p);z.object.extend(o,c.options);z.object.extend(o,b);o.kJ=o.kJ||"tangram-"+o.Lt.toLowerCase();for(i in z.Pb.Kl)"undefined"!=typeof o[i]&&o[i]&&(z.object.extend(o,z.Pb.Kl[i]),z.lang.Gs(o[i])?o.addEventListener("onload",function(){z.Pb.Kl[i].call(o[i].apply(o))}):z.Pb.Kl[i].call(o));a.apply(o,arguments);i=0;for(k=c.By.length;i<k;i++)c.By[i](o);b.parent&&o.LZ&&o.LZ(b.parent);!e&&b.s1&&o.za(b.element)}var e;e= e||{};var f=e.g_||z.lang.Ga,g=f==z.lang.Ga?1:0,i,k;b.prototype=f.prototype;e=c.prototype=new b;for(i in z.Pb.qF)e[i]=z.Pb.qF[i];c.extend=function(a){for(i in a)c.prototype[i]=a[i];return c};c.By=[];c.We=function(a){"function"==typeof a&&c.By.push(a)};c.options={};return c};z.R.JC=function(a,b){a=z.R.da(a);if(a===s)return a;if("style"==b)return a.style.cssText;b=z.R.NF[b]||b;return a.getAttribute(b)};z.JC=z.R.JC; z.Pb.get=function(a){var b;if(z.lang.og(a))return z.lang.Mc(a);do{if(!a||9==a.nodeType)return s;if(b=z.R.JC(a,"data-guid"))return z.lang.Mc(b)}while((a=a.parentNode)!=document.body)}; z.Pb.ui=z.Pb.$U(function(){var a=this;a.addEventListener("onload",function(){eventName=I()?"touchstart":"mousedown";a.V(document,eventName,a.qV);a.V(window,"blur",a.V_)});a.qV=a.VQ();a.V_=a.tR();a.fk=[];a.Yc=-1}).extend({Lt:"suggestion",V3:new Function,Z3:new Function,W3:new Function,Y3:new Function,b4:new Function,X3:new Function,getData:function(){return[]},r4:"",q1:"",Tl:{},A_:"<div id=\'#{0}\' class=\'#{1}\' style=\'position:relative; top:0px; left:0px\'></div>",c5:"<div id=\'#{0}\' class=\'#{1}\'>#{2}</div>", z_:\'<div style="height:22px;line-height:22px;overflow:hidden;zoom:1;border-top:#E7E7E7 solid 1px;background:#F7F7F7;"><span style="float:right;color:#4B4B4B;border-left:1px solid #E7E7E7;padding:0 10px;font-size:14px;" onmousedown="#{0}">\\u5173\\u95ed</span></div>\',y_:\'<table cellspacing="0" cellpadding="2"><tbody>#{0}</tbody></table>\',B_:\'<tr><td id="#{0}" onmouseover="#{2}" onmouseout="#{3}" onmousedown="#{4}" onclick="#{5}" class="#{6}"><i class="route-icon">#{1}</i></td></tr>\',YW:function(){return z.yo(this.A_, this.Xb(),this.es(),this.ea)},za:function(a,b){var c,a=z.da(a);this.oB=b;!this.Wh()&&a&&(this.i_=a.id?a.id:a.id=this.Xb("input"),c=this.dZ(),c.style.display="none",c.innerHTML=this.YW(),this.dispatchEvent("onload"))},Uz:function(){var a=this.Wh();return a&&"none"!=a.style.display},nj:function(a){var b=this.Tl,a={data:{item:(b&&"number"==typeof a&&"undefined"!=typeof b[a]?b[a].value:a)==a?{value:a,content:a}:b[a],index:a}};this.dispatchEvent("onbeforepick",a)&&this.dispatchEvent("onpick",a)},show:function(a, b,c){var a=0,e=b.length;this.fk=[];this.Yc=-1;if(0==e&&!c)this.aa();else{for(this.Tl=[];a<e;a++)"undefined"!=typeof b[a].value?this.Tl.push(b[a]):this.Tl.push({value:b[a],content:b[a]}),("undefined"==typeof b[a].disable||b[a].disable==t)&&this.fk.push(a);this.kW().innerHTML=this.QQ();this.Wh().style.display="block";this.dispatchEvent("onshow")}},aa:function(){if(this.Uz()){if(0<=this.Yc&&this.qX)for(var a=this.Tl,b=-1,c=0,e=a.length;c<e;c++)if("undefined"==typeof a[c].disable||a[c].disable==t)b++, b==this.Yc&&this.nj(c);this.Wh().style.display="none";this.dispatchEvent("onhide")}},xs:function(a){var b=this.fk,c=s;this.Aq(a)&&(0<=this.Yc&&this.iG(),c=this.NG(a),z.eb(c,this.es("current")),this.Yc=z.lc.indexOf(b,a),this.dispatchEvent("onhighlight",{index:a,data:this.Xl(a)}))},xB:function(){var a=this.fk[this.Yc];this.iG()&&this.dispatchEvent("onclearhighlight",{index:a,data:this.Xl(a)})},iG:function(){var a=this.Yc,b=this.fk,c=s;return 0<=a?(c=this.NG(b[a]),z.tc(c,this.es("current")),this.Yc= -1,p):t},confirm:function(a,b){if("keyboard"==b||this.Aq(a))this.nj(a),this.dispatchEvent("onconfirm",{data:this.Xl(a)||a,source:b}),this.Yc=-1,this.aa()},Xl:function(a){return{item:this.Tl[a],index:a}},dD:function(){return this.bm().value},bm:function(){return z.da(this.i_)},NG:function(a){return z.da(this.Xb("item"+a))},QQ:function(){for(var a="",b=[],c=this.Tl,e=c.length,f=0;f<e;f++)b.push(z.yo(this.B_,this.Xb("item"+f),c[f].content,this.Bo()+"._itemOver(event, "+f+")",this.Bo()+"._itemOut(event, "+ f+")",this.Bo()+"._itemDown(event, "+f+")",this.Bo()+"._itemClick(event, "+f+")","undefined"==typeof c[f].disable||c[f].disable==t?"":this.es("disable")));a+=z.yo(this.y_,b.join(""));I()&&(a+=z.yo(this.z_,this.Bo()+"._close(event)"));return a},_close:function(){this.aa()},_itemOver:function(a,b){z.event.stop(a||window.event);this.Aq(b)&&this.xs(b);this.dispatchEvent("onmouseoveritem",{index:b,data:this.Xl(b)})},_itemOut:function(a,b){z.event.stop(a||window.event);this.qX||this.Aq(b)&&this.xB();this.dispatchEvent("onmouseoutitem", {index:b,data:this.Xl(b)})},_itemDown:function(a,b){z.event.stop(a||window.event);this.dispatchEvent("onmousedownitem",{index:b,data:this.Xl(b)})},_itemClick:function(a,b){z.event.stop(a||window.event);this.dispatchEvent("onitemclick",{index:b,data:this.Xl(b)});this.Aq(b)&&this.confirm(b,"mouse")},Aq:function(a){return z.lc.contains(this.fk,a)},VQ:function(){var a=this;return function(b){var b=b||window.event,b=b.target||b.srcElement,c=z.Pb.get(b);b==a.bm()||c&&c.Lt==a.Lt||a.aa()}},tR:function(){var a= this;return function(){a.aa()}},Rh:function(){this.dispatchEvent("dispose");z.R.remove(this.PL);z.lang.Ga.prototype.Rh.call(this)}});z.Pb.Kl=z.Pb.Kl||{};z.R.children=function(a){a=z.R.da(a);if(a===s)return a;for(var b=[],a=a.firstChild;a;a=a.nextSibling)1==a.nodeType&&b.push(a);return b};z.R.insertBefore=function(a,b){var c;c=z.R.Dj;a=c(a);b=c(b);(c=b.parentNode)&&c.insertBefore(a,b);return a}; z.R.Ld=function(a,b,c){var e=z.R,f,a=e.da(a),b=z.Hk.CN(b);if(f=e.zl)c=f.filter(b,c,"set");(f=e.TA[b])&&f.set?f.set(a,c):a.style[f||b]=c;return a};z.Ld=z.R.Ld;z.R.mi=function(a,b){a=z.R.da(a);if(a===s)return a;for(var c in b)z.R.Ld(a,c,b[c]);return a};z.mi=z.R.mi;z.R.zl[z.R.zl.length]={set:function(a,b){b.constructor==Number&&!/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a)&&(b+="px");return b}}; z.R.ht=function(a,b){function c(a,b){return parseFloat(z.ng(a,b))||0}var e={};b.width&&(e.width=parseFloat(b.width));b.height&&(e.height=parseFloat(b.height));if(z.ga.DD&&(b.width&&(e.width=parseFloat(b.width)-c(a,"paddingLeft")-c(a,"paddingRight")-c(a,"borderLeftWidth")-c(a,"borderRightWidth"),0>e.width&&(e.width=0)),b.height))e.height=parseFloat(b.height)-c(a,"paddingTop")-c(a,"paddingBottom")-c(a,"borderTopWidth")-c(a,"borderBottomWidth"),0>e.height&&(e.height=0);return z.R.mi(a,e)}; (function(){var a=z.Pb.Kl.uJ=u();a.ly=t;a.Cp;a.uF;a.vF;a.qO=function(){if(this.Cp)this.rO(),z.Ld(this.Cp,"display","block");else{var a=this.PU||{},c=this.uF=a.Ya||this.Wh(),e=a.opacity||"0",a=a.color||"",f=this.Cp=document.createElement("iframe"),g=this.vF=document.createElement("div");0<z.R.children(c).length?z.R.insertBefore(g,c.firstChild):c.appendChild(g);z.mi(g,{position:"absolute",top:"0px",left:"0px"});z.R.ht(g,{width:c.offsetWidth,height:c.offsetHeight});z.R.ht(f,{width:g.offsetWidth});z.R.mi(f, {zIndex:-1,display:"block",border:0,backgroundColor:a,filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity="+e+")"});g.appendChild(f);f.src="javascript:void(0)";f.frameBorder="0";f.scrolling="no";f.height="97%";this.ly=p}};a.pO=function(){var a=this.Cp;this.ly&&(z.Ld(a,"display","none"),this.ly=t)};a.rO=function(){var a;a=a||{};var c=this.uF,e=this.vF,f=this.Cp;z.R.ht(e,{width:c.offsetWidth,height:c.offsetHeight});z.R.ht(f,z.extend({width:z.ng(e,"width")},a))}})(); z.extend(z.Pb.ui.prototype,{uJ:p,PU:{}});z.Pb.ui.We(function(a){a.uJ&&(a.addEventListener("onshow",function(){a.qO()}),a.addEventListener("onhide",function(){a.pO()}))});z.Pb.ui.extend({setData:function(a,b,c){this.LB[a]=b;c||this.show(a,this.LB[a])}});z.Pb.ui.We(function(a){a.LB={};a.addEventListener("onneeddata",function(b,c){var e=a.LB;"undefined"==typeof e[c]?a.getData(c):a.show(c,e[c])})});z.R.JZ=z.R.E4=function(a,b){return z.R.ht(a,{width:b})}; z.R.jX=function(a){a=z.R.da(a);if(a===s)return a;a=z.R.PC(a);return a.parentWindow||a.defaultView||s};z.R.ua=function(a,b){return z.R.mi(a,{left:b.left-(parseFloat(z.R.ng(a,"margin-left"))||0),top:b.top-(parseFloat(z.R.ng(a,"margin-top"))||0)})};z.page=z.page||{};z.page.jD=function(){var a=document;return("BackCompat"==a.compatMode?a.body:a.documentElement).clientWidth};z.page.iD=function(){var a=document;return("BackCompat"==a.compatMode?a.body:a.documentElement).clientHeight}; z.page.WW=function(){var a=document;return window.pageYOffset||a.documentElement.scrollTop||a.body.scrollTop};z.page.VW=function(){var a=document;return window.pageXOffset||a.documentElement.scrollLeft||a.body.scrollLeft};z.bs=z.bs||{};z.bs.bind=function(a,b){var c=2<arguments.length?[].slice.call(arguments,2):s;return function(){var e=z.lang.og(a)?b[a]:a,f=c?c.concat([].slice.call(arguments,0)):arguments;return e.apply(b||e,f)}}; (function(){function a(a){a.x=a[0]||a.x||a.left||0;a.y=a[1]||a.y||a.top||0;return a}var b=z.Pb.Kl.UY=u();b.ua=function(a,b,f){b=z.da(b)||this.Wh();f=f||{};this.SO(b,f.zY,[b,a,f])};b._positionByCoordinate=function(b,e,f,g){var e=e||[0,0],f=f||{},i={},k=z.page.iD(),m=z.page.jD(),n=z.page.VW(),o=z.page.WW(),q=b.offsetWidth,v=b.offsetHeight,w=b.offsetParent,w=!w||w==document.body?{left:0,top:0}:z.R.ja(w);f.position="undefined"!==typeof f.position?f.position.toLowerCase():"bottomright";e=a(e||[0,0]);f.Da= a(f.Da||[0,0]);e.x+=0<=f.position.indexOf("right")?e.width||0:0;e.y+=0<=f.position.indexOf("bottom")?e.height||0:0;i.left=e.x+f.Da.x-w.left;i.top=e.y+f.Da.y-w.top;switch(f.r3){case "surround":i.left+=i.left<n?q+(e.width||0):i.left+q>n+m?-q-(e.width||0):0;i.top+=i.top<o?v+(e.height||0):i.top+v>o+k?-v-(e.height||0):0;break;case "fix":i.left=Math.max(0-parseFloat(z.R.ng(b,"marginLeft"))||0,Math.min(i.left,z.page.jD()-q-w.left));i.top=Math.max(0-parseFloat(z.R.ng(b,"marginTop"))||0,Math.min(i.top,z.page.iD()- v-w.top));break;case "verge":var y=-1<f.position.indexOf("right")?e.width:0,A=-1<f.position.indexOf("bottom")?e.height:0,B=-1<f.position.indexOf("bottom")?e.width:0,C=-1<f.position.indexOf("right")?e.height:0;i.left-=0<=f.position.indexOf("right")?e.width||0:0;i.top-=0<=f.position.indexOf("bottom")?e.height||0:0;i.left+=i.left+y+q-n>m-w.left?B-q:y;i.top+=i.top+A+v-o>k-w.top?C-v:A}z.R.ua(b,i);!g&&(k!=z.page.iD()||m!=z.page.jD())&&this._positionByCoordinate(b,e,{},p);g||this.dispatchEvent("onpositionupdate")}; b.SO=function(a,b,f){("undefined"==typeof b||!b)&&z.event.V(z.R.jX(a),"resize",z.bs.bind.apply(this,["_positionByCoordinate",this].concat([].slice.call(f))));this._positionByCoordinate.apply(this,f)}})(); z.Pb.ui.extend({UY:p,YV:p,kX:function(){var a=this;return function(){a.Qv(p)}},Qv:function(a){var b=this.bm(),c=this.oB,e=this.Wh();if(this.Uz()||!a)c&&(b=c),a=z.R.ja(b),b={top:a.top+b.offsetHeight-1,left:a.left,width:b.offsetWidth},b="function"==typeof this.view?this.view(b):b,this.ua([b.left,b.top],s,{zY:p}),z.R.JZ(e,b.width)}}); z.Pb.ui.We(function(a){a.W_=a.kX();a.addEventListener("onload",function(){a.Qv();a.YV&&(a.ZV=setInterval(function(){var b=a.Wh(),c=a.bm();0!=b.offsetWidth&&(c&&c.offsetWidth!=b.offsetWidth)&&(a.Qv(),b.style.display="block")},100));a.V(window,"resize",a.W_)});a.addEventListener("onshow",function(){a.Qv()});a.addEventListener("ondispose",function(){clearInterval(a.ZV)})}); z.Pb.ui.We(function(a){function b(){setTimeout(function(){var b=a.bm();f=b===s?"":b.value},20)}var c,e="",f,g,i=t,k=t;a.addEventListener("onload",function(){c=this.bm();b();a.V(window,"onload",b);a.j_=a.aX();a.V(c,"keydown",a.j_);c.setAttribute("autocomplete","off");a.AU=setInterval(function(){if(!k){z.da(c)==s&&a.Rh();var b=c.value;b==e&&""!=b&&b!=f&&b!=g?0==a.lE&&(a.lE=setTimeout(function(){a.dispatchEvent("onneeddata",b)},100)):(clearTimeout(a.lE),a.lE=0,""==b&&""!=e&&(g="",a.aa()),e=b,b!=g&&(a.sw= b),f!=c.value&&(f=""))}},10);a.V(c,"beforedeactivate",a.bU)});a.addEventListener("onitemclick",function(){k=t;a.sw=e=a.dD()});a.addEventListener("onpick",function(a){i&&c.blur();c.value=g=a.data.item.value;i&&c.focus()});a.addEventListener("onmousedownitem",function(){k=i=p;setTimeout(function(){i=k=t},500)});a.addEventListener("ondispose",function(){clearInterval(a.AU)})}); z.Pb.ui.extend({bU:function(){return function(){mousedownView&&(window.event.cancelBubble=p,window.event.returnValue=t)}},aX:function(){var a=this;return function(b){var c=t,b=b||window.event;switch(b.keyCode){case 9:case 27:a.aa();break;case 13:z.event.stop(b);a.confirm(-1==a.Yc?a.bm().value:a.fk[a.Yc],"keyboard");break;case 38:c=p;case 40:z.event.stop(b);b=c;if(a.Uz()){var c=a.fk,e=a.Yc;if(0!=c.length){if(b)switch(e){case -1:e=c.length-1;a.nj(c[e]);a.xs(c[e]);break;case 0:e=-1;a.nj(a.sw);a.xB(); break;default:e--,a.nj(c[e]),a.xs(c[e])}else switch(e){case -1:e=0;a.nj(c[e]);a.xs(c[e]);break;case c.length-1:e=-1;a.nj(a.sw);a.xB();break;default:e++,a.nj(c[e]),a.xs(c[e])}a.Yc=e}}else a.dispatchEvent("onneeddata",a.dD());break;default:a.Yc=-1}}},sw:""});ja.i5=p;var ui=t,vi=D.Cd+"res/20/bmap_autocomplete.css",wi={ALL:"0",CITY:"1"}; z.extend(xe.prototype,{Qd:function(){this.Fi()},Fi:function(){this.Yk=-1;this.Ma=s;this.xv=[];this.gG=0;this.la=this.Bu();this.$a.input&&(this.pR(),this.NS(),this.Px(this.dH));var a=s;this.Pi&&(a={method:"search"},a.arguments=[this.Pi]);this.XG();this.EG(a)},NS:function(){var a=this,b=new z.Pb.ui({getData:function(b){a.YH(b)},onhide:function(){a.Yk=-1;""===a.gg.dD()&&(a.Pi="",a.la=a.Bu())},onhighlight:function(b){if(a.Ma){var e={},f={},f={index:b.data.index,value:a.Ma.lm[b.data.index].value},e={index:a.Yk, value:0<=a.Yk?a.Ma.lm[a.Yk].value:{}},g=new Q("onhighlight");g.fromitem=g.j2=e;g.toitem=g.Y4=f;a.dispatchEvent(g);a.Yk=b.data.index}},onbeforepick:function(b){if(a.Ma&&"number"===typeof b.data.index){var e=a.Ma.lm[b.data.index].value;b.data.item.content=b.data.item.value=e.province+e.city+e.district+e.street+e.business}},onconfirm:function(b){if(a.Ma){Ta(5012);var e={};"number"===typeof b.data.index&&(e={index:b.data.index,value:a.Ma.lm[b.data.index].value},b=new Q("onconfirm"),b.item=b.item=e,a.dispatchEvent(b))}}}); b.za(z.da(this.$a.input),z.da(this.$a.oB));this.gg=b},show:function(){this.gg&&(this.gg.Wh().style.display="block")},aa:function(){this.gg&&this.gg.aa();this.Yk=-1},Rh:function(){this.gg&&this.gg.Rh();z.lang.Ga.prototype.Rh.call(this)},AE:function(a){this.$a.types=a||[];this.XG()},Em:function(a,b){this.yd.src=a;this.EG(b)},search:function(a){this.YH(a)},Px:function(a){this.gg&&this.gg.nj(a)},YH:function(a){var b=this,c=(1E5*Math.random()).toFixed(0);D._rd["_cbk"+c]=function(a){z.da(b.$a.input)!== s&&b.OQ(a);delete D._rd["_cbk"+c]};var e=D.url.proto+D.url.domain.baidumap+"/su?wd="+encodeURIComponent(a)+"&callback=BMap._rd._cbk"+c+"&cid="+b.gG+"&type="+b.xv+"&t="+(new Date).getTime()+"&from=jsapi";b.Pi=a;b.Yk=-1;b.la=this.Bu();Ta(5010,{tp:b.xv,wd:encodeURIComponent(a)});D.alog("cus.fire","count","z_sug");pa(e)},OQ:function(a){a&&a.q&&(this.Pi=a.q);this.lT(this.BQ(a));this.la=this.Bu(this.Ma);this.$a.Vs(this.la)},BQ:function(a){var b=[],c=a.s,e={};e.wb=a.q||"";e.count=a.s.length||0;e.status= 0>a.e?7:0;e.lm=[];var f=0,g=c.length;for(I()&&6<g&&(g=6);f<g;f++){var i=this.ZQ(c[f],this.xv);e.lm.push(i.value);b.push(i.YK)}this.Ma=e;return{data:b,t5:a.q}},lT:function(a){if(this.gg){var b=this.gg;b.show(a.word,a.data);1>a.data.length&&b.aa()}},ZQ:function(a,b){switch(b.toString()){case "1":return this.$Q(a);default:return this.aR(a)}},aR:function(a){var a=a.split("$"),b=this.Pi,c=RegExp(b,"g"),e="<b>"+b+"</b>",f={province:"",city:a[0],district:a[1],street:a[2],streetNumber:"",business:a[3]},g= "";7<=a.length&&(f.city=a[5]||f.city,f.district=a[6]||f.city,a[0]=a[5],a[1]=a[6]);for(var i=3;0<=i;i--)if(g=a[i]+g,-1<g.indexOf(b)){for(var b=i-1,k="";-1<b;)k=a[b]+k,b--;g=g.replace(c,e);k&&(g+=\'&nbsp;<span class="tangram-suggestion-grey">\'+k+"</span>");break}if(!k)for(i=3;0<=i;i--)k+=a[i];return{value:{value:f},YK:g}},$Q:function(a){var b=a.split("$"),c=this.Pi,a={province:b[0],city:b[1],district:"",street:"",streetNumber:"",business:""},b=(b[0]+b[1]).replace(RegExp(c,"g"),"<b>"+c+"</b>");return{value:{value:a}, YK:b}},XG:function(){var a=this.$a.types,b=[];if(z.og(a))b.push(wi[a.toUpperCase()]);else if(z.lang.isArray(a))for(var c=0,e=a.length;c<e;c++)b.push(wi[a[c].toUpperCase()]);this.xv=0<b.length?b.join(","):"0"},EG:function(a){var b=this;b.Eg(b.yd,function(c){b.gG=c;a&&b[a.method].apply(b,a.arguments)})},pR:function(){if(!ui){var a=document,b=a.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");b.setAttribute("href",vi);var c=a.getElementsByTagName("head");c.length? c[0].appendChild(b):a.documentElement.appendChild(b);ui=p}},Bu:function(a){if(!a)return new xi({wb:this.Pi,total:0,xk:[]});for(var b=[],c=0,e=a.lm.length;c<e;c++)b.push(a.lm[c].value);return new xi({wb:a.wb,total:a.count,xk:b})}});U(ag,{show:ag.show,hide:ag.aa,setTypes:ag.AE,setLocation:ag.Em,search:ag.search,setInputValue:ag.Px,dispose:ag.Rh,setSearchCompleteCallback:ag.ot});function xi(a){this.keyword=a.wb||"";this.lA=a.total||0;this.Qq=a.xk&&a.xk.slice(0)||[]}z.extend(xi.prototype,{mk:function(a){if(this.Qq[a])return this.Qq[a]},ls:x("lA"),toString:ea("AutocompleteResult")});var yi=xi.prototype;U(yi,{getPoi:yi.mk,getNumPois:yi.ls}); ');
