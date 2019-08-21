import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchUsersRequest} from './ducks/lists';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './common/Header';

import ListCategory from './lists/listCategory';
import ListProducts from './lists/listProducts';

class App extends React.Component {

    
    componentDidMount() {
        this.props.fetchUsersRequest();
    }

    render() {
        return(
            <div>
                <Header findByName={this.find} isInputValueSet={this.isInputValueSet} />
                <Container>
                    <Row>
                        <Col className='left-panel-category' lg="3" sm="4">
                            <ListCategory />
                        </Col>
                        <Col lg="9" sm="8">
                            <ListProducts />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    fetchUsersRequest: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersRequest: (i) => dispatch(fetchUsersRequest(i)),

    }
}

export default connect (null, mapDispatchToProps) (App);
