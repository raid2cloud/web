import { t } from "i18next";
import Timer from "../../components/timer/timer";
import MovingWave from "../../components/wave/wave";

function LblocHeader() {
  return (
    <>

      <div className="bg-gray-800 grid">
        <br/>
        <img height="256px" width="256px" className="justify-self-center rounded-full h-64" src="/R2C_Web_icon_256x256.webp"/>
        <br/>
        <h1 className="justify-self-center text-white text-5xl">{"Raid2Cloud"}</h1>
        <h2 className="justify-self-center text-white text-2xl">{t("landing_text")}</h2>
        
        
        <Timer date={"2021-12-15"} time="15:00"/>
      </div>
      <MovingWave color="rgba(31, 41, 55,100)" invert={true} />
    </>
  );
}

export default LblocHeader;