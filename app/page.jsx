import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Kham pha & chia se
        <br className="max-md:hidden" />
        <span className="orange_radient text-center"> AI Prompt</span>
      </h1>
      <p className="desc text-center">bla bla bla bla bal</p>
      <Feed />
    </section>
  );
};

export default Home;
