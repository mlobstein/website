(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{609:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("AddonLogo"),e._m(1),s("p",[e._v("VoiceRSS is an Internet based TTS service hosted at "),s("a",{attrs:{href:"http://api.voicerss.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://api.voicerss.org"),s("OutboundLink")],1),e._v(".\nIt requires an API Key to get access to this service. The free version allows to make up to 350 requests/day, for more you may need a commercial subscription.")]),s("p",[e._v("For more information, see "),s("a",{attrs:{href:"http://www.voicerss.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.voicerss.org/"),s("OutboundLink")],1)]),e._m(2),s("p",[e._v("Replace API_KEY with your personal API key for simple testing of different API calls:")]),e._m(3),e._m(4),s("p",[e._v('You have to add your API_KEY to your configuration, e.g. by adding a file "voicerss.cfg" to the services folder, with this entry:')]),e._m(5),s("p",[e._v('It actually supports only one voice: "voicerss:default", which is configured to use 44kHz, mono, 16 bit sampling quality.')]),e._m(6),s("p",[e._v("The VoiceRSS extension does cache audio files from previous requests, to reduce traffic, improve performance, reduce number of requests and provide same time offline capability.")]),s("p",[e._v("For convenience, there is a tool where the audio cache can be generated in advance, to have a prefilled cache when starting this extension. You have to copy the generated data to your userdata/voicerss/cache folder.")]),s("p",[e._v("Synopsis of this tool:")]),e._m(7),e._m(8),e._m(9),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"voicerss-text-to-speech"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voicerss-text-to-speech","aria-hidden":"true"}},[this._v("#")]),this._v(" VoiceRSS Text-to-Speech")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"samples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#samples","aria-hidden":"true"}},[this._v("#")]),this._v(" Samples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# EN\nhttps://api.voicerss.org/?key=API_KEY&hl=en-us&src=Hello%20World\nhttps://api.voicerss.org/?key=API_KEY&hl=en-us&c=WAV&src=Hello%20World\nhttps://api.voicerss.org/?key=API_KEY&hl=en-us&f=44khz_16bit_mono&src=Hello%20World\nhttps://api.voicerss.org/?key=API_KEY&hl=en-gb&f=44khz_16bit_stereo&src=Hello%20World\n\n# DE\nhttps://api.voicerss.org/?key=API_KEY&hl=de-de&f=44khz_16bit_mono&src=Hallo%20Welt\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("apiKey=1234567890\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"caching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caching","aria-hidden":"true"}},[this._v("#")]),this._v(" Caching")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('Usage: java org.openhab.voice.voicerss.tool.CreateTTSCache <args>\nArguments: --api-key <key> <cache-dir> <locale> { <text> | @inputfile }\n  key       the VoiceRSS API Key, e.g. "123456789"\n  cache-dir is directory where the files will be stored, e.g. "voicerss-cache"\n  locale    the language locale, has to be valid, e.g. "en-us", "de-de"\n  text      the text to create audio file for, e.g. "Hello World"\n  inputfile a name of a file, where all lines will be translatet to text, e.g. "@message.txt"\n\nSample: java org.openhab.voice.voicerss.tool.CreateTTSCache --api-key 1234567890 cache en-US @messages.txt\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"open-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Open Issues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("add all media formats")]),t("li",[this._v("add all supported languages")]),t("li",[this._v("do not log API-Key in plain text")])])}],!1,null,null,null);t.default=r.exports}}]);