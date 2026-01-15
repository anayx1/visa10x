import TopBar from "./TopBar";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Stats from "./Stats";
import VisaGuidance from "./VisaGuidance";
import StructuredGuidance from "./StructuredGuidance";
import SubmissionReady from "./SubmissionReady";
import Services from "./Services";
import PassportGuidance from "./PassportGuidance";
import WhatSetsApart from "./WhatSetsApart";
import StreamlinedProcess from "./StreamlinedProcess";
import Transparency from "./Transparency";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ComingSoon from "./ComingSoon";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroSection />
      <Stats />
      <VisaGuidance />
      <StructuredGuidance />
      <SubmissionReady />
      <Services />
      <PassportGuidance />
      <WhatSetsApart />
      <StreamlinedProcess />
      <Transparency />
      <FAQ />
      <ComingSoon />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
