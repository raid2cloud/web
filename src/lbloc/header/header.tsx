import { t } from "i18next";
import Timer from "../../components/timer/timer";
import MovingWave from "../../components/wave/wave";

function LblocHeader() {
  return (
    <>
    
      <section className="bg-gray-800 text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/R2C_Web_icon.webp"
            />{" "}
            {/** 720 / 600 */}
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Raid2Cloud
              </h1>
              <h2 className="mb-8 leading-relaxed text-white">{t("landing_text")}</h2>
              <Timer date={"2021-12-15"} time="15:00" />
            </div>
          </div>

          


        
      </section>
      <MovingWave color="rgba(31, 41, 55,100)" invert={true} />
    </>
  );
}

export default LblocHeader;
