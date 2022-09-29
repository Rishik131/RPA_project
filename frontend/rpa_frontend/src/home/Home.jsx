import React from "react";
import './Home.scss';
// import './Home.js';
import BasicCard from "../card/Card.jsx";
const Home = () => {
    return (
        <>
            <header id="nav-wrapper">
                <nav id="nav">
                    <div className="nav left">
                        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">RPA proj</a></h1></span>
                        <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
                    </div>

                    <div className="mid">
                        <div className="search_box">
                        <form>
                            <input type="text" placeholder="Search" className="search_box1"/>
                        </form>
                        </div>
                        <div className="search_button">
                        <button className="search_button1">
                            Search
                        </button>
                        </div>
                    </div>
                    <div className="nav right">
                        <a href="#home" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
                        <a href="#Near_you" className="nav-link"><span className="nav-link-span"><span className="u-nav">Near You</span></span></a>
                        <a href="#About" className="nav-link"><span className="nav-link-span"><span className="u-nav">About the project</span></span></a>
                        <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home">
                    {/* <div className="flex-container">
                        <div className="flex-items"><BasicCard /></div>
                        <div className="flex-items"><BasicCard /></div>
                        <div className="flex-items"><BasicCard /></div>
                    </div> */}
                    <div className="intro">
                        <div className="intro_text">
                            <div className="it2">
                                WE<br />
                                SAVE LIVES
                            </div>
                            
                        </div>
                        <div className="intro_text2">
                            We provide Best near by Hospital details, <br />
                            with most reliable reviews!
                        </div>
                    </div>
                </section>
                <section id="Near_you">

                </section>
                <section id="About">

                </section>
                <section id="contact">

                </section>
                <script>

                </script>
            </main>
            {/* <div>hello</div> */}
        </>
    )
}

export default Home