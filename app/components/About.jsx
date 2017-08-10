var React = require('react');

var About = (props) => {
    return (
            <div>
                <h1 className="text-centered">About</h1>
                <p>This is a weather application build on React. This has been build as a part of the Complete React Wev App Developer Course.</p>
                <p>Some tools that I have used</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - Used JavaScrip framework.
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map</a> - This is used for searthing the weather by city name.
                    </li>
                </ul>
            </div>
        );
}

module.exports = About;