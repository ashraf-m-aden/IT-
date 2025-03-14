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
        <div class="col-lg-4 col-md-6 col-sm-6" >
          
          
        </div>


      </div>
    </div>

    <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti">
    </div>
    <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti">
    </div>
    <div class="shape7"><img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
    <div class="shape4"><img src="../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
  </section>
  <!-- End Pricing Area -->
  </div>
</template>
<script setup lang="ts">
import { computed, ref, } from 'vue';
import { formationStore } from '../../store/formations';
import { FormationType } from '../../types/formation';


const store = formationStore()

const newFormation = ref(new FormationType())
const allFormations = computed(() => {
  return store.getAllformations

})


</script>
