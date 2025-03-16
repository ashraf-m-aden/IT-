<template>
  <div id="template">
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
      </head>

      <body style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="logo">
                <img
                  src="https://it-advanced-technology.com/assets/img/logo.svg"
                  class="logo-img"
                  alt="'IT+ ADVANCED TECHNOLOGY Djibouti'"
                />
              </div>
              <div class="title" style="color: blue">
                <h3>ACCUSÉ DE RÉCEPTION DE VOTRE DEMANDE D'INSCRIPTION</h3>
              </div>

              <div class="subject" id="subjetc">
                <h4 style="color: green">Cher(e) {{ name.toUpperCase() }}</h4>
              </div>
              <div class="content">
                <p style="color: black">
                  Nous vous remercions d'avoir soumis votre demande
                  d'inscription pour la formation:
                  <strong> {{ course }}</strong>
                  Nous avons le plaisir de vous informer que votre candidature a
                  été reçue avec succès et vous serez contacté sous peu.
                </p>

                <p style="color: black">Cordialement</p>
              </div>

              <p style="line-height: 140%; color: green; font-size: 14px">
                <strong> IT+ ADVANCED TECHNOLOGY</strong>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  </div>
</template>

<script setup lang="ts">
import { computed  } from "vue";

defineProps<{ name: string; course: string }>();
const emailTemplate = computed(() => {
  return document.getElementById("template")?.outerHTML || "";
});
defineExpose({ emailTemplate });
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.title {
  text-align: center !important;
  margin-bottom: 30px !important;
  color: $hosting-main-color !important;
}
.logo {
  text-align: center !important;
  margin-bottom: 20px !important;
}
.logo-img {
  width: 100px !important;
}
.subject {
  color: $hosting-main-color !important;
}
p {
  color: black !important;
}
body {
  background: white !important;
}
</style>
