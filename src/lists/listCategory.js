import React from 'react';
import {connect} from 'react-redux';
import { Router, Link } from "react-router-dom";
import {create, category, gettingProducts} from './listActionsCreator';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();


class ListCategory extends React.Component {

    renderCategory = () => {

        
        let data =  this.props.main.map((elem) => {
            return elem.bsr_category;
        })
        let categoryData = data.filter((item, pos) => {
            return data.indexOf(item) === pos;
        })
        
        return categoryData.map((elem, i) => {
            return(
                <h4 className="category-list" key={i}  onClick={(e) => {
                    this.props.category(e.currentTarget.innerText);
                }}>
                    <Link to={'/' + elem}>{elem}</Link>
                </h4>);
        })
    }


    getHistory () {
        let findData = this.props.findData;
        if (findData !== '') {
            history.push({search: '?=' + findData});
        } else {
            history.push({search: '?=' + findData});
        }

    }

    render() {
        return(
            <Router history={history}> 
                <h4  className="category-list"><Link to={'/All category'} onClick={ () => this.props.gettingProducts(this.props.main)}>All category</Link></h4> 
                {this.renderCategory()} 
                {/* {this.getHistory()} */}
            </Router>)
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
        create: (i) => dispatch(create(i)),
        category: (i) => dispatch(category(i)),
        gettingProducts: (i) => dispatch(gettingProducts(i)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ListCategory);