import {useState, useEffect} from 'react'
import {
    GoogleAuthProvider,
    getAuth, signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();

    const signUsingGoogle = () => {
        return signInWithPopup(auth, googelProvider);


    }

    const logOut = () => {

        signOut(auth)
            .then(() => {})

    }
// user auth state change or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }

        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        signUsingGoogle,
        logOut
    }

}

export default  useFirebase;