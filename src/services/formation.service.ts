
import { db } from '../../firebaseConfig'
import type { FormationType } from '../types/formation'

// }

export default {

  async getAllFormations (): Promise<FormationType[]> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        let documents: FormationType[]
        await db
          .collection('formations')
          .get()
          .then((querySnapshot: { docs: any[] }) => {
            documents = querySnapshot.docs.map((doc: { data: () => any }) => doc.data()) as FormationType[] // on fait ca pack qu'on recupere plein de doc dans querysnapshot
            resolve(documents)
          })
      } catch (error) {
        reject(error)
      }
    })
  },

  async addFormation (formation: any) {
    formation.id = ''
    try {
      const resp = await db.collection('formations').add(formation)
      console.log(resp)

      await db
        .collection('formations')
        .doc(resp.id)
        .update({ id: resp.id })
    } catch (error) {
      console.log(error)
    }
  },
  async updateformation (formation: FormationType) {
    await db
      .collection('formations')
      .doc(formation.id)
      .update(formation)
  },
  async deleteformation (id: string | undefined) {
    await db.collection('formations').doc(id).delete()
  }

}
