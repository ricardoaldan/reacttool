import * as React from 'react';
import {LocalizedValue} from '../models/localizedvalue';
import {frameworkAPI} from '../api/frameworkapi';
import {TileComponent} from './tile'

interface Props {
}

interface State {
  members : Array<LocalizedValue>
}


export class FrameWorkTileComponent extends React.Component<Props, State> {

  constructor(props : Props){
        super(props);
        // set initial state
        this.state = {members: []};
  }


   public componentWillMount() {
     this.setState({members: frameworkAPI.getAllFramework()})
   }

   public render() {

       return (
        <div className="row-no-margin">
          <h2> Review Framework </h2>
          <table className="table">            
            <tbody>
              {
                this.state.members.map((member : LocalizedValue) =>
                  <TileComponent member = {member}/>
                )
              }
            </tbody>
          </table>
        </div>
       );
  }
}
