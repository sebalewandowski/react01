import React from 'react';
import logo from './logo.svg';
import RenderDropDownButton from './components/SortBy';
import InfiniteScroll from 'react-simple-infinite-scroll'
import { Button } from 'react-bootstrap';
import GridComponent from './components/GridComponent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      items: [],
      limit: 10,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true, error: undefined })
    const url = `/api/products?limit=${this.state.limit}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
      })
      .then(data =>  {
        let responseData = [];
        responseData = data.split('\n').map((item) => {
          if (item){
            // console.log(item);
            return JSON.parse(item);
          }
        }).filter(item => item);
        this.setState({
        items: responseData,
          isLoading: false,
          limit: this.state.limit + 10,
        })
      })
      .catch(error => console.log('parsing failed',error))
  }

  handleEnd = () => {
    this.setState(state => ({limit: state.limit + 20}), () => this.fetch());
  };

  sortByPriceAsc = () => {
    this.setState(prevState => {
      this.state.items.sort((a, b) => (a.price - b.price))
    })
  }

   render() {
    const { items } = this.state;
     const loader = <div className="loader">Loading...</div>;
    return (

      <div className="products">
        <button onClick={this.sortByPriceAsc}>
          Asc
        </button>
       <div className='row'>
        {items.map((item, index) => {
          return <GridComponent
            size={item.size}
            price={item.price}
            key={item.id}
            date={item.date}
            src={item.face}
          />
          }
        )}
        </div>

      </div>
    );
  }
}

export default App;
