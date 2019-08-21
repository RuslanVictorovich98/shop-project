import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListOneProduct from './listOneProduct';

class ListProducts extends React.Component {

    state = {
        loading: true
    }

    returnProduct = () => {
        const {mainList} = this.props;
        setTimeout(() => {this.setState({loading: false})}, 500)
        if (this.state.loading === true) {
            return <div className="content-loading">loading...</div>
        } else  {

            let product = mainList.products;
            
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
