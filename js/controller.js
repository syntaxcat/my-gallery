'use strict';

// <button onclick="window.open('${proj.url}')">CLICK HERE TO OPEN THE PROJECT</button>

function onInit() {
	activateCreateProjs();
	renderPortfolios();
}

function renderPortfolios() {
	const projs = getProjs();
	var strHTMLs = projs.map((proj) => {
		return `<div class="col-md-4 col-sm-6 portfolio-item">
           <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal('${proj.id}')">
             <div class="portfolio-hover">
               <div class="portfolio-hover-content">
                 <i class="fa fa-plus fa-3x"></i>
               </div>
             </div>
             <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
           </a>
           <div class="portfolio-caption">
             <h4>${proj.name}</h4>
             <p class="text-muted">${proj.title}</p>
           </div>
         </div>`;
	});

	$('.proj-list').html(strHTMLs.join(''));
}

function onOpenModal(projectId) {
	const project = getProjById(projectId);
	const $modal = $('.portfolio-modal');
	$modal.modal('show');
	$modal.find('h2').text(project.name);
	$modal.find('.item-intro').text(project.title);
	$modal.find('.img-fluid').attr('src', `img/portfolio/${project.id}.jpg`);
	$modal.find('.desc').text(project.desc);
	$modal.find('.date').text(project.publishedAt);
	$modal.find('.labels').text(project.labels.join(','));
}
