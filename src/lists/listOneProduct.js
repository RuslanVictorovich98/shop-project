import React from 'react';
import PropTypes from 'prop-types';

class ListOneProduct extends React.Component {

    returnProduct = () => {
        const product = this.props.product;
        return (
            <div className="content">
            <img src={product.img}/><br/>
            <span ><strong>Имя: </strong>{product.name} </span> <br/>
            <span ><strong>Бренд: </strong>{product.brand} </span> <br/>
            <span ><strong>Категория: </strong>{product.bsr_category} </span> <br/>
            <span ><strong>Цена: </strong>{product.price} </span> <br/>
            <span ><strong>Звезд: </strong>{product.stars} </span> <br/>
            </div>
        );
    }

    // sreturnProduct = () => {
    //     const product = this.props.product;
    //     return this.props.main.map((product) => {
    //     return (
    //         <div className="content">
    //         <img src={product.img}/><br/>
    //         <span ><strong>Имя: </strong>{product.name} </span> <br/>
    //         <span ><strong>Бренд: </strong>{product.brand} </span> <br/>
    //         <span ><strong>Категория: </strong>{product.bsr_category} </span> <br/>
    //         <span ><strong>Цена: </strong>{product.price} </span> <br/>
    //         <span ><strong>Звезд: </strong>{product.stars} </span> <br/>
    //         </div>
    //     )
    //     });
    // }



    render() {
        return(
            <div>
                {this.returnProduct()}
            </div>

        )
    }
}

ListOneProduct.propTypes = {
    product: PropTypes.object
}

export default ListOneProduct;