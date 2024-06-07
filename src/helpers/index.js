export function comprobarFecha(renta,fechaInicio){
    const fechaFinalRenta=new Date(renta.fechaFinal);
    const fechaInicioRentaNueva=new Date(fechaInicio);
    
    if(fechaFinalRenta!=='' && (fechaInicioRentaNueva>fechaFinalRenta)){
        return true;
    }else{
        return false;
    }
}