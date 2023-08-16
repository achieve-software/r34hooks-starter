import React from 'react'
import { memo } from 'react';
const TaxComp = ({taxData}) => {
   console.log("Render => TaxComponenti");
    return (
        // <div>TaxComp:{taxData.ship} </div>
        <div>TaxComp:{taxData.current.ship} </div>
    )
}

export default memo(TaxComp)