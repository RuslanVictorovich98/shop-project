import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Router, Route, Link } from "react-router-dom";

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class Navigator extends React.Component {
    
    
    functRender () {
        const { categoryClickHandler, findResult, data} = this.props;

        return this.props.elem.map((elem, i) => {

            if (data || history.location.search.slice(1) == 0) {
                history.push({search: '?=' + findResult})
            }
            return (
                <li onClick={categoryClickHandler} key={i} id="category-list"><Link to={elem}>{elem}</Link></li>
                )
            })
    }

    getHistory () {
        console.log({history});
    }

    render() {
        const { categoryClickHandler} = this.props;
        return(
          <Router history={history}>
                <ul >
                    <li onClick={categoryClickHandler}><a>All category</a></li>
                    {this.functRender()}
                </ul>
                {/* <button onClick={this.getHistory}>Get history</button> */}
                <hr/>
          </Router>
        )
    }
}

export default Navigator;
