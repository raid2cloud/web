import LblocFooter from "../lbloc/footer/footer"
import LblocHeader from "../lbloc/header/header"
import LblocNavbar from "../lbloc/navbar/navbar"
import ReactGA from "react-ga4"


function PageIndex() {
  ReactGA.send({ hitType: "pageview", page: "/" });
  return (
    <>
      <LblocNavbar/>
      <LblocHeader/>
      <LblocFooter/>
    </>
  )
}

export default PageIndex