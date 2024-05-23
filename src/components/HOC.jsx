import { useEffect, useState } from "react";

function HOC({ children }) {
  const [login, setLogin] = useState(null);

  const isLogin = () => {
    return false;
  };

  useEffect(() => {
    setLogin(isLogin());
  }, []);

  return <div>{login ? children : <div>Login required</div>}</div>;
}

export default HOC;
