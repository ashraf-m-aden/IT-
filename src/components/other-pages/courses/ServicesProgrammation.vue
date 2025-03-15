<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Cours et formations en programmation informatique</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../../assets/img/shape1.png" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape5">
        <img src="../../../assets/img/shape5.png" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Services Area -->
    <div class="agency-services-area ptb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="agency-services-box" @click="goPage('/cours-programmation/html-css')">
              <img src="../../../assets/img/courses/logo-html5-css3.png" alt="IT+ ADVANCED TECHNOLOGY" />

              <div class="content"><router-link to="/cours-programmation/html-css">
                <h3><a href="#">HTML et CSS</a></h3>
                <a href="#" class="read-more-btn">Lire plus
                  <vue-feather type="plus-circle"></vue-feather>
                </a> </router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="agency-services-box" @click="goPage('/cours-programmation/javascript')">
              <img src="../../../assets/img/courses/JavaScript-Logo.png" alt="IT+ ADVANCED TECHNOLOGY" />

              <div class="content"><router-link to="/cours-programmation/javascript">
                <h3><a href="#">Javascript</a></h3>
                <a href="#" class="read-more-btn">Lire plus
                    <vue-feather type="plus-circle"></vue-feather>
                  </a> </router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="agency-services-box" @click="goPage('/cours-programmation/mysql')">
              <img src="../../../assets/img/courses/mysql.jpg" alt="IT+ ADVANCED TECHNOLOGY" />

              <div class="content"><router-link to="/cours-programmation/mysql">
                <h3><a href="#">MySQL</a></h3>
                <a href="#" class="read-more-btn">Lire plus
                    <vue-feather type="plus-circle"></vue-feather>
                 </a> </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="agency-services-box" @click="goPage('/cours-programmation/vue')">
              <img src="../../../assets/img/courses/Logo-Vuejs.png" alt="IT+ ADVANCED TECHNOLOGY" />

              <div class="content">
                <router-link to="/cours-programmation/vue">
                  <h3><a href="#">Vue.js</a></h3>
                  <a href="#" class="read-more-btn">Lire plus
                    <vue-feather type="plus-circle"></vue-feather>
                  </a>
                </router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="agency-services-box" @click="goPage('/cours-programmation/angular')">
              <img src="../../../assets/img/courses/2048px-Angular_full_color_logo.png" alt="IT+ ADVANCED TECHNOLOGY" />

              <div class="content"><router-link to="/cours-programmation/angular">
                <h3><a href="#">Angular</a></h3>
                  <a href="" class="read-more-btn">Lire plus
                    <vue-feather type="plus-circle"></vue-feather>
                  </a> </router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="agency-services-box" @click="goPage('/cours-programmation/node')">
              <img src="../../../assets/img/courses/1200px-Node.js_logo.png" alt="IT+ ADVANCED TECHNOLOGY" />

              <div class="content"><router-link to="/cours-programmation/node">
                <h3><a href="#">Node.js</a></h3>
                <a href="#" class="read-more-btn">Lire plus
                  <vue-feather type="plus-circle"></vue-feather>
                </a> </router-link>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-4 col-sm-6 col-md-6">
            <div
              class="agency-services-box"
              @click="goPage('/cours-programmation/java')"
            >
              <img
                src="../../../assets/img/courses/1200px-Java_Logo.svg.png"
                alt="IT+ ADVANCED TECHNOLOGY"
              />

              <div class="content">
                <h3><a href="#">Java </a></h3>
                <a href="#" class="read-more-btn"
                  ><router-link to="/cours-programmation/java"
                    >Lire plus
                    <vue-feather type="plus-circle"></vue-feather></router-link
                ></a>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti" />
      </div>
    </div>
    <!-- End Services Area -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const goPage = (url:any) => {
  router.push(url);
}

</script>
