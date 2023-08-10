import MainLayout from "./components/MainLayout";
import "./index.css";
import Router from "./router";

const App = () => {
  return (
    <div className="App">
      
      <MainLayout>
        <Router />
      </MainLayout>
    </div>
  );
};

export default App;
