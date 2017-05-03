import {FrameworkDetail} from '../Models/FrameworkDetail';
import {Person} from '../Models/Person';

let FrameworkDetailMockData : FrameworkDetail = {
        Framework :'3.5',        
        Year: 2017,
        Status: 'In Progress',
        Percentage: 80,
        Assignees:[{
            Name:"John D.", 
            PictureUrl:'https://vignette1.wikia.nocookie.net/sims/images/3/33/John_Doe.png'}, 
                    {   
            Name:"Jane D.", 
            PictureUrl:'https://vignette2.wikia.nocookie.net/sims/images/0/04/Jane_Doe.png'}]
    }

export default FrameworkDetailMockData;