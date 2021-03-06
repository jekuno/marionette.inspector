
# Marionette Inspector

+ [Chrome Web Store](https://chrome.google.com/webstore/detail/marionette-inspector/fbgfjlockdhidoaempmjcddibjklhpka?hl=en)

+ [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/marionettejs/marionette.inspector?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

+ [BBConf Talk: Backbone Under the Magnifying glass](https://www.youtube.com/watch?v=jbGm3mJXh_s)


![](http://f.cl.ly/items/0D0k2I0N2p2D2s3M1S21/Image%202014-12-18%20at%2011.05.43%20PM.png)



### Functionality

The inspector makes it possible to understand how your App works, without needing to understand how all the code works. This is possible because everything's one click away. You'll be amazed at how quickly this changes everything.


+ **Visualize** the view hierarchy with the UI tree
+ **Visualize** application activity with a full history of actions
+ **Inspect** view ui, events, listeners, properties
+ **Inspect** model attributes, listeners, properties
+ **Explore** Radio channel events, requests, commands
+ **Explore** application with an inspector magnifying glass
+ **Jump** between the inspector elements and source panel with intelligent links


### Try it out on a live app!

Once you've installed the Chrome extension, open the DevTools, click on the "Marionette" tab, and inspect this app!

[Marionette Wires](https://marionette-wires.herokuapp.com/)

---
### Getting Started


#### Download it
The inspector should work out of the box with most setups. You can download it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/marionette-inspector/fbgfjlockdhidoaempmjcddibjklhpka?hl=en).

#### Usage
* Load the app in Google Chrome
* Open the devtools (F12 or Ctrl + Shift + I)
* Select Marionette tab
* Click in 'Start the Inspector!' button

> The extension icon next to URL bar has no functionality and can be ignored 

#### Caveats
If you're either using `Browserify` or `Webpack` or not exposing `Backbone` & `Marionette` as globals, you'll need to add one block to your setup.

```js
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
```

> Note this line should be placed after all underscore, backbone, and marionette CommonJS `require` calls, but before Application or View classes are defined.

> Since EcmaScript `import` statements are hoisted, i.e., always called in the start of the module, putting `__agent.start` call before the import of a module 
> that defines an Marionette class will not work. See [related issue](https://github.com/marionettejs/marionette.inspector/issues/305).
> When using EcmaScript modules is recommended to put the `__agent.start` call in a separated module as in [Marionette Wires](https://github.com/thejameskyle/marionette-wires/blob/master/src/plugins.js)      

#### Frequently Asked Questions
If you have any additional questions, check out our [FAQ](https://github.com/marionettejs/marionette.inspector/blob/master/docs/faq.md).


#### Usage Analytics
~~The Inspector gathers usage analytics to better report on inspector statistics such as average weekly users and popular features as well as to report on marionette patterns such as library versions in usage and architectural / api patterns.
If you would prefer to disable analytics it is easy to do so:~~

```js
if (window.__agent) {
  window.__agent.disableAnalytics = true;
}
```

*Current version does not implement usage analytics*

### Play with it locally
Follows these these steps in the [Install Guide](docs/developing_locally.md) and you should be up and running in no time. Read the [agent](https://github.com/marionettejs/marionette.inspector/blob/master/docs/agent.md) overview to understand how the inspector gathers all the information.

### TLDR version

#### 1. Download the Extension
```bash
git clone git@github.com:marionettejs/marionette.inspector.git
```


#### 2. Build the Extension

```bash
npm i
npm run bower
grunt build
```


#### 3. Install in Chrome
```
1. go to the Extensions tab in chrome > Window
2. check the "Developer Mode" checkbox
3. click the "Load unpacked extension" and select the extension folder in the repo
```


### Open Source (a.k.a. you)

The inspector is built with 100% open source love. That means, we absolutely want your help and your passion. If you want to get involved, stop by and say hello [here](https://gitter.im/marionettejs/marionette.inspector). We've got tons of [help wanted](https://github.com/marionettejs/marionette.inspector/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) tickets and would be be happy to setup a 30 minute [screenhero](https://screenhero.com/) pairing session to help you get started. Many of our contributions, even some of the best ones like the Activity pane, came from first time contributors.


---
### Special Thanks

**Etsy** - The Inspector was largely built as an open-source project at Etsy.

**Backbone-Debugger** - The Inspector is built on top of the [Backbone Debugger](https://github.com/Maluen/Backbone-Debugger) core, written in large part by @Maluen.


---
### Screens


# UI
![](http://f.cl.ly/items/0D0k2I0N2p2D2s3M1S21/Image%202014-12-18%20at%2011.05.43%20PM.png)

![](http://f.cl.ly/items/3G3B1Y303e3O0L400s2O/Image%202014-12-18%20at%2011.06.29%20PM.png)

---
# Data
![](http://f.cl.ly/items/0Z190J1V45172N021d11/Image%202014-12-18%20at%2011.07.07%20PM.png)

---
# Radio
![](http://f.cl.ly/items/3d3R283O3e1W3C302F2B/Image%202014-12-18%20at%2011.07.25%20PM.png)

---
# Activity
![](http://f.cl.ly/items/1A410C15311t1c0w1c3L/Image%202014-12-18%20at%2011.07.43%20PM.png)
