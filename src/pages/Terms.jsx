import TERMS_OF_SERVICES from "../JSON/Terms.json";

const Terms = () => {
  return (
    <article className="bg-[#06090f]">
      <div className="max-w-[90%] w-full mx-auto py-10">
        {TERMS_OF_SERVICES.map((data, index) => {
          switch (data.type) {
            case "h1":
              return (
                <h1 key={index} className="font-bold text-anime-cyan/80 text-2xl sm:text-4xl text-center my-5">
                  {data.text}
                </h1>
              );
            case "h2":
              return (
                <h2 key={index} className="text-xl sm:text-3xl text-anime-cyan/80 mt-5">
                  {data.text}
                </h2>
              );
            case "h3":
              return (
                <h3 key={index} className="text-lg sm:text-2xl text-anime-cyan/80 mt-2">
                  {data.text}
                </h3>
              );
            case "meta":
              return (
                <span key={index} className="font-bold text-anime-text">
                  {data.text}
                </span>
              );
            case "p":
              return (
                <p key={index} className="text-anime-text mt-2 text-[13px] sm:text-base">
                  {data.text}
                </p>
              );
            case "ul":
              return (
                <ul key={index} className="list-disc">
                  {data.items.map((li, index) => {
                    return <li key={index} className="text-anime-text text-[13px] sm:text-base mt-1 ml-4">{li}</li>;
                  })}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
};

export default Terms;
