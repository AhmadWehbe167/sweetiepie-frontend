import TextInput from "../../components/admin/textInput";
import Dropdown from "../../components/admin/dropdown";
import TextLgInput from "../../components/admin/textLgInput";
import MyDropzone from "../../components/admin/dropzone";
import AdminBtn from "../../components/admin/adminBtn";
import itemNameIcon from "../../assets/icons/admin/item-name.png";
import priceIcon from "../../assets/icons/admin/price.png";
import typeIcon from "../../assets/icons/admin/type.png";
import sizeIcon from "../../assets/icons/admin/size.png";
import "../../assets/styles/pages/admin/card.css";

export default function Update() {
  function handleDelete() {
    // TODO: implement delete function
    console.log("delete");
  }

  function handleUpdate() {
    // TODO: implement update function
    console.log("update");
  }

  return (
    <div className="card">
      <div className="card__header">
        <h1 className="card__title">Update Item</h1>
        <AdminBtn
          text={"Delete"}
          customClass={"adminBtn--delete"}
          onClick={handleDelete}
        />
      </div>
      <div className="card__text-inputs">
        <TextInput image={itemNameIcon} placeholder={"Item Name"} />
        <TextInput image={priceIcon} placeholder={"Price"} />
      </div>
      <div className="card__dropdowns">
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
      <p className="card__images-title">Attach Images</p>
      <MyDropzone />
      <AdminBtn text={"Update"} onClick={handleUpdate} />
    </div>
  );
}
