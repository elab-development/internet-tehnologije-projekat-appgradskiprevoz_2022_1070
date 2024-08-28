import React, { useEffect, useState } from 'react'
import OneLine from './OneLine';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Filters from './Filters';

function Lines({authToken}) {


const[lines, setLines] = useState([]);

const[currentPage, setCurrentPage] = useState(0);

const[totalPages, setTotalPages] = useState(0);

const[perPage, setPerPage] = useState(10);

const[filters, setFilters] = useState({
  vehicle:'',
  start_location:'',
  end_location:'',
  price:''  
})

const handlePageClick = (event) =>{
  setCurrentPage(event.selected);
}


/* useEffect(()=>{
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/api/lines',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      setLines(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []); */

useEffect(() => {
  const fetchLines = async () => {                                                        //useEffect omogucava da se pozovi funk. pri ucitavanju i
    try {                                                                                 //svaki put kada se promeni currentPage
      const response = await axios.get(
        `/api/lines?page=${currentPage + 1}&per_page=${perPage}${
          filters.vehicle ? `&filter[vehicle]=${(filters.vehicle)}` : ''
        }${
          filters.start_location ? `&filter[start_location]=${(filters.start_location)}` : ''
        }${
          filters.end_location ? `&filter[end_location]=${(filters.end_location)}` : ''
        }${
          filters.price ? `&filter[price]=${(filters.price)}` : ''
        }`,{
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json',
        }
      });
      console.log(response.data);
      setLines(response.data.data);
      setTotalPages(response.data.last_page);
      setPerPage(response.data.per_page);
      console.log(filters);
    } catch (error) {
      console.log(error);
    }
  };

  fetchLines();
}, [currentPage, filters]);

  return (
    <div className="lines-container">
    <Filters setFilters={setFilters} setCurrentPage={setCurrentPage} />
    {lines.map(line => (
      <OneLine line={line} authToken={authToken} key={line.id} />
    ))}
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={totalPages} //
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick} 
      containerClassName='pagination'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      activeClassName='active'
     />
  </div>
  )
}

export default Lines