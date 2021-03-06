angular
	.module('pickly')
	.controller('PicPageController', PicPageController);

function PicPageController($scope, $route, $location, $translate, $rootScope, $routeParams, $data, $window, $http, $timeout){
	
	$scope.pic = $routeParams.id;
	$scope.datasheet = $location.path().slice(1, 4);
	$scope.remaining = $data.filterPics($location.path());
	$scope.tab = 1;
	$scope.selectTab = setTab;
	$scope.tabIsSelected = checkTab;
	$scope.clickHome = clickHome;
	$scope.clickDashboard = clickDashboard;
	$scope.changeLanguage = changeLanguage;
	$scope.$on('$routeChangeStart', goBack)
	$scope.saveXmlSuccess = false;
	$scope.user = JSON.parse($window.sessionStorage.getItem('currentUser'))
  $scope.currentProject = JSON.parse($window.sessionStorage.getItem('currentProject'))

  $scope.logout = function() {
    $http({
      method: 'GET',
      url: '/logout'
    }).then(function(res) {
      socket.emit('logout')
      $scope.logoutFailed = ''
      $window.sessionStorage.clear()
      $location.path('/')
    }, function(res) {
      $scope.logoutFailed = true
    })
  }

  $scope.saveXml = function() {
  	var newXml = Blockly.Xml.workspaceToDom(workspace)
  	var newXmlText = Blockly.Xml.domToText(newXml)
  	var sender = {
  		id: $scope.user.id,
  		xml: newXmlText,
  		project: { name: $scope.currentProject.name, _id: $scope.currentProject._id }
  	}
  	$http({
  		method: 'POST',
  		url: '/save-project',
  		data: sender
  	}).then(function(res) {
  		$scope.saveXmlSuccess = true;
  		setTimeout(function() {
  			$scope.$apply(function() {
  				$scope.saveXmlSuccess = false;
  			})
  		}, 3000)
  	}, function(res) {
  		console.log('ERR')
  	})
  }

	function setTab (setTab) {
		if (setTab === 2) {
			var blockId = workspace.getAllBlocks()[0].id
			workspace.getBlockById(blockId).moveBy(1,1)
		}
		$scope.tab = setTab;
	}
	
	function checkTab (checkTab) {
		return $scope.tab === checkTab;
	}

	function clickHome () {
		$location.path("/");
	}

	function clickDashboard () {
		socket.emit('leave')
		$location.path("/dashboard");
	}

	function changeLanguage (lan_key) {
		$translate.use(lan_key);
		$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/'+lan_key+'.js"></script>');
	}
	
	function goBack (event) {
		var back = confirm($scope.mensaje);
		if(!back) { event.preventDefault(); }
	}

	$scope.mensaje = $translate('evento.advertencia').then(function(translationId){
		$scope.mensaje = translationId;
	});
	$scope.categoria1 = $translate('categorias.cat_1').then(function(translationId){
		$scope.categoria1 = translationId;
	});
	$scope.categoria2 = $translate('categorias.cat_2').then(function(translationId){
		$scope.categoria2 = translationId;
	});
	$scope.categoria3 = $translate('categorias.cat_3').then(function(translationId){
		$scope.categoria3 = translationId;
	});
	$scope.categoria4 = $translate('categorias.cat_4').then(function(translationId){
		$scope.categoria4 = translationId;
	});
	$scope.categoria5 = $translate('categorias.cat_5').then(function(translationId){
		$scope.categoria5 = translationId;
	});
	$scope.categoria6 = $translate('categorias.cat_6').then(function(translationId){
		$scope.categoria6 = translationId;
	});
	$scope.categoria7 = $translate('categorias.cat_7').then(function(translationId){
		$scope.categoria7 = translationId;
	});
	$scope.categoria8 = $translate('categorias.cat_8').then(function(translationId){
		$scope.categoria8 = translationId;
	});
	$scope.categoria9 = $translate('categorias.cat_9').then(function(translationId){
		$scope.categoria9 = translationId;
	});
	$scope.categoria10 = $translate('categorias.cat_10').then(function(translationId){
		$scope.categoria10 = translationId;
	});
	$scope.categoria12 = $translate('categorias.cat_12').then(function(translationId){
		$scope.categoria12 = translationId;
	});
	
	$rootScope.$on('$translateChangeSuccess', function() {
		$translate('evento.advertencia').then(function(translationId){
			$scope.mensaje = translationId;
		});		
		$translate('categorias.cat_1').then(function(translationId){
			$scope.categoria1 = translationId;
		});	
		$translate('categorias.cat_2').then(function(translationId){
			$scope.categoria2 = translationId;
		});	
		$translate('categorias.cat_3').then(function(translationId){
			$scope.categoria3 = translationId;
		});	
		$translate('categorias.cat_4').then(function(translationId){
			$scope.categoria4 = translationId;
		});	
		$translate('categorias.cat_5').then(function(translationId){
			$scope.categoria5 = translationId;
		});	
		$translate('categorias.cat_6').then(function(translationId){
			$scope.categoria6 = translationId;
		});	
		$translate('categorias.cat_7').then(function(translationId){
			$scope.categoria7 = translationId;
		});
		$translate('categorias.cat_8').then(function(translationId){
			$scope.categoria8 = translationId;
		});	
		$translate('categorias.cat_9').then(function(translationId){
			$scope.categoria9 = translationId;
		});	
		$translate('categorias.cat_10').then(function(translationId){
			$scope.categoria10 = translationId;
		});	
		$translate('categorias.cat_12').then(function(translationId){
			$scope.categoria12 = translationId;
		});		
	});

	$('form').submit(function(event) {
  	event.preventDefault()
  	socket.emit('message', { msg: $('#message').val(), user: $scope.user.firstname })
  	$('#messages').append($('<li>').html('<strong> yo: </strong>' + $('#message').val()))
  	$('#message').val('')
	})

	if (socket) {
		socket.on('render', function(data) {
			$('#messages').append($('<li>').html('<strong>' + data.user + ': </strong>' + data.msg))
			$('#chat-messages').animate({
    		scrollTop: $('#chat-messages').get(0).scrollHeight
  		}, 1000)
		})
	}
};
	
