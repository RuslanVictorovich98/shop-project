import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {search, pathname} from '../ducks/lists';
import slugify from 'react-slugify';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

class Header extends React.Component {

    handleSubmit = (e) => {
        const {search} = this.props;
        const inputValue = e.target.value;
        history.push({pathname:  slugify(this.props.mainList.category), search: '?' + inputValue});
        search(inputValue);
    }

    getHistory = () =>{
        this.props.pathname(history.location)
        // console.log(history.location);
        // this.props.search(history.location.search.slice(1));
    }

    componentDidMount(){
        this.getHistory()
    }

    defaultValueByInput = () => {
        if (history.location.search.slice(1) !== undefined) {
            return history.location.search.slice(1)
        }
    }

    render() {
        return(
            <header className="App-header">
                <Container>
                    <Row>
                        <Col lg="4" sm="4">
                            <h3 className="App-title" onClick={() => {console.log(history.location)}}>ProductsAPI</h3>
                        </Col>
                        <Col lg="6" sm="6">
                        <input className="input-filter form-control" type="search" id="input-filter" placeholder="Введите имя...." defaultValue={this.defaultValueByInput()} onChange={(e) => {this.handleSubmit(e)}}/>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

Header.propTypes = {
    search: PropTypes.func,
    pathname: PropTypes.func,
    mainList: PropTypes.object

}

const mapStateToProps = (state) => {
    return {
        mainList: state.mainList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (i) => dispatch(search(i)),
        pathname: (i) => dispatch(pathname(i)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Header);
