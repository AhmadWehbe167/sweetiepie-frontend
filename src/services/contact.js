import * as Yup from "yup";
import axios from "axios";

const values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  description: "",
};

const schema = Yup.object({
  firstName: Yup.string().min(5).max(255).required("Required"),
  lastName: Yup.string().min(5).max(255).required("Required"),
  email: Yup.string().min(5).max(255).required("Required").email(),
  phone: Yup.string().min(5).max(255),
  description: Yup.string().min(5).max(2500).required("Required"),
});

const handleFeedbackSubmit = (
  values,
  setError,
  setLoading,
  navigate,
  authToken
) => {
  setError(null);
  setLoading(true);

  const obj = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    description: values.description,
  };

  axios({
    method: "post",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: "/feedback/save",
    data: obj,
    headers: {
      "x-auth-token": authToken,
    },
  })
    .then((res) => {
      axios({
        method: "post",
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        url: "/feedback/send",
        data: obj,
        headers: {
          "x-auth-token": authToken,
        },
      })
        .then((res) => {
          navigate(`/`);
        })
        .catch((err) =>
          setError(
            err.response.data || "Something went wrong. Please try again."
          )
        );
    })
    .catch((err) => {
      console.log(err.response.data);
      setError(err.response.data || "Something went wrong. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
};

export default function formikOptions(
  setError,
  setLoading,
  navigate,
  authToken
) {
  return {
    initialValues: values,
    validationSchema: schema,
    onSubmit: async (values) => {
      setError(null);
      handleFeedbackSubmit(values, setError, setLoading, navigate, authToken);
    },
  };
}
