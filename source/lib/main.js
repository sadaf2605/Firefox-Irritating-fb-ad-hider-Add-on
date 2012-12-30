// Import the page-mod API
var pageMod = require("page-mod");
// Import the self API
var self = require("self");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [self.data.url("inject.js")]
});

var myScript = top.window.content.document.createElement('script');
myScript.type = 'text/javascript';
myScript.setAttribute('src','chrome://path/to/script.js');
myScript.setAttribute('onload', 'firefoxInit()');
top.window.content.document.getElementsByTagName('head')[0].appendChild(myScript);