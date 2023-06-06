import { SneakerCard } from "./SneakerCard";

export const Shoes = ({ shoe }) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center">
      {shoe.map((snkrs) => (
        <SneakerCard
          name={snkrs.name}
          img={snkrs.images.thumbnail}
          id={snkrs.id}
          price={snkrs.price}
          desc={snkrs.desc}
        />
      ))}
    </div>
  );
};
