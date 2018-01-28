webpackJsonp([2],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Testimonials = __webpack_require__(54);

var _Testimonials2 = _interopRequireDefault(_Testimonials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Testimonials2.default, null), document.getElementById('Testimonials'));

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Testimonials = function (_React$Component) {
    _inherits(Testimonials, _React$Component);

    function Testimonials() {
        _classCallCheck(this, Testimonials);

        return _possibleConstructorReturn(this, (Testimonials.__proto__ || Object.getPrototypeOf(Testimonials)).apply(this, arguments));
    }

    _createClass(Testimonials, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "block", id: "successful-stories" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Success Stories"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "story" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement(
                                        "a",
                                        { target: "_blank", href: "https://www.linkedin.com/in/markansonia/", title: "Mark Ansonia's Linked In Page (Opens in new window)" },
                                        _react2.default.createElement("img", { src: "assets/img/markansonia.jpg", alt: "Mark Ansonia - an old colleague" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "blockquote",
                                    null,
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "I worked with Jenita for a number of years. Jenita consistently managed to bring together a large team of people to deliver operationally critical information resulting in clear reporting against KPIs."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        " Jenita was the person to go to to resolve problems. If you need someone you can trust to \"just get on with it\" and see it through, then I can highly recommend Jen. In fact, I use the documents she produced in my role in Switzerland!"
                                    ),
                                    _react2.default.createElement(
                                        "footer",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { target: "_blank", href: "https://www.linkedin.com/in/markansonia/", title: "Mark's Linked In Page (Opens in new window)" },
                                            "Mark Ansonia"
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "story" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image" },
                                    _react2.default.createElement(
                                        "a",
                                        { target: "_blank", href: "https://www.linkedin.com/in/nicholas-kirk-1773738/", title: "Nick Kirk's Linked In Page (Opens in new window)" },
                                        _react2.default.createElement("img", { src: "assets/img/nickkirk.jpg", alt: "Nick Kirk - an old colleague" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "blockquote",
                                    null,
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "Having worked with Jenita for several years in the supply chain and purchasing function as a supply chain planner, I always found Jenita to be concise and logical in her approach to her work and a real asset to the department."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "Jenita's creative and innovative approach delivered huge improvements to several product ranges and promotions resulting in greatly improved SLA's with suppliers and internal customers alike."
                                    ),
                                    _react2.default.createElement(
                                        "footer",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { target: "_blank", href: "https://www.linkedin.com/in/nicholas-kirk-1773738/", title: "Nick's Linked In Pages (Opens in new window)" },
                                            "Nick Kirk"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement("div", { className: "bg" })
            );
        }
    }]);

    return Testimonials;
}(_react2.default.Component);

exports.default = Testimonials;

/***/ })

},[53]);