var React = require('react');

var Navigation = React.createClass({
	onPageChange: function(e) {
		var pageName = e.target.id;
		pageName = pageName.replace("Link","");
        e.preventDefault();
        this.props.pageChange(pageName);
	},
    render: function() {
   	    return (
	   	 	<ul className="nav nav-tabs">
			  <li role="presentation" className={(this.props.currentPage === 'home') ? className="active":null}><a href="#" id="homeLink" onClick={ this.onPageChange }>Home</a></li>
			  <li role="presentation" className={(this.props.currentPage === 'resume') ? className="active":null}><a href="#" id="resumeLink" onClick={ this.onPageChange }>Resume</a></li>
			  <li role="presentation" className={(this.props.currentPage === 'contact') ? className="active":null}><a href="#" id="contactLink" onClick={ this.onPageChange }>Contact</a></li>
			</ul>
		)
    }
});

module.exports = Navigation;