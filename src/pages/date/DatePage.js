import React from 'react'
import DatePageBanner from './DatePageBanner'
import DatePageDatePicker from './DatePageDatePicker'
import {motion} from "framer-motion"
import DatePageForm from './DatePageForm'
import { Helmet } from "react-helmet";
export default function DatePage() {

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    >
      <Helmet>
          <title>Avukat Ayşenur Ertan Randevu</title>
          <meta  name="description"
          content="Avukat Ayşenur Ertan randevu al"
          >
          
          </meta>
          <meta name="keywords" content="Avukat, Ayşenur Ertan, AyşenurErtan, Avukat Ayşenur Ertan, Avukat Sayfası , Randevu, Blog, Hakkımda, Ertan Hukuk, Hukuk, Randevu al,  "></meta>
        </Helmet>
      <DatePageBanner></DatePageBanner>
  

    <DatePageForm></DatePageForm>
    </motion.div>
  )
}
