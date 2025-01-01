import React from "react";
import PageTemplate from "../../../../components/PageTemplate";
import PersonCards from "../../../../components/HumansPage/PersonCards";
import Header from "../../../../components/HumansPage/Header";
import database from "../../../data/database.json";

export interface PersonCardItem {
  image: string; // Image URL
  link: string; // Link URL
  name: string; // Name of the person
}

const App: React.FC = () => {
  // console.log(database["AY22/23 (Year 3)"]["MPE - Mechanical Engineering;"]);

  const baseLink = "/humans-of-descholars/ay22-23/";

  const electricalEngineeringStudents = [
    {
      image: "/images/ay22-23/matthew-yip.jpg",
      link: baseLink + "matthew-yip",
      name: "Matthew Yip",
    },
    {
      image: "/images/ay22-23/matthew-yip.jpg",
      link: baseLink + "matthew-yip",
      name: "Matthew Yip",
    },
    {
      image: "/images/ay22-23/matthew-yip.jpg",
      link: baseLink + "matthew-yip",
      name: "Matthew Yip",
    },
    {
      image: "/images/ay22-23/matthew-yip.jpg",
      link: baseLink + "matthew-yip",
      name: "Matthew Yip",
    },
    {
      image: "/images/ay22-23/matthew-yip.jpg",
      link: baseLink + "matthew-yip",
      name: "Matthew Yip",
    },
    {
      image: "/images/ay22-23/matthew-yip.jpg",
      link: baseLink + "matthew-yip",
      name: "Matthew Yip",
    },
  ];

  return (
    <PageTemplate>
      <Header image="/images/orientation2024.jpg" title="AY22/23" />
      {/*<PersonCards*/}
      {/*  personCards={mechanicalEngineeringPersonCards}*/}
      {/*  title={"Mechanical Engineering"}*/}
      {/*/>*/}
      <PersonCards
        personCards={electricalEngineeringStudents}
        title={"Electrical Engineering"}
      />
    </PageTemplate>
  );
};

export default App;
