import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import {createBrowserHistory} from 'history';
import {connect} from 'react-redux';
import {category, create, gettingProducts} from './listActionsCreator';


const history = createBrowserHistory();

class Navigator extends React.Component {

    retCategory = () => {
        let data =  this.props.main.map((elem) => {
            return elem.bsr_category;
        })
        let categoryData = data.filter((item, pos) => {
            return data.indexOf(item) === pos;
            })
        // console.log(history.location.search.slice(2));
        

        if (true) {
            history.push({search: '?=' + this.props.findResult});
        }

        return categoryData.map((elem, i) => {
            return(
                <li key={i} onClick={(e) => {
                    this.props.category(e.currentTarget.innerText);
                    this.props.activeFilterFunct();
                }}>
                    <Link to={elem}>{elem}</Link>
                </li>);
        })
    }
  
    getHistory () {
        console.log({history});
    }
    render() {
        return(
          <Router history={history}>
                <ul >
                    {/* <li onClick={(e) => {this.props.allCategory(e.currentTarget.innerText)}}><Link to={'All category'}>All category</Link></li> */}
                    <li onClick={ () => this.props.gettingProducts(this.props.main)}><Link to={'All category'}>All category</Link></li>
                    {this.retCategory()}
                    <button onClick={this.getHistory}>getHistory</button>
                </ul>
                <hr/>
          </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        main: state.main,
        // filter: state.filter

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        category: (i) => dispatch(category(i)),
        create: (i) => dispatch(create(i)),
        gettingProducts: (i) => dispatch(gettingProducts(i)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Navigator);

