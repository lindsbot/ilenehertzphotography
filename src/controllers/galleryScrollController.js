angular.module('ilenePhotoSite')
.controller('galleryScrollController', function(
  $scope,
  $window
){
  $scope.imageCollection = [
    {
      url:'img/web_001.jpg',
      caption1: 'Sea of Paper Whites',
      caption2: 'Narcissus papyraceus'
    },
    {
      url:'img/web_002.jpg',
      caption1: 'Paper White Trio',
      caption2: 'Narcissus papyraceus'
    },
    {
      url:'img/web_003.jpg',
      caption1: 'Graceful Lily',
      caption2: 'Lillium'
    },
    {
      url:'img/web_004.jpg',
      caption1: 'Anemones Dance',
      caption2: 'Anemone coronaria'
    },
    {
      url:'img/web_005.jpg',
      caption1: 'Pink California Poppies',
      caption2: 'Eschscholzia californica'
    },
    {
      url:'img/web_006.jpg',
      caption1: 'Purple Tulips',
      caption2: 'Tulipa'
    },
    {
      url:'img/web_007.jpg',
      caption1: 'Orange Tulip',
      caption2: 'Tulipa'
    },
    {
      url:'img/web_008.jpg',
      caption1: 'Pink Campanula',
      caption2: 'Campanula medium'
    },
    {
      url:'img/web_009.jpg',
      caption1: 'Dusty Pink Tulip',
      caption2: 'Tulipa'
    },
    {
      url:'img/web_010.jpg',
      caption1: 'Purple Lisianthus',
      caption2: 'Eustoma grandiflorum'
    },
    {
      url:'img/web_011.jpg',
      caption1: 'White Lily',
      caption2: 'Lillium'
    },
    {
      url:'img/web_012.jpg',
      caption1: 'Orange Tulips',
      caption2: 'Tulipa'
    },
    {
      url:'img/web_013.jpg',
      caption1: 'Red Poppy with Corkscrew Rush',
      caption2: 'Papaver nudicaule, Juncus f. spiralis'
    },
    {
      url:'img/web_014.jpg',
      caption1: 'Red Tulip with Leaf Outline',
      caption2: 'Tulipa'
    }
  ];

  _counter = 0;
  currentIndex = 0;

  $scope.currentImage = {
    url: $scope.imageCollection[currentIndex].url,
    caption1: $scope.imageCollection[currentIndex].caption1,
    caption2: $scope.imageCollection[currentIndex].caption2
  };

  updateCurrentImage = function(){
    $scope.currentImage.url = $scope.imageCollection[currentIndex].url;
    $scope.currentImage.caption1 = $scope.imageCollection[currentIndex].caption1;
    $scope.currentImage.caption2 = $scope.imageCollection[currentIndex].caption2;
  };
  
  $scope.nextImage = function(){
    _counter++;
    currentIndex = _counter % $scope.imageCollection.length;
    updateCurrentImage();
    console.log("clicked next!");
  };

  $scope.prevImage = function(){
    if(_counter === 0){
      _counter = $scope.imageCollection.length - 1;
    }
    else{
      _counter--;
    }
    currentIndex = _counter % $scope.imageCollection.length;
    updateCurrentImage();
    console.log("clicked prev!");
  };

  angular.element($window).on('keyup', function(e) {
    if(e.keyCode === 37){
      $scope.prevImage();
      $scope.$apply();
    }
    if(e.keyCode === 39){
      $scope.nextImage();
      $scope.$apply();
    }
  });

});