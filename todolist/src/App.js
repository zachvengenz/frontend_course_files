import "./App.css";
import Tabz from "./components/Tabz";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">List of things to do</Typography>
        </Toolbar>
      </AppBar>
      <Tabz />
    </div>
  );
}

export default App;
