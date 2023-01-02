import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Select from "../../Components/Select";
import Video from "../../Components/Video";
import WhatsApp from "../../Components/WhatsApp";


function Home() {
  return (
    <div>
      <div>
        <Header />
        <Video/>
        <Select />
        <Footer />
      </div>
      <WhatsApp/>
    </div>
  );
}

export default Home;
