import { useState } from "react";
import Boton from "./guia-estilos/Boton";


function GuiaEstilosPage () {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <p className="h1">Guía de Estilos</p>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column mb-3">
                <Boton />
            </div>
        </>
        )
}

export default GuiaEstilosPage;