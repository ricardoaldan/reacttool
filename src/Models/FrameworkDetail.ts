import {LocalizedValue} from './LocalizedValue'
import {Person} from '../Models/Person'

export class FrameworkDetail{
    Framework : string;
    Year: number;
    Status: LocalizedValue;
    Percentage: number;
    Assignees: Array<Person>;
    
}