(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{727:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),r("p",[r("a",{attrs:{href:"https://docs.oracle.com/javase/6/docs/technotes/guides/scripting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSR223"),r("OutboundLink")],1),e._v(" ("),r("a",{attrs:{href:"https://jcp.org/aboutJava/communityprocess/pr/jsr223/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("spec"),r("OutboundLink")],1),e._v(")\nis a standard scripting API for Java Virtual Machine (JVM)\n"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_JVM_languages",target:"_blank",rel:"noopener noreferrer"}},[e._v("languages"),r("OutboundLink")],1),e._v(".\nThe JVM languages provide varying levels of support for the JSR223 API and interoperability with the Java runtime.\nCurrently the following languages are known to work well for openHAB scripting:\n"),r("a",{attrs:{href:"http://www.oracle.com/technetwork/articles/java/jf14-nashorn-2126515.html",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Oracle Nashorn")]),r("OutboundLink")],1),e._v(" (Javascript bundled with Java),\n"),r("a",{attrs:{href:"http://www.jython.org/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Jython")]),r("OutboundLink")],1),e._v(" (Python on the JVM) and\n"),r("a",{attrs:{href:"http://www.groovy-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Apache Groovy")]),r("OutboundLink")],1),e._v(" (JVM scripting language).")]),r("p",[e._v("Although JSR223 scripts can be used as a general-purpose extension language for openHAB,\nthe most common usage will be for defining openHAB rules.")]),e._m(3),r("ul",[r("li",[r("router-link",{attrs:{to:"jsr223-js.html"}},[e._v("Javascript")])],1),r("li",[r("router-link",{attrs:{to:"jsr223-jython.html"}},[e._v("Jython")])],1),r("li",[e._v("Groovy (TODO)")])]),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),r("p",[e._v("The following trigger types are defined by openHAB (custom triggers can also be defined)\nand take the specified configuration parameters.")]),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/eclipse/smarthome/wiki/Scripted-Rule-Support",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scripted Rule Support"),r("OutboundLink")],1),e._v(" -\nEarly documentation on JSR223 usage in openHAB 2. Includes IDE setup instructions.")])]),e._m(18),e._m(19),r("p",[e._v("To faciliate JSR223 scripting, several openHAB-related variables are automatically predefined. These presets include:")]),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),r("p",[e._v("These variables are loaded using:")]),e._m(29),e._m(30),e._m(31),e._m(32),e._m(33),r("p",[e._v("These variables are loaded using:")]),e._m(34),e._m(35),e._m(36),e._m(37),e._m(38),e._m(39),e._m(40),r("DocPreviousVersions"),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"jsr223-scripting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsr223-scripting","aria-hidden":"true"}},[this._v("#")]),this._v(" JSR223 Scripting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Note: This feature is for users who have or are willing to learn some programming skills\nand are comfortable working with the command line prompt of the operating system hosting openHAB.\n"),t("em",[this._v("The Experimental Rule Engine add-on must be installed to define rules.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"language-specific-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#language-specific-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Language-Specific Documentation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"script-locations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script-locations","aria-hidden":"true"}},[this._v("#")]),this._v(" Script Locations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Scripts should be placed in the 'USERDATA/automation/jsr223' directory. For example,\nin Linux installations created with a package installer,\nthe directory would be "),t("code",[this._v("/etc/openhab2/automation/jsr223")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At system start time the scripts will be loaded in an order based on their name\nand then top-down through the directory hierarchy.\nNote that while scripts may be placed in subdirectories of "),t("code",[this._v("jsr223")]),this._v(",\nthey should not have the same names as scripts in other directories (this may be changed in the future).\nFor example, with the following directory structure...")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("automation/jsr223\n  01/\n    script1.py\n    scriptx.py\n  00script.py\n  script2.py\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("the load order will be: "),r("code",[e._v("00script.py")]),e._v(", "),r("code",[e._v("01/script1.py")]),e._v(", "),r("code",[e._v("script2.py")]),e._v(", "),r("code",[e._v("01/scriptx.py")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"trigger_types"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"trigger-types-all-jsr223-languages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trigger-types-all-jsr223-languages","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger Types (all JSR223 languages)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Trigger: "),t("code",[this._v("core.ItemCommandTrigger")])])])]),t("tbody",[t("tr",[t("td",[t("code",[this._v("itemName")])])]),t("tr",[t("td",[t("code",[this._v("command")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Trigger: "),t("code",[this._v("core.ItemStateUpdateTrigger")])])])]),t("tbody",[t("tr",[t("td",[t("code",[this._v("itemName")])])]),t("tr",[t("td",[t("code",[this._v("state")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Trigger: "),t("code",[this._v("core.ItemStateChangeTrigger")])])])]),t("tbody",[t("tr",[t("td",[t("code",[this._v("itemName")])])]),t("tr",[t("td",[t("code",[this._v("previousState")])])]),t("tr",[t("td",[t("code",[this._v("state")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Trigger: "),t("code",[this._v("timer.GenericCronTrigger")])])])]),t("tbody",[t("tr",[t("td",[t("code",[this._v("cronExpression")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Trigger: "),t("code",[this._v("timer.TimeOfDayTrigger")])])])]),t("tbody",[t("tr",[t("td",[t("code",[this._v("time")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Trigger: "),t("code",[this._v("core.GenericEventTrigger")])])])]),t("tbody",[t("tr",[t("td",[t("code",[this._v("eventTopic")])])]),t("tr",[t("td",[t("code",[this._v("eventSource")])])]),t("tr",[t("td",[t("code",[this._v("eventTypes")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"additional-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"presets"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"predefined-script-variables-all-jsr223-languages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predefined-script-variables-all-jsr223-languages","aria-hidden":"true"}},[this._v("#")]),this._v(" Predefined Script Variables (all JSR223 languages)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#default_presets"}},[this._v("Default")])]),t("li",[t("a",{attrs:{href:"#rulesimple_presets"}},[t("code",[this._v("RuleSimple")])])]),t("li",[t("a",{attrs:{href:"#rulesupport_presets"}},[t("code",[this._v("RuleSupport")])])]),t("li",[t("a",{attrs:{href:"#rulefactories_presets"}},[t("code",[this._v("RuleFactories")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"default_presets"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"default-variables-no-preset-loading-required"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-variables-no-preset-loading-required","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Variables (no preset loading required)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variable")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[r("code",[e._v("State")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.types.State")])])]),r("tr",[r("td",[r("code",[e._v("Command")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.types.State")])])]),r("tr",[r("td",[r("code",[e._v("DateTime")])]),r("td",[r("code",[e._v("org.joda.time.DateTime")]),e._v(" (if Jodatime is available)")])]),r("tr",[r("td",[r("code",[e._v("LocalTime")])]),r("td",[r("code",[e._v("org.joda.time.LocalTime")]),e._v(" (if Jodatime is available)")])]),r("tr",[r("td",[r("code",[e._v("StringUtils")])]),r("td",[r("code",[e._v("org.apache.commons.lang.StringUtils")])])]),r("tr",[r("td",[r("code",[e._v("URLEncoder")])]),r("td",[r("code",[e._v("java.net.URLEncoder")])])]),r("tr",[r("td",[r("code",[e._v("FileUtils")])]),r("td",[r("code",[e._v("org.apache.commons.io.FileUtils")])])]),r("tr",[r("td",[r("code",[e._v("FilenameUtils")])]),r("td",[r("code",[e._v("org.apache.commons.io.FilenameUtils")])])]),r("tr",[r("td",[r("code",[e._v("File")])]),r("td",[r("code",[e._v("java.io.File")])])]),r("tr",[r("td",[r("code",[e._v("IncreaseDecreaseType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.IncreaseDecreaseType")])])]),r("tr",[r("td",[r("code",[e._v("DECREASE")])]),r("td",[r("code",[e._v("IncreaseDecreaseType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("INCREASE")])]),r("td",[r("code",[e._v("IncreaseDecreaseType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("OnOffType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.OnOffType")])])]),r("tr",[r("td",[r("code",[e._v("ON")])]),r("td",[r("code",[e._v("OnOffType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("OFF")])]),r("td",[r("code",[e._v("OnOffType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("OpenClosedType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.OpenClosedType")])])]),r("tr",[r("td",[r("code",[e._v("OPEN")])]),r("td",[r("code",[e._v("OpenClosedType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("CLOSED")])]),r("td",[r("code",[e._v("OpenClosedType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("StopMoveType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.StopMoveType")])])]),r("tr",[r("td",[r("code",[e._v("STOP")])]),r("td",[r("code",[e._v("StopMoveType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("MOVE")])]),r("td",[r("code",[e._v("StopMoveType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("UpDownType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.UpDownType")])])]),r("tr",[r("td",[r("code",[e._v("UP")])]),r("td",[r("code",[e._v("UpDownType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("DOWN")])]),r("td",[r("code",[e._v("UpDownType")]),e._v(" enum item")])]),r("tr",[r("td",[r("code",[e._v("DecimalType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.DecimalType")])])]),r("tr",[r("td",[r("code",[e._v("HSBType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.HSBType")])])]),r("tr",[r("td",[r("code",[e._v("PercentType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.PercentType")])])]),r("tr",[r("td",[r("code",[e._v("PointType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.PointType")])])]),r("tr",[r("td",[r("code",[e._v("StringType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.core.library.types.StringType")])])]),r("tr",[r("td",[r("code",[e._v("items")])]),r("td",[e._v("Instance of "),r("code",[e._v("java.util.Map&lt;String, State&gt;")])])]),r("tr",[r("td",[r("code",[e._v("itemRegistry")])]),r("td",[e._v("Instance of "),r("code",[e._v("org.eclipse.smarthome.core.items.ItemRegistry")])])]),r("tr",[r("td",[r("code",[e._v("ir")])]),r("td",[e._v("Alias for "),r("code",[e._v("itemRegistry")])])]),r("tr",[r("td",[r("code",[e._v("things")])]),r("td",[e._v("Instance of "),r("code",[e._v("org.eclipse.smarthome.core.thing.ThingRegistry")])])]),r("tr",[r("td",[r("code",[e._v("events")])]),r("td",[e._v("(internal) Used to send events, post commands, etc. "),r("a",{attrs:{href:"#event_operations"}},[e._v("Details")]),e._v(" below]")])]),r("tr",[r("td",[r("code",[e._v("rules")])]),r("td",[e._v("Instance of "),r("code",[e._v("org.eclipse.smarthome.automation.RuleRegistry")])])]),r("tr",[r("td",[r("code",[e._v("scriptExtension")])]),r("td",[e._v("(internal) For loading script presets.")])]),r("tr",[r("td",[r("code",[e._v("se")])]),r("td",[e._v("Alias for "),r("code",[e._v("scriptExtension")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"#event_operations"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"events-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events-operations","aria-hidden":"true"}},[this._v("#")]),t("code",[this._v("events")]),this._v(" operations")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("postUpdate(String, String)")])]),r("li",[r("code",[e._v("postUpdate(Item, Number)")])]),r("li",[r("code",[e._v("postUpdate(Item, String)")])]),r("li",[r("code",[e._v("postUpdate(Item, State)")])]),r("li",[r("code",[e._v("sendCommand(String, String)")])]),r("li",[r("code",[e._v("sendCommand(Item, Number)")])]),r("li",[r("code",[e._v("sendCommand(Item, String)")])]),r("li",[r("code",[e._v("sendCommand(Item, Command)")])]),r("li",[r("code",[e._v("storeStates(Item...)")])]),r("li",[r("code",[e._v("restoreStates(Map<Item, State>)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"rulesimple_presets"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"rulesimple-extension-preset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rulesimple-extension-preset","aria-hidden":"true"}},[this._v("#")]),this._v(" RuleSimple Extension/Preset")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[this._v("scriptExtension"),t("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("importPreset"),t("span",{attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{attrs:{class:"token string"}},[this._v('"RuleSimple"')]),t("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The primary usage of this preset is for defining rule ("),t("code",[this._v("SimpleRule")]),this._v(") subclasses.\nSee language-specific documentation for examples.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variable")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[e._v("SimpleRule")]),r("td",[e._v("Base class for Jython Rules")])]),r("tr",[r("td",[e._v("SimpleActionHandler")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.module.script.rulesupport.shared.simple.SimpleActionHandler")])])]),r("tr",[r("td",[e._v("SimpleConditionHandler")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.module.script.rulesupport.shared.simple.SimpleConditionHandler")])])]),r("tr",[r("td",[e._v("SimpleTriggerHandler")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.module.script.rulesupport.shared.simple.SimpleTriggerHandler")])])]),r("tr",[r("td",[e._v("TriggerType")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.type.TriggerType")])])]),r("tr",[r("td",[e._v("ConfigDescriptionParameter")]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.ConfigDescriptionParameter")])])]),r("tr",[r("td",[e._v("ModuleType")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.type.ModuleType")])])]),r("tr",[r("td",[e._v("ActionType")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.type.ActionType")])])]),r("tr",[r("td",[e._v("Visibility")]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.Visibility")]),e._v(" enum")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"rulesupport_presets"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"rulesupport-extension-preset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rulesupport-extension-preset","aria-hidden":"true"}},[this._v("#")]),this._v(" RuleSupport Extension/Preset")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[this._v("scriptExtension"),t("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("importPreset"),t("span",{attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{attrs:{class:"token string"}},[this._v('"RuleSupport"')]),t("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variable")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[e._v("automationManager")]),r("td",[e._v("Instance for managing rules and other openHAB module instances. (e.g., "),r("code",[e._v("addRule")]),e._v(")")])]),r("tr",[r("td",[e._v("Configuration")]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.Configuration")])])]),r("tr",[r("td",[e._v("Action")]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.Action")])])]),r("tr",[r("td",[e._v("Condition")]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.Condition")])])]),r("tr",[r("td",[e._v("Trigger")]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.Trigger")])])]),r("tr",[r("td",[e._v("Rule")]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.Action.Rule")]),e._v(" (use "),r("code",[e._v("SimpleRule")]),e._v(" for defining rules)")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"rulefactories_presets"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"rulefactories-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rulefactories-extension","aria-hidden":"true"}},[this._v("#")]),this._v(" RuleFactories Extension")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("NOTE: Advanced usage")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[this._v("scriptExtension"),t("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("importPreset"),t("span",{attrs:{class:"token punctuation"}},[this._v("(")]),t("span",{attrs:{class:"token string"}},[this._v('"RuleFactories"')]),t("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variable")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[r("code",[e._v("ActionHandlerFactory")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.module.script.rulesupport.shared.factories.ActionHandlerFactory")])])]),r("tr",[r("td",[r("code",[e._v("ConditionHandlerFactory")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.module.script.rulesupport.shared.factories.ConditionHandlerFactory")])])]),r("tr",[r("td",[r("code",[e._v("TriggerHandlerFactory")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.module.script.rulesupport.shared.factories.TriggerHandlerFactory")])])]),r("tr",[r("td",[r("code",[e._v("TriggerType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.type.TriggerType")])])]),r("tr",[r("td",[r("code",[e._v("ConfigDescriptionParameter")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.config.core.ConfigDescriptionParameter")])])]),r("tr",[r("td",[r("code",[e._v("ModuleType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.type.ModuleType")])])]),r("tr",[r("td",[r("code",[e._v("ActionType")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.type.ActionType")])])]),r("tr",[r("td",[r("code",[e._v("Visibility")])]),r("td",[r("code",[e._v("org.eclipse.smarthome.automation.Visibility")]),e._v(" enum")])])])])}],!1,null,null,null);t.default=i.exports}}]);