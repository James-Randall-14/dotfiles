// Vencord 538b870
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var Lt=Object.create;var ye=Object.defineProperty;var Nt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var Mt=Object.getPrototypeOf,zt=Object.prototype.hasOwnProperty;var v=(e,r)=>()=>(e&&(r=e(e=0)),r);var Ve=(e,r)=>{for(var t in r)ye(e,t,{get:r[t],enumerable:!0})},ur=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of kt(r))!zt.call(e,i)&&i!==t&&ye(e,i,{get:()=>r[i],enumerable:!(n=Nt(r,i))||n.enumerable});return e};var Le=(e,r,t)=>(t=e!=null?Lt(Mt(e)):{},ur(r||!e||!e.__esModule?ye(t,"default",{value:e,enumerable:!0}):t,e)),hr=e=>ur(ye({},"__esModule",{value:!0}),e);var l=v(()=>{"use strict"});var he=v(()=>{"use strict";l()});var ge,Ne=v(()=>{l();ge="538b870"});var Q,ke=v(()=>{l();Q="Vendicated/Vencord"});var gr,pr=v(()=>{"use strict";l();Ne();ke();gr=`Vencord/${ge}${Q?` (https://github.com/${Q})`:""}`});function $(e,r={}){return new Promise((t,n)=>{vr.default.get(e,r,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void t($(s.location,r));let c=[];i.on("error",n),i.on("data",f=>c.push(f)),i.once("end",()=>t(Buffer.concat(c)))})})}var vr,Me=v(()=>{"use strict";l();vr=Le(require("https"))});function pe(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(r){return{ok:!1,error:r instanceof Error?{...r}:r}}}}var mr,dr=v(()=>{"use strict";l();mr=["patcher.js","preload.js","renderer.js","renderer.css"]});var Zt={};async function Cr(e){return $(bt+e,{headers:{Accept:"application/vnd.github+json","User-Agent":gr}})}async function Wt(){if(!await yr())return[];let r=await Cr(`/compare/${ge}...HEAD`);return JSON.parse(r.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function yr(){let e=await Cr("/releases/latest"),r=JSON.parse(e.toString());return r.name.slice(r.name.lastIndexOf(" ")+1)===ge?!1:(r.assets.forEach(({name:n,browser_download_url:i})=>{mr.some(o=>n.startsWith(o))&&ze.push([n,i])}),!0)}async function Ft(){return await Promise.all(ze.map(async([e,r])=>(0,Ir.writeFile)((0,Ar.join)(__dirname,e),await $(r)))),ze=[],!0}var ve,Ir,Ar,bt,ze,wr=v(()=>{"use strict";l();he();pr();ve=require("electron"),Ir=require("fs/promises"),Ar=require("path");Ne();ke();Me();dr();bt=`https://api.github.com/repos/${Q}`,ze=[];ve.ipcMain.handle("VencordGetRepo",pe(()=>`https://github.com/${Q}`));ve.ipcMain.handle("VencordGetUpdates",pe(Wt));ve.ipcMain.handle("VencordUpdate",pe(yr));ve.ipcMain.handle("VencordBuild",pe(Ft))});var Sr=v(()=>{"use strict";l();Promise.resolve().then(()=>wr())});var me,Tr=v(()=>{"use strict";l();me=class{pathListeners=new Map;globalListeners=new Set;constructor(r,t={}){this.plain=r,this.store=this.makeProxy(r),Object.assign(this,t)}makeProxy(r,t=r,n=""){let i=this;return new Proxy(r,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:t,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,t,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let c=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(f=>f(s,c)),i.pathListeners.get(c)?.forEach(f=>f(s)),!0}})}setData(r,t){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=r,this.store=this.makeProxy(r),t){let n=r,i=t.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${t} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(t)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(r){this.globalListeners.add(r)}addChangeListener(r,t){let n=this.pathListeners.get(r)??new Set;n.add(t),this.pathListeners.set(r,n)}removeGlobalChangeListener(r){this.globalListeners.delete(r)}removeChangeListener(r,t){let n=this.pathListeners.get(r);!n||(n.delete(t),n.size||this.pathListeners.delete(r))}markAsChanged(){this.globalListeners.forEach(r=>r(this.plain,""))}}});var xr,M,we,ee,z,re,We,Fe,Er,Se,te=v(()=>{"use strict";l();xr=require("electron"),M=require("path"),we=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,M.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,M.join)(xr.app.getPath("userData"),"..","Vencord")),ee=(0,M.join)(we,"settings"),z=(0,M.join)(we,"themes"),re=(0,M.join)(ee,"quickCss.css"),We=(0,M.join)(ee,"settings.json"),Fe=(0,M.join)(ee,"native-settings.json"),Er=["https:","http:","steam:","spotify:","com.epicgames.launcher:"],Se=process.argv.includes("--vanilla")});function Rr(e,r){try{return JSON.parse((0,j.readFileSync)(r,"utf-8"))}catch(t){return t?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,t),{}}}var Te,j,x,Dr,ne=v(()=>{"use strict";l();he();Tr();Te=require("electron"),j=require("fs");te();(0,j.mkdirSync)(ee,{recursive:!0});x=new me(Rr("renderer",We));x.addGlobalChangeListener(()=>{try{(0,j.writeFileSync)(We,JSON.stringify(x.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Te.ipcMain.handle("VencordGetSettingsDir",()=>ee);Te.ipcMain.on("VencordGetSettings",e=>e.returnValue=x.plain);Te.ipcMain.handle("VencordSetSettings",(e,r,t)=>{x.setData(r,t)});Dr=new me(Rr("native",Fe));Dr.addGlobalChangeListener(()=>{try{(0,j.writeFileSync)(Fe,JSON.stringify(Dr.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var Or={};var Pr,Gr=v(()=>{"use strict";l();ne();Pr=require("electron");Pr.app.on("browser-window-created",(e,r)=>{r.webContents.on("frame-created",(t,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=x.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var Ur={};var _r,Vr=v(()=>{"use strict";l();ne();_r=require("electron");_r.app.on("browser-window-created",(e,r)=>{r.webContents.on("frame-created",(t,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!x.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var Ze={};Ve(Ze,{resolveRedirect:()=>Bt});function Nr(e){return new Promise((r,t)=>{let n=(0,Lr.request)(new URL(e),{method:"HEAD"},i=>{r(i.headers.location?Nr(i.headers.location):e)});n.on("error",t),n.end()})}async function Bt(e,r){return jt.test(r)?Nr(r):r}var Lr,jt,kr=v(()=>{"use strict";l();Lr=require("https"),jt=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var je={};Ve(je,{readRecording:()=>Ht});async function Ht(e,r){r=(0,de.normalize)(r);let t=(0,de.basename)(r),n=(0,de.normalize)(Mr.app.getPath("userData")+"/");if(console.log(t,n,r),t!=="recording.ogg"||!r.startsWith(n))return null;try{let i=await(0,zr.readFile)(r);return new Uint8Array(i.buffer)}catch{return null}}var Mr,zr,de,br=v(()=>{"use strict";l();Mr=require("electron"),zr=require("fs/promises"),de=require("path")});var Be={};Ve(Be,{sendToOverlay:()=>Kt});function Kt(e,r){r.icon=Buffer.from(r.icon).toString("base64");let t=JSON.stringify(r);Wr??=(0,Fr.createSocket)("udp4"),Wr.send(t,42069,"127.0.0.1")}var Fr,Wr,Zr=v(()=>{"use strict";l();Fr=require("dgram")});var jr,Br=v(()=>{l();Gr();Vr();kr();br();Zr();jr={FixSpotifyEmbeds:Or,FixYoutubeEmbeds:Ur,OpenInApp:Ze,VoiceMessages:je,XsOverlay:Be}});var He,Hr,Kr=v(()=>{"use strict";l();he();He=require("electron");Br();Hr={};for(let[e,r]of Object.entries(jr)){let t=Object.entries(r);if(!t.length)continue;let n=Hr[e]={};for(let[i,o]of t){let a=`VencordPluginNative_${e}_${i}`;He.ipcMain.handle(a,o),n[i]=a}}He.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Hr})});function Ke(e,r=300){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{e(...n)},r)}}var Yr=v(()=>{"use strict";l()});var Jr,Xr=v(()=>{l();Jr="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function Ye(e,r={}){return{fileName:e,name:r.name??e.replace(/\.css$/i,""),author:r.author??"Unknown Author",description:r.description??"A Discord Theme.",version:r.version,license:r.license,source:r.source,website:r.website,invite:r.invite}}function qr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Qr(e,r){if(!e)return Ye(r);let t=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!t)return Ye(r);let n={},i="",o="";for(let a of t.split(Yt))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(Jt,"@");return n[i]=o.trim(),delete n[""],Ye(r,n)}var Yt,Jt,$r=v(()=>{"use strict";l();Yt=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Jt=/^\\@/});function rt(e){e.webContents.setWindowOpenHandler(({url:r})=>{switch(r){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:t}=new URL(r)}catch{return{action:"deny"}}switch(t){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":et.shell.openExternal(r)}return{action:"deny"}})}var et,tt=v(()=>{"use strict";l();et=require("electron")});function Je(e,r){let t=(0,ie.normalize)(e),n=(0,ie.join)(e,r),i=(0,ie.normalize)(n);return i.startsWith(t)?i:null}function nt(){return(0,H.readFile)(re,"utf-8").catch(()=>"")}async function Xt(){let e=await(0,H.readdir)(z).catch(()=>[]),r=[];for(let t of e){if(!t.endsWith(".css"))continue;let n=await it(t).then(qr).catch(()=>null);n!=null&&r.push(Qr(n,t))}return r}function it(e){e=e.replace(/\?v=\d+$/,"");let r=Je(z,e);return r?(0,H.readFile)(r,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function ot(e){let r;(0,H.open)(re,"a+").then(n=>{n.close(),r=(0,B.watch)(re,{persistent:!1},Ke(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await nt())},50))}).catch(()=>{});let t=(0,B.watch)(z,{persistent:!1},Ke(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{r?.close(),t.close()})}var m,B,H,ie,Xe=v(()=>{"use strict";l();Sr();Kr();ne();Yr();he();m=require("electron"),B=require("fs"),H=require("fs/promises"),ie=require("path");Xr();$r();te();tt();(0,B.mkdirSync)(z,{recursive:!0});m.ipcMain.handle("VencordOpenQuickCss",()=>m.shell.openPath(re));m.ipcMain.handle("VencordOpenExternal",(e,r)=>{try{var{protocol:t}=new URL(r)}catch{throw"Malformed URL"}if(!Er.includes(t))throw"Disallowed protocol.";m.shell.openExternal(r)});m.ipcMain.handle("VencordGetQuickCss",()=>nt());m.ipcMain.handle("VencordSetQuickCss",(e,r)=>(0,B.writeFileSync)(re,r));m.ipcMain.handle("VencordGetThemesDir",()=>z);m.ipcMain.handle("VencordGetThemesList",()=>Xt());m.ipcMain.handle("VencordGetThemeData",(e,r)=>it(r));m.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${m.systemPreferences.getAccentColor?.()||""}`}));m.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",r=m.BrowserWindow.getAllWindows().find(n=>n.title===e);if(r&&!r.isDestroyed()){r.focus();return}let t=new m.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ie.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});rt(t),await t.loadURL(`data:text/html;base64,${Jr}`)})});function Dt(e,r,t){let n=r;if(r in e)return void t(e[n]);Object.defineProperty(e,r,{set(i){delete e[n],e[n]=i,t(i)},configurable:!0,enumerable:!1})}var Rt=v(()=>{"use strict";l()});var An={};function dn(e,r){let t=e.slice(4).split(".").map(Number),n=r.slice(4).split(".").map(Number);for(let i=0;i<n.length;i++){if(t[i]>n[i])return!0;if(t[i]<n[i])return!1}return!1}function In(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,D.dirname)(process.execPath),r=(0,D.basename)(e),t=(0,D.join)(e,".."),n=(0,w.readdirSync)(t).reduce((s,c)=>c.startsWith("app-")&&dn(c,s)?c:s,r);if(n===r)return;let i=(0,D.join)(t,n,"resources"),o=(0,D.join)(i,"app.asar"),a=(0,D.join)(i,"_app.asar");if(!(0,w.existsSync)(o)||(0,w.statSync)(o).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,w.renameSync)(o,a),(0,w.mkdirSync)(o),(0,w.writeFileSync)((0,D.join)(o,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,w.writeFileSync)((0,D.join)(o,"index.js"),`require(${JSON.stringify((0,D.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var Pt,w,D,Ot=v(()=>{"use strict";l();Pt=require("electron"),w=require("original-fs"),D=require("path");Pt.app.on("before-quit",In)});var Sn={};var S,W,Cn,yn,ir,wn,Gt=v(()=>{"use strict";l();Rt();S=Le(require("electron")),W=require("path");Xe();ne();te();console.log("[Vencord] Starting up...");Cn=require.main.filename,yn=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",ir=(0,W.join)((0,W.dirname)(Cn),"..",yn),wn=require((0,W.join)(ir,"package.json"));require.main.filename=(0,W.join)(ir,wn.main);S.app.setAppPath(ir);if(Se)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=x.store;if(process.platform==="win32"&&(Ot(),e.winCtrlQ)){let i=S.Menu.buildFromTemplate;S.Menu.buildFromTemplate=function(o){if(o[0]?.label==="&File"){let{submenu:a}=o[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>S.app.quit()})}return i.call(this,o)}}class r extends S.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let a=o.webPreferences.preload;o.webPreferences.preload=(0,W.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,e.frameless?o.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete o.frame,e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),process.platform==="darwin"&&e.macosVibrancyStyle&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=a,super(o),ot(this)}else super(o)}}Object.assign(r,S.default.BrowserWindow),Object.defineProperty(r,"name",{value:"BrowserWindow",configurable:!0});let t=require.resolve("electron");delete require.cache[t].exports,require.cache[t].exports={...S.default,BrowserWindow:r},Dt(global,"appSettings",i=>{i.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(i.set("MIN_WIDTH",0),i.set("MIN_HEIGHT",0)):(i.set("MIN_WIDTH",940),i.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,W.join)(S.app.getPath("userData"),"..","Vencord");let n=S.app.commandLine.appendSwitch;S.app.commandLine.appendSwitch=function(...i){return i[0]==="disable-features"&&!i[1]?.includes("WidgetLayering")&&(i[1]+=",WidgetLayering"),n.apply(this,i)}}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});l();var K=require("electron"),_t=require("path");Xe();ne();te();l();var Tt=require("electron");l();var ct=require("module"),qt=(0,ct.createRequire)("/"),Ee,Qt=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ee=qt("worker_threads").Worker}catch{}var $t=Ee?function(e,r,t,n,i){var o=!1,a=new Ee(e+Qt,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(t,n),a.terminate=function(){return o=!0,Ee.prototype.terminate.call(a)},a}:function(e,r,t,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},C=Uint8Array,b=Uint16Array,$e=Uint32Array,er=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rr=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),lt=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ft=function(e,r){for(var t=new b(31),n=0;n<31;++n)t[n]=r+=1<<e[n-1];for(var i=new $e(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)i[o]=o-t[n]<<5|n;return[t,i]},ut=ft(er,2),tr=ut[0],en=ut[1];tr[28]=258,en[258]=28;var ht=ft(rr,0),gt=ht[0],ki=ht[1],Pe=new b(32768);for(u=0;u<32768;++u)U=(u&43690)>>>1|(u&21845)<<1,U=(U&52428)>>>2|(U&13107)<<2,U=(U&61680)>>>4|(U&3855)<<4,Pe[u]=((U&65280)>>>8|(U&255)<<8)>>>1;var U,u,oe=function(e,r,t){for(var n=e.length,i=0,o=new b(r);i<n;++i)e[i]&&++o[e[i]-1];var a=new b(r);for(i=0;i<r;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(t){s=new b(1<<r);var c=15-r;for(i=0;i<n;++i)if(e[i])for(var f=i<<4|e[i],h=r-e[i],d=a[e[i]-1]++<<h,R=d|(1<<h)-1;d<=R;++d)s[Pe[d]>>>c]=f}else for(s=new b(n),i=0;i<n;++i)e[i]&&(s[i]=Pe[a[e[i]-1]++]>>>15-e[i]);return s},Ie=new C(288);for(u=0;u<144;++u)Ie[u]=8;var u;for(u=144;u<256;++u)Ie[u]=9;var u;for(u=256;u<280;++u)Ie[u]=7;var u;for(u=280;u<288;++u)Ie[u]=8;var u,pt=new C(32);for(u=0;u<32;++u)pt[u]=5;var u;var vt=oe(Ie,9,1);var mt=oe(pt,5,1),De=function(e){for(var r=e[0],t=1;t<e.length;++t)e[t]>r&&(r=e[t]);return r},E=function(e,r,t){var n=r/8|0;return(e[n]|e[n+1]<<8)>>(r&7)&t},Re=function(e,r){var t=r/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(r&7)},dt=function(e){return(e+7)/8|0},Oe=function(e,r,t){(r==null||r<0)&&(r=0),(t==null||t>e.length)&&(t=e.length);var n=new(e.BYTES_PER_ELEMENT==2?b:e.BYTES_PER_ELEMENT==4?$e:C)(t-r);return n.set(e.subarray(r,t)),n};var It=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,r,t){var n=new Error(r||It[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,y),!t)throw n;return n},At=function(e,r,t){var n=e.length;if(!n||t&&t.f&&!t.l)return r||new C(0);var i=!r||t,o=!t||t.i;t||(t={}),r||(r=new C(n*3));var a=function(cr){var lr=r.length;if(cr>lr){var fr=new C(Math.max(lr*2,cr));fr.set(r),r=fr}},s=t.f||0,c=t.p||0,f=t.b||0,h=t.l,d=t.d,R=t.m,V=t.n,se=n*8;do{if(!h){s=E(e,c,1);var F=E(e,c+1,3);if(c+=3,F)if(F==1)h=vt,d=mt,R=9,V=5;else if(F==2){var N=E(e,c,31)+257,Y=E(e,c+10,15)+4,ce=N+E(e,c+5,31)+1;c+=14;for(var Z=new C(ce),le=new C(19),A=0;A<Y;++A)le[lt[A]]=E(e,c+A*3,7);c+=Y*3;for(var _=De(le),Ae=(1<<_)-1,J=oe(le,_,1),A=0;A<ce;){var fe=J[E(e,c,Ae)];c+=fe&15;var I=fe>>>4;if(I<16)Z[A++]=I;else{var X=0,Ce=0;for(I==16?(Ce=3+E(e,c,3),c+=2,X=Z[A-1]):I==17?(Ce=3+E(e,c,7),c+=3):I==18&&(Ce=11+E(e,c,127),c+=7);Ce--;)Z[A++]=X}}var or=Z.subarray(0,N),k=Z.subarray(N);R=De(or),V=De(k),h=oe(or,R,1),d=oe(k,V,1)}else y(1);else{var I=dt(c)+4,T=e[I-4]|e[I-3]<<8,L=I+T;if(L>n){o&&y(0);break}i&&a(f+T),r.set(e.subarray(I,L),f),t.b=f+=T,t.p=c=L*8,t.f=s;continue}if(c>se){o&&y(0);break}}i&&a(f+131072);for(var Ut=(1<<R)-1,Vt=(1<<V)-1,Ge=c;;Ge=c){var X=h[Re(e,c)&Ut],q=X>>>4;if(c+=X&15,c>se){o&&y(0);break}if(X||y(2),q<256)r[f++]=q;else if(q==256){Ge=c,h=null;break}else{var ar=q-254;if(q>264){var A=q-257,ue=er[A];ar=E(e,c,(1<<ue)-1)+tr[A],c+=ue}var _e=d[Re(e,c)&Vt],Ue=_e>>>4;_e||y(3),c+=_e&15;var k=gt[Ue];if(Ue>3){var ue=rr[Ue];k+=Re(e,c)&(1<<ue)-1,c+=ue}if(c>se){o&&y(0);break}i&&a(f+131072);for(var sr=f+ar;f<sr;f+=4)r[f]=r[f-k],r[f+1]=r[f+1-k],r[f+2]=r[f+2-k],r[f+3]=r[f+3-k];f=sr}}t.l=h,t.p=Ge,t.b=f,t.f=s,h&&(s=1,t.m=R,t.d=d,t.n=V)}while(!s);return f==r.length?r:Oe(r,0,f)};var rn=new C(0);var tn=function(e,r){var t={};for(var n in e)t[n]=e[n];for(var n in r)t[n]=r[n];return t},at=function(e,r,t){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],c=o[a];if(typeof s=="function"){r+=";"+c+"=";var f=s.toString();if(s.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;r+=f.slice(h,f.indexOf("(",h))}else{r+=f;for(var d in s.prototype)r+=";"+c+".prototype."+d+"="+s.prototype[d].toString()}else r+=f}else t[c]=s}return[r,t]},xe=[],nn=function(e){var r=[];for(var t in e)e[t].buffer&&r.push((e[t]=new e[t].constructor(e[t])).buffer);return r},on=function(e,r,t,n){var i;if(!xe[t]){for(var o="",a={},s=e.length-1,c=0;c<s;++c)i=at(e[c],o,a),o=i[0],a=i[1];xe[t]=at(e[s],o,a)}var f=tn({},xe[t][1]);return $t(xe[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+r.toString()+"}",t,f,nn(f),n)},an=function(){return[C,b,$e,er,rr,lt,tr,gt,vt,mt,Pe,It,oe,De,E,Re,dt,Oe,y,At,nr,Ct,yt]};var Ct=function(e){return postMessage(e,[e.buffer])},yt=function(e){return e&&e.size&&new C(e.size)},sn=function(e,r,t,n,i,o){var a=on(t,n,i,function(s,c){a.terminate(),o(s,c)});return a.postMessage([e,r],r.consume?[e.buffer]:[]),function(){a.terminate()}};var O=function(e,r){return e[r]|e[r+1]<<8},P=function(e,r){return(e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)>>>0},qe=function(e,r){return P(e,r)+P(e,r+4)*4294967296};function cn(e,r,t){return t||(t=r,r={}),typeof t!="function"&&y(7),sn(e,r,[an],function(n){return Ct(nr(n.data[0],yt(n.data[1])))},1,t)}function nr(e,r){return At(e,r)}var Qe=typeof TextDecoder<"u"&&new TextDecoder,ln=0;try{Qe.decode(rn,{stream:!0}),ln=1}catch{}var fn=function(e){for(var r="",t=0;;){var n=e[t++],i=(n>127)+(n>223)+(n>239);if(t+i>e.length)return[r,Oe(e,t-1)];i?i==3?(n=((n&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,r+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?r+=String.fromCharCode((n&31)<<6|e[t++]&63):r+=String.fromCharCode((n&15)<<12|(e[t++]&63)<<6|e[t++]&63):r+=String.fromCharCode(n)}};function un(e,r){if(r){for(var t="",n=0;n<e.length;n+=16384)t+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return t}else{if(Qe)return Qe.decode(e);var i=fn(e),o=i[0],a=i[1];return a.length&&y(8),o}}var hn=function(e,r){return r+30+O(e,r+26)+O(e,r+28)},gn=function(e,r,t){var n=O(e,r+28),i=un(e.subarray(r+46,r+46+n),!(O(e,r+8)&2048)),o=r+46+n,a=P(e,r+20),s=t&&a==4294967295?pn(e,o):[a,P(e,r+24),P(e,r+42)],c=s[0],f=s[1],h=s[2];return[O(e,r+10),c,f,i,o+O(e,r+30)+O(e,r+32),h]},pn=function(e,r){for(;O(e,r)!=1;r+=4+O(e,r+2));return[qe(e,r+12),qe(e,r+4),qe(e,r+20)]};var st=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function wt(e,r,t){t||(t=r,r={}),typeof t!="function"&&y(7);var n=[],i=function(){for(var I=0;I<n.length;++I)n[I]()},o={},a=function(I,T){st(function(){t(I,T)})};st(function(){a=t});for(var s=e.length-22;P(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(y(13,0,1),null),i;var c=O(e,s+8);if(c){var f=c,h=P(e,s+16),d=h==4294967295||f==65535;if(d){var R=P(e,s-12);d=P(e,R)==101075792,d&&(f=c=P(e,R+32),h=P(e,R+48))}for(var V=r&&r.filter,se=function(I){var T=gn(e,h,d),L=T[0],N=T[1],Y=T[2],ce=T[3],Z=T[4],le=T[5],A=hn(e,le);h=Z;var _=function(J,fe){J?(i(),a(J,null)):(fe&&(o[ce]=fe),--c||a(null,o))};if(!V||V({name:ce,size:N,originalSize:Y,compression:L}))if(!L)_(null,Oe(e,A,A+N));else if(L==8){var Ae=e.subarray(A,A+N);if(N<32e4)try{_(null,nr(Ae,new C(Y)))}catch(J){_(J,null)}else n.push(cn(Ae,{size:Y},_))}else _(y(14,"unknown compression type "+L,1),null);else _(null,null)},F=0;F<f;++F)se(F)}else a(null,{});return i}var xt=require("fs"),G=require("fs/promises"),ae=require("path");te();l();function St(e){function r(a,s,c,f){let h=0;return h+=a<<0,h+=s<<8,h+=c<<16,h+=f<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=e[4]===3,n=e[4]===2;if(!n&&!t||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=r(e[8],e[9],e[10],e[11]),s=r(e[12],e[13],e[14],e[15]),c=16+a+s;return e.subarray(c,e.length)}let o=12+r(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}Me();var vn=(0,ae.join)(we,"ExtensionCache");async function mn(e,r){return await(0,G.mkdir)(r,{recursive:!0}),new Promise((t,n)=>{wt(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,G.mkdir)((0,ae.join)(r,a),{recursive:!0});let s=a.split("/"),c=s.pop(),f=s.join("/"),h=(0,ae.join)(r,f);f&&await(0,G.mkdir)(h,{recursive:!0}),await(0,G.writeFile)((0,ae.join)(h,c),o[a])})).then(()=>t()).catch(a=>{(0,G.rm)(r,{recursive:!0,force:!0}),n(a)})})})}async function Et(e){let r=(0,ae.join)(vn,`${e}`);try{await(0,G.access)(r,xt.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await $(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await mn(St(i),r).catch(console.error)}Tt.session.defaultSession.loadExtension(r)}Se||K.app.whenReady().then(()=>{K.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),c=Je(z,s);if(!c){o({statusCode:403});return}o(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,_t.join)(__dirname,a));break;default:o({statusCode:403})}});try{x.store.enableReactDevtools&&Et("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),r=i=>{let o={};return i.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=c)}),o},t=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=r(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[t(a)]}};K.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),K.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Gt();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
