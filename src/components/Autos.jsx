import { useState } from "react"
import ListarAutos from "./ListarAutos";
import {comprobarFecha} from "../helpers"

function Autos({ listCarros }) {
    const [autos,setAutos]=useState(listCarros);
    const todosLosAutos=listCarros;

    function handleClickBuscar(e){
        e.preventDefault();
        
        const seleccion=document.querySelector('#ciudades').value;
        const fechaInicio=document.querySelector('#fechaInicio').value;

        if(seleccion==='Todos' && fechaInicio==''){
            setAutos(todosLosAutos);
        }else if(seleccion!=='Todos' && fechaInicio!==''){
            setAutos(todosLosAutos.filter(auto=>auto.ciudad===seleccion && 
                comprobarFecha(auto.renta, fechaInicio))
            ); 
        }else if((seleccion==='Todos' || seleccion!=='') && fechaInicio!==''){
            setAutos(todosLosAutos.filter(auto=>comprobarFecha(auto.renta,fechaInicio)));
        }else if(seleccion!=='Todos' && fechaInicio==''){
            alert('¡Especifica fecha en la que quieras rentar!');
        }       
    }

  return (
    <div className="grid grid-rows-2 grid-cols-2 py-5">
        <form className="flex justify-center max-h-32 fixed w-1/2">
            <div className="grid gap-6 mb-4 grid-cols-2 p-2.5">
                <div className="grid grid-cols-2">
                    <label htmlFor="ciudades" className="font-semibold py-2">Localización</label>
                    <select name="ciudades" id="ciudades" className="bg-gray-300 font-semibold p-2" defaultValue="">
                        <option value="" disabled>--Escoger Ciudad--</option>
                        <option value="Todos">Todos</option>
                        <option value="Santa Marta">Santa Marta</option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Medellín">Medellín</option>
                    </select>
                </div>
                <div className="grid grid-cols-2">
                    <label htmlFor="fechaInicio" className="font-semibold py-2">Fecha Inicio</label>
                    <input type="date" id="fechaInicio" className="bg-indigo-600 font-semibold p-2"/>
                </div>
                <div className="grid grid-cols-2">
                    <label htmlFor="fechaFinal" className="font-semibold py-2">Fecha Final</label>
                    <input type="date" id="fechaFinal" className="bg-indigo-600 p-2 font-semibold"/>
                </div>
                <button onClick={handleClickBuscar} type="submit" className=" bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700">Submit</button>
            </div>
        </form>
        <div className="flex flex-col px-2.5 gap-4 border-l-2 col-start-2 col-end-2">
            <h1 className="flex justify-center text-2xl font-semibold">Carros Disponibles</h1>
            <div className="flex gap-3 mx-auto">
                <ListarAutos
                    listaCarros={autos}
                />
            </div>
        </div>
    </div>
  )
}

export default Autos