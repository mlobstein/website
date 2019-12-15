(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{837:function(t,e,n){"use strict";n.r(e);var r=n(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE BINDING")]),t._v(" "),n("p",[t._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),n("router-link",{attrs:{to:"./../opensprinkler/"}},[t._v("opensprinkler")]),t._v(" binding which you should use instead.")],1)]),t._v(" "),n("AddonLogo"),t._v(" "),n("p",[t._v("This binding is compatible with with both the "),n("a",{attrs:{href:"http://opensprinkler.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenSprinkler"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"http://pi.opensprinkler.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenSprinkler Pi"),n("OutboundLink")],1),t._v(" hardware. In other words, this binding supports communicating to the OpenSprinkler and OpenSprinkler Pi using HTTP (as long as you have the interval program installed), or directly via GPIO when using the OpenSprinkler Pi.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=lT0uxFlwu9s",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://img.youtube.com/vi/lT0uxFlwu9s/hqdefault.jpg",alt:"OpenSprinkler"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("The binding will sync itself with the OpenSprinkler device at intervals. This allows state of the stations to be updated if they are manually controlled from the OpenSprinkler web application directly.")]),t._v(" "),n("p",[t._v("There is also a binding specifically for openHAB 2 "),n("a",{attrs:{href:"https://www.openhab.org/addons/bindings/opensprinkler/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("OpenSprinkler stations are numbered 0 through 7 for the default number of stations, but for some users of the OpenSprinkler and OpenSprinkler Pi, they will have extension boards in use. This requires that the binding configuration be edited to specify how many stations are available (by default there are 8, so if you are not using an extension board then you don't need to do this step).")]),t._v(" "),n("p",[t._v("Additionally, if you are wanting to connect via HTTP to your OpenSprinkler (most probably because you have the original version), you will need to specify the URL and password to access the interval program server. Note that by connecting openHAB to the interval program, you will be disabling any timers and forcing it into manual mode. Refer to the example below to see what you need to include in your configuration.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("In order to switch a station open or shut using the binding, you must firstly define a switch item in your items file. The syntax (by way of example) of the item configuration is shown below:")]),t._v(" "),t._m(7),n("p",[t._v("You can see in this example that two stations are exposed as items. The first station exposed is the 0th port (i.e. the left-most pin on the OpenSprinkler Pi), and the second station is the 1st port (the second-to-left-most pin on the OpenSprinkler Pi). Note that there is no requirement to use the stations in order - you can open and close any station.")]),t._v(" "),n("p",[t._v("The rainsensor example allows users to see if rain is detected or not by the OpenSprinkler hardware (only supported in HTTP mode).")]),t._v(" "),t._m(8),t._v(" "),t._m(9),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"opensprinkler-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opensprinkler-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenSprinkler Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("This binding appears to require you to run openHAB as the "),n("code",[t._v("root")]),t._v(" user; otherwise you get the error "),n("code",[t._v("wiringPiSetup: Must be root.")]),t._v("  You might be able to add the "),n("code",[t._v("openhab")]),t._v(" user to the "),n("code",[t._v("gpio")]),t._v(" group, reboot, and try again.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/openSprinkler.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("mode")]),t._v(" "),n("td",[t._v("gpio")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("The type of OpenSprinkler connection to make. There are two valid options:"),n("br"),n("code",[t._v("gpio")]),t._v(": this mode is only applicable when running openHAB on a Raspberry Pi which is connected directly to an OpenSprinkler Pi. In this mode the communication is directly over the GPIO pins of the Raspberry Pi."),n("br"),n("code",[t._v("http")]),t._v(": this mode is applicable to both OpenSprinkler and OpenSprinkler Pi, as long as they are running the interval program. Realistically though, if you have an OpenSprinkler Pi, it makes more sense to directly connect via "),n("code",[t._v("gpio")]),t._v(" mode.")])]),t._v(" "),n("tr",[n("td",[t._v("password")]),t._v(" "),n("td",[t._v("opendoor")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("if the "),n("code",[t._v("http")]),t._v(" mode is used, you need to specify the URL of the internal program, and the password to access it. By default the password is 'opendoor'.")])]),t._v(" "),n("tr",[n("td",[t._v("httpUrl")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("if "),n("code",[t._v("mode")]),t._v(" is "),n("code",[t._v("http")])]),t._v(" "),n("td",[t._v("For example, "),n("code",[t._v("http://localhost:8080/")])])]),t._v(" "),n("tr",[n("td",[t._v("httpPassword")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("if "),n("code",[t._v("mode")]),t._v(" is "),n("code",[t._v("http")])]),t._v(" "),n("td",[t._v("For example, "),n("code",[t._v("opendoor")])])]),t._v(" "),n("tr",[n("td",[t._v("numberOfStations")]),t._v(" "),n("td",[t._v("8")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("the number of stations available. By default this is 8, but for each expansion board installed, this number can be incremented by 8.")])]),t._v(" "),n("tr",[n("td",[t._v("refreshInterval")]),t._v(" "),n("td",[t._v("60000")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("the number of milliseconds between checks of the Open Sprinkler device")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/* Sprinklers */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Sprinkler_Station_0")]),t._v("  "),n("span",{attrs:{class:"token string"}},[t._v('"Station 0"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" openSprinkler"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Sprinkler_Station_1")]),t._v("  "),n("span",{attrs:{class:"token string"}},[t._v('"Station 1"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" openSprinkler"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* Rain Sensor (New in 1.6+) */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Sprinkler_Rain_Sensor")]),t._v("  "),n("span",{attrs:{class:"token string"}},[t._v('"Rain [MAP(rainsensor.map):%s]"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" openSprinkler"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"rs"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"transform-rainsensor-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transform-rainsensor-map","aria-hidden":"true"}},[this._v("#")]),this._v(" transform/rainsensor.map")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("CLOSED=Not Detected\nOPEN=Detected\n-=Unknown\n")])])])}],!1,null,null,null);s.options.__file="readme.md";e.default=s.exports}}]);