// firebaseFunctions.js

import { collection, getDocs, addDoc, query, orderBy, where, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAboutMe = async () => {
  const aboutMe = collection(db, "aboutme");
  const data = await getDocs(aboutMe);
  const doc = data.docs[0];
    let aboutMeData = { ...doc.data(), id: doc.id };
  console.log(aboutMeData)
  return aboutMeData;

};

export const getBlogs = createAsyncThunk("getBlogs", async () => {
    const blogsCollection = collection(db, "blogs");
    const data = await getDocs(blogsCollection);
    let blogs = [];
    data.docs.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id });
    });
    return blogs;
  });




  
  export const getBlogsById = createAsyncThunk("blogs/getBlogsById", async (url) => {
   try {
    const blogRef = collection(db, 'blogs'); 
    const q = query(blogRef, where('url', '==', url));
    const querySnapshot = await getDocs(q);

   const data =querySnapshot.docs[0].data()

   return data
   } catch (error) {
    console.log(error ,"error")
   }
  });
  
  
  export const getDates = createAsyncThunk("getDates", async () => {
    const dateCollection = collection(db, "dates");
    const data = await getDocs(dateCollection);
    let dates = [];
    data.docs.forEach((doc) => {
      dates.push({ ...doc.data(), id: doc.id });
    });
    return dates;
  });





// firebaseFunctions.js


export const postDate = async (date) => {
  const datesCollection = collection(db, "dates");
  try {
    // Add the new date to the 'dates' collection
    const docRef = await addDoc(datesCollection, date);
    console.log("Date added successfully with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding date:", error);
    // Handle the error appropriately.
    throw error;
  }
};
