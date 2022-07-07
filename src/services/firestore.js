import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, getDoc, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAm0gYnfVHSYXmoVln4fsMIG9i8zpWcM7c",
  authDomain: "coderhouse-paddlesport.firebaseapp.com",
  projectId: "coderhouse-paddlesport",
  storageBucket: "coderhouse-paddlesport.appspot.com",
  messagingSenderId: "738743276874",
  appId: "1:738743276874:web:c91eb856c1da071d321db3",
  measurementId: "G-MPE22DYT3D"
};

const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){
  console.log(appFirestore);
}

export async function traerProductos(){
  const paletasCOllection = collection(appFirestore, "paletas");

  const paletasSnapshot = await getDocs(paletasCOllection);
  
  let respuesta = paletasSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return respuesta;
}

export async function traerUnProducto(id){
  const paletasCOllection = collection(appFirestore, "paletas");

  const paletaDoc = await getDoc(id, paletasCOllection);

  return paletaDoc;
}

export default appFirestore;

