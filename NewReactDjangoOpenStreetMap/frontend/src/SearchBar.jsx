import React from 'react';
import { IoSearch } from "react-icons/io5";


function SearchBar() {
    return (
      <div className='searchBarContainer'>
        <a href="" className='searchBarIcon'>
            <IoSearch></IoSearch>
        </a>
        <input type="text"  placeholder='جست و جو......' className='searchBarInput'/>
      </div>
    );
  }
  
  export default SearchBar;