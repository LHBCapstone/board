import React, { Children } from 'react';

const CommonTableRow = ({Children}) => {
    return(
        <tr classNmae ="common-table-row">
            {
                children
            }
        </tr>
    )
}

export default CommonTableRow;