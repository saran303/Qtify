import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
// import { Card } from '@mui/material';
import Section from './Component/Section/Section';
import styles from './App.module.css'
import AccordionUsage from './Component/FAQs/Faqs';
import Line from './Component/Line/Line';

function App() {
const [topAlbumsData, setTopAlbumsData] = useState([]);
const [newAlbumsData, setNewAlbumsData] = useState([]);
const [songsData, setSongsData] = useState([]);
const [filteredDataValues, setFilteredDataValues] = useState([]);
const [value, setValue] = useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue)
  generateSongsData(newValue)
}

const generateTopAlbums = async () => {
  try{
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  }catch(err){
    console.error(err);
  }
};
const generateNewAlbums = async () => {
  try{
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  }catch(err){
    console.error(err);
  }
};
const generateAllSongs = async () => {
  try{
    const data = await fetchSongs();
    setSongsData(data);
    setFilteredDataValues(data)
  }catch(err){
    console.error(err);
  }
};

const filteredData = (val) => {
  setFilteredDataValues(val)
}
const generateSongsData = (value) => {
  let key;
  if (value === 0) {
    filteredData(songsData);
    return;
  } else if (value === 1) {
    key = "rock";
  } else if (value === 2) {
    key = "pop";
  } else if (value === 3) {
    key = "jazz"
  } else if (value === 4) {
    key = "blues"
  }
  const res = songsData.filter((item) => item.genre.key === key);
  filteredData(res);
};

// console.log(topAlbumsData)
useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongs();
},[])
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section 
          data={topAlbumsData} 
          title="Top Albums" 
          type="album"
          filteredDataValues={topAlbumsData}
        />
      </div>
      <div className={styles.sectionWrapper}>
        <Section 
          data={newAlbumsData} 
          title="New Albums" 
          type="album"
          filteredDataValues={newAlbumsData}
        />
      </div>
      <Line />
      <div className={styles.sectionWrapper}>
        <Section 
          data={songsData} 
          title="Songs" 
          type="song"
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
          // carouselToggle={carouselToggle}
          // handleToggle={handleToggle}
        />
      </div>
      <Line />
      <AccordionUsage />
    </div>
  );
}

export default App;
