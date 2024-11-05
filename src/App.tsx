import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Applayout from "./ui/Applayout";
import Homepage from "./pages/Homepage";
import { SearchFilterProvider } from "./context/SearchFilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Provider } from "react-redux";
import store from "./store";
import CountryInfoPage from "./pages/CountryInfoPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SearchFilterProvider>
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route element={<Applayout />}>
                  <Route index element={<Homepage />}></Route>
                  <Route
                    path="/country-info"
                    element={<CountryInfoPage />}
                  ></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </SearchFilterProvider>
        </QueryClientProvider>
      </Provider>
    </DarkModeProvider>
  );
}

export default App;
