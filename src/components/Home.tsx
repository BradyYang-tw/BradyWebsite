import * as React from "react";
import Introduce from "./Introduce";
import Loading from "./Loading";
const Home = ()=>{
    return <React.Fragment><Loading></Loading><Introduce></Introduce><div>Home</div></React.Fragment>
}
export default Home;
