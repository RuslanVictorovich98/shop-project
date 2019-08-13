import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigator from './listNavigator';
import {findToName, create} from './listActionsCreator';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class App extends React.Component {
   
    state = {
        findResult: '',
        data: false,
        loading: false,
        filter: false,
        vievToFilterList: false,
        historyData: false

    }

    gettingProducts = async () => {
      this.setState({loading: true})
      // console.log('GOOOO')
      const msg = await (await fetch('https://demo8421975.mockable.io/products'));
      if(msg.ok === true && msg.status === 200) {
        let x = await (await fetch('https://demo8421975.mockable.io/products')).json();

        setTimeout(() => {
            this.setState({data: true, loading: false, filter: false, vievToFilterList: false, historyData: false}, () => 
            {
            this.historyData()

            this.props.create(x.products);
          });
        }, 1000);
      }   
    };

    historyData () {
      setTimeout(() => {

        if (history.location.pathname !== '/') {
          this.setState({historyData: false})
          let filterName = this.props.main.filter(num => num.bsr_category.toLowerCase() === history.location.pathname.slice(1).toLowerCase());
          let x = history.location.search;
          
          if (x !== '' && x !== '?=') {
            
            let filterMin = filterName.filter(num => {
              if (num.name.toLowerCase().indexOf(x.slice(2).toLowerCase()) >= 0) {
                return num;
              }})
              this.setState({vievToFilterList: true}, () => this.props.findToName(filterMin));
            } else {
              this.setState({vievToFilterList: true}, () => this.props.findToName(filterName));
            }


          } else  {
            this.setState({historyData: false})
        }
    }, 1)
    }

    activeFilterFunct = () => {
      this.setState({filter: true, vievToFilterList: true, historyData: false});
    }
    
    filterData = () => { // find by name
      if (this.state.data){
        let x = document.getElementById("input-filter").value;
        if (x !=='') {

          if (this.state.filter === false) {
            let filterMin = this.props.main.filter(num => {
              if (num.name.toLowerCase().indexOf(x) >= 0) {
                  return num;
                }})
            this.setState({vievToFilterList: true, findResult: x}, () => this.props.findToName(filterMin))
          }  else {
              let filterMin = this.props.list.filter(num => {

              if (num.name.toLowerCase().indexOf(x) >= 0) {
                  return num;
                }})
            this.setState({findResult: x}, () =>  this.props.findToName(filterMin));
          }

        }
      }
    };
    
// RENDER
    filterList () {
        if (this.state.data) {
          return(
            <div>
              <input className="input-filter form-control" type="find" id="input-filter" placeholder="Введите имя...." onChange={this.filterData}/>
            </div>
          );
        }
      };        

      listData () {
        if (this.state.vievToFilterList == true) {
            return this.props.list.map((elem, i) =>    {
              return (
                <div key={i} className="content">
                  <img src={elem.img}/><br/>
                  <span><strong>№: </strong>{i+1} </span><br/>
                  <span ><strong>Имя: </strong>{elem.name} </span> <br/>
                  <span ><strong>Бренд: </strong>{elem.brand} </span> <br/>
                  <span ><strong>Категория: </strong>{elem.bsr_category} </span> <br/>
                  <span ><strong>Цена: </strong>{elem.price} </span> <br/>
                  <span ><strong>Звезд: </strong>{elem.stars} </span> <br/>
                </div>
              );
            });
          } else if (this.state.historyData) {
            return this.props.list.map((elem, i) =>    {
              return (
                <div key={i} className="content">
                  <img src={elem.img}/><br/>
                  <span><strong>№: </strong>{i+1} </span><br/>
                  <span ><strong>Имя: </strong>{elem.name} </span> <br/>
                  <span ><strong>Бренд: </strong>{elem.brand} </span> <br/>
                  <span ><strong>Категория: </strong>{elem.bsr_category} </span> <br/>
                  <span ><strong>Цена: </strong>{elem.price} </span> <br/>
                  <span ><strong>Звезд: </strong>{elem.stars} </span> <br/>
                </div>
              );
            });
          } else  {
            return this.props.main.map((elem, i) =>    {
              return (
                <div key={i} className="content">
                  <img src={elem.img}/><br/>
                  <span><strong>№: </strong>{i+1} </span><br/>
                  <span ><strong>Имя: </strong>{elem.name} </span> <br/>
                  <span ><strong>Бренд: </strong>{elem.brand} </span> <br/>
                  <span ><strong>Категория: </strong>{elem.bsr_category} </span> <br/>
                  <span ><strong>Цена: </strong>{elem.price} </span> <br/>
                  <span ><strong>Звезд: </strong>{elem.stars} </span> <br/>
                </div>
              );
            });

          }
        }

      elementList () {
        if (this.state.data) {
            return (
                <Row>
                    <Col lg="2" sm="4">
                        <Navigator activeFilterFunct={this.activeFilterFunct} findResult={this.state.findResult}/>
                    </Col>
                    <Col lg="10" sm="8">
                        <div className="App-content">
                            {this.listData()}
                        </div>
                    </Col>
                </Row>
            );
        } else if (this.state.loading){
            return(<div className="content-loading">loading...</div>)
        } else {
          return(
          <div className="content-button"> <button className="btn btn-success button-loading" onClick={this.gettingProducts}>Get data!</button>
          </div>
        )}
      }

    render () {
        return(
            <div>
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col lg="4" sm="4">
                                <h3 className="App-title">ProductsAPI</h3>
                            </Col>
                            <Col lg="6" sm="6">
                                {this.filterList()}
                            </Col>
                        </Row>
                        
                    </Container>
                </header>
                <Container>
                    {this.elementList()}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        main: state.main,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (i) => dispatch(create(i)),
        findToName: (i) => dispatch(findToName(i))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);