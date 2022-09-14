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
							<p>JavaScript est devenu ces dernieres années plus qu'un language de frontend. Avec Node, Express et MongoDB, vous utiliserez vos competences en javascript pour le backend !

À partir de Node et d'Express, vous découvrirez comment les applications web fonctionnent sur le back-end. Vous créerez diverses routes pour les différentes fonctions à mettre à la disposition de votre API. Ensuite, vous ajouterez MongoDB, une base de données NoSQL, pour rendre votre API entièrement dynamique et vos données pleinement persistantes.
Votre application front-end est presumé deja créee et de cette façon, vous pourrez vous concentrer sur la création de votre API et la regarder évoluer, en affinant vos compétences back-end et en choisissant librement votre propre parcours.

Vous créerez une API pour Créer, Lire, Mettre à jour et Supprimer (CRUD pour l’anglais
Create, Read, Update and Delete) des éléments en vente. Vous ajouterez l'authentification à votre API pour la protéger, et vous intégrerez également la gestion des fichiers utilisateur pour autoriser les utilisateurs à télécharger des images. </p>


							
						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/nodejs.png" class="wow fadeInUp" v-wow
							alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/mean.jpg" class="wow fadeInUp" v-wow
							alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
<li>								créer un serveur web simple avec Express ;
</li>
<li>créer une API REST avec Node, Express et MongoDB ;
</li>
<li>mettre en place un système d'authentification sur une application Express ;
</li>
<li>gérer des utilisateur sur une application Express ;
</li>		<li>Recuprer des données de mongoDB grâce à Mongoose ;</li>	
<li>utiliser les tokens JWT ;</li>				</ul>
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
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">M'inscrire à ce cours</a>
                            </div>
                        </div>
                    </div>
                   
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ServiceDetails',
	components: {

	},
	data() {
		return {
			text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.`,
			myItems: [
				{
					title: 'How many time zones are there in all?',
					value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
				},
				{
					title: 'How long is a day and year on Venus?',
					value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.'
				},
				{
					title: 'What animal smells like popcorn?',
					value: 'Binturongs smell like popcorn.'
				}
			]
		}
	}
}
</script>