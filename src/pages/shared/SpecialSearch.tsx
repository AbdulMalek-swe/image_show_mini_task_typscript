import { Box } from '@mui/system';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { AuthContext } from '../../context/AuthProvider';
 type searchStyle = {
  searchStyle: {
    width: string;
    display: {
        xs: string;
        md: string;
    };
}
 }
const SpecialSearch = (props:searchStyle):JSX.Element => {
  const { setSearchName} = useContext(AuthContext)
    const items =[{
      name:"wild"
    }]
    const onHandler = (value: string) => {
      setSearchName(value)
    }
    const onSelect = (item: any) => {
      setSearchName(item?.title);
    };
  
      const formatResult = (item :any) => {
         
        return (
          <>
               
          </>
        )
      }
    let values =400
   
    return (
        <div>
             <Box sx={ props?.searchStyle}>
          <ReactSearchAutocomplete
            items={items}
             
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            onSelect={onSelect}

            placeholder="search image here"
            autoFocus
            formatResult={formatResult}
            onSearch={onHandler}
          />
        </Box>
        </div>
    );
};

export default SpecialSearch;