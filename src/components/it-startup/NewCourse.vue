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
              <label for="" class="form-label">Description</label>
              <input type="text" class="form-control" v-model="newFormation.description" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Date de début</label>
              <input type="date" name="" id="" v-model="newFormation.startDate">
            </div>

            <button
              type="submit"
              class="btn btn-primary" v-on:click="addFormation()"
            >
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
    <!-- End Pricing Area -->
  </div>
</template>
<script setup lang="ts">
import {  ref, } from 'vue';
import { formationStore } from '../../store/formations';
import { FormationType } from '../../types/formation';


const store = formationStore()

const newFormation = ref(new FormationType())

const addFormation = async()=>{
  await store.addFormation(newFormation.value)
}

</script>
