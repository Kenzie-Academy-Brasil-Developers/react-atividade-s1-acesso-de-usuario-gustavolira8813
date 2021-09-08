function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Bem-vindo {user}</p>
          <button onClick={Logout}>Deslogar</button>
        </div>
      ) : (
        <div>
          <p>Você não pode acessar essa página.</p>
          <button onClick={Login}>Logar</button>
        </div>
      )}
    </>
  );
}
export default RestrictedPage;
