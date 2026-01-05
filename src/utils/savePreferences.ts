import { storage } from "./MmkvStorage"

type Props = {
    musicType: string,
    cost: boolean,
    hours: number,
    distance: number,
    age: number
}

function savePreferences({musicType ='', cost=true, hours=1600, distance=50, age=21}: Props){
    storage.set('user.musicType', musicType);
    storage.set("user.cost", cost);
    storage.set("user.hours", hours);
    storage.set("user.distance", distance);
    storage.set("user.age", age);
    
    //save into the cloud 
}

export default savePreferences;