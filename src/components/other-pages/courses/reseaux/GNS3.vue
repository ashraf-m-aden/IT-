<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2> GNS3 : Maîtriser l'émulation de réseaux</h2>
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
							<p>GNS3 est un programme qui permet de simuler des réseaux de routeur et de commutateur qui 
tournent sous IOS (le système d’exploitation des routeurs et switch Cisco). Cette formation GNS3 
vous permettra de simuler vos équipements Cisco, Juniper et Huawei avec une grande facilité et 
maîtrise. Avec cette formation GNS3, vous allez pouvoir préparer vos maquettes ou se préparer à 
des examens de certifications sans devoir débloquer un budget lourd pour s'acheter les équipements 
réseaux.</p><p>
A travers cette formation GNS3 détaillée et complète, vous allez découvrir l'outil GNS3 d'une 
manière simple, pratique et surtout pédagogique, avec des études de cas avancés sous Windows et 
Linux : Frame Relay point-to-point/multipoint, ATM, Juniper, Huawei, IOU, Etherchannel, VTP, 
Cisco ASA, VoIP et Kali. Évidemment vous allez apprendre aussi comment installer GNS3 sur 
Linux et Windows, configurer les images IOS, découvrir l'interface, gérer les préférences. La 
maîtrise de GNS3 est obligatoire si vous souhaitez devenir un expert des réseaux. Donc venez 
profitez bien de cette formation GNS3 avec l’équipe IT+.
</p>

							
						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/gns3.jpeg" class="wow fadeInUp" v-wow
							alt="image">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/ciscogns3.jpeg" class="wow fadeInUp" v-wow
							alt="image">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :
							<ul>
								<li> Installer et configurer GNS3 sur Windows et Linux ;</li>
								<li>
									Construire une topologie complète sous GNS3 ;</li>
								<li>
									Intégrer GNS3 avec l'environnement extérieur : VirtualBox, VMware, Wireshark, QEMU, 
ENSP, Juniper, IOS ;</li>
								<li>
									Comprendre et implémenter des études de cas avancés : Frame Relay point-to-point,
multipoint, ATM, Juniper, Huawei, IOU, Etherchannel, VTP, Cisco ASA, VoIP et Kali ;</li>
								
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
                                <h3>GNS3 : Maîtriser l'émulation de réseaux</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>Fdj</sup>10000 <span>/Mois</span></span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">Durée de la formation : 1 mois</li>
                                    <li class="active">Matériels requis: Laptop Core i3, 8GB RAM, 1TB Hard Disk</li>
                                                           
                                </ul>
							
                            </div>
							<h6>Prérequis: </h6>
<div class="pricing-features">

									<ul>
										<li class="active">GNS3 : Maîtriser l'émulation de réseaux</li>
										
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