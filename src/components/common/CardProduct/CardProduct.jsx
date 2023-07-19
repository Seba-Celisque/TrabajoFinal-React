import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const CardProduct = ({ elemento }) => {
  return (
    <Card className="cardProduct" sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 260 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent style={{ height: 160 }}>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="contained" color="text.secondary">
          {elemento.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/detalleDelProducto/${elemento.id}`}>
          <Button size="small" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
