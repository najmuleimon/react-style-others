import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { infos } from '../../data';
import './PaginateItems.css';




function PaginatedItems() {
  
  // const items = infos;
  const [items, setItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage  = 10;

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItems(data));
  },[]);

  useEffect(() => {
    document.title = 'Real Estate | Paginate ';
  },[])

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  


  return (
    <div className='paginate-items'>
      <ol>
        {
          currentItems.map((item, index) =>
              <li key={index}> 
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Position: {item.position}</p>
              </li>
            )
        }
      </ol>

      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="paginate"
      />

    </div>
  );
}

export default PaginatedItems;