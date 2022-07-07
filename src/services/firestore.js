import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, getDoc, doc, collection } from "firebase/firestore"

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

export async function traerProductos(){
  const paletasCollection = collection(appFirestore, "paletas");

  const paletasSnapshot = await getDocs(paletasCollection);
  
  let respuesta = paletasSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return respuesta;
}

export async function traerUnProducto(id){
  
  const docRef = doc(appFirestore,"paletas", id);

  const docPaletaSnapshot = await getDoc(docRef);

  return {
    ...docPaletaSnapshot.data(), id: docPaletaSnapshot.id
  };
}

export default appFirestore;

