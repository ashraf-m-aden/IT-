<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>S'enregistrer</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img src="../../../assets/img/shape1.png" alt="shape" />
      </div>
      <div class="shape2 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
      <div class="shape3">
        <img src="../../../assets/img/shape3.svg" alt="shape" />
      </div>
      <div class="shape4">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape5">
        <img src="../../../assets/img/shape5.png" alt="shape" />
      </div>
      <div class="shape6 rotateme">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape7">
        <img src="../../../assets/img/shape4.svg" alt="shape" />
      </div>
      <div class="shape8 rotateme">
        <img src="../../../assets/img/shape2.svg" alt="shape" />
      </div>
    </div>
    <section class="about-area ptb-80">
      <div class="container">
        <div class="form-horizontal auth-form">
          <div class="form-group">
            <input v-model="email" name="email" type="email" class="form-control" placeholder="Email"
              id="exampleInputEmail12" />
            <!-- <span
                class="block text-danger text-xs absolute bottom-0 left-0"
                >{{ errors[0] }}</span
              > -->
          </div>
          <div class="form-group">
            <input v-model="password" name="login[password]" type="password" class="form-control"
              placeholder="Mot de passe" />
            <!-- <span
                class="block text-danger text-xs absolute bottom-0 left-0"
                >{{ errors[0] }}</span
              > -->
          </div>
          <div class="form-group">
            <input name="login[password]" type="password" v-model="confirmPassword" class="form-control"
              placeholder="Confirmer le mot de passe" />
            <!-- <span
                class="block text-danger text-xs absolute bottom-0 left-0"
                >{{ errors[0] }}</span
              > -->
          </div>

          <div class="form-button">
            <button class="btn btn-primary" type="submit" @click="register">
              S'enregistrer
            </button>
          </div>
          <div class="form-terms">
            <div class="mt-4">
              <span>
                <router-link to="/login">Déja enregistré? Connectez vous ici!</router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import firebase from "firebase";
import AuthService from "../../../services/auth";
export default {
  components: {},
  data() {
    return {
      password: "",
      email: "",
      submitted: false,
      confirmPassword: "",
    };
  },
  created() {
    // reset login status for JWT
    //  this.$store.dispatch("authentication/logout");
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    register() {
      this.submitted = true;

      if (this.email == "" && this.password == "") {
        this.$toasted.show(
          "Oops... veuillez entrez un identifiant et un mot de passe valide",
          {
            theme: "bubble",
            position: "bottom-right",
            type: "error",
            duration: 2000,
          }
        );
      }
      if (this.password !== this.confirmPassword) {
        this.$toasted.show("Mot de passes différents", {
          theme: "bubble",
          position: "top-right",
          type: "danger",
          duration: 2000,
        });
      } else {
        AuthService.signUp(this.email, this.password)
          .then(() => {
            this.$toasted.show("Connecté avec succés", {
              theme: "bubble",
              position: "top-right",
              type: "success",
              duration: 2000,
            });
            this.$store.dispatch("setCourses");
            this.$router.push("/");
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
            this.$toasted.show(error.message, {
              theme: "bubble",
              position: "top-right",
              type: "error",
              duration: 4000,
            });
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 900px;

  .bg-primary {
    padding: 50px;
    background-image: url("../../../assets/img/logo.png");
    background-position: center;
    box-shadow: 1px 5px 24px 0 rgba(255, 128, 132, 0.8);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .svg-icon {
    padding: 24px;
    margin: 0 auto;
    border: 2px dashed #ffffff;
    border-radius: 100%;
    height: 130px;
    width: 130px;
    margin-bottom: 40px;

    svg {
      height: 80px;
    }
  }

  p {
    color: rgba(#ffffff, 0.9);
    font-size: 15px;
    line-height: 2;
    text-align: center;
  }

  h3 {
    color: #ffffff;
    font-weight: 600;
    text-align: center;
  }
}
</style>
