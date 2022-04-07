import Routes from "./Component/Routes";

import ApiService from "./services/api.service";
import { Toaster } from "react-hot-toast";
import { TokenService } from "./services/storage.service";
import { store } from "./store";
import { Provider } from "react-redux";
import { update } from "./redux/authSlice";

const baseUrl = "http://localhost:8000/";
ApiService.init(baseUrl);

function App() {
  if (TokenService.getToken()) {
    ApiService.setHeader();
    store.dispatch(update(TokenService.getData()));
  }
  return (
    <Provider store={store}>
      <Toaster />
      <Routes />
    </Provider>
  );
}

export default App;
