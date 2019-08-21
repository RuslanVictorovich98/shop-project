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
            return <div>loading...</div>
        } else {
            let data =  this.props.mainList.products.map(elem => elem.bsr_category)
            let categoryData = data.filter((item, pos) => data.indexOf(item) === pos)

            const renderCategoryReturnOnClick = (e) => {
                this.props.category(e.currentTarget.innerText);
                history.push({search: '?' + this.props.mainList.search});
            }

            return categoryData.map((elem, i) => (
                <h4 className="category-list" key={i}  onClick={renderCategoryReturnOnClick}>
                    <Link to={slugify(elem)}>{elem}</Link>
                </h4>)
            )
        }
    }

    clickByLink = (e) => {
        this.props.category(e.currentTarget.innerText)
        setTimeout(()=> {
            history.push({search: '?' + this.props.mainList.search});
        }, 10)
    }

    render() {
        return (
            <Router history={history}> 
                <h4  className="category-list">
                    <Link to={'/' + slugify('All category')} onClick={this.clickByLink}>All category</Link>
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