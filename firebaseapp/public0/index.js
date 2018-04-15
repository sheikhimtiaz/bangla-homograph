var homoFire = angular.module("HomoFire", ["firebase"]);

var objectForTheWord={
  word:"",

  meaning1:"",
  sentence1:[],

  meaning2:"",
  sentence2:[],

  meaning3:"",
  sentence3:[],

  meaning4:"",
  sentence4:[],

  meaning5:"",
  sentence5:[],

};


function MainController($scope, $firebase) {
    $scope.favMovies = $firebase(new Firebase('https://bangla-homographic-word.firebaseio.com/words'));
    $scope.movies = [];
    $scope.favMovies.$on('value', function() {
        $scope.movies = [];
        var mvs = $scope.favMovies.$getIndex();
        for (var i = 0; i < mvs.length; i++) {
            $scope.movies.push({
                name: $scope.favMovies[mvs[i]].word,
                key: mvs[i]
            });
        };
    });


    $scope.saveWMToObject = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var wrName = $scope.wordName;
            wordName.value = wrName;
            objectForTheWord.word = wrName;

            var mean01 = $scope.meanOne;
            var mean02 = $scope.meanTwo;
            var mean03 = $scope.meanThree;
            var mean04 = $scope.meanFour;
            var mean05 = $scope.meanFive;
            meanOne.value=mean01;
            meanTwo.value=mean02;
            meanThree.value=mean03;
            meanFour.value=mean04;
            meanFive.value=mean05;
            objectForTheWord.meaning1 = mean01;
            objectForTheWord.meaning2 = mean02;
            objectForTheWord.meaning3 = mean03;
            objectForTheWord.meaning4 = mean04;
            objectForTheWord.meaning5 = mean05;

        }
    }
    $scope.saveSenOneToObject = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var tempSen = $scope.senOne;
            objectForTheWord.sentence1.push(tempSen);
            senOne.value="";
        }
    }
    $scope.saveSenTwoToObject = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var tempSen = $scope.senTwo;
            objectForTheWord.sentence2.push(tempSen);
            senTwo.value="";
        }
    }
    $scope.saveSenThreeToObject = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var tempSen = $scope.senThree;
            objectForTheWord.sentence3.push(tempSen);
            senThree.value="";
        }
    }
    $scope.saveSenFourToObject = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var tempSen = $scope.senFour;
            objectForTheWord.sentence4.push(tempSen);
            senFour.value="";
        }
    }
    $scope.saveSenFiveToObject = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var tempSen = $scope.senFive;
            objectForTheWord.sentence5.push(tempSen);
            senFive.value="";
        }
    }


    $scope.saveToList = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var hmName = $scope.hmName;
            if (hmName.length > 0) {
                $scope.favMovies.$add(objectForTheWord);
                homoName.value = ''; //movieName is the ID of  input box - Angular rocks!
            }
        }
    }

    $scope.edit = function(index) {
    	var mv = $scope.movies[index];
        var newName = prompt("Update this sentence", mv.name); // to keep things simple and old skool :D
        if (newName && newName.length > 0) {
            // build the FB endpoint to the item in movies collection
            var updateMovieRef = buildEndPoint(mv.key, $firebase);
            updateMovieRef.$set({
                name: newName
            });
        }
    }

    $scope.del = function(index) {
    	var mv = $scope.movies[index];
        var response = confirm("Are certain about removing \"" + mv.name + "\" from the list?");
        if (response == true) {
            // build the FB endpoint to the item in movies collection
            var deleteMovieRef = buildEndPoint(mv.key, $firebase);
            deleteMovieRef.$remove();
        }
    }
}

function buildEndPoint(key, $firebase) {
    return $firebase(new Firebase('https://bangla-homographic-word.firebaseio.com/words/' + key));
}
/*
function myDropdownFunctionOne() {
    document.getElementById("myDropdownOne").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myDropdownFunctionTwo() {
    document.getElementById("myDropdownTwo").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
