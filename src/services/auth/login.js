import * as Yup from "yup";
import axios from "axios";
import handleConnectionError from "../connectionErrorHandler";

const values = {
  email: "",
  password: "",
};

const schema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const handleLogIn = (values, setError, setLoading, setToken, navigate) => {
  const email = values.email.toLowerCase();
  const password = values.password;
  setError(null);
  setLoading(true);
  axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}/auth`, {
      email,
      password,
    })
    .then((response) => {
      setToken(response.data);
      window.location.href = "/";
    })
    .catch((error) => {
      const err = handleConnectionError(error);
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
};

export default function formikOptions(
  setError,
  setLoading,
  setToken,
  navigate
) {
  return {
    initialValues: values,
    validationSchema: schema,
    onSubmit: (values) => {
      handleLogIn(values, setError, setLoading, setToken, navigate);
    },
  };
}
