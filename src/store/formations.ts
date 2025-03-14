import { defineStore } from "pinia";
import FormationService from "../services/formation.service.ts";
import type { FormationType } from "../types/formation.ts";
import { ref } from "vue";

export const formationStore = defineStore("formation", () => {

  const formationsData = ref<FormationType[]>([])
  const myFormations = ref<FormationType[]>([])


  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  const getMyFormations = () => {
    return myFormations.value;
  }
  const getAllformations = () => {
    return formationsData.value;
  }


  const setCoursesDisponibles = async () => {
    await FormationService.getFormationsEnCours().then((data: any) => {
      formationsData.value = data;
    });
  }


  return {formationsData,myFormations,setCoursesDisponibles,getAllformations,getMyFormations}

});

