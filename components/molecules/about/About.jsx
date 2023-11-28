import Image from "next/image";
import photo from "@/components/atoms/images/2 img389 Rimantas Petrikas.jpg";
import Styles from "./about.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const about = () => {
  return (
    <>
      <Image src={photo} className={Styles.photo} />
      <div className={Styles.wrapper}>
        <div className={`${roboto.className} ${Styles.about}`}>
          <p>
            Gimiau keturiasdešimt ketvirtųjų metų vaiskų pavasarį Telšių
            apskrities Česnių - stambaus ūkininko, pas kurį tuo metu tėvai
            darbavosi, sodyboje lygiai dvyliktą valandą dienos, tuo metu
            ūkininkas skerdė kiaulę, o ūkio aukštuose medžiuose, garsiai
            kranksėdami, jau „ženijosi“ kovai, tėvas pribuvėjai padovanojo
            savadarbį kirvį – kad aš būčiau aštrus ir kietas, kaip ir tas
            kirvis. Už savaitės – per melagių dieną - buvau pakrikštytas
            neogotikinio stiliaus Gadūnavo Švč. Jėzaus širdies bažnyčioje, taip
            ir atsiradau bežemių valstiečių šeimoje: mama – gryna žemaitė.
          </p>

          <p>
            Pokario laikais baigęs aštuonias klases, traukiniu išdundėjau
            mokytis į tuometinį Kretingos žemės ūkio technikumą, trečiame kurse
            manęs pasigedo rusų generolai, taip prievarta trejiems metams
            atsidūriau buvusiame Kionisberge - raketiniame kariniame dalinyje
            tarnavau redijotelegrafistu. Grįžęs iš armijos, gimtojo kaimo
            kolūkyje dirbau brigadininku, neakivaizdžiai toliau mokiausi
            aukštesniojoje, o paskui ir aukštojoje agronomų ruošimo mokyklose,
            kaime išdirbęs beveik dešimt metų, tą veiklą užbaigiau pirmininko
            pavaduotoju gamybos reikalams.
          </p>
          <p>
            Pirmieji fotografiniai bei rašymo „gabumai“ pasireiškė ankstyvoje
            vaikystėje, kai kažkur 1956-aisiais įstojau į mokyklos jaunųjų
            literatų, o paskui ir fotografų būrelius. Nuo to laiko rašinėjau
            „straipsnius“ tuometiniam laikraščiui „Lietuvos pionierius“, bei
            rajoninei spaudai, o ir fotoaparatas su manimi jau nebeišsiskyrė...
            Nuo 1974 metų pradėjau dirbti Radviliškio rajono laikraščio
            redakcijoje žemės ūkio skyriaus vedėju, paskui – fotokorespondentu,
            ir taip nejučiomis pralėkė keturios dešimtys darbo metų vienoje ir
            toje pačioje redakcijoje. Visur darbas buvo mėgstamas, todėl
            gyvenimas žaibu pralėkė, dabar jau senokai esu pensininkas.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
