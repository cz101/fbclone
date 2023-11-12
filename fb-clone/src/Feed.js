import React, { useState,useEffect } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from  './MessageSender'
import Post from './Post'
//import db from './firebase'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { onSnapshot, collection, query} from "firebase/firestore";
// eslint-disable-next-line no-unused-vars
//import { getFirestore, collection } from "firebase/firestore"
function Feed() {
  const [posts, setPosts] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyAWsg6cxFJU78Wjb9Bm3vQI1BDkbmXpVg4",
    authDomain: "fb-clone-3caa6.firebaseapp.com",
    projectId: "fb-clone-3caa6",
    storageBucket: "fb-clone-3caa6.appspot.com",
    messagingSenderId: "470652509855",
    appId: "1:470652509855:web:f569c5f143e5c0778c0caa",
    measurementId: "G-VFZ94NM7DS"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  useEffect(() => {
    const q = query(collection(db, "buddies"))
    onSnapshot(q, (snapshot) => setPosts(snapshot.docs.map((doc) => (
      {id: doc.id, 
       data : doc.data()})))
 
    );
    // db.collection("posts").onSnapshot((snapshot) => 
      // setPosts(snapshot.docs.map((doc) => (
      //   {id: doc.id, 
      //    data : doc.data()})))
    // );


  },[])

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        {posts.map((post)=> (<Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />))}
            
    </div>
  )
}

export default Feed