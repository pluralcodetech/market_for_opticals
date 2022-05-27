import { useState } from "react";
import Footer from "../components/footer";
import Chooseus from "../components/home/chooseus";
import Hero from "../components/home/hero";
import Howitworks from "../components/home/howitworks";
import Services from "../components/home/services";
import Waitlistsection from "../components/home/waitlistsection";
import Layout from "../components/layout";
import Navbar from "../components/home/navbar";
import Slidebar from "../components/home/slidebar";

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Layout
      title="home for market4opticals"
      description="home for market4opticals "
    >
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Hero />
      <Howitworks />
      <Chooseus />
      <Services />
      <Waitlistsection />
      <Footer />
      {showSidebar && <Slidebar showSidebar={showSidebar} />}
    </Layout>
  );
}

export default Home;
