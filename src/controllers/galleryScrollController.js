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
      caption1: 'Purple Tulips',
      caption2: 'Tulipa'
    },

    {
      url:'img/web_003.jpg',
      caption1: 'Pink California Poppies',
      caption2: 'Eschscholzia californica'
    },

    {
      url:'img/web_004.jpg',
      caption1: 'White Lily',
      caption2: 'Lillium'
    },

    {
      url:'img/web_005.jpg',
      caption1: 'Purple Lisianthus',
      caption2: 'Eustoma grandiflorum'
    },

    {
      url:'img/web_006.jpg',
      caption1: 'Orange Tulips',
      caption2: 'Tulipa'
    },

    {
      url:'img/web_007.jpg',
      caption1: 'Graceful Lily',
      caption2: 'Lillium'
    },

    {
      url:'img/web_008.jpg',
      caption1: 'Red Poppy with Corkscrew Rush',
      caption2: 'Papaver nudicaule, Juncus f. spiralis'
    },

    {
      url:'img/web_009.jpg',
      caption1: 'Dusty Pink Tulip',
      caption2: 'Tulipa'
    },

    {
      url:'img/web_010.jpg',
      caption1: 'Paper White Trio',
      caption2: 'Narcissus papyraceus'
    },

    {
      url:'img/web_011.jpg',
      caption1: 'Orange Tulip',
      caption2: 'Tulipa'
    },

    {
      url:'img/web_012.jpg',
      caption1: 'Pink and White Tulip',
      caption2: 'Tulipa'
    },

    {
      url:'img/web_013.jpg',
      caption1: 'Red Tulip with Leaf Outline',
      caption2: 'Tulipa'
    },

    {
      url:'img/web_014.jpg',
      caption1: 'Anemones Dance',
      caption2: 'Anemone coronaria'
    },

    {
      url:'img/web_015.jpg',
      caption1: 'Pink Campanula',
      caption2: 'Campanula medium'
    },
    {
      url:'img/web_016.jpg',
      caption1: 'Yellow Poppy and Bud',
      caption2: 'Papaver nudicaule'
    },

    {
      url:'img/web_017.jpg',
      caption1: 'Yellow and Red Tulip',
      caption2: 'Tulipa'
    }

  ];


  $scope.thumbnails = [
    'img/Thumbnails/web_001_thumb.jpg',
    'img/Thumbnails/web_002_thumb.jpg',
    'img/Thumbnails/web_003_thumb.jpg',
    'img/Thumbnails/web_004_thumb.jpg',
    'img/Thumbnails/web_005_thumb.jpg',
    'img/Thumbnails/web_006_thumb.jpg',
    'img/Thumbnails/web_007_thumb.jpg',
    'img/Thumbnails/web_008_thumb.jpg',
    'img/Thumbnails/web_009_thumb.jpg',
    'img/Thumbnails/web_010_thumb.jpg',
    'img/Thumbnails/web_011_thumb.jpg',
    'img/Thumbnails/web_012_thumb.jpg',
    'img/Thumbnails/web_013_thumb.jpg',
    'img/Thumbnails/web_014_thumb.jpg',
    'img/Thumbnails/web_015_thumb.jpg',
    'img/Thumbnails/web_016_thumb.jpg',
    'img/Thumbnails/web_017_thumb.jpg'
  ]

  // for (var i=0; i <= $scope.imageCollection.length; i++){
  //   $scope.thumbnails.push()
  // }



  var _counter = 0;
  var currentIndex = 0;

  $scope.isSelected = function(thumbUrl){
    if (thumbUrl === $scope.thumbnails[currentIndex]){
      return true;
    }
    return false;
  };

  $scope.currentImage = $scope.imageCollection[currentIndex]

  updateCurrentImage = function(){
    currentIndex = _counter % $scope.imageCollection.length;
    $scope.currentImage = $scope.imageCollection[currentIndex];
  };
  
  $scope.nextImage = function(){
    _counter++;
    updateCurrentImage();
  };

  $scope.prevImage = function(){
    if(_counter === 0){
      _counter = $scope.imageCollection.length - 1;
    }
    else{
      _counter--;
    }
    updateCurrentImage();
  };

  $scope.selectImage = function($index){
    _counter = $index;
    updateCurrentImage();
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