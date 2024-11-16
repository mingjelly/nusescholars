import FullPageImage from "../../components/FullPageImage";
import Navbar from "../../components/Navbar";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack>
      <Navbar />
      <FullPageImage
        imageUrl="/images/orientation2024.jpg"
        text="Welcome to the D-E scholars webpage!"
      />
    </Stack>
  );
}
