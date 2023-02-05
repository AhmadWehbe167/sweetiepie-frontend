import * as Yup from "yup";
import axios from "axios";
import { uploadImages } from "./upload";

const schema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  price: Yup.number().min(0).required("Required"),
  description: Yup.string().min(0).max(1500),
});

export default function formikOptions(
  id,
  setError,
  setLoading,
  navigate,
  type,
  size,
  authToken,
  setFiles,
  files,
  imageUrls,
  setImageUrls,
  name,
  price,
  description,
  initImagesUrls
) {
  return {
    initialValues: {
      name: name,
      price: price,
      description: description,
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setError(null);
      setLoading(true);
      // In case there was an error and item is not saved
      // then images should not be uploaded to storage again

      let images = [];
      if (files.length > 0) {
        const result = await uploadImages(authToken, files).finally(() => {
          setLoading(false);
        });
        if (result.error) {
          setError(result.error);
          return;
        } else {
          images = [...imageUrls, ...result.imageUrls];
          setImageUrls(images);
          setFiles([]);
        }
      } else {
        images = imageUrls;
      }

      await handleItemUpdate(
        id,
        values,
        setError,
        setLoading,
        type,
        size,
        authToken,
        images
      ).then((res) => {
        if (res.message) {
          const deletedImages = initImagesUrls.filter(
            (e) => !images.includes(e)
          );
          if (deletedImages.length > 0) {
            deleteImages(authToken, deletedImages);
          }
          navigate(`/products/${res._id}`);
        }
      });
    },
  };
}

export async function deleteImages(authToken, deletedImages) {
  return await axios({
    method: "delete",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/images/delete`,
    data: {
      images: deletedImages,
    },
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      console.log("Deleting images succeeded: ", res);
      return { message: "Images deleted successfully" };
    })
    .catch((err) => {
      console.log("Deleting images failed: ", err);
      return { error: "Deleting images failed" };
    });
}

async function handleItemUpdate(
  id,
  values,
  setError,
  setLoading,
  type,
  size,
  authToken,
  images
) {
  const name = values.name.charAt(0).toUpperCase() + values.name.slice(1);
  const price = values.price;
  const description =
    values.description.charAt(0).toUpperCase() +
    values.description.slice(1).toLowerCase();

  setError(null);
  setLoading(true);

  const obj = {
    name: name,
    type: type,
    size: size,
    description: description,
    price: price,
    images: images,
  };

  return await axios({
    method: "put",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/items/item/${id}`,
    data: obj,
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      return { message: "item updated!", _id: res.data._id };
    })
    .catch((error) => {
      setError(
        error.response.data || "Something went wrong. Please try again."
      );
      setLoading(false);
      return { error: error.response.data };
    });
}

export function fetchData(id, authToken, successCallback, failureCallback) {
  axios({
    method: "get",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/items/item/${id}`,
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      successCallback(res);
    })
    .catch((err) => {
      failureCallback(err);
    });
}

export function isChanged(
  obj,
  initValues,
  initImagesUrls,
  files,
  imageUrls,
  size,
  type
) {
  for (let key in obj) {
    if (obj[key] !== initValues[key]) {
      return true;
    }
  }
  if (files.length > 0) return true;
  if (imageUrls.length !== initImagesUrls.length) return true;
  if (size !== initValues.size) return true;
  if (type !== initValues.type) return true;
  return false;
}
