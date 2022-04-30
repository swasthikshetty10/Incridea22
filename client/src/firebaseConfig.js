import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore';
import {
    getAuth, signInWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyChSXTSYZm0-EqrOhVbnP9FNopgEifCqu4',
    authDomain: 'incridemo.firebaseapp.com',
    projectId: 'incridemo',
    storageBucket: 'incridemo.appspot.com',
    messagingSenderId: '599759960850',
    appId: '1:599759960850:web:0c378639e025467c15d1cb',
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)

export async function getUserInfo(uid) {
    if (uid) {
        const participants = [];
        const participantsRef = collection(db, 'Participants');
        const q = query(participantsRef, where('uid', '==', uid));
        const participantDocRef = await getDocs(q);
        participantDocRef.forEach((participant) => {
            participants.push(participant.data());
        });
        return participants[0];
    } else {
        throw new Error('No user logged in');
    }
}

export async function loginUser(email, password) {
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    return userCred.user
}


export const key = firebaseConfig.apiKey;