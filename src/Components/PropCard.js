import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate, Router } from 'react-router-dom';
import './PropCard.css'

const PropStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto',
    cursor: 'pointer',
  },
  media: {
    width: 345,
    height: 140,
  },
  stats: {
    display: 'flex',
    justifyContent: '',
  },
});

const PropCard = ({ propertyinfo }) => {
  const classes = PropStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Prop/${propertyinfo.id}`);
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={propertyinfo.bgimage}
        title={propertyinfo.name}
      />
      <CardContent>
        <Typography variant="h6">{propertyinfo.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {propertyinfo.price}
        </Typography>
        <div className={classes.stats}>
          <Typography variant="body2">
            Bedrooms: {propertyinfo.bedrooms}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="body2">
            Bathrooms: {propertyinfo.bathrooms} 
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="body2">
            Address: {propertyinfo.address} 
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropCard;