import firestore from '@react-native-firebase/firestore';

export const storeDocumentWithId = async (
  collectionName: string,
  documentId: string,
  data: Record<string, any>
): Promise<void> => {
  try {
    await firestore()
      .collection(collectionName)
      .doc(documentId)
      .set(data);

    console.log('Document stored successfully');
  } catch (error) {
    console.log('Error storing document:', error);
    throw error;
  }
};