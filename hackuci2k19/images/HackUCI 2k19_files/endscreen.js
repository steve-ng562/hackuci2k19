(function(g){var window=this;var sDa=function(a,b,c){a.o.has(b);a.o.add(b);g.Af(c,function(){g.vxa(a,b)})},i5=function(a,b,c){var d=b.Ga();
g.T(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.jd(c?c:"mqdefault.jpg");var f=b instanceof g.GP&&b.lengthSeconds?g.NV(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.tR(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.GP?b.Da:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.Nl||g.DV("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.Cm(),is_live:l,is_list:k,is_mix:e,background:c?"background-image: url("+
c+")":""};b instanceof g.vR&&(d.playlist_length=b.getLength());a.update(d)},j5=function(a,b){g.qQ.call(this,{I:"div",
ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},k5=function(a){g.W.call(this,{I:"div",
ca:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},P:[{I:"div",M:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-upnext-top",P:[{I:"span",M:"ytp-upnext-header",ba:"Up Next"},{I:"span",M:"ytp-upnext-title",ba:"{{title}}"},{I:"span",M:"ytp-upnext-author",ba:"{{author}}"}]},{I:"a",M:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},P:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
P:[{I:"circle",M:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",M:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",M:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",M:"ytp-upnext-bottom",P:[{I:"span",M:"ytp-upnext-cancel"},{I:"span",M:"ytp-upnext-paused",
ba:"Autoplay is paused"}]}]});this.F=null;var b=this.o["ytp-upnext-cancel"];this.F=new g.W({I:"button",ca:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},ba:"Cancel"});g.K(this,this.F);this.F.X("click",this.KQ,this);this.F.xa(b);this.B=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.D=null;this.J=new g.U(this.Po,5E3,this);g.K(this,this.J);this.K=0;this.O(this.o["ytp-upnext-autoplay-icon"],"click",this.OS);this.gE();this.O(a,"autonavvisibility",
this.gE);this.O(a,"mdxnowautoplaying",this.eS);this.O(a,"mdxautoplaycanceled",this.fS);this.O(a,"mdxautoplayupnext",this.LG);3==this.B.getPresentingPlayerType()&&(a=(a=g.SU(g.NU(this.B)))?a.WK():null)&&this.LG(a)},l5=function(a,b){if(!a.C){g.dF("a11y-announce","Up Next "+a.D.title);
a.K=g.oH();a.C=new g.U((0,g.A)(a.Zs,a,b),25);a.Zs(b);var c=b||g.Y(a.B).experiments.A("autoplay_time")||1E4;a.B.Ba("onAutonavCoundownStarted",c)}g.pr(a.element,"ytp-upnext-autoplay-paused")},n5=function(a){m5(a);
a.K=g.oH();a.Zs();g.S(a.element,"ytp-upnext-autoplay-paused")},m5=function(a){a.C&&(a.C.dispose(),a.C=null)},o5=function(a,b){b=void 0===b?!1:b;
if(g.Y(a.B).experiments.o("autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.D.Ga(),a.Po(),a.G=new Notification("Up Next",{body:c.title,icon:c.jd()}),a.H=a.O(a.G,"click",a.FS),a.J.start())}m5(a);a.B.nextVideo(!1,b)},tDa=function(a){j5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.B=new g.W({I:"div",M:"ytp-subscribe-card",P:[{I:"img",M:"ytp-author-image",U:{src:b.Qk}},{I:"div",M:"ytp-subscribe-card-right",P:[{I:"div",M:"ytp-author-name",ba:b.author},{I:"div",M:"html5-subscribe-button-container"}]}]});g.K(this,this.B);this.B.xa(this.element);this.C=new g.x_("Subscribe",null,"Unsubscribe",null,!0,!1,b.tl,b.subscribed,"trailer-endscreen",null,null,a);g.K(this,this.C);this.C.xa(this.B.o["html5-subscribe-button-container"]);this.hide()},p5=function(a){var b=
g.Y(a),c=g.JL||g.Ff?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",ca:e,U:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{I:"div",M:"ytp-videowall-still-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-videowall-still-info",P:[{I:"span",M:"ytp-videowall-still-info-bg",P:[{I:"span",M:"ytp-videowall-still-info-content",U:c,P:[{I:"span",M:"ytp-videowall-still-info-title",ba:"{{title}}"},{I:"span",M:"ytp-videowall-still-info-author",
ba:"{{author_and_views}}"},{I:"span",M:"ytp-videowall-still-info-live",ba:"Live"},{I:"span",M:"ytp-videowall-still-info-duration",ba:"{{duration}}"}]}]}]},{I:"span",ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{I:"span",M:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",M:"ytp-videowall-still-listlabel-length",P:[" (",{I:"span",ba:"{{playlist_length}}"},")"]}]},{I:"span",ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],P:[{I:"span",
M:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",M:"ytp-videowall-still-listlabel-length",ba:" (50+)"}]}]});this.F=d;this.B=a;this.C=null;this.D=new g.WG(this);g.K(this,this.D);this.X("click",this.H);this.X("keypress",this.J);this.D.O(a,"videodatachange",this.G);g.Y(a).ka&&sDa(a.app.ma,this.element,this);this.G()},q5=function(a){j5.call(this,a,"videowall-endscreen");
this.K=a;this.G=0;this.C=[];this.H=this.D=this.F=null;this.J=this.Z=!1;this.T=null;this.Y=new g.WG(this);g.K(this,this.Y);this.L=new g.U(g.La(g.S,this.element,"ytp-show-tiles"),0);g.K(this,this.L);var b=new g.W({I:"button",ca:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},P:[g.GV()]});g.K(this,b);b.xa(this.element);b.X("click",this.xO,this);this.N=new g.lQ({I:"div",M:"ytp-endscreen-content"});g.K(this,this.N);this.N.xa(this.element);b=new g.W({I:"button",ca:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Next"},P:[g.HV()]});g.K(this,b);b.xa(this.element);b.X("click",this.wO,this);this.B=new k5(a);g.K(this,this.B);g.eV(this.player,this.B.element,4);this.hide()},r5=function(a){return g.gV(a.player)&&a.Vz()&&!a.H},uDa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.ZV(g.Y(a.K),b);
g.K(a,b);return b})},s5=function(a){var b=a.eg();
b!=a.Z&&(a.Z=b,a.player.V("autonavvisibility"))},t5=function(a){g.nV.call(this,a);
this.o=null;this.A=new g.WG(this);g.K(this,this.A);this.B=g.Y(a);vDa(a)?this.o=new q5(this.player):this.B.Pa?this.o=new tDa(this.player):this.o=new j5(this.player);g.K(this,this.o);g.eV(this.player,this.o.element,4);this.BF();this.A.O(a,"videodatachange",this.BF,this);this.A.O(a,g.sR("endscreen"),this.LN,this);this.A.O(a,"crx_endscreen",this.MN,this)},vDa=function(a){a=g.Y(a);
return a.Na&&!a.Pa};
g.r(j5,g.qQ);j5.prototype.create=function(){this.created=!0};
j5.prototype.destroy=function(){this.created=!1};
j5.prototype.Vz=function(){return!1};
j5.prototype.eg=function(){return!1};g.r(k5,g.W);g.h=k5.prototype;g.h.Po=function(){this.G&&(this.J.stop(),this.La(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.gE=function(){g.pQ(this,this.B.eg())};
g.h.FS=function(){window.focus();this.Po()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Zs=function(a){a=a||g.Y(this.B).experiments.A("autoplay_time")||1E4;var b=Math.min(g.oH()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.B.getPresentingPlayerType()?o5(this,!0):this.C&&this.C.start()};
g.h.OS=function(a){!g.te(this.F.element,g.JG(a))&&g.aW(a,this.B)&&o5(this)};
g.h.KQ=function(){g.PU(this.B,!0)};
g.h.eS=function(a){this.B.getPresentingPlayerType();this.show();l5(this,a)};
g.h.LG=function(a){this.B.getPresentingPlayerType();this.D&&this.D.Ga().videoId==a.Ga().videoId||(this.D=a,i5(this,a,"hqdefault.jpg"))};
g.h.fS=function(){this.B.getPresentingPlayerType();m5(this);this.hide()};
g.h.W=function(){m5(this);this.Po();g.W.prototype.W.call(this)};g.r(tDa,j5);g.r(p5,g.W);p5.prototype.Xk=function(){g.iV(this.B,this.element);var a=this.C.Ga().videoId,b=this.C.getPlaylistId();g.L0(this.B.app,a,this.C.Ld,b,void 0,void 0,void 0)};
p5.prototype.H=function(a){g.aW(a,this.B,this.F,this.C.Ld||void 0)&&this.Xk()};
p5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.PG(a)||(this.Xk(),g.OG(a))}};
p5.prototype.G=function(){var a=this.B.getVideoData(),b=g.Y(this.B);this.F=a.Mc?!1:b.o};g.r(q5,j5);g.h=q5.prototype;g.h.create=function(){j5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.F=uDa(this,a),this.D=a);this.Zg();this.Y.O(this.player,"appresize",this.Zg);this.Y.O(this.player,"onVideoAreaChange",this.Zg);this.Y.O(this.player,"videodatachange",this.yO);this.Y.O(this.player,"autonavchange",this.bw);this.Y.O(this.player,"autonavcancel",this.vO);a=this.D.autonavState;a!=this.T&&this.bw(a);this.Y.O(this.element,"transitionend",this.mU)};
g.h.destroy=function(){g.YG(this.Y);g.Cf(this.C);this.C=[];this.F=null;j5.prototype.destroy.call(this);g.pr(this.element,"ytp-show-tiles");this.L.stop();this.T=this.D.autonavState};
g.h.Vz=function(){return 1!=this.D.autonavState};
g.h.show=function(){j5.prototype.show.call(this);g.pr(this.element,"ytp-show-tiles");g.Y(this.player).B?g.fv(this.L):this.L.start();(this.J||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.PU(this.player,!1);r5(this)?(s5(this),2==this.D.autonavState?g.Y(this.player).experiments.o("fast_autonav_in_background")&&3==this.player.getVisibilityState()?o5(this.B,!0):l5(this.B):3==this.D.autonavState&&n5(this.B)):(g.PU(this.player,!0),s5(this))};
g.h.hide=function(){j5.prototype.hide.call(this);n5(this.B);s5(this)};
g.h.mU=function(a){g.JG(a)==this.element&&this.Zg()};
g.h.Zg=function(){if(this.F&&this.F.length){g.S(this.element,"ytp-endscreen-paginate");var a=g.YU(this.K,!0),b=g.BQ(this.K);b&&(b=b.cd()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.F.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,t=e/2,x=b<=f-2&&n>=t*m,y=e<=k-2&&n>=p*m;if((p+1)/t*d/c>c/(p/(t+1)*d)&&y)n-=p*m,e+=2;else if(x)n-=t*m,b+=2;else if(y)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.Gd(a.width/m||1,1,1.21);n*=g.Gd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.N.element;g.bi(a,m,n);g.Kh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.B;f=this.F[0];c.D=f;i5(c,f,"hqdefault.jpg");g.T(this.element,"ytp-endscreen-takeover",r5(this));s5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,t=0,d&&f>=b-2&&k>=e-
2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),p=g.Hd(p+this.G,l),0!=t){x=this.C[c];x||(x=new p5(this.player),this.C[c]=x,a.appendChild(x.element));y=Math.floor(n*k/e);var E=Math.floor(m*f/b),G=Math.floor(n*(k+t)/e)-y-4,N=Math.floor(m*(f+t)/b)-E-4;g.Rh(x.element,E,y);g.bi(x.element,N,G);g.Kh(x.element,"transitionDelay",(k+f)/20+"s");g.T(x.element,"ytp-videowall-still-mini",1==t);g.T(x.element,"ytp-videowall-still-large",2<t);t=x;p=this.F[p];t.C!=p&&(t.C=p,i5(t,p,g.nr(t.element,"ytp-videowall-still-large")?
"hqdefault.jpg":"mqdefault.jpg"),x=(p=p.Ld)&&p.itct)&&(p=t.B,g.Y(p).ka&&(t=t.element,p.app.ma.o.has(t),x&&(t.visualElement=g.NH(x))));c++}g.T(this.element,"ytp-endscreen-paginate",c<l);for(b=this.C.length-1;b>=c;b--)e=this.C[b],g.ne(e.element),g.Bf(e);this.C.length=c}};
g.h.yO=function(){var a=this.player.getVideoData();this.D!=a&&(this.G=0,this.F=uDa(this,a),this.D=a,this.Zg())};
g.h.wO=function(){this.G+=this.C.length;this.Zg()};
g.h.xO=function(){this.G-=this.C.length;this.Zg()};
g.h.YM=function(){return!!this.B.C};
g.h.bw=function(a){1==a?(this.J=!1,this.H=this.D.clientPlaybackNonce,m5(this.B),this.A&&this.Zg()):(this.J=!0,this.A&&r5(this)&&(2==a?l5(this.B):3==a&&n5(this.B)))};
g.h.vO=function(a){if(a){for(a=0;a<this.C.length;a++)g.jV(this.K,this.C[a].element,!0);this.bw(1)}else this.H=null,this.J=!1;this.Zg()};
g.h.eg=function(){return this.A&&r5(this)};g.r(t5,g.nV);g.h=t5.prototype;g.h.Nn=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!vDa(this.player)||b;a=a.Pd;var c=g.u0(this.player.app);return b&&!a&&!c};
g.h.eg=function(){return this.o.eg()};
g.h.TM=function(){return this.eg()?this.o.YM():!1};
g.h.W=function(){g.cV(this.player,"endscreen");g.nV.prototype.W.call(this)};
g.h.load=function(){g.nV.prototype.load.call(this);this.o.show()};
g.h.unload=function(){g.nV.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.LN=function(a){this.Nn()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.MN=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.BF=function(){g.cV(this.player,"endscreen");var a=Math.max(1E3*(this.player.getVideoData().lengthSeconds-10),0);a=new g.qR(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.K(this,a);var b=new g.qR(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.K(this,b);g.$U(this.player,[a,b])};g.VZ.endscreen=t5;})(_yt_player);