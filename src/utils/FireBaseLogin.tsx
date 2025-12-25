import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type Props = {
  email: string;
  password: string;
};

const FireBaseSignIn = async({email, password}: Props) =>{

        try{
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('Please check your email to confirm');
        } catch(e: any){
            Alert.alert('Registration failed: ' + e.message);
            console.log(e);
        }
    }

const FireBaseLog = async({email, password}: Props) =>{

        try{
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('Login!');
        } catch(e: any){
            Alert.alert('Login failed: ' + e.message);
            console.log(e);
        }
    }

export {FireBaseSignIn, FireBaseLog}