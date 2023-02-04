import axios from "axios";
import { deleteImages } from "./update";

export default async function deleteItem(id, authToken, images, navigate) {
  console.log("Deleting item with id: ", id);
  await axios({
    method: "delete",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/items/item/${id}`,
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then(async (res) => {
      console.log("Item deleted successfully: ", res);
      const response = await deleteImages(authToken, images);
      if (response.message) {
        navigate("/");
      }
    })
    .catch((err) => {
      console.log("Item deletion failed: ", err);
      console.log(err);
    });
}
