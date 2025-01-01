import PageTemplate from "../../../components/PageTemplate";
import LinkItems from "../../../components/HumansPage/LinkItems";
import Typography from "@mui/material/Typography";

export default function Page() {
  const baseLink = "/humans-of-descholars/";
  const batchItems = [
    {
      title: "AY21/22",
      image: "/images/orientation2024.jpg",
      link: baseLink + "ay21-22",
    },
    {
      title: "AY22/23",
      image: "/images/orientation2024.jpg",
      link: baseLink + "ay22-23",
    },
    {
      title: "AY23/24",
      image: "/images/orientation2024.jpg",
      link: baseLink + "ay23-24",
    },
    {
      title: "AY24/25",
      image: "/images/orientation2024.jpg",
      link: baseLink + "ay24-25",
    },
  ];

  return (
    <PageTemplate>
      <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>
        HUMANS OF DE-SCHOLARS
      </Typography>
      <Typography variant="h5" component="h1" sx={{ textAlign: "center" }}>
        Welcome to the Humans of DE-scholars page! Select the batch below to
        find out more about us :)
      </Typography>
      <LinkItems linkItems={batchItems} />
    </PageTemplate>
  );
}
