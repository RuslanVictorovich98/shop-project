import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends React.Component {

    render() {
        return(
            <header className="App-header">
                <Container>
                    <Row>
                        <Col lg="4" sm="4">
                            <h3 className="App-title">ProductsAPI</h3>
                        </Col>
                        <Col lg="6" sm="6">
                        <input className="input-filter form-control" type="find" id="input-filter" placeholder="Введите имя...." onChange={this.props.findByName}/>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

Header.propTypes = {
    findByName: PropTypes.func
}

export default Header;
