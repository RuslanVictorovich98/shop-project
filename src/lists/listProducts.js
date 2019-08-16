import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListOneProduct from './listOneProduct';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

class ListProducts extends React.Component {
    returnProducts = () => {
        const {firstPathname} = this.props;

        if (firstPathname === 'Home & Kitchen' || firstPathname === 'Sports & Outdoors' || firstPathname === 'Health & Personal Care' || firstPathname === 'Baby Products') {
            if (this.props.find === false) {
                return this.props.firstProductsPuthname.map((product, i) => {
                    return(<ListOneProduct key={i} product={product} />)
                })
            } else {
                return this.props.firstProductsPuthnameFind.map((product, i) => {
                    return <ListOneProduct key={i} product={product} />
                })
            }
        } else if (firstPathname === 'All category' ) {

            if (this.props.find === false) { 
                return this.props.list.map((product, i) => {
                    return (<ListOneProduct key={i} product={product} />)
                })
            } else {
                return this.props.listFilter.map((product, i) => {
                    return <ListOneProduct key={i} product={product} />
                })
            }
        } else return <div className="content-loading">loading...</div>
    }   

    componentDidMount () {
        this.setState({firstHistory: history.location.search.slice(1)}); // save search data in find
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
        firstProductsPuthname: state.firstProductsPuthname,
        firstProductsPuthnameFind: state.firstProductsPuthnameFind,
    }
}

export default connect (mapStateToProps) (ListProducts);

/*
returnFirstLoadProductsFind = () => {

        if (this.props.firstPathname === false) {
            return <div className="content-loading">loading...</div>
        } else if (this.props.firstPathname === 'No category') { 

            let filterMin = this.props.list.filter(num => {
                return num.name.toLowerCase().indexOf(this.state.firstHistory) >= 0 ? num : null;
            })
            return filterMin.map((product, i) => {
                return <ListOneProduct key={i} product={product} />
            })
        } else {
            let filterMin = this.props.firstProductsPuthname.filter(num => {
                return num.name.toLowerCase().indexOf(this.state.firstHistory) >= 0 ? num : null;
            })
            return filterMin.map((product, i) => {
                return <ListOneProduct key={i} product={product} />
            })
        }
    }
*/