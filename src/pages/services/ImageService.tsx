import { Grid, Pagination, Stack } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ImageCard from './ImageCard';

const ImageService: React.FC = () => {
  const { searchName } = useContext(AuthContext)
  const [imageData, setImageData] = useState([]);
  const [page,setPage] = useState<number|null>(0)
  useEffect(() => {
    const API_KEY = "C3yY-WrK3A0v3RnGMRNihPyfjWbryWxtJ32i3qLM0dE";
    let API_URL;
    
    if (searchName) {
      API_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${searchName}`;
    }
    else {
   API_URL = `https://api.unsplash.com/photos?page=${page}`;
    }
    axios
      .get(API_URL, { params: { client_id: API_KEY } })
      .then((response) => {
        // console.log(response);
        if (searchName) {
          setImageData(response?.data?.results)
        }
        else {
          setImageData(response?.data)
        }
      })
      .catch((error) => console.log(error));
  }, [searchName,page]);
  return (
    <div>
      <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {
          imageData.map((item, i) => <ImageCard key={i} item={item} />)
        }
      </Grid>
      <Stack spacing={2}>
        <Pagination count={10} onChange={(e,v:number)=>{
          setPage(v+1)
        }} />
      </Stack>
    </div>
  );
};

export default ImageService;