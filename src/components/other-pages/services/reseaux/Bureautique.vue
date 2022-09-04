<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Bureautique</h2>
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
							<p>La bureautique est un terme qui regroupe les logiciels qui aident l'entreprise dans la rédaction de 
documents. Microsoft Office est une suite bureautique permettant entre autres d'écrire des lettres, 
rédiger des CV (avec Word), créer des présentations (avec PowerPoint), créer des tableaux de calcul 
et des graphiques (avec Excel).</p><p>
Cette formation vous permettra d'acquérir des notions de base d’initiation au traitement des 
documents avec les différents logiciels (Word, Excel, Powerpoint etc…), en vous familiarisant avec 
l’interface, l’affichage des menus, la gestion des objets et documents et la mise en page des 
caractères et paragraphes. Cette formation Microsoft office sera constituée d'exercices pratiques où 
vous allez pratiquer tous vos acquis lors de la formation.</p>

							
						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/services/office1.jpeg" class="wow fadeInUp" v-wow
							alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/services/office2.jpeg" class="wow fadeInUp" v-wow
							alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li>Maîtriser les notions de base de Microsoft Office (Word, Excel, Powerpoint etc…) ;</li>
								<li>
									Vous familiariser avec les différentes interfaces de Microsoft Office (Word, Excel, 
Powerpoint etc…) ;</li>
								<li>
									Maîtriser la gestion des documents et des objets sous Microsoft Office (Word, Excel, 
Powerpoint etc…) ;</li>
								<li>
									Faire la mise en page des caractères et des paragraphes
 ;</li>
								
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
                                <h3>Bureautique (Word, Excel, Access, PowerPoint etc.…) </h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>Fdj</sup>12000 <span>/Mois</span></span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">Durée de la formation : 3 mois</li>
                                    <li class="active">Matériels requis:  Laptop Dual core , 4GB RAM, 500GB Hard Disk</li>
                                                           
                                </ul>
							
                            </div>
							<h6>Prérequis: </h6>
<div class="pricing-features">

									<ul>
										<li class="active">Aucun</li>
										
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