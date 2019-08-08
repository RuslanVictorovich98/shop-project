import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'

// import Button from 'react-bootstrap/Button';

class AppCategoryFilter extends React.Component {

    state = {
        items: [],
        products: [],
        productsFilter: [],
        data: false,
        loading: false,
        filter: false,
        currentCategory: 'one'
      }
    
    gettingProductsCategory() {
        console.log(this.state.currentCategory);
        if (this.state.currentCategory !=='') {
          let filterName = this.state.products.filter(num => num.bsr_category.toLowerCase() === this.state.currentCategory.toLowerCase());
            console.log(filterName);
          this.setState({productsFilter: filterName, filter: true})
          } else  {
            this.setState({filter: false})
          }
  
    }
      
    gettingProducts = async () => {
    // const msg = await (await fetch('https://jsonplaceholder.typicode.com/todos/1'));
        this.setState({loading: true})
        const msg = await (await fetch('https://demo8421975.mockable.io/products'));
            if(msg.ok === true && msg.status === 200) {
            let x = await (await fetch('https://demo8421975.mockable.io/products')).json();
            
            setTimeout(() => {
                this.setState({items: [x], products: x.products, data: true, loading: false});
            }, 1000);
        }   
    };

    filterData = () => {
        if (this.state.data){
          let x = document.getElementById("input-filter").value;
          if (x !=='') {
            let filterMin = this.state.products.filter(num => num.price >= x)
            this.setState({productsFilter: filterMin, filter: true})
          } else  {
            this.setState({filter: false})
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
       
        return y.map((elem, i) => {
            return (
                <ul>
                    <li key={i} id="category-list" onClick={categoryClickHandler}>{elem}</li>
                </ul>
            )
        })
    }

// RENDER
    filterList () {
        if (this.state.data) {
          return(
            <div>
              <input className="input-filter form-control" type="number" id="input-filter" placeholder="Цена от...." onChange={this.filterData}/>
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
          } else {
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
        } else {return<div className="content-button"> <button className="btn btn-success button-loading" onClick={this.gettingProducts}>Get data!</button></div>}
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
                            <Col lg="4" sm="4">
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

export default AppCategoryFilter;