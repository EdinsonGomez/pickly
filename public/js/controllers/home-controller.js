angular
	.module('pickly')
	.controller('HomeController', HomeController);

function HomeController($scope, $translate, $data) {
	$scope.$on('$viewContentLoaded', homeJS)
	$scope.pics = $data.getPics()
	$scope.changeLanguage = function(lan_key){
		$translate.use(lan_key);
		$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/' + lan_key + '.js"></script>');
	};
	function homeJS () {
  	window.sr = ScrollReveal({ reset: true })
  	.reveal('.icon', { duration: 1000 }, 250)
    .reveal('.sr-button')
  	$("#modal_pic").on('hidden.bs.modal', function () {
    	$(this).data('bs.modal', null);
  	});
  	$("#header-btn").on('click', function(event) {
    	if (this.hash !== "") {
      	event.preventDefault();
      	var hash = this.hash;
      	$('html, body').animate({
        	scrollTop: $(hash).offset().top
      	}, 1500, function(){
      		window.location.hash = hash;
      	});
    	}
  	});
	}
};


