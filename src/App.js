import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    items: [],
    products: [],
    productsFilter: [],
    data: false,
    loading: false,
    filter: false
  }

  filterData = () => {
    if (this.state.data){
      let x = document.getElementById("input-filter").value;
      let j = this.state.products;

      if (x !=='') {
        let filterMin = this.state.products.filter(num => num.price > x)
        console.log(j);
        this.setState({productsFilter: filterMin, filter: true})
    } else  {
        this.setState({filter: false})
      }

    }
  };

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

  filterList () {
    if (this.state.data) {
      return(
        <div>
          <input className="input-filter form-control" id="input-filter" type="text" placeholder="Показать товары цена которых ниже за...." onChange={this.filterData}/>
      </div>
      );
    }
  };

  elementList () {
    if (this.state.data) {
      if (this.state.filter) {
        return this.state.productsFilter.map((elem, i) =>    {
          return (
            <div key={i} className="content">
              <img src={elem.img}/><br/>
              <span><strong>№: </strong>{i+1} </span><br/>
              <span ><strong>Имя: </strong>{elem.name} </span> <br/>
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
              <span ><strong>Цена: </strong>{elem.price} </span> <br/>
              <span ><strong>Звезд: </strong>{elem.stars} </span> <br/>
            </div>
          );
        });
      }
      

    } else if (this.state.loading){
        return(<div className="content-loading">loading...</div>)
    } else {return<div className="content-button"> <button className="btn btn-success button-loading" onClick={this.gettingProducts}>Get data!</button></div>}
  }

  render () {
      return (
          <div>
            <header className="App-header">
              <div className='row'>
                <h3 className="App-title col-md-3 col-xs-3 col-sm-3 col-lg-3">ProductsAPI</h3>
                {this.filterList()}
                </div>
            </header>
            <div className="App-content">
              {this.elementList()}
            </div>
          </div>
      )
  }


}

export default App;