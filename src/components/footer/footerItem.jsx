import { useState } from "react";
import dropIcon from "../../assets/icons/footer/expand-arrow.svg";
import "../../assets/styles/components/footer/footer.css";

function FooterItem({ title, desc, child }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="footer__section">
      <div className="foooter__section-upper">
        <span className="footer__section-title">{title}</span>
        <img
          src={dropIcon}
          alt=""
          className={
            "footer__section-icon" +
            (open ? " footer__section-icon--rotate" : "")
          }
          onClick={handleOpen}
        />
      </div>
      <div
        className={
          "footer__section-lower" +
          (open ? " footer__section-lower--invisible" : "")
        }
      >
        {desc}
      </div>
      {child}
    </div>
  );
}

export default FooterItem;
