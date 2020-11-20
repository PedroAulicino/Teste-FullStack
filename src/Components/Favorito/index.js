import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "../../AuthProvier";
import "./index.css";
const UserProfile = () => {
  const [user, setUser] = useContext(AuthContext);

  return (
    <div>
      {user.name}

      <button className='button-info' onClick={() => setUser(false)}>
        Cancelar
      </button>
    </div>
  );
};

const Login = () => {
  const [, setUser] = useContext(AuthContext);

  return (
    <div>
      <button
        className='button-info'
        onClick={() => setUser({ name: "Favorito" })}
      >
        Favoritar
      </button>
    </div>
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
