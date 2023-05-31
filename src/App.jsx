import "./App.css";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import "./components/header/Header.jsx";
import { Header } from "./components/header/Header.jsx";
import { Nav } from "./components/nav/Nav";
function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <nav className="nav">
        <Nav />
      </nav>
      <main>
        <ItemListContainer greeting="Bienvenido a mi tienda!." />
      </main>
    </>
  );
}
export default App;
