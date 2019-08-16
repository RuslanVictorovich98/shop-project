import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {create, findToName, fetchUsersRequest, firstRenderPuthname, findToNamePathname, saveFindToName} from './ducks/lists';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './common/Header';

import ListCategory from './lists/listCategory';
import ListProducts from './lists/listProducts';

class App extends React.Component {

    state = {
        find: false,
    }

    editFirtsPathname = (pathname) => {
        this.setState({firstPathname: pathname});
        this.props.firstRenderPuthname(pathname)
    }

    find = () => { 
        let find = document.getElementById("input-filter").value;
        if (find !=='') {
                        
            let filterMin = this.props.list.filter(num => {
                return num.name.toLowerCase().indexOf(find) >= 0 ? num : null;
            })
            this.setState({find: true}, () => {
                this.props.findToName(filterMin)
                this.props.saveFindToName(find);

            })
           console.log(this.props.saveFindData);
           
        } else {
            this.setState({find: false})
        }

        if (this.state.firstPathname !== false && this.state.firstPathname !== 'All category') {

            let filterMin = this.props.firstProductsPuthname.filter(num => {
                return num.name.toLowerCase().indexOf(find) >= 0 ? num : null;
            })
            this.setState({find: true}, () => this.props.findToNamePathname(filterMin))
        }
    }
    
    componentDidMount() {
        this.props.fetchUsersRequest();
    }

    render() {
        return(
            <div>
                <Header findByName={this.find} />
                <Container>
                    <Row>
                        <Col className='left-panel-category' lg="3" sm="4">
                            <ListCategory findData={this.state.findData} editFirtsPathname={this.editFirtsPathname}/>
                        </Col>
                        <Col lg="9" sm="8">
                            <ListProducts find={this.state.find} firstPathname={this.state.firstPathname} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    main: PropTypes.array,
    list: PropTypes.array,
    create: PropTypes.func,
    findToName: PropTypes.func,
    fetchUsersRequest: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        main: state.main,
        list: state.list,
        firstProductsPuthname: state.firstProductsPuthname,
        saveFindData: state.saveFindData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (i) => dispatch(create(i)),
        findToName: (i) => dispatch(findToName(i)),
        fetchUsersRequest: (i) => dispatch(fetchUsersRequest(i)),
        firstRenderPuthname: (i) => dispatch(firstRenderPuthname(i)),
        findToNamePathname: (i) => dispatch(findToNamePathname(i)),
        saveFindToName: (i) => dispatch(saveFindToName(i)),

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
