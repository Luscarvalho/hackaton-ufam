import BottonContent from "./components/botton-content";
import NavBar from "./components/navbar";
import PrincipalContent from "./components/principal-content";
import SideContent from "./components/side-content";

function App() {
  return (
    <div className="w-3/5 m-auto grid grid-cols-3 gap-5">
      <NavBar />
      <div className="grid grid-cols-3 col-span-3 gap-5 mb-16">
        <PrincipalContent />
        <SideContent />
      </div>
      <BottonContent />
    </div>
  );
}

export default App;
