import { useState } from "react";
import ButtonAdding from "../../Components/ButtonAdding";
import ButtonTopScroll from "../../Components/ButtonTopScroll";
import Footer from "../../Components/Footer";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import Select from "../../Components/Select";
import Video from "../../Components/Video";
import WhatsApp from "../../Components/WhatsApp";

function Home() {

  const [active, setActive] = useState(false)

  return (
    <div>
      <div>
        <Header />
        <Video />
        <Select />
        {active && <Form/>}
        <Footer />
      </div>
      <ButtonAdding onClick={() => setActive(!active)} />
      <ButtonTopScroll />
      <WhatsApp />
    </div>
  );
}

export default Home;
