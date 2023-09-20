import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EuroRounded } from "@mui/icons-material";
import Image from "next/image";
import carLogo from "../../assets/car.svg";

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
        className=" bg-gradient-to-r from-red-400/80 via-red-300/70 to-red-200/50 
        rounded-3xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        sx={{ minWidth: 275 }}
      >
        <CardContent>
          <Image
            priority={false}
            src={carLogo}
            className="w-full p-4"
            alt="logo"
          />
          <Typography className="font-bold text-lg text-red-700 ">{make}</Typography>
          <Typography className="text-red-600 pb-4">model: {model}</Typography>
          <div className="grid grid-cols-2 content-center">
            <Typography className="text-red-800 grid content-center">
              <EuroRounded />
              {price}
            </Typography>
            <CardActions className="grid content-center place-items-end ">
              <Button size="small" className="bg-red-600 rounded-3xl place-self-end">
                <a className="text-white" href={`/car/${id}`}>
                  See more
                </a>
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarCard;
