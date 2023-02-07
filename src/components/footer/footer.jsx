import { useState } from "react";
import { adminInfo } from "../../constants/admin";
import FooterItem from "./footerItem";
import NewsLetter from "./newsletter";
import SimpleSnackbar from "../utils/simpleSnackbar";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import whatsapp from "../../assets/icons/footer/whatsapp.svg";
import bgImage from "../../assets/images/home/location/background.webp";
import "../../assets/styles/components/footer/footer.css";

export default function Footer() {
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="footer">
      <SimpleSnackbar text={message} isOpen={isOpen} setOpen={setOpen} />
      <img src={bgImage} alt="" className="footer__bg" />
      <div className="footer__body">
        <div className="footer__upper">
          <FooterItem
            title={"About Us"}
            desc={
              "Our passion for baking began years ago and has only grown stronger with each passing year."
            }
          />
          <FooterItem
            title={"Contact Info"}
            desc={`Address: Jebcheet, Nabatieh, Lebanon
                   Phone: +961 76 50 79 59
                   info@domain.com`}
          />
          <FooterItem
            title={"Discover Products"}
            desc={`Cinnamon Rolls
                 Brownies
                 Tarts
                 Pies`}
          />
          <FooterItem
            title={"Newsletter"}
            desc={
              "Our passion for baking began years ago and has only grown stronger with each passing year."
            }
            child={[
              <NewsLetter
                key={"newsletter"}
                setOpen={setOpen}
                setMessage={setMessage}
              />,
            ]}
          />
        </div>
        <hr className="footer__seperator" />
        <div className="footer__lower">
          <span className="footer__copyright">
            Copyright @ 2023 All rights reserved | This template is made by
            Ahmad Wehbe
          </span>
          <div className="footer__social-links">
            <a href="https://www.facebook.com/by.safanasr">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/sweetiepies_bysafa/">
              <img src={instagram} alt="instagram" />
            </a>
            {/* TODO: add business phone number here */}
            <a href={`https://wa.me/${adminInfo.phoneNumber}`}>
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
