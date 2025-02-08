<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>MySQL</h2>
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
							<h3>MYSQL</h3>
							<p>MySQL, qui est un Système de Gestion de Bases de Données Relationnelles (abrégé SGBDR).
								Il permet de gérer des bases de données, et donc de gérer de grosses quantités
								d'informations. Il utilise pour cela le
								langage SQL.
								Ils'agit d'un des SGBDR les plus connus et les plus utilisés (Wikipédia utilise par
								exemple MySQL). Et c'est
								certainement le SGBDR le plus utilisé à ce jour pour réaliser des sites web dynamiques.
								MySQL peut donc s'utiliser seul, mais est la plupart du temps combiné à un autre langage
								de programmation.
							</p>



						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/mysql.jpg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/mysql 2.jpg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>créer une base de données mySQL ;</li>
								<li>
									gerer des relations entre les différentes tables d'une base ;</li>
								<li>
									selectionner des données selon de nombreux criteres ;</li>
								<li>
									manipuler des données ;</li>
								<li>Utiliser des triggers pour automatiser certaines actions ;</li>

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

		<!-- <div class="container">

			<div class="row  justify-content-center ">


				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="pricing-table active-plan">
						<div class="pricing-header">
							<h3>MySQL</h3>
						</div>

						<div class="price">
							<span><sup>Fdj</sup>10000 <span>/Mois</span></span>
						</div>

						<div class="pricing-features">
							<ul>
								<li class="active">Durée de la formation : 2 mois</li>
								<li class="active">Matériels requis: PC dualcore 4GB ram</li>

							</ul>

						</div>
						<h6>Prérequis: </h6>
						<div class="pricing-features">

							<ul>
								<li class="active">Aucun</li>
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
