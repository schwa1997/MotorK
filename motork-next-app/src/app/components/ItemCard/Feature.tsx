interface FeatureProps {
  icon: React.ReactNode;
  feature: string;
  value: string | number;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, feature, value }) => {
  return (
    <div
      className="flex min-w-fit rounded-3xl bg-gradient-to-r from-red-300 to-red-700/50 
       hover:from-red-700 hover:to-red-700/50 hover:text-white"
    >
      <div className="flex-none bg-red-500 rounded-2xl p-2">{icon}</div>
      <div className="flex-grow flex place-content-between px-2 ">
        <div className="place-self-center text-xs">{feature}</div>
        <div className="place-self-center pr-2 text-right break-words md:text-base text-black  font-bold">
          {value}
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
