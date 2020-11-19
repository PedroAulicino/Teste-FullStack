import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "../../AuthProvier";

const UserProfile = () => {
  const [user, setUser] = useContext(AuthContext);

  return (
    <div>
      {user.name}
      <button onClick={() => setUser(false)}>Cancelar</button>
    </div>
  );
};

const Login = () => {
  const [, setUser] = useContext(AuthContext);

  return (
    <button onClick={() => setUser({ name: "Favorito" })}>Favoritar</button>
  );
};

const Main = () => {
  const [user] = useContext(AuthContext);
  return user ? <UserProfile /> : <Login />;
};

export default function App() {
  return (
    <AuthProvider>
      <>
        <Main />
      </>
    </AuthProvider>
  );
}
