import React from 'react';
import PropTypes from 'prop-types';

class ListOneProduct extends React.Component {

    returnProduct = () => {
        const product = this.props.product;
        return (
            <div className="content">
                <div className='content-img'> <img src={product.img} alt={'not-img'}/></div>
                <div className='content-body'>
                    <span ><strong>Имя: </strong>{product.name} </span> <br/>
                    <span ><strong>Бренд: </strong>{product.brand} </span> <br/>
                    <span ><strong>Категория: </strong>{product.bsr_category} </span> <br/>
                    <span ><strong>Цена: </strong>{product.price} </span> <br/>
                    <span ><strong>Звезд: </strong>{product.stars} </span> <br/>
                </div>
            
            </div>
        );
    }

    render() {return(this.returnProduct())}
}

ListOneProduct.propTypes = {
    product: PropTypes.object
}

export default ListOneProduct;
