import{y as w,A as $,m as q,r as l}from"./index-b2b43622.js";import{T as E,g as M,m as O}from"./request-4e7e7dbf.js";const r=w(),j=$("author",()=>({useauthor:q({author_id:r.useconfig.id,author_nickname:r.useconfig.nickname||r.useconfig.owner,author_motto:r.useconfig.motto,author_name:r.useconfig.owner,author_avatar_url:`https://avatars.githubusercontent.com/${r.useconfig.owner}?size=64`,author_url:`https://github.com/${r.useconfig.owner}`,author_repo:`https://github.com/${r.useconfig.owner}/${r.useconfig.repo}`,author_website_url:`https://${r.useconfig.owner}.github.io/${r.useconfig.repo}`,show_friend:r.useconfig.show_friend,friends_id:r.useconfig.friends_id,friends_name:r.useconfig.friends_name})})),t=w(),D=$("moment",()=>({usemoment:q({moment_title:t.useconfig.moment_name,moment_url:`https://${t.useconfig.owner}.github.io/${t.useconfig.repo}`,moment_pub_url:`https://github.com/${t.useconfig.owner}/${t.useconfig.repo}/issues`,moment_new_post_url:`https://github.com/${t.useconfig.owner}/${t.useconfig.repo}/issues/new/choose`,moment_config_url:`https://github.com/${t.useconfig.owner}/${t.useconfig.repo}/blob/main/src/common/constants/config.js`,moment_manifest_url:`https://github.com/${t.useconfig.owner}/${t.useconfig.repo}/blob/main/manifest.json`,moment_help_url:`https://github.com/${t.useconfig.owner}/${t.useconfig.repo}/blob/main/README.md`,moment_aboutme_url:`https://github.com/${t.useconfig.owner}/${t.useconfig.repo}/blob/main/About.md`,moment_api_url:`https://api.github.com/repos/${t.useconfig.owner}/${t.useconfig.repo}/issues`,moment_per_page:t.useconfig.per_page,moment_filter:"created",moment_state:t.useconfig.state,moment_author_type:t.useconfig.moment_author_type})}));w();new E({baseURL:"",timeout:1e4});const T=new E({baseURL:"",timeout:1e4});function R(s){return T.get({url:s.url,params:{page:s.page,per_page:s.per_page,filter:s.filter,state:s.state},interceptors:{requestInterceptor(a){return a},requestInterceptorCatch(a){return a},responseInterceptor(a){return a},responseInterceptorCatch(a){return a}}})}const o=j(),m=D(),B=$("momentdata",()=>{const s=l([]),a=l([]),A=l(0),x=l(1),p=l(0),b=l(!1),v=l(!1),y=l(!1),S=async()=>{try{const n=await R({url:m.usemoment.moment_api_url,page:1,per_page:m.usemoment.moment_per_page,filter:m.usemoment.moment_filter,state:m.usemoment.moment_state});k(n.data,!1)}catch(n){console.log(n)}},I=async()=>{try{const n=await R({url:m.usemoment.moment_api_url,page:x.value+1,per_page:m.usemoment.moment_per_page,filter:m.usemoment.moment_filter,state:m.usemoment.moment_state});k(n.data,!0)}catch(n){console.log(n)}},U=async()=>{await S()},k=(n,L)=>{if(Array.isArray(n)&&n.length>0){if(o.useauthor.show_friend&&Array.isArray(o.useauthor.friends_id)&&o.useauthor.friends_id.length>0?s.value=n.filter(u=>{var e;return(u.author_association===m.usemoment.moment_author_type||o.useauthor.friends_id.includes((e=u.user)==null?void 0:e.login))&&u.state===m.usemoment.moment_state}):s.value=n.filter(u=>u.author_association===m.usemoment.moment_author_type&&u.state===m.usemoment.moment_state),s.value.length>0){if(L){const u=[];s.value.forEach(e=>{let g=o.useauthor.author_nickname;o.useauthor.friends_id.indexOf(e.user.login)>-1&&Array.isArray(o.useauthor.friends_name)&&o.useauthor.friends_name.length===o.useauthor.friends_id.length&&(g=o.useauthor.friends_id.indexOf(e.user.login)>-1?o.useauthor.friends_name[o.useauthor.friends_id.indexOf(e.user.login)]:e.user.login);let i=!1,_=!1,d=!1;const c=e.labels.some(h=>h.name==="音乐"),f=e.labels.some(h=>h.name==="视频");c&&f?d=!0:!c&&f?(i=!1,_=!0):c&&!f?(i=!0,_=!1):(i=!1,_=!1),u.push({moment_avatar_url:e.user.avatar_url,moment_author_nickname:g,moment_html_url:e.user.html_url,moment_login_user:e.user.login,moment_created_at_text:e.created_at,moment_created_at:M(e.created_at),moment_title:e.title,moment_body:O.parse(e.body?e.body:""),moment_is_only_music:i,moment_is_only_video:_,moment_is_music_video:d,moment_isshowpic:!1})}),P(),a.value.push(...u),v.value=!0}else if(s.value[0].number!==p.value||!p.value){const u=[];s.value.forEach(e=>{let g=o.useauthor.author_nickname;o.useauthor.friends_id.indexOf(e.user.login)>-1&&Array.isArray(o.useauthor.friends_name)&&o.useauthor.friends_name.length===o.useauthor.friends_id.length&&(g=o.useauthor.friends_id.indexOf(e.user.login)>-1?o.useauthor.friends_name[o.useauthor.friends_id.indexOf(e.user.login)]:e.user.login);let i=!1,_=!1,d=!1;const c=e.labels.some(h=>h.name==="音乐"),f=e.labels.some(h=>h.name==="视频");c&&f?d=!0:!c&&f?(i=!1,_=!0):c&&!f?(i=!0,_=!1):(i=!1,_=!1),u.push({moment_avatar_url:e.user.avatar_url,moment_author_nickname:g,moment_html_url:e.user.html_url,moment_login_user:e.user.login,moment_created_at_text:e.created_at,moment_created_at:M(e.created_at),moment_title:e.title,moment_body:O.parse(e.body?e.body:""),moment_is_only_music:i,moment_is_only_video:_,moment_is_music_video:d,moment_isshowpic:!1})}),C(s.value[0].number),a.value=u,b.value=!0}else b.value=!1;A.value=a.value.length}}else L&&(v.value=!1);y.value||(y.value=!0)},C=n=>{p.value=n},P=()=>{x.value++};return{momentlist:a,moments_total_num:A,isPollDownUpdated:b,isPollUpLoadMore:v,isLoaded:y,getMomentList:S,getMomentListLoadMore:I,getMomentListRefresh:U}},{persist:{paths:["moments_total_num"]}});export{D as a,j as b,B as u};
