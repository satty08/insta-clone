import React, { useState } from 'react';
import './App.css';
import Post from './Post.js'

function App() {

  const [posts, setPosts] = useState([
    {username:"Satty",
     caption:"no caption",
     imageUrl:"https://instagram.fdel11-1.fna.fbcdn.net/v/t51.2885-19/s320x320/71186285_3021376311224610_5164292243195953152_n.jpg?_nc_ht=instagram.fdel11-1.fna.fbcdn.net&_nc_ohc=9G_1-bh8emgAX_Lwsak&oh=434fec58c62a99a12b906b86e1483fca&oe=5F684C69"
    },
    {username:"Tarun", 
    caption:"Setttttttt",
    imageUrl:"https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
    }
  ]);

  return (
    <div className="App">

    {/* Header */}
    <div className="app__header">
      <img
        className="app_headerImage" 
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="" />
    </div>
    <h1>New Post</h1>
    {
      posts.map(post => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))
    }
      
    </div>
  );
}

export default App;
