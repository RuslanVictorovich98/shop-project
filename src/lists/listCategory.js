import React from 'react';
import {connect} from 'react-redux';
import { Router, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {category} from '../ducks/lists';
import slugify from 'react-slugify';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class ListCategory extends React.Component {

    renderCategory = () => {
        if (this.props.mainList.products === []) {
            return <div>OKEYY</div>
        } else {

            let data =  this.props.mainList.products.map((elem) => {
                return elem.bsr_category;
            })
            let categoryData = data.filter((item, pos) => {
                return data.indexOf(item) === pos;
            })
            
            const renderCategoryReturnOnClick = (e) => {
                this.props.category(e.currentTarget.innerText);
            }
            
            return categoryData.map((elem, i) => {
                return(
                    <h4 className="category-list" key={i}  onClick={renderCategoryReturnOnClick}>
                        <Link to={slugify(elem)}>{elem}</Link>
                    </h4>);
            })
        }
    }

    render() {
        return(
            <Router history={history}> 
                <h4  className="category-list">
                    <Link to={'/' + slugify('All category')} onClick={(e) => this.props.category(e.currentTarget.innerText)}>All category</Link>
                </h4> 
                {this.renderCategory()} 
            </Router>
        )
    }
        
}

ListCategory.propTypes = {
    mainList: PropTypes.object,
    category: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        mainList: state.mainList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        category: (i) => dispatch(category(i)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ListCategory);