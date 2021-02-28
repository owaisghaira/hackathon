import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';

export const create_user = (data) => {
    return (dispatch) => {
        // console.log(data.password)
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                console.log('User account created & signed in!');
                dispatch({ type: "USERDATA", data: data })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }
}
export const create_company = (data) => {
    return (dispatch) => {
        // console.log(data.password)
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                console.log('User account created & signed in!');
                dispatch({ type: "COMPANY", data: data })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }
}
export const sign_in = (data) => {
    return (dispatch) => {
        auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                dispatch({ type: "USERDATA", data: user })


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = alert(error.message);
            });

    }
}
export const admin_sign_in = (data) => {
    return (dispatch) => {
        auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('loged in admin')
                dispatch({ type: "ADMIN", data: user })


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = alert(error.message);
            });

    }
}
export const company_sign_in = (data) => {
    return (dispatch) => {
        auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('loged in admin')
                dispatch({ type: "COMPANY", data: user })


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = alert(error.message);
            });

    }
}
export const sign_out = () => {
    return (dispatch) => {
        const user = []
        auth().signOut()
            .then(() => {
                alert('Sign-out successful')
                dispatch({ type: "USEROUT", data: user })
            }).catch((error) => {
                alert(error)
            });
    }
}
export const fetch_jobs = () => {
    let firedata = []
    return (dispatch) => {
        database().ref('/').child('jobs').on('child_added', data => {
            firedata.push(data.val())
        })
        dispatch({ type: "JOBS", data: firedata })
        // .then(() => {
        // }).catch((error) => {
        //     alert(error)
        // });
    }
}
export const fetch_profiles = () => {
    let firedata = []
    return (dispatch) => {
        database().ref('/').child('profile').on('child_added', data => {
            firedata.push(data.val())
        })
        dispatch({ type: "PROFILE", data: firedata })

    }
}
export const fetch_company = () => {
    let firedata = []
    return (dispatch) => {
        database().ref('/').child('company').on('child_added', data => {
            firedata.push(data.val())
        })
        dispatch({ type: "COMPANY", data: firedata })

    }
}