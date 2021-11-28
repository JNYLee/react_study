import React, {useContext, memo} from "react";
import Td from "./Td";
import { TableContext } from "./MineSearch";
const Tr = memo(({rowIndex}) => {
    const { tableData } = useContext(TableContext);
    return (
        <tr>
            {tableData[0] && Array(tableData.length).fill().map((tr, i) => <Td rowIndex={rowIndex} cellIndex={i}/>)}
        </tr>
    )

});

export default Tr;