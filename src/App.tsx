import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Applayout from "./ui/Applayout";
import Homepage from "./pages/Homepage";
import { SearchFilterProvider } from "./context/SearchFilterContext";

function App() {
  return (
    <SearchFilterProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Homepage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchFilterProvider>
  );
}

export default App;
