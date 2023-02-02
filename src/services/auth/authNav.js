import { useState, useEffect } from "react";

export default function useAuthNav(token, navigate, isAuthPath, isNotPath) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(() => {
    return token;
  });

  useEffect(() => {
    if (value === "") navigate(isNotPath);
    else navigate(isAuthPath);
  }, [value, navigate, isAuthPath, isNotPath]);
}
