import React from "react";
import { useStorage } from "@react-corekit/use-storage";

function App() {
  const [showNotification, setShowNotification] = useStorage("");

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
