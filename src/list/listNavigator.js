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

        if (true) {
            history.push({search: '?=' + this.props.findResult});
        }

        return categoryData.map((elem, i) => {
            return(
                <h4 className="category-list" key={i} onClick={(e) => {
                    this.props.category(e.currentTarget.innerText);
                    this.props.activeFilterFunct();
                }}>
                    <Link to={elem}>{elem}</Link>
                </h4>);
        })
    }
  
    getHistory () {
        console.log({history});
    }
    render() {
        return(
          <Router history={history}>
                {/* <li onClick={(e) => {this.props.allCategory(e.currentTarget.innerText)}}><Link to={'All category'}>All category</Link></li> */}
                <h4  className="category-list" onClick={ () => this.props.gettingProducts(this.props.main)}><Link to={'All category'}>All category</Link></h4>
                {this.retCategory()}
          </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        main: state.main,
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

