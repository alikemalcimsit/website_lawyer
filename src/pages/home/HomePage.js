import React from "react";

import Navbar from "../../components/navbar/Navbar";
import HomePageBanner from "./HomePageBanner";
import HomePageAbout from "./HomePageAbout";
import HomePageWorkType from "./HomePageWorkType";
import HomePageBlog from "./HomePageBlog";
import { Helmet } from "react-helmet";
export default function HomePage() {
  return (
   
    <div >
      <Helmet>
          <title>Avukat Ayşenur Ertan Anasayfa</title>
          <meta  name="description"
          content="Avukat Ayşenur Ertan Anasayfa"
          >
          
          </meta>
          <meta name="keywords" content="Avukat, Ayşenur Ertan, AyşenurErtan, Avukat Ayşenur Ertan, Avukat Sayfası , Randevu, Blog, Hakkımda, Ertan Hukuk , Hukuk ,  "></meta>
        </Helmet>
<HomePageBanner></HomePageBanner>
<div className="mt-10 mb-20">
<HomePageAbout></HomePageAbout>
</div>
<HomePageWorkType></HomePageWorkType>
   <HomePageBlog></HomePageBlog>
    </div>
  );
}
