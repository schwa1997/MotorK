import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CarCardProps {
  id: number;
  make: string;
  model: string;
  price: string;
}
const CarCard: React.FC<CarCardProps> = ({ id, make, model, price }) => {
  return (
    <div className="p-4 md:w-72 w-screen">
      <Card
        className=" bg-zinc-400/30 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        sx={{ minWidth: 275 }}
      >
        <CardContent>
          <Typography className="p-2 font-bold text-lg mb-2">{make}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            model: {model}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            price: {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={`/car/${id}`}>See more</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CarCard;
