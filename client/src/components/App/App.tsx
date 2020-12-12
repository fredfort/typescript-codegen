import React from "react";
import AppContent from "../AppContent/AppContent";

import { Provider } from "react-redux";
import store from "../../state/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
