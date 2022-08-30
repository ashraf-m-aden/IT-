<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Java</h2>
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
							<h3>Java</h3>
							<p>Java est l'un des languages de programmation les plus populaires au monde, puissant, legé et rapide, il est utilisé dans la conceptions de 
								multitude d'application. Windows, Mac, Linux, Android, jusqu'au application web. Connaitre les bases de Java ouvre les portes à bien de possibilités
							et d'opportunité.  </p> <p>
								Cette formation portera sur les bases de Java.
							</p>
							
							
						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/services/1200px-Java_Logo.svg.png" class="wow fadeInUp" v-wow
							alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/services/java2.jpg" class="wow fadeInUp" v-wow
							alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>creer des petites applications en java ;</li>
								<li>utiliser les principes de programmation orienté objet ;</li>
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
                                <h3>Java</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>Fdj</sup>7000 <span>/Mois</span></span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">Durée de la formation : 2 mois</li>
                                    <li class="active">Matériels requis: PC i5 8GB ram</li>
                                                           
                                </ul>
							
                            </div>
							<h6>Prérequis: </h6>
<div class="pricing-features">

									<ul>
										<li class="active">aucun</li>
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