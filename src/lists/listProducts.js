import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListOneProduct from './listOneProduct';

class ListProducts extends React.Component {

    returnProducts = () => {
        if (this.props.find === false) {
            return this.props.list.map((product, i) => {
                // return (<div>{product.name}</div>)
                return (<ListOneProduct key={i} product={product} />)
            })
        } else {
            
            return this.props.listFilter.map((product, i) => {
                // return (<div>{product.name}</div>)
                return (<ListOneProduct key={i} product={product} />)
            })
        }
    }

    render() {
        return(
            <div className="App-content">
              {this.returnProducts()}  
            </div>

        )
    }
}

ListProducts.propTypes = {
    list: PropTypes.array,
    listFilter: PropTypes.array,
    find: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        listFilter: state.listFilter,
    }
}

export default connect (mapStateToProps) (ListProducts);