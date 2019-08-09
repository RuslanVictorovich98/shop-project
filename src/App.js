import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigator from './Navigator';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class App extends React.Component {

    state = {
        items: [],
        products: [],
        productsFilter: [],
        filterResult: '',
        data: false,
        loading: false,
        filter: false,
        historyData: false,
        currentCategory: 'one'
      }

    gettingProducts = async () => {
      this.setState({loading: true})

      const msg = await (await fetch('https://demo8421975.mockable.io/products'));
          if(msg.ok === true && msg.status === 200) {
          let x = await (await fetch('https://demo8421975.mockable.io/products')).json();
          
          setTimeout(() => {
              this.setState({items: [x], products: x.products, data: true, loading: false}, () => this.historyData());
          }, 1000);
      }   
    };
    
    gettingProductsCategory() {
        console.log(this.state.currentCategory);
        
        if (this.state.currentCategory !=='') {
          let filterName = this.state.products.filter(num => num.bsr_category.toLowerCase() === this.state.currentCategory.toLowerCase());
            console.log(filterName);
          this.setState({productsFilter: filterName, filter: true})
          } else {
            this.setState({filter: false})
          }
      
    }
      //*
    historyData () {
      if (this.state.data) {
        if (history.location.pathname !== '/') {
          let filterName = this.state.products.filter(num => num.bsr_category.toLowerCase() === history.location.pathname.slice(1).toLowerCase());
          let x = history.location.search;

          if (x !=='?=') {
            let filterMin = filterName.filter(num => {
              if (num.name.toLowerCase().indexOf(x.slice(2).toLowerCase()) >= 0) {
                return num;
              }})
              this.setState({productsFilter: filterMin, historyData: true})
            } else {
              this.setState({productsFilter: filterName, historyData: true})
            }
          } else  {
            this.setState({filter: false})
        }
      }
    }

    filterData = () => {
        if (this.state.data){
          let x = document.getElementById("input-filter").value;

          if (x !=='') {
            let filterMin = this.state.products.filter(num => {
              if (num.name.toLowerCase().indexOf(x) >= 0) {
                return num;
              }})
            return this.setState({productsFilter: filterMin, historyData: true, filterResult: x})
          } else  {
            this.setState({historyData: false})
          }
        }
      };

    retCategory () {
        let x =  this.state.products.map((elem) => {
            return elem.bsr_category;
        })
        let y = x.filter((item, pos) => {
            return x.indexOf(item) === pos;
            })
        
        const categoryClickHandler = (e) => {
            let a = e.currentTarget.innerText;
            this.setState(() => ({
                currentCategory: a
            }), () => {this.gettingProductsCategory()})
        }
        return (<Navigator categoryClickHandler={categoryClickHandler} findResult={this.state.filterResult} elem={y} data={this.state.data}></Navigator>)
    }
    
// RENDER
    filterList () {
        if (this.state.data) {
        //   let x ='one';
        //   if (history.location.search.slice(1) !== 0){
        //     x = history.location.search.slice(1);
        //   }

          return(
            <div>
              <input className="input-filter form-control" type="text" id="input-filter" placeholder="Введите имя...." onChange={this.filterData}/>
            </div>
          );
        }
      };        

    listData () {
      if (this.state.filter) {
          return this.state.productsFilter.map((elem, i) =>    {
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
          return this.state.productsFilter.map((elem, i) =>    {
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
          return this.state.products.map((elem, i) =>    {
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
                          {this.retCategory()}
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

export default App;