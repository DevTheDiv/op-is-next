
import React from "react";
import Head from "next/head";

function PageHead(props) {
    const {title, description} = props;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta name="og:description" content={description} />
                <meta property="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Head>
        </>
    );
}

module.exports = PageHead;