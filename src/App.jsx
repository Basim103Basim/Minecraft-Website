import { BrowserRouter,Routes,Route } from "react-router-dom";
//components
import Header from "./components/header";
import Sidebar from "./components/sidebar";
//pages
import Homepage from "./pages/home"
import Sketchpage from "./pages/sketch"
import Lorepage from "./pages/lore"
import Infopage from "./pages/info"
import SketchDetail from "./pages/sketchDetail";
import LoreDetail from "./pages/loreDetail";
import InfoDetail from "./pages/infoDetail";
//app
function App(){
  return(
    <BrowserRouter basename="/Minecraft-Website">
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/sketch" element={<Sketchpage></Sketchpage>}/>
        <Route path="/lore" element={<Lorepage></Lorepage>}/>
        <Route path="/info" element={<Infopage></Infopage>}/>
        <Route path="/info/:infoId" element={<InfoDetail></InfoDetail>}/>
        <Route path="/sketch/:charId" element={<SketchDetail/>}/>
        <Route path="/lore/:loreId" element={<LoreDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App