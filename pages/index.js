// pages/index.js
import ReactPlayer from 'react-player';
import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Link from "next/link";

//data
import { getAllPosts } from '../lib/api';
import Layout from "../components/Layout";
import styles from"../styles/index.module.scss";

const Index = () => (
  <Layout>
    <div className={styles.container}>
    <div className={styles.show_hero}>
      <div className={styles.show_page}>
          <div className={styles.show_title}>
        </div>
        <div className={styles.show_page_section}>
       <div className={styles.video_outer}>
       <div className={styles.show_video}>
       <ReactPlayer 
       width="100%"
       height="100%"
       url="https://www.youtube.com/watch?v=gbT7Mj0n_0w" 
       controls
       //playing
       />
       </div>
       <div className={styles.slug}>
       </div>  
       </div>
      </div>
      </div>
      </div>
    
    <div className={styles.clips_show}>
      <h1 id="clips" className={styles.floatme}>Clips</h1>
    
        <div className={styles.grid}>
          <div className={styles.card_container}>
            <a href="" className={styles.card}>
          <div class="video-container">
  <iframe src="https://www.youtube.com/embed/cXi_I2QnRzE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
          </a>

          <a href="" className={styles.card}>
         <div class="video-container">
  <iframe src="https://www.youtube.com/embed/SaVwjDsBxf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
          </a>

          <a href="" className={styles.card}>
          <div class="video-container">
  <iframe src="https://www.youtube.com/embed/C-GwwV6hu0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
          </a>
          </div>
          

          
        </div>
      
      </div>

      <div className={styles.line}></div>
      <div className={styles.about_us}>
        <h1 id="shengbook" className={styles.aboutus_h1}>Your Sheng Handbook</h1>
        <span className={styles.about_img}>
       {/*<img className={styles.img}src="/title.png" alt="title"/>*/}
        </span>
        <p className={styles.about_content}> content comming soon...</p>

      </div>

    </div>
  </Layout>
);

export default Index;


