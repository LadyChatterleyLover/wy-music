(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5653f84"],{"4b4e":function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"back"},[s("div",{staticClass:"icon",on:{click:function(i){return t.$router.back()}}},[s("van-icon",{attrs:{name:"arrow-left",size:"26px",color:"#ccc"}})],1),s("div",{staticClass:"title"},[t._v("\n      视频\n    ")])]),s("div",{staticClass:"video"},[s("video",{attrs:{autoplay:"",src:t.url,controls:""}})]),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"w-content"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.picUrl,alt:""}})]),s("div",{staticClass:"name"},[t._v("\n        视频: "+t._s(t.name)+"\n      ")]),s("div",{staticClass:"publishTime"},[t._v("\n        发布时间: "+t._s(t.publishTime)+"\n      ")]),""!==t.description?s("div",{staticClass:"description"},[t._v("\n        简介: "+t._s(t.description)+"\n      ")]):t._e()])])])},e=[],c={name:"VideoPlay",components:{},props:{},data:function(){return{picUrl:"",publishTime:"",description:"",name:"",url:""}},methods:{},mounted:function(){var t=this;this.$com.req("video/detail?id=".concat(this.videoId)).then((function(i){console.log(i),t.picUrl=i.data.coverUrl,t.publishTime=t.$moment(i.data.publishTime).format("YYYY-MM-DD"),t.description=i.data.description,t.name=i.data.title})),this.$com.req("video/url?id=".concat(this.videoId)).then((function(i){t.url=i.urls[0].url,console.log(i)}))},created:function(){},filters:{},computed:{videoId:function(){return this.$store.state.videoId}},watch:{},directives:{}},a=c,o=(s("9883"),s("5511")),r=Object(o["a"])(a,n,e,!1,null,"dd281bc2",null);i["default"]=r.exports},9883:function(t,i,s){"use strict";var n=s("b385"),e=s.n(n);e.a},b385:function(t,i,s){}}]);
//# sourceMappingURL=chunk-e5653f84.1e0ec50d.js.map