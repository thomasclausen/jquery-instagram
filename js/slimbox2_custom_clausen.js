/* Modified from original 2.04 to support iframes by Morten Haggren mh@idefa.dk
 * compressed by http://jscompress.com/
 * */
(function(a){function M(){if(e>=0){L();e=g=h=-1;a(t).hide();a(s).stop().fadeOut(c.overlayFadeDuration,E)}return false}function L(){p.onload=null;p.src=q.src=r.src=f;a([t,u,z]).stop(true);a([w,x,u,y]).hide()}function K(){if(g>=0)a(w).show();if(h>=0)a(x).show();a(z).css("marginTop",-z.offsetHeight).animate({marginTop:0},c.captionAnimationDuration);y.style.visibility=""}function J(){a(t).removeClass("lbLoading");a(u).css({backgroundImage:"url("+f+")",visibility:"hidden",display:""});a(v).width(p.width);a([v,w,x]).height(p.height);a(A).html(d[e][1]||"");a(B).html((d.length>1&&c.counterText||"").replace(/{x}/,e+1).replace(/{y}/,d.length));if(g>=0)q.src=d[g][0];if(h>=0)r.src=d[h][0];k=u.offsetWidth;l=u.offsetHeight;var b=Math.max(0,j-l/2);if(t.offsetHeight!=l){a(t).animate({height:l,top:b},c.resizeDuration,c.resizeEasing)}if(t.offsetWidth!=k){a(t).animate({width:k,marginLeft:-k/2},c.resizeDuration,c.resizeEasing)}a(t).queue(function(){a(y).css({width:k,top:b+l,marginLeft:-k/2,visibility:"hidden",display:""});a(u).css({display:"none",visibility:"",opacity:""}).fadeIn(c.imageFadeDuration,K)})}function I(b){if(b>=0){e=b;f=d[e][0];g=(e||(c.loop?d.length:0))-1;h=(e+1)%d.length||(c.loop?0:-1);t.className="";a(t).addClass("lbLoading");if(!(f.slice(-4)in C)){a(t).addClass("iframe");var i=f.split("|");f="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";L();if(i[1]==undefined){p={width:c.defaultIframeWidth,height:c.defaultIframeHeight}}else{var j=i[1].split("x");p={width:j[0],height:j[1]}}var k=/^(?:http)s?\:\/\/([^\/]+)\//.exec(i[0]);if(k!=null&&k[1]&&k[1]!=location.host){a(t).addClass("external "+k[1].replace(/\./g,"_"))}a(u).addClass("iframe").find("iframe").attr("src",i[0]).unbind("load").bind("load",J)}else{L();p=new Image;p.onload=J;p.src=f}}return false}function H(){return I(h)}function G(){return I(g)}function F(b){var d=b.keyCode,e=a.inArray;return e(d,c.closeKeys)>=0?M():e(d,c.nextKeys)>=0?H():e(d,c.previousKeys)>=0?G():false}function E(c){if(c){a("object").add(m?"select":"embed").each(function(a,b){n[a]=[b,b.style.visibility];b.style.visibility="hidden"})}else{a.each(n,function(a,b){b[0].style.visibility=b[1]});n=[]}var d=c?"bind":"unbind";b[d]("scroll resize",D);a(document)[d]("keydown",F)}function D(){var c=b.scrollLeft(),d=b.width();a([t,y]).css("left",c+d/2);if(i)a(s).css({left:c,top:b.scrollTop(),width:d,height:b.height()})}var b=a(window),c,d,e=-1,f,g,h,i,j,k,l,m=!window.XMLHttpRequest,n=[],o=document.documentElement,p={},q=new Image,r=new Image,s,t,u,v,w,x,y,z,A,B;var C={jpeg:1,".jpg":1,".gif":1,".png":1};a(function(){a("body").append(a([s=a('<div id="lbOverlay" />')[0],t=a('<div id="lbCenter" />')[0],y=a('<div id="lbBottomContainer" />')[0]]).css("display","none"));u=a('<div id="lbImage" />').appendTo(t).append(v=a('<div style="position: relative;" />').append([w=a('<a id="lbPrevLink" href="#" />').click(G)[0],x=a('<a id="lbNextLink" href="#" />').click(H)[0],a("<iframe scrolling=\"no\" frameborder=\"0\"></iframe>")[0]])[0])[0];z=a('<div id="lbBottom" />').appendTo(y).append([a('<a id="lbCloseLink" href="#" />').add(s).click(M)[0],A=a('<div id="lbCaption" />')[0],B=a('<div id="lbNumber" />')[0],a('<div style="clear: both;" />')[0]])[0]});a.slimbox=function(e,f,g){c=a.extend({loop:false,overlayOpacity:.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,defaultIframeWidth:800,defaultIframeHeight:640,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},g);if(typeof e=="string"){e=[[e,f]];f=0}j=b.scrollTop()+b.height()/2;k=c.initialWidth;l=c.initialHeight;a(t).css({top:Math.max(0,j-l/2),width:k,height:l,marginLeft:-k/2}).show();i=m||s.currentStyle&&s.currentStyle.position!="fixed";if(i)s.style.position="absolute";a(s).css("opacity",c.overlayOpacity).fadeIn(c.overlayFadeDuration);D();E(1);d=e;c.loop=c.loop&&d.length>1;return I(f)};a.fn.slimbox=function(b,c,d){c=c||function(a){return[a.href,a.title]};d=d||function(){return true};var e=this;return e.unbind("click").click(function(){var f=this,g=0,h,i=0,j;h=a.grep(e,function(a,b){return d.call(f,a,b)});for(j=h.length;i<j;++i){if(h[i]==f)g=i;h[i]=c(h[i],i)}return a.slimbox(h,g,b)})}})(jQuery)