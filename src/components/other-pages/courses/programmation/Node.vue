<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Node.js</h2>
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
							<h3>Le backend avec Javascript</h3>
							<p>JavaScript est devenu ces dernieres années plus qu'un language de frontend. Avec Node,
								Express et MongoDB, vous utiliserez vos competences en javascript pour le backend !

								À partir de Node et d'Express, vous découvrirez comment les applications web
								fonctionnent sur le back-end. Vous créerez diverses routes pour les différentes
								fonctions à mettre à la disposition de votre API. Ensuite, vous ajouterez MongoDB, une
								base de données NoSQL, pour rendre votre API entièrement dynamique et vos données
								pleinement persistantes.
								Votre application front-end est presumé deja créee et de cette façon, vous pourrez vous
								concentrer sur la création de votre API et la regarder évoluer, en affinant vos
								compétences back-end et en choisissant librement votre propre parcours.

								Vous créerez une API pour Créer, Lire, Mettre à jour et Supprimer (CRUD pour l’anglais
								Create, Read, Update and Delete) des éléments en vente. Vous ajouterez
								l'authentification à votre API pour la protéger, et vous intégrerez également la gestion
								des fichiers utilisateur pour autoriser les utilisateurs à télécharger des images. </p>



						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/nodejs.png" class="wow fadeInUp" v-wow alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/mean.jpg" class="wow fadeInUp" v-wow alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li> créer un serveur web simple avec Express ;
								</li>
								<li>créer une API REST avec Node, Express et MongoDB ;
								</li>
								<li>mettre en place un système d'authentification sur une application Express ;
								</li>
								<li>gérer des utilisateur sur une application Express ;
								</li>
								<li>Recuprer des données de mongoDB grâce à Mongoose ;</li>
								<li>utiliser les tokens JWT ;</li>
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
							<h3>Node.js</h3>
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
								<li class="active">Angular ou Vue.js</li>
								<li class="active">Github</li>
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
	components: {

	},
	data() {
		return {
			formation: {},
			dejaInscrit: false
		}
	},
	async beforeCreate() {
		const formations = this.$store.getters.formations;
		if (formations.length == []) {

			const filtered = formations.filter(f => f.courseId === "1");
			this.formation = filtered[0];

			if (this.formation) {
				this.checkInscription()
			}
		}

		else {
			await this.$store.dispatch("setCoursesDisponibles");


			const filtered = formations.filter(f => f.courseId === "1");
			this.formation = filtered[0];

			if (this.formation) {
				this.checkInscription()
			}
		}

	},
	methods: {
		checkInscription() {
			const user = this.$store.getters.getUserData;
			if (user) {
				const reserved = this.formation.reserved.includes(user.id);
				const contain = this.formation.students.includes(user.id);
				if ((reserved || contain)) {
					this.dejaInscrit = true;
				}
			}

		},
		inscription() {
			const user = this.$store.getters.getUserData;

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