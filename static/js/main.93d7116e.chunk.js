(this["webpackJsonpsocial-media-erinberg24"]=this["webpackJsonpsocial-media-erinberg24"]||[]).push([[0],{10:function(e,t,a){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},14:function(e,t,a){e.exports={navbar:"Navbar_navbar__31-FB"}},16:function(e,t,a){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},18:function(e,t,a){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},24:function(e,t,a){e.exports={header:"Header_header__3mObx"}},3:function(e,t,a){e.exports={profile:"Profile_profile__3I-Sz",header:"Profile_header__2ChJJ",user:"Profile_user__2YOKO",description:"Profile_description__1sqjK",posts:"Profile_posts__rwx78",followers:"Profile_followers__1mm1E",followTitle:"Profile_followTitle__3xPXX",followNumber:"Profile_followNumber__2eYIk",followBtn:"Profile_followBtn__Ntles",unfollowBtn:"Profile_unfollowBtn__1rlHm"}},31:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),l=(a(36),a(18)),i=a.n(l),c=function(e){return"/social-media-erinberg24"+e},m=a(24),d=a.n(m);var u=function(){return r.a.createElement("header",{className:d.a.header},r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement("img",{src:c("/assets/camera.svg"),alt:"camera"}))),r.a.createElement("div",null,r.a.createElement("img",{src:c("/assets/logo.png"),alt:"logo"})),r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement("img",{src:c("/assets/message.svg"),alt:"message"}))))},p=a(9),f=a(8),v=a.n(f),g=a(4);var E=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(!1),i=Object(p.a)(l,2),m=i[0],d=i[1];return r.a.createElement("article",{className:v.a.post},r.a.createElement("header",{className:v.a.header},r.a.createElement("button",{className:v.a.user},r.a.createElement("img",{src:c(e.user.photo),alt:"User Profile"}),r.a.createElement(g.b,{to:"/profile/"+e.user.id+"?"},r.a.createElement("span",null,e.user.id," ")))),r.a.createElement("section",{className:v.a.content},r.a.createElement("div",{className:v.a.imgContainer},r.a.createElement("img",{src:c(e.post.photo),alt:"Post"}))),r.a.createElement("section",{className:v.a.actions},r.a.createElement("button",null,e.likes.self?r.a.createElement("img",{src:c("/assets/unlike.svg"),alt:"Unlike Action",onClick:function(){e.onUnlike(e.post.id)}}):r.a.createElement("img",{src:c("/assets/like.svg"),alt:"Like Action",onClick:function(){e.onLike(e.post.id)}})),r.a.createElement("button",{onClick:function(e){return d(!m)}},r.a.createElement("img",{src:c("/assets/comment.svg"),alt:"Comment Action"}))),r.a.createElement("section",{className:v.a.activity},r.a.createElement("div",{className:v.a.likes.count},e.likes.count," likes"),r.a.createElement("div",{className:v.a.comments},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(g.b,{to:"/profile/"+e.post.userId+"?"},e.post.userId)),r.a.createElement("span",null,e.post.desc)),e.comments.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(g.b,{to:"/profile/"+e.userId+"?"},r.a.createElement("span",null,e.userId)),r.a.createElement("span",null,e.text))}))),r.a.createElement("time",{className:v.a.time},function(e){var t=Math.floor((new Date-new Date(e))/1e3),a=Math.floor(t/31556926);return a>=1?a+" years":(a=Math.floor(t/2592e3))>=1?a+" months":(a=Math.floor(t/86400))>=1?a+" days":(a=Math.floor(t/3600))>=1?a+" hours":(a=Math.floor(t/60))>=1?a+" minutes":Math.floor(t)+" seconds"}(e.post.datetime).toUpperCase()," AGO")),m&&r.a.createElement("form",{className:v.a.addComment,onSubmit:function(t){e.onComment(e.post.id,o),s(""),d(!1),t.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"Add a comment\u2026",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Post")))},h=a(1),_=a(11);var b=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),a=0;a<1e7&&!((new Date).getTime()-t>e);a++);}(1),e?e+t:t},I={currentUserId:"erin",users:[{id:"erin",email:"bergec@bc.edu",photo:"/assets/erinProfile.png",name:"Erin Berg",bio:"I like big hugs and long walks"},{id:"courtney",email:"petershy@bc.edu",photo:"/assets/courtneyProfile.png",name:"Courtney Peterson",bio:"THE woman in stem. California cutie"},{id:"maddie",email:"kaubrys@bc.edu",photo:"/assets/maddieProfile.png",name:"Maddie Kaubrys",bio:"From Maine."},{id:"matt",email:"oneilop@bc.edu",photo:"/assets/mattProfile.png",name:"Matt O'Neil",bio:"I just like to smile. Smiling's my favorite. Roll eags forever."},{id:"keith",email:"carrollky@bc.edu",photo:"/assets/keithProfile.png",name:"Keith Carroll",bio:""}],followers:[{userId:"erin",followerId:"courtney"},{userId:"erin",followerId:"matt"},{userId:"erin",followerId:"maddie"}],posts:[{id:"post-1",userId:"erin",photo:"/assets/erinPost3.jpg",desc:"Senior Sunrise",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"maddie",photo:"/assets/maddiePost2.png",desc:"Last Night of College :( ",datetime:"2020-02-07T22:45:28Z"},{id:"post-3",userId:"erin",photo:"/assets/erinPost2.png",desc:"#CostaRica #SustainabilityTrip",datetime:"2020-02-06T22:45:28Z"},{id:"post-4",userId:"erin",photo:"/assets/maddiePost.jpg",desc:"10/10 - Rex Orange County",datetime:"2020-02-05T22:45:28Z"},{id:"post-5",userId:"courtney",photo:"/assets/courtneyPost2.png",desc:"Hiking Kinsman Ridge",datetime:"2020-02-04T22:45:28Z"},{id:"post-6",userId:"keith",photo:"/assets/keithPost.jpg",desc:"First Sunset of Senior Year!",datetime:"2020-02-03T22:45:28Z"},{id:"post-7",userId:"matt",photo:"/assets/mattPost.jpg",desc:"Wat's up? Sun's up! -- at Angkor Wat",datetime:"2020-02-02T22:45:28Z"},{id:"post-8",userId:"courtney",photo:"/assets/courtneyPost.png",desc:"Old friends and new friends on the Camino De Santiago!",datetime:"2020-02-01T22:45:28Z"}],comments:[{userId:"keith",postId:"post-1",text:"Miss it already!",datetime:"2020-02-09T22:51:40Z"},{userId:"erin",postId:"post-2",text:"CUTE",datetime:"2020-02-09T22:52:01Z"},{userId:"courtney",postId:"post-2",text:"Love you!",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"keith",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"erin",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"matt",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"courtney",postId:"post-3",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-4",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-5",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-6",datetime:"2020-02-09T22:53:40Z"},{userId:"courtney",postId:"post-7",datetime:"2020-02-09T22:53:40Z"},{userId:"keith",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"maddie",postId:"post-3",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-4",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-5",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-6",datetime:"2020-02-09T22:53:40Z"},{userId:"maddie",postId:"post-7",datetime:"2020-02-09T22:53:40Z"}]},w=Object(n.createContext)();var N=function(e){var t=Object(n.useState)(I),a=Object(p.a)(t,2),o=a[0],s=a[1];return r.a.createElement(w.Provider,{value:Object(_.a)({},o,{addComment:function(e,t){var a={userId:o.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};s(Object(_.a)({},o,{comments:o.comments.concat(a)}))},addLike:function(e){var t={userId:o.currentUserId,postId:e,datetime:(new Date).toISOString()};s(Object(_.a)({},o,{likes:o.likes.concat(t)}))},removeLike:function(e){s(Object(_.a)({},o,{likes:o.likes.filter((function(t){return!(t.userId===o.currentUserId&&t.postId===e)}))}))},addPost:function(e,t){var a={id:b("post"),userId:o.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};s(Object(_.a)({},o,{posts:o.posts.concat(a)}))},addFollower:function(e,t){s(Object(_.a)({},o,{followers:o.followers.concat({userId:e,followerId:t})}))},removeFollower:function(e,t){s(Object(_.a)({},o,{followers:o.followers.filter((function(a){return a.userId!==e&&a.followerId!==t}))}))}})},e.children)};var k=function(e){var t=Object(h.g)().postId,a=Object(n.useContext)(w),o=a.posts,s=a.users,l=a.comments,i=a.likes,c=a.currentUserId,m=a.addComment,d=a.addLike,u=a.removeLike;function p(e){return s.find((function(t){return t.id===e.userId}))}function f(e){return l.filter((function(t){return t.postId===e.id}))}function v(e){var t=i.filter((function(t){return t.postId===e.id}));return{self:t.some((function(e){return e.userId===c})),count:t.length}}var g=o.filter((function(e){return e.id===t}));return r.a.createElement("div",null,g.length>0?g.map((function(e){return r.a.createElement(E,{key:e.id,user:p(e),post:e,comments:f(e),likes:v(e),onLike:d,onUnlike:u,onComment:m})})):o.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return r.a.createElement(E,{key:e.id,user:p(e),post:e,comments:f(e),likes:v(e),onLike:d,onUnlike:u,onComment:m})})))},P=a(14),O=a.n(P);var D=function(){return r.a.createElement("nav",{className:O.a.navbar},r.a.createElement("div",{className:O.a.navItem},r.a.createElement(g.b,{to:"/"},r.a.createElement("img",{src:c("/assets/home.svg"),alt:"Home"}))),r.a.createElement("div",{className:O.a.navItem},r.a.createElement(g.b,{to:"/explore"},r.a.createElement("img",{src:c("/assets/explore.svg"),alt:"Explore"}))),r.a.createElement("div",{className:O.a.navItem},r.a.createElement(g.b,{to:"/newpost"},r.a.createElement("img",{src:c("/assets/newpost.svg"),alt:"NewPost"}))),r.a.createElement("div",{className:O.a.navItem},r.a.createElement(g.b,{to:"/activity"},r.a.createElement("img",{src:c("/assets/activity.svg"),alt:"Activity"}))),r.a.createElement("div",{className:O.a.navItem},r.a.createElement(g.b,{to:"/profile"},r.a.createElement("img",{src:c("/assets/profile.svg"),alt:"Profile"}))))},y=a(3),j=a.n(y),T=a(16),C=a.n(T);var S=function(e){return r.a.createElement("div",{className:C.a.square},r.a.createElement("div",{className:C.a.content},r.a.createElement("img",{className:C.a.image,src:c(e.post.photo),alt:"Post Thumbnail"})))};var x=function(e){var t=Object(h.g)().userId,a=Object(n.useContext)(w),o=a.posts,s=a.users,l=a.followers,i=a.currentUserId,m=a.addFollower,d=a.removeFollower;t||(t=i);var u=s.find((function(e){return e.id===t}));o=o.filter((function(e){return e.userId===t}));var p=(l=l.filter((function(e){return e.userId===t}))).filter((function(e){return e.followerId===t}));return r.a.createElement("article",{className:j.a.profile},r.a.createElement("header",{className:j.a.header},r.a.createElement("div",{className:j.a.user},r.a.createElement("img",{src:c(u.photo),alt:"Profile"})),r.a.createElement("div",{className:j.a.id},r.a.createElement("span",null,u.id),t!==i&&r.a.createElement("div",null,l.some((function(e){return e.followerId===i}))?r.a.createElement("button",{className:j.a.unfollowBtn,onClick:function(){d(t,i)}},"Unfollow"):r.a.createElement("button",{className:j.a.followBtn,onClick:function(){m(t,i)}},"Follow")))),r.a.createElement("section",{className:j.a.description},r.a.createElement("span",null," ",u.name),r.a.createElement("div",null,u.bio)),r.a.createElement("section",{className:j.a.followers},r.a.createElement("hr",null),r.a.createElement("span",null,r.a.createElement("div",{className:j.a.followItem},r.a.createElement("div",{className:j.a.followNumber},o.length),r.a.createElement("div",{className:j.a.followTitle},"posts")),r.a.createElement("div",{className:j.a.followItem},r.a.createElement("div",{className:j.a.followNumber},p.length),r.a.createElement("div",{className:j.a.followTitle},"following")),r.a.createElement("div",{className:j.a.followItem},r.a.createElement("div",{className:j.a.followNumber},l.length),r.a.createElement("div",{className:j.a.followTitle},"followers")))),r.a.createElement("section",{className:j.a.posts},o.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return r.a.createElement(g.b,{to:"/"+e.id},r.a.createElement(S,{key:e.id,post:e}))}))))},Z=a(10),L=a.n(Z),A=a(26),U=a(27),M=a(29),B=a(28),F=a(13),R=a(30),q=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(M.a)(this,Object(B.a)(t).call(this,e))).handleDragEnter=a.handleDragEnter.bind(Object(F.a)(a)),a.handleDrop=a.handleDrop.bind(Object(F.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(F.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(F.a)(a)),a}return Object(R.a)(t,e),Object(U.a)(t,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=r.a.Children.only(this.props.children);return r.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),t}(n.PureComponent);var G=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(""),i=Object(p.a)(l,2),c=i[0],m=i[1],d=Object(n.useState)(null),u=Object(p.a)(d,2),f=u[0],v=u[1],g=Object(n.useState)(""),E=Object(p.a)(g,2),_=E[0],b=E[1],I=Object(h.f)(),N=Object(n.useContext)(w).addPost;return r.a.createElement("div",null,r.a.createElement("div",{className:L.a.photo},f?r.a.createElement("img",{src:f,alt:"New Post"}):r.a.createElement("div",{className:L.a.message},"Drop your image"),r.a.createElement(q,{onDragEnter:function(e){s(!0)},onDragLeave:function(e){s(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var a=new FileReader;a.onloadend=function(e){v(e.target.result)},a.readAsDataURL(t)}}s(!1)}}},r.a.createElement("div",{className:[L.a.dropArea,o?L.a.dragging:null].join(" ")}))),r.a.createElement("div",{className:L.a.desc},r.a.createElement("textarea",{placeholder:"Add a description\u2026",rows:"2",value:c,onChange:function(e){m(e.target.desc)}})),r.a.createElement("div",{className:L.a.error},_),r.a.createElement("div",{className:L.a.actions},r.a.createElement("button",{onClick:function(){I.goBack()}},"Cancel"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),null!==f?(b(""),N(f,c),I.push("/")):b("You need to add a photo!")}},"Share")))};var H=function(e){return r.a.createElement("div",null,"Activity")};var J=function(e){return r.a.createElement("div",null,"Explore")};var K=function(){return r.a.createElement(g.a,{basename:"/social-media-erinberg24"},r.a.createElement(N,null,r.a.createElement("div",{className:i.a.container},r.a.createElement(u,null),r.a.createElement("main",{className:i.a.content},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/profile/:userId?"},r.a.createElement(x,null)),r.a.createElement(h.a,{path:"/newpost"},r.a.createElement(G,null),";"),r.a.createElement(h.a,{path:"/explore"},r.a.createElement(J,null)),r.a.createElement(h.a,{path:"/activity"},r.a.createElement(H,null)),r.a.createElement(h.a,{path:"/:postId?"},r.a.createElement(k,null)))),r.a.createElement(D,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={post:"Post_post__hw-08",header:"Post_header__1sWQj",user:"Post_user__SDGuF",content:"Post_content__kMAfq",imgContainer:"Post_imgContainer__8ZoJZ",actions:"Post_actions__3C3ej",activity:"Post_activity__8eLdp",likes:"Post_likes__3N_Ej",time:"Post_time__O-7a6",comments:"Post_comments__3PEbR",addComment:"Post_addComment__aGSqH"}}},[[31,1,2]]]);
//# sourceMappingURL=main.93d7116e.chunk.js.map