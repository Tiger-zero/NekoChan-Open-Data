var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,c){a.raw=c;return a};document.write('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/css/mdui.min.css">');document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/markdown-it/11.0.0/markdown-it.min.js">\x3c/script>');document.write('<link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&display=swap">');
document.write("<style>* body{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-selected{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-menu{font-family: 'Noto Sans TC', sans-serif;}</style>");document.write("<style>* .mdui-theme-primary-blue .mdui-color-theme{background-color:rgba(35,36,39,1)!important}</style>");document.write("<style>* .mdui-appbar{padding-right: 8px; padding-left: 8px; margin-right: auto; margin-left: auto; max-width: 980px;}</style>");document.write('<style>* {box-sizing: border-box} body{margin:0px; padding:0px; background: url("//i.imgur.com/1cwii31.jpg"); background-attachment: fixed; background-repeat: no-repeat; background-position: center center; background-size: cover;}</style>');
document.write("<style>* .mdui-container{color:rgba(255,255,255,.87);background-color:rgba(35,36,39,0.95);border-width:1px;border-color:#333333;border-bottom-style:solid;}</style>");document.write("<style>* .mdui-list li{border-width:1px;border-color:#333333;border-bottom-style:solid;} </style>");document.write("<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>");
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.1/DPlayer.min.js" integrity="sha512-bjMqZ0Ai1izYtoe+f9ehqyT9qaFYOcWgGUOj2mTx9aUBA+lEtKyIruqNhbR2toBtFg2n9LeN0FocK57P8X/jMg==" crossorigin="anonymous">\x3c/script>');
function init(){document.siteName=$("title").html();$("body").addClass("mdui-theme-primary-"+UI.main_color+" mdui-theme-accent-"+UI.accent_color);var a='\n<header class="mdui-appbar mdui-color-theme">\n   <div id="nav" class="mdui-toolbar mdui-container'+(UI.fluid_navigation_bar?"-fluid":"")+" "+(UI.dark_mode?"mdui-text-color-white-text":"")+'">\n   </div>\n</header>\n<div id="content" class="mdui-container">\n</div>\n\t';$("body").html(a)}
var Os={isWindows:-1<navigator.platform.toUpperCase().indexOf("WIN"),isMac:-1<navigator.platform.toUpperCase().indexOf("MAC"),isMacLike:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),isIos:/(iPhone|iPod|iPad)/i.test(navigator.platform),isMobile:/Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};
function getDocumentHeight(){var a=document;return Math.max(a.body.scrollHeight,a.documentElement.scrollHeight,a.body.offsetHeight,a.documentElement.offsetHeight,a.body.clientHeight,a.documentElement.clientHeight)}
function render(a){0<a.indexOf("?")&&(a=a.substr(0,a.indexOf("?")));title(a);nav(a);var c=/\/\d+:$/g;window.MODEL.is_search_page?(window.scroll_status={event_bound:!1,loading_lock:!1},render_search_result_list()):a.match(c)||"/"==a.substr(-1)?(window.scroll_status={event_bound:!1,loading_lock:!1},list(a)):file(a)}function title(a){decodeURI(a);$("title").html(""+document.siteName)}
function nav(a){var c=window.MODEL,e="",b=window.current_drive_order||0;e+='<a href="/'+b+':/" class="mdui-typo-headline folder">'+document.siteName+"</a>";var d=window.drive_names;e+='<select class="mdui-select" onchange="window.location.href=this.value" mdui-select style="overflow:visible;padding-left:8px;padding-right:8px">';d.forEach(function(f,h){e+='<option value="/'+h+':/"  '+(h===b?'selected="selected"':"")+" >"+f+"</option>"});e+="</select>";if(!c.is_search_page&&(a=a.trim("/").split("/"),
d="/",1<a.length))for(i in a.shift(),a){var g=a[i];g=decodeURI(g);d+=g+"/";if(""==g)break;e+='<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="/'+b+":"+d+'">'+g+"</a>"}a='<div class="mdui-toolbar-spacer"></div>\n        <div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right '+(c.is_search_page?"mdui-textfield-expanded":"")+'" style="max-width:'+(Os.isMobile?300:400)+'px">\n            <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($(\'#search_bar\').hasClass(\'mdui-textfield-expanded\') && $(\'#search_bar_form>input\').val()) $(\'#search_bar_form\').submit();">\n                <i class="mdui-icon material-icons">search</i>\n            </button>\n            <form id="search_bar_form" method="get" action="/'+
b+':search">\n            <input class="mdui-textfield-input" type="text" name="q" placeholder="Search in current drive" value="'+(c.is_search_page?c.q||"":"")+'"/>\n            </form>\n            <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>\n        </div>';e+='<div class="mdui-toolbar-spacer"></div>\n  <a href="//twitter.com/TW_NEKO_CHAN" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: \'Twitter\'}" alt="Twitter">\n    <img src="//image.flaticon.com/icons/svg/1384/1384075.svg" width="30" height="45" />\n  </a>\n  <a href="//ko-fi.com/tw_neko_chan" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: \'Donate\'}" alt="Donate">\n    <img src="//image.flaticon.com/icons/svg/2917/2917845.svg" width="30" height="45" />\n  </a>';
2>c.root_type&&(e+=a);$("#nav").html(e);mdui.mutation();mdui.updateTextFields()}function requestListPath(a,c,e,b){var d={password:c.password||null,page_token:c.page_token||null,page_index:c.page_index||0};$.post(a,d,function(g,f){var h=jQuery.parseJSON(g);h&&h.error&&"401"==h.error.code?b&&b(a):h&&h.data&&e&&e(h,a,d)})}
function requestSearch(a,c){var e={q:a.q||null,page_token:a.page_token||null,page_index:a.page_index||0};$.post("/"+window.current_drive_order+":search",e,function(b,d){var g=jQuery.parseJSON(b);g&&g.data&&c&&c(g,e)})}
function list(a){function c(b,d,g){$("#list").data("nextPageToken",b.nextPageToken).data("curPageIndex",b.curPageIndex);$("#spinner").remove();null===b.nextPageToken?($(window).off("scroll"),window.scroll_status.event_bound=!1,window.scroll_status.loading_lock=!1,append_files_to_list(d,b.data.files)):(append_files_to_list(d,b.data.files),!0!==window.scroll_status.event_bound&&($(window).on("scroll",function(){var f=$(this).scrollTop(),h=getDocumentHeight(),k=$(this).height();f+k>h-(Os.isMobile?130:
80)&&!0!==window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!0,$('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),mdui.updateSpinners(),f=$("#list"),requestListPath(d,{password:g.password,page_token:f.data("nextPageToken"),page_index:f.data("curPageIndex")+1},c,null))}),window.scroll_status.event_bound=!0));!0===window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!1)}$("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row">\n\t  <ul class="mdui-list">\n\t   <li class="mdui-list-item th">\n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      \u6a94\u6848\u540d\u7a31\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      \u4fee\u6539\u6642\u9593\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      \u6a94\u6848\u5927\u5c0f\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n\t    </li>\n\t  </ul>\n\t </div>\n\t <div class="mdui-row">\n\t  <ul id="list" class="mdui-list">\n\t  </ul>\n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">\u5171 <span class="number"></span> \u9805<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t');
var e=localStorage.getItem("password"+a);$("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>');$("#readme_md").hide().html("");$("#head_md").hide().html("");requestListPath(a,{password:e},c,function(b){$("#spinner").remove();var d=prompt("\u76ee\u5f55\u52a0\u5bc6, \u8bf7\u8f93\u5165\u5bc6\u7801","");localStorage.setItem("password"+b,d);null!=d&&""!=d?list(b):history.go(-1)})}
function append_files_to_list(a,c){var e=$("#list"),b=null===e.data("nextPageToken"),d="0"==e.data("curPageIndex");html="";var g=[];for(i in c){var f=c[i],h=a+f.name+"/";void 0==f.size&&(f.size="");f.modifiedTime=utc2beijing(f.modifiedTime);f.size=formatFileSize(f.size);if("application/vnd.google-apps.folder"==f.mimeType)html+='<li class="mdui-list-item mdui-ripple"><a href="'+h+'" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+f.name+'">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              '+
f.name+'\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">'+f.modifiedTime+'</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">'+f.size+"</div>\n\t            </a>\n\t        </li>";else{h=a+f.name;var k=a+f.name,n="file";b&&"!readme.md"==f.name&&get_file(h,f,function(l){markdown("#readme_md",l)});"!head.md"==f.name&&get_file(h,f,function(l){markdown("#head_md",l)});var p=h.split(".").pop().toLowerCase();0<="|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf("|"+
p+"|")&&(g.push(k),h+="?a=view",n+=" view");html+='<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="'+f.mimeType+'" href="'+h+'" class="'+n+'">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+f.name+'">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            '+f.name+'\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">'+f.modifiedTime+'</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">'+
f.size+"</div>\n\t          </a>\n\t      </li>"}}if(0<g.length){f=localStorage.getItem(a);h=g;if(!d&&f){try{var m=JSON.parse(f);Array.isArray(m)||(m=[])}catch(l){m=[]}h=m.concat(g)}localStorage.setItem(a,JSON.stringify(h))}e.html(("0"==e.data("curPageIndex")?"":e.html())+html);b&&$("#count").removeClass("mdui-hidden").find(".number").text(e.find("li.mdui-list-item").length)}
function render_search_result_list(){function a(c,e){$("#list").data("nextPageToken",c.nextPageToken).data("curPageIndex",c.curPageIndex);$("#spinner").remove();null===c.nextPageToken?($(window).off("scroll"),window.scroll_status.event_bound=!1,window.scroll_status.loading_lock=!1,append_search_result_to_list(c.data.files)):(append_search_result_to_list(c.data.files),!0!==window.scroll_status.event_bound&&($(window).on("scroll",function(){var b=$(this).scrollTop(),d=getDocumentHeight(),g=$(this).height();
b+g>d-(Os.isMobile?130:80)&&!0!==window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!0,$('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),mdui.updateSpinners(),b=$("#list"),requestSearch({q:window.MODEL.q,page_token:b.data("nextPageToken"),page_index:b.data("curPageIndex")+1},a))}),window.scroll_status.event_bound=!0));!0===window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!1)}$("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row">\n\t  <ul class="mdui-list">\n\t   <li class="mdui-list-item th">\n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      \u6a94\u6848\u540d\u7a31\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      \u4fee\u6539\u6642\u9593\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      \u6a94\u6848\u5927\u5c0f\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n\t    </li>\n\t  </ul>\n\t </div>\n\t <div class="mdui-row">\n\t  <ul id="list" class="mdui-list">\n\t  </ul>\n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">\u5171 <span class="number"></span> \u9805<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t');
$("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>');$("#readme_md").hide().html("");$("#head_md").hide().html("");requestSearch({q:window.MODEL.q},a)}
function append_search_result_to_list(a){var c=$("#list"),e=null===c.data("nextPageToken");html="";for(i in a){var b=a[i];void 0==b.size&&(b.size="");b.modifiedTime=utc2beijing(b.modifiedTime);b.size=formatFileSize(b.size);if("application/vnd.google-apps.folder"==b.mimeType)html+='<li class="mdui-list-item mdui-ripple"><a id="'+b.id+'" onclick="onSearchResultItemClick(this)" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+b.name+'">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              '+
b.name+'\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">'+b.modifiedTime+'</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">'+b.size+"</div>\n\t            </a>\n\t        </li>";else{var d="file",g=b.name.split(".").pop().toLowerCase();0<="|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf("|"+g+"|")&&(d+=" view");html+='<li class="mdui-list-item file mdui-ripple" target="_blank"><a id="'+
b.id+'" gd-type="'+b.mimeType+'" onclick="onSearchResultItemClick(this)" class="'+d+'">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+b.name+'">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            '+b.name+'\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">'+b.modifiedTime+'</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">'+b.size+"</div>\n\t          </a>\n\t      </li>"}}c.html(("0"==
c.data("curPageIndex")?"":c.html())+html);e&&$("#count").removeClass("mdui-hidden").find(".number").text(c.find("li.mdui-list-item").length)}
function onSearchResultItemClick(a){var c=$(a).hasClass("view"),e=window.current_drive_order,b=mdui.dialog({title:"",content:'<div class="mdui-text-center mdui-typo-title mdui-m-b-1">\u6b63\u5728\u83b7\u53d6\u76ee\u6807\u8def\u5f84...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',history:!1,modal:!0,closeOnEsc:!0});mdui.updateSpinners();$.post("/"+e+":id2path",{id:a.id},function(d){if(d){b.close();var g="/"+e+":"+d+(c?"?a=view":"");b=mdui.dialog({title:'<i class="mdui-icon material-icons">&#xe815;</i>\u76ee\u6807\u8def\u5f84',
content:'<a href="'+g+'">'+d+"</a>",history:!1,modal:!0,closeOnEsc:!0,buttons:[{text:"\u6253\u5f00",onClick:function(){window.location.href=g}},{text:"\u65b0\u6807\u7b7e\u4e2d\u6253\u5f00",onClick:function(){window.open(g)}},{text:"\u53d6\u6d88"}]})}else b.close(),b=mdui.dialog({title:'<i class="mdui-icon material-icons">&#xe811;</i>\u83b7\u53d6\u76ee\u6807\u8def\u5f84\u5931\u8d25',content:"o(\u256f\u25a1\u2570)o \u53ef\u80fd\u662f\u56e0\u4e3a\u8be5\u76d8\u4e2d\u5e76\u4e0d\u5b58\u5728\u6b64\u9879\uff01\u4e5f\u53ef\u80fd\u56e0\u4e3a\u6ca1\u6709\u628a\u3010\u4e0e\u6211\u5171\u4eab\u3011\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u4e2a\u4eba\u4e91\u7aef\u786c\u76d8\u4e2d\uff01",
history:!1,modal:!0,closeOnEsc:!0,buttons:[{text:"WTF ???"}]})})}function get_file(a,c,e){var b="file_path_"+a+c.modifiedTime;c=localStorage.getItem(b);if(void 0!=c)return e(c);$.get(a,function(d){localStorage.setItem(b,d);e(d)})}function file(a){var c=a.split("/").pop().split(".").pop().toLowerCase().replace("?a=view","");if(0<="|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf("|"+c+"|"))return file_video(a);if(0<="|bmp|jpg|jpeg|png|gif|".indexOf("|"+c+"|"))return file_image(a)}
function file_video(a){var c=decodeURI(window.location.origin+a),e=decodeURI(a.slice(a.lastIndexOf("/")+1,a.length)),b=window.location.pathname,d=b.lastIndexOf("/");b=b.slice(0,d+1);b=localStorage.getItem(b);d="";if(b){try{b=JSON.parse(b),Array.isArray(b)||(b=[])}catch(h){console.error(h),b=[]}if(0<b.length&&b.includes(a)){var g=b.length,f=b.indexOf(a);d=-1<f-1?b[f-1]:null;b=f+1<g?b[f+1]:null;d='\n            <div class="mdui-container">\n                <div class="mdui-row-xs-2 mdui-m-b-1">\n                    <div class="mdui-col">\n                        '+
(d?'<button id="leftBtn" data-filepath="'+d+'" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">\u4e0a\u4e00\u96c6</button>':'<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>\u4e0a\u4e00\u96c6</button>')+'\n                    </div>\n                    <div class="mdui-col">\n                        '+(b?'<button id="rightBtn"  data-filepath="'+b+'" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">\u4e0b\u4e00\u96c6</button>':
'<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>\u4e0b\u4e00\u96c6</button>')+"\n                    </div>\n                </div>\n            </div>\n            "}}b='<a href="potplayer://'+c+'" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent windows-btn">PotPlayer \u4e32\u6d41</a>';/(Mac)/i.test(navigator.userAgent)&&(b='<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mac-btn" data-href="iina://open?url='+c+
'">IINA \u4e32\u6d41</button>');/(Android)/i.test(navigator.userAgent)&&(b='<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:'+c+"#Intent;package=com.mxtech.videoplayer.pro;S.title="+a+';end">MXPlayer Pro \u4e32\u6d41</button><br><button style="margin-top: 15px" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:'+(c+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+a+';end">MXPlayer Free \u4e32\u6d41</button>'));
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&(b='<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="infuse://'+c.replace(/(^\w+:|^)\/\//,"")+'">Infuse \u4e32\u6d41</a>');a='\n<div class="mdui-container-fluid">\n    <br>\n    <div class="mdui-textfield">\n    <label class="mdui-textfield-label mdui-text-color-white">\u76ee\u524d\u6a94\u6848\uff1a</label>\n    <input class="mdui-textfield-input mdui-text-color-white" type="text" value="'+e+'" readonly/>\n    </div>\n    <div class="mdui-center" id="dplayer">\n    <link rel="preload" href="'+
c+'" as="video" type="video/mp4">\n      </div>\n    <br>\n    <div id="imgWrap">\n    '+d+"\n    </div>\n    <br>\n    "+(b+('<br><a style="margin-top: 15px" href="'+c+'" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent download-btn">\u76f4\u9023\u4e0b\u8f09\u6a94\u6848</a>\n    <div class="mdui-textfield">\n      <label class="mdui-textfield-label mdui-text-color-white">\u6ce8\u610f\uff1a\u82e5\u5f71\u7247\u6c92\u6709\u756b\u9762\uff0c\u8acb\u5617\u8a66\u64ad\u653e\u5668\u3002\u6216\u901a\u77e5\u6211\u672c\u4eba\u3002</label>\n    </div>\n    <hr>\n</div>\n    '));
$("#content").html(a);new DPlayer({container:document.getElementById("dplayer"),theme:"#0080ff",autoplay:!0,lang:"zh-tw",screenshot:!0,video:{url:c},contextmenu:[{text:"NekoChan Open Data",link:"//nekochan.ml/"}]});$("#leftBtn, #rightBtn").click(function(h){var k=$(h.target);["I","SPAN"].includes(h.target.nodeName)&&(k=$(h.target).parent());h=k.attr("data-filepath");k.attr("data-direction");file(h)})}
function file_image(a){a='\n<div class="mdui-container-fluid">\n    <br>\n    <img class="mdui-img-fluid" src="'+decodeURI(window.location.origin+a)+'"/>\n  <br>\n  <hr>\n</div>';$("#content").html(a)}
function utc2beijing(a){var c=a.indexOf("T"),e=a.indexOf("Z"),b=a.substr(0,c);a=a.substr(c+1,e-c-1);timestamp=new Date(Date.parse(b+" "+a));timestamp=timestamp.getTime();timestamp/=1E3;var d=timestamp+28800;d=new Date(1E3*d);b=1900+d.getYear();a="0"+(d.getMonth()+1);c="0"+d.getDate();e="0"+d.getHours();var g="0"+d.getMinutes();d="0"+d.getSeconds();return b+"/"+a.substring(a.length-2,a.length)+"/"+c.substring(c.length-2,c.length)+" "+e.substring(e.length-2,e.length)+":"+g.substring(g.length-2,g.length)+
":"+d.substring(d.length-2,d.length)}function formatFileSize(a){return a=1073741824<=a?(a/1073741824).toFixed(2)+" GB":1048576<=a?(a/1048576).toFixed(2)+" MB":1024<=a?(a/1024).toFixed(2)+" KB":1<a?a+" Bytes":1==a?a+" Byte":" \u8cc7\u6599\u593e"}String.prototype.trim=function(a){return a?this.replace(new RegExp("^\\"+a+"+|\\"+a+"+$","g"),""):this.replace(/^\s+|\s+$/g,"")};
function markdown(a,c){if(void 0==window.md)window.md=window.markdownit(),markdown(a,c);else{var e=md.render(c);$(a).show().html(e)}}window.onpopstate=function(){render(window.location.pathname)};$(function(){init();render(window.location.pathname)});dp.on("loadstart",function(){console.log("Video loadstart");dp.fullScreen.request("browser")});dp.on("ended",function(){console.log("Video ended");dp.fullScreen.cancel("browser");next_child});
