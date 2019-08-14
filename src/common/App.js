import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {create, findToName} from '../lists/listActionsCreator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

import ListCategory from '../lists/listCategory';
import ListProducts from '../lists/listProducts';

class App extends React.Component {

    state = {
        find: false,
        findData: '',
    }

    gettingProducts = () => {
        fetch('http://localhost:3000/data.json').then(response => {
            return response.json();
          }).then(data => {
            return this.props.create(data.products);
          }).catch(err => {
              console.error('Fetch return: ' + err);
          });
    }

    find = () => {
        let find = document.getElementById("input-filter").value;
        if (find !=='') {
                        
            let filterMin = this.props.list.filter(num => {
            if (num.name.toLowerCase().indexOf(find) >= 0) {
                return num;
            }})
            this.setState({find: true , findData: find}, () => this.props.findToName(filterMin))
        } else {
            this.setState({find: false, findData: ''})
        }
    }
    

    render() {
        return(
            <div>
                { this.props.main.length === 0 ? this.gettingProducts() : true}
                <Header findByName={this.find} />
                <Container>
                    <Row>
                        <Col lg="3" sm="4">
                            <ListCategory findData={this.state.findData}/>
                        </Col>
                        <Col lg="9" sm="8">
                            <ListProducts find={this.state.find} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        main: state.main,
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (i) => dispatch(create(i)),
        findToName: (i) => dispatch(findToName(i)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
