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
								de sites web et qui n'attendent qu'une chose : comprendre comment creer des pages web, pratiquer et surtout poser des bases solides pour la suite de l'apprentissage!</p>

							<p>Vous apprendrez comment concevoir des pages web simple et statiques avec le language
								HTML, inserer des textes et des images et styliser le tout avec CSS. </p>
						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/services/pc.jpg" class="wow fadeInUp" v-wow
							alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/services/code.jpeg" class="wow fadeInUp" v-wow
							alt="image">
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

		<div class="container">
			
		<div class="row  justify-content-center ">
                    

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="pricing-table active-plan">
                            <div class="pricing-header">
                                <h3>HTML et CSS</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>Fdj</sup>5000 <span>/Mois</span></span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">Durée de la formation : 3 mois</li>
                                    <li class="active">Matériels requis: PC dualcore 4GB ram</li>
                                    <li class="active">Prérequis: Aucun</li>
                        
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