import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
      </MainLayout>
      {/* <MainLayout> */}
      {/* <HomePage />   */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <HomePage /> */}
      {/* <Profile /> */}
      {/* <UserDetails /> */}
      {/* <UserList /> */}
      {/* <SideBar /> */}
      {/* </MainLayout> */}
    </div>
  );
};

export default App;
