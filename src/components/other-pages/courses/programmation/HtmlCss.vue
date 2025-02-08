<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Html et CSS</h2>
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
							<h3>La base des sites et applications web</h3>
							<p>Ce cours est destiné aux débutants qui ne connaissent rien à la création
								de sites web et qui n'attendent qu'une chose : comprendre comment creer des pages web,
								pratiquer et surtout poser des bases solides pour la suite de l'apprentissage!</p>

							<p>Vous apprendrez comment concevoir des pages web simple et statiques avec le language
								HTML, inserer des textes et des images et styliser le tout avec CSS. </p>
						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/pc.jpg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/code.jpeg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>utiliser du code HTML ;</li>
								<li>
									structurer une page web en HTML ;</li>
								<li>
									utiliser du code CSS ;</li>
								<li>
									mettre en forme une page web en CSS ;</li>
								<li>
									organiser les éléments d’une page web grâce au CSS ;</li>
								<li>naviguer de page en page ;</li>
								<li>inserer des contenues multimedia ;</li>
								<li>creer des pages pour les petits écrans ;</li>
								<li>mettre votre site web en ligne ;</li>
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
							<h3>HTML et CSS</h3>
						</div>

						<div class="price">
							<span><sup>Fdj</sup>10000 <span>/Mois</span></span>
						</div>

						<div class="pricing-features">
							<ul>
								<li class="active">Durée de la formation : 2 mois</li>
								<li class="active">Matériels requis: PC dualcore 4GB ram</li>
								<li class="active">Prérequis: Aucun</li>

							</ul>
						</div>

					</div>
				</div>

			</div>
		</div> -->

		<transition name="modal">
			<div class="modal-mask" v-if="showModal">
				<div class="modal-wrapper">
					<div class="modal-container ">

						<div class="row">
							<div class="pricing-table active-plan confirmation">
								<div class="pricing-header">
									<h3>Confirmation</h3>
								</div>


								<div class="pricing-features">
									<p>Vous êtes sur le point de vous inscrire à ce cours. Etes vous prêts?</p>
									<br>
								</div>

								<div class=" d-flex">
									<button class="btn btn-primary" @click="confirmation()">M'inscrire</button>
									<button class="btn btn-primary" @click="showModal = false">Annuler</button>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
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
<style lang="scss" scoped>
@import '../../../../assets/style/mixins.scss';

.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 500px;
	margin: 0px auto;
	padding: 20px 30px;
	border-radius: 2px;
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;

	@include respond(desk) {
		width: 300px;
	}
}

.confirmation {
	width: 500px;

	@include respond(tablet) {
		width: 300px;
	}
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
