import './App.css';
import React, {useState} from 'react';
import SearchBox from './components/SearchBox';
import SearchApi from './api/getSearchResult';
import Result from './components/Result';
import ReactPaginate from "react-paginate";

function App() {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 10;
  const pagesVisited = pageNumber * resultsPerPage;

  const displayResults = results
    .slice(pagesVisited, pagesVisited + resultsPerPage)
    .map((item) => {
      return (
        <Result result={item} />
      );
    });

  const pageCount = Math.ceil(results.length / resultsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const onSearch = async(text) => {
    setResults([]);
    setPageNumber(0);
    const searchResults = await SearchApi.get(`/search?query=${text}`);
    if (searchResults.data.results.length > 0) {
      setMessage('');
      setResults(searchResults.data.results);
    }
    else {
      setMessage('No results found');
      setResults([]);
    }
  }

  return (
    <div className ="App">
      <h2 className = "c-heading-alpha">How can we help?</h2>
      <SearchBox onSearch={onSearch}/>
        
        <div class="search-results">
          <div class="c-tile__container c-tile-fluid-container">
            {results.length > 0  ? displayResults
              : <h3 className = "c-heading-delta">{message}</h3>
            }
          </div>
        </div>
        
        {results.length > 0 ? <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        /> : ''}
    </div>
  );
}

export default App;
