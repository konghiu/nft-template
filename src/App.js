import Routers from "./Routers";
import Menu from "./component/menu/Menu";

function App() {
     return (
          <div
               style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
               }}
          >
               <Menu />
               <Routers />
          </div>
     );
}

export default App;
