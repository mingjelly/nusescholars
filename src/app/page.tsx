import FullPageImage from "../../components/FullPageImage";
import PageTemplate from "../../components/PageTemplate";

export default function Page() {
  return (
    <PageTemplate>
      <FullPageImage
        imageUrl="/images/orientation2024.jpg"
        text="Welcome to the D-E scholars webpage!"
      />
    </PageTemplate>
  );
}
