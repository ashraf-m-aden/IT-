<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Inscrivez-vous à nos formations disponibles</h2>
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
          <div class="col-lg-4 col-md-6 col-sm-6 m-auto" v-for="(formation, index) in allFormations" :key="index">
            <div class="pricing-table">
              <div class="pricing-header">
                <h3> {{ formation?.courseName }} </h3>
              </div>

              <div class="price">
                <span>10000<sup>Fdj</sup> <span>/Mois</span></span>
                <br>
                <span>Pendant {{ formation?.numberOfMonth }} mois </span>

              </div>

              <div class="price">
                <div class="progress">
                  <div class="progress-bar bg-primary" role="progressbar" :style="{ width: progress(formation) + '%' }"
                    :aria-valuenow="progress(formation)" aria-valuemin="0" :aria-valuemax="formation.maxStudents">
                    {{ formation.students.length }} / {{ formation.maxStudents }}
                  </div>
                </div>
              </div>
              <div class="description">
                <h6>Démarre le {{ formatDate(formation.startDate ) }}</h6>
                <p>
                  {{ formation.description }}
                </p>
              </div>

              <div class="pricing-footer d-flex justify-content-between p-2">
                <a href="#" class="btn btn-success" @click="openModal(formation, true)">Je m'inscris! 💪👩‍🎓</a>
                <a href="#" class="btn btn-primary" @click="openModal(formation, false)">Je suis interessé! 👀</a>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" :class="{ show: showModal }" :style="{ display: showModal ? 'block' : 'none' }">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Vous vous enregistré à cette formation: {{ selectedFormation.courseName }}
                  </h5>
                  <button type="button" class="btn-close" @click="showModal = false"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="" class="form-label">Mon nom</label>
                    <input type="text" class="form-control" name="" id="" v-model="newStudent.name" />

                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Mon email</label>
                    <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" 
                      placeholder="abc@mail.com" v-model="newStudent.email" />
                      <p v-if="isEmailDisabled" class="text-danger"><em>Cet email est deja utilisé pour ce cours</em></p>

                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Mon numéro</label>
                    <input type="number" class="form-control" name="" id="" placeholder="77"
                      v-model="newStudent.mobile" />

                  </div>

                </div>
                <div class="modal-footer">
                  <button class="btn btn-secondary" @click="register(selectedFormation)" :disabled="isDisabled">Je
                    m'enregistre</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal interested -->
          <div class="modal fade" :class="{ show: showModalInterestd }" :style="{ display: showModalInterestd ? 'block' : 'none' }">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Vous êtes interessé par cette: {{ selectedFormation.courseName }} </h5>
                  <button type="button" class="btn-close" @click="showModalInterestd = false"></button>
                </div>
                <div class="modal-body">
                  <p>Indiquez vos coordonnés vous serez contacté! 😌😄</p>
                  <div class="mb-3">
                    <label for="" class="form-label">Mon nom</label>
                    <input type="text" class="form-control" name="" id="" v-model="newStudent.name" />

                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Mon email</label>
                    <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"                       placeholder="abc@mail.com" v-model="newStudent.email" />
                      <p v-if="isEmailDisabled2" class="text-danger"><em>Cet email est deja utilisé pour ce cours</em></p>

                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Mon numéro</label>
                    <input type="number" class="form-control" name="" id="" placeholder="77"
                      v-model="newStudent.mobile" />

                  </div>

                </div>
                <div class="modal-footer">
                  <button class="btn btn-secondary" @click="imInterested(selectedFormation)" :disabled="isDisabled">Me
                    contacter</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Backdrop -->
          <div v-if="showModal || showModalInterestd" class="modal-backdrop fade show"></div>

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
    <div class="col-12">
      <Email_fr :name="newStudent.name" :course="selectedFormation.courseName" ref="mail"></Email_fr>
    </div>
    <!-- End Pricing Area -->
  </div>
</template>
<script setup lang="ts">
import { computed, ref, } from 'vue';
import { formationStore } from '../../store/formations';
import { FormationType } from '../../types/formation';
import type { Timestamp } from 'firebase/firestore';
import { UserType } from '../../types/user';

import { useToast } from 'vue-toastification'
import Email_fr from '../emails/email_fr.vue';
import mailService from '../../services/mail.service';

const toast = useToast()
const store = formationStore()
const showModal = ref(false);
const showModalInterestd = ref(false);
const selectedFormation = ref(new FormationType());
const newStudent = ref(new UserType())
const allFormations = computed(() => {
  return store.getAllformationsDispo()
})
const progress = (formation: FormationType) => { return ((formation.students.length / formation.maxStudents) * 100) };

const formatDate = (date: Date | Timestamp) => {

    return new Date(date.toString()).toLocaleDateString()
  
}

const register = async (formation: FormationType) => {
  selectedFormation.value.students.push(newStudent.value)
  await store.updateFormation(formation)
  toast.success("Enregistrement effectué avec succés")
  showModal.value = false
mailService.sendEmail(newStudent.value.email, mail.)
}
const imInterested = async (formation: FormationType) => {
  if (selectedFormation.value.interestedStudents) {
    selectedFormation.value.interestedStudents.push(newStudent.value)
  }else{
    selectedFormation.value.interestedStudents = [newStudent.value]
  }
  await store.updateFormation(formation)
  toast.success("Enregistrement effectué avec succés")
  showModalInterestd.value = false
}
const openModal = (formation: FormationType, isModal: boolean) => {
  selectedFormation.value = formation
  if (isModal) {
    showModal.value = true
  } else {
    showModalInterestd.value = true
  }
}

const isEmailDisabled = computed(() => {
  if (selectedFormation.value.students?.find(student => student.email == newStudent.value.email)) {
    return true
  } else return false
}) 
const isEmailDisabled2 = computed(() => {
  if (selectedFormation.value.interestedStudents?.find(student => student.email == newStudent.value.email)) {
    return true
  } else return false
})  
const isDisabled = computed(() => {
  if (newStudent.value.name == "" || newStudent.value.mobile == 0 || newStudent.value.email == "") {
    return true
  } else return false
})


</script>

<style lang="scss">
.description {
  padding: 20px;
  text-align: justify;
}

.modal {
  transition: opacity 0.3s ease-in-out;
}
</style>