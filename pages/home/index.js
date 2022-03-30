import React  from "react";
import Head from "../../components/Head/"

const TITLE = "Operation Iron Soldier Home";
const DESCRIPTION = "Operation Iron Soldier is an Idependent Group who are here to create, design and inspire.";

function Home() {
    return(
        <>
            <Head title={TITLE} description={DESCRIPTION}/>
            <div id="home-page">
                <div>Welcome To Operation Iron Soldier</div>
            </div>
        </>
    );
}


export default Home;