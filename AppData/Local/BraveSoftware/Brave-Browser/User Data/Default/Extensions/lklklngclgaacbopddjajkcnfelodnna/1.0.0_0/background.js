!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return(()=>{let e=null;try{async function t({url:e,data:t,headers:r,method:n,type:o}){try{const s=await fetch(e,{method:n,cache:"no-cache",headers:{...r},referrerPolicy:"no-referrer",body:JSON.stringify(t)});return 200===s.status?"message"===o?{fail:!1,data:s.text()}:s.text():{fail:!0,data:s.text()}}catch(e){return{fail:!0,error:e}}}function r(e,t){chrome.tabs.query({active:!0,currentWindow:!0},(function(r){chrome.tabs.sendMessage(r[0]?.id,e,(function(e){chrome.runtime.lastError||t&&t(e)}))}))}chrome.runtime.onMessage.addListener((function(n,o,s){return"fetch"===n.type||"message"===n.type?t(n).then((e=>{s(e)})):"start"===n.type&&(chrome.storage.sync.get("switch",(t=>{void 0!==t?.switch?e=setTimeout((()=>{r({status:t.switch},(function(e){}))}),1e3):r({status:!0},(function(e){}))})),s("start")),!0})),chrome.runtime.onInstalled.addListener((e=>{e===chrome.runtime.OnInstalledReason.INSTALL&&(chrome.storage.sync.set("switch",!0),chrome.tabs.create({url:"./welcome.html"}))})),chrome.storage.onChanged.addListener(((e,t)=>{"sync"===t&&Object.prototype.hasOwnProperty.call(e,"switch")&&r({status:e.switch?.newValue},(function(e){}))}))}catch(e){}return{}})()}));