import { useState } from "react";

function Boton () {
    const [count, setCount] = useState(0);
    return (
            <>
                <div className="p-2">
                <h3>
                    Botones principales 
                    <small className="text-muted"> ( uso común )</small>
                    </h3>
                </div>
                <div className="p-2">
                    <div className="d-flex flex-row mb-3">
                        <div className="p-2"><button className="btn btn-primary">Primario</button></div>
                        <div className="p-2"><button className="btn btn-secondary">Secundario</button></div>
                        <div className="p-2">
                            <button type="button" className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
                                Contador <span className="badge text-bg-secondary">{count}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Boton;