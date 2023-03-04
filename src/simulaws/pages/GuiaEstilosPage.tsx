import { useState } from "react";
import Boton from "./guia-estilos/Boton";


function GuiaEstilosPage () {
    const [count, setCount] = useState(0);
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="boton-tab" data-bs-toggle="tab" data-bs-target="#boton-tab-pane" type="button" role="tab" aria-controls="boton-tab-pane" aria-selected="true">
                        Botones
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="otro-tab" data-bs-toggle="tab" data-bs-target="#otro-tab-pane" type="button" role="tab" aria-controls="otro-tab-pane" aria-selected="false">
                        Otros                    
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="boton-tab-pane" role="tabpanel" aria-labelledby="boton-tab"><Boton /></div>
                <div className="tab-pane fade" id="otro-tab-pane" role="tabpanel" aria-labelledby="otro-tab" >...</div>
            </div>
        </>
        )
}

export default GuiaEstilosPage;