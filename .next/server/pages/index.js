"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./public/favicon.ico
/* harmony default export */ const favicon = ({"src":"/_next/static/media/favicon.b73c56e9.ico","height":16,"width":16});
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/puissance4.png
/* harmony default export */ const puissance4 = ({"src":"/_next/static/media/puissance4.9bfc6da4.png","height":809,"width":680,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAdklEQVR42iWKSw4CQQhEKcBPJ97/Xu70CK7GmO5k7EAjOK8IqZcUIsLc370zwMy31lSE4s9y72PEWofq/fmY5ma2z2+7XCUB9LVtuxmDGRjzE0EC0pOoBwGUrixEVNsozYCoWpJPq+WBIlMgi55VPBaXEI4h4we63kwTpEPZ9QAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/index.js
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable jsx-a11y/alt-text */ 







function Home() {
    const { 0: darkMode , 1: setDarkMode  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: darkMode ? "dark font-quicksand" : "font-quicksand",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: favicon
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "bg-teal-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-7xl mx-auto sm:px-24 lg:px-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-between h-6 sm:h-24",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden sm:block lg:flex items-center mx-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "text-white hover:bg-teal-400 rounded-md py-2 font-bold mr-20",
                                        "aria-current": "page",
                                        children: "Projets"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mx-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#Puissance4",
                                                className: "text-white hover:bg-teal-500 rounded-md pr-3 lg:px-4 py-2",
                                                children: "Puissance_4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-white hover:bg-teal-500 rounded-md px-3 lg:px-4 py-2",
                                                children: "Meetic"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-white hover:bg-teal-500 rounded-md px-3 lg:px-4 py-2",
                                                children: "Twitter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-white hover:bg-teal-500 rounded-md px-3 lg:px-4 py-2",
                                                children: "Free_ads"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-white hover:bg-teal-500 rounded-md px-3 lg:px-4 py-2",
                                                children: "Spotify"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-white hover:bg-teal-500 rounded-md px-3 lg:px-4 py-2",
                                                children: "Morpion"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sm:hidden",
                        id: "mobile-menu",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-2 pt-2 pb-3 space-y-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold",
                                    children: "Projets"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#Puissance4",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Puissance 4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Meetic"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Twitter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Free ads"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Spotify"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Morpion"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: " bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "py-10 mb-12 flex justify-between dark:text-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "font-glametrix text-3xl",
                                        children: "Welcome to my portfolio"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mt-16",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillMoonStarsFill, {
                                                    onClick: ()=>setDarkMode(!darkMode),
                                                    className: " cursor-pointer text-2xl"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "lg:fixed hidden lg:block",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8",
                                                    href: "#",
                                                    children: "Back to menu"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "fixed lg:hidden sm:block",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8",
                                                    href: "#",
                                                    children: "↑"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center p-10 py-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl",
                                        children: "Maylan Gomes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-2xl py-2 dark:text-white md:text-3xl",
                                        children: "D\xe9veloppeur full-stack."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl",
                                        children: "\xc9tudiant \xe0 la Web@cad\xe9mie d'Epitech, je peux r\xe9aliser des projets sous tous leurs aspects dans de nombreux langages."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillLinkedin, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillGithub, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "py-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "basis-1/3 flex-1 ",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-md py-2 leading-8 text-gray-800 dark:text-gray-200",
                                            children: [
                                                "Puissance 4 : projet d\xe9velopp\xe9 en ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-teal-600",
                                                    children: "javascript natif "
                                                }),
                                                "(seul, 2 semaines)."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-lg object-cover",
                                            width: "100%",
                                            height: "100%",
                                            layout: "responsive",
                                            src: puissance4
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "basis-1/3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-md py-2 leading-8 text-gray-800 dark:text-gray-200",
                                            children: [
                                                "Puissance 4 : projet d\xe9velopp\xe9 en ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-teal-600",
                                                    children: "javascript natif "
                                                }),
                                                "(seul, 2 semaines)."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-lg object-cover",
                                            width: "100%",
                                            height: "100%",
                                            layout: "responsive",
                                            src: puissance4
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "basis-1/3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-md py-2 leading-8 text-gray-800 dark:text-gray-200",
                                            children: [
                                                "Puissance 4 : projet d\xe9velopp\xe9 en ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-teal-600",
                                                    children: "javascript natif "
                                                }),
                                                "(seul, 2 semaines)."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-lg object-cover",
                                            width: "100%",
                                            height: "100%",
                                            layout: "responsive",
                                            src: puissance4
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "Puissance4",
                                    className: "basis-1/3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-md py-2 leading-8 text-gray-800 dark:text-gray-200",
                                            children: [
                                                "Puissance 4 : projet d\xe9velopp\xe9 en ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-teal-600",
                                                    children: "javascript natif "
                                                }),
                                                "(seul, 2 semaines)."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-lg object-cover",
                                            width: "100%",
                                            height: "100%",
                                            layout: "responsive",
                                            src: puissance4
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "basis-1/3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-md py-2 leading-8 text-gray-800 dark:text-gray-200",
                                            children: [
                                                "Puissance 4 : projet d\xe9velopp\xe9 en ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-teal-600",
                                                    children: "javascript natif "
                                                }),
                                                "(seul, 2 semaines)."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-lg object-cover",
                                            width: "100%",
                                            height: "100%",
                                            Generated: true,
                                            layout: "responsive",
                                            src: puissance4
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "basis-1/3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-md py-2 leading-8 text-gray-800 dark:text-gray-200",
                                            children: [
                                                "Puissance 4 : projet d\xe9velopp\xe9 en ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-teal-600",
                                                    children: "javascript natif "
                                                }),
                                                "(seul, 2 semaines)."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-lg object-cover",
                                            width: "100%",
                                            height: "100%",
                                            layout: "responsive",
                                            src: puissance4
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(967)));
module.exports = __webpack_exports__;

})();