(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/NewThread.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var uiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uiv */ "./node_modules/uiv/dist/uiv.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alltags: {
      type: Array,
      require: true
    },
    allchannels: {
      type: Array,
      require: true
    }
  },
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Typeahead: uiv__WEBPACK_IMPORTED_MODULE_1__["Typeahead"]
  },
  computed: {
    thumb: function thumb() {
      return this.threadThumb == '' ? '/images/default-thread-thumb.jpg' : this.threadThumb;
    }
  },
  data: function data() {
    return {
      threadThumb: '',
      selectFile: null,
      formData: new FormData(),
      form: {
        channel: '',
        tags: null,
        title: '',
        body: '',
        location: '',
        category: '',
        main_subject: '',
        image_path: null,
        age_restriction: '',
        wiki_info_page_url: '',
        share_on_facebook: false,
        share_on_twitter: false
      },
      image_path_error: false,
      image_path_error_message: ''
    };
  },
  methods: {
    OpenImgUpload: function OpenImgUpload() {
      $('#image_path').trigger('click');
    },
    tagChange: function tagChange() {
      var len = this.form.tags.length;

      if (len > 0) {
        var lastIndex = this.form.tags[len - 1];
        var separateItem = lastIndex.name.split(/[\s,]+/);

        if (separateItem.length > 0) {
          this.form.tags.pop();

          for (var i = 0; i < separateItem.length; i++) {
            if (separateItem[i].length > 0) {
              this.form.tags.push({
                name: separateItem[i]
              });
            }
          }
        }
      }
    },
    onFileSelected: function onFileSelected(event) {
      var _this = this;

      if (!event.target.files.length) return;
      this.image_path_error = false;
      this.image_path_error_message = '';
      var file = event.target.files[0];

      if (file.size > 1024 * 1024) {
        event.preventDefault();
        this.image_path_error = true;
        this.image_path_error_message = 'Thread image may not be greater than 2048 kilobytes';
        return;
      }

      this.selectFile = event.target.files[0];
      this.formData.append('image_path', this.selectFile);
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        var src = e.target.result;
        _this.threadThumb = src;
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thread-thumb-placeholder[data-v-8e5b3c86] {\n  width: 150px;\n  height: 150px;\n  background-color: #eeeeee;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _vm._v("\n        Post an Anecdote\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "form",
        { attrs: { action: "", method: "", enctype: "multipart/form-data" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "title" } },
                  [_vm._v("Title (required)")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.title,
                      expression: "form.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "title" },
                  domProps: { value: _vm.form.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "title", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c(
                "div",
                { staticClass: "form-group " },
                [
                  _c("label", { attrs: { for: "input" } }, [
                    _vm._v("Category")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      id: "input",
                      type: "text",
                      placeholder: "Enter channel name"
                    }
                  }),
                  _vm._v(" "),
                  _c("typeahead", {
                    attrs: {
                      target: "#input",
                      data: _vm.allchannels,
                      "item-key": "name",
                      "force-select": ""
                    },
                    model: {
                      value: _vm.form.channel,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "channel", $$v)
                      },
                      expression: "form.channel"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "label",
                    { staticClass: "control-label", attrs: { for: "tags" } },
                    [
                      _vm._v(
                        "\n                        Tags\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      taggable: "",
                      "push-tags": "",
                      options: _vm.alltags,
                      label: "name",
                      multiple: ""
                    },
                    on: { input: _vm.tagChange },
                    model: {
                      value: _vm.form.tags,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "tags", $$v)
                      },
                      expression: "form.tags"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "label",
                    { staticClass: "control-label", attrs: { for: "body" } },
                    [_vm._v("Your Story (required)")]
                  ),
                  _vm._v(" "),
                  _c("editor", {
                    attrs: {
                      height: "500",
                      "api-key": "TINY_EDITOR_API_KEY",
                      init: {
                        selector: "#tinyeditor",
                        plugins: "code | autoresize",
                        toolbar:
                          "formatselect fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | code | numlist bullist outdent indent  ",

                        toolbar_drawer: "floating",
                        tinycomments_mode: "embedded",
                        tinycomments_author: "Author name"
                      }
                    },
                    model: {
                      value: _vm.form.body,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "body", $$v)
                      },
                      expression: "form.body"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c(
                "div",
                {
                  staticClass: "form-group ",
                  class: _vm.image_path_error ? "has-error" : ""
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "image_path" }
                    },
                    [_vm._v("Add an image")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "thread-thumb-placeholder",
                      on: { click: _vm.OpenImgUpload }
                    },
                    [
                      _c("img", {
                        attrs: { src: _vm.thumb, width: "100%", height: "100%" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    staticStyle: { display: "none" },
                    attrs: {
                      type: "file",
                      name: "image_path",
                      accept: "image/*",
                      id: "image_path"
                    },
                    on: { change: _vm.onFileSelected }
                  }),
                  _vm._v(" "),
                  _vm.image_path_error
                    ? _c("span", { staticClass: "help-block " }, [
                        _c("strong", {
                          domProps: {
                            textContent: _vm._s(_vm.image_path_error_message)
                          }
                        })
                      ])
                    : _vm._e()
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "more-fields" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group " }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "wiki_info_page_url" }
                    },
                    [_vm._v(" Or Enter Image link ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.wiki_info_page_url,
                        expression: "form.wiki_info_page_url"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "wiki_info_page_url",
                      id: "wiki_info_page_url"
                    },
                    domProps: { value: _vm.form.wiki_info_page_url },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "wiki_info_page_url",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "main_subject" }
                    },
                    [_vm._v("Main Subject:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.main_subject,
                        expression: "form.main_subject"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "main_subject",
                      id: "main_subject"
                    },
                    domProps: { value: _vm.form.main_subject },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "main_subject", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "help-block" }, [
                    _vm._v(
                      "Who or what is this story about? This will be added as a tag. "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { staticClass: "control-label", attrs: { for: "source" } },
                    [_vm._v("Source")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.source,
                        expression: "form.source"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "source", id: "source" },
                    domProps: { value: _vm.form.source },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "source", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "help-block" }, [
                    _vm._v(
                      " Where did you hear this story? If this story was reported on a website or other publication please list it here (<i> <a> tags are allowed)."
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "location" }
                    },
                    [_vm._v("Location")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.location,
                        expression: "form.location"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "location", id: "location" },
                    domProps: { value: _vm.form.location },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "location", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "help-block" }, [
                    _vm._v(
                      'Where did your story take place? If google can find it, we\'ll add maps & markers for this story. Example locations are: "111 5th ave, NYC" and "Louvre."'
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "category" }
                    },
                    [_vm._v(" This story involves:")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "checkbox" }, [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.category,
                            expression: "form.category"
                          }
                        ],
                        attrs: { type: "checkbox", value: "C" },
                        domProps: {
                          checked: Array.isArray(_vm.form.category)
                            ? _vm._i(_vm.form.category, "C") > -1
                            : _vm.form.category
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.category,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "C",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "category", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v("Celebrities")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "checkbox" }, [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.category,
                            expression: "form.category"
                          }
                        ],
                        attrs: { type: "checkbox", value: "N" },
                        domProps: {
                          checked: Array.isArray(_vm.form.category)
                            ? _vm._i(_vm.form.category, "N") > -1
                            : _vm.form.category
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.category,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "N",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "category", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v("Other notables")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "checkbox" }, [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.category,
                            expression: "form.category"
                          }
                        ],
                        attrs: { type: "checkbox", value: "O" },
                        domProps: {
                          checked: Array.isArray(_vm.form.category)
                            ? _vm._i(_vm.form.category, "O") > -1
                            : _vm.form.category
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.category,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "O",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "category",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "category", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v("Other people")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "checkbox" }, [
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.anonymous,
                            expression: "form.anonymous"
                          }
                        ],
                        attrs: { type: "checkbox", name: "anonymous" },
                        domProps: {
                          value: 1,
                          checked: Array.isArray(_vm.form.anonymous)
                            ? _vm._i(_vm.form.anonymous, 1) > -1
                            : _vm.form.anonymous
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.anonymous,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = 1,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "anonymous",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "anonymous",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "anonymous", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v("Post Anonymously")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "checkbox" }, [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.share_on_facebook,
                      expression: "form.share_on_facebook"
                    }
                  ],
                  attrs: {
                    type: "checkbox",
                    value: "1",
                    name: "share_on_facebook"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.form.share_on_facebook)
                      ? _vm._i(_vm.form.share_on_facebook, "1") > -1
                      : _vm.form.share_on_facebook
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.share_on_facebook,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "1",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form,
                              "share_on_facebook",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "share_on_facebook",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form, "share_on_facebook", $$c)
                      }
                    }
                  }
                }),
                _vm._v("Share on Facebook")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "checkbox" }, [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.share_on_twitter,
                      expression: "form.share_on_twitter"
                    }
                  ],
                  attrs: {
                    type: "checkbox",
                    value: "1",
                    name: "share_on_twitter"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.form.share_on_twitter)
                      ? _vm._i(_vm.form.share_on_twitter, "1") > -1
                      : _vm.form.share_on_twitter
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.share_on_twitter,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "1",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.form,
                              "share_on_twitter",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "share_on_twitter",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form, "share_on_twitter", $$c)
                      }
                    }
                  }
                }),
                _vm._v("Share on Twitter")
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "" } }, [
        _c("input", { attrs: { type: "checkbox" } }),
        _vm._v(
          " \n                                This image is copyright-free (or the description includes license information)\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group " }, [
        _c(
          "label",
          {
            staticClass: "control-label",
            attrs: { for: "wiki_image_description" }
          },
          [_vm._v(" Image description")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", id: "wiki_image_description" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "age_restriction" } }, [
            _vm._v("Age Restriction")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              staticClass: "form-control ",
              attrs: { name: "age_restriction", id: "age_restriction" }
            },
            [
              _c("option", { attrs: { value: "0" } }, [
                _vm._v("Ok for everyone")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "13" } }, [_vm._v("PG-13")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [
                _vm._v("R-rated (18+)")
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/threads/NewThread.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/threads/NewThread.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewThread_vue_vue_type_template_id_8e5b3c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true& */ "./resources/assets/js/components/threads/NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true&");
/* harmony import */ var _NewThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewThread.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/threads/NewThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true& */ "./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewThread_vue_vue_type_template_id_8e5b3c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewThread_vue_vue_type_template_id_8e5b3c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8e5b3c86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/threads/NewThread.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/threads/NewThread.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/NewThread.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewThread.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=style&index=0&id=8e5b3c86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_style_index_0_id_8e5b3c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/threads/NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_template_id_8e5b3c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/NewThread.vue?vue&type=template&id=8e5b3c86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_template_id_8e5b3c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewThread_vue_vue_type_template_id_8e5b3c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);