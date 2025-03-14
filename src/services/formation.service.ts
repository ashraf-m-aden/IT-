

import { db } from "../../firebaseConfig.ts";
import type { FormationType } from "../types/formation.ts";

// }

export default {


  async getAllFormations(): Promise<FormationType[]> {
   return  new Promise(async(resolve,reject)=>{
      try {
        let documents: FormationType[];
        await db
          .collection("formations")
          .get()
          .then((querySnapshot) => {
            documents = querySnapshot.docs.map((doc) => doc.data()) as FormationType[] ; // on fait ca pack qu'on recupere plein de doc dans querysnapshot
            resolve(documents )
          });
      } catch (error) {
        reject(error)
      }
    })
  },

  async addFormation(formation: any) {
    // tslint:disable-next-line:max-line-length
    // const newProf = Object.assign({}, professor); // on utilise object assign pack firebase refuse un objet personalisé, c pour faire un objet pure javascript
    formation.id = "";
    const resp = await db.collection("formations").add(formation);
    await db
      .collection("formations")
      .doc(resp.id)
      .update({ id: resp.id });


  },
  async updateformation(formation: FormationType) {

    await db
      .collection("formations")
      .doc(formation.id)
      .update(formation);

  },
  async deleteformation(id: string | undefined) {
    await db.collection("formations").doc(id).delete();
  }



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
