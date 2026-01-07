import { getAllBars } from "./GetBars"


const filterBars = async(props) => {
    const bars = await getAllBars()
    
    return bars.filter(bar => {
    if (props.music && bar.musicType !== props.music) return false;
    if (props.age && bar.age !== props.age) return false;
    if (props.cost && bar.cost !== props.cost) return false;
    if (props.hours && bar.operationHours !== props.hours) return false;
    if (props.distance && bar.location !== props.distance) return false;

    return true;
  });
} 

export {filterBars}