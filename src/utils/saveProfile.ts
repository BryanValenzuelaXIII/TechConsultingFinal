import { storage } from "./MmkvStorage"

type Props = {
    name: string,
    password: string,
    favErase: boolean,
}

function saveProfile({name, password='', favErase= false}: Props){
    
    if(name != storage.getString('name'))
        storage.set('name', name);
    
    if(password){
        //update with firebase password
    }


    if(favErase){
        storage.remove('favBars');
    }
    
    //save into the cloud 
}

export {saveProfile}