var myGlobal = 10;
            function ourReusableFunction(a, b){
                console.log(a - b);
            }
            ourReusableFunction(10,5);
            function nextInLiner(arr, item){
                arr.push(item) //push item in array
                return arr.shift(); // remove first item of array
            }
            var testArr = [1,2,3,4,5];
            console.log("Before: "+ JSON.stringify(testArr))
            console.log(nextInLiner(testArr, 6));
            console.log("After: "+ JSON.stringify(testArr));
            function ourTrueOrFalse(isItTrue){
                if (isItTrue){
                    return "Yes, it's true";
                }
                return "No, it's false";
            }
            console.log(ourTrueOrFalse(true));
            // if else statement is same as other programming language
            // switch statement
            function caseInSwitch(val){
                var answer = "";
                switch(val){
                    case 1:
                        answer = "alpha";
                        break;
                    case 2:
                        answer = "beta"
                        break;
                    default:
                        answer = "case not matched"
                }
                return answer;
            }
            console.log(caseInSwitch(2));
            // objects are just like dict in python
            var ourDog = {
                "name": "Camper",
                "no of leg": 4,
                "tails": 1,
                "friends": ["everything!"]
            };
            var nameValue = ourDog.name;
            var tailValue = ourDog.tails
            // we can also use bracket notation, bracket notation is used when there is space in key
            var legValue = ourDog['no of leg']
            console.log("legs: "+legValue)
            ourDog.name = "tommy"
            // also we add new property
            ourDog.bark = "bow-wow";
            delete ourDog.bark;
            // like "get" property in python for dict we have hasOwnProperty
            console.log("check lungs property in ourDog objects: "+ourDog.hasOwnProperty("lungs")) // return true or false

            // we can store object inside an array
            var myMusic = [
                {
                    "artist": "Billy Joel",
                    "title": "Piano Man",
                    "release_year": 1973,
                    "formats": [
                        "CD",
                        "8T",
                        "LP"
                    ],
                    "gold": true
                },
                {
                    "artist": "Beau Carnes",
                    "title": "Cereal Man",
                    "release_year": 2003,
                    "formats": [
                        "youtube"
                    ],
                    "gold": true
                }
            ];
            // Access Nested object
            var myStorage = {
                "car":{
                    "inside":{
                        "glove box": "maps",
                        "passenger seat": "crumbs"
                    },
                    "outside":{
                        "truck": "jack"
                    }
                }
            };
            var gloveBoxContents = myStorage.car.inside['glove box'];
            console.log(gloveBoxContents)
            // Accessing nested array

            var myPlants = [
            {"type": "flowers",
              "list":["rose", "tulip", "dandelion"],
          },
          {
            type: "trees",
            list:["fir", "pine","birch"]
          }
          ];
          var secondTree = myPlants[1].list[1];