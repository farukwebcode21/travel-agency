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
    const [isLoading, setISLoading] = useState(true);


    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();

    const signUsingGoogle = () => {
        return signInWithPopup(auth, googelProvider);

    }

    const logOut = () => {
        setISLoading(true);
        signOut(auth)
            .then(() => {
                alert('Sign Out Successfully ')
            })
            .finally(() => setISLoading(false));

    }
// user auth state change or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setISLoading(false);
        })
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        setUser,
        setISLoading,
        isLoading,
        signUsingGoogle,
        logOut
    }

}

export default  useFirebase;