(this["webpackJsonpsocial-media-erinberg24"]=this["webpackJsonpsocial-media-erinberg24"]||[]).push([[0],{10:function(e,t,a){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},13:function(e,t,a){e.exports={navbar:"Navbar_navbar__31-FB"}},16:function(e,t,a){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},18:function(e,t,a){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},25:function(e,t,a){e.exports={header:"Header_header__3mObx"}},3:function(e,t,a){e.exports={profile:"Profile_profile__3I-Sz",header:"Profile_header__2ChJJ",user:"Profile_user__2YOKO",description:"Profile_description__1sqjK",posts:"Profile_posts__rwx78",followers:"Profile_followers__1mm1E",followTitle:"Profile_followTitle__3xPXX",followNumber:"Profile_followNumber__2eYIk",followBtn:"Profile_followBtn__Ntles",unfollowBtn:"Profile_unfollowBtn__1rlHm"}},33:function(e,t,a){e.exports=a(43)},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),s=a.n(o),l=(a(38),a(14)),i=a(7),c=a(18),m=a.n(c),d=function(e){return"/social-media-erinberg24"+e},u=a(25),p=a.n(u);var f=function(){return r.a.createElement("header",{className:p.a.header},r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement("img",{src:d("/assets/camera.svg"),alt:"camera"}))),r.a.createElement("div",null,r.a.createElement("img",{src:d("/assets/logo.png"),alt:"logo"})),r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement("img",{src:d("/assets/message.svg"),alt:"message"}))))},g=a(6),v=a.n(g),E=a(2);var h=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(!1),c=Object(i.a)(l,2),m=c[0],u=c[1];return r.a.createElement("article",{className:v.a.post},r.a.createElement("header",{className:v.a.header},r.a.createElement("button",{className:v.a.user},r.a.createElement("img",{src:d(e.user.photo),alt:"User Profile"}),r.a.createElement(E.b,{to:"/profile/"+e.user.id+"?"},r.a.createElement("span",null,e.user.id," ")))),r.a.createElement("section",{className:v.a.content},r.a.createElement("div",{className:v.a.imgContainer},r.a.createElement("img",{src:d(e.post.photo),alt:"Post"}))),r.a.createElement("section",{className:v.a.actions},r.a.createElement("button",null,e.likes.self?r.a.createElement("img",{src:d("/assets/unlike.svg"),alt:"Unlike Action",onClick:function(){e.onUnlike(e.post.id)}}):r.a.createElement("img",{src:d("/assets/like.svg"),alt:"Like Action",onClick:function(){e.onLike(e.post.id)}})),r.a.createElement("button",{onClick:function(e){return u(!m)}},r.a.createElement("img",{src:d("/assets/comment.svg"),alt:"Comment Action"}))),r.a.createElement("section",{className:v.a.activity},r.a.createElement("div",{className:v.a.likes.count},e.likes.count," likes"),r.a.createElement("div",{className:v.a.comments},r.a.createElement("div",null,r.a.createElement(E.b,{to:"/profile/"+e.user.id+"?"},r.a.createElement("span",null,e.post.userId)),r.a.createElement("span",null,e.post.desc)),e.comments.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(E.b,{to:"/profile/"+e.userId+"?"},r.a.createElement("span",null,e.userId)),r.a.createElement("span",null,e.text))}))),r.a.createElement("time",{className:v.a.time},function(e){var t=Math.floor((new Date-new Date(e))/1e3),a=Math.floor(t/31556926);return a>=1?a+" years":(a=Math.floor(t/2592e3))>=1?a+" months":(a=Math.floor(t/86400))>=1?a+" days":(a=Math.floor(t/3600))>=1?a+" hours":(a=Math.floor(t/60))>=1?a+" minutes":Math.floor(t)+" seconds"}(e.post.datetime).toUpperCase()," AGO")),m&&r.a.createElement("form",{className:v.a.addComment,onSubmit:function(t){e.onComment(e.post.id,o),s(""),u(!1),t.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"Add a comment\u2026",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Post")))},_=a(9);var I=function(e){var t=e.store,a=Object(_.g)().postId;function n(e){return t.users.find((function(t){return t.id===e.userId}))}function o(e){return t.comments.filter((function(t){return t.postId===e.id}))}function s(e){var a=t.likes.filter((function(t){return t.postId===e.id}));return{self:a.some((function(e){return e.userId===t.currentUserId})),count:a.length}}var l=t.posts.filter((function(e){return e.id===a}));return r.a.createElement("div",null,l.length>0?l.map((function(t){return r.a.createElement(h,{key:t.id,user:n(t),post:t,comments:o(t),likes:s(t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment})})):t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(t){return r.a.createElement(h,{key:t.id,user:n(t),post:t,comments:o(t),likes:s(t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment})})))},b=a(13),w=a.n(b);var N=function(){return r.a.createElement("nav",{className:w.a.navbar},r.a.createElement("div",{className:w.a.navItem},r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{src:d("/assets/home.svg"),alt:"Home"}))),r.a.createElement("div",{className:w.a.navItem},r.a.createElement(E.b,{to:"/explore"},r.a.createElement("img",{src:d("/assets/explore.svg"),alt:"Explore"}))),r.a.createElement("div",{className:w.a.navItem},r.a.createElement(E.b,{to:"/newpost"},r.a.createElement("img",{src:d("/assets/newpost.svg"),alt:"NewPost"}))),r.a.createElement("div",{className:w.a.navItem},r.a.createElement(E.b,{to:"/activity"},r.a.createElement("img",{src:d("/assets/activity.svg"),alt:"Activity"}))),r.a.createElement("div",{className:w.a.navItem},r.a.createElement(E.b,{to:"/profile"},r.a.createElement("img",{src:d("/assets/profile.svg"),alt:"Profile"}))))},k=a(3),P=a.n(k),D=a(16),y=a.n(D);var O=function(e){return r.a.createElement("div",{className:y.a.square},r.a.createElement("div",{className:y.a.content},r.a.createElement("img",{className:y.a.image,src:d(e.post.photo),alt:"Post Thumbnail"})))};var T=function(e){var t=e.store,a=t.currentUserId,n=t.users.find((function(e){return e.id===t.currentUserId})),o=t.posts.filter((function(e){return e.userId===a})),s=t.followers.filter((function(e){return e.userId===a})),l=t.followers.filter((function(e){return e.followerId===a}));return r.a.createElement("article",{className:P.a.profile},r.a.createElement("header",{className:P.a.header},r.a.createElement("div",{className:P.a.user},r.a.createElement("img",{src:d(n.photo),alt:"Profile"}),r.a.createElement("span",null,n.id),r.a.createElement("button",{className:P.a.followBtn},"Follow"))),r.a.createElement("section",{className:P.a.description},r.a.createElement("span",null," ",n.name),r.a.createElement("div",null,n.bio)),r.a.createElement("section",{className:P.a.followers},r.a.createElement("hr",null),r.a.createElement("span",null,r.a.createElement("div",{className:P.a.followItem},r.a.createElement("div",{className:P.a.followNumber},o.length),r.a.createElement("div",{className:P.a.followTitle},"posts")),r.a.createElement("div",{className:P.a.followItem},r.a.createElement("div",{className:P.a.followNumber},l.length),r.a.createElement("div",{className:P.a.followTitle},"following")),r.a.createElement("div",{className:P.a.followItem},r.a.createElement("div",{className:P.a.followNumber},s.length),r.a.createElement("div",{className:P.a.followTitle},"followers")))),r.a.createElement("section",{className:P.a.posts},o.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return r.a.createElement(E.b,{to:"/"+e.id},r.a.createElement(O,{key:e.id,post:e}))}))))},j=a(10),C=a.n(j),S=a(28),Z=a(29),x=a(31),U=a(30),L=a(12),A=a(32),M=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(x.a)(this,Object(U.a)(t).call(this,e))).handleDragEnter=a.handleDragEnter.bind(Object(L.a)(a)),a.handleDrop=a.handleDrop.bind(Object(L.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(L.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(L.a)(a)),a}return Object(A.a)(t,e),Object(Z.a)(t,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=r.a.Children.only(this.props.children);return r.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),t}(n.PureComponent);var B=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(""),c=Object(i.a)(l,2),m=c[0],d=c[1],u=Object(n.useState)(null),p=Object(i.a)(u,2),f=p[0],g=p[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),h=E[0],I=E[1],b=Object(_.f)();return r.a.createElement("div",null,r.a.createElement("div",{className:C.a.photo},f?r.a.createElement("img",{src:f,alt:"New Post"}):r.a.createElement("div",{className:C.a.message},"Drop your image"),r.a.createElement(M,{onDragEnter:function(e){s(!0)},onDragLeave:function(e){s(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var a=new FileReader;a.onloadend=function(e){g(e.target.result)},a.readAsDataURL(t)}}s(!1)}}},r.a.createElement("div",{className:[C.a.dropArea,o?C.a.dragging:null].join(" ")}))),r.a.createElement("div",{className:C.a.desc},r.a.createElement("textarea",{placeholder:"Add a description\u2026",rows:"2",value:m,onChange:function(e){d(e.target.desc)}})),r.a.createElement("div",{className:C.a.error},h),r.a.createElement("div",{className:C.a.actions},r.a.createElement("button",{onClick:function(){b.goBack()}},"Cancel"),r.a.createElement("button",{onClick:function(t){t.preventDefault(),null!==f?(I(""),e.onPost(f,m),b.push("/")):I("You need to add a photo!")}},"Share")))};var F=function(e){return r.a.createElement("div",null,"Activity")};var R=function(e){return r.a.createElement("div",null,"Explore")},q={currentUserId:"erin",users:[{id:"erin",email:"bergec@bc.edu",photo:"/assets/erinProfile.png",name:"Erin Berg",bio:"I like big hugs and long walks"},{id:"courtney",email:"petershy@bc.edu",photo:"/assets/courtneyProfile.png",name:"Courtney Peterson",bio:"THE woman in stem. California cutie"},{id:"maddie",email:"kaubrys@bc.edu",photo:"/assets/maddieProfile.png",name:"Maddie Kaubrys",bio:"From Maine."},{id:"matt",email:"oneilop@bc.edu",photo:"/assets/mattProfile.png",name:"Matt O'Neil",bio:"I just like to smile. Smiling's my favorite. Roll eags forever."},{id:"keith",email:"carrollky@bc.edu",photo:"/assets/keithProfile.png",name:"Keith Carroll",bio:""}],followers:[{userId:"erin",followerId:"courtney"},{userId:"erin",followerId:"matt"},{userId:"erin",followerId:"maddie"}],posts:[{id:"post-1",userId:"erin",photo:"/assets/erinPost3.jpg",desc:"Senior Sunrise",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"maddie",photo:"/assets/maddiePost2.png",desc:"Last Night of College :( ",datetime:"2020-02-07T22:45:28Z"},{id:"post-3",userId:"erin",photo:"/assets/erinPost2.png",desc:"#CostaRica #SustainabilityTrip",datetime:"2020-02-06T22:45:28Z"},{id:"post-4",userId:"erin",photo:"/assets/maddiePost.jpg",desc:"10/10 - Rex Orange County",datetime:"2020-02-05T22:45:28Z"},{id:"post-5",userId:"courtney",photo:"/assets/courtneyPost2.png",desc:"Hiking Kinsman Ridge",datetime:"2020-02-04T22:45:28Z"},{id:"post-6",userId:"keith",photo:"/assets/keithPost.jpg",desc:"First Sunset of Senior Year!",datetime:"2020-02-03T22:45:28Z"},{id:"post-7",userId:"matt",photo:"/assets/mattPost.jpg",desc:"Wat's up? Sun's up! -- at Angkor Wat",datetime:"2020-02-02T22:45:28Z"},{id:"post-8",userId:"courtney",photo:"/assets/courtneyPost.png",desc:"Old friends and new friends on the Camino De Santiago!",datetime:"2020-02-01T22:45:28Z"}],comments:[{userId:"keith",postId:"post-1",text:"Miss it already!",datetime:"2020-02-09T22:51:40Z"},{userId:"erin",postId:"post-2",text:"CUTE",datetime:"2020-02-09T22:52:01Z"},{userId:"courtney",postId:"post-2",text:"Love you!",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"keith",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"erin",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"matt",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"courtney",postId:"post-3",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-4",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-5",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-6",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-7",datetime:"2020-02-09T22:53:40Z"},{userId:"keith",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"maddie",postId:"post-3",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-4",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-5",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-6",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-7",datetime:"2020-02-09T22:53:40Z"}]};var G=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),a=0;a<1e7&&!((new Date).getTime()-t>e);a++);}(1),e?e+t:t};var H=function(){var e=Object(n.useState)("home"),t=Object(i.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)(q),s=Object(i.a)(o,2),c=s[0],d=s[1];function u(e){var t={userId:c.currentUserId,postId:e,datetime:(new Date).toISOString()};d(Object(l.a)({},c,{likes:c.likes.concat(t)}))}function p(e){d(Object(l.a)({},c,{likes:c.likes.filter((function(t){return!(t.userId===c.currentUserId&&t.postId===e)}))}))}function g(e,t){var a={userId:c.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};d(Object(l.a)({},c,{comments:c.comments.concat(a)}))}function v(e,t){var n={id:G("post"),userId:c.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};d(Object(l.a)({},c,{posts:c.posts.concat(n)})),a("home")}function h(){a("home")}return r.a.createElement(E.a,{basename:"/social-media-erinberg24"},r.a.createElement("div",{className:m.a.container},r.a.createElement(f,null),r.a.createElement("main",{className:m.a.content},r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/profile/:userId?"},r.a.createElement(T,{store:c,onFollow:function(e,t){var a={userId:c.userId,followerId:c.followerId};d(Object(l.a)({},c,{followers:c.followers.concat(a)}))},onUnfollow:function(e,t){d(Object(l.a)({},c,{followers:c.followers.filter((function(e){return!(e.userId===c.userId&&e.followerId===t)}))}))}})),r.a.createElement(_.a,{path:"/newpost"},r.a.createElement(B,{store:c,addPost:v,cancelPost:h}),";"),r.a.createElement(_.a,{path:"/explore"},r.a.createElement(R,null)),r.a.createElement(_.a,{path:"/activity"},r.a.createElement(F,null)),r.a.createElement(_.a,{path:"/:postId?"},r.a.createElement(I,{store:c,onLike:u,onUnlike:p,onComment:g})))),r.a.createElement(N,{onNavChange:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={post:"Post_post__hw-08",header:"Post_header__1sWQj",user:"Post_user__SDGuF",content:"Post_content__kMAfq",imgContainer:"Post_imgContainer__8ZoJZ",actions:"Post_actions__3C3ej",activity:"Post_activity__8eLdp",likes:"Post_likes__3N_Ej",time:"Post_time__O-7a6",comments:"Post_comments__3PEbR",addComment:"Post_addComment__aGSqH"}}},[[33,1,2]]]);
//# sourceMappingURL=main.27b90a23.chunk.js.map