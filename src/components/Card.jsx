import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


export default function CardComponent({data = {}}) {
    console.log({"CardComponent":"",data});
    const {name = "Default", height, mass, skin_color, eye_color, films, birth_year, url} = data;
  return (
    <Card sx={{maxWidth: 345, margin: 2, minWidth: '17vw', minHeight: '40vh' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/200/300.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
               <Typography gutterBottom variant="small" component="div"> Height - {height}</Typography>
           <Typography gutterBottom variant="small" component="div"> Mass - {mass}</Typography>
           <Typography gutterBottom variant="small" component="div"> Skin Color - {skin_color}</Typography>
           <Typography gutterBottom variant="small" component="div"> Eye Color - {eye_color}</Typography>
           <Typography gutterBottom variant="small" component="div"> birth_year - {birth_year}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Edit Profile
      </Button>
    </CardActions>
  </Card>
  );
}