import React from "react";
import PageTemplate from "../../../../components/PageTemplate";
import PersonCards from "../../../../components/HumansPage/PersonCard";
import Header from "../../../../components/HumansPage/Header";

const App: React.FC = () => {
  const baseLink = "/humans-of-descholars/ay22-23/";
  const mechanicalEngineeringStudents= [
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
  ];

  const electricalEngineeringStudents= [
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
    { image: "/images/ay22-23/matthew-yip.jpg", link: baseLink + "matthew-yip", name: "Matthew Yip" },
  ];

  return (
    <PageTemplate>
      <Header image="/images/orientation2024.jpg" title="AY22/23" />
      <PersonCards personCards={mechanicalEngineeringStudents} title={"Mechanical Engineering"}/>
      <PersonCards personCards={electricalEngineeringStudents} title={"Electrical Engineering"}/>
    </PageTemplate>
  );
};

export default App;
