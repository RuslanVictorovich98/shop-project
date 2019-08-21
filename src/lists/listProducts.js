import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListOneProduct from './listOneProduct';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

class ListProducts extends React.Component {

    returnProduct = () => {
        const {mainList} = this.props;
        if (mainList.loading === true) {
            return <div className="content-loading">loading...</div>
        } else  {
            let product = mainList.products;

            if (mainList.firstRender === true) {
                if (history.location.pathname.slice(1) === 'all-category' || history.location.pathname.slice(1) === 'All category') {
                    product = mainList.products
                } else {
                    product = product.filter(num => num.bsr_category.toLowerCase() === history.location.pathname.slice(1).toLowerCase().replace(/-/g," "))
                }
                
                if (mainList.historySearch !== '') {
                    product = product.filter(item => {
                        return !item.name.toLowerCase().indexOf(mainList.historySearch.slice(1).toLowerCase());
                    });
                }
            } else {
    
                if (mainList.category === 'all category' || mainList.category === 'All category') {
                    product = mainList.products
                } else {
                    product = product.filter(num => num.bsr_category.toLowerCase() === mainList.category.toLowerCase())
                }

                if (mainList.search !== '') {
                    product = product.filter(item => {
                        return !item.name.toLowerCase().indexOf(mainList.search.toLowerCase());
                    });
                }
            }

            return product.map((product, i) => {
                return(<ListOneProduct key={i} product={product} />)
            })
        }
    }

    render() {
        return(
            <div className="App-content">
                {this.returnProduct()}
            </div>
        )
    }
}

ListProducts.propTypes = {
    mainList: PropTypes.object,
}

const mapStateToProps = (state) => {
    return {
        mainList: state.mainList,
    }
}

export default connect (mapStateToProps) (ListProducts);
