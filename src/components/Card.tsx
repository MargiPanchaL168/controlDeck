import React, {FC, MouseEventHandler, ReactElement, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import ModelComponent from "./Model";

interface Props {
  data: PeopleData
}

interface PeopleData {
  name: 'string',
  height:'string',
  mass: 'string',
  skin_color: 'string',
  eye_color: 'string',
  birth_year: 'string'
}
const CardComponent: FC<Props> = ({ data }):ReactElement => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // console.log({ CardComponent: "", data });
  const {
    name,
    height,
    mass,
    skin_color,
    eye_color,
    birth_year,
  } = data;
  return (
    <Card
      sx={{ maxWidth: 345, margin: 2, minWidth: "17vw", minHeight: "40vh" }}
    >
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
          <Typography gutterBottom variant="inherit" component="div">
            {" "}
            Height - {height}
          </Typography>
          <Typography gutterBottom variant="inherit" component="div">
            {" "}
            Mass - {mass}
          </Typography>
          <Typography gutterBottom variant="inherit" component="div">
            {" "}
            Skin Color - {skin_color}
          </Typography>
          <Typography gutterBottom variant="inherit" component="div">
            {" "}
            Eye Color - {eye_color}
          </Typography>
          <Typography gutterBottom variant="inherit" component="div">
            {" "}
            birth_year - {birth_year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Edit Profile
        </Button>
      </CardActions>
      {open ? (
        <ModelComponent open={open} handleClose={handleClose} data={data} />
      ) : null}
    </Card>
  );
}
export default CardComponent;