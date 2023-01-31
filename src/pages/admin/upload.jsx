import TextInput from "../../components/admin/textInput";
import Dropdown from "../../components/admin/dropdown";
import TextLgInput from "../../components/admin/textLgInput";
import MyDropzone from "../../components/admin/dropzone";
import AdminBtn from "../../components/admin/adminBtn";
import itemNameIcon from "../../assets/icons/admin/item-name.png";
import priceIcon from "../../assets/icons/admin/price.png";
import typeIcon from "../../assets/icons/admin/type.png";
import sizeIcon from "../../assets/icons/admin/size.png";
import "../../assets/styles/pages/admin/adminCard.css";

export default function Upload() {
  return (
    <div className="admin-card">
      <h1 className="admin-card__title">Add Item</h1>
      <div className="admin-card__text-inputs">
        <TextInput image={itemNameIcon} placeholder={"Item Name"} />
        <TextInput image={priceIcon} placeholder={"Price"} />
      </div>
      <div className="admin-card__dropdowns">
        <Dropdown
          image={typeIcon}
          options={["Brownie", "Tart", "Cinnamon roll", "other"]}
        />
        <Dropdown
          image={sizeIcon}
          options={["one piece", "whole portion", "other"]}
        />
      </div>
      <TextLgInput placeholder={"write description here..."} />
      <p className="admin-card__images-title">Attach Images</p>
      <MyDropzone />
      <AdminBtn text={"Upload"} />
    </div>
  );
}
