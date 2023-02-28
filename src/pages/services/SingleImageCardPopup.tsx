import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Avatar, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface popup {
    open: boolean,
    setOpen: (value: boolean) => void,
    id: string
}
interface detailsImage {
    urls:{
        thumb:string
    },
    user:{
        name:string,
        username:string,
        total_likes:number,
        social:{
            instagram_username:string,
            twitter_username : string
        },
        profile_image:{
            small:string
        }
    }
}
const SingleImageCardPopup = ({ open, setOpen, id }: popup) => {
    const handleClose = () => setOpen(false);
    const [singleImage,setSingleImage] = useState<detailsImage>( )
    useEffect(()=>{
        const API_KEY = "C3yY-WrK3A0v3RnGMRNihPyfjWbryWxtJ32i3qLM0dE";
     
      if(id){
        const API_URL = `https://api.unsplash.com/photos/${id}`;
        axios.get(API_URL,{ params: { client_id: API_KEY } })
        .then(response=>{
       
         setSingleImage(response.data)
        })
        .catch(err=>{
         console.log(err.message);
        })
      }
    },[id]);
   
    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>

                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 340,width:"90%" }}
        image={singleImage?.urls?.thumb}
        title=" loading"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {singleImage?.user?.name}
        </Typography>
        <Avatar alt="Remy Sharp" src={singleImage?.user?.profile_image?.small} />
        <Typography variant="body2" color="text.secondary">
      total likes : {singleImage?.user?.total_likes}      
        </Typography>
        <Typography variant="body2" color="text.secondary">
            twitter_username:{singleImage?.user?.social?.
            instagram_username}
        </Typography>
      </CardContent>
     
    </Card>
                </Box>
            </Modal>
        </div>
    );
};

export default SingleImageCardPopup;