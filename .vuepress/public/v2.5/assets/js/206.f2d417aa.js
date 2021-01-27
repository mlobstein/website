(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{739:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("The Harmony Hub binding is used to enable communication between openHAB and multiple Logitech Harmony Hub devices.\nThe API exposed by the Harmony Hub is relatively limited, but it does allow for reading the current activity as well as setting the activity and sending device commands.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v('The Harmony binding represents a "Hub" as a bridge thing type and "Devices" as things connected to the bridge.')]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v('A hub (bridge thing) represents a physical Harmony Hub.\nThe hub possesses a single channel with the id "activity" which is a StringType set to the name of the current activity.\nThis channel is dynamically generated with the possible activity strings listed as channel state options.')]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v('Devices are dynamically created.\nThere is a single device thing for every physical device configured on the harmony hub.\nEach device has a single channel with the id "button" which sends a string with the name of the button to press on the device.\nThis channel is dynamically generated with the possible button press strings listed as channel state options.')]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The Harmony binding will automatically find all Harmony Hubs on the local network and add them to the inbox.\nOnce a Hub has been added, any connected devices will also added to the Inbox.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The binding requires no special configuration")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("This is optional, it is recommended to let the binding discover and add hubs and devices.")]),t._v(" "),s("p",[t._v('To manually configure a Harmony Hub thing you may specify its host name  ("host") as well as an optional search timeout value in seconds ("discoveryTimeout") and optional heart beat interval (heartBeatInterval) in seconds.')]),t._v(" "),s("p",[t._v("In the thing file, this looks e.g. like")]),t._v(" "),t._m(7),s("p",[t._v('To manually configure a Harmony device thing you may specify its numeric id ("id") or its name ("name"), but not both.\nNote that this is prefixed by the hub the device is controlled from.')]),t._v(" "),s("p",[t._v("In the thing file, this looks e.g. like")]),t._v(" "),t._m(8),s("p",[t._v("or")]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("Hubs can report and change the current activity:")]),t._v(" "),s("p",[t._v("items:")]),t._v(" "),t._m(11),s("p",[t._v('Hubs can also send a button press to a device associated with the current activity.\nA String item can be used to send any button name/label or a Player item can be used to send Play/Pause/FastForward/Rewind/SkipForward/SkipBackward.\nThis mimics the physical remote where buttons are mapped differently depending on which activity is running.\nFor example the play button may be sent to a DVD player when running a "Watch DVD" activity, or it may be sent to an Apple TV when running a "Watch Movie" activity.')]),t._v(" "),t._m(12),s("p",[t._v("Devices can be sent button commands directly, regardless if they are part of the current running activity or not.")]),t._v(" "),t._m(13),s("p",[t._v("Hubs can also trigger events when a new activity is starting (activityStarting channel) and after it is started (activityStarted channel).")]),t._v(" "),s("p",[t._v("The name of the event is equal to the activity name, with all non-alphanumeric characters replaced with underscore.")]),t._v(" "),s("p",[t._v("rules:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("Using the above things channels and items\nSitemap:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v('Example subset of values for the current activity "buttonPress" channels')]),t._v(" "),t._m(18),s("p",[t._v("A complete list of names for device buttons values can be determined via the REST API for channel-types, "),s("a",{attrs:{href:"http://YourServer:8080/rest/channel-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://YourServer:8080/rest/channel-types"),s("OutboundLink")],1),t._v('.\nSearch the JSON for "harmonyhub:device".')]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"logitech-harmony-hub-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logitech-harmony-hub-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Logitech Harmony Hub Binding")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hub","aria-hidden":"true"}},[this._v("#")]),this._v(" Hub")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Devices")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"discovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"binding-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"thing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("harmonyhub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GreatRoom")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.100"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("harmonyhub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("great")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Great Room"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    device denon "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Denon AV Receiver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("harmonyhub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("great")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Great Room"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    device denon "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("176254")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HarmonyGreatRoomActivity")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current Activity [%s]"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gMain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:currentActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HarmonyHubGreatButton")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:buttonPress"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Player")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HarmonyHubGreatPlayer")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:player"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HarmonyGreatRoomDenon")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Denon Button Press"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gMain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:device:GreatRoom:29529817:buttonPress"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting TV"')]),t._v("\nwhen\n    Channel "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarting"')]),t._v(" triggered Watch_TV\nthen\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Harmony"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TV is starting..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend\n\nrule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TV started"')]),t._v("\nwhen\n    Channel "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarted"')]),t._v(" triggered Watch_TV\nthen\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Harmony"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TV is started"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend\n\nrule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Going off"')]),t._v("\nwhen\n    Channel "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarting"')]),t._v(" triggered PowerOff\nthen\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Harmony"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hub is going off..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend\n\nrule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hub off"')]),t._v("\nwhen\n    Channel "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarted"')]),t._v(" triggered PowerOff\nthen\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Harmony"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hub is off - no activity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"example-sitemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Sitemap")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-perl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HarmonyGreatRoomActivity "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PowerOff"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PowerOff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TIVO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TIVO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Music"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Music"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APPLE TV"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APPLE TV"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NETFLIX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NETFLIX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HarmonyHubGreatButton "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Direction Pad"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DirectionUp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Up'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DirectionDown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Down'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DirectionLeft"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DirectionRight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OK'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HarmonyGreatRoomDenon "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Volume Up"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Volume Up"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Volume Down"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Volume Down"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"buttonpress-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buttonpress-values","aria-hidden":"true"}},[this._v("#")]),this._v(" ButtonPress values")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("Mute,VolumeDown,VolumeUp,DirectionDown,DirectionLeft,DirectionRight,DirectionUp,Select,Stop,Play,Rewind,Pause,FastForward,SkipBackward,SkipForward,Menu,Back,Home,SelectGame,PageDown,PageUp,Aspect,Display,Search,Cross,Circle,Square,Triangle,PS,Info,NumberEnter,Hyphen,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,PrevChannel,ChannelDown,ChannelUp,Record,FrameAdvance,C,B,D,A,Live,ThumbsDown,ThumbsUp,TiVo,WiiA,WiiB,Guide,Clear,Green,Red,Blue,Yellow,Dot,Return,Favorite,Exit,Sleep\n")])])])}],!1,null,null,null);a.default=n.exports}}]);