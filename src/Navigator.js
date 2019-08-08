import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Navigator extends React.Component {

    functRender () {
        const { categoryClickHandler } = this.props;
        
        return this.props.name.map((elem, i) => {
                return (
                    <ul>
                        <li onClick={categoryClickHandler} key={i} id="category-list"><Link>{elem}</Link></li>
                    </ul>
                )
            })
    }

    render() {
        return(
            <Router history={history}>
                {this.functRender()}
          </Router>
        )
    }
}

export default Navigator;
