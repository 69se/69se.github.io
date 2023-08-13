!function(){"use strict";try{self["workbox:sw:7.0.0"]&&_()}catch(e){}const e={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams",recipes:"recipes"};self.workbox=new class{constructor(){return this.v={},this.Pt={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.$t=this.Pt.debug?"dev":"prod",this.jt=!1,new Proxy(this,{get(t,o){if(t[o])return t[o];const s=e[o];return s&&t.loadModule(`workbox-${s}`),t[o]}})}setConfig(e={}){if(this.jt)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.Pt,e),this.$t=this.Pt.debug?"dev":"prod"}loadModule(e){const t=this.St(e);try{importScripts(t),this.jt=!0}catch(o){throw console.error(`Unable to import module '${e}' from '${t}'.`),o}}St(e){if(this.Pt.modulePathCb)return this.Pt.modulePathCb(e,this.Pt.debug);let t=["https://storage.googleapis.com/workbox-cdn/releases/7.0.0"];const o=`${e}.${this.$t}.js`,s=this.Pt.modulePathPrefix;return s&&(""===(t=s.split("/"))[t.length-1]&&t.splice(t.length-1,1)),t.push(o),t.join("/")}}}();var cacheFiles=[{url:"/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js",revision:"v8"}];workbox.precaching.precacheAndRoute(cacheFiles),workbox.routing.registerRoute(/\.(?:css|woff|woff2|ttf|eot)(\?.*)?$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"css-fonts-cache-v1"})),workbox.routing.registerRoute(/\/static\/.*\.js(\?.*)?$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"js-cache-v1"})),workbox.routing.registerRoute(/\.json$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"json-cache-v1"})),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/,new workbox.strategies.CacheFirst({cacheName:"image-cache-v1"}));