var React = require('react');
var ReactDom = require('react-dom');

var Navigation = require('./Navigation.js');
var Body = require('./Body.js');

var MainInterface = React.createClass({
	getInitialState: function() {
    return {
       myPages: [],
       currentPage: 'home'
	  } //return
	}, //getInitialState
	componentDidMount: function() {
		this.serverRequest = $.get('./js/pages.json', function(result) {
		  var tempApts = result;
		  this.setState({
		    myPages: tempApts
		  }); //setState
		}.bind(this));
	}, 
	componentWillUnmount: function() {
	  this.serverRequest.abort();
	},
	changePage: function(pageName) {
      this.setState({
      	currentPage: pageName
      });
	},
    render: function() {
      var bodyText = this.state.myPages[this.state.currentPage];
      return (
      	<div id="website">
	      	<Navigation 
             pageChange = { this.changePage }
             currentPage = { this.state.currentPage }
	      	/>
	      	<Body 
             bodyText = { bodyText }
	      	/>
      	</div>
      )
   }
});

ReactDom.render(
  <MainInterface />,
  document.getElementById('mainBody')
);
