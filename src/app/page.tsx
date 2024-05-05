import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GreatestOut from "./components/GreatestOut";
import Header from "./components/Header/Header";
import Live from "./components/Live";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner/>
      <Explore/>
      <Live/>
      <GreatestOut  img = "https://plus.unsplash.com/premium_photo-1673859055740-d9d92954c329?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title = "The Greatest Outdoor"
      description = "wishlist curated by airbnb"
      linkText ="Get inspired"   />
    </main>
    <Footer/>
    </>

  );
}
