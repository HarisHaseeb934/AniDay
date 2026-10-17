const Heading = ({text}) => {
  return (
    <div className="flex py-5">
      <h1 className="ml-4 relative bg-gradient-to-br from-cyan-100 to-cyan-700 bg-clip-text text-transparent text-lg md:text-3xl font-bold before:content-[''] before:absolute before:-left-2 md:before:-left-3 before:rounded-xl before:bottom-2 before:w-1 md:before:w-1.5 before:h-3 md:before:h-6 before:bg-anime-cyan">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
