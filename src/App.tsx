import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NavbarShared from "./components/Shared/NavbarShared/NavbarShared";

function App() {
  return (
    <>
      <NavbarShared />
      <AppRoutes />
    </>
  );
}

export default App;
