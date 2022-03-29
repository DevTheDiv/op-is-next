
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';



function NavBar() {

    const router = useRouter();


    return (
        <>
            <nav>
                <Link href="/home"><a className={router.pathname === "/home" ? "active" : ""}>Home</a></Link>
                <Link href="/about"><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
            </nav>
            <nav-empty/>
        </>
    );
}

module.exports = NavBar;