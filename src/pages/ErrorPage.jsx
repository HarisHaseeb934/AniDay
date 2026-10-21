import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <section className="h-screen w-full bg-[url(e.jpg)] bg-contain md:bg-cover bg-center bg-no-repeat relative">
      <div className="flex absolute top-[75%] left-[50%] translate-x-[-50%] items-center justify-center gap-5">
        <button
          className={`text-anime-text bg-anime-primary hover:bg-anime-primary/90 px-3 py-2`}
          onClick={handleNavigate}
        >
          Go to Home
        </button>
        <NavLink
          className={`text-anime-text bg-anime-primary hover:bg-anime-primary/90 px-3 py-2`}
          to={`/`}
        >
          Go Back
        </NavLink>
      </div>
    </section>
  );
};

export default ErrorPage;
