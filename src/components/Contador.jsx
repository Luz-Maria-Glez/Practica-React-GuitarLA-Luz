
import { useState } from 'react';

function Contador() {

    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const disminuir = () => {
        setContador(contador - 1);
    };

    const reiniciar = () => {
        setContador(0);
    };

    return (
        <div className="contador-container text-center my-5">

            <h2 className="contador-titulo">
                Contador
            </h2>

            <p className="contador-numero">
                {contador}
            </p>

            <div className="contador-botones">

                <button
                    type="button"
                    className="btn-contador btn-aumentar"
                    onClick={aumentar}
                >
                    + Aumentar
                </button>

                <button
                    type="button"
                    className="btn-contador btn-disminuir"
                    onClick={disminuir}
                >
                    − Disminuir
                </button>

                <button
                    type="button"
                    className="btn-contador btn-reiniciar"
                    onClick={reiniciar}
                >
                    ↻ Reiniciar
                </button>

            </div>

        </div>
    );
}

export default Contador;
