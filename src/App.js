import React, { useState, useEffect } from 'react';
import Player from './components/Player';
import './App.css';

const App = () => {
  const [songs] = useState([
    {
      title: "Maragatha Naanayam",
      artist: "Ravi",
      img_src: "./images/img.jpeg",
      src: "./music/Maragatha_Naanayam.mp3",
    },
    {
      title: "Kadal",
      artist: "Ravi",
      img_src: "./images/img.jpeg",
      src: "./music/Moongil-Thottam.mp3",        
    },
    {
      title: "Sathuranga vettai",
      artist: "Sathyaprakash",
      img_src: "./images/img.jpeg",
      src: "./music/Munne_Yen_Munne.mp3",
    },
    {
      title: "Siragugal",
      artist: "Ravi",
      img_src: "./images/img.jpeg",
      src: "./music/Siragugal.mp3",
    },
    {
      title: "Nenjodu-Kalinthidu",
      artist: "Chandran",
      img_src: "./images/img.jpeg",
      src: "./music/Nenjodu-Kalinthidu.mp3",
    },
    {
      title: "Kadal",
      artist: "Ravi",
      img_src: "./images/img.jpeg",
      src: "./music/Nenjukkule.mp3",
    },
    {
      title: "Oru-Paarvaiyil",
      artist: "Chandran",
      img_src: "./images/img.jpeg",
      src: "./music/Oru-Paarvaiyil.mp3",
    },
    {
      title: "Maraigirai",
      artist: "Pranav Das",
      img_src: "./images/img.jpeg",
      src: "./music/Pagal-Iravai.mp3",
    },
    {
      title: "Pesugiren-Pesugiren",
      artist: "Chandran",
      img_src: "./images/img.jpeg",
      src: "./music/Pesugiren-Pesugiren.mp3",
    },
    {
      title: "Run",
      artist: "Hariharan",
      img_src: "./images/img.jpeg",
      src: "./music/Poi-Solla-Koodhathu.mp3",
    },
    {
      title: "Pookal-Pookum",
      artist: "Madharaasa pattinam",
      img_src: "./images/img.jpeg",
      src: "./music/Pookal-Pookum.mp3",
    },
    {
      title: "Mugamoodi",
      artist: "Aalap Raju",
      img_src: "./images/img.jpeg",
      src: "./music/Vaayamoodi-Summa-Iru-Da.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
    return (
    <div className="App">
     <Player 
     songs={songs}
     currentSongIndex={currentSongIndex}
     setCurrentSongIndex={setCurrentSongIndex}
     nextSongIndex={nextSongIndex}
     />
    </div>
  );
}

export default App;
