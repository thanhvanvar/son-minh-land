import React from "react";
import Head from "next/head";

function HeaderTag(props:any) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property="og:site_name" content={`${props.name}`} />
        <meta
          property="og:url"
          content={`${
            typeof window !== "undefined" ? window.location.href : ""
          }`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${props.name}`} />
        <meta
          property="og:description"
          content={`${props.info
            .replace(/<[^>]*>?/gm, "")
            .substring(0, 160)}...`}
        />
        <meta
          name="description"
          content={`${props.info
            .replace(/<[^>]*>?/gm, "")
            .substring(0, 160)}...`}
        />
        <meta property="og:image" content={`${props.img}`} />
        <meta property="twitter:image" content={`${props.img}`} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
}
export default HeaderTag;
