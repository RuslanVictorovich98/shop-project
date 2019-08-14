import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        list: state.list,
        main: state.main,
        listFilter: state.listFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ListProducts);