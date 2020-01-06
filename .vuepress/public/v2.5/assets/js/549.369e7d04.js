(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{740:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("While using openHAB, you may need to look at the logs generated by the software to see if there are any issues that need your attention.")]),t._v(" "),a("p",[t._v("Two log files are going to interest us which are openhab.log and events.log\nThe events.log file contains what is happening on the Openhab event bus like sensors changing states, very handy for writting rules as you can see things changing in realtime.\nThe other file openhab.log shows the output of all bindings and addons and allows you to fault find issues with a binding.\nBefore asking for help on the forum, it is worth checking openhab.log for clues as to what is causing any issues as this will result in getting help much faster.")]),t._v(" "),a("p",[t._v("To watch the logs in realtime with a openhabian based setup use the below linux command which can be done via SSH with a program called putty from a windows or mac machine.\nCTRL+C will close the stream.\nYou can also use SAMBA/network shares to open or copy the file directly.")]),t._v(" "),t._m(1),a("p",[t._v("Bindings can have the level of detail increased or decreased on a per binding basis and this is done with the Karaf console.")]),t._v(" "),a("p",[t._v("To find them if you are not using Openhabian:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The console will display the messages as soon as they will be logged.\nKeep this window somewhere in order to take a look inside when it is needed.\nWe will use it to check the Z-Wave dialogs.")]),t._v(" "),a("p",[t._v('A "clean" startup looks this way in the log file :')]),t._v(" "),t._m(4),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"looking-to-the-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#looking-to-the-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Looking to the logs")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[t._v("tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openhab2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openhab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openhab2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("open the finder,")]),t._v(" "),a("li",[t._v("navigate to your home folder,")]),t._v(" "),a("li",[t._v("navigate inside the openHAB folder,")]),t._v(" "),a("li",[t._v("navigate inside the userdata folder,")]),t._v(" "),a("li",[t._v("navigate inside the logs folder")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Inside the logs folder, double-click on the "),s("code",[this._v("openhab.log")]),this._v(" file. The file will be displayed inside the console application.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.195")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arthome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaperUIApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Started")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paper")]),t._v(" UI at "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ui\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.252")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DashboardService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Started")]),t._v(" dashboard at "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("start\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.567")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zwave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZWaveSerialHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serial")]),t._v(" port is initialized\n")])])])}],!1,null,null,null);s.default=n.exports}}]);