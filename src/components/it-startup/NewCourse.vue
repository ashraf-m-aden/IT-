<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Nouveau cours</h2>
            <div class="bar"></div>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../assets/img/shape1.png" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape3">
        <img src="../../assets/img/shape3.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape4">
        <img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape5">
        <img src="../../assets/img/shape5.png" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape7">
        <img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
    </div>
    <!-- End Page Title -->
    <!-- Start Pricing Area -->
    <section class="pricing-area bg-f9f6f6">
      <div class="container">


        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">

            <div class="mb-3">
              <label for="" class="form-label">Nom</label>
              <input type="text" class="form-control" v-model="newFormation.courseName" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Prix</label>
              <input type="text" class="form-control" v-model="newFormation.price" />
              <label for="" class="form-label">Mois</label>

              <input type="text" class="form-control" v-model="newFormation.numberOfMonth" />
            </div>
            <div class="mb-3">
              <label for="a" class="form-label">Description</label>
              <textarea type="text" cols="30" rows="10" class="form-control-plaintext"
                v-model="newFormation.description" id="a"></textarea>

            </div>
            <div class="mb-3">
              <label for="" class="form-label">Date de début</label>
              <input type="date" name="" id="" class="form-control" v-model="newFormation.startDate">
            </div>

            <button v-if="isLoading" class="btn btn-primary" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>

            <button v-else type="submit" :disabled="isDisabled" class="btn btn-primary" @click="addFormation()">
              Demarré
            </button>

          </div>


        </div>
      </div>

      <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg"
          alt="IT+ formation cours informatique djibouti">
      </div>
      <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg"
          alt="IT+ formation cours informatique djibouti">
      </div>
      <div class="shape7"><img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
      <div class="shape4"><img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
    </section>
    <div class="d-table mt-5">
      <div class="d-table-cell">
        <div class="container">
          <h2>Liste des formations</h2>
          <div class="bar"></div>
        </div>
      </div>
    </div>
    <section class="pricing-area bg-f9f6f6">
      <div class="container-fluid">


        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">Cours</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Date de début</th>
                    <th scope="col">Max student</th>
                    <th scope="col">Description</th>
                    <th scope="col">Inscription ouvert</th>
                    <th scope="col">Nbre inscris</th>
                    <th scope="col">Nbre interessé</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="formation.enabled ? 'table-success' : 'table-warning'"
                    v-for="(formation, index) in allFormations" :key="index">
                    <td scope="row">
                      <input type="text" name="" v-model="formation.courseName" id="">
                    </td>
                    <td>
                      <input type="text" name="" v-model="formation.price" id="">
                    </td>
                    <td>
                      <input type="text" name="" v-model="formation.numberOfMonth" id="">
                    </td>
                    <td>

                      {{ formatDate(formation.startDate ) }}
                      <input type="date" v-model="formation.startDate">
                    </td>
                    <td>
                      <input type="text" name="" v-model="formation.maxStudents" id="">
                    </td>
                    <td>
                      <textarea type="text" cols="30" rows="10" class=" form-control-plaintext"
                        v-model="formation.description" id=""></textarea>
                    </td>
                    <td>


                      <div class="d-flex gap-3">
                        <div v-for="option in [true, false]" class="form-check">
                          <input class="form-check-input" type="radio" :name="formation.courseName" :value="option"
                            v-model="formation.inscription" :id="formation.courseName" />
                          <label class="form-check-label" :for="formation.courseName">{{ option ? "Demarré" : "Aretté"
                          }}</label>
                        </div>
                      </div>


                    </td>
                    <td>
                      <ul class="list-group">
                        <li v-for="(student, index) in formation.students" :key="index" class="list-group-item">
                          <button class="bg-danger text-light small float-end"
                            @click="delStudent(formation, student)">Del</button>
                          Nom:{{ student.name }}
                          <br>
                          Email:{{ student.email }}
                          <br>
                          Numero:{{ student.mobile }}
                        </li>
                      </ul>
                    </td>
                    <td>

                      <ul class="list-group">
                        <li v-for="(student, index) in formation.interestedStudents" :key="index" class="list-group-item">
                        
                          Nom:{{ student.name }}
                          <br>
                          Email:{{ student.email }}
                          <br>
                          Numero:{{ student.mobile }}
                        </li>
                      </ul>
                    </td>
                    <td>
                      <div class="d-grid gap-2">
                        <button type="button" name="" id="" class="btn btn-primary" @click="updateFormation(formation)">
                          Mettre à jour
                        </button>
                      </div>
                      <div class="d-grid gap-2" v-if="formation.enabled">
                        <button type="button" name="" id="" class="btn btn-danger" @click="toggleFormation(formation)">
                          Desactiver
                        </button>
                      </div>
                      <div class="d-grid gap-2" v-else>
                        <button type="button" name="" id="" class="btn btn-success" @click="toggleFormation(formation)">
                          Activer
                        </button>
                      </div>

                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>


        </div>
      </div>

      <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg"
          alt="IT+ formation cours informatique djibouti">
      </div>
      <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg"
          alt="IT+ formation cours informatique djibouti">
      </div>
      <div class="shape7"><img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
      <div class="shape4"><img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
    </section>
    <!-- End Pricing Area -->
  </div>
</template>
<script setup lang="ts">
import { computed, ref, } from 'vue';
import { FormationType } from '../../types/formation';
import { Timestamp } from "firebase/firestore";


import { useToast } from 'vue-toastification'
import { formationStore } from '../../store/formations';
import type { UserType } from '../../types/user';
const store = formationStore()
const toast = useToast()
const isLoading = ref(false)
const newFormation = ref(new FormationType())

const addFormation = async () => {
  isLoading.value = true;
  try {

    await store.addFormation(newFormation.value)
    toast.success("Formation enregistrée avec succés")

    newFormation.value = new FormationType()
    isLoading.value = false;

  } catch (error: any) {
    toast.warning(error.toString())
    isLoading.value = false;


  }
}

const delStudent = async (formation: FormationType, student: UserType) => {
  formation.students = formation.students.filter((item) => item.email != student.email)
  await updateFormation(formation)

}
const updateFormation = async (formation: FormationType) => {
  isLoading.value = true;
  try {

    await store.updateFormation(formation)
    toast.success("Formation mis à jour avec succés")
    newFormation.value = new FormationType()
    isLoading.value = false;

  } catch (error: any) {
    toast.warning(error.toString())
    isLoading.value = false;


  }
}

const toggleFormation = async (formation: FormationType) => {
  isLoading.value = true;
  try {
    formation.enabled = !formation.enabled;
    await store.updateFormation(formation)
    toast.success("Formation mis à jour avec succés")
    newFormation.value = new FormationType()
    isLoading.value = false;

  } catch (error: any) {
    toast.warning(error.toString())
    isLoading.value = false;


  }
}

const allFormations = computed(() => {

  return store.getAllformations()
})

const isDisabled = computed(() => {
  if (newFormation.value.courseName == "") {
    return true
  } else {
    return false
  }
})

const formatDate = (date: Date | Timestamp) => {

return new Date(date.toString()).toLocaleDateString()

}
</script>
