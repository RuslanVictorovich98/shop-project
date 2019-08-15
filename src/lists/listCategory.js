import React from 'react';
import {connect} from 'react-redux';
import { Router, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {create, category, gettingProducts} from './listActionsCreator';
import slugify from 'react-slugify';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class ListCategory extends React.Component {

    componentDidMount() {
        setTimeout(() => {
        if (history.location.pathname !== '' && history.location.pathname !=='/') {
            let pathname = history.location.pathname.slice(1);

            switch(pathname) {
                case "home-&-kitchen":
                    return this.props.editFirtsPathname('Home & Kitchen')
                
                case "sports-&-outdoors":
                    return this.props.editFirtsPathname('Sports & Outdoors')

                case "health-&-personal-care":
                    return this.props.editFirtsPathname('Health & Personal Care')

                case "baby-products":
                    return this.props.editFirtsPathname('Baby Products');

                    
                default:
                    return this.props.editFirtsPathname('No category');
            }
        }

        }, 500)
    }

    componentWillUpdate() {
        let findData = this.props.findData;
        history.push({search: '?' + findData});
    }


    renderCategory = () => {
        let data =  this.props.main.map((elem) => {
            return elem.bsr_category;
        })
        let categoryData = data.filter((item, pos) => {
            return data.indexOf(item) === pos;
        })
        
        const renderCategoryReturnOnClick = (e) => {
            this.props.category(e.currentTarget.innerText);
            this.props.editFirtsPathname('No category');
        }

        return categoryData.map((elem, i) => {
            return(
                <h4 className="category-list" key={i}  onClick={renderCategoryReturnOnClick}>
                    <Link to={slugify(elem)}>{elem}</Link>
                </h4>);
        })
    }
  
    

    render() {
        const returnOnClickAllCategory = () => {
            this.props.gettingProducts(this.props.main)
            this.props.editFirtsPathname('No category');
        }

        return(
            <Router history={history}> 
                <h4  className="category-list">
                    <Link to={'/' + slugify('All category')} onClick={returnOnClickAllCategory}>All category</Link>
                </h4> 
                {this.renderCategory()} 
            </Router>)
    }
}

ListCategory.propTypes = {
    main: PropTypes.array,
    list: PropTypes.array,
    findData: PropTypes.string,
    create: PropTypes.func,
    category: PropTypes.func,
    gettingProducts: PropTypes.func
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