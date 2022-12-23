import { DataProvider } from "./components/DataProvider";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h2>Crie |  Leia |  Atualize |  Exclua</h2>
        <FormInput/>
        <List/>
        <Footer/>
      </div>
    </DataProvider>
  );
}

export default App;
