
import React from "react";
import Link from "next/link";


function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footerContainer"> 
                    <div className="InternalLinks">
                        <h3>
                            Resources
                        </h3>
                        <div className="links">
                            <Link href="/about">
                                <a>
                                    About
                                </a>
                            </Link>
                            <Link href="/tos">
                                <a>
                                    Terms Of Service
                                </a>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="ExternalLinks">
                        <h3>
                            Our Services
                        </h3>
                        <div className="links">
                            <Link
                                href="https://www.etsy.com/shop/operationironsoldier"
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Our Etsy Shop
                                </a>
                            </Link>
                        </div>
                    </div>
                    

                </div>
            </footer>
        </>
    );
}

module.exports = Footer;