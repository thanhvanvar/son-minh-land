"use strict";(()=>{var e={};e.id=4832,e.ids=[4832],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},7328:(e,a,t)=>{t.r(a),t.d(a,{config:()=>l,default:()=>d,routeModule:()=>u});var r={};t.r(r),t.d(r,{default:()=>handler});var s=t(1802),i=t(7153),n=t(6249),o=t(844);async function handler(e,a){if("POST"!==e.method)return a.status(405).end();try{let{filterParams:t}=e.body,{data:r,error:s}=await o.O.from(t.tableBase).update(t.obj).eq("id",String(t.obj.id)).select();s?console.log("Error:",s.message):(console.log(r),a.status(200).json(r))}catch(e){console.error(e),a.status(500).json({message:"Internal server error"})}}let d=(0,n.l)(r,"default"),l=(0,n.l)(r,"config"),u=new s.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/admin/updateDataDelete",pathname:"/api/admin/updateDataDelete",bundlePath:"",filename:""},userland:r})},844:(e,a,t)=>{t.d(a,{O:()=>s});let r=require("@supabase/supabase-js"),s=(0,r.createClient)("https://vyjeeoqetducftdoemqr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5amVlb3FldGR1Y2Z0ZG9lbXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwMzMzOTQsImV4cCI6MjAxMzYwOTM5NH0.Z4MENpl9Rrx8cMXJNcnoEagji1jAVelQhQXJPJ4EhUc")}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(7328));module.exports=t})();