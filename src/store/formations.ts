import { defineStore } from 'pinia'
import FormationService from '../services/formation.service'
import type { FormationType } from '../types/formation'
import { ref, toRaw } from 'vue'

export const formationStore = defineStore('formation', () => {
  const formationDispo = ref<FormationType[]>([])
  const allFormation = ref<FormationType[]>([])
  const myFormations = ref<FormationType[]>([])

  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  const getMyFormations = () => {
    return myFormations.value
  }
  const getAllformations = () => {
    return allFormation.value
  }

  const getAllformationsDispo = () => {
    return formationDispo.value
  }

  const convertToJson = (data:any) => {
    return JSON.parse(JSON.stringify(toRaw(data)))
  }

  const retrieveAllFormation = async () => {
    await FormationService.getAllFormations().then((data: FormationType[]) => {
      formationDispo.value = data.filter((f) => { return f.inscription })
      allFormation.value = data
    })
  }

  const addFormation = async (formation:FormationType) => {
    await FormationService.addFormation(convertToJson(formation)).then(async () => {
      await retrieveAllFormation()
    })
  }

  const deleteformation = async (id:string) => {
    await FormationService.deleteformation(id).then(async () => {
      await retrieveAllFormation()
    })
  }

  const updateFormation = async (formation:FormationType) => {
    await FormationService.updateformation(convertToJson(formation)).then(async () => {
      await retrieveAllFormation()
    })
  }

  return { getAllformationsDispo, retrieveAllFormation, getAllformations, getMyFormations, addFormation, updateFormation, deleteformation }
})
