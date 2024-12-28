<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Les fondamentaux des réseaux</h2>
					</div>
				</div>
			</div>

			<div class="shape1"><img src="../../../../assets/img/shape1.png" alt="shape"></div>
			<div class="shape2 rotateme"><img src="../../../../assets/img/shape2.svg" alt="shape"></div>
			<div class="shape3"><img src="../../../../assets/img/shape3.svg" alt="shape"></div>
			<div class="shape4"><img src="../../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape5"><img src="../../../../assets/img/shape5.png" alt="shape"></div>
			<div class="shape6 rotateme"><img src="../../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape7"><img src="../../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape8 rotateme"><img src="../../../../assets/img/shape2.svg" alt="shape"></div>
		</div>
		<!-- End Page Title -->

		<!-- Start Services Details Area -->
		<section class="services-details-area ptb-80">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<h3>Initier vous au réseaux!</h3>
							<p>La formation Réseau de base est la première étape pour s'initier à la technologie d'un
								acteur
								incontournable de l'industrie des réseaux informatiques. Elle est le point de départ
								pour tous les
								professionnels amenés à travailler en environnement Cisco.</p>
							<p>
								Cette formation permet d’acquérir les connaissances et compétences nécessaires pour
								installer, faire
								fonctionner, configurer et vérifier les réseaux IPv4 et IPv6, y compris la configuration
								des
								commutateurs LAN, la connexion aux réseaux WAN et l'identification des menaces pour la
								sécurité
								de base. Elle a pour objectif d'acquérir les aptitudes nécessaires pour la mise en
								place, l'exploitation
								et le dépannage de réseaux d'entreprises.</p>
							<p>
								La formation couvre tous les aspects techniques pour la gestion optimale d'un réseau :
								de la
								configuration des switch et routeurs à l'élaboration de la stratégie sécuritaire
								adéquate.</p>


						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/network2.jpeg" class="wow fadeInUp" alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/network.jpeg" class="wow fadeInUp" alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>Comprendre les mécanismes intervenant dans les communications réseau ;</li>
								<li>
									Construire des réseaux LANs simples ;</li>
								<li>
									Établir la connectivité Internet ;</li>
								<li>
									Configurer les commutateurs Cisco pour une mise en place d'un réseau LAN ;</li>
								<li>
									Étendre les réseaux de petite et moyenne taille avec une connectivité vers WAN ;
								</li>
								<li>Configurer, gérer et surveiller les périphériques Cisco ;</li>

							</ul>
							</p>
							<!--
							<div class="services-details-accordion">
								<VueFaqAccordion :items="myItems" />
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Services Details Area -->
<!--
		<div class="container">

			<div class="row  justify-content-center ">


				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="pricing-table active-plan">
						<div class="pricing-header">
							<h3>Les fondamentaux des réseaux</h3>
						</div>

						<div class="price">
							<span><sup>Fdj</sup>12000 <span>/Mois</span></span>
						</div>

						<div class="pricing-features">
							<ul>
								<li class="active">Durée de la formation : 2 mois</li>
								<li class="active">Matériels requis: Laptop Dual core, 4GB RAM, 500GB Hard Disk</li>

							</ul>

						</div>
						<h6>Prérequis: </h6>
						<div class="pricing-features">

							<ul>
								<li class="active"> Avoir des compétences de base sur les PCs, sur la navigation
									dans le système d’exploitation, sur l’utilisation d’Internet et sur la gestion
									des adresses IP</li>
							</ul>
						</div>


					</div>
				</div>

			</div>
		</div> -->
	</div>
</template>

<script>
import FormationService from '../../../../services/formation.js'
import { userStore } from "../../../../store/user";
import { formationStore } from "../../../../store/formations";
import { ref } from 'vue'
export default {
	components: {

	},
	setup() {
		const formation = ref({})
		const dejaInscrit = ref(false)
		const store = userStore();
		const storeF = formationStore();
		return {
			store, storeF, formation, dejaInscrit
		}

	},
	async beforeCreate() {
		const formations = this.storeF.formations;
		if (formations == []) {

			const filtered = formations.filter(f => f.courseId === "1");
			this.formation = filtered[0];

			if (this.formation) {
				this.checkInscription()
			}
		}

		else {
			await this.storeF.setCoursesDisponibles();


			const filtered = formations.filter(f => f.courseId === "1");
			this.formation = filtered[0];

			if (this.formation) {
				this.checkInscription()
			}
		}

	},
	methods: {
		checkInscription() {
			const user = store.getUserData;

			if (user) {
				const reserved = this.formation.reserved.includes(user.id);
				const contain = this.formation.students.includes(user.id);
				if ((reserved || contain)) {
					this.dejaInscrit = true;
				}
			}

		},
		inscription() {
			const user = store.getUserData;

			if (user) {
				if (user.emailVerified) {
					FormationService.registerFormation(this.formation)
				} else {
					this.$toasted.show("Veuillez verifié votre email: connectez vous sur votre boite mail et cliqué sur le lien qui vous a été envoyé. (VERIFIEZ VOS SPAMS)", {
						theme: "bubble",
						position: "top-right",
						type: "info",
						duration: 10000,

					});
				}
			} else {

				this.$toasted.show("Veuillez vous connectez ou vous enregistrer sur le site pour vous inscrire, puis verifiez votre email pour et cliquez sur le lien de verification", {
					theme: "bubble",
					position: "top-right",
					type: "info",
					duration: 7000,

				});


			}

		}
	},

}
</script>
