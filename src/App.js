import React, { useState } from 'react';
import Test from './components/TestMain';
import Admin from './components/Admin';
import Sinavlar from './components/Sinavlar';
import './App.css';
import LoginPage from './components/LoginSayfa';

function App() {
  let array = Array(4).fill("0%");
  array[0] = "100%";
  const [pageHeight, setPageHeight] = useState(array);

  const switchPage = (el)=>{
    let array = Array(4).fill("0%");
    array[el] = "100%";
    setPageHeight(array);
  };

  const [currentUser, setCurrentUser] = useState(undefined);

  const sinavlar = [
    {
      sinavIsmi: "Vize",
      sorular:{
        1:'Bozkırın tezenesi lakaplı rahmetli halk ozanı kimdir?',
        2:'Depremin büyüklüğünü ve süresini ölçen alete ne ad verilir ?',
        3:'Hangisi vücudumuzdaki kemik türlerinden değildir?',
        4:'Aşağıdaki dağlardan hangisi volkanik bir dağdır?',
        5:'Gülü ile meşhur olan ilimiz hangisidir?',
        6:'2022-2023 sezonunda Fenarbahçe futbol takımının teknik direktörü kimdir?',
        7:'Aşağıdakilerden hangisi Türkiye’nin komşusu bir ülke değildir?',
        8:'Magna Karta Anlaşması hangi ülkenin kralına sunulmuştur?',
        9:'ABD başkanlarından John Fitzgerald Kennedy’e suikast düzenleyerek öldüren kimdir?',
        10:'Fransız İhtilali kaç yılında gerçekleşmiştir?'
      },
      cevaplar:{
          1:{
              1:'Kıvırcık Ali',
              2:'Neşet Ertaş',
              3:'Aşık Veysel Şatıroğlu',
              4:'Aşık Şerif Mahzuni'
          },
          2:{
              1:'Sismometre',
              2:'Termometre',
              3:'Ampermetre',
              4:'Dinamometre'
          },
          3:{
              1:'Kısa Kemik',
              2:'Yassı Kemik',
              3:'Sert Kemik',
              4:'Uzun Kemik'
          },
          4:{
              1:'Kaçkar Dağı',
              2:'Süphan Dağı',
              3:'Erciyes Dağı',
              4:'Palandöken Dağı'

          },
          5:{
              1:'Tekirdağ',
              2:'Bursa',
              3:'Edirne',
              4:'Isparta'
          },
          6:{
              1:'Fatih Terim',
              2:'Sergen Yalçın',
              3:'Jorge Jesus',
              4:'Volkan Demirel'
          },
          7:{
            1:'İran',
            2:'Romanya',
            3:'Bulgaristan',
            4:'Ermenistan'
          },
          8:{
            1:'Fransa',
            2:'İtalya',
            3:'Danimarka',
            4:'İngiltere'
          },
          9:{
            1:'Jack Ruby',
            2:'Ezio Auditore de Firenze',
            3:'Lee Harvey Oswald',
            4:'Clay Shaw'
          },
          10:{
            1:'1895',
            2:'1789',
            3:'1699',
            4:'1765'
          }
      },
      dogruCevaplar:{
          1:'2',
          2:'1',
          3:'3',
          4:'3',
          5:'4',
          6:'3',
          7:'2',
          8:'4',
          9:'3',
          10:'2'
      },
    }

  ]

  const [veriler, setVeri] = useState([
    {
      kullaniciadi: "ogrenci",
      sifre: "ogrenci",
      isAdmin: false,
      sinavlar:[
        {
          sinavIsmi:"Vize",
          puan:-1
          
        },
        
      ]
    },
    {
      kullaniciadi: "ogretmen",
      sifre: "ogretmen",
      isAdmin: true,
    }
  ]);

  const [currentSinav, setCurrentSinav] = useState(undefined)
  
  const startSinav = (sinavAdi)=>{
    setCurrentSinav( sinavlar.find((element)=>element.sinavIsmi === sinavAdi))
    switchPage(3);
  }
  
  return (
    <div className="App">
      <div style={{height:pageHeight[0], width: "100%", overflow:'hidden', transition:"1s"}}>
        <LoginPage currentUser={currentUser} veriler={veriler} login={setCurrentUser} switchPage={switchPage}></LoginPage>
      </div>
      <div style={{height:pageHeight[1], width: "100%", overflow:'hidden', transition:"1s"}}>
        <Sinavlar switchPage={switchPage} startSinav={startSinav} currentUser={[currentUser, setCurrentUser]}></Sinavlar>  
      </div>
      <div style={{height:pageHeight[2], width: "100%", overflow:'hidden', transition:"1s"}}>
        <Admin veriler={veriler} currentUser={[currentUser, setCurrentUser]} switchPage={switchPage}></Admin>
      </div>
      <div style={{height: pageHeight[3], width: "100%", overflow:'hidden', transition:"1s"}}>
        <Test switchPage={switchPage} currentUser={currentUser} veriler={veriler} setVeri={setVeri} sinav={currentSinav} style={{height: pageHeight === "0%" ? "100%": "0%"}}></Test>
      </div>
    </div>
  );
}

export default App;

