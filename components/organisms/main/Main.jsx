import Image from "next/image";
import photo from "@/components/atoms/images/img389 autorius.jpg";
import Styles from "./main.module.css";
import { Smooch_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Main = () => {
  return (
    <div className={Styles.wrapper}>
      <Image
        src={photo}
        className={Styles.photo}
        alt="Rimanto Petriko nnuotrauka"
      />
      <div className={Styles.textWrapper}>
        <div className={`${SmoochSans.className} ${Styles.author}`}>
          RIMANTAS PETRIKAS
        </div>
        <div className={`${SmoochSans.className} ${Styles.author1}`}>
          PHOTOGRAHER AND WRITER
        </div>
        <div className={`${roboto.className} ${Styles.author2}`}>
          <p>
            Rimantas Petrikas nepriklauso Lietuvos fotomenininkų sąjungai,
            nerasite knygynuose ar bibliotekose solidaus jo fotografijų albumo,
            negausios publikacijos apie jį šalies spaudoje, dažniau – vietos
            Radviliškio rajono laikraštyje, kurio redakcijoje fotokorespondentu
            jis dirbo keturiasdešimt metų.
          </p>

          <p>
            Radviliškietis R. Petrikas šiandien galėtų stovėti vienoje gretoje
            su tokiais Lietuvos humanistinės fotografijos grandais kaip Antanas
            Sutkus, Aleksandras Macijauskas, Romualdas Rakauskas ir kitais, jei
            tik kas būtų stumtelėjęs, padrąsinęs, atradęs. Bet niekas
            nestumtelėjo, neieškojo, o Rimantui ir nereikėjo – jis tiesiog
            fotografavo tuometinį Lietuvos kaimą, kurdamas savitą kasdienybės
            natūralumo estetiką. Fiksavo tai, ką matė ir perteikė taip, kaip
            matė. Per tuos metus Rimantas sukūrė daugybę fotografijos ciklų,
            kurių centre – belaikis, neistoriškas kaimo žmogus ir jo tipažą bei
            charakterį formuojanti sociokultūrinė aplinka.
          </p>
          <p>
            Rimanto kelias į fotografiją pasisuko netikėtai, ne tam ruošėsi
            krimsdamas rimtus agronomijos mokslus. Bet iš vaikystės atsineštas
            stebuklas – pasaulis, pamatytas pro fotoaparato objektyvą –nedavė
            ramybės. Todėl dvejus metus pasimokęs fotografijos tuometiniame
            Maskvos visasąjunginiame neakivaizdiniame Menų universitete,
            atsisakė perspektyvaus brigadininko darbo ir 1974 metais pasuko
            Radviliškio laikraščio redakcijon, kur duoną pelnė dokumentuodamas
            gerai pažįstamą ir sielai artimą kaimo gyvenimą ir, kaip pats sako,
            vargindamas vietos gyventojus savo neįmantriais rašiniais...
          </p>
          <Link
            target="_blank"
            href="https://bernardinai.lt/2017-10-23-rimanto-petriko-fotoportretai-koks-zmogus-yra-toki-ji-ir-nutraukiu/"
          >
            Nuoroda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
