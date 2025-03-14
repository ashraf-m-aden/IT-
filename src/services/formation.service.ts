

import { db } from "../../firebaseConfig.ts";

// }

export default {
  async getFormationsEnCours() {
    let documents;
    await db
      .collection("formations") .where("inscription", "==", true)
      .get()
      .then((querySnapshot) => {
        documents = querySnapshot.docs.map((doc) => doc.data()); // on fait ca pack qu'on recupere plein de doc dans querysnapshot
        // do something with documents
      });
    return documents;
  },

  async getAllFormations() {
    let documents;
    await db
      .collection("formations")
      .get()
      .then((querySnapshot) => {
        documents = querySnapshot.docs.map((doc) => doc.data()); // on fait ca pack qu'on recupere plein de doc dans querysnapshot
        // do something with documents
      });
    return documents;
  },


}
// // retrieve a collection
// db.collection('documents')
//     .get()
//     .then(querySnapshot => {
//         const documents = querySnapshot.docs.map(doc => doc.data())
//         // do something with documents
//     })

// // retrieve a document
// db.collection('documents')
//     .doc(documentId)
//     .get()
//     .then(snapshot => {
//         const document = snapshot.data()
//         // do something with document
//     })
