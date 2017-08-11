var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0 ) {
            this.refs.location.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" ref="location"/>
                            </li>
                            <li>
                                <button type="submit" className="button">Get Weather</button>
                            </li>

                        </ul>
                    </form>
                </div>
        </div>
      );
    }
});

module.exports = Nav;

var old = (
<div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>

        );