import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import carLogo from "../../assets/car.svg";
import {
  ArrowBack,
  DirectionsCar,
  EuroOutlined,
  LocalCarWash,
  LocalOffer,
  Tune,
} from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";
import FeatureCard from "./FeatureCard";
import { CarType } from "@/app/types";

const CarDetailCard: React.FC<CarType> = ({
  make,
  model,
  price,
  description,
  features,
  mileage,
}) => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:p-1 p-0">
        <div className="bg-white md:col-span-2 p-10">
          <Image
            priority={false}
            src={carLogo}
            className="w-full h-fit md:w-screen md:h-fit "
            alt="logo"
          />
        </div>
        <div className=" text-black p-3 flex flex-col gap-4 md:min-w-[calc(30vw)] min-w-[calc(90vw)] ">
          <Card
            className="transform transition-all hover:-translate-y-2 duration-300"
            sx={{
              paddingBottom: "0px",
              background:
                "linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)",
              ":hover": {
                background: "rgba(239, 68, 68, 0.9)",
              },
            }}
          >
            <div className="px-4 py-2 flex gap-2">
              <LocalCarWash />
              <Typography className="text-xl font-bold" component="div">
                {make}
              </Typography>
            </div>
          </Card>
          <Card
            className="transform transition-all hover:-translate-y-2 duration-300"
            sx={{
              background:
                "linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)",
              ":hover": {
                background: "rgba(239, 68, 68, 0.3)",
              },
            }}
          >
            <CardContent className="grid gap-5">
              <FeatureCard
                icon={<LocalOffer />}
                feature="Model"
                value={model}
              />

              <FeatureCard
                icon={<EuroOutlined />}
                feature="Price"
                value={price}
              />
              <FeatureCard
                icon={<DescriptionIcon />}
                feature="Description"
                value={description}
              />
              <FeatureCard
                icon={<Tune />}
                feature="Features"
                value={features}
              />
              <FeatureCard
                icon={<DirectionsCar />}
                feature="Mileage"
                value={mileage}
              />
            </CardContent>
          </Card>
          <Card
            className="transform transition-all hover:-translate-y-2 duration-300"
            sx={{
              background:
                "linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)",
              ":hover": {
                background: "rgba(239, 68, 68, 0.9)",
              },
            }}
          >
            <CardActions>
              <Button size="small">
                <a href={`/`} className="text-white">
                  <ArrowBack /> Car list
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CarDetailCard;
