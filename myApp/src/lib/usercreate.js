import { firestore } from '$lib/firebase.js';

const addUser = async (user) => {
  const userRef = firestore.collection('Users');
  await userRef.add(user);
};

export default addUser;