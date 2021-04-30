import ReactDOM from "react-dom";
import Topbar from "./Topbar";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Mobile from "./Mobile";


function App(){
    return(<>
        <Topbar />
        <div class ="corpo">
        <div class ="esquerda">
        <Stories />
        <Posts />
        </div>
        <Sidebar />
        </div>
        <Mobile />
        </>
    )
};

ReactDOM.render(<App />, document.querySelector(".root"));
