import { Social } from './social.interface';
import { Titlelog } from './titlelog.interface'; 
import { Updates } from './updates.interface';

export interface Timeline {
    localTitle: string;
    stateTitle: string;
    subheading?: string;
    socialMedia: Social[];
    introduction: string;
    titlelog: Titlelog[]; 
}