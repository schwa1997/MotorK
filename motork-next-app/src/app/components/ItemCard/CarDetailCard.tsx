import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import carLogo from "../../assets/car.svg";
import { ArrowBack, EuroOutlined, ModeOutlined } from "@mui/icons-material";

interface CarCardProps {
  id: number;
  make: string;
  model: string;
  price: string;
  description: string;
  features: string;
  mileage: number;
}
const CarDetailCard: React.FC<CarCardProps> = ({
  make,
  model,
  price,
  description,
  features,
  mileage,
}) => {
  return (
    <>
      <div className="h-fit relative">
        <div className="bg-white flex justify-center md:absolute md:w-full relative  h-full">
          <Image priority={false} src={carLogo} className="md:w-2/3 md:h-fit  w-fit h-3/4 " alt="logo" />
        </div>
        <div className="md:w-1/4 z-50 md:pt-24 pt-4 md:fixed md:left-3/4 md:top-0 md:h-screen left-0  w-screen relative h-fit shadow-red-600 text-black flex flex-col space-y-4 p-5">
          <Card
            sx={{
              background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)',
              ":hover": {
                background: "rgba(239, 68, 68, 0.9)",
              },
            }}
            className="flex-none h-fit "
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {make}
              </Typography>
            </CardContent>
          </Card>
          <Card
             sx={{
              background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)',
              ":hover": {
                background: "rgba(239, 68, 68, 0.9)",
              },
            }}
            className="grow h-fit"
          >
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {model}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <EuroOutlined /> {price}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {features}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Mileage: {mileage}
              </Typography>
            </CardContent>
          </Card>
          <Card
             sx={{
              background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)',
              ":hover": {
                background: "rgba(239, 68, 68, 0.9)",
              },
            }}
            className="flex-none h-fit"
          >
            <CardActions>
              <Button size="small">
                <a href={`/`} className="text-white">
                  <ArrowBack/> Car list</a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CarDetailCard;
