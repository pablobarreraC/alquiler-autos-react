function ListarAutos({listaCarros}) {

    function rentar(e){
        e.preventDefault();

        const fechaInicio=document.querySelector('#fechaInicio').value;
        const fechaFinal=document.querySelector('#fechaFinal').value;

        if(fechaInicio!=='' && fechaFinal!==''){
            const id=e.target.parentElement.parentElement.getAttribute('key');
            
            listaCarros.map((auto,index)=>{
                if(index==id){
                    auto.renta.fechaInicio=fechaInicio;
                    auto.renta.fechaFinal=fechaFinal;
                }
                alert(fechaInicio);
                alert(auto.fechaInicio);
            });
        }
    }

    return listaCarros.map((auto,index)=>(
        <div key={index} className="w-64 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={auto.img} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{auto.modelo}</div>
                <p className="text-gray-700 text-base">
                    {auto.ciudad}
                </p>
                <p className="text-gray-700 text-base">
                    {auto.disponible}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                <button onClick={rentar} type="button" className="font-semibold bg-indigo-600 rounded-full px-3 py-1 text-sm">Rentar</button>
            </div>
        </div>
    ));
}

export default ListarAutos