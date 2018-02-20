import React from 'react';
import logo from './logo.svg';
import RenderDropDownButton from './components/SortBy';
import { Button } from 'react-bootstrap';
import GridComponent from './components/GridComponent';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      items: [],
      limit: 10,
      hasMoreItems: true
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
  }

  fetchData = (page = 1) => {
    let limit = this.state.limit+10;
    console.log(page, this.state.limit, limit);

    const url = `/api/products?limit=${limit}`;
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
  };

  componentDidMount() {
    this.setState({ isLoading: true, error: undefined })
    this.fetchData(1)
  }

  loadItems = (page) => {
    this.fetchData(page);
  };

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
    var tracks = [];
    const loader = <div className="loader">Loading...</div>;
    items.map((item, index) => {
      tracks.push(
        <GridComponent
            size={item.size}
            price={item.price}
            key={item.id}
            date={item.date}
            src={item.face}
          />
      )
    })
    var element = document.createElement('div');
    return (
      <div className="products">
        <button onClick={this.sortByPriceAsc}>
          Asc
        </button>
       <div className='col-lg-12'>
          <InfiniteScroll
              element="div"
              pageStart={0}
              loadMore={this.loadItems.bind(this)}
              hasMore={this.state.hasMoreItems}
              loader={loader}>
                  {tracks}
          </InfiniteScroll>
        </div>

      </div>
    );

  }
}

export default App;
