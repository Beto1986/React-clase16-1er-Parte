import useData from "./hooks/useData";

export default function App() {
  const { data: usuarios, loader: loadingUsuarios } = useData(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { data: fotos, loader: loadingFotos } = useData(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <>
      <h2>Usuarios: </h2>
      {loadingUsuarios ? (
        <p>Cargando datos ... </p>
      ) : (
        usuarios &&
        usuarios.map((u) => {
          return <p> {u.name} </p>;
        })
      )}
      <h2>Fotos: </h2>
      {loadingFotos ? (
        <p>Cargando datos ... </p>
      ) : (
        fotos &&
        fotos.map((u) => {
          return <p> {u.title} </p>;
        })
      )}
    </>
  );
}
