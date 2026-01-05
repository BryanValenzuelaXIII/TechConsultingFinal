import auth, { getAuth, signOut } from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { storage } from './MmkvStorage';

type Props = {
  email: string;
  password: string;
};

const FireBaseSignIn = async({email, password}: Props) =>{

        try{
            const user = await auth().createUserWithEmailAndPassword(email, password);
            storage.set('user.isGuest', false);
            storage.set("user.email", user.user.email ?? "")
            Alert.alert('Please check your email to confirm');
        } catch(e: any){
            Alert.alert('Registration failed: ' + e.message);
            console.log(e);
        }
    }

const FireBaseLog = async({email, password}: Props) =>{

        try{
            const user = await auth().signInWithEmailAndPassword(email, password);
            storage.set('user.isGuest', false);
            storage.set("user.email", user.user.email ?? "")
            Alert.alert('Login!');
        } catch(e: any){
            Alert.alert('Login failed: ' + e.message);
            console.log(e);
        }
    }

const FireBaseLogOut = async() =>{
    try{
        const authentication = getAuth();
        await signOut(authentication);
        storage.remove("user.email")
        Alert.alert("Successful logout");
    } catch(e: any){
        Alert.alert('Error logging out!');
        console.log("Could not log out", e.message);
    }
}

export {FireBaseSignIn, FireBaseLog, FireBaseLogOut}