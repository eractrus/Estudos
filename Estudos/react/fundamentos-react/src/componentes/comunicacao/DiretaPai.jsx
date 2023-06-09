import React from "react";

import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Mauricio de Abreu" idade={30} bool={true} />
            <DiretaFilho nome="Mattos Silva" idade={60} bool={true} />

        </div>
    )
}