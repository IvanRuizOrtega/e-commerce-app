"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_admin_components_CreateProductComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateProductComponent",
  data: function data() {
    return {
      product: {
        name: '',
        slug: '',
        description: '',
        price: '',
        category: '',
        file: null
      },
      categories: [],
      errors: []
    };
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/admin:categories').then(function (_ref) {
                  var data = _ref.data;
                  _this.categories = data;
                })["catch"](function (_ref2) {
                  var data = _ref2.response.data;
                  _this.errors = [];

                  _this.errors.push(data.errors);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    create: function create() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('name', _this2.product.name);
                formData.append('slug', _this2.product.slug);
                formData.append('description', _this2.product.description);
                formData.append('price', _this2.product.price);
                formData.append('category', _this2.product.category);
                formData.append('image', _this2.product.file);
                _context2.next = 9;
                return axios.post('/api/admin:products', formData, {
                  headers: {
                    'content-type': 'multipart/form-data'
                  }
                }).then(function () {
                  _this2.errors = [];
                  alert('Exito');
                })["catch"](function (_ref3) {
                  var data = _ref3.response.data;
                  _this2.errors = [];

                  _this2.errors.push(data.errors);
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleFileUpload: function handleFileUpload() {
      this.product.file = this.$refs.file.files[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=template&id=3db513ac":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=template&id=3db513ac ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row justify-content-center"
};
var _hoisted_3 = {
  "class": "col-12"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "card-header d-flex justify-content-between align-items-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Crear producto ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Volver ");

var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  key: 0
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Por favor, corrija el(los) siguiente(s) error(es):", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "form-group mb-3"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col col-form-label text-md-end"
}, " Nombre ", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "col"
};
var _hoisted_14 = {
  "class": "form-group mb-3"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col col-form-label text-md-end"
}, " Slug ", -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "col"
};
var _hoisted_17 = {
  "class": "form-group mb-3"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col col-form-label text-md-end"
}, " Descripcion ", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "col"
};
var _hoisted_20 = {
  "class": "form-group mb-3"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col col-form-label text-md-end"
}, " Precio ", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "col"
};
var _hoisted_23 = {
  "class": "form-group mb-3"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col col-form-label text-md-end"
}, " Categoria ", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "col"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: "",
  disabled: ""
}, "Escoge una opción...", -1
/* HOISTED */
);

var _hoisted_27 = ["ke", "value"];
var _hoisted_28 = {
  "class": "form-group mb-3"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col col-form-label text-md-end"
}, " Imagen ", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "col"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-sm btn-outline-primary"
}, " Guardar ")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'admin.products'
    },
    "class": "btn btn-sm btn-outline-success"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    method: "POST",
    action: "#",
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.create && $options.create.apply($options, arguments);
    }, ["prevent"])),
    enctype: "multipart/form-data"
  }, [_ctx.errors.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.errors, function (error, ke) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: ke
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(error), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.product.name = $event;
    }),
    type: "text",
    "class": "form-control",
    required: "",
    autofocus: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.product.name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.product.slug = $event;
    }),
    type: "text",
    "class": "form-control",
    required: "",
    autofocus: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.product.slug]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.product.description = $event;
    }),
    type: "text",
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.product.description]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.product.price = $event;
    }),
    type: "text",
    "class": "form-control",
    required: "",
    autofocus: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.product.price]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.product.category = $event;
    }),
    "class": "form-control",
    required: "",
    autofocus: ""
  }, [_hoisted_26, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.categories, function (c, kc) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      ke: kc,
      value: c.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(c.name), 9
    /* TEXT, PROPS */
    , _hoisted_27);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.product.category]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onChange: _cache[5] || (_cache[5] = function () {
      return $options.handleFileUpload && $options.handleFileUpload.apply($options, arguments);
    }),
    ref: "file",
    type: "file",
    accept: "image/jpeg",
    "class": "form-control",
    required: "",
    autofocus: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  )])]), _hoisted_31], 32
  /* HYDRATE_EVENTS */
  )])])])])]);
}

/***/ }),

/***/ "./resources/js/src/admin/components/CreateProductComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/admin/components/CreateProductComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateProductComponent_vue_vue_type_template_id_3db513ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProductComponent.vue?vue&type=template&id=3db513ac */ "./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=template&id=3db513ac");
/* harmony import */ var _CreateProductComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProductComponent.vue?vue&type=script&lang=js */ "./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Ao_Sh_Documents_Projects_TEST_e_commerce_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ao_Sh_Documents_Projects_TEST_e_commerce_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CreateProductComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateProductComponent_vue_vue_type_template_id_3db513ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/admin/components/CreateProductComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProductComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProductComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateProductComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=template&id=3db513ac":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=template&id=3db513ac ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProductComponent_vue_vue_type_template_id_3db513ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateProductComponent_vue_vue_type_template_id_3db513ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateProductComponent.vue?vue&type=template&id=3db513ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/admin/components/CreateProductComponent.vue?vue&type=template&id=3db513ac");


/***/ })

}]);