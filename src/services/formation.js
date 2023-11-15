import { db } from "../../db";

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

import { ref } from "vue";
export default {
  async getTraining() {
    let documents;
    await db
      .collection("formations", (ref) => ref.where("inscription", "==", true))
      .get()
      .then((querySnapshot) => {
        documents = querySnapshot.docs.map((doc) => doc.data()); // on fait ca pack qu'on recupere plein de doc dans querysnapshot
        // do something with documents
      });
    return documents;
  },
  async getMyTraining() {
    var docs = [];

    let user = store.getters.getUserData; // je recuperer les données de l'user connecté dans vuex

    if (user == null) {
      const id = localStorage.getItem("idUser");
      await store.dispatch("afterLogin", id);

      user = store.getters.getUserData; // je recuperer les données de l'user connecté dans vuex
    }

    user.reserved.forEach(async (id) => {
      await db
        .collection("formations")
        .doc(id)
        .get()
        .then((querySnapshot) => {
          const document = querySnapshot.data(); // on fait ca parce que c'est un seul document qu'on recupere dans querysnapshot
          // do something with documents
          docs.push(document);
        });
    });

    return docs;
  },

  async registerFormation(formation) {
    let user = store.getters.getUserData; // je recuperer les données de l'user connecté dans vuex

    user.reserved.push(formation.id); // j'ajoute la nouvelle formation aux formationx existantes
    await db
      .collection("users")
      .doc(user.id)
      .update({ reserved: user.reserved }); // je mets à jours la table

    formation.reserved.push(user.id); // j'ajoute la nouvelle formation aux formationx existantes

    await db
      .collection("formations")
      .doc(formation.id)
      .update({ reserved: formation.reserved }); // je mets à jours la table
    store.dispatch("setMyCourses");
  },
};
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
