(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4208f98f"],{"88d5":function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"back"},[i("div",{staticClass:"icon",on:{click:function(s){return t.$router.back()}}},[i("van-icon",{attrs:{name:"arrow-left",size:"26px",color:"#fff"}})],1),i("div",{staticClass:"title"},[t._v("\n      歌手\n    ")])]),i("div",{ref:"wrapper",staticClass:"wrapper"},[i("div",{staticClass:"w-content"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.singer.picUrl,alt:""}})]),i("div",{staticClass:"t-name"},[i("div",{staticClass:"name"},[t._v("\n          "+t._s(t.singName)+"\n        ")]),t._l(t.singer.alias,(function(s,n){return i("div",{key:n,staticClass:"alias"},[t._v("\n          ("+t._s(s)+")\n        ")])}))],2),i("div",{staticClass:"content"},[i("div",{staticClass:"c-top"},[i("div",{staticClass:"c-icon"},[i("van-icon",{attrs:{name:"play-circle-o",size:"20px"}})],1),i("div",{staticClass:"play"},[t._v("\n            播放全部 (共"+t._s(t.playList.length)+"首)\n          ")])]),t._l(t.playList,(function(s,n){return i("div",{key:n,staticClass:"item",on:{click:function(i){return t.goToPlay(s,n)}}},[i("div",{staticClass:"index"},[t._v("\n            "+t._s(n+1)+"\n          ")]),i("div",{staticClass:"i-desc"},[i("div",{staticClass:"i-name"},[i("div",[t._v("\n                "+t._s(s.name)+"\n              ")])]),i("div",{staticClass:"i-singer"},[t._l(s.artists,(function(n,a){return i("div",{key:a,staticClass:"singer"},[t._v("\n                "+t._s(n.name)+" "),a!==s.artists.length-1?i("span",[t._v(" / ")]):t._e(),a===s.artists.length-1?i("span",[t._v("- ")]):t._e()])})),i("div",{staticClass:"elis"},[t._v("\n                ("+t._s(s.album.name)+")\n              ")])],2)]),i("div",{staticClass:"con-icon"},[i("van-icon",{attrs:{name:"play-circle-o",size:"20px"}})],1)])}))],2)])])])},a=[],e={name:"SingerPlay",components:{},props:{},data:function(){return{picUrl:"",userName:[],publishTime:"",description:"",playList:[],introduction:"",name:""}},methods:{goToPlay:function(t,s){var i=this;this.$store.state.detailItem.name=t.artists,this.$com.req("song/detail?ids=".concat(t.id)).then((function(t){if(200===t.code){var n=t.songs[0];i.$router.push({name:"player",params:{item:n,index:s,songs:i.searchSongs}})}}))}},mounted:function(){var t=this;this.$com.req("artist/desc?id=".concat(this.singerId)).then((function(s){t.introduction=s.introduction})),this.$com.req("search?keywords=".concat(this.singName)).then((function(s){t.playList=s.result.songs})),this.$nextTick((function(){var s=t.$refs.wrapper;t.scroll=new t.$BScroll(s,{click:!0,probeType:3})}))},created:function(){},filters:{},computed:{singerId:function(){return this.$store.state.singerId},singName:function(){return this.$store.state.singName},singer:function(){return this.$store.state.singer}},watch:{},directives:{}},c=e,r=(i("cc2d"),i("5511")),o=Object(r["a"])(c,n,a,!1,null,"614c3fda",null);s["default"]=o.exports},"988b":function(t,s,i){},cc2d:function(t,s,i){"use strict";var n=i("988b"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-4208f98f.68ca4dc7.js.map