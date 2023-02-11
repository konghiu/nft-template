import Routers from "./Routers";
import Menu from "./component/menu/Menu";
import Footer from "./component/footer/Footer";

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
               <Footer />
          </div>
     );
}

export default App;
