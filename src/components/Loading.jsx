const Loading = () => {
  return (
    <section className="min-h-100 w-full bg-anime-surface flex justify-center items-center">
      <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>{" "}
      Processing…
    </section>
  );
};

export default Loading;
