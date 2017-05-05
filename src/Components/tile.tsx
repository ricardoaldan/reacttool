import * as React from 'react';
import {LocalizedValue} from '../models/localizedvalue';
import {ProgressIndicator} from 'office-ui-fabric-react/lib/ProgressIndicator';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';

export const TileComponent = (props: {member : LocalizedValue}) => {

     return (
       <tr>
         <td>
           
           <span>{props.member.displayValue}</span>
            
           <ProgressIndicator label="Customer Controls" ariaValueText="50/50" percentComplete={.5} className="testClass" />
         </td>         
       </tr>
     );
}
