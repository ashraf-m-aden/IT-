import { db } from "../../db.ts";

// interface Formation {
//     inscription: Boolean,
//     started: Boolean,
//     finished: Boolean,
//     numberOfMonth: Number,
//     professeurId: String,
//     startDate: String,
//     endDate: String,
//     students_inscris: Array,  // ici l'etudiant a payé
//     students_reserv: Array,   // ici il s'est juste inscrit à la session en ligne
//     courseId: String,
//     courseName: String

// }

export default {
  async getTraining() {
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
