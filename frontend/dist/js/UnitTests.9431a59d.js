(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UnitTests"],{7345:function(e,t,n){},b354:function(e,t,n){"use strict";var r=n("7345"),s=n.n(r);s.a},c7eb:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"col-md-6"},[n("h4",[e._v("Unit Test(s)")]),n("table",{staticClass:"list-group"},[e._m(0),e._l(e.poles,(function(t,r){return n("tr",{key:r,staticClass:"list-group-item",class:{active:r==e.currentIndex},on:{click:function(n){e.setActivePole(t,r),e.retrievePolesTest(t)}}},[n("td",[e._v(e._s(t.id_number))])])}))],2)]),e.currentPole?n("div",[n("table",[e._m(1),n("tr",{attrs:{id:"idnumbertest"}},[e._v(" "+e._s(this.currentPole.id_number)+" ")]),n("tr",{attrs:{id:"batvtest"}},[e._v(" "+e._s(this.currentPole.bat_v)+" ")]),n("tr",{staticClass:"retrieve",attrs:{id:"retrieve"}},[e._v(" "+e._s(this.test_result)+" ")])])]):e._e()])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("ID Number")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v(" RetrievePoles() Test:")])])}],o=n("f84c"),l={name:"poles-list",data:function(){return{poles:[],currentPole:null,currentIndex:-1,id_number:"",test_result:"untested"}},methods:{retrievePoles:function(){var e=this;o["a"].getAll().then((function(t){e.poles=t.data,console.log(t.data)})).catch((function(e){console.log(e)}))},retrievePolesTest:function(e){e.bat_v>=0?this.test_result="Passed":this.test_result="Failed"},refreshList:function(){this.retrievePoles(),this.currentPole=null,this.currentIndex=-1},setActivePole:function(e,t){this.currentPole=e,this.currentIndex=t},removeAllPoles:function(){var e=this;o["a"].deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))},searchIdNumber:function(){var e=this;o["a"].findByIdNumber(this.id_number).then((function(t){e.poles=t.data,console.log(t.data)})).catch((function(e){console.log(e)}))},redFlag:function(e){3.4==e.ex_in_v?(document.getElementById("exinv").style.color="red",document.getElementById("idnumber").style.color="red"):(document.getElementById("exinv").style.color="#95c23b",document.getElementById("idnumber").style.color="#95c23b")}},mounted:function(){this.retrievePoles()}},c=l,i=(n("b354"),n("2877")),u=Object(i["a"])(c,r,s,!1,null,"4900b3cf",null);t["default"]=u.exports},f84c:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var l=n("bc3a"),c=n.n(l),i=c.a.create({baseURL:"http://colitetechrestapi.us-east-1.elasticbeanstalk.com/api",headers:{"Content-type":"application/json"}}),u=function(){function e(){r(this,e)}return o(e,[{key:"getAll",value:function(){return i.get("/poles")}},{key:"get",value:function(e){return i.get("/poles/".concat(e))}},{key:"create",value:function(e){return i.post("/poles",e)}},{key:"update",value:function(e,t){return i.put("/poles/".concat(e),t)}},{key:"delete",value:function(e){return i.delete("/poles/".concat(e))}},{key:"deleteAll",value:function(){return i.delete("/poles")}},{key:"findByTitle",value:function(e){return i.get("/poles?title=".concat(e))}}]),e}();t["a"]=new u}}]);
//# sourceMappingURL=UnitTests.9431a59d.js.map