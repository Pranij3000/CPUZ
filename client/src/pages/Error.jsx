import BannerButton from "../sections/BannerButton";
import Background from "../../assets/images/placeholder-04.png";
export default function ErrorPage() {
  return (
    <>
      <BannerButton background={`url(${Background})`} strong="PAGE NOT FOUND" title="Uh-oh.." description="It looks like the page you're searching for isn't here. Please check the URL or return to the homepage." BtnPlaceholder="Return to Homepage" />
    </>
  );
}
