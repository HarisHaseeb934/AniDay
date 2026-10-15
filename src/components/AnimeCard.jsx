const AnimeCard = ({  Name, Cover, DescripTion, MALScore }) => {
  return (
    <div className="max-w-3xs">
      <div className="h-[300px]">
        <img src={Cover} alt="" className="w-full h-full object-cover object-center"/>
      </div>

    </div>
  );
};

export default AnimeCard;
