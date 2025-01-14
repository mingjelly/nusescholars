import PageTemplate from "../../components/PageTemplate";
import LandingPage from "../../components/LandingPage";
import ConsentPopup from "../../components/ConsentPopup";
export default function Page() {
  return (
    <PageTemplate>
      <ConsentPopup />
      <LandingPage />
    </PageTemplate>
  );
}
