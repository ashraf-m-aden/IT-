<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>GNS3 : Maîtriser l'émulation de réseaux</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img
          src="../../../../assets/img/shape1.png"
          alt="shape"
        >
      </div>
      <div class="shape2 rotateme">
        <img
          src="../../../../assets/img/shape2.svg"
          alt="shape"
        >
      </div>
      <div class="shape3">
        <img
          src="../../../../assets/img/shape3.svg"
          alt="shape"
        >
      </div>
      <div class="shape4">
        <img
          src="../../../../assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape5">
        <img
          src="../../../../assets/img/shape5.png"
          alt="shape"
        >
      </div>
      <div class="shape6 rotateme">
        <img
          src="../../../../assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape7">
        <img
          src="../../../../assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape8 rotateme">
        <img
          src="../../../../assets/img/shape2.svg"
          alt="shape"
        >
      </div>
    </div>
    <!-- End Page Title -->

    <!-- Start Services Details Area -->
    <section class="services-details-area ptb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 services-details">
            <div class="services-details-desc">
              <p>
                GNS3 est un programme qui permet de simuler des réseaux de
                routeur et de commutateur qui tournent sous IOS (le système
                d’exploitation des routeurs et switch Cisco). Cette formation
                GNS3 vous permettra de simuler vos équipements Cisco, Juniper et
                Huawei avec une grande facilité et maîtrise. Avec cette
                formation GNS3, vous allez pouvoir préparer vos maquettes ou se
                préparer à des examens de certifications sans devoir débloquer
                un budget lourd pour s'acheter les équipements réseaux.
              </p>
              <p>
                A travers cette formation GNS3 détaillée et complète, vous allez
                découvrir l'outil GNS3 d'une manière simple, pratique et surtout
                pédagogique, avec des études de cas avancés sous Windows et
                Linux : Frame Relay point-to-point/multipoint, ATM, Juniper,
                Huawei, IOU, Etherchannel, VTP, Cisco ASA, VoIP et Kali.
                Évidemment vous allez apprendre aussi comment installer GNS3 sur
                Linux et Windows, configurer les images IOS, découvrir
                l'interface, gérer les préférences. La maîtrise de GNS3 est
                obligatoire si vous souhaitez devenir un expert des réseaux.
                Donc venez profitez bien de cette formation GNS3 avec l’équipe
                IT+.
              </p>
            </div>
          </div>

          <div class="col-lg-6 services-details-image">
            <img
              v-wow
              src="../../../../assets/img/courses/gns3.jpeg"
              class="wow fadeInUp"
              alt="image"
            >
          </div>
        </div>

        <div class="separate" />

        <div class="row align-items-center">
          <div class="col-lg-6 services-details-image">
            <img
              v-wow
              src="../../../../assets/img/courses/ciscogns3.jpeg"
              class="wow fadeInUp"
              alt="image"
            >
          </div>

          <div class="col-lg-6 services-details">
            <div class="services-details-desc">
              <p>À la fin de ce cours, vous serez capable de :</p>
              <ul>
                <li>Installer et configurer GNS3 sur Windows et Linux ;</li>
                <li>Construire une topologie complète sous GNS3 ;</li>
                <li>
                  Intégrer GNS3 avec l'environnement extérieur : VirtualBox,
                  VMware, Wireshark, QEMU, ENSP, Juniper, IOS ;
                </li>
                <li>
                  Comprendre et implémenter des études de cas avancés : Frame
                  Relay point-to-point, multipoint, ATM, Juniper, Huawei, IOU,
                  Etherchannel, VTP, Cisco ASA, VoIP et Kali ;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Details Area -->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="pricing-table active-plan">
            <div class="pricing-header">
              <h3>GNS3 : Maîtriser l'émulation de réseaux</h3>
            </div>

            <div class="price">
              <span><sup>Fdj</sup>10000 <span>/Mois</span></span>
            </div>

            <div class="pricing-features">
              <ul>
                <li class="active">
                  Durée de la formation : 1 mois
                </li>
                <li class="active">
                  Matériels requis: Laptop Core i3, 8GB RAM, 1TB Hard Disk
                </li>
              </ul>
            </div>
            <h6>Prérequis:</h6>
            <div class="pricing-features">
              <ul>
                <li class="active">
                  GNS3 : Maîtriser l'émulation de réseaux
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormationService from '../../../../services/formation.js'
export default {
  components: {},
  data () {
    return {
      formation: {},
      dejaInscrit: false
    }
  },
  async beforeCreate () {
    const formations = this.$store.getters.formations
    if (formations.length === []) {
      const filtered = formations.filter((f) => f.courseId === '1')
      this.formation = filtered[0]

      if (this.formation) {
        this.checkInscription()
      }
    } else {
      await this.$store.dispatch('setCoursesDisponibles')

      const filtered = formations.filter((f) => f.courseId === '1')
      this.formation = filtered[0]

      if (this.formation) {
        this.checkInscription()
      }
    }
  },
  methods: {
    checkInscription () {
      const user = this.$store.getters.getUserData
      if (user) {
        const reserved = this.formation.reserved.includes(user.id)
        const contain = this.formation.students.includes(user.id)
        if (reserved || contain) {
          this.dejaInscrit = true
        }
      }
    },
    inscription () {
      const user = this.$store.getters.getUserData

      if (user) {
        if (user.emailVerified) {
          FormationService.registerFormation(this.formation)
        } else {
          this.$toasted.show(
            'Veuillez verifié votre email: connectez vous sur votre boite mail et cliqué sur le lien qui vous a été envoyé. (VERIFIEZ VOS SPAMS)',
            {
              theme: 'bubble',
              position: 'top-right',
              type: 'info',
              duration: 10000
            }
          )
        }
      } else {
        this.$toasted.show(
          'Veuillez vous connectez ou vous enregistrer sur le site pour vous inscrire, puis verifiez votre email pour et cliquez sur le lien de verification',
          {
            theme: 'bubble',
            position: 'top-right',
            type: 'info',
            duration: 7000
          }
        )
      }
    }
  }
}
</script>
