"use strict";exports.id=839,exports.ids=[839],exports.modules={839:(e,s,t)=>{t.a(e,async(e,n)=>{try{t.r(s),t.d(s,{default:()=>HeaderAdmin});var d=t(997),a=t(6689),c=t(1163),r=t(2406),i=e([r]);function HeaderAdmin(){let e=(0,c.useRouter)();new URLSearchParams("");let[s,t]=(0,a.useState)("");return(0,a.useEffect)(()=>{"project"==e.query.contentId&&t("Dự \xe1n"),"/admin/project/edit/0"==e.asPath&&t("Th\xeam dự \xe1n"),"project"==e.query.contentId&&e.query.postId&&t("Chỉnh sửa dự \xe1n"),"news"==e.query.contentId&&t("Tin tức"),"/admin/news/edit/0"==e.asPath&&t("Th\xeam tin tức"),"news"==e.query.contentId&&e.query.postId&&t("Chỉnh sửa tin tức")},[e.query]),d.jsx(d.Fragment,{children:(0,d.jsxs)("div",{className:"grid grid-cols-12 gap-8 mb-[20px] ",children:[d.jsx("div",{className:"col-span-6",children:d.jsx("p",{className:"font-bold text-2xl",children:s})}),d.jsx("div",{className:"col-span-6",children:e.query.postId?(0,d.jsxs)("div",{className:"flex gap-4 justify-end",children:[d.jsx(r.Button,{color:"success",type:"submit",children:"Cập nhật"}),d.jsx(r.Button,{color:"danger",onClick:()=>e.push(`/admin/${e.query.contentId}`,void 0,{shallow:!0}),children:"Quay lại"})]}):(0,d.jsxs)("div",{className:"flex gap-4 justify-end",children:[d.jsx(r.Button,{color:"success",onClick:()=>e.push(`/admin/${e.query.contentId}/edit/0`,void 0,{shallow:!0}),children:"Th\xeam"}),d.jsx(r.Button,{color:"danger",onClick:()=>e.push(`/admin/${e.query.contentId}/deleted`,void 0,{shallow:!0}),children:"X\xf3a"})]})})]})})}r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}})}};