import firestore from '@react-native-firebase/firestore';

export const FireBaseUserStore = async (
  collectionName: string,
  
  data: Record<string, any>
): Promise<void> => {
  try {
    await firestore()
      .collection(collectionName)
      .add(data);

    console.log('Document stored successfully');
  } catch (error) {
    console.log('Error storing document:', error);
    throw error;
  }
};