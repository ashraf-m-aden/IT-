<template>
	<div>
		<!-- Start Page Title -->
		<div class="page-title-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<h2>Angular</h2>
					</div>
				</div>
			</div>

			<div class="shape1"><img src="../../../../assets/img/shape1.png" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape2 rotateme"><img src="../../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape3"><img src="../../../../assets/img/shape3.svg" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape4"><img src="../../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape5"><img src="../../../../assets/img/shape5.png" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape6 rotateme"><img src="../../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape7"><img src="../../../../assets/img/shape4.svg" alt="IT+ formation cours informatique djibouti"></div>
			<div class="shape8 rotateme"><img src="../../../../assets/img/shape2.svg" alt="IT+ formation cours informatique djibouti"></div>
		</div>
		<!-- End Page Title -->

		<!-- Start Services Details Area -->
		<section class="services-details-area ptb-80">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<h3>Le framework progressiste de Google</h3>
							<p>Angular est un framework de conception d'applications qui permet de créer des
								applications d'une seule page efficaces et sophistiquées. Classé parmi les meilleurs
								framework de conception web
								il vous est possible de creer toute type d'application avec Angular, eh oui tout type!
								Application web, mobile, et Windows! <br>
								Crée par Google, il jouit d'une tres grande communauté et trés demandé dans les postes
								pour developpeur web. </p>
							<p>

								Cette formations vous apprendra à utiliser le framework Angular et à creer des
								applications complexes pour entreprise.</p>

						</div>
					</div>

					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/angular-2.jpg" class="wow fadeInUp" alt="IT+Code Lab">
					</div>
				</div>

				<div class="separate"></div>

				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<img src="../../../../assets/img/courses/original.jpg" class="wow fadeInUp" alt="IT+Code Lab">
					</div>

					<div class="col-lg-6 services-details">
						<div class="services-details-desc">
							<p>À la fin de ce cours, vous serez capable de :</p>
							<ul>
								<li>creer une application Angular ;</li>
								<li>
									comprendre et construire des components Angular ;</li>
								<li>
									utiliser les directives ;</li>
								<li>
									utiliser des services ;</li>
								<li>
									gerer le routing;</li>
								<li>comprendre et exploiter les data bindings;</li>
								<li>consommer des APIs ;</li>
								<li>injecter des dependences ;</li>
								<li>et bien plus encore ;</li>
							</ul>

							<!--
							<div class="services-details-accordion">
								<VueFaqAccordion :items="myItems" />
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'ANGULAR - IT+ CODE LAB',
  meta: [
    { name: 'description', content: 'Maitrisez un des meilleurs frameworks Javascript | Code Lab | Cours et Formations en informatique à Djibouti' },
    { name: 'keywords', content: 'formation,Code Lab,formations,angular,vue, html, css,linux,sécurité,javascript, java, informatique,djibouti, Djibouti, programmation, réseaux, cours, codelab, it+' }
  ]
})
</script>
