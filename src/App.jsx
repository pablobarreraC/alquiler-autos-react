import Header from "./components/Header"
import Autos from "./components/Autos"
import Renta from "./components/Renta";
import { Routes, Route } from "react-router-dom";
import  Layout from "./components/Layout";
import ListarAutos from "./components/ListarAutos";
function App() {
  const carros=[
    { modelo:'Sentra-2020', 
      ciudad: 'Santa Marta',
      disponible:true,
      img:'./public/1366_2000.jpg',
      precio:20000,
      renta:{
        fechaInicio:'06-07-2024',
        fechaFinal:'06-10-2024', //formato mm/dd/aaaa
        total:0
      }},

    { modelo:'Stedway',
      ciudad: 'Medellín',
      disponible:true,
      img:'./public/RT_V_bc78af03e28541109d4095c6f94dcf98.jpg',
      precio:25000,
      renta:{
        fechaInicio:'01-01-2000',
        fechaFinal:'01-01-2000',
        total:0
      }}
  ];

  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Header/>}/>
        <Route path="autos" element={<Autos/>}/>
        <Route path="listarAutos" element={<ListarAutos/>}/>
        <Route path="renta" element={<Renta/>}/>
        </Route>
      </Routes>
    </div>
   // <div className="general">
   //   <Header/>
   //   <Autos 
   //     listCarros={carros}
    //  />
      
    //</div>
  )
}

export default App
