import {LocalizedValue} from '../models/localizedvalue';
import FrameWorkMockData from './frameworkmockdata';


class FrameworkAPI {

  private _clone (item) {
  	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  // Just return a copy of the mock data
getAllFramework() : Array<LocalizedValue> {
		return this._clone(FrameWorkMockData);
	}
}

export const frameworkAPI = new FrameworkAPI();