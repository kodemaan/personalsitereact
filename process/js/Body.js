var React = require('react');

var Body = React.createClass({
	
   render: function() {
   	 return (
        <div id="body">{ this.props.bodyText }</div>
   	 )
   }
});

module.exports = Body;