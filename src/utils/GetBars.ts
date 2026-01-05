import firestore from '@react-native-firebase/firestore';
type Props = {
    ownerName: string
}

async function getAllBars() {
    try{
        const response = await firestore().collection("Bars").get();

        const bars = response.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return bars;
    }
    catch (e){
        console.log('an error occur fetching data')
        return [];
    }
}

async function getYourBar(ownerName: string) {
    try{
        const response = await getAllBars();
        
        const myBars = response.filter(bar => bar.owner == ownerName);

        return myBars
    }catch(e){
        console.log('an error occur fetching data')
        return [];
    }
}
export  { getAllBars, getYourBar};