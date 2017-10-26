const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const ref = admin.database().ref();
exports.send = functions.auth.user().onCreate(event => {
    const uid = event.data.uid
    const email = event.data.email
    console.log(email)
    const newUserRef = ref.child(`/users/${uid}`)
    return newUserRef.set({
        uid: uid,
        email: email
    })
})

exports.sanitizePost = functions.database
    .ref('/patientdata/{patientdataId}')
    .onWrite(event => {
        const postkey = event.data.key;
        const post = event.data.val();
        const disease = post.disease.toUpperCase()
        return event.data.ref.child('uppercase').set(disease)
    })