import Navbar from "./components/Layout/Navbar/Navbar";
import Section from "./components/UI/Section/Section";
import TextHeader from "./components/UI/TextHeader/TextHeader";
import FeaturedText from "./components/UI/FeaturedText/FeaturedText";
import EnrollForm from "./components/UI/EnrollForm/EnrollForm";
import InstrumentsList from "./components/UI/InstrumentsList/InstrumentsList";
import Footer from "./components/Layout/Footer/Footer";

import pic from "./assets/images/pic.jpg";
import pic2 from "./assets/images/pic2.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section bg={pic}>
        <TextHeader>
          <h3>Muzic Malaybalay Sound Studio</h3>
          <h1>
            A music school for all skill levels, ages, and musical aspirations
          </h1>
        </TextHeader>
        <EnrollForm />
      </Section>
      <FeaturedText text="We take the music school concept to the next level for kids, teens, and adults." />
      <Section bg={pic2}>
        <TextHeader>
          <h1>MUSIC LESSONS</h1>
          <h3>
            We are a music learning center for; piano, violin, ukulele, guitar,
            saxophone, trumpet, flute, voice, and drums. We also offer visual
            art lessons.
          </h3>
        </TextHeader>
        <InstrumentsList />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
