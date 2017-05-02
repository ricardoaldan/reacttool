import * as React from 'react';
import {LocalizedValue} from '../models/localizedvalue';

export const TileComponent = (props: {member : LocalizedValue}) => {

     return (
       <tr>
         <td>
           <span>{props.member.displayValue}</span>
         </td>         
       </tr>
     );
}
