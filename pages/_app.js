import '../styles/globals.scss';
import '../styles/app.scss';

const TITLE = "Operation Iron Soldier Home";
const DESCRIPTION = "Operation Iron Soldier is an Idependent Group who are here to create, design and inspire.";


import Head from "../components/Head/";
import NavBar from "../components/NavBar/";
import Footer from "../components/Footer/";

function App({ Component, pageProps }) {
    return (
        <>
            <Head title={TITLE} description={DESCRIPTION}/>
            <NavBar/>
            <div className="main">
                <Component {...pageProps} />
            </div>
            <Footer/>
        </>
    );
}

export default App;
