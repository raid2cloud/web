import LblocFooter from "../lbloc/footer/footer"
import LblocHeader from "../lbloc/header/header"
import LblocNavbar from "../lbloc/navbar/navbar"
import ReactGA from "react-ga"


function PageIndex() {
  ReactGA.pageview('/');
  return (
    <>
      <LblocNavbar/>
      <LblocHeader/>
      <LblocFooter/>
    </>
  )
}

export default PageIndex