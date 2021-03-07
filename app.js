"use strict";const Os={isWindows:navigator.platform.toUpperCase().includes("WIN"),isMac:navigator.platform.toUpperCase().includes("MAC"),isMacLike:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),isIos:/(iPhone|iPod|iPad)/i.test(navigator.platform),isMobile:/Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};let imageUrls=[];function preloadImages(t){for(let e=0,i=t.length;e<i;e++)window[`index_${e}`]=0,window[`index_${e}`]=new Image,window[`index_${e}`].onload=(()=>{}),window[`index_${e}`].crossOrigin="",window[`index_${e}`].src=t[e]}function init(){document.siteName=$("title").html(),$("body").addClass(`mdui-theme-primary-${UI.main_color} mdui-theme-accent-${UI.accent_color}`);$("body").html('\n\t<nav id="nav-warp" style="display:flex;justify-content:center">\n\t\t<div id="nav" class="mdui-appbar mdui-container mdui-toolbar mdui-text-color-white-text" style="box-shadow: none"></div>\n\t</nav>\n\t<div id="folderPath" class="mdui-container"></div>\n\t<div id="content" class="mdui-container"></div>\n\t<div id="folderIMGElement" style="position: absolute;max-width: 300px;left: 0px; top: 0px; z-index: 999;">\n\t\t<div class="mdui-card-media">\n\t\t\t<img id="folderIMGElementSrc" crossorigin="anonymous" src="">\n\t\t</div>\n\t</div>'),/(WIN|Mac)/i.test(navigator.userAgent)&&$(()=>{const t=$("#folderIMGElement");t.hide(),$(document).mousemove(e=>{t.css({left:`${e.pageX+25}px`,top:`${e.pageY+25}px`})}),$(window).on("scroll",function(){t.hide()})}),$(window).on("scroll",function(){$(window).scrollTop()>0?$("#nav").css({position:"fixed"}):0===$(window).scrollTop()&&$("#nav").css({position:"static"})})}function getDocumentHeight(){let t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)}function render(t){t.indexOf("?")>0&&(t=t.substr(0,t.indexOf("?"))),title(t),nav(t);window.MODEL.is_search_page?(window.scroll_status={event_bound:!1,loading_lock:!1},render_search_result_list()):t.match(/\/\d+:$/g)||"/"==t.substr(-1)?(window.scroll_status={event_bound:!1,loading_lock:!1},list(t)):file(t)}function title(t){t=decodeURI(t);let e=window.current_drive_order||0,i=window.drive_names[e],n=window.MODEL;t=t.replace(`/${e}:`,""),$("title").html(`${document.siteName} - ${t}`),n.is_search_page?$("title").html(`${document.siteName} - ${i} - 搜尋 ${n.q} 的結果`):$("title").html(`${document.siteName} - ${i} - ${t}`),$("title").html(`${document.siteName}`)}function nav(t){let e=window.MODEL,i="",n=window.current_drive_order||0;i+=`<a href="/${n}:/" id="nav-title" class="mdui-typo-headline folder">${document.siteName}</a>`;let l=`當前位置： <a class="folder" href="/${n}:/">主目錄</a>`;if(!e.is_search_page){let e=t.trim("/").split("/"),i="/";if(e.length>1){e.shift();for(let t in e){let a=e[t];if(i+=`${a=decodeURI(a)}/`,""==a||/md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv/.test(a))break;l+=`<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="/${n}:${i}">${a}</a>`}}}$("#folderPath").html(l),i+=`<div class="mdui-toolbar-spacer"></div>\n\t\t<div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right mdui-textfield-expanded">\n\t\t\t<form id="search_bar_form" method="get" action="/${n}:search">\n\t\t\t\t<input class="mdui-textfield-input" type="text" name="q" autocomplete ="off" placeholder="搜尋" value="${e.is_search_page&&e.q||""}"/>\n\t\t\t</form>\n\t\t\t<button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();">\n\t\t\t\t<i class="mdui-icon material-icons">search</i>\n\t\t\t</button>\n\t\t</div>`,$("#nav").html(i),mdui.mutation(),mdui.updateTextFields()}function requestListPath(t,e,i,n){let l={password:e.password||null,page_token:e.page_token||null,page_index:e.page_index||0};$.post(t,l,(e,a)=>{let d=jQuery.parseJSON(e);d&&d.error&&"401"==d.error.code?n&&n(t):d&&d.data&&i&&i(d,t,l)})}function requestSearch(t,e){let i={q:t.q||null,page_token:t.page_token||null,page_index:t.page_index||0};$.post(`/${window.current_drive_order}:search`,i,(t,n)=>{let l=jQuery.parseJSON(t);l&&l.data&&e&&e(l,i)})}function list(t){let e=null;$("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t\t<div class="mdui-row">\n\t\t\t<ul class="mdui-list">\n\t\t\t<li class="mdui-list-item th">\n\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-10">\n\t\t\t\t\t檔案名稱\n\t\t\t\t\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t\t\t\t</div>\n\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">\n\t\t\t\t\t檔案大小\n\t\t\t\t\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class="mdui-row">\n\t\t<ul id="list" class="mdui-list">\n\t\t</ul>\n\t\t<div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項<br>Discord：NekoChan#2851<br><a id="back-to-top" href="#">返回頂部</a></div>\n\t</div>\n\t<div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>');let i=localStorage.getItem(`password${t}`);$("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'),$("#readme_md").hide().html(""),$("#head_md").hide().html(""),requestListPath(t,{password:i},function t(i,n,l){$("#list").data("nextPageToken",i.nextPageToken).data("curPageIndex",i.curPageIndex),$("#spinner").remove(),null===i.nextPageToken?($(window).off("scroll"),window.scroll_status.event_bound=!1,window.scroll_status.loading_lock=!1,append_files_to_list(n,i.data.files),preloadImages(imageUrls),$(".clickFolder").hover(function(){e=`${this.querySelector("a.folder").href}封面.webp`,$("#folderIMGElementSrc").attr("src",e),$("#folderIMGElement").show()},()=>{$("#folderIMGElementSrc").attr("src",""),$("#folderIMGElement").hide()})):(append_files_to_list(n,i.data.files),preloadImages(imageUrls),$(".clickFolder").hover(function(){e=`${this.querySelector("a.folder").href}封面.webp`,$("#folderIMGElementSrc").attr("src",e),$("#folderIMGElement").show()},()=>{$("#folderIMGElementSrc").attr("src",""),$("#folderIMGElement").hide()}),!0!==window.scroll_status.event_bound&&($(window).on("scroll",function(){let e=$(this).scrollTop(),i=getDocumentHeight();if(e+$(this).height()>i-(Os.isMobile?130:80)){if(!0===window.scroll_status.loading_lock)return;window.scroll_status.loading_lock=!0,$('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),mdui.updateSpinners();let e=$("#list");requestListPath(n,{password:l.password,page_token:e.data("nextPageToken"),page_index:e.data("curPageIndex")+1},t,null)}}),window.scroll_status.event_bound=!0)),!0===window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!1)},t=>{$("#spinner").remove();let e=prompt("目錄加密, 請輸入密碼","");localStorage.setItem(`password${t}`,e),null!=e&&""!=e?list(t):history.go(-1)})}function append_files_to_list(t,e){let i=$("#list"),n=null===i.data("nextPageToken"),l="0"==i.data("curPageIndex"),a=0,d="",o=[],s="";for(let i in e){let l=e[i],r=`${t+l.name}/`;if(null==l.size&&(l.size=""),l.size=formatFileSize(l.size),"application/vnd.google-apps.folder"==l.mimeType)/連載中/.test(l.name)?(s="updating",imageUrls.push(`${r}%E5%B0%81%E9%9D%A2.webp`)):/完結/.test(l.name)?(s="finish",imageUrls.push(`${r}%E5%B0%81%E9%9D%A2.webp`)):s=/R18/.test(l.name)?"r18":"",d+=`<li class="mdui-list-item mdui-ripple mdui-shadow-2 clickFolder"><a href="${r}" class="folder">\n\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-10 mdui-text-truncate ${s}"><i class="mdui-icon material-icons">folder_open</i>${l.name}</div>\n\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right ${s}">${l.size}</div>\n\t\t\t\t</a>\n\t\t\t</li>`;else{let e=t+l.name,i="file";const s=t+l.name;if(n&&"!readme.md"==l.name){get_file(e,l,t=>{markdown("#readme_md",t)});continue}if("!head.md"==l.name){get_file(e,l,t=>{markdown("#head_md",t)});continue}switch(l.name){case"封面.webp":continue}let r=e.split(".").pop().toLowerCase();"|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".includes(`|${r}|`)&&(o.push(s),a++,e+="?a=view",i+=" view"),d+=`<li class="mdui-list-item file mdui-ripple mdui-shadow-2" target="_blank"><a gd-type="${l.mimeType}" href="${e}" class="${i}">\n\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-10 mdui-text-truncate">${a}.<i class="mdui-icon material-icons">insert_drive_file</i>${l.name}</div>\n\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">${l.size}</div>\n\t\t\t\t</a>\n\t\t\t</li>`}}if(o.length>0){let e=localStorage.getItem(t),i=o;if(!l&&e){let t;try{t=JSON.parse(e),Array.isArray(t)||(t=[])}catch(e){t=[]}i=t.concat(o)}localStorage.setItem(t,JSON.stringify(i))}i.html(("0"==i.data("curPageIndex")?"":i.html())+d),n&&$("#count").removeClass("mdui-hidden").find(".number").text(i.find("li.mdui-list-item").length)}function render_search_result_list(){let t=null,e=window.current_drive_order;$("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t\t<div class="mdui-row">\n\t\t\t<ul class="mdui-list">\n\t\t\t\t<li class="mdui-list-item th">\n\t\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-10">\n\t\t\t\t\t\t檔案名稱\n\t\t\t\t\t\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">\n\t\t\t\t\t\t檔案大小\n\t\t\t\t\t\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t<div class="mdui-row">\n\t<ul id="list" class="mdui-list">\n\t</ul>\n\t<div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項<br>Discord：NekoChan#2851<br><a id="back-to-top" href="#">返回頂部</a></div>\n\t</div>\n\t<div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>'),$("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'),$("#readme_md").hide().html(""),$("#head_md").hide().html(""),requestSearch({q:window.MODEL.q},function i(n,l){$("#list").data("nextPageToken",n.nextPageToken).data("curPageIndex",n.curPageIndex),$("#spinner").remove(),null===n.nextPageToken?($(window).off("scroll"),window.scroll_status.event_bound=!1,window.scroll_status.loading_lock=!1,append_search_result_to_list(n.data.files),$(".clickFolder").hover(function(){$.post(`/${e}:id2path`,{id:this.querySelector("a.folder").id},i=>{i&&(t=`/${e}:${i}封面.webp`,$("#folderIMGElementSrc").attr("src",t),$("#folderIMGElement").show())})},()=>{$("#folderIMGElementSrc").attr("src",""),$("#folderIMGElement").hide()})):(append_search_result_to_list(n.data.files),$(".clickFolder").hover(function(){$.post(`/${e}:id2path`,{id:this.querySelector("a.folder").id},i=>{i&&(t=`/${e}:${i}封面.webp`,$("#folderIMGElementSrc").attr("src",t),$("#folderIMGElement").show())})},()=>{$("#folderIMGElementSrc").attr("src",""),$("#folderIMGElement").hide()}),!0!==window.scroll_status.event_bound&&($(window).on("scroll",function(){let t=$(this).scrollTop(),e=getDocumentHeight();if(t+$(this).height()>e-(Os.isMobile?130:80)){if(!0===window.scroll_status.loading_lock)return;window.scroll_status.loading_lock=!0,$('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),mdui.updateSpinners();let t=$("#list");requestSearch({q:window.MODEL.q,page_token:t.data("nextPageToken"),page_index:t.data("curPageIndex")+1},i)}}),window.scroll_status.event_bound=!0)),!0===window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!1)})}function append_search_result_to_list(t){let e=$("#list"),i=null===e.data("nextPageToken"),n="",l="";for(let e in t){let i=t[e];if(null==i.size&&(i.size=""),i.size=formatFileSize(i.size),"application/vnd.google-apps.folder"==i.mimeType)l=/連載中/.test(i.name)?"updating":/完結/.test(i.name)?"finish":/R18/.test(i.name)?"r18":"",n+=`<li class="mdui-list-item mdui-ripple mdui-shadow-2 clickFolder"><a id="${i.id}" onclick="onSearchResultItemClick(this)" class="folder">\n\t\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-10 mdui-text-truncate ${l}"><i class="mdui-icon material-icons">folder_open</i>${i.name}</div>\n\t\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right" ${l}>${i.size}</div>\n\t\t\t\t</a>\n\t\t\t</li>`;else{let t="file",e=i.name.split(".").pop().toLowerCase();switch(i.name){case"!head.md":case"封面.webp":continue}"|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".includes(`|${e}|`)&&(t+=" view"),n+=`<li class="mdui-list-item file mdui-ripple mdui-shadow-2" target="_blank"><a id="${i.id}" gd-type="${i.mimeType}" onclick="onSearchResultItemClick(this)" class="${t}">\n\t\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-10 mdui-text-truncate"><i class="mdui-icon material-icons">insert_drive_file</i>${i.name}</div>\n\t\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">${i.size}</div>\n\t\t\t\t</a>\n\t\t</li>`}}e.html(("0"==e.data("curPageIndex")?"":e.html())+n),i&&$("#count").removeClass("mdui-hidden").find(".number").text(e.find("li.mdui-list-item").length)}function onSearchResultItemClick(t){let e=$(t).hasClass("view"),i=window.current_drive_order,n=mdui.dialog({title:"",content:'<div class="mdui-text-center mdui-typo-title mdui-m-b-1">正在獲取路徑...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',history:!1,modal:!0,closeOnEsc:!0});mdui.updateSpinners(),$.post(`/${i}:id2path`,{id:t.id},t=>{if(t)return n.close(),void(window.location.href=`/${i}:${t}${e?"?a=view":""}`);n.close(),n=mdui.dialog({title:"獲取目標路徑失敗",content:"該資源可能已經移除，或已移動，請通知 NekoChan#2851 解決。",history:!1,modal:!0,closeOnEsc:!0,buttons:[{text:"確認"}]})})}function get_file(t,e,i){let n=`file_path_${t}`,l=localStorage.getItem(n);if(null!=l)return i(l);$.get(t,t=>{localStorage.setItem(n,t),i(t)})}function file(t){let e=t.split("/").pop().split(".").pop().toLowerCase().replace("?a=view","");"|mkv|".includes(`|${e}|`)&&file_mkv(t),"|mp4|webm|avi|mpg|mpeg|rm|rmvb|mov|wmv|asf|ts|flv|".includes(`|${e}|`)&&file_video(t),"|bmp|jpg|jpeg|png|gif|".includes(`|${e}|`)&&file_image(t)}function file_mkv(t){const e="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent",i=decodeURI(t.slice(t.lastIndexOf("/")+1,t.length));let n=decodeURI(window.location.origin+t),l="";if(/(WIN)/i.test(navigator.userAgent))l=`<a href="potplayer://${n}" class="${e} windows-btn">PotPlayer 串流</a>`;else if(/(Mac)/i.test(navigator.userAgent))l=`<button class="${e} mac-btn" data-href="iina://open?url=${n}">IINA 串流</button>`;else if(/(Android)/i.test(navigator.userAgent))l=`<button class="${e} android-btn" data-href="intent:${n}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end">MXPlayer Pro 串流</button>`,l+=`<br><button style="margin-top: 15px" class="${e} android-btn" data-href="intent:${n}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end">MXPlayer Free 串流</button>`;else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){l=`<a class="${e}" href="infuse://${url.replace(/(^\w+:|^)\/\//,"")}">Infuse 串流</a>`}let a=`\n\t<div class="mdui-container-fluid">\n\t\t<div class="mdui-textfield">\n\t\t\t<label class="mdui-textfield-label mdui-text-color-white">當前檔案：</label>\n\t\t\t<input class="mdui-textfield-input mdui-text-color-white" type="text" value="${i}" readonly/>\n\t\t</div>\n\t</div>\n\t<br>\n\t${l+=`<br><a style="margin-top: 15px" href="${n}" class="${e} download-btn">直連下載檔案</a>`}\n\t<div class="mdui-textfield">\n\t\t<label class="mdui-textfield-label mdui-text-color-white">偵測到檔案為 MKV ，MKV 格式不支援瀏覽器，請使用串流或下載。</label>\n\t</div>\n\t<hr>\n\t</div>`;$("#content").html(a)}function file_video(t){let e=decodeURI(window.location.origin+t),i="";const n=decodeURI(t.slice(t.lastIndexOf("/")+1,t.length)),l=window.location.pathname,a=l.lastIndexOf("/"),d=l.slice(0,a+1);let o=localStorage.getItem(d);if(o){try{o=JSON.parse(o),Array.isArray(o)||(o=[])}catch(t){console.error(t),o=[]}if(o.length>0&&o.includes(d+n)){let t=o.length,e=o.indexOf(d+n),l=e-1>-1?o[e-1]:null,a=e+1<t?o[e+1]:null;const s="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple";i=`\n\t\t\t<div class="mdui-container">\n\t\t\t\t<div class="mdui-row-xs-2 mdui-m-b-1">\n\t\t\t\t\t<div class="mdui-col">\n\t\t\t\t\t\t${l?`<button id="leftBtn" data-filepath="${l}" class="${s}">上一集</button>`:`<button class="${s}" disabled>上一集</button>`}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mdui-col">\n\t\t\t\t\t\t${a?`<button id="rightBtn"  data-filepath="${a}" class="${s}">下一集</button>`:`<button class="${s}" disabled>下一集</button>`}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`}}const s="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent";let r=`<a href="potplayer://${e}" class="${s} windows-btn">PotPlayer 串流</a>`,c="",m="",u="";if(Os.isMobile){if(u=`\n\t\t<video id="androidPlayer" src="${e}" controls="controls" style="width: 100%">您的瀏覽器不支援</video>\n\t\t`,/(Android)/i.test(navigator.userAgent))r=`<button class="${s} android-btn" data-href="intent:${e}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end">MXPlayer Pro 串流</button>`,r+=`<br><button style="margin-top: 15px" class="${s} android-btn" data-href="intent:${e}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end">MXPlayer Free 串流</button>`;else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){r=`<a class="${s}" href="infuse://${e.replace(/(^\w+:|^)\/\//,"")}">Infuse 串流</a>`}}else u='\n\t\t<div id="player" class="mdui-center"></div>\n\t\t<div id="screenshotPlayer"></div>\n\t\t',/(Mac)/i.test(navigator.userAgent)&&(r=`<button class="${s} mac-btn" data-href="iina://open?url=${e}">IINA 串流</button>`),null==localStorage.getItem("previewSwitch")&&localStorage.setItem("previewSwitch","false"),"false"==localStorage.getItem("previewSwitch")?m='<input id="previewSwitch" type="checkbox"/>':"true"==localStorage.getItem("previewSwitch")&&(m='<input id="previewSwitch" type="checkbox" checked/>'),c=`\n\t\t<span id="switchElement" style="float: right">\n\t\t\t<i class="mdui-icon material-icons">ondemand_video</i>\n\t\t\t<span class="mdui-list-item-content">進度條預覽圖</span>\n\t\t\t<label class="mdui-switch">\n\t\t\t\t${m}\n\t\t\t\t<i class="mdui-switch-icon"></i>\n\t\t\t</label>\n\t\t</span>\n\t\t`;let p=`\n\t<div class="mdui-container-fluid">\n\t\t<div class="mdui-textfield">\n\t\t\t<label class="mdui-textfield-label mdui-text-color-white">當前檔案：</label>\n\t\t\t<input class="mdui-textfield-input mdui-text-color-white" type="text" value="${n}" readonly/>\n\t\t</div>\n\t\t${u}\n\t\t<br>\n\t\t${i}\n\t</div>\n\t<br>\n\t${r+=`<br><a style="margin-top: 15px" href="${e}" class="${s} download-btn">直連下載檔案</a>`}\n\t${c}\n\t<div class="mdui-textfield">\n\t\t<label class="mdui-textfield-label mdui-text-color-white">注意：若影片沒有畫面，請嘗試播放器串流。或通知 Discord：NekoChan#2851。</label>\n\t</div>\n\t<hr>\n\t</div>`;$("#content").html(p),/(WIN|Mac)/i.test(navigator.userAgent)&&$(()=>{window.DPlayer||window.location.reload(),$("#previewSwitch").click(()=>{"true"==localStorage.getItem("previewSwitch")?(localStorage.setItem("previewSwitch","false"),window.location.reload()):"false"==localStorage.getItem("previewSwitch")&&(localStorage.setItem("previewSwitch","true"),window.location.reload())});const t=()=>{let i=0,n=.5,l=!1,a=null;"true"==localStorage.getItem("previewSwitch")?a=new DPlayer({container:$("#player")[0],theme:"#0080ff",autoplay:!0,lang:"zh-tw",mutex:!1,volume:.5,video:{url:e,thumbnails:"//cdn.jsdelivr.net/gh/NekoChanTaiwan/NekoChan-Open-Data@1.8.6.beta2/images/fake-thumbnails.webp"}}):"false"==localStorage.getItem("previewSwitch")&&(a=new DPlayer({container:$("#player")[0],theme:"#0080ff",autoplay:!0,lang:"zh-tw",mutex:!1,volume:.5,video:{url:e}})),0!=i&&a.seek(i),a.on("seeked",()=>{i=a.video.currentTime}),a.on("seeking",()=>{i=a.video.currentTime}),a.on("error",()=>{0!=a.video.currentTime&&(i=a.video.currentTime),t()}),a.on("ended",()=>{a.fullScreen.cancel("browser")}),a.on("loadedmetadata",()=>{const t=a.video.duration/10;$(window).unbind("keyup"),$(window).keyup(e=>{if(/Numpad/.test(e.code)){let i=Number(e.code[6]);a.seek(t*i)}else if(/Digit/.test(e.code)){let i=Number(e.code[5]);a.seek(t*i)}else if(/Key/.test(e.code))switch(e.code[3]){case"M":if(0==l){d(),a.volume(0,!0,!1),l=!0;break}if(1==l){a.volume(n,!0,!1),l=!1;break}case"X":$("#rightBtn").click();break;case"Z":$("#leftBtn").click();break;case"F":$(".dplayer-icon.dplayer-full-icon").click()}})});const d=()=>{let t=`${String($(".dplayer-volume-bar-wrap").attr("data-balloon"))}`;"%"==t[3]?n=1:"%"==t[2]?n=Number(`0.${t[0]}`):"%"==t[1]&&(n=.1)}};t();const i=()=>{let t=0,n=0,l=null,a=$("#player canvas");const d=$("#screenshotPlayer")[0],o=$("#player .dplayer-bar-wrap"),s=$("#player .dplayer-bar-preview");d.style.display="none";let r=null;(r=new DPlayer({container:d,autoplay:!0,screenshot:!0,mutex:!1,video:{url:e}})).volume(0,!0,!0),r.speed(16);let c=()=>{(t>n+2||t<n-2)&&r.seek(t),(t>n+5||t<n-5)&&((a=$("#player canvas"))&&s.remove(a),$("#screenshotPlayer .dplayer-camera-icon").click(),n=t)};o.mousemove(()=>{(e=>{l=e.split(":"),2===e.length?t=Number(l):5===e.length?t=60*Number(l[0])+Number(l[1]):8===e.length&&(t=3600*Number(l[0])+60*Number(l[1])+Number(l[2])),c()})($(".dplayer-bar-time").html())}),r.on("error",()=>{i()})};"true"==localStorage.getItem("previewSwitch")&&i()}),$("#leftBtn, #rightBtn").click(t=>{let e=$(t.target);["I","SPAN"].includes(t.target.nodeName)&&(e=$(t.target).parent());const i=e.attr("data-filepath");history.pushState({},"",`${i}?a=view`),file(i)})}function file_image(t){let e=`<div class="mdui-container-fluid">\n\t<br>\n\t<img class="mdui-img-fluid" src="${decodeURI(window.location.origin+t)}"/>\n\t<br>\n\t<hr>\n\t</div>`;$("#content").html(e)}function formatFileSize(t){return t=t>=1073741824?`${(t/1073741824).toFixed(2)} GB`:t>=1048576?`${(t/1048576).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(2)} KB`:t>1?`${t} Bytes`:1==t?`${t} Byte`:" 資料夾"}function markdown(t,e){if(window.markdownit||window.location.reload(),null==window.md)window.md=window.markdownit(),markdown(t,e);else{let i=md.render(e);$(t).show().html(i)}}String.prototype.trim=function(t){return t?this.replace(new RegExp(`^\\${t}+|\\${t}+$`,"g"),""):this.replace(/^\s+|\s+$/g,"")},window.onpopstate=(()=>{render(window.location.pathname)}),$(()=>{init(),render(window.location.pathname)});