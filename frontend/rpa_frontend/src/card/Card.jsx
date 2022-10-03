import * as React from 'react';
import Card from '@mui/material/Card';
import './Card.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, width: 500,borderRadius: 3 }} className="card_design">
      <div class="details">
        <div className='name'>Hospital name:</div>
        <br />
        <div className='address'>address:</div>
        <br />
        <div className='rating'>rating:<StarOutlinedIcon className='star' fontSize="1px"/>
          <StarOutlinedIcon className='star' fontSize="1px"/>
          <StarHalfOutlinedIcon className='star' fontSize="1px"/>
          <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
          <StarOutlineOutlinedIcon className='star' fontSize="1px"/>
        </div>
        <br />
        <div className='review'>review:</div>
    </div>
    {/* <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
    </CardContent> */}
    </Card>
  );
}
