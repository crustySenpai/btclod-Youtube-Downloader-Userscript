// ==UserScript==
// @name        btclod YouTube Downloader
// @namespace   https://btclod.com/
// @version     1.2
// @author      A Max, crustySenpai
// @description Ported to btclod by crustySenpai
// @homepage    https://btclod.com/
// @icon        https://github.com/crustySenpai/btclod-Youtube-Downloader-Userscript/blob/main/icon.png?raw=true
// @icon64      https://github.com/crustySenpai/btclod-Youtube-Downloader-Userscript/blob/main/icon.png?raw=true
// @updateURL   https://raw.githubusercontent.com/crustySenpai/btclod-Youtube-Downloader-Userscript/master/downloader.user.js
// @run-at      document-end
// @match       https://www.youtube.com/*
// @match       https://www.m.youtube.com/*
// @match       https://youtu.be/*
// @connect     youtube.com
// @connect     m.youtube.com
// @connect     www.youtube.com
// @connect     youtube-nocookie.com
// @connect     youtu.be
// @connect     btclod.com/
// @connect     self
// @connect     *
// ==/UserScript==
var AKoiMain = { oXHttpReq: null, vid: null, oldUrl: null, DocOnLoad: function (o) { try { if (null != o && null != o.body && null != o.location && (AKoiMain.vid = AKoiMain.getVid(o), AKoiMain.vid)) { o.querySelector("#info-contents #info").setAttribute("style", "flex-wrap: wrap;"); var t = o.querySelector("#menu-container"), e = o.querySelector("#yt5sconverter"), n = AKoiMain.GetCommandButton(); null == e && (null != t ? t.parentNode.insertBefore(n, t) : (t = o.querySelector("#eow-title")).parentNode.insertBefore(n, t)), AKoiMain.oldUrl = o.location.href, AKoiMain.checkChangeVid() } return !0 } catch (o) { console.log("Error YT5s.DocOnLoad. ", o) } }, checkChangeVid: function () { setTimeout(function () { AKoiMain.oldUrl == window.location.href ? AKoiMain.checkChangeVid() : AKoiMain.WaitLoadDom(window.document) }, 1e3) }, WaitLoadDom: function (o) { AKoiMain.vid = AKoiMain.getVid(o), AKoiMain.vid ? null != o.querySelector("#info #menu-container") ? AKoiMain.DocOnLoad(o) : setTimeout(function () { AKoiMain.WaitLoadDom(o) }, 1e3) : AKoiMain.checkChangeVid() }, goToYT5s: function (o) { try { var t = "https://btclod.com/watch?v=" + AKoiMain.vid; window.open(t, "_blank") } catch (o) { console.log("Error Yt5s.OnButtonClick. ", o) } }, GetCommandButton: function () { try { var o = document.createElement("button"); return o.id = "yt5sconverter", o.className = "yt-uix-tooltip", o.setAttribute("type", "button"), o.setAttribute("title", "Download with btclod.com"), o.innerHTML = "Download", o.addEventListener("click", function (o) { AKoiMain.goToYT5s(o) }, !0), o.setAttribute("style", "min-height:25px; position:relative; top:1px; cursor: pointer; font: 13px Arial; background: #cc0000; color: #fff; text-transform: uppercase; display: block; padding: 10px 16px; margin: 20px 5px 10px 5px; border: 1px solid #cc0000; border-radius: 2px; font-weight:bold"), o.setAttribute("onmouseover", "this.style.backgroundColor='#cc0000'"), o.setAttribute("onmouseout", "this.style.backgroundColor='#cc0000'"), o } catch (o) { console.log("Error Yt5s.GetCommandButton. ", o) } }, getVid: function (o) { var t = o.location.toString().match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/); return !(!t || !t[3]) && t[3] } }; AKoiMain.WaitLoadDom(window.document);
