/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ...

	// send all requests to index.html so browserHistory works

	// and these to match the url to routes and then render
	// ...
	// import some new stuff
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});
	// we'll use this to render our app to an html string


	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	var _Content = __webpack_require__(7);

	var _Content2 = _interopRequireDefault(_Content);

	var _NotFound = __webpack_require__(27);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/' }),
	    _react2.default.createElement(_reactRouter.Route, { name: 'report', path: '/:year/:quarter', component: _Content2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
	  )
	);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.props.children
	    );
	  }
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(8);

	var _axios2 = _interopRequireDefault(_axios);

	var _Header = __webpack_require__(9);

	var _Header2 = _interopRequireDefault(_Header);

	var _Main = __webpack_require__(11);

	var _Main2 = _interopRequireDefault(_Main);

	var _Footer = __webpack_require__(21);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _NotFound = __webpack_require__(27);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Content',

	    getInitialState: function getInitialState() {
	        return {
	            title: null,
	            subtitle: null,
	            content: null,
	            header: null,
	            paragraphs: null,
	            data_bar_all: [],
	            data_bar_unintent: [],
	            data_line_drug: [],
	            data_line_ma: []
	        };
	    },

	    makeMyRoot: function makeMyRoot() {
	        var myUrl = window.location.href;
	        var arr = myUrl.split('/');
	        var myRoot = arr[0] + "//" + arr[2] + "/";
	        var subdir = arr[3] || "";
	        myRoot += subdir + "/";

	        return myRoot;
	    },


	    componentWillMount: function componentWillMount() {
	        this.fetchContent();
	    },

	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        var oldId = prevProps.params;
	        var newId = this.props.params;
	        if (newId !== oldId) console.log(this.props.params);
	        this.fetchContent(this.makeMyRoot());
	    },
	    fetchContent: function fetchContent(root) {
	        var _this = this;
	        _axios2.default.all([_axios2.default.get(root + '/content/content_' + this.props.params.year + '_' + this.props.params.quarter + '.json'), _axios2.default.get(root + '/data/_' + this.props.params.year + '_' + this.props.params.quarter + '/bar-all-death.json'), _axios2.default.get(root + '/data/_' + this.props.params.year + '_' + this.props.params.quarter + '/bar-unintent-death.json'), _axios2.default.get(root + '/data/_' + this.props.params.year + '_' + this.props.params.quarter + '/line-drug-present.json'), _axios2.default.get(root + '/data/_' + this.props.params.year + '_' + this.props.params.quarter + '/line-ma-unintent.json')]).then(_axios2.default.spread(function (result, bar_all, bar_unintent, line_drug, line_ma) {
	            _this.setState({
	                content: result.data,
	                header: result.data.header,
	                title: result.data.header.title,
	                subtitle: result.data.header.subtitle,
	                paragraphs: result.data.body,
	                data_bar_all: bar_all.data,
	                data_bar_unintent: bar_unintent.data,
	                data_line_drug: line_drug.data,
	                data_line_ma: line_ma.data
	            });
	        })).catch(function (error) {
	            console.log(error);
	        });
	    },


	    componentWillUnmount: function componentWillUnmount() {
	        this.ignoreLastFetch = true;
	    },

	    render: function render() {
	        var paragraphs = this.state.paragraphs;

	        return paragraphs ? this.renderContent() : this.renderLoader();
	    },
	    renderContent: function renderContent() {
	        var _props$params = this.props.params,
	            year = _props$params.year,
	            quarter = _props$params.quarter;
	        var _state = this.state,
	            title = _state.title,
	            subtitle = _state.subtitle;

	        console.log(this.state.paragraphs);
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_Header2.default, { yr: year, qr: quarter, title: title, subtitle: subtitle }),
	            _react2.default.createElement(_Main2.default, this.state),
	            _react2.default.createElement(_Footer2.default, null)
	        );
	    },
	    renderLoader: function renderLoader() {
	        return _react2.default.createElement(_NotFound2.default, null);
	    }
	});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dropdown = __webpack_require__(10);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = _react2.default.createClass({
	  displayName: 'Header',

	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    qr: _react2.default.PropTypes.string.isRequired,
	    yr: _react2.default.PropTypes.string.isRequired,
	    title: _react2.default.PropTypes.string.isRequired, //boollean is abbrev.
	    subtitle: _react2.default.PropTypes.string.isRequired
	  },
	  getInitialState: function getInitialState() {
	    return {
	      placeholder: "Select a quarter"
	    };
	  },
	  contextTypes: {
	    router: _react2.default.PropTypes.object
	  },
	  handleChange: function handleChange(event) {
	    event.preventDefault();
	    var _this = event.target;
	    var serial = _this.value;
	    if (serial === "older") {
	      window.open('http://www.mass.gov/eohhs/gov/departments/dph/stop-addiction/current-statistics.html', '_blank');
	    } else {
	      var text = _this[_this.selectedIndex].text;
	      this.setState({ placeholder: text });
	      this.context.router.push(serial);
	    }
	  },

	  render: function render() {
	    var placeholder = this.state.placeholder;

	    return _react2.default.createElement(
	      'header',
	      { className: 'ma__illustrated-header' },
	      _react2.default.createElement(
	        'div',
	        { className: 'ma__illustrated-header__container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ma__illustrated-header__content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ma__illustrated-header__category' },
	            "q" + this.props.qr + " " + this.props.yr
	          ),
	          _react2.default.createElement(
	            'section',
	            { className: 'ma__page-header' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ma__page-header__content', property: 'mainEntityOfPage' },
	              _react2.default.createElement(
	                'h1',
	                { className: 'ma__page-header__title' },
	                this.props.title
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'ma__page-header__intro' },
	                _react2.default.createElement(
	                  'section',
	                  { className: 'ma__rich-text js-ma-rich-text' },
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    this.props.subtitle
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_Dropdown2.default, { onChange: this.handleChange, placeholder: placeholder })
	          )
	        )
	      ),
	      _react2.default.createElement('div', { className: 'ma__illustrated-header__image ma__illustrated-header__image--empty' })
	    );
	  }
	});

	module.exports = Header;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dropdown = _react2.default.createClass({
	  displayName: 'Dropdown',

	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    placeholder: _react2.default.PropTypes.string.isRequired
	  },
	  render: function render() {
	    var myUrl = window.location.href;
	    var arr = myUrl.split('/');
	    var myRoot = arr[0] + "//" + arr[2] + "/";
	    var subdir = arr[3] || "";
	    myRoot += subdir + "/";

	    console.log(myRoot);
	    return _react2.default.createElement(
	      'section',
	      _extends({}, this.props, { className: 'ma__select-box' }),
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'color-select', className: 'ma__select-box__label' },
	        'View other quarterly reports'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'ma__select-box__field' },
	        _react2.default.createElement(
	          'select',
	          { className: 'ma__select-box__select' },
	          _react2.default.createElement(
	            'option',
	            { value: myRoot + '2017/3' },
	            'Q3 2017'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: myRoot + '2017/2' },
	            'Q2 2017'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: myRoot + '2017/1' },
	            'Q1 2017'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'older' },
	            'Older'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ma__select-box__link' },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.placeholder
	          ),
	          _react2.default.createElement('span', { className: 'ma__select-box__icon' })
	        )
	      )
	    );
	  }

	});

	module.exports = Dropdown;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SidebarNav = __webpack_require__(12);

	var _SidebarNav2 = _interopRequireDefault(_SidebarNav);

	var _Section = __webpack_require__(15);

	var _Section2 = _interopRequireDefault(_Section);

	var _SplitColumns = __webpack_require__(16);

	var _SplitColumns2 = _interopRequireDefault(_SplitColumns);

	var _Figure = __webpack_require__(17);

	var _Figure2 = _interopRequireDefault(_Figure);

	var _Paragraph = __webpack_require__(18);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _GraphTitle = __webpack_require__(19);

	var _GraphTitle2 = _interopRequireDefault(_GraphTitle);

	var _recharts = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Main = _react2.default.createClass({
	  displayName: 'Main',


	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    data_bar_unintent: _react2.default.PropTypes.array.isRequired,
	    data_bar_all: _react2.default.PropTypes.array.isRequired,
	    data_line_ma: _react2.default.PropTypes.array.isRequired,
	    data_line_drug: _react2.default.PropTypes.array.isRequired
	  },
	  render: function render() {
	    var getPercent = function getPercent(value, total) {
	      var ratio = total > 0 ? value / total : 0;
	      return toPercent(ratio, 2);
	    };

	    var toPercent = function toPercent(decimal) {
	      var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      return (decimal * 100).toFixed(fixed) + '%';
	    };

	    var color = {
	      green: "#43956f",
	      grey: "#535353",
	      blue: "#0071bc",
	      red: "#b71c1c"
	    };
	    var AxisLabel = function AxisLabel(_ref) {
	      var axisType = _ref.axisType,
	          x = _ref.x,
	          y = _ref.y,
	          width = _ref.width,
	          height = _ref.height,
	          stroke = _ref.stroke,
	          children = _ref.children;

	      var isVert = axisType === 'yAxis';
	      var cx = isVert ? x + 20 : x + width / 2;
	      var cy = isVert ? height / 2 + y : y + height + 2;
	      var rot = isVert ? '270 ' + cx + ' ' + cy : 0;
	      return _react2.default.createElement(
	        _recharts.Text,
	        { x: cx, y: cy, transform: 'rotate(' + rot + ')', textAnchor: 'middle', fontSize: '.7em' },
	        children
	      );
	    };
	    return _react2.default.createElement(
	      'main',
	      { id: 'main-content', tabIndex: -1 },
	      _react2.default.createElement(
	        'div',
	        { className: 'main-content main-content--two' },
	        _react2.default.createElement(
	          'section',
	          { className: 'ma__action-details' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ma__action-details__content' },
	            _react2.default.createElement(_SidebarNav2.default, null),
	            _react2.default.createElement(_Section2.default, { id: 'Overview' }),
	            _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 0 })),
	            _react2.default.createElement(
	              _GraphTitle2.default,
	              null,
	              'All Intent Opioid-Related Deaths of Massachusetts Residents 2015-2016'
	            ),
	            _react2.default.createElement(
	              _recharts.ResponsiveContainer,
	              { minHeight: 400 },
	              _react2.default.createElement(
	                _recharts.BarChart,
	                { data: this.props.data_bar_all, margin: { top: 20, right: 20, left: 10, bottom: 5 } },
	                _react2.default.createElement(_recharts.XAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    null,
	                    'Month'
	                  ), dataKey: 'Month', fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.YAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    { axisType: 'yAxis' },
	                    'Deaths'
	                  ), tickCount: 10, fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
	                _react2.default.createElement(_recharts.Tooltip, null),
	                _react2.default.createElement(_recharts.Legend, null),
	                _react2.default.createElement(_recharts.Bar, { dataKey: 'Estimated', stackId: 'a', fill: color.grey }),
	                _react2.default.createElement(_recharts.Bar, { dataKey: 'Confirmed', stackId: 'a', fill: color.green })
	              )
	            ),
	            _react2.default.createElement(
	              _GraphTitle2.default,
	              null,
	              'Uninententional/Undetermined Opioid-Related Deaths in Massachusetts from 2000-2015'
	            ),
	            _react2.default.createElement(
	              _recharts.ResponsiveContainer,
	              { minHeight: 400 },
	              _react2.default.createElement(
	                _recharts.BarChart,
	                { data: this.props.data_bar_unintent, margin: { top: 20, right: 20, left: 10, bottom: 5 } },
	                _react2.default.createElement(_recharts.XAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    null,
	                    'Month'
	                  ), dataKey: 'Year', fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.YAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    { axisType: 'yAxis' },
	                    'Deaths'
	                  ), tickCount: 10, fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
	                _react2.default.createElement(_recharts.Tooltip, null),
	                _react2.default.createElement(_recharts.Legend, null),
	                _react2.default.createElement(_recharts.Bar, { dataKey: 'Estimated', stackId: 'a', fill: color.grey }),
	                _react2.default.createElement(_recharts.Bar, { dataKey: 'Confirmed', stackId: 'a', fill: color.blue })
	              )
	            ),
	            _react2.default.createElement(
	              _GraphTitle2.default,
	              null,
	              'Percent of Opioid Deaths with Specific Drugs Present MA: 2014-2016'
	            ),
	            _react2.default.createElement(
	              _recharts.ResponsiveContainer,
	              { minHeight: 400 },
	              _react2.default.createElement(
	                _recharts.LineChart,
	                { data: this.props.data_line_drug },
	                _react2.default.createElement(_recharts.XAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    null,
	                    'Quarter'
	                  ), dataKey: 'date', fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.YAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    { axisType: 'yAxis', x: 30, y: -50 },
	                    'Percentage'
	                  ), tickCount: 5, tickFormatter: toPercent, fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
	                _react2.default.createElement(_recharts.Tooltip, null),
	                _react2.default.createElement(_recharts.Legend, null),
	                _react2.default.createElement(_recharts.Line, { dataKey: 'Both Fentanyl & Heroin', formatter: toPercent, stroke: color.grey }),
	                _react2.default.createElement(_recharts.Line, { dataKey: 'Only Fentanyl', formatter: toPercent, stroke: color.red, activeDot: { r: 8 } }),
	                _react2.default.createElement(_recharts.Line, { dataKey: 'Only Heroin', formatter: toPercent, stroke: color.blue }),
	                _react2.default.createElement(_recharts.Line, { dataKey: 'Only Methadone', formatter: toPercent, stroke: color.grey, strokeDasharray: '5 5' })
	              )
	            ),
	            _react2.default.createElement(
	              _GraphTitle2.default,
	              null,
	              'Rate of Unintentional/Undetermined Opioid-Related Deaths of Massachusetts Residents: 2000-2015'
	            ),
	            _react2.default.createElement(
	              _recharts.ResponsiveContainer,
	              { minHeight: 400 },
	              _react2.default.createElement(
	                _recharts.LineChart,
	                { data: this.props.data_line_ma },
	                _react2.default.createElement(_recharts.XAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    null,
	                    'Year'
	                  ), dataKey: 'year', fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.YAxis, { label: _react2.default.createElement(
	                    AxisLabel,
	                    { axisType: 'yAxis', x: 30, y: -50 },
	                    'Death Rate per 100,000 People'
	                  ), tickCount: 5, fontSize: '0.71em' }),
	                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
	                _react2.default.createElement(_recharts.Tooltip, null),
	                _react2.default.createElement(_recharts.Line, { dataKey: 'Death Rate per 100,000 People', stroke: color.blue })
	              )
	            ),
	            _react2.default.createElement(_Section2.default, { id: 'Geographic Data' }),
	            _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 1 })),
	            _react2.default.createElement(_Figure2.default, { image: '/assets/images/placeholder/400x300.png', align: 'align-right' }),
	            _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 1 })),
	            _react2.default.createElement(
	              _SplitColumns2.default,
	              _extends({}, this.props, { image: '/assets/images/placeholder/400x300.png' }),
	              _react2.default.createElement(_Figure2.default, { image: '/assets/images/placeholder/400x300.png' }),
	              _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 0 }))
	            ),
	            _react2.default.createElement(_Section2.default, { id: 'Demographics' }),
	            _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 2 })),
	            _react2.default.createElement(_Section2.default, { id: 'Prescription Activity' }),
	            _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 3 })),
	            _react2.default.createElement(_Section2.default, { id: 'Emergency Incidents' }),
	            _react2.default.createElement(_Paragraph2.default, _extends({}, this.props, { index: 4 }))
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Main;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _scrollAnchors = __webpack_require__(14);

	var _scrollAnchors2 = _interopRequireDefault(_scrollAnchors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SidebarNav = _react2.default.createClass({
	  displayName: 'SidebarNav',
	  componentDidMount: function componentDidMount() {
	    (0, _jquery2.default)(".js-scroll-anchors").each(function () {
	      var $el = (0, _jquery2.default)(this),
	          $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
	          elHeight = void 0,
	          headerBuffer = 0,
	          lowerLimit = void 0,
	          upperLimit = void 0,
	          debounceTimer = void 0,
	          activeClass = "is-active",
	          activeAnchor = 0,
	          anchors = [],
	          numAnchors = 0,
	          isMobile = false,
	          linkScrolling = false;

	      setVariables();

	      // default assumption as to where the screen will load
	      $el.attr('data-sticky', 'top');

	      // update variables one more time to catch any post page load changes
	      window.setTimeout(function () {
	        setVariables();
	      }, 1000);

	      $el.find('a').on('click', function (e) {
	        e.preventDefault();

	        // is the menu closed on mobile
	        if (!$el.hasClass('is-open') && isMobile) {
	          // just show the menu
	          $el.addClass('is-open');
	          return;
	        }

	        // find the location of the desired link and scroll the page
	        var position = anchors[(0, _jquery2.default)(this).data('index')].position;
	        // close the menu
	        $el.removeClass('is-open');
	        // remove active flag from other links
	        $el.find('.' + activeClass).removeClass(activeClass);
	        // mark this link as active
	        (0, _jquery2.default)(this).addClass(activeClass);
	        activeAnchor = (0, _jquery2.default)(this).data('index');
	        // prevent the scroll event from updating active links
	        linkScrolling = true;

	        (0, _jquery2.default)("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
	          linkScrolling = false;
	        });
	      });

	      $el.find(".js-scroll-anchors-toggle").on('click', function () {
	        $el.toggleClass('is-open');
	      });

	      // make the links sticky
	      (0, _jquery2.default)(window).resize(function () {
	        if (typeof debounceTimer === "number") {
	          window.clearTimeout(debounceTimer);
	        }
	        debounceTimer = window.setTimeout(function () {
	          setVariables();
	          setPosition();
	          activateLink();
	        }, 300);
	      });

	      (0, _jquery2.default)(window).scroll(function () {
	        setPosition();
	        activateLink();
	      });

	      function setVariables() {
	        var topOffset = 0;

	        headerBuffer = 0;
	        elHeight = $el.height();
	        upperLimit = $elParent.offset().top;
	        isMobile = checkMobile($el);

	        if ($elParent[0].hasAttribute("style") && !isMobile) {
	          $elParent.removeAttr('style');
	        }

	        if (isMobile) {
	          headerBuffer = (0, _jquery2.default)('.js-sticky-header').height() || 0;
	          upperLimit -= headerBuffer;
	          topOffset = elHeight;
	        }

	        lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

	        // locate the position of all of the anchor targets
	        anchors = new Array();
	        $el.find('a').each(function (i, e) {
	          var hash = this.hash,
	              position = (0, _jquery2.default)(hash).offset() ? (0, _jquery2.default)(hash).offset().top - headerBuffer - topOffset : upperLimit;

	          anchors[i] = { hash: hash, position: position };

	          (0, _jquery2.default)(this).data('index', i);
	        });

	        // record the number of anchors for performance
	        numAnchors = anchors.length;
	      }

	      function setPosition() {
	        var windowTop = (0, _jquery2.default)(window).scrollTop(),
	            attr = $el.attr('data-sticky'),
	            top = attr !== 'top' && windowTop <= upperLimit,
	            middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
	            bottom = attr !== 'bottom' && windowTop >= lowerLimit;

	        if ($elParent[0].hasAttribute("style") && !isMobile) {
	          $elParent.removeAttr('style');
	        }

	        if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
	          $elParent.css({ 'paddingTop': elHeight });
	        }

	        if (top) {
	          $el.attr('data-sticky', 'top');

	          if (isMobile) {
	            $elParent.removeAttr('style');
	          }
	        } else if (middle) {
	          $el.attr('data-sticky', 'middle');

	          if (isMobile) {
	            $elParent.css({ 'paddingTop': elHeight });
	          }
	        } else if (bottom) {
	          $el.attr('data-sticky', 'bottom');

	          if (isMobile) {
	            $elParent.removeAttr('style');
	          }
	        }
	      }

	      function activateLink() {
	        // do we have more than one anchor
	        if (numAnchors < 2 || linkScrolling) {
	          return;
	        }

	        // get the current scroll position and offset by half the view port
	        var windowTop = (0, _jquery2.default)(window).scrollTop() + window.innerHeight / 2,
	            currentAnchor = activeAnchor;

	        // is there a prev target
	        // and
	        // is the current scroll position above the current target
	        if (currentAnchor > 0 && windowTop < anchors[activeAnchor].position) {
	          // make the prev link active
	          --activeAnchor;
	        }

	        // is there a next target
	        // and
	        // is the current scroll position below the next target
	        else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchor + 1].position) {
	            // make the next link active
	            ++activeAnchor;
	          }

	        if (currentAnchor !== activeAnchor) {
	          // move the active flag
	          $el.find('.' + activeClass).removeClass(activeClass);
	          $el.find('a').eq(activeAnchor).addClass(activeClass);
	        }
	      }
	    });

	    function checkMobile($el) {
	      var value = "true";
	      try {
	        value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
	      } catch (err) {}
	      return value === "false" ? false : true;
	    };
	  },

	  render: function render() {
	    console.log(_scrollAnchors2.default);
	    return _react2.default.createElement(
	      'nav',
	      { className: 'ma__action-details__anchor-links js-scroll-anchors', 'aria-labelledby': 'page_contents' },
	      _react2.default.createElement(
	        'h3',
	        { className: 'visually-hidden', id: 'page_contents' },
	        'Page Contents'
	      ),
	      _react2.default.createElement(
	        'button',
	        { className: 'ma__action-details__toggle-link js-scroll-anchors-toggle' },
	        '+'
	      ),
	      _react2.default.createElement(
	        'a',
	        { href: '#overview', className: 'is-active' },
	        'Overview'
	      ),
	      _react2.default.createElement(
	        'a',
	        { href: '#geographic', className: true },
	        'Geographic Data'
	      ),
	      _react2.default.createElement(
	        'a',
	        { href: '#demographics', className: true },
	        'Demographics'
	      ),
	      _react2.default.createElement(
	        'a',
	        { href: '#prescription', className: true },
	        'Prescription Activity'
	      ),
	      _react2.default.createElement(
	        'a',
	        { href: '#emergency', className: true },
	        'Emergency Incidents'
	      )
	    );
	  }

	});

	module.exports = SidebarNav;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("jquery");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (window, document, $, undefined) {

	  $(".js-scroll-anchors").each(function () {
	    var $el = $(this),
	        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
	        elHeight = void 0,
	        headerBuffer = 0,
	        lowerLimit = void 0,
	        upperLimit = void 0,
	        debounceTimer = void 0,
	        activeClass = "is-active",
	        activeAnchor = 0,
	        anchors = [],
	        numAnchors = 0,
	        isMobile = false,
	        linkScrolling = false;

	    setVariables();

	    // default assumption as to where the screen will load
	    $el.attr('data-sticky', 'top');

	    // update variables one more time to catch any post page load changes
	    window.setTimeout(function () {
	      setVariables();
	    }, 1000);

	    $el.find('a').on('click', function (e) {
	      e.preventDefault();

	      // is the menu closed on mobile
	      if (!$el.hasClass('is-open') && isMobile) {
	        // just show the menu
	        $el.addClass('is-open');
	        return;
	      }

	      // find the location of the desired link and scroll the page
	      var position = anchors[$(this).data('index')].position;
	      // close the menu
	      $el.removeClass('is-open');
	      // remove active flag from other links
	      $el.find('.' + activeClass).removeClass(activeClass);
	      // mark this link as active
	      $(this).addClass(activeClass);
	      activeAnchor = $(this).data('index');
	      // prevent the scroll event from updating active links
	      linkScrolling = true;

	      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
	        linkScrolling = false;
	      });
	    });

	    $el.find(".js-scroll-anchors-toggle").on('click', function () {
	      $el.toggleClass('is-open');
	    });

	    // make the links sticky
	    $(window).resize(function () {
	      if (typeof debounceTimer === "number") {
	        window.clearTimeout(debounceTimer);
	      }
	      debounceTimer = window.setTimeout(function () {
	        setVariables();
	        setPosition();
	        activateLink();
	      }, 300);
	    });

	    $(window).scroll(function () {
	      setPosition();
	      activateLink();
	    });

	    function setVariables() {
	      var topOffset = 0;

	      headerBuffer = 0;
	      elHeight = $el.height();
	      upperLimit = $elParent.offset().top;
	      isMobile = checkMobile($el);

	      if ($elParent[0].hasAttribute("style") && !isMobile) {
	        $elParent.removeAttr('style');
	      }

	      if (isMobile) {
	        headerBuffer = $('.js-sticky-header').height() || 0;
	        upperLimit -= headerBuffer;
	        topOffset = elHeight;
	      }

	      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

	      // locate the position of all of the anchor targets
	      anchors = new Array();
	      $el.find('a').each(function (i, e) {
	        var hash = this.hash,
	            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

	        anchors[i] = { hash: hash, position: position };

	        $(this).data('index', i);
	      });

	      // record the number of anchors for performance
	      numAnchors = anchors.length;
	    }

	    function setPosition() {
	      var windowTop = $(window).scrollTop(),
	          attr = $el.attr('data-sticky'),
	          top = attr !== 'top' && windowTop <= upperLimit,
	          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
	          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

	      if ($elParent[0].hasAttribute("style") && !isMobile) {
	        $elParent.removeAttr('style');
	      }

	      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
	        $elParent.css({ 'paddingTop': elHeight });
	      }

	      if (top) {
	        $el.attr('data-sticky', 'top');

	        if (isMobile) {
	          $elParent.removeAttr('style');
	        }
	      } else if (middle) {
	        $el.attr('data-sticky', 'middle');

	        if (isMobile) {
	          $elParent.css({ 'paddingTop': elHeight });
	        }
	      } else if (bottom) {
	        $el.attr('data-sticky', 'bottom');

	        if (isMobile) {
	          $elParent.removeAttr('style');
	        }
	      }
	    }

	    function activateLink() {
	      // do we have more than one anchor
	      if (numAnchors < 2 || linkScrolling) {
	        return;
	      }

	      // get the current scroll position and offset by half the view port
	      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
	          currentAnchor = activeAnchor;

	      // is there a prev target
	      // and
	      // is the current scroll position above the current target
	      if (currentAnchor > 0 && windowTop < anchors[activeAnchor].position) {
	        // make the prev link active
	        --activeAnchor;
	      }

	      // is there a next target
	      // and
	      // is the current scroll position below the next target
	      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchor + 1].position) {
	          // make the next link active
	          ++activeAnchor;
	        }

	      if (currentAnchor !== activeAnchor) {
	        // move the active flag
	        $el.find('.' + activeClass).removeClass(activeClass);
	        $el.find('a').eq(activeAnchor).addClass(activeClass);
	      }
	    }
	  });

	  function checkMobile($el) {
	    var value = "true";
	    try {
	      value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
	    } catch (err) {}
	    return value === "false" ? false : true;
	  };
	};

	window, document, jQuery;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Section = _react2.default.createClass({
	  displayName: "Section",

	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    id: _react2.default.PropTypes.string.isRequired
	  },
	  render: function render() {
	    var id = this.props.id.toLowerCase().split(" ")[0];
	    return _react2.default.createElement(
	      "h3",
	      { className: "ma__comp-heading", id: id },
	      this.props.id
	    );
	  }
	});

	module.exports = Section;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SplitColumns = _react2.default.createClass({
	  displayName: "SplitColumns",

	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    image: _react2.default.PropTypes.string.isRequired
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "section",
	      { className: "ma__split-columns" },
	      _react2.default.createElement(
	        "div",
	        { className: "ma__split-columns__container" },
	        _react2.default.createElement(
	          "div",
	          { className: "ma__split-columns__column" },
	          this.props.children[0]
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "ma__split-columns__column" },
	          this.props.children[1]
	        )
	      )
	    );
	  }
	});

	module.exports = SplitColumns;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Figure = _react2.default.createClass({
	  displayName: 'Figure',

	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    image: _react2.default.PropTypes.string.isRequired,
	    align: _react2.default.PropTypes.string
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'figure',
	      { className: 'ma__figure ' + this.props.align },
	      _react2.default.createElement('img', { className: 'ma__image', alt: 'alt text', src: this.props.image, height: true, width: true }),
	      _react2.default.createElement(
	        'figcaption',
	        { className: 'ma__figure__caption' },
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            'b',
	            null,
	            'XXXX Year-to-Date Deaths by County and Town'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it\u2019s possible to add in the comparison to all deaths chart they have for each element in the QR.'
	        )
	      )
	    );
	  }
	});

	module.exports = Figure;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const arr = [
	//   "Suspendisse non tempus justo. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. In quis urna sollicitudin, dictum sapien sit amet, rutrum metus. Donec sed risus neque. Ut a orci ex. Morbi laoreet suscipit tortor at ullamcorper.eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit.",
	//   "Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it’s possible to add in the comparison to all deaths chart they have for each element in the QR."
	// ]
	var Paragraph = _react2.default.createClass({
	  displayName: "Paragraph",

	  propTypes: { //propTypes and React.PropTypes have diff capitalizations
	    paragraphs: _react2.default.PropTypes.array.isRequired
	  },
	  render: function render() {
	    var obj = this.props.paragraphs[this.props.index];
	    var paragraphList = obj.paragraphs.map(function (para, i) {
	      return _react2.default.createElement(
	        "p",
	        { key: "para_" + i },
	        para
	      );
	    });
	    //console.log(paragraphList);
	    return _react2.default.createElement(
	      "section",
	      { className: "ma__rich-text js-ma-rich-text" },
	      paragraphList
	    );
	  }
	});

	module.exports = Paragraph;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var GraphTitle = _react2.default.createClass({
	  displayName: "GraphTitle",

	  render: function render() {
	    var styles = {
	      graphTitle: _defineProperty({
	        fontSize: "1.2em",
	        textAlign: "center",
	        margin: "0 auto"
	      }, "margin", 10)
	    };
	    return _react2.default.createElement(
	      "h4",
	      { style: styles.graphTitle },
	      this.props.children
	    );
	  }
	});

	module.exports = GraphTitle;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("recharts");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SocialMedia = __webpack_require__(22);

	var _SocialMedia2 = _interopRequireDefault(_SocialMedia);

	var _Logo = __webpack_require__(23);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _FooterLinks = __webpack_require__(24);

	var _FooterLinks2 = _interopRequireDefault(_FooterLinks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = _react2.default.createClass({
	  displayName: 'Footer',

	  render: function render() {
	    return _react2.default.createElement(
	      'footer',
	      { className: 'ma__footer js-footer', id: 'footer' },
	      _react2.default.createElement(
	        'div',
	        { className: 'ma__footer__container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ma__footer__nav' },
	          _react2.default.createElement(
	            _FooterLinks2.default,
	            null,
	            this.props.children
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'ma__footer__info' },
	          _react2.default.createElement(_Logo2.default, { 'class': "ma__footer__logo", width: 120, height: 120 }),
	          _react2.default.createElement(_SocialMedia2.default, null),
	          _react2.default.createElement(
	            'div',
	            { className: 'ma__footer__copyright' },
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '\xA9 2016 Commonwealth of Massachusetts.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Mass.Gov\xAE is a registered service mark of the Commonwealth of Massachusetts.'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'button',
	        { className: 'ma__footer__back2top js-back2top is-hidden' },
	        _react2.default.createElement(
	          'svg',
	          { 'aria-hidden': 'true', id: 'SvgjsSvg1000', xlinkHref: 'http://www.w3.org/2000/svg', version: '1.1', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: 16, height: 18, viewBox: '0 0 16 18' },
	          _react2.default.createElement('defs', { id: 'SvgjsDefs1001' }),
	          _react2.default.createElement('path', { id: 'SvgjsPath1007', d: 'M983.721 1887.28L983.721 1887.28L986.423 1890L986.423 1890L986.423 1890L983.721 1892.72L983.721 1892.72L978.318 1898.17L975.617 1895.45L979.115 1891.92L971.443 1891.92L971.443 1888.0700000000002L979.103 1888.0700000000002L975.617 1884.5500000000002L978.318 1881.8300000000002Z ', transform: 'matrix(1,0,0,1,-971,-1881)' })
	        ),
	        ' ',
	        _react2.default.createElement(
	          'span',
	          null,
	          'Top'
	        )
	      )
	    );
	  }

	});

	module.exports = Footer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SocialMedia = _react2.default.createClass({
	  displayName: "SocialMedia",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "ma__footer__social" },
	      _react2.default.createElement(
	        "section",
	        { className: "ma__social-links" },
	        _react2.default.createElement(
	          "ul",
	          { className: "ma__social-links__items" },
	          _react2.default.createElement(
	            "li",
	            { className: "ma__social-links__item" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "ma__social-links__link" },
	              _react2.default.createElement(
	                "svg",
	                { role: "img", id: "SvgjsSvg1000", xlinkHref: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 11, height: 20, viewBox: "0 0 11 20" },
	                _react2.default.createElement(
	                  "title",
	                  null,
	                  "mass gov facebook"
	                ),
	                _react2.default.createElement("defs", { id: "SvgjsDefs1001" }),
	                _react2.default.createElement("path", { id: "SvgjsPath1007", d: "M87.162 56.75H84.73880000000001C83.9625 56.75 83.3816 57.065 83.3816 57.8612V59.25H87.162L86.86080000000001 63H83.3816V73H79.60130000000001V63H77.081V59.25H79.60130000000001V56.8463C79.60130000000001 54.318799999999996 80.94210000000001 53 83.9625 53H87.162Z ", fillOpacity: 1, transform: "matrix(1,0,0,1,-77,-53)" })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            { className: "ma__social-links__item" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "ma__social-links__link" },
	              _react2.default.createElement(
	                "svg",
	                { role: "img", id: "SvgjsSvg1008", xlinkHref: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 21, height: 17, viewBox: "0 0 21 17" },
	                _react2.default.createElement(
	                  "title",
	                  null,
	                  "mass gov twitter"
	                ),
	                _react2.default.createElement("defs", { id: "SvgjsDefs1009" }),
	                _react2.default.createElement("path", { id: "SvgjsPath1010", d: "M143.558 59.5463C143.82 65.3175 139.482 71.7525 131.801 71.7525C129.46499999999997 71.7525 127.29099999999998 71.0737 125.46 69.9088C127.65499999999999 70.165 129.845 69.5612 131.584 68.21C129.774 68.1763 128.246 66.99 127.721 65.36C128.37 65.4825 129.007 65.4463 129.588 65.29C127.59899999999999 64.89380000000001 126.226 63.116200000000006 126.27 61.215C126.827 61.5225 127.466 61.7075 128.143 61.7287C126.302 60.5075 125.78 58.095000000000006 126.863 56.25C128.903 58.7325 131.951 60.3663 135.389 60.5375C134.785 57.9713 136.74800000000002 55.5 139.419 55.5C140.608 55.5 141.68300000000002 55.9975 142.43800000000002 56.7962C143.38000000000002 56.6125 144.26600000000002 56.2712 145.06500000000003 55.8012C144.75700000000003 56.76 144.10000000000002 57.5638 143.247 58.0713C144.084 57.9713 144.881 57.751200000000004 145.622 57.425000000000004C145.068 58.245000000000005 144.366 58.9675 143.55800000000002 59.5463Z ", fillOpacity: 1, transform: "matrix(1,0,0,1,-125,-55)" })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            { className: "ma__social-links__item" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "ma__social-links__link" },
	              _react2.default.createElement(
	                "svg",
	                { role: "img", id: "SvgjsSvg1011", xlinkHref: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 20, height: 20, viewBox: "0 0 20 20" },
	                _react2.default.createElement(
	                  "title",
	                  null,
	                  "mass gov linkedin"
	                ),
	                _react2.default.createElement("defs", { id: "SvgjsDefs1012" }),
	                _react2.default.createElement("path", { id: "SvgjsPath1013", d: "M182.645 71.75H178.864V58H182.645ZM180.754 56.415C179.53699999999998 56.415 178.54899999999998 55.4275 178.54899999999998 54.21C178.54899999999998 52.9925 179.53699999999998 52.005 180.754 52.005C181.97199999999998 52.005 182.95999999999998 52.9925 182.95999999999998 54.21C182.95999999999998 55.4275 181.97299999999998 56.415 180.754 56.415ZM197.766 63.3012C197.766 56.735 190.706 56.973800000000004 188.945 60.2063V58H185.165V71.75H188.945V64.745C188.945 60.8537 193.986 60.535000000000004 193.986 64.745V71.75H197.766Z ", fillOpacity: 1, transform: "matrix(1,0,0,1,-178,-52)" })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            { className: "ma__social-links__item" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "ma__social-links__link" },
	              _react2.default.createElement(
	                "svg",
	                { role: "img", id: "SvgjsSvg1014", xlinkHref: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 21, height: 16, viewBox: "0 0 21 16" },
	                _react2.default.createElement(
	                  "title",
	                  null,
	                  "mass gov youtube"
	                ),
	                _react2.default.createElement("defs", { id: "SvgjsDefs1015" }),
	                _react2.default.createElement("path", { id: "SvgjsPath1016", d: "M238.795 59.6663L245.515 62.9938L238.795 66.3338ZM251.396 63C251.37099999999998 57.8463 250.98899999999998 55.875 247.713 55.6537C244.685 55.4488 237.942 55.45 234.91899999999998 55.6537C231.64499999999998 55.875 231.259 57.8375 231.23399999999998 63C231.259 68.1538 231.641 70.125 234.91699999999997 70.3462C237.93999999999997 70.55 244.68299999999996 70.5513 247.71099999999998 70.3462C250.98499999999999 70.125 251.37099999999998 68.1625 251.396 63Z ", fillOpacity: 1, transform: "matrix(1,0,0,1,-231,-55)" })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            { className: "ma__social-links__item" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "ma__social-links__link" },
	              _react2.default.createElement(
	                "svg",
	                { role: "img", id: "SvgjsSvg1017", xlinkHref: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 21, height: 20, viewBox: "0 0 21 20" },
	                _react2.default.createElement(
	                  "title",
	                  null,
	                  "mass gov blog"
	                ),
	                _react2.default.createElement("defs", { id: "SvgjsDefs1018" }),
	                _react2.default.createElement("path", { id: "SvgjsPath1019", d: "M289.47 70.2937C289.47 68.7988 288.24800000000005 67.5875 286.74 67.5875C285.231 67.5875 284.008 68.7988 284.008 70.2937C284.008 71.7887 285.231 73 286.74 73C288.248 73 289.47 71.7887 289.47 70.2937ZM297.315 73C297.262 65.7413 291.334 59.8688 284.008 59.8175V63.8262C289.091 63.8775 293.216 67.9638 293.267 73ZM300.123 73C300.097 64.1713 292.895 57.0488 284.008 57.01V53C295.135 53.0388 304.145 61.9737 304.16999999999996 73Z ", fillOpacity: 1, transform: "matrix(1,0,0,1,-284,-53)" })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            { className: "ma__social-links__item" },
	            _react2.default.createElement(
	              "a",
	              { href: "#", className: "ma__social-links__link" },
	              _react2.default.createElement(
	                "svg",
	                { role: "img", id: "SvgjsSvg1020", xlinkHref: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 21, height: 20, viewBox: "0 0 21 20" },
	                _react2.default.createElement(
	                  "title",
	                  null,
	                  "mass gov instagram"
	                ),
	                _react2.default.createElement("defs", { id: "SvgjsDefs1021" }),
	                _react2.default.createElement("path", { id: "SvgjsPath1022", d: "M346.878 59.6663C345.022 59.6663 343.518 61.158699999999996 343.518 63C343.518 64.8425 345.022 66.3338 346.878 66.3338C348.735 66.3338 350.239 64.8412 350.239 63C350.239 61.1587 348.73499999999996 59.6663 346.878 59.6663ZM350.952 54.86C349.89 54.8125 349.57 54.8025 346.878 54.8025C344.187 54.8025 343.868 54.8125 342.804 54.861200000000004C340.07 54.9838 338.79699999999997 56.27 338.673 58.96C338.625 60.0137 338.613 60.33 338.613 63C338.613 65.67 338.625 65.9863 338.674 67.0425C338.79699999999997 69.72630000000001 340.066 71.0175 342.806 71.1413C343.86699999999996 71.1887 344.18699999999995 71.1987 346.878 71.1987C349.57099999999997 71.1987 349.89 71.1875 350.954 71.14C353.688 71.0175 354.96000000000004 69.7287 355.086 67.0413C355.134 65.9863 355.144 65.67 355.144 63.00000000000001C355.144 60.330000000000005 355.134 60.01370000000001 355.086 58.96000000000001C354.96000000000004 56.27000000000001 353.684 54.98380000000001 350.952 54.86000000000001ZM346.878 68.135C344.02 68.135 341.702 65.8362 341.702 63.00000000000001C341.702 60.16380000000001 344.019 57.86500000000001 346.878 57.86500000000001C349.736 57.86500000000001 352.055 60.16380000000001 352.055 63.00000000000001C352.055 65.8362 349.738 68.135 346.878 68.135ZM352.259 58.8625C351.591 58.8625 351.04900000000004 58.324999999999996 351.04900000000004 57.662499999999994C351.04900000000004 56.99999999999999 351.591 56.46249999999999 352.259 56.46249999999999C352.927 56.46249999999999 353.469 56.99999999999999 353.469 57.662499999999994C353.469 58.324999999999996 352.928 58.8625 352.259 58.8625ZM356.899 67.1225C356.734 70.7587 354.692 72.77380000000001 351.036 72.94C349.959 72.9888 349.617 73 346.878 73C344.14 73 343.799 72.9888 342.723 72.94C339.058 72.7738 337.027 70.755 336.858 67.1225C336.809 66.05630000000001 336.797 65.7162 336.797 63C336.797 60.285 336.809 59.9438 336.858 58.8762C337.027 55.241299999999995 339.061 53.226299999999995 342.723 53.059999999999995C343.79900000000004 53.0113 344.14 52.99999999999999 346.878 52.99999999999999C349.61699999999996 52.99999999999999 349.959 53.01129999999999 351.036 53.061299999999996C354.7 53.2275 356.734 55.24999999999999 356.899 58.8775C356.948 59.943799999999996 356.959 60.285 356.959 63C356.959 65.7162 356.948 66.0563 356.899 67.1225Z ", fillOpacity: 1, transform: "matrix(1,0,0,1,-336,-53)" })
	              )
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = SocialMedia;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logo = _react2.default.createClass({
	  displayName: "Logo",

	  propTypes: {
	    class: _react2.default.PropTypes.string.isRequired,
	    width: _react2.default.PropTypes.number.isRequired,
	    height: _react2.default.PropTypes.number.isRequired
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: this.props.class },
	      _react2.default.createElement(
	        "a",
	        { href: "http://pilot.mass.gov", title: "Mass Gov home page" },
	        _react2.default.createElement("img", { src: "assets/images/stateseal.png", alt: "Massachusetts State Seal", width: this.props.width, height: this.props.height })
	      )
	    );
	  }

	});

	module.exports = Logo;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LinkGroup = __webpack_require__(25);

	var _LinkGroup2 = _interopRequireDefault(_LinkGroup);

	var _Link = __webpack_require__(26);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FooterLinks = _react2.default.createClass({
	  displayName: 'FooterLinks',

	  render: function render() {
	    return _react2.default.createElement(
	      'section',
	      { className: 'ma__footer-links' },
	      _react2.default.createElement(
	        _LinkGroup2.default,
	        null,
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' })
	      ),
	      _react2.default.createElement(
	        _LinkGroup2.default,
	        null,
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' })
	      ),
	      _react2.default.createElement(
	        _LinkGroup2.default,
	        null,
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' }),
	        _react2.default.createElement(_Link2.default, { text: 'resource', url: '#' })
	      )
	    );
	  }

	});

	module.exports = FooterLinks;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LinkGroup = _react2.default.createClass({
	  displayName: "LinkGroup",

	  render: function render() {
	    return _react2.default.createElement(
	      "nav",
	      { role: "navigation" },
	      _react2.default.createElement(
	        "h2",
	        { className: "visually-hidden" },
	        "FooterLinks1"
	      ),
	      _react2.default.createElement(
	        "ul",
	        { className: "ma__footer-links__items" },
	        this.props.children
	      )
	    );
	  }

	});

	module.exports = LinkGroup;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Link = _react2.default.createClass({
	  displayName: "Link",

	  render: function render() {
	    return _react2.default.createElement(
	      "li",
	      { className: "ma__footer-links__item" },
	      _react2.default.createElement(
	        "a",
	        { href: this.props.url, className: "ma__footer-links__link" },
	        this.props.text
	      )
	    );
	  }

	});

	module.exports = Link;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(28);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Logo = __webpack_require__(23);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _Dropdown = __webpack_require__(10);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NotFound',

	  getInitialState: function getInitialState() {
	    return {
	      placeholder: "Select a quarter"
	    };
	  },
	  contextTypes: {
	    router: _react2.default.PropTypes.object
	  },
	  handleChange: function handleChange(event) {
	    var _this = event.target;
	    var serial = _this.value;
	    var text = _this[_this.selectedIndex].text;
	    this.setState({ placeholder: text });
	    this.context.router.push(serial);
	  },
	  render: function render() {
	    var placeholder = this.state.placeholder;

	    return _react2.default.createElement(
	      'main',
	      { id: 'main-content', className: 'ma__narrow-template ma__narrow-template--right ma__narrow-template--yellow', tabIndex: -1 },
	      _react2.default.createElement(
	        'header',
	        { className: 'ma__narrow-template__header' },
	        _react2.default.createElement(_Logo2.default, { 'class': "ma__site-logo", width: 70, height: 70 })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'ma__narrow-template__container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ma__narrow-template__content' },
	          _react2.default.createElement(
	            'section',
	            { className: 'ma__error-page' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ma__error-page__type' },
	              '404'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'ma__error-page__label' },
	              'Oops'
	            ),
	            _react2.default.createElement('h1', { className: 'ma__error-page__title' }),
	            _react2.default.createElement(
	              'h2',
	              { className: 'ma__error-page__message' },
	              'The report that you are looking for doesn\'t exist.'
	            ),
	            _react2.default.createElement(_Dropdown2.default, { onChange: this.handleChange, placeholder: placeholder })
	          ),
	          _react2.default.createElement(
	            'section',
	            { className: 'ma__helpful-links ' },
	            _react2.default.createElement(
	              'h3',
	              { className: 'ma__comp-heading ma__comp-heading--yellow ' },
	              'Helpful Links'
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'ma__helpful-links__items' },
	              _react2.default.createElement(
	                'li',
	                { className: 'ma__helpful-links__item' },
	                _react2.default.createElement(
	                  _NavLink2.default,
	                  { className: 'ma__content-link ma__content-link--chevron', to: '/2017/3' },
	                  'Newest Report'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'ma__helpful-links__item' },
	                _react2.default.createElement(
	                  _NavLink2.default,
	                  { className: 'ma__content-link ma__content-link--chevron', to: '/2017/2' },
	                  'Previous Quarter'
	                )
	              )
	            )
	          ),
	          '  '
	        )
	      )
	    );
	  }
	});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // modules/NavLink.js


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ })
/******/ ]);