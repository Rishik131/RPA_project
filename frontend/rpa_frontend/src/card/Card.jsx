import * as React from 'react';
import Card from '@mui/material/Card';
import './Card.css'



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, width: 500}}>
      <div class="details">
        Hospital name
        <br />
        address
        <br />
        rating
        <br />
        review
    </div>
    </Card>
  );
}
