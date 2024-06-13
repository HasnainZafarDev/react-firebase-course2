import "./App.css";
import DramasList from "./components/DramasList";
import UploadDrama from "./components/UploadDrama";
import { Auth } from "./components/auth";

function App() {
  return <div>
    <Auth/>
    <UploadDrama/>
  </div>;
}

export default App;
