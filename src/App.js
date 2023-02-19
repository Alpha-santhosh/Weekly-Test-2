import './App.css';
import Card from './components/Card';
import Header from './components/Header';

const data =[
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/DWTC-99c4926050d82ed27239c4dfcd379292.jpg",
    name:"DWTC"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/DxbAirportConcordeD-d5adef77d08a3c8a37325c08794892c8.jpg",
    name:"Dxb Airport Concorde D"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/MauiRestaurant-111ecc4cac563b8477d39a9e7031a856.jpg",
    name:"Mani-Restaurant"
  },
  // section-2
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/Nail-paint%20bar-861208074988c2bac603b43f493f4787.jpg",
    name:"Nail-paintbar"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/OfficeB-f959878578d6f43ddce5f5302ddf6019.jpg",
    name:"Office in Business Bay"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/AtlantisThePalm-578031b4ae2cf7b7cb98cc2532d58f46.jpg",
    name:"Atlantis, The Palm"
  },
  // section-3
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/Office-69bc33b798e71227488717df5acd81e7.jpg",
    name:"Office"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/Sofitel-97bf54bd9cf3a6e45adc6842d7095668.jpg",
    name:"Residential Tower"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/MauiRestaurant-111ecc4cac563b8477d39a9e7031a856.jpg",
    name:"Sofitel"
  },
  // section-04
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/THE-GYM-Dubai-aa9513e040a39a1d15a9500d82304d33.png",
    name:"The Gym Dubai"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/Villa-ef59ad84361a56fbc827761ec5da9a51.jpg",
    name:"Villa"
  },
  {
    URL:"https://www.urbansciencemep.com/_next/static/images/Warehouse-8b8d67bca427d1d67fd27c73ab42b6a2.jpg",
    name:"Warehouse"
  },
]

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 style={{fontSize:"50px",color:"#596AFF",fontWeight:"bold"}}>Our Projects</h1>
      <div className='section'>
        <div className='container'> 
          <Card url = {data[0].URL} name ={data[0].name}/>
          <Card url = {data[1].URL} name ={data[1].name}/>
          <Card url = {data[2].URL} name ={data[2].name}/>

          <Card url = {data[3].URL} name ={data[3].name}/>
          <Card url = {data[4].URL} name ={data[4].name}/>
          <Card url = {data[5].URL} name ={data[5].name}/>

          <Card url = {data[6].URL} name ={data[6].name}/>
          <Card url = {data[7].URL} name ={data[7].name}/>
          <Card url = {data[8].URL} name ={data[8].name}/>

          <Card url = {data[9].URL} name ={data[9].name}/>
          <Card url = {data[10].URL} name ={data[10].name}/>
          <Card url = {data[11].URL} name ={data[11].name}/>

          <Header/>
        </div>
      </div>
    </div>
  );
}

export default App;
