<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Sécurité informatique</h2>
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
							<h3>Sécurisez vos infrastructures</h3>
							<p>Vous souhaitez améliorer vos connaissances en Sécurité informatique ? L’équipe IT+ vous
								propose
								cette formation qui facilitera votre embauche ou votre évolution professionnelle dans le
								domaine
								Sécurité. </p>
							<p>
								La sécurité informatique désigne l’ensemble des techniques mises en œuvre pour minimiser
								ou
								empêcher le détournement des systèmes d’information : piratage, virus, vol de données…
								Une
								personne compétente dans le domaine de la sécurité informatique sera en mesure de
								protéger les
								ordinateurs, serveurs et autres réseaux des attaques informatiques. Ce savoir-faire
								englobe des
								connaissances approfondies en informatique et en outils bureautiques afin d’avoir toutes
								les cartes
								en main pour lutter contre les piratages et dysfonctionnements éventuels. </p>
							<p>La sécurité informatique
								exige ainsi des compétences en chiffrage, en protection et sauvegarde des données,
								antivirus,
								pare-feu ou encore en connexion sécurisée VPN. Outre des capacités d’analyse et de
								résolution des
								conflits, il pourra être demandé à la personne en charge de la sécurité informatique un
								certain sens
								de la pédagogie afin d’être apte à communiquer à ses collaborateurs les bonnes pratiques
								à mettre
								en place de façon à écarter les risques de piratage.</p>


						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/reseau.jpeg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/lock.jpeg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>Déjouer les cyberattaques ;</li>
								<li>
									Acquérir de solides connaissances en matière de sécurité informatiquer ;</li>
								<li>
									Savoir repérer la fragilité et les failles systèmes d’un réseau, services et
									supports de
									communication ;</li>
								<li>
									Pouvoir concevoir et définir la politique de sécurisation des données de
									l’entreprise ;</li>
								<li>
									Maîtriser les aspects « sécurité » et « qualité » des réseaux et des systèmes de
									communication;</li>
								<li>Maîtriser les protocoles de réseaux dédiés;</li>

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
							<h3>Maîtriser la sécurité informatique</h3>
						</div>

						<div class="price">
							<span><sup>Fdj</sup>15000 <span>/Mois</span></span>
						</div>

						<div class="pricing-features">
							<ul>
								<li class="active">Durée de la formation : 2 mois</li>
								<li class="active">Matériels requis: Laptop Core i3, 8GB RAM, 1TB Hard Disk</li>

							</ul>

						</div>
						<h6>Prérequis: </h6>
						<div class="pricing-features">

							<ul>
								<li class="active">Avoir des connaissances de base en réseaux</li>

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
