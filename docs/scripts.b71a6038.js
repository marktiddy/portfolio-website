// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts.js":[function(require,module,exports) {
var projectDetails = [{
  name: "Youth Work Resource",
  imageUrl: "/images/work/ywr.jpg",
  description: "A large website created to provide resources, games, advice and vacancy information to church-based youth workers. The site has been established for over 10 years and has a monthly reach of 5,000 users.",
  languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "PHP", "MySql"],
  codeLink: "",
  codeText: "",
  viewLink: "http://wwww.youthworkresource.com/",
  viewText: "Visit Website"
}, {
  name: "100 questions - Youth",
  imageUrl: "/images/work/100questions.jpg",
  description: "An app designed to help youth workers have great conversations with young people by displaying a random question from a bank of 100 Questions without repeats.",
  languages: ["Swift", "Flutter"],
  codeLink: "https://github.com/marktiddy/100-Questions",
  codeText: "View Code",
  viewLink: "https://apps.apple.com/us/app/100-questions-youth/id1387964565",
  viewText: "View App"
}, {
  name: "Bar'N'Bus Website",
  imageUrl: "/images/work/barnbus.jpg",
  description: "A WordPress site utilising Advanced Custom Fields and a custom theme built for a local youth work charity to help them effectively communicate their work and fundraise.",
  languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "PHP", "MySql"],
  codeLink: "",
  codeText: "",
  viewLink: "http://www.barnbus.org.uk",
  viewText: "Visit Website"
}, {
  name: "myFlix DB",
  imageUrl: "/images/work/movie_api.jpg",
  description: "A website combining frontend and backend skills to show users movie information plus create, edit and delete accounts. The site has a custom-written API and MongoDB database with mongoose schema.",
  languages: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "NodeJS", "Express", "MongoDB"],
  codeLink: "https://github.com/marktiddy/movie_api",
  codeText: "View the Code",
  viewLink: "",
  viewText: ""
}, {
  name: "Music Mentoring Portfolio Web App",
  imageUrl: "/images/work/musicmentoringportfolio.png",
  description: "Build for the same client as above who was looking for a way to take their paper portfolio's for mentoring awards online. This custom built React app let's mentors add,remove and update students and allows students to complete their portfolio, customise the design and save it as a PDF.",
  languages: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
  codeLink: "https://github.com/marktiddy/music-mentoring-portfolio/",
  codeText: "View the Code",
  viewLink: "https://youtu.be/mMYUOuaX6Ow",
  viewText: "Watch a Video"
}, {
  name: "LecDeck",
  imageUrl: "/images/work/lecdeck.jpg",
  description: "An app built for the Diocese of Bristol and Diocese of Bath and Wells that took an existing physical resource and turned it into an Apple and Android app. This project was really fun as it required matching particular resources to a 3 year rolling year cycle.",
  languages: ["React Native"],
  codeLink: "https://github.com/marktiddy/lecdeck",
  codeText: "View the Code",
  viewLink: "http://lecdeck.youthworkresource.com/",
  viewText: "Download App"
}, {
  name: "Personal Portfolio",
  imageUrl: "/images/work/portfolio.jpg",
  description: "My portfolio is incredibly important as a place where I can showcase my work, experiment and try new things. This version was built with the aim of keeping it simple but responsive.",
  languages: ["HTML", "CSS", "JavaScript", "SASS", "jQuery"],
  codeLink: "https://github.com/marktiddy/portfolio-website/",
  codeText: "View the Code",
  viewLink: "",
  viewText: ""
}, {
  name: "Backroom Stereo",
  imageUrl: "/images/work/backroomstereo.jpg",
  description: "A custom WordPress theme utilising Advanced Custom Fields and Custom Post Types for a band.",
  languages: ["HTML", "CSS", "JavaScript", "SASS", "WordPress", "PHP", "MySQL"],
  codeLink: "A website for a band built using HTML, SASS and JavaScript.",
  codeText: "View the Code",
  viewLink: "http://www.backroomstereo.co.uk/",
  viewText: "Visit Website"
}, {
  name: "Music Mentoring",
  imageUrl: "/images/work/music_mentoring.jpg",
  description: "Built for a client looking for a fresh design for their youth work website. This site makes use of Bootstrap with some custom colours and embedded videos.",
  languages: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  codeLink: "https://github.com/marktiddy/music-mentoring",
  codeText: "View the Code",
  viewLink: "http://www.musicmentoring.live/",
  viewText: "Visit Website"
}, {
  name: "Training Programme Website",
  imageUrl: "/images/work/manna.jpg",
  description: "Built to showcase a youth work training programme this website is built on WordPress to enable the client to easily update content and utilises a custom post type for training events.",
  languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "PHP", "MySQL"],
  codeLink: "",
  codeText: "",
  viewLink: "http://www.mannaministrytraining.co.uk",
  viewText: "Visit Website"
}, {
  name: "Build-a-Quiz",
  imageUrl: "/images/work/buildaquiz.jpg",
  description: "Created as a hobby-project (and still under development) this React app allows users to create custom quizzes and play existing ones. Data for the app is stored in Firebase and user accounts and user areas for Firebase are under development.",
  languages: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
  codeLink: "https://github.com/marktiddy/build-a-quiz",
  codeText: "View the Code",
  viewLink: "https://radiant-mountain-63770.herokuapp.com/",
  viewText: "Visit Website"
}, {
  name: "Bar'N'Bus Volunteer's App",
  imageUrl: "/images/work/charityapp.jpg",
  description: "Built for a local charity using React Native this project enables their volunteers to find essential information and record session data. This app also pulls latest training session events from the EventBrite API",
  languages: ["JavaScript", "React Native"],
  codeLink: "https://github.com/marktiddy/bar-n-bus-volunteers",
  codeText: "View the Code",
  viewLink: "",
  viewText: ""
}, {
  name: "USA Tip Calculator",
  imageUrl: "/images/work/usatip.jpg",
  description: "A simple yet effective tool to help users calculate the amount they wish to tip based on their bill. This app uses AdMob and in-app purchases to generate some revenue.",
  languages: ["Swift"],
  codeLink: "https://github.com/marktiddy/USA-Tip-Calc",
  codeText: "View the Code",
  viewLink: "https://apps.apple.com/us/app/usa-tip-calculator/id1434886406",
  viewText: "View App"
}, {
  name: "This or That",
  imageUrl: "/images/work/thisorthat.jpg",
  description: "An app created using Xcode which presents users with 'either or' choices to make and logs their choice to a Firebase database and shows them how others have voted.",
  languages: ["Swift", "Firebase"],
  codeLink: "",
  codeText: "",
  viewLink: "https://apps.apple.com/us/app/this-or-that-app/id1465745347?ls=1",
  viewText: "Play the Game"
}, {
  name: "App Landing Theme",
  imageUrl: "/images/work/apps.jpg",
  description: "A custom wordpress theme whereby each individual page acts as a landing page for an app allowing users to host multiple landing pages on one Wordpress site. This theme was built using PHP and requires the Custom Fields Plugin.",
  languages: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "JavaScript"],
  codeLink: "https://github.com/marktiddy/multiple-landing",
  codeText: "View the Code",
  viewLink: "https://apps.marktiddy.co.uk/",
  viewText: "Visit Website"
}, {
  name: "Catch 'Em Game",
  imageUrl: "/images/work/catchem.jpg",
  description: "A game created in Swift in which users must match the colours of the rising balls to the wheel colours. It has 3 difficult modes and records the users high score. In addition to this is shows adverts which can be removed with an in-app purchase",
  languages: ["Swift"],
  codeLink: "https://github.com/marktiddy/CatchEm",
  codeText: "View the Code",
  viewLink: "https://apps.apple.com/us/app/id1478144468",
  viewText: "Play the Game"
}, {
  name: "Personal Blog",
  imageUrl: "/images/work/blog.jpg",
  description: "My personal blog which is built in WordPress using a custom theme.",
  languages: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
  codeLink: "",
  codeText: "",
  viewLink: "https://blog.marktiddy.co.uk/",
  viewText: "Visit Website"
}, {
  name: "TickList",
  imageUrl: "/images/work/vue_todo.jpg",
  description: "A to-do list that makes use of a browser's local storage feature and material design. User's can add, tick off and delete items.",
  languages: ["Vue js", "Material"],
  codeLink: "https://github.com/marktiddy/todo",
  codeText: "View the Code",
  viewLink: "https://marktiddy.github.io/todo",
  viewText: "Visit Website"
}, {
  name: "Chat App",
  imageUrl: "/images/work/chatapp.JPG",
  description: "A course project using React Native, GiftedChat and Firebase to create a native chat app for mobile devices.",
  languages: ["React Native", "Firebase"],
  codeLink: "http://github.com/marktiddy/chat-app",
  codeText: "View the Code",
  viewLink: "",
  viewText: ""
}, {
  name: "Pokémon DB",
  imageUrl: "/images/work/pokemon.jpg",
  description: "Making use of the Pokémon API this website displays a list of Pokémon, allows users to search for specific ones and click to view more information.",
  languages: ["HTML", "CSS", "JavaScript"],
  codeLink: "https://github.com/marktiddy/simple-js-app",
  codeText: "View the Code",
  viewLink: "https://marktiddy.github.io/simple-js-app/",
  viewText: "Visit Website"
}];
var mixer = mixitup(".projects-grid");
var projects = document.querySelectorAll(".project");
projects.forEach(function (project, idx) {
  project.addEventListener("click", function () {
    //Create the Modal
    var modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = "\n    <div class=\"modal\">\n      <div class=\"modal-inner\">\n        <div class=\"modal-left\">\n          <h3>".concat(projectDetails[idx].name, "</h3>\n          <img src=\"").concat(projectDetails[idx].imageUrl, "\" alt=\"").concat(projectDetails[idx].name, " screenshot\" />\n          <div class=\"modal-buttons\">\n          ").concat(projectDetails[idx].codeLink != "" ? '<a href="' + projectDetails[idx].codeLink + '" class="modal-button code" target="_blank">' + projectDetails[idx].codeText + "</a>" : "", "\n          ").concat(projectDetails[idx].viewLink != "" ? '<a href="' + projectDetails[idx].viewLink + '" class="modal-button visit" target="_blank">' + projectDetails[idx].viewText + "</a>" : "", "\n          </div>\n        </div>\n        <div class=\"modal-right\">\n          <p>\n          ").concat(projectDetails[idx].description, "\n          </p>\n          <div class=\"built-in\">\n            <p>Built using:</p>\n            ").concat(projectDetails[idx].languages.map(function (language) {
      return "<p class=\"".concat(language.toLowerCase(), "-tag\">").concat(language, "</p>");
    }).join(""), "\n          </div>\n        </div>\n        <div class=\"close\"><p>Close</p></div>\n      </div>\n    </div>");
    document.body.appendChild(modal); //Fix the body

    var currentScroll = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(window.scrollY, "px"); //Set up the close button

    var closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", function () {
      modal.remove();
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, currentScroll);
    });
  });
}); //Mobile Menu Setup

var mobileMenuBars = document.querySelector(".mobile-menu-bars");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileHide = document.querySelector(".mobile-hide");

if (mobileMenuBars) {
  mobileMenuBars.addEventListener("click", function () {
    if (!mobileMenu.classList.contains("show-menu")) {
      mobileMenu.classList.add("show-menu");
    }
  });
}

if (mobileHide) {
  mobileHide.addEventListener("click", function () {
    mobileMenu.classList.remove("show-menu");
  });
} //form Validation


$("#input-submit").on("click", function (event) {
  event.preventDefault(); //Validation

  inputValidation("name");
  inputValidation("email");
  inputValidation("message");

  if (inputValidation("name") && inputValidation("email") && inputValidation("message")) {
    var email = $("#input-email");
    var message = $("#input-message");
    var name = $("#input-name");
    Email.send({
      SecureToken: "90be18cd-f4fa-4f3c-9c95-ff4639bf9673",
      To: "hello@marktiddy.co.uk",
      From: "".concat(email[0].value),
      Subject: "Portfolio email from ".concat(name[0].value),
      Body: "".concat(message[0].value)
    }).then($("#sent-message").fadeIn().show(), email[0].value = "", message[0].value = "", name[0].value = "", setTimeout(hideSuccess, 4000));
  }
}); //Hide sucess

function hideSuccess() {
  $("#sent-message").fadeOut().hide();
} //Function to validate


function inputValidation(field) {
  if ($("#input-".concat(field)).val()) {
    $("#".concat(field, "-error")).hide().fadeOut();
    return true;
  } else {
    $("#".concat(field, "-error")).fadeIn().show();
    return false;
  }
}
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51541" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts.js"], null)
//# sourceMappingURL=/scripts.b71a6038.js.map