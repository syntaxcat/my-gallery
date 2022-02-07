'use strict';

function onInit() {
	activateCreateProjs();
	renderPortfolios();
}

function renderPortfolios() {
	const projs = getProjs();
	var strHTMLs = projs.map((proj) => {
		return `<div class="col-md-4 col-sm-6 portfolio-item">
           <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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
	// strHTMLs = strHTMLs.join('');
	// console.log(strHTMLs);
	$('.proj-list').html(strHTMLs.join(''));
}

function renderModal() {}
