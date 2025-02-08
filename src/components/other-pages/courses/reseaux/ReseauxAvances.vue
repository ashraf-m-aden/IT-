<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Réseaux Avancés</h2>
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
							<h3>Le niveau superieur</h3>
							<p>La formation Réseaux avancées apporte des connaissances et compétences additionnelles à
								celles que
								vous auriez pu découvrir lors de la formation les fondamentaux de réseau. En effet,
								cette formation
								permet aux participants d'acquérir les compétences et connaissances nécessaires pour
								installer,
								utiliser et dépanner un réseau d'entreprise de taille moyenne, notamment à partir de la
								configuration
								de divers switches et routeurs et de la mise en œuvre de la sécurité.</p>
							<P>
								Au niveau du LAN, les participants sauront avec cette formation mettre en œuvre un
								réseau
								commuté utilisant des VLANs, pourront utiliser au mieux l'adressage IP par les
								techniques VLSM.
								Les technologies WAN et la sécurité sont aussi largement évoquées lors de cette
								formation,
								notamment avec les protocoles PPP, Frame-Relay, le NAT, les listes de contrôle d'accès
								(ACL)...</p>


						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/switch.jpeg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/server.jpeg" class="wow fadeInUp" alt="IT+ ADVANCED TECHNOLOGY">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li> D’exploiter un réseau de taille moyenne avec de multiples commutateurs, contenant
									VLANs,
									Trunks et spanning tree ;</li>
								<li>
									Dépanner les problèmes de connectivité IP ;</li>
								<li>
									Configurer et dépanner EIGRP dans un environnement IPv4 ;</li>
								<li>
									Configurer et dépanner OSPF dans un environnement IPv4 ;</li>
								<li>
									Définir les caractéristiques, les fonctions et les composants d’un WAN ;</li>
								<li>Décrire SNMP, syslog, and NetFlow, et gérer des configurations de périphériques
									Cisco,
									Cisco IOS, images et licences;</li>

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
							<h3>Réseaux Avancées</h3>
						</div>

						<div class="price">
							<span><sup>Fdj</sup>15000 <span>/Mois</span></span>
						</div>

						<div class="pricing-features">
							<ul>
								<li class="active">Durée de la formation : 3 mois</li>
								<li class="active">Matériels requis: : Laptop Core i3, 8GB RAM, 500GB Hard Disk</li>

							</ul>

						</div>
						<h6>Prérequis: </h6>
						<div class="pricing-features">

							<ul>
								<li class="active">Avoir des connaissances de base sur le réseau, etre capable
									d'installer, de configurer et de dépanner un petit réseau LAN</li>

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
