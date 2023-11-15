<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Angular</h2>
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
							<h3>Le framework progressiste de Google</h3>
							<p>Angular est un framework de conception d'applications qui permet de créer des
								applications d'une seule page efficaces et sophistiquées. Classé parmi les meilleurs
								framework de conception web
								il vous est possible de creer toute type d'application avec Angular, eh oui tout type!
								Application web, mobile, et Windows! <br>
								Crée par Google, il jouit d'une tres grande communauté et trés demandé dans les postes
								pour developpeur web. </p>
							<p>

								Cette formations vous apprendra à utiliser le framework Angular et à creer des
								applications complexes pour entreprise.</p>


						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/angular-2.jpg" class="wow fadeInUp" v-wow alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/original.jpg" class="wow fadeInUp" v-wow alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>creer une application Angular ;</li>
								<li>
									comprendre et construire des components Angular ;</li>
								<li>
									utiliser les directives ;</li>
								<li>
									utiliser des services ;</li>
								<li>
									gerer le routing;</li>
								<li>comprendre et exploiter les data bindings;</li>
								<li>consommer des APIs ;</li>
								<li>injecter des dependences ;</li>
								<li>et bien plus encore ;</li>
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

		<div class="container">

			<div class="row  justify-content-center ">


				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="pricing-table active-plan">
						<div class="pricing-header">
							<h3>Angular</h3>
						</div>

						<div class="price">
							<span><sup>Fdj</sup>15000 <span>/Mois</span></span>
						</div>

						<div class="pricing-features">
							<ul>
								<li class="active">Durée de la formation : 3 mois</li>
								<li class="active">Matériels requis: PC i5 8GB ram</li>

							</ul>

						</div>
						<h6>Prérequis: </h6>
						<div class="pricing-features">

							<ul>
								<li class="active">HTML</li>
								<li class="active">CSS</li>
								<li class="active">Javascript ou Typescript</li>
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
import { userStore } from "../../../../store/user";
import { formationStore } from "../../../../store/formations";

import { mapState } from "pinia";
import { ref } from 'vue'
export default {
	name: "AngularPage",

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
			// await this.$store.dispatch("setCoursesDisponibles");

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