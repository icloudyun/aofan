var FrontProducts_generalSearch01={patternDate:/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,patternCurrency:/^\d{1,8}(\.\d{0,2})?$/,compId:"",mustInputKeyword:"false",inputkeyword:"",keyover:function(a,b){if(jQuery("#"+a+"_keyword").val()==b){jQuery("#"+a+"_keyword").val("");jQuery("#"+a+"_keyword").focus()}},keyout:function(a,b){if(this.trim(jQuery("#"+a+"_keyword").val())==""){jQuery("#"+a+"_keyword").val(b);jQuery("#"+a+"_keyword").addClass("input-keyword")}else{jQuery("#"+a+"_keyword").val(this.trim(jQuery("#"+a+"_keyword").val()));jQuery("#"+a+"_keyword").removeClass("input-keyword")}},trim:function(b,c){b=""+b;if(c=="l"||c=="L"){RegularExp=/^\s+/gi;return b.replace(RegularExp,"")}else{if(c=="r"||c=="R"){RegularExp=/\s+$/gi;return b.replace(RegularExp,"")}else{RegularExp=/^\s+|\s+$/gi;var a=b.replace(RegularExp,"");return a}}},validateForm:function(k,c,g){this.compId=k;this.mustInputKeyword=c;this.inputkeyword=g;if(this.checkKeywords()==false){return false}var j=jQuery("#"+this.compId+"_beginValue").val();var i=jQuery("#"+this.compId+"_endValue").val();var d=jQuery("#"+this.compId+"_propertyId").val();var b=jQuery("#"+this.compId+"_propertyType").val();var a=jQuery("#"+this.compId+"_areaType").val();var f=this.trim(jQuery("#"+this.compId+"_keyword").val());jQuery("#"+this.compId+"_keyword").val(f);if(f==this.inputkeyword){jQuery("#"+this.compId+"_keyword").val("")}var h="1";if(d!=null&&d!=""){if(b=="3"){h="3"}else{h="2"}}jQuery("#"+this.compId+"_searchType").val(h);if(a!=""){if(a=="BigDecimal"){if(this.checkNumber()==false){return false}}else{if(a=="Date"){if(this.isCheckAreaDate()==false){return false}}}}var e=jQuery("#"+this.compId+"_keyword").serialize();jQuery.ajax({type:"POST",url:"/FrontProducts.do?method=keywordStat",data:e,dataType:"text",cache:false,success:function(l){}});return true},checkKeywords:function(){if(this.mustInputKeyword=="true"){if(this.trim(jQuery("#"+this.compId+"_keyword").val())==this.inputkeyword||this.trim(jQuery("#"+this.compId+"_keyword").val())==""){alert(this.inputkeyword);jQuery("#"+this.compId+"_keyword").val("");jQuery("#"+this.compId+"_keyword").focus();return false}}return true},checkNumber:function(){if(jQuery("#"+this.compId+"_beginValue").val()&&!this.patternCurrency.test(jQuery("#"+this.compId+"_beginValue").val())){alert(i18n_products_error_beginValue);jQuery("#"+this.compId+"_beginValue").focus();return false}if(jQuery("#"+this.compId+"_endValue").val()&&!this.patternCurrency.test(jQuery("#"+this.compId+"_endValue").val())){alert(i18n_products_error_endValue);jQuery("#"+this.compId+"_endValue").focus();return false}if(jQuery("#"+this.compId+"_beginValue").val()&&jQuery("#"+this.compId+"_endValue").val()&&(parseInt(jQuery("#"+this.compId+"_beginValue").val())>parseInt(jQuery("#"+this.compId+"_endValue").val()))){alert(i18n_products_mustaboveprice);jQuery("#"+this.compId+"_endValue").focus();return false}return true},queryadvance:function(a,b){if(b=="_self"){location.href=a}else{window.open(a)}},changecategory:function(b,d,c,a){jQuery.getJSON("/FrontProducts.do?method=doGetTemplatePropertiesByCategoryId",{pmcId:c},function(g){if(g){var f="<select name='propertyId' id='"+b+"_propertyId'>";f=f+"<option selected='selected' value=''>"+a+"</option>";for(var e=0;e<g.length;e++){if(g[e].hidden=="true"){if(g[e].name=="name"){f=f+"<option selected='selected' value='"+g[e].name+"'>"+g[e].title+"</option>"}else{if(g[e].name!="listprice"&&g[e].name!="retailprice"&&g[e].name!="createdate"&&g[e].name!="mark"&&g[e].name!="scorerule"&&g[e].name!="currencytype"&&g[e].name!="samllimageid"&&g[e].name!="bigimageid"&&g[e].name!="attachment1"&&g[e].name!="attachment2"&&g[e].name!="attachment3"&&g[e].name!="weight"){f=f+"<option value='"+g[e].name+"'>"+g[e].title+"</option>"}}}}f=f+"</select>";_getElementById(b,d,"template").innerHTML=f}})},isCheckAreaDate:function(){if(jQuery("#"+this.compId+"_beginValue").val()&&!this.patternDate.test(jQuery("#"+this.compId+"_beginValue").val())){alert(i18n_products_inputcorrectdate);jQuery("#"+this.compId+"_beginValue").focus();return false}if(jQuery("#"+this.compId+"_endValue").val()&&!this.patternDate.test(jQuery("#"+this.compId+"_endValue").val())){alert(i18n_products_inputcorrectdate);jQuery("#"+this.compId+"_endValue").focus();return false}if(jQuery("#"+this.compId+"_beginValue").val()&&jQuery("#"+this.compId+"_endValue").val()&&(jQuery("#"+this.compId+"_beginValue").val()>jQuery("#"+this.compId+"_endValue").val())){alert(i18n_products_mustlessenddate);jQuery("#"+this.compId+"_endValue").focus();return false}return true}};var FrontColumns_navigation01={currentColumn:0,isShowSecondColumn:"",compId:"",addClickEvent:function(){$(".navMenu li").each(function(a){$(this).bind("click",function(){$("#columns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).removeClass("navMenubg"+FrontColumns_navigation01.currentColumn);$(this).addClass("navMenubg"+a);if(FrontColumns_navigation01.isShowSecondColumn.length>0){$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).hide();$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+a).show()}FrontColumns_navigation01.currentColumn=a})})},addMouseOverEvent:function(){$(".navMenu li").each(function(a){$(this).bind("mouseover",function(){$("#columns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).removeClass("navMenubg"+FrontColumns_navigation01.currentColumn);$(this).addClass("navMenubg"+a);if(FrontColumns_navigation01.isShowSecondColumn.length>0){$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).hide();$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+a).show()}})})},addMouseOutEvent:function(){$(".navMenu li").each(function(a){$(this).bind("mouseout",function(){$(this).removeClass("navMenubg"+a);$("#columns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).addClass("navMenubg"+FrontColumns_navigation01.currentColumn);if(FrontColumns_navigation01.isShowSecondColumn.length>0){$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+a).hide();$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+FrontColumns_navigation01.currentColumn).show()}})})},setSelectedColumn:function(a){var b=this.getUrlParam(a);if(b!=null){this.currentColumn=b}},setFocusColumn:function(){$("#columns-"+FrontColumns_navigation01.compId+"-"+this.currentColumn).addClass("navMenubg"+this.currentColumn);if(this.isShowSecondColumn.length>0){$("#secondColumns-"+FrontColumns_navigation01.compId+"-"+this.currentColumn).show()}},getUrlParam:function(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");var c=window.location.toString().match(b);if(c!=null){return unescape(c[2])}return null},init:function(c,b,a){this.compId=c;this.isShowSecondColumn=a;this.setSelectedColumn(c+"-"+b);this.addClickEvent();this.addMouseOverEvent();this.addMouseOutEvent();this.setFocusColumn()},extEvents:function(d,a){var b=this.getUrlParam(d+"FirstColumnId");var c=this.getUrlParam(d+"SecondColumnId");if(b==null){b=$("#"+d+" ul.nav-first .first").attr("id")}else{b="columns"+b}if(c==null){c=$("#"+d+" #"+b+" .nav-second .nav-sec-main ul li:first a").attr("id")}else{c="cols"+c}$("#"+d+" #"+b).addClass("current");$("#"+d+" #"+c).addClass("current-a");$("#"+d+" #"+b+"Sub").show();if(a){$("#"+d+" ul.nav-first li[id^='columns']").hover(function(){if($(this).attr("id")!=b){$("#"+d+" #"+b).removeClass("current");$("#"+d+" #"+b+"Sub").hide();$(this).addClass("current");$("#"+d+" #"+$(this).attr("id")+"Sub").show();if(!$(this).find(".nav-second .nav-sec-main a").hasClass("current-a")){$(this).find(".nav-second .nav-sec-main a:first").addClass("current-a")}}},function(){$(this).removeClass("current");$("#"+d+" #"+$(this).attr("id")+"Sub").hide();$("#"+d+" #"+b).addClass("current");$("#"+d+" #"+b+"Sub").show()});$("#"+d+" ul.nav-first li[id^='columns']").click(function(){$("#"+d+" #"+b).removeClass("current");$("#"+d+" #"+b+"Sub").hide();$(this).addClass("current");$("#"+d+" #"+$(this).attr("id")+"Sub").show();b=$("#"+d+" ul.nav-first li.current").attr("id")});$("#"+d+" ul.nav-first .nav-second .nav-sec-main a").click(function(){$(this).parent().parent().find("a").removeClass("current-a");$(this).addClass("current-a");var e=$(this).parents(".nav-second").attr("id");if(e!==b+"Sub"){$("#"+d+" #"+b).removeClass("current");$("#"+d+" #"+b+"Sub").hide();b=e.substring(0,e.length-3);$("#"+d+" #"+b).addClass("current");$("#"+d+" #"+e).show()}})}else{$("#"+d+" ul.nav-first li[id^='columns']").hover(function(){if($(this).attr("id")!=b){$("#"+d+" #"+b).removeClass("current");$(this).addClass("current")}},function(){$(this).removeClass("current");$("#"+d+" #"+b).addClass("current")});$("#"+d+" ul.nav-first li[id^='columns']").click(function(){$("#"+d+" #"+b).removeClass("current");$(this).addClass("current");b=$("#"+d+" ul.nav-first li.current").attr("id")})}},ddlevelsmenu:{enableshim:true,arrowpointers:{downarrow:["../images/columns/arrow-down.gif",11,7],rightarrow:["../images/columns/arrow-right.gif",12,12],showarrow:{toplevel:true,sublevel:true}},hideinterval:200,effects:{enableswipe:true,enablefade:true,duration:200},httpsiframesrc:"blank.htm",topmenuids:[],topitems:{},subuls:{},lastactivesubul:{},topitemsindex:-1,ulindex:-1,hidetimers:{},shimadded:false,nonFF:!/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent),getoffset:function(b,a){return(b.offsetParent)?b[a]+this.getoffset(b.offsetParent,a):b[a]},getoffsetof:function(a){a._offsets={left:this.getoffset(a,"offsetLeft"),top:this.getoffset(a,"offsetTop")}},getwindowsize:function(){this.docwidth=window.innerWidth?window.innerWidth-10:this.standardbody.clientWidth-10;this.docheight=window.innerHeight?window.innerHeight-15:this.standardbody.clientHeight-18},gettopitemsdimensions:function(){for(var a=0;a<this.topmenuids.length;a++){var d=this.topmenuids[a];for(var b=0;b<this.topitems[d].length;b++){var e=this.topitems[d][b];var c=document.getElementById(e.getAttribute("rel"));e._dimensions={w:e.offsetWidth,h:e.offsetHeight,submenuw:c.offsetWidth,submenuh:c.offsetHeight}}}},isContained:function(a,b){var b=window.event||b;var d=b.relatedTarget||((b.type=="mouseover")?b.fromElement:b.toElement);while(d&&d!=a){try{d=d.parentNode}catch(b){d=a}}if(d==a){return true}else{return false}},addpointer:function(d,f,a,c){var e=document.createElement("img");e.src=a[0];e.style.width=a[1]+"px";e.style.height=a[2]+"px";if(f=="FrontColumn_navigation01_rightarrowpointer"){e.style.left=d.offsetWidth-a[2]-2+"px"}e.className=f;var b=d.childNodes[d.firstChild.nodeType!=1?1:0];if(b&&b.tagName=="SPAN"){d=b}if(c=="before"){d.insertBefore(e,d.firstChild)}else{d.appendChild(e)}},css:function(b,a,c){var d=new RegExp("(^|\\s+)"+a+"($|\\s+)","ig");if(c=="check"){return d.test(b.className)}else{if(c=="remove"){b.className=b.className.replace(d,"")}else{if(c=="add"&&!d.test(b.className)){b.className+=" "+a}}}},addshimmy:function(b){var c=(!window.opera)?document.createElement("iframe"):document.createElement("div");c.className="FrontColumn_navigation01_ddiframeshim";c.setAttribute("src",location.protocol=="https:"?this.httpsiframesrc:"about:blank");c.setAttribute("frameborder","0");b.appendChild(c);try{c.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"}catch(a){}return c},positionshim:function(g,c,a,f,e){if(g._istoplevel){var e=window.pageYOffset?window.pageYOffset:this.standardbody.scrollTop;var d=g._offsets.top-e;var b=e+this.docheight-g._offsets.top-g._dimensions.h;if(d>0){this.shimmy.topshim.style.left=f+"px";this.shimmy.topshim.style.top=e+"px";this.shimmy.topshim.style.width="99%";this.shimmy.topshim.style.height=d+"px"}if(b>0){this.shimmy.bottomshim.style.left=f+"px";this.shimmy.bottomshim.style.top=g._offsets.top+g._dimensions.h+"px";this.shimmy.bottomshim.style.width="99%";this.shimmy.bottomshim.style.height=b+"px"}}},hideshim:function(){this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0;this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0},buildmenu:function(d,f,c,e,a,b){f._master=d;f._pos=e;f._istoplevel=a;if(a){this.addEvent(f,function(g){FrontColumns_navigation01.ddlevelsmenu.hidemenu(FrontColumns_navigation01.ddlevelsmenu.subuls[this._master][parseInt(this._pos)])},"click")}this.subuls[d][e]=c;f._dimensions={w:f.offsetWidth,h:f.offsetHeight,submenuw:c.offsetWidth,submenuh:c.offsetHeight};this.getoffsetof(f);c.style.visibility="hidden";this.addEvent(f,function(j){if(!FrontColumns_navigation01.ddlevelsmenu.isContained(this,j)){var h=FrontColumns_navigation01.ddlevelsmenu.subuls[this._master][parseInt(this._pos)];if(this._istoplevel){FrontColumns_navigation01.ddlevelsmenu.css(this,"selected","add");clearTimeout(FrontColumns_navigation01.ddlevelsmenu.hidetimers[this._master][this._pos])}FrontColumns_navigation01.ddlevelsmenu.getoffsetof(f);var l=window.pageXOffset?window.pageXOffset:FrontColumns_navigation01.ddlevelsmenu.standardbody.scrollLeft;var i=window.pageYOffset?window.pageYOffset:FrontColumns_navigation01.ddlevelsmenu.standardbody.scrollTop;var n=this._offsets.left+this._dimensions.submenuw+(this._istoplevel&&b=="topbar"?0:this._dimensions.w);var g=this._offsets.top+this._dimensions.submenuh;var m=(this._istoplevel?this._offsets.left+(b=="sidebar"?this._dimensions.w:0):this._dimensions.w);if(n-l>FrontColumns_navigation01.ddlevelsmenu.docwidth){m+=-this._dimensions.submenuw+(this._istoplevel&&b=="topbar"?this._dimensions.w:-this._dimensions.w)}h.style.left=m+"px";var k=(this._istoplevel?this._offsets.top+(b=="sidebar"?0:this._dimensions.h):this.offsetTop);if(g-i>FrontColumns_navigation01.ddlevelsmenu.docheight){if(this._dimensions.submenuh<this._offsets.top+(b=="sidebar"?this._dimensions.h:0)-i){k+=-this._dimensions.submenuh+(this._istoplevel&&b=="topbar"?-this._dimensions.h:this._dimensions.h)}else{k+=-(this._offsets.top-i)+(this._istoplevel&&b=="topbar"?-this._dimensions.h:0)}}h.style.top=k+"px";if(FrontColumns_navigation01.ddlevelsmenu.enableshim&&(FrontColumns_navigation01.ddlevelsmenu.effects.enableswipe==false||FrontColumns_navigation01.ddlevelsmenu.nonFF)){FrontColumns_navigation01.ddlevelsmenu.positionshim(f,h,b,l,i)}else{h.FFscrollInfo={x:l,y:i}}FrontColumns_navigation01.ddlevelsmenu.showmenu(f,h,b)}},"mouseover");this.addEvent(f,function(h){var g=FrontColumns_navigation01.ddlevelsmenu.subuls[this._master][parseInt(this._pos)];if(this._istoplevel){if(!FrontColumns_navigation01.ddlevelsmenu.isContained(this,h)&&!FrontColumns_navigation01.ddlevelsmenu.isContained(g,h)){FrontColumns_navigation01.ddlevelsmenu.hidemenu(g)}}else{if(!this._istoplevel&&!FrontColumns_navigation01.ddlevelsmenu.isContained(this,h)){FrontColumns_navigation01.ddlevelsmenu.hidemenu(g)}}},"mouseout")},setopacity:function(a,b){a.style.opacity=b;if(typeof a.style.opacity!="string"){a.style.MozOpacity=b;if(a.filters){a.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+b*100+")"}}},showmenu:function(d,b,a){if(this.effects.enableswipe||this.effects.enablefade){if(this.effects.enableswipe){var c=(d._istoplevel&&a=="topbar")?d._dimensions.submenuh:d._dimensions.submenuw;b.style.width=b.style.height=0;b.style.overflow="hidden"}if(this.effects.enablefade){this.setopacity(b,0)}b._curanimatedegree=0;b.style.visibility="visible";clearInterval(b._animatetimer);b._starttime=new Date().getTime();b._animatetimer=setInterval(function(){FrontColumns_navigation01.ddlevelsmenu.revealmenu(d,b,c,a)},10)}else{b.style.visibility="visible"}},revealmenu:function(e,c,d,b){var a=new Date().getTime()-c._starttime;if(a<this.effects.duration){if(this.effects.enableswipe){if(c._curanimatedegree==0){c.style[e._istoplevel&&b=="topbar"?"width":"height"]="auto"}c.style[e._istoplevel&&b=="topbar"?"height":"width"]=(c._curanimatedegree*d)+"px"}if(this.effects.enablefade){this.setopacity(c,c._curanimatedegree)}}else{clearInterval(c._animatetimer);if(this.effects.enableswipe){c.style.width="auto";c.style.height="auto";c.style.overflow="visible"}if(this.effects.enablefade){this.setopacity(c,1);c.style.filter=""}if(this.enableshim&&c.FFscrollInfo){this.positionshim(e,c,b,c.FFscrollInfo.x,c.FFscrollInfo.y)}}c._curanimatedegree=(1-Math.cos((a/this.effects.duration)*Math.PI))/2},hidemenu:function(a){if(typeof a._pos!="undefined"){this.css(this.topitems[a._master][parseInt(a._pos)],"selected","remove");if(this.enableshim){this.hideshim()}}clearInterval(a._animatetimer);a.style.visibility="hidden"},addEvent:function(b,c,a){if(b.addEventListener){b.addEventListener(a,c,false)}else{if(b.attachEvent){b.attachEvent("on"+a,function(){return c.call(b,window.event)})}}},domready:function(a){if(dd_domreadycheck){a();return}if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);a();dd_domreadycheck=true},false)}else{if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top){(function(){if(dd_domreadycheck){a();return}try{document.documentElement.doScroll("left")}catch(b){setTimeout(arguments.callee,0);return}a();dd_domreadycheck=true})()}}}if(document.attachEvent&&parent.length>0){this.addEvent(window,function(){a()},"load")}},init:function(b,e){this.standardbody=(document.compatMode=="CSS1Compat")?document.documentElement:document.body;this.topitemsindex=-1;this.ulindex=-1;this.topmenuids.push(b);this.topitems[b]=[];this.subuls[b]=[];this.hidetimers[b]=[];if(this.enableshim&&!this.shimadded){this.shimmy={};this.shimmy.topshim=this.addshimmy(document.body);this.shimmy.bottomshim=this.addshimmy(document.body);this.shimadded=true}var j=document.getElementById(b);var d=j.getElementsByTagName("a");this.getwindowsize();for(var g=0;g<d.length;g++){if(d[g].getAttribute("rel")){this.topitemsindex++;this.ulindex++;var l=d[g];this.topitems[b][this.topitemsindex]=l;var m=document.getElementById(l.getAttribute("rel"));m.style.zIndex=2000;m._master=b;m._pos=this.topitemsindex;this.addEvent(m,function(){FrontColumns_navigation01.ddlevelsmenu.hidemenu(this)},"click");var n=(e=="sidebar")?"FrontColumn_navigation01_rightarrowpointer":"FrontColumn_navigation01_downarrowpointer";var h=(e=="sidebar")?this.arrowpointers.rightarrow:this.arrowpointers.downarrow;if(this.arrowpointers.showarrow.toplevel){this.addpointer(l,n,h,(e=="sidebar")?"before":"after")}this.buildmenu(b,l,m,this.ulindex,true,e);m.onmouseover=function(){clearTimeout(FrontColumns_navigation01.ddlevelsmenu.hidetimers[this._master][this._pos])};this.addEvent(m,function(i){if(!FrontColumns_navigation01.ddlevelsmenu.isContained(this,i)&&!FrontColumns_navigation01.ddlevelsmenu.isContained(FrontColumns_navigation01.ddlevelsmenu.topitems[this._master][parseInt(this._pos)],i)){var c=this;if(FrontColumns_navigation01.ddlevelsmenu.enableshim){FrontColumns_navigation01.ddlevelsmenu.hideshim()}FrontColumns_navigation01.ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){FrontColumns_navigation01.ddlevelsmenu.hidemenu(c)},FrontColumns_navigation01.ddlevelsmenu.hideinterval)}},"mouseout");var f=m.getElementsByTagName("ul");for(var k=0;k<f.length;k++){this.ulindex++;var a=f[k].parentNode;if(this.arrowpointers.showarrow.sublevel){this.addpointer(a.getElementsByTagName("a")[0],"FrontColumn_navigation01_rightarrowpointer",this.arrowpointers.rightarrow,"before")}this.buildmenu(b,a,f[k],this.ulindex,false,e)}}}this.addEvent(window,function(){FrontColumns_navigation01.ddlevelsmenu.getwindowsize();FrontColumns_navigation01.ddlevelsmenu.gettopitemsdimensions()},"resize")}},d2ddlevelsmenu:{enableshim:false,arrowpointers:{downarrow:["../images/columns/arrow-down.gif",11,7],rightarrow:["../images/columns/nav-arrow-03.gif",7,10],showarrow:{toplevel:false,sublevel:true}},hideinterval:200,effects:{enableswipe:true,enablefade:true,duration:200},httpsiframesrc:"blank.htm",topmenuids:[],topitems:{},subuls:{},lastactivesubul:{},topitemsindex:-1,ulindex:-1,hidetimers:{},shimadded:false,nonFF:!/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent),getoffset:function(b,a){return(b.offsetParent)?b[a]+this.getoffset(b.offsetParent,a):b[a]},getoffsetof:function(a){a._offsets={left:this.getoffset(a,"offsetLeft"),top:this.getoffset(a,"offsetTop")}},getwindowsize:function(){this.docwidth=window.innerWidth?window.innerWidth-10:this.standardbody.clientWidth-10;this.docheight=window.innerHeight?window.innerHeight-15:this.standardbody.clientHeight-18},gettopitemsdimensions:function(){for(var a=0;a<this.topmenuids.length;a++){var d=this.topmenuids[a];for(var b=0;b<this.topitems[d].length;b++){var e=this.topitems[d][b];var c=document.getElementById(e.getAttribute("rel"));e._dimensions={w:e.offsetWidth,h:e.offsetHeight,submenuw:c.offsetWidth,submenuh:c.offsetHeight}}}},isContained:function(a,b){var b=window.event||b;var d=b.relatedTarget||((b.type=="mouseover")?b.fromElement:b.toElement);while(d&&d!=a){try{d=d.parentNode}catch(b){d=a}}if(d==a){return true}else{return false}},addpointer:function(d,f,a,c){var e=document.createElement("img");e.src=a[0];e.style.width=a[1]+"px";e.style.height=a[2]+"px";if(f=="rightarrowpointer"){e.style.left=d.offsetWidth-a[2]-2+"px"}e.className=f;var b=d.childNodes[d.firstChild.nodeType!=1?1:0];if(b&&b.tagName=="SPAN"){d=b}if(c=="before"){d.insertBefore(e,d.firstChild)}else{d.appendChild(e)}},css:function(b,a,c){var d=new RegExp("(^|\\s+)"+a+"($|\\s+)","ig");if(c=="check"){return d.test(b.className)}else{if(c=="remove"){b.className=b.className.replace(d,"")}else{if(c=="add"&&!d.test(b.className)){b.className+=" "+a}}}},addshimmy:function(b){var c=(!window.opera)?document.createElement("iframe"):document.createElement("div");c.className="ddiframeshim";c.setAttribute("src",location.protocol=="https:"?this.httpsiframesrc:"about:blank");c.setAttribute("frameborder","0");b.appendChild(c);try{c.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"}catch(a){}return c},positionshim:function(g,c,a,f,e){if(g._istoplevel){var e=window.pageYOffset?window.pageYOffset:this.standardbody.scrollTop;var d=g._offsets.top-e;var b=e+this.docheight-g._offsets.top-g._dimensions.h;if(d>0){this.shimmy.topshim.style.left=f+"px";this.shimmy.topshim.style.top=e+"px";this.shimmy.topshim.style.width="99%";this.shimmy.topshim.style.height=d+"px"}if(b>0){this.shimmy.bottomshim.style.left=f+"px";this.shimmy.bottomshim.style.top=g._offsets.top+g._dimensions.h+"px";this.shimmy.bottomshim.style.width="99%";this.shimmy.bottomshim.style.height=b+"px"}}},hideshim:function(){this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0;this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0},buildmenu:function(d,f,c,e,a,b){f._master=d;f._pos=e;f._istoplevel=a;if(a){this.addEvent(f,function(g){FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(FrontColumns_navigation01.d2ddlevelsmenu.subuls[this._master][parseInt(this._pos)])},"click")}this.subuls[d][e]=c;f._dimensions={w:f.offsetWidth,h:f.offsetHeight,submenuw:c.offsetWidth,submenuh:c.offsetHeight};this.getoffsetof(f);c.style.visibility="hidden";this.addEvent(f,function(j){if(!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this,j)){var h=FrontColumns_navigation01.d2ddlevelsmenu.subuls[this._master][parseInt(this._pos)];if(this._istoplevel){FrontColumns_navigation01.d2ddlevelsmenu.css(this,"selected","add");clearTimeout(FrontColumns_navigation01.d2ddlevelsmenu.hidetimers[this._master][this._pos])}FrontColumns_navigation01.d2ddlevelsmenu.getoffsetof(f);var l=window.pageXOffset?window.pageXOffset:FrontColumns_navigation01.d2ddlevelsmenu.standardbody.scrollLeft;var i=window.pageYOffset?window.pageYOffset:FrontColumns_navigation01.d2ddlevelsmenu.standardbody.scrollTop;var n=this._offsets.left+this._dimensions.submenuw+(this._istoplevel&&b=="topbar"?0:this._dimensions.w);var g=this._offsets.top+this._dimensions.submenuh;var m=(this._istoplevel?this._offsets.left+(b=="sidebar"?this._dimensions.w:0):this._dimensions.w);if(n-l>FrontColumns_navigation01.d2ddlevelsmenu.docwidth){m+=-this._dimensions.submenuw+(this._istoplevel&&b=="topbar"?this._dimensions.w:-this._dimensions.w)}h.style.left=m+"px";var k=(this._istoplevel?this._offsets.top+(b=="sidebar"?0:this._dimensions.h):this.offsetTop);if(g-i>FrontColumns_navigation01.d2ddlevelsmenu.docheight){if(this._dimensions.submenuh<this._offsets.top+(b=="sidebar"?this._dimensions.h:0)-i){k+=-this._dimensions.submenuh+(this._istoplevel&&b=="topbar"?-this._dimensions.h:this._dimensions.h)}else{k+=-(this._offsets.top-i)+(this._istoplevel&&b=="topbar"?-this._dimensions.h:0)}}h.style.top=k+"px";if(FrontColumns_navigation01.d2ddlevelsmenu.enableshim&&(FrontColumns_navigation01.d2ddlevelsmenu.effects.enableswipe==false||FrontColumns_navigation01.d2ddlevelsmenu.nonFF)){FrontColumns_navigation01.d2ddlevelsmenu.positionshim(f,h,b,l,i)}else{h.FFscrollInfo={x:l,y:i}}FrontColumns_navigation01.d2ddlevelsmenu.showmenu(f,h,b)}},"mouseover");this.addEvent(f,function(h){var g=FrontColumns_navigation01.d2ddlevelsmenu.subuls[this._master][parseInt(this._pos)];if(this._istoplevel){if(!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this,h)&&!FrontColumns_navigation01.d2ddlevelsmenu.isContained(g,h)){FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(g)}}else{if(!this._istoplevel&&!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this,h)){FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(g)}}},"mouseout")},setopacity:function(a,b){a.style.opacity=b;if(typeof a.style.opacity!="string"){a.style.MozOpacity=b;if(a.filters){a.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+b*100+")"}}},showmenu:function(d,b,a){if(this.effects.enableswipe||this.effects.enablefade){if(this.effects.enableswipe){var c=(d._istoplevel&&a=="topbar")?d._dimensions.submenuh:d._dimensions.submenuw;b.style.width=b.style.height=0;b.style.overflow="hidden"}if(this.effects.enablefade){this.setopacity(b,0)}b._curanimatedegree=0;b.style.visibility="visible";clearInterval(b._animatetimer);b._starttime=new Date().getTime();b._animatetimer=setInterval(function(){FrontColumns_navigation01.d2ddlevelsmenu.revealmenu(d,b,c,a)},10)}else{b.style.visibility="visible"}},revealmenu:function(e,c,d,b){var a=new Date().getTime()-c._starttime;if(a<this.effects.duration){if(this.effects.enableswipe){if(c._curanimatedegree==0){c.style[e._istoplevel&&b=="topbar"?"width":"height"]="auto"}c.style[e._istoplevel&&b=="topbar"?"height":"width"]=(c._curanimatedegree*d)+"px"}if(this.effects.enablefade){this.setopacity(c,c._curanimatedegree)}}else{clearInterval(c._animatetimer);if(this.effects.enableswipe){c.style.width="auto";c.style.height="auto";c.style.overflow="visible"}if(this.effects.enablefade){this.setopacity(c,1);c.style.filter=""}if(this.enableshim&&c.FFscrollInfo){this.positionshim(e,c,b,c.FFscrollInfo.x,c.FFscrollInfo.y)}}c._curanimatedegree=(1-Math.cos((a/this.effects.duration)*Math.PI))/2},hidemenu:function(a){if(typeof a._pos!="undefined"){this.css(this.topitems[a._master][parseInt(a._pos)],"selected","remove");if(this.enableshim){this.hideshim()}}clearInterval(a._animatetimer);a.style.visibility="hidden"},addEvent:function(b,c,a){if(b.addEventListener){b.addEventListener(a,c,false)}else{if(b.attachEvent){b.attachEvent("on"+a,function(){return c.call(b,window.event)})}}},init:function(b,e){this.standardbody=(document.compatMode=="CSS1Compat")?document.documentElement:document.body;this.topitemsindex=-1;this.ulindex=-1;this.topmenuids.push(b);this.topitems[b]=[];this.subuls[b]=[];this.hidetimers[b]=[];if(this.enableshim&&!this.shimadded){this.shimmy={};this.shimmy.topshim=this.addshimmy(document.body);this.shimmy.bottomshim=this.addshimmy(document.body);this.shimadded=true}var j=document.getElementById(b);var d=j.getElementsByTagName("a");this.getwindowsize();for(var g=0;g<d.length;g++){if(d[g].getAttribute("rel")){this.topitemsindex++;this.ulindex++;var l=d[g];this.topitems[b][this.topitemsindex]=l;var m=document.getElementById(l.getAttribute("rel"));m.style.zIndex=2000;m._master=b;m._pos=this.topitemsindex;this.addEvent(m,function(){FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(this)},"click");var n=(e=="sidebar")?"rightarrowpointer":"downarrowpointer";var h=(e=="sidebar")?this.arrowpointers.rightarrow:this.arrowpointers.downarrow;if(this.arrowpointers.showarrow.toplevel){this.addpointer(l,n,h,(e=="sidebar")?"before":"after")}this.buildmenu(b,l,m,this.ulindex,true,e);m.onmouseover=function(){clearTimeout(FrontColumns_navigation01.d2ddlevelsmenu.hidetimers[this._master][this._pos])};this.addEvent(m,function(i){if(!FrontColumns_navigation01.d2ddlevelsmenu.isContained(this,i)&&!FrontColumns_navigation01.d2ddlevelsmenu.isContained(FrontColumns_navigation01.d2ddlevelsmenu.topitems[this._master][parseInt(this._pos)],i)){var c=this;if(FrontColumns_navigation01.d2ddlevelsmenu.enableshim){FrontColumns_navigation01.d2ddlevelsmenu.hideshim()}FrontColumns_navigation01.d2ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){FrontColumns_navigation01.d2ddlevelsmenu.hidemenu(c)},FrontColumns_navigation01.d2ddlevelsmenu.hideinterval)}},"mouseout");var f=m.getElementsByTagName("ul");for(var k=0;k<f.length;k++){this.ulindex++;var a=f[k].parentNode;if(this.arrowpointers.showarrow.sublevel){this.addpointer(a.getElementsByTagName("a")[0],"rightarrowpointer",this.arrowpointers.rightarrow,"before")}this.buildmenu(b,a,f[k],this.ulindex,false,e)}}}this.addEvent(window,function(){FrontColumns_navigation01.d2ddlevelsmenu.getwindowsize();FrontColumns_navigation01.d2ddlevelsmenu.gettopitemsdimensions()},"resize")}},nativeMenu:function(b){var a;jQuery(document).ready(function(e){a=screen.width;var c=e("#"+b+">ul");var d=c.find("ul").parent();d.each(function(g){var h=e(this);var f=e(this).find("ul:eq(0)");this._dimensions={w:this.offsetWidth,h:this.offsetHeight,subulw:f.outerWidth(),subulh:f.outerHeight()};this.istopheader=h.parents("ul").length==1?true:false;h.hover(function(l){var j=e(this).children("ul:eq(0)");_offsets={left:e(this).offset().left,top:e(this).offset().top};if(e(this).parents("ul").length==1){e(this).attr("class","current")}var m=this.istopheader?0:this._dimensions.w;var k=j.find("li");k.each(function(n){if(e(this).children("ul").length!=0){if(_offsets.left+m+this._dimensions.subulw*2>a){e(this).children("a").attr("class","has-left")}else{e(this).children("a").attr("class","has-right")}}});if(_offsets.left+m+this._dimensions.subulw*2>a){j.addClass(j.parents("ul").length==1||j.parents("ul").attr("class").indexOf("left-slid")!=-1?"left-slid":"left-forward")}e(this).attr("style",j.parents("ul").length==1?"position:relative;z-index:12;":"position:relative;");var i=e(this).children("a").attr("class");if(i!=undefined){if(i.indexOf("left")!=-1){e(this).children("a").addClass(" left-current")}else{if(i.indexOf("right")!=-1){e(this).children("a").addClass(" right-current")}}}e(this).find("ul").attr("style","visibility:visible");e(this).children("ul:eq(0)").find("ul").attr("style","visibility:hidden")},function(i){e(this).children("a").removeClass("right-current");e(this).children("a").removeClass("left-current");e(this).removeClass("current");e(this).find("ul").attr("style","visibility:hidden")})})})}};$(document).ready(function(){var a=null;function b(){if(a){return}a=setInterval(function(){$("#feature li.current a span").animate({top:"-55px"},"fast");$("#feature li.current a p").animate({top:"-55px"},"fast")},200)}function c(){if(!a){return}$("#feature li.current a span").animate({top:"0px"},"fast");$("#feature li.current a p").animate({top:"0px"},"fast");$("#feature li.current").removeClass("current");clearInterval(a);a=null}$("#feature li").hover(function(){$(this).addClass("current");b()},c)});var FrontComContent_detail01={showHTML:function(b,a,c){jQuery("#"+b+" ."+a).hide();jQuery("#"+b+" #"+c).show()}};var FrontComContent_list01={alternate:function(a){$("#"+a+" h5").each(function(b){$(this).toggle(function(){$("#"+a+"UL"+b).hide();$(this).find(":first-child").attr("src","../../images/comcontent/2.jpg")},function(){$("#"+a+"UL"+b).show();$(this).find(":first-child").attr("src","../../images/comcontent/1.jpg")})})},getUrlParam:function(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");var c=window.location.toString().match(b);if(c!=null){return unescape(c[2])}return null},d1extContainCategoryAlternate:function(b){var a=this.getUrlParam(b+"CurrentIds");var c="3";if(a==null){a=this.getUrlParam(b+"ContId");c="2";if(a==null){a=this.getUrlParam("c");c="1"}}var e="";var d="";if(a!=null){if(c=="1"){e=this.getUrlParam("i");if(e!=null){e=e.replace(".html","")}d="comContent_"+a}else{e=this.getUrlParam("comContentId");if(e!=null){e=e.replace(".html","")}var f=a.indexOf("__");d="comContent_"+a.substring(0,f)}$("#"+b+" #comContent2_"+e).addClass("current")}else{d=$("#"+b+" .menu-first ul li:first a:first").attr("id");e=$("#"+b+" .menu-first ul li:first ul li:first a").attr("id");$("#"+b+" #"+e).addClass("current")}$("#"+b+" #"+d).addClass("current");$("#"+b+" #"+d+"_second").show();$("#"+b+" .menu-first ul li a.menu-text1").click(function(){if($(this).attr("id")==d){if(!$(this).parent().hasClass("menu-none")){if($("#"+b+" #"+d+"_second").is(":hidden")){$(this).removeClass("current2");$(this).addClass("current");$("#"+b+" #"+d+"_second").show()}else{$(this).removeClass("current");$(this).addClass("current2");$("#"+b+" #"+d+"_second").hide()}}}else{$("#"+b+" #"+d).removeClass("current current2");if(!$("#"+b+" #"+d).parent().hasClass("menu-none")){$("#"+b+" #"+d+"_second").hide()}$(this).addClass("current");d=$(this).attr("id");if(!$(this).parent().hasClass("menu-none")){if(!$("#"+b+" #"+d+"_second").find("a").hasClass("current")){$("#"+b+" #"+d+"_second").find("a:first").addClass("current")}$("#"+b+" #"+d+"_second").show()}}});$("#"+b+" .menu-second ul li a.menu-text2").click(function(){$(this).parent().parent().find("a").removeClass("current");$(this).addClass("current")})},d1extNoContainCategoryAlternate:function(a){var b=this.getUrlParam("comContentId");if(b==null){b=this.getUrlParam("i");if(b!=null){b=b.replace(".html","")}}else{b=b.replace(".html","")}if(b==null){$("#"+a+" .menu-first ul li:first a").addClass("current")}else{$("#"+a+" #comContent_"+b).addClass("current");$("#"+a+" #comContent2_"+b).addClass("current")}$("#"+a+" .menu-first ul li a.menu-text1").click(function(){$("#"+a+" .menu-first ul li a.menu-text1").removeClass("current");$(this).addClass("current")})}};