import { Favorite } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import SingleImageCardPopup from './SingleImageCardPopup';

const ImageCard = ({ item }: any) => {
    const [open, setOpen] = React.useState<boolean>(false);
     const [id,setId] = useState<string>("")
    const handleOpen = (id:string) => {
         setId(id)
        setOpen(true)
    };
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card>
                <CardMedia
                    component="img"
                    image={item?.urls?.thumb}
                    alt="kisu ekta"
                    onClick={ ()=>handleOpen(item?.id)}
                />
                <CardContent>
                    <Typography variant="h5">{item?.user?.name}</Typography>
                    <IconButton aria-label="Like"  >
                        {item?.likes}<Favorite />
                    </IconButton>
                </CardContent>
            </Card>
            <SingleImageCardPopup open={open} setOpen={setOpen} id={id}/>
        </Grid>

    );
};

export default ImageCard;