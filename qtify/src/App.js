import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './api/api';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
// import { Card } from '@mui/material';
import Section from './Component/Section/Section';
import styles from './App.module.css'

function App() {
const [topAlbumsData, setTopAlbumsData] = useState([]);

const generateTopAlbums = async () => {
  try{
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  }catch(err){
    console.error(err);
  }
};
// console.log(topAlbumsData)
useEffect(() => {
    generateTopAlbums();
},[])
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} title="Top Albums" type="album"/>
      </div>
    </div>
  );
}

export default App;
