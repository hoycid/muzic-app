import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import TextHeader from "./components/TextHeader/TextHeader";
import FeaturedText from "./components/FeaturedText/FeaturedText";
import EnrollForm from "./components/EnrollForm/EnrollForm";
import InstrumentsList from "./components/InstrumentsList/InstrumentsList";

import pic from "./assets/images/pic.jpg";
import pic2 from "./assets/images/pic2.jpg";

import "./App.css";

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
    </div>
  );
}

export default App;
