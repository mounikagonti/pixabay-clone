import type { NextPage } from "next";
import Grid from "../components/grid/Grid";
import Header from "../components/header/Header";
import Section from "../components/section/Section";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Section />
      <Grid />
    </div>
  );
};

export default Home;
