import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    items: [],
    products: [],
    data: false,
    loading: false
  }

  gettingProducts = async () => {
      // const msg = await (await fetch('https://jsonplaceholder.typicode.com/todos/1'));
      this.setState({loading: true})
      const msg = await (await fetch('https://demo8421975.mockable.io/products'));

      console.log(msg);
      
        if(msg.ok === true && msg.status === 200) {
          let x = await (await fetch('https://demo8421975.mockable.io/products')).json();
          
          setTimeout(() => {
            this.setState({items: [x], products: x.products, data: true, loading: false});
            console.log(this.state.items)    

          }, 1000);
    }
  }

  // elementListProductsHeader () {
  //   if (this.state.data) {
  //     return this.state.items.map((elem, i) =>    {
  //       return (
  //         <h6 className="App-title-length" key={i}>
  //           Всего элементов: {elem.count_products}
  //         </h6>
  //       )
  //   });
  //  }
  // }

  elementList () {
    if (this.state.data) {
      // return this.state.items.products.map((elem, i) =>    {

      return this.state.products.map((elem, i) =>    {
        return (
          <div key={i} className="content">
            <img src={elem.img} width="50px"/><br/>
            <span><strong>№: </strong>{i+1} </span><br/>
            <span ><strong>Имя: </strong>{elem.name} </span> <br/>
            <span ><strong>Цена: </strong>{elem.price} </span> <br/>
            <span ><strong>Звезд: </strong>{elem.stars} </span> <br/>
          </div>
  
        );
      });
    } else if (this.state.loading){
        return(<div className="content-loading">loading...</div>)
    } else {return<div className="content-button"> <button className="btn btn-success" onClick={this.gettingProducts}>Get data!</button></div>}

    
  }

  render () {
      return (
          <div>
            <header className="App-header">
              <h3 className="App-title">ProductsAPI</h3>
              {/* {this.elementListProductsHeader()} */}
            </header>
            <div className="App-content">
              {this.elementList()}
            </div>
          </div>
      )
  }


}

export default App;