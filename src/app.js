import ReactDOM from "react-dom/client"
import Hedder from "./componts/Hedder";
import Body from "./componts/Body";
// import { data } from "browserslist";
// import { release } from "process";

const AppLeout = () => {

    return(
        <div className="appLeout">
          <Hedder/>
          <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLeout/>)