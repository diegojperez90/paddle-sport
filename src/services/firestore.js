import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where, setDoc, addDoc, Timestamp } from "firebase/firestore";

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

export async function traerProductoPorCategoria(marca){
  const paletasCollection = collection(appFirestore, "paletas");

  const q = query(paletasCollection, where("category", "==", marca));

  const paletasSnapshot = await getDocs(q);

  let respuesta = paletasSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return respuesta;
}

// export async function exportDataForFirestore(){
//   const productos = [
//     {
     
//       title: "Whip",
//       price: 20000,
//       stock: 4,
//       // imagen: WHIP,
//       category: "Royal",
//       description: "Paleta de control. Color negra con detalles azul y verde. Material de ficha de carbon."
//   },
//   {
    
//     title: "Whip",
//     price: 20000,
//     stock: 4,
//     // imagen: WHIP,
//     category: "Royal",
//     description: "Paleta de control. Color negra con detalles azul y verde. Material de ficha de carbon."
// },
// {
 
//   title: "Whip",
//   price: 20000,
//   stock: 4,
//   // imagen: WHIP,
//   category: "Royal",
//   description: "Paleta de control. Color negra con detalles azul y verde. Material de ficha de carbon."
// }
//   ];
//   const paletasCollection = collection(appFirestore, 'nuevasPaletas');

//   productos.forEach (item => {
//     const newDoc = doc(paletasCollection);
//     setDoc(newDoc, item).then( res => {
//       console.log('documento guardado:', newDoc.id)
//     }).catch( error => console.log('error', error))
//   })
// }

export async function createBuyOrder(dataOrder){
  const ordersCollection = collection(appFirestore, 'orders');
  const dateTimestamp = Timestamp.now()

  const dataOrderWithDate = {
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date: dateTimestamp
  }
  console.log(dataOrderWithDate);
  const orderCreated = await addDoc(ordersCollection, dataOrderWithDate);

  return orderCreated;
}

export default appFirestore;


