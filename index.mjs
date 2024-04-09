// import "dotenv/config";
import admin from "firebase-admin";
import serviceAccount from "./iotpi-1b831-firebase-adminsdk-9p7mf-f4a433c9ac.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iotpi-1b831-default-rtdb.firebaseio.com",
});

const db = admin.database();
const ref = db.ref("/ledstates");
// ref.set({
//   blue: false,
//   red: false,
// })

ref.on('value', snapshot => {
  const ledstates = snapshot.val();
  console.log('ledstates:', ledstates);
});

ref.on("child_changed", snapshot => {
  const key = snapshot.key;
  const value = snapshot.val();

  console.log(`key: ${key}   value: ${value}`)
})
