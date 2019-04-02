
    //scoping function
(function() {

//start a new round each game
let game;
function eachGame() {
  game = +1;

  //some variables

  // klopfen not clicked
  let rmclicked = false;
  //playButton not clicked
  let inTheGame = false;
  //the game that will be played in that game
  let gameThatWillBePlayed;
  let round;
  // games for player4
  let Sauspiel = false;
  let Wenz = false;
  let Eichel = false;
  let Laub = false;
  let Herz = false;
  let Schellen = false;
  let Schieben = false;
  let schellensolo = false;
  // decission for Player 4 to play
  let decideSauspielPlayer4 = false;
  let decideWenzPlayer4 = false;
  let decideEichelsoloPlayer4 = false;
  let decideLaubsoloPlayer4 = false;
  let decideHerzsoloPlayer4 = false;
  let decideSchellensoloPlayer4 = false;
  // Decide who wants Sauspiel
  let player1WantsToPlaySauspiel = false;
  let player2WantsToPlaySauspiel = false;
  let player3WantsToPlaySauspiel = false;
  let player4WantsToPlaySauspiel = false;
  //which sequence will be loaded
  let whichSourceToLoad;
  // decide if computer will play
  let decideSauspielPlayer = 0;
  let SauspielPlayer = false;
  let decideWenzPlayer = 0;
  let WenzPlayer = false;
  let decideEichelsoloPlayer = 0;
  let eichelsoloPlayer = false;
  let decideLaubsoloPlayer = 0;
  let laubsoloPlayer = false;
  let decideHerzsoloPlayer = 0;
  let herzsoloPlayer = false;
  let decideSchellensoloPlayer = 0;
  let schellensoloPlayer = false;
  //pick your choosen card
  let pickCard1 = false;
  let pickCard2 = false;
  let pickCard3 = false;
  let pickCard4 = false;
  let pickCard5 = false;
  let pickCard6 = false;
  let pickCard7 = false;
  let pickCard8 = false;
  // amount of cardvalue of each player
  let player1Value = 0;
  let player2Value = 0;
  let player3Value = 0;
  let player4Value = 0;
  let yourPlayedCard;
  // count the value of each player
  let gameValuePlayer1 = 0;
  let gameValuePlayer2 = 0;
  let gameValuePlayer3 = 0;
  let gameValuePlayer4 = 0;
  //who wins the round
  let willPlayer1Win;
  let willPlayer2Win;
  let willPlayer3Win;
  let willPlayer4Win;
  let  maxChampionName = "willPlayer1Win";
  //variables for the animation
  let requestID;
  let posX;
  let posY;
  let cardWidth = 180;
  let pixelsPerFrame;
  let xanimation



  //Fisher Yates Algorythm to shuffle the cards
  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  shuffle(arr);
  if (game === 5) {
    game = 1;
  }

  //divide cards
  //your Hand
  const yourHandAll = [];
    for (let i = 0; i < 8; i++) {
    yourHandAll.push(arr[i])
  };
  const yourHandUnsortedOnlyName = yourHandAll.map(a => a.name);
  //hand player1
  const handPlayer1 = [];
    for (let i = 8; i < 16; i++) {
    handPlayer1.push(arr[i])
  };
  const handPlayer1OnlyName = handPlayer1.map (a => a.name);
  //hand player2
  const handPlayer2 = [];
    for (let i = 16; i < 24; i++) {
    handPlayer2.push(arr[i])
  };
  const handPlayer2OnlyName = handPlayer2.map (a => a.name);
  //hand player3
  const handPlayer3 = [];
    for (let i = 24; i < 32; i++) {
    handPlayer3.push(arr[i])
  };
  const handPlayer3OnlyName = handPlayer3.map (a => a.name);





  //sort cards for each game
  //sort for Sauspiel and beginning
  function compareSauspiel (a,b) {
     if (a.sauspiel < b.sauspiel)
       return -1;
     if (a.sauspiel > b.sauspiel)
       return 1;
     return 0;
   }
  const yourHandSauspiel = yourHandAll.sort(compareSauspiel);
  const yourHandSauspielName = yourHandSauspiel.map(a => a.name);
  //sort for Wenz
  function compareWenz(a,b) {
    if (a.wenz < b.wenz)
      return -1;
    if (a.wenz > b.wenz)
      return 1;
    return 0;
  }
  const yourHandWenz = yourHandAll.sort(compareWenz);
  const yourHandWenzName = yourHandWenz.map(a => a.name)
  //sort for Eichelsolo
  function compareEichelsolo(a,b) {
    if (a.eichelsolo < b.eichelsolo)
      return -1;
    if (a.eichelsolo > b.eichelsolo)
      return 1;
    return 0;
  }
  const yourHandEichelsolo = yourHandAll.sort(compareEichelsolo);
  const yourHandEichelsoloName = yourHandEichelsolo.map(a => a.name);
  //sort for Laubsolo
  function compareLaubsolo(a,b) {
    if (a.laubsolo < b.laubsolo)
      return -1;
    if (a.laubsolo > b.laubsolo)
      return 1;
    return 0;
  }
  const yourHandLaubsolo = yourHandAll.sort(compareLaubsolo);
  const yourHandLaubsoloName = yourHandLaubsolo.map(a => a.name);
  //sort for Herzsolo
  function compareHerzsolo(a,b) {
    if (a.herzsolo < b.herzsolo)
      return -1;
    if (a.herzsolo > b.herzsolo)
      return 1;
    return 0;
  }
  const yourHandHerzsolo = yourHandAll.sort(compareHerzsolo);
  const yourHandHerzsoloName = yourHandHerzsolo.map(a => a.name);
  //sort for Schellensolo
  function compareSchellensolo(a,b) {
    if (a.schellensolo < b.schellensolo)
      return -1;
    if (a.schellensolo > b.schellensolo)
      return 1;
    return 0;
  }
  const yourHandSchellensolo = yourHandAll.sort(compareSchellensolo);
  const yourHandSchellensoloName = yourHandSchellensolo.map(a => a.name);


  //function to draw the images
  function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    // get num of sources
    for(let src in sources) {
      numImages++;
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
          }
        };
      images[src].src = sources[src];
      }
    }



  //start the canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');


  //Function to get the mouse position
  function getMousePos(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  //Function to check whether a point is inside a rectangle
  function isInside(pos, rect){
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
  }



  // stack of cards sorted for each game
  // unsorted first hand
  const firstSources = {
    background: "images/Eichenholz.jpg",
    card1: yourHandUnsortedOnlyName[0],
    card2: yourHandUnsortedOnlyName[1],
    card3: yourHandUnsortedOnlyName[2],
    card4: yourHandUnsortedOnlyName[3],
    reichsmark: "images/Reichsmark.jpg"
  }
  //sort for Sauspiel and beginning
  const sources = {
    background: "images/Eichenholz.jpg",
    card1: yourHandSauspielName[0],
    card2: yourHandSauspielName[1],
    card3: yourHandSauspielName[2],
    card4: yourHandSauspielName[3],
    card5: yourHandSauspielName[4],
    card6: yourHandSauspielName[5],
    card7: yourHandSauspielName[6],
    card8: yourHandSauspielName[7],
    reichsmark: "images/Reichsmark.jpg"
    };
  //sort for Wenz
  const sourcesWenz = {
    background: "images/Eichenholz.jpg",
    card1: yourHandWenzName[0],
    card2: yourHandWenzName[1],
    card3: yourHandWenzName[2],
    card4: yourHandWenzName[3],
    card5: yourHandWenzName[4],
    card6: yourHandWenzName[5],
    card7: yourHandWenzName[6],
    card8: yourHandWenzName[7],
    reichsmark: "images/Reichsmark.jpg"
    };
      //sort for Eichelsolo
  const sourcesEichelsolo = {
    background: "images/Eichenholz.jpg",
    card1: yourHandEichelsoloName[0],
    card2: yourHandEichelsoloName[1],
    card3: yourHandEichelsoloName[2],
    card4: yourHandEichelsoloName[3],
    card5: yourHandEichelsoloName[4],
    card6: yourHandEichelsoloName[5],
    card7: yourHandEichelsoloName[6],
    card8: yourHandEichelsoloName[7],
    reichsmark: "images/Reichsmark.jpg"
  }
  //sort for Laubsolo
  const sourcesLaubsolo = {
  background: "images/Eichenholz.jpg",
  card1: yourHandLaubsoloName[0],
  card2: yourHandLaubsoloName[1],
  card3: yourHandLaubsoloName[2],
  card4: yourHandLaubsoloName[3],
  card5: yourHandLaubsoloName[4],
  card6: yourHandLaubsoloName[5],
  card7: yourHandLaubsoloName[6],
  card8: yourHandLaubsoloName[7],
  reichsmark: "images/Reichsmark.jpg"
  }
  //sort for Herzsolo
  const sourcesHerzsolo = {
  background: "images/Eichenholz.jpg",
  card1: yourHandHerzsoloName[0],
  card2: yourHandHerzsoloName[1],
  card3: yourHandHerzsoloName[2],
  card4: yourHandHerzsoloName[3],
  card5: yourHandHerzsoloName[4],
  card6: yourHandHerzsoloName[5],
  card7: yourHandHerzsoloName[6],
  card8: yourHandHerzsoloName[7],
  reichsmark: "images/Reichsmark.jpg"
  }
  //sort for Schellensolo
  const sourcesSchellensolo = {
  background: "images/Eichenholz.jpg",
  card1: yourHandSchellensoloName[0],
  card2: yourHandSchellensoloName[1],
  card3: yourHandSchellensoloName[2],
  card4: yourHandSchellensoloName[3],
  card5: yourHandSchellensoloName[4],
  card6: yourHandSchellensoloName[5],
  card7: yourHandSchellensoloName[6],
  card8: yourHandSchellensoloName[7],
  reichsmark: "images/Reichsmark.jpg"
  }
  //sort for Player1
  const sourcesPlayer1 = {
    card1: handPlayer1OnlyName[0],
    card2: handPlayer1OnlyName[1],
    card3: handPlayer1OnlyName[2],
    card4: handPlayer1OnlyName[3],
    card5: handPlayer1OnlyName[4],
    card6: handPlayer1OnlyName[5],
    card7: handPlayer1OnlyName[6],
    card8: handPlayer1OnlyName[7],
  }
  //sort for Player2
  const sourcesPlayer2 = {
    card1: handPlayer2OnlyName[0],
    card2: handPlayer2OnlyName[1],
    card3: handPlayer2OnlyName[2],
    card4: handPlayer2OnlyName[3],
    card5: handPlayer2OnlyName[4],
    card6: handPlayer2OnlyName[5],
    card7: handPlayer2OnlyName[6],
    card8: handPlayer2OnlyName[7],
  }
  //sort for Player3
  const sourcesPlayer3 = {
    card1: handPlayer3OnlyName[0],
    card2: handPlayer3OnlyName[1],
    card3: handPlayer3OnlyName[2],
    card4: handPlayer3OnlyName[3],
    card5: handPlayer3OnlyName[4],
    card6: handPlayer3OnlyName[5],
    card7: handPlayer3OnlyName[6],
    card8: handPlayer3OnlyName[7],
  }

  //make the rect to all click buttons
  const rectKlopfen = {
    x:canvas.width/2,
    y:540,
    width:350,
    height:70
  };
  const rectSchieben = {
    x:canvas.width/2,
    y:220,
    width:350,
    height:32
    };
  const rectSauspiel = {
    x:canvas.width/2,
    y:270,
    width:350,
    height:32
    };
  const rectWenz = {
    x:canvas.width/2,
    y:320,
    width:350,
    height:32
    };
  const rectEichelsolo = {
    x:canvas.width/2,
    y:370,
    width:350,
    height:32
    };
  const rectLaubsolo = {
    x:canvas.width/2,
    y:420,
    width:350,
    height:32
    };
  const rectHerzsolo = {
    x:canvas.width/2,
    y:470,
    width:350,
    height:32
    };
  const rectSchellensolo = {
    x:canvas.width/2,
    y:520,
    width:350,
    height:32
    };
  const rectPlayButton = {
    x:canvas.width/2,
    y:580,
    width:350,
    height:72
    };
  const rectOK = {
    x: 290,
    y: 290,
    width: 130,
    height:90
  };
  let rectCard1 = {
    x: 0,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard2 = {
    x: 87,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard3 = {
    x: 174,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard4 = {
    x: 248,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard5 = {
    x: 335,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard6 = {
    x: 422,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard7 = {
    x: 509,
    y: 700,
    width: 87,
    height: 200
  };
  let rectCard8 = {
    x: 596,
    y: 700,
    width: 174,
    height: 200
  };

  // function for klopfen
  function getEvent(event) {
    const mousePos = getMousePos(canvas, event);
    //The rectangle
    if (isInside(mousePos,rectKlopfen)) {
      loadImages(firstSources, function(images) {
        ctx.drawImage(images.reichsmark,50,580,100,100)
        rmclicked = true;
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);
        if (rmclicked === true) {
          ctx.drawImage(images.reichsmark,50,580,100,100)
          ctx.translate(0,700);
          ctx.drawImage(images.card1, 0, 0, 180, 230);
          ctx.translate(87,0);
          ctx.drawImage(images.card2, 0, 0, 180, 230);
          ctx.translate(87,0);
          ctx.drawImage(images.card3, 0, 0, 180, 230);
          ctx.translate(87,0);
          ctx.drawImage(images.card4, 0, 0, 180, 230);
          canvas.removeEventListener('click', getEvent, false);
          ctx.restore();
        }
      });
    }
  }



  //load first round of cards
  loadImages(firstSources, function(images) {
    ctx.save();
    ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);

    ctx.translate(0,700);
    ctx.drawImage(images.card1, 0, 0, 180, 230);
    ctx.translate(87,0);
    ctx.drawImage(images.card2, 0, 0, 180, 230);
    ctx.translate(87,0);
    ctx.drawImage(images.card3, 0, 0, 180, 230);
    ctx.translate(87,0);
    ctx.drawImage(images.card4, 0, 0, 180, 230);
    ctx.restore();
      //load "klopfen"
      //Binding the click event on the canvas
    canvas.addEventListener('click',getEvent , false);
    ctx.restore();
    ctx.fillStyle = ("white");
    ctx.font = '60pt Calibri';
    ctx.fillText("KLOPFEN",canvas.width/2,600)
    ctx.restore();
  });


  // first draw only cards without menu
  function drawOnlyCards(source) {
    loadImages(source, function(images) {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);
      if (rmclicked === true) {
        ctx.drawImage(images.reichsmark,50,580,100,100)
      };
      canvas.removeEventListener('click', getEvent, false);
      ctx.translate(0,700);
      ctx.drawImage(images.card1, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card2, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card3, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card4, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card5, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card6, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card7, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card8, 0, 0, 180, 230);
    });
  }

  // function to draw cards with menu
  function drawCards(source) {
    loadImages(source, function(images) {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);
      if (rmclicked === true) {
        ctx.drawImage(images.reichsmark,50,580,100,100)
      };
      canvas.removeEventListener('click', getEvent, false);
      ctx.translate(0,700);
      ctx.drawImage(images.card1, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card2, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card3, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card4, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card5, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card6, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card7, 0, 0, 180, 230);
      ctx.translate(87,0);
      ctx.drawImage(images.card8, 0, 0, 180, 230);
      ctx.translate(87,0);
      console.log(rmclicked);
      // menu to choose game
      ctx.restore();
      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Schieben",canvas.width/2,250);

      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Sauspiel",canvas.width/2,300);

      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Wenz",canvas.width/2,350);

      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Eichelsolo",canvas.width/2,400);

      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Laubsolo",canvas.width/2,450);

      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Herzsolo",canvas.width/2,500);

      ctx.fillStyle = ("white");
      ctx.font = '30pt Calibri';
      ctx.fillText("Schellensolo",canvas.width/2,550);
      // if one game is clicked show "weiter"
      if (Sauspiel === true || Wenz === true || Eichel === true ||
        Laub === true || Herz === true || Schellen === true || Schieben === true) {
        ctx.fillStyle = ("white");
        ctx.font = '60pt Calibri';
        ctx.fillText("WEITER", canvas.width/2,650);
        ctx.restore();
      }
    });
  }

  //load second round of cards
  //click for Sauspiel
  setTimeout (function () {
    drawCards(sources);
    //Binding the click event for Sauspiel on the canvas
    function SauspielEvent(event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectSauspiel)) {
        drawCards(sources);
        // load color for the chosen game
        loadImages(sources, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Sauspiel",canvas.width/2,300);
          ctx.restore();
        });
          Sauspiel = true;
          Wenz = false;
          Eichel = false;
          Laub = false;
          Herz = false;
          Schellen = false;
      }
    }
    canvas.addEventListener('click', SauspielEvent, false);


    // Click for Wenz
    //Binding the click event on the canvas
    function WenzEvent (event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectWenz)) {
        drawCards(sourcesWenz);
        // load color for the chosen game
        loadImages(sources, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Wenz",canvas.width/2,350);
          ctx.restore();
        });
          Sauspiel = false;
          Wenz = true;
          Eichel = false;
          Laub = false;
          Herz = false;
          Schellen = false;
      }
    }
    canvas.addEventListener('click', WenzEvent, false);



    //Click for Eichelsolo
    //Binding the click event on the canvas
    function EichelEvent(event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectEichelsolo)) {
        drawCards(sourcesEichelsolo);
        // load color for the chosen game
        loadImages(sources, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Eichelsolo",canvas.width/2,400);
          ctx.restore();
        });
          Sauspiel = false;
          Wenz = false;
          Eichel = true;
          Laub = false;
          Herz = false;
          Schellen = false;
      }
    }
    canvas.addEventListener('click', EichelEvent, false);



    // Click for Laubsolo
    //Binding the click event on the canvas
    function LaubEvent(event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectLaubsolo)) {
        drawCards(sourcesLaubsolo);
        // load color for the chosen game
        loadImages(sources, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Laubsolo",canvas.width/2,450);
          ctx.restore();
        });
          Sauspiel = false;
          Wenz = false;
          Eichel = false;
          Laub = true;
          Herz = false;
          Schellen = false;
      }
    }
    canvas.addEventListener('click', LaubEvent, false);



    // Click for Herzsolo
    //Binding the click event on the canvas
    function HerzEvent(event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectHerzsolo)) {
        drawCards(sourcesHerzsolo);
        // load color for the chosen game
        loadImages(sources, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Herzsolo",canvas.width/2,500);
          ctx.restore();
        });
          Sauspiel = false;
          Wenz = false;
          Eichel = false;
          Laub = false;
          Herz = true;
          Schellen = false;
      }
    }
    canvas.addEventListener('click', HerzEvent, false);



    // Click for Schellensolo
    //Binding the click event on the canvas
    function SchellenEvent(event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectSchellensolo)) {
        drawCards(sourcesSchellensolo);
        // load color for the chosen game
        loadImages(sourcesSchellensolo, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Schellensolo",canvas.width/2,550);
          ctx.restore();
        });
          Sauspiel = false;
          Wenz = false;
          Eichel = false;
          Laub = false;
          Herz = false;
          Schellen = true;
      }
    }
    canvas.addEventListener('click', SchellenEvent, false);



    // Click for Schieben
    function SchiebenEvent(event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectSchieben)) {
        drawCards(sources);
        // load color for the chosen game
        loadImages(sourcesSchellensolo, function(images) {
          ctx.fillStyle = ("yellow");
          ctx.font = '30pt Calibri';
          ctx.fillText("Schieben",canvas.width/2,250);
          ctx.restore();
        });
        Sauspiel = false;
        Wenz = false;
        Eichel = false;
        Laub = false;
        Herz = false;
        Schellen = false;
        Schieben = true;
      }
    }
    canvas.addEventListener('click', SchiebenEvent, false);


    // Press playButton
    canvas.addEventListener('click',function (event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectPlayButton)) {
        if (Sauspiel === true || Wenz === true || Eichel === true ||
          Laub === true || Herz === true || Schellen === true || Schieben === true) {
          canvas.removeEventListener('click', SauspielEvent, false);
          canvas.removeEventListener('click', WenzEvent, false);
          canvas.removeEventListener('click', EichelEvent, false);
          canvas.removeEventListener('click', LaubEvent, false);
          canvas.removeEventListener('click', HerzEvent, false);
          canvas.removeEventListener('click', SchellenEvent, false);
          this.removeEventListener('click', arguments.callee);


          //function to decide a Sauspiel
          function decideSauspiel (handPlayerOnlyName) {
            if (handPlayerOnlyName.includes('images/EichelkarteO.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteO.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteO.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteO.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteU.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteU.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteU.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteU.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteA.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte10.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteK.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte9.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte8.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte7.jpg') === true) {
              decideSauspielPlayer = decideSauspielPlayer +1;
            }
            if (decideSauspielPlayer>10) {
              sauspielPlayer = true;
            }
          }



          // function to decide a Wenz
          function decideWenz (handPlayerOnlyName) {
            if (handPlayerOnlyName.includes('images/EichelkarteO.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteO.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteO.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteO.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteU.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +4;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteU.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteU.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteU.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteA.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteA.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteA.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteA.jpg') === true) {
              decideWenzPlayer = decideWenzPlayer + 2;
            }
            if (decideWenzPlayer>12) {
              wenzPlayer = true;
            }
          }



          //function to decide a Eichelsolo
          function decideEichelsolo (handPlayerOnlyName) {
            if (handPlayerOnlyName.includes('images/EichelkarteO.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +4;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteO.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteO.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteO.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteU.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteU.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteU.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteU.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteA.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/Eichelkarte10.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteK.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/Eichelkarte9.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Eichelkarte8.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Eichelkarte7.jpg') === true) {
              decideEichelsoloPlayer = decideEichelsoloPlayer +1;
            }
            if (decideEichelsoloPlayer>12) {
              eichelsoloplayer = true;
            }
          }


          //function to decide a Laubsolo
          function decideLaubsolo (handPlayerOnlyName) {
            if (handPlayerOnlyName.includes('images/EichelkarteO.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +4;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteO.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteO.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteO.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteU.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteU.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteU.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteU.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteA.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte10.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteK.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/Laubkarte9.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Laubkarte8.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Laubkarte7.jpg') === true) {
              decideLaubsoloPlayer = decideLaubsoloPlayer +1;
            }
            if (decideLaubsoloPlayer>12) {
              laubsoloPlayer = true;
            }
          }


          //function to decide a Herzsolo
          function decideHerzsolo (handPlayerOnlyName) {
            if (handPlayerOnlyName.includes('images/EichelkarteO.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +4;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteO.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteO.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteO.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteU.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteU.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteU.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteU.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteA.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte10.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteK.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte9.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte8.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Herzkarte7.jpg') === true) {
              decideHerzsoloPlayer = decideHerzsoloPlayer +1;
            }
            if (decideHerzsoloPlayer>12) {
              HerzsoloPlayer = true;
            }
          }



          //function to decide a Schellensolo
          function decideSchellensolo (handPlayerOnlyName) {
            if (handPlayerOnlyName.includes('images/EichelkarteO.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +4;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteO.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +3.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteO.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteO.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +3;
            }
            if (handPlayerOnlyName.includes('images/EichelkarteU.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/LaubkarteU.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +2.5;
            }
            if (handPlayerOnlyName.includes('images/HerzkarteU.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteU.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteA.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +2;
            }
            if (handPlayerOnlyName.includes('images/Schellenkarte10.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/SchellenkarteK.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +1.5;
            }
            if (handPlayerOnlyName.includes('images/Schellenkarte9.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Schellenkarte8.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +1;
            }
            if (handPlayerOnlyName.includes('images/Schellenkarte7.jpg') === true) {
              decideSchellensoloPlayer = decideSchellensoloPlayer +1;
            }
            if (decideSchellensoloPlayer>12) {
              schellensoloplayer = true;
            }
          }



          // check if player 1 wants to play
          // Sauspiel
          decideSauspiel (handPlayer1OnlyName);
          let decideSauspielPlayer1 = decideSauspielPlayer;
          //Wenz
          decideWenz (handPlayer1OnlyName);
          let decideWenzPlayer1 = decideWenzPlayer;
          // Eichelsolo
          decideEichelsolo (handPlayer1OnlyName);
          let decideEichelsoloPlayer1 = decideEichelsoloPlayer;
          // Laubsolo
          decideLaubsolo(handPlayer1OnlyName);
          let decideLaubsoloPlayer1 = decideLaubsoloPlayer;
          // Herzsolo
          decideHerzsolo (handPlayer1OnlyName);
          let decideHerzsoloPlayer1 = decideHerzsoloPlayer;
          // schellensolo
          decideSchellensolo (handPlayer1OnlyName);
          let decideSchellensoloPlayer1 = decideSchellensoloPlayer;
          let SauspielPlayer1 = "SauspielPlayer1";
          let player1WantsToPlaySolo = false;
          let player1WantsToPlaySauspiel = false;
          let whichGamePlayer1;
          //first check Sauspiel
          if (decideSauspielPlayer1 > 7) {
            player1WantsToPlaySauspiel = true;
            whichGamePlayer1 = SauspielPlayer1;
          }
          //check other games
          const gamesplayer1 = [ decideWenzPlayer1, decideEichelsoloPlayer1,
          decideLaubsoloPlayer1, decideHerzsoloPlayer1, decideSchellensoloPlayer1];
          const maxGamePlayer1 = Math.max.apply(Math.max, gamesplayer1);
          const gameNamesPlayer1 = ["WenzPlayer1", "EichelsoloPlayer1",
          "LaubsoloPlayer1", "HerzsoloPlayer1", "SchellensoloPlayer1"];
          let whichSoloGamePlayer1 = gameNamesPlayer1 [gamesplayer1.indexOf(maxGamePlayer1)];
          if (maxGamePlayer1 > 13) {
            player1WantsToPlaySolo = true;
            whichGamePlayer1 = whichSoloGamePlayer1;
          }
          console.log("decide Sauspiel Player 1 " + decideSauspielPlayer1);
          console.log("max hand player Player 1 " + maxGamePlayer1);
          console.log("which game Player 1 would play" + whichGamePlayer1);

          console.log(handPlayer1OnlyName[0]);

          console.log(arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].sauspiel);

          // check if player 2 wants to play
          // Sauspiel
          decideSauspielPlayer = 0;
          SauspielPlayer = false;
          decideSauspiel (handPlayer2OnlyName);
          let decideSauspielPlayer2 = decideSauspielPlayer;
          //Wenz
          decideWenzPlayer = 0;
          WenzPlayer = false;
          decideWenz (handPlayer2OnlyName);
          let decideWenzPlayer2 = decideWenzPlayer;
          // Eichelsolo
          decideEichelsoloPlayer = 0;
          eichelsoloPlayer = false;
          decideEichelsolo (handPlayer2OnlyName);
          let decideEichelsoloPlayer2 = decideEichelsoloPlayer;
          // Laubsolo
          decideLaubsoloPlayer = 0;
          laubsoloPlayer = false;
          decideLaubsolo(handPlayer2OnlyName);
          let decideLaubsoloPlayer2 = decideLaubsoloPlayer;
          // Herzsolo
          decideHerzsoloPlayer = 0;
          herzsoloPlayer = false;
          decideHerzsolo (handPlayer2OnlyName);
          let decideHerzsoloPlayer2 = decideHerzsoloPlayer;
          // schellensolo
          decideSchellensoloPlayer = 0;
          schellensoloPlayer = false;
          decideSchellensolo (handPlayer2OnlyName);
          let decideSchellensoloPlayer2 = decideSchellensoloPlayer;

          let SauspielPlayer2 = "SauspielPlayer2";
          let player2WantsToPlaySolo = false;
          let player2WantsToPlaySauspiel = false;
          let whichGamePlayer2;

          //first check Sauspiel
          if (decideSauspielPlayer2 > 7) {
            player2WantsToPlaySauspiel = true;
            whichGamePlayer2 = SauspielPlayer2;
          }
          //check other games
          const gamesplayer2 = [decideEichelsoloPlayer2,
          decideLaubsoloPlayer2, decideHerzsoloPlayer2, decideSchellensoloPlayer2];
          const maxGamePlayer2 = Math.max.apply(Math.max, gamesplayer2);
          const gameNamesPlayer2 = ["EichelsoloPlayer2",
          "LaubsoloPlayer2", "HerzsoloPlayer2", "SchellensoloPlayer2"];
          let whichSoloGamePlayer2 = gameNamesPlayer2 [gamesplayer2.indexOf(maxGamePlayer2)];
          if (maxGamePlayer2 > 13) {
            player2WantsToPlaySolo = true;
            whichGamePlayer2 = whichSoloGamePlayer2;
          }



          // check if player 3 wants to play
          // Sauspiel
          decideSauspielPlayer = 0;
          SauspielPlayer = false;
          decideSauspiel (handPlayer3OnlyName);
          let decideSauspielPlayer3 = decideSauspielPlayer;
          //Wenz
          decideWenzPlayer = 0;
          WenzPlayer = false;
          decideWenz (handPlayer3OnlyName);
          let decideWenzPlayer3 = decideWenzPlayer;
          // Eichelsolo
          decideEichelsoloPlayer = 0;
          eichelsoloPlayer = false;
          decideEichelsolo (handPlayer3OnlyName);
          let decideEichelsoloPlayer3 = decideEichelsoloPlayer;
          // Laubsolo
          decideLaubsoloPlayer = 0;
          laubsoloPlayer = false;
          decideLaubsolo(handPlayer3OnlyName);
          let decideLaubsoloPlayer3 = decideLaubsoloPlayer;
          // Herzsolo
          decideHerzsoloPlayer = 0;
          herzsoloPlayer = false;
          decideHerzsolo (handPlayer3OnlyName);
          let decideHerzsoloPlayer3 = decideSchellensoloPlayer;
          // schellensolo
          decideSchellensoloPlayer = 0;
          schellensoloPlayer = false;
          decideSchellensolo (handPlayer3OnlyName);
          let = decideSchellensoloPlayer3 = decideSchellensoloPlayer;

          let SauspielPlayer3 = "SauspielPlayer3";
          let player3WantsToPlaySolo = false;
          let player3WantsToPlaySauspiel = false;
          let whichGamePlayer3;

          //first check Sauspiel
          if (decideSauspielPlayer3 > 7) {
            player3WantsToPlaySauspiel = true;
            whichGamePlayer3 = SauspielPlayer3;
          }
          //check other games
          const gamesplayer3 = [decideWenzPlayer3, decideEichelsoloPlayer3,
          decideLaubsoloPlayer3, decideHerzsoloPlayer3, decideSchellensoloPlayer3];
          const maxGamePlayer3 = Math.max.apply(Math.max, gamesplayer3);
          const gameNamesPlayer3 = ["WenzPlayer3", "EichelsoloPlayer3",
          "LaubsoloPlayer3", "HerzsoloPlayer3", "SchellensoloPlayer3"];
          let whichSoloGamePlayer3 = gameNamesPlayer3 [gamesplayer3.indexOf(maxGamePlayer3)];
          if (maxGamePlayer3 > 13) {
            player3WantsToPlaySolo = true;
            whichGamePlayer3 = whichSoloGamePlayer3;
          }


          //decide if you want to play
          let player4WantsToPlaySolo = false;
          let player4WantsToPlaySauspiel = false;
          if (Sauspiel === true) {
            player4WantsToPlaySauspiel = true;
          } else if (Wenz === true ||  Eichel === true
          || Laub === true || Herz === true || Schellen === true) {
            player4WantsToPlaySolo = true;
          }



          // decide who is playing
          //first Sauspiel
          if (game === 1) {
            if (player1WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer1;
              player2WantsToPlaySauspiel = false;
              player3WantsToPlaySauspiel = false;
              player4WantsToPlaySauspiel = false;
            } else if (player2WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer2;
              player3WantsToPlaySauspiel = false;
              player4WantsToPlaySauspiel = false;
              gameThatWillBePlayed = SauspielPlayer3;
              player4WantsToPlaySauspiel = false;
            } else if (player4WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = Sauspiel;
            }

          // next Solo
            if (player1WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer1;
              player2WantsToPlaySolo = false;
              player3WantsToPlaySolo = false;
              player4WantsToPlaySolo = false;
            } else if (player2WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer2;
              player3WantsToPlaySolo = false;
              player4WantsToPlaySolo = false;
            } else if (player3WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer3;
              player4WantsToPlaySolo = false;
            } else if (player4WantsToPlaySolo === true) {
                if (Wenz === true) {
                  gameThatWillBePlayed = Wenz;
                }
                else if (Eichel === true) {
                  gameThatWillBePlayed = Eichel;
                }
                else if (Laub === true) {
                  gameThatWillBePlayed = Laub;
                }
                else if (Herz === true) {
                  gameThatWillBePlayed = Herz;
                }
                else if (Schellen === true) {
                  gameThatWillBePlayed = Schellen;
                }
              }
          } else {
            Schieben = true;
          }

          if (game === 2) {
            if (player2WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer2;
              player3WantsToPlaySauspiel = false;
              player4WantsToPlaySauspiel = false;
              player1WantsToPlaySauspiel = false;
            } else if (player3WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer3;
              player4WantsToPlaySauspiel = false;
              player1WantsToPlaySauspiel = false;
            } if (player4WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = Sauspiel;
              player1WantsToPlaySauspiel = false;
            } else if (player1WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer1;
            }

          // next Solo
          if (player2WantsToPlaySolo === true) {
            gameThatWillBePlayed = whichGamePlayer2;
            player3WantsToPlaySolo = false;
            player4WantsToPlaySolo = false;
            player1WantsToPlaySolo = false;

          }
          else if (player3WantsToPlaySolo === true) {
            gameThatWillBePlayed = whichGamePlayer3;
            player2WantsToPlaySolo = false;
            player3WantsToPlaySolo = false;
          }
          else if (player4WantsToPlaySolo === true) {
            player3WantsToPlaySolo = false;
            if (Wenz === true) {
              gameThatWillBePlayed = Wenz;
            }
            else if (Eichel === true) {
              gameThatWillBePlayed = Eichel;
            }
            else if (Laub === true) {
              gameThatWillBePlayed = Laub;
            }
            else if (Herz === true) {
              gameThatWillBePlayed = Herz;
            }
            else if (Schellen === true) {
              gameThatWillBePlayed = Schellen;
            }
          }
          else if (player1WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer1;
          }
        } else {
          Schieben = true;
        }

          if (game === 3) {
            if (player3WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer3;
              player4WantsToPlaySauspiel = false;
              player1WantsToPlaySauspiel = false;
              player2WantsToPlaySauspiel = false;
            } else if (player4WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = Sauspiel;
              player1WantsToPlaySauspiel = false;
              player2WantsToPlaySauspiel = false;
            } if (player1WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer1;
              player2WantsToPlaySauspiel = false;
            } else if (player2WantsToPlaySauspiel === true) {
              gameThatWillBePlayed = SauspielPlayer2;
            }

          // next Solo
          if (player3WantsToPlaySolo === true) {
            gameThatWillBePlayed = whichGamePlayer3;
            player4WantsToPlaySolo = false;
            player1WantsToPlaySolo = false;
            player2WantsToPlaySolo = false;
          } else if (player4WantsToPlaySolo === true) {
            player1WantsToPlaySolo = false;
            player2WantsToPlaySolo = false;
            if (Wenz === true) {
              gameThatWillBePlayed = Wenz;
            }
            else if (Eichel === true) {
              gameThatWillBePlayed = Eichel;
            }
            else if (Laub === true) {
              gameThatWillBePlayed = Laub;
            }
            else if (Herz === true) {
              gameThatWillBePlayed = Herz;
            }
            else if (Schellen === true) {
              gameThatWillBePlayed = Schellen;
            }
          }
          else if (player1WantsToPlaySolo === true) {
            gameThatWillBePlayed = whichGamePlayer1;
            player2WantsToPlaySolo = false;
          }
          else if (player2WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer2;
          }
        } else {
          Schieben = true;
        }

          if (game === 4) {
              if (player4WantsToPlaySauspiel === true) {
                gameThatWillBePlayed = Sauspiel;
                player1WantsToPlaySauspiel = false;
                player2WantsToPlaySauspiel = false;
                player3WantsToPlaySauspiel = false;
              } else if (player1WantsToPlaySauspiel === true) {
                gameThatWillBePlayed = SauspielPlayer1;
                player2WantsToPlaySauspiel = false;
                player3WantsToPlaySauspiel = false;
              } if (player2WantsToPlaySauspiel === true) {
                gameThatWillBePlayed = SauspielPlayer2;
                player3WantsToPlaySauspiel = false;
              } else if (player3WantsToPlaySauspiel === true) {
                gameThatWillBePlayed = SauspielPlayer3;
              }

            // next Solo
            if (player4WantsToPlaySolo === true) {
              player1WantsToPlaySolo = false;
              player2WantsToPlaySolo = false;
              player3WantsToPlaySolo = false;
              if (Wenz === true) {
                gameThatWillBePlayed = Wenz;
              }
              else if (Eichel === true) {
                gameThatWillBePlayed = Eichel;
              }
              else if (Laub === true) {
                gameThatWillBePlayed = Laub;
              }
              else if (Herz === true) {
                gameThatWillBePlayed = Herz;
              }
              else if (Schellen === true) {
                gameThatWillBePlayed = Schellen;
              }
            }
            else if (player1WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer1;
              player2WantsToPlaySolo = false;
              player3WantsToPlaySolo = false;
            }
            else if (player2WantsToPlaySolo === true) {
              gameThatWillBePlayed = whichGamePlayer2;
              player3WantsToPlaySolo = false;
            }
            else if (player3WantsToPlaySolo === true) {
                gameThatWillBePlayed = whichGamePlayer3;
            }
          } else {
            Schieben = true;
          }

          // load the right sequence of cards
          if (gameThatWillBePlayed === Sauspiel || gameThatWillBePlayed === "SauspielPlayer1" ||
            gameThatWillBePlayed === "SauspielPlayer2" || gameThatWillBePlayed === "SauspielPlayer3") {
              whichSourceToLoad = sources;
            } else if (gameThatWillBePlayed === Wenz || gameThatWillBePlayed === "WenzPlayer1" ||
            gameThatWillBePlayed === "WenzPlayer2" ||gameThatWillBePlayed == "WenzPlayer3") {
              whichSourceToLoad = sourcesWenz;
            }else if (gameThatWillBePlayed === Eichel || gameThatWillBePlayed === "EichelsoloPlayer1" ||
            gameThatWillBePlayed === "EichelsoloPlayer2" ||gameThatWillBePlayed == "EichelsoloPlayer3") {
              whichSourceToLoad = sourcesEichelsolo;
            } else if (gameThatWillBePlayed === Laub || gameThatWillBePlayed === "LaubsoloPlayer1" ||
            gameThatWillBePlayed === "LaubsoloPlayer2" || gameThatWillBePlayed == "LaubsoloPlayer3") {
              whichSourceToLoad = sourcesLaubsolo;
            } else if (gameThatWillBePlayed === Herz || gameThatWillBePlayed === "HerzsoloPlayer1" ||
            gameThatWillBePlayed === "HerzsoloPlayer2" || gameThatWillBePlayed == "HerzsoloPlayer3") {
              whichSourceToLoad = sourcesHerzsolo;
            } else if (gameThatWillBePlayed === Schellen || gameThatWillBePlayed === "SchellensoloPlayer1" ||
            gameThatWillBePlayed === "SchellensoloPlayer2" || gameThatWillBePlayed == "SchellensoloPlayer3") {
              whichSourceToLoad = sourcesSchellensolo;
            }


            // load the image to approve game
            loadImages(whichSourceToLoad, function(images) {
              ctx.save();
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);
              if (rmclicked === true) {
                ctx.drawImage(images.reichsmark,50,580,100,100)
              };
              ctx.translate(0,700);
              ctx.drawImage(images.card1, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card2, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card3, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card4, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card5, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card6, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card7, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.drawImage(images.card8, 0, 0, 180, 230);
              ctx.translate(87,0);
              ctx.restore();

              ctx.fillStyle = ("white");
              ctx.font = '40pt Calibri';
              if (gameThatWillBePlayed === Sauspiel) {
                ctx.fillText("You Play Sauspiel",100,250);
              } else if (gameThatWillBePlayed === Wenz) {
                ctx.fillText("You Play Wenz",100,250);
              } else if (gameThatWillBePlayed === Eichel) {
                ctx.fillText("You Play Eichelsolo",100,250);
              } else if (gameThatWillBePlayed === Laub) {
                ctx.fillText("You Play Laubsolo",100,250);
              } else if (gameThatWillBePlayed === Herz) {
                ctx.fillText("You Play Herzsolo",100,250);
              } else if (gameThatWillBePlayed === Schellen) {
                ctx.fillText("You Play Schellensolo",100,250);
              } else if (gameThatWillBePlayed === "SauspielPlayer1") {
                ctx.fillText("Player one plays Sauspiel",100,250);
              } else if (gameThatWillBePlayed === "WenzPlayer1") {
                ctx.fillText("Player one plays Wenz",100,250);
              } else if (gameThatWillBePlayed === "EichelsoloPlayer1") {
                ctx.fillText("Player one plays Eichelsolo",100,250);
              } else if (gameThatWillBePlayed === "LaubsoloPlayer1") {
                ctx.fillText("Player one plays Laubsolo",100,250);
              } else if (gameThatWillBePlayed === "HerzsoloPlayer1") {
                ctx.fillText("Player one plays Herzsolo",100,250);
              } else if (gameThatWillBePlayed === "SchellensoloPlayer1") {
                ctx.fillText("Player one plays Schellensolo",100,250);
              } else if (gameThatWillBePlayed === "SauspielPlayer2") {
                ctx.fillText("Player two plays Sauspiel",100,250);
              } else if (gameThatWillBePlayed === "WenzPlayer2") {
                ctx.fillText("Player two plays Wenz",100,250);
              } else if (gameThatWillBePlayed === "EichelsoloPlayer2") {
                ctx.fillText("Player two plays Eichelsolo",100,250);
              } else if (gameThatWillBePlayed === "LaubsoloPlayer2") {
                ctx.fillText("Player two plays Laubsolo",100,250);
              } else if (gameThatWillBePlayed === "HerzsoloPlayer2") {
                ctx.fillText("Player two plays Herzsolo",100,250);
              } else if (gameThatWillBePlayed === "SchellensoloPlayer2") {
                ctx.fillText("Player two plays Schellensolo",100,250);
              } else if (gameThatWillBePlayed === "SauspielPlayer3") {
                ctx.fillText("Player three plays Sauspiel",100,250);
              } else if (gameThatWillBePlayed === "WenzPlayer3") {
                ctx.fillText("Player three plays Wenz",100,250);
              } else if (gameThatWillBePlayed === "EichelsoloPlayer3") {
                ctx.fillText("Player three plays Eichelsolo",100,250);
              } else if (gameThatWillBePlayed === "LaubsoloPlayer3") {
                ctx.fillText("Player three plays Laubsolo",100,250);
              } else if (gameThatWillBePlayed === "HerzsoloPlayer3") {
                ctx.fillText("Player three plays Herzsolo",100,250);
              } else if (gameThatWillBePlayed === "SchellensoloPlayer3") {
                ctx.fillText("Player three plays Schellensolo",100,250);
              }
              ctx.fillText("OK",300,350);
              ctx.restore();
            });
        }
      }
    }, false);


    //the logic to the AI
    // first Round for the first card
    function logicForStarterRound1 (CardSetPlayer) {
      //if Sauspiel
      if (whichSourceToLoad === sources) {
        if (CardSetPlayer.includes("karteO") || CardSetPlayer.includes("karteU") || CardSetPlayer.includes("herz")) {
          handPlayer1OnlyName[0]
        }
        if (round === 1) {
          if (CardSetPlayer.includes('images/EichelkarteO.jpg') === true) {
            CardSetPlayer = CardSetPlayer.filter(item => item !== 'images/EichelkarteO.jpg');
            CardSetPlayer.unshift('images/EichelkarteO.jpg');
          }
          else if (CardSetPlayer.includes('images/EichelkarteO.jpg') === true && CardSetPlayer.includes('images/LaubkarteO.jpg') === true ){
            CardSetPlayer = CardSetPlayer.filter(item => item !== 'images/LaubkarteO.jpg');
            CardSetPlayer.unshift('images/LaubkarteO.jpg');
          }
        }

      }

    }


    //function to load the cards of other players
    function cardsOfOtherPlayersNewRound () {
      if (pickCard1 === false || pickCard2 === false ||pickCard3 === false ||
          pickCard4 === false ||pickCard5 === false ||pickCard6 === false ||
          pickCard7 === false ||pickCard8 === false) {
        function drawCardsPlayerOne () {
          setTimeout (function () {
              ctx.save();
              let img1 = new Image();
              img1.addEventListener("load", function () {
                ctx.drawImage(img1, 120, 250, 180, 230);
              }, false);
              img1.src = handPlayer1OnlyName[0];
          }, 1000);
        }
        function drawCardsPlayerTwo () {
          setTimeout (function () {
            let img2 = new Image();
            img2.addEventListener("load", function () {
              ctx.drawImage(img2, 300, 100, 180, 230);
            }, false);
            img2.src = handPlayer2OnlyName[0];
          }, 2000);
        }
        function drawCardsPlayerThree () {
          setTimeout (function () {
            let img3 = new Image();
            img3.addEventListener("load", function () {
              ctx.drawImage(img3, 480, 250, 180, 230);
            }, false);
            img3.src = handPlayer3OnlyName[0];
            ctx.restore();
          }, 3000);
        } if (maxChampionName == "willPlayer1Win") {
          drawCardsPlayerOne();
          drawCardsPlayerTwo();
          drawCardsPlayerThree();

        } if (maxChampionName == "willPlayer2Win") {
          drawCardsPlayerTwo(function () {
            drawCardsPlayerThree(function () {
              drawCardsPlayerOne ();
            });
          });

        } if (maxChampionName == "willPlayer3Win") {

          drawCardsPlayerThree();
        } if (maxChampionName == "willPlayer4Win") {
          drawCardsPlayerTwo(function () {
            drawCardsPlayerThree(function () {
              drawCardsPlayerOne ();
            });
          });
        }
      }
    }
    //add the eventListener to start the game
    logicForStarterRound1(handPlayer1OnlyName);
    canvas.addEventListener('click',function (event) {
      const mousePos = getMousePos(canvas, event);
      if (isInside(mousePos,rectOK)) {
        currentGame();

        //load first card player1
        cardsOfOtherPlayersNewRound();


      // pick each card
      // function for the cards of the other players
      function cardsOfOtherPlayers () {
        ctx.save();
        let img1 = new Image();
        img1.addEventListener("load", function () {
          ctx.drawImage(img1, 120, 250, 180, 230);
        }, false);
        img1.src = handPlayer1OnlyName[0];
        let img2 = new Image();
        img2.addEventListener("load", function () {
          ctx.drawImage(img2, 300, 100, 180, 230);
        }, false);
        img2.src = handPlayer2OnlyName[0];
        let img3 = new Image();
        img3.addEventListener("load", function () {
          ctx.drawImage(img3, 480, 250, 180, 230);
        }, false);
        img3.src = handPlayer3OnlyName[0];
        ctx.restore();
      }


      //function to delete Cards from array and canvas
      function deletePlayedCards () {
        // delete first card from array
        handPlayer1OnlyName.shift();
        // delete first card from array player2
        handPlayer2OnlyName.shift();
        // delete first card from array player3
        handPlayer3OnlyName.shift();
      }


      // function to draw the current game
      function currentGame() {
        if (pickCard1 === false || pickCard2 === false ||pickCard3 === false ||
          pickCard4 === false ||pickCard5 === false ||pickCard6 === false ||
          pickCard7 === false ||pickCard8 === false) {
          loadImages(whichSourceToLoad, function(images) {
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);
            if (rmclicked === true) {
              ctx.drawImage(images.reichsmark,50,580,100,100)
            };
            if (pickCard1 === false) {
              ctx.save();
              ctx.translate(0,700);
              ctx.drawImage(images.card1, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard2 === false) {
              ctx.save();
              ctx.translate(87,700);
              ctx.drawImage(images.card2, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard3 === false) {
              ctx.save();
              ctx.translate(174,700);
              ctx.drawImage(images.card3, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard4 === false) {
              ctx.save();
              ctx.translate(261,700);
              ctx.drawImage(images.card4, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard5 === false) {
              ctx.save();
              ctx.translate(348,700);
              ctx.drawImage(images.card5, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard6 === false) {
              ctx.save();
              ctx.translate(435,700);
              ctx.drawImage(images.card6, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard7 === false) {
              ctx.save();
              ctx.translate(522,700);
              ctx.drawImage(images.card7, 0, 0, 180, 230);
              ctx.restore();
            }
            if(pickCard8 === false) {
              ctx.save();
              ctx.translate(609,700);
              ctx.drawImage(images.card8, 0, 0, 180, 230);
              ctx.restore();
            }
            ctx.restore();
        });
      } else {
        loadImages(whichSourceToLoad, function(images) {
          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images.background, 0, 0, canvas.width,canvas.height*0.8);
          setTimeout (function () {
            ctx.fillText("Game is Over",100,250);
            ctx.translate(0,100);
            const endResultAllPlayers = [gameValuePlayer1, gameValuePlayer2, gameValuePlayer3, gameValuePlayer4]
            const maxResultAllPlayers = Math.max.apply(Math.max, endResultAllPlayers);
            const namesOfChampions = ["gameValuePlayer1", "gameValuePlayer2", "gameValuePlayer3", "gameValuePlayer4"];
            let nameOfChampion = namesOfChampions[endResultAllPlayers.indexOf(maxResultAllPlayers)];
            if (nameOfChampion === "gameValuePlayer1") {
              ctx.fillText("Player 1 is the Winner",100,250);
            }
            if (nameOfChampion === "gameValuePlayer2") {
              ctx.fillText("Player 2 is the Winner",100,250);
            }
            if (nameOfChampion === "gameValuePlayer3") {
              ctx.fillText("Player 3 is the Winner",100,250);
            }
            if (nameOfChampion === "gameValuePlayer4") {
              ctx.fillText("Player 4 is the Winner",100,250);
            }
            ctx.restore();
            setTimeout (function () {
              eachGame()
            }, 2000);
          }, 2000);
        });
      }
    }
    function doStuffOnlyWhen(arg1, arg2) {
     if (arg1 == 8) {
      console.log(arg1 - arg2);
    }}
    doStuffOnlyWhen(8,2);
    //BUT NOT WHEN
    doStuffOnlyWhen(8,7);



    function firstCardCounts(person, playedCard) {
      function changeValueIfSameColor(playedCard) {

      }

      if (person == maxChampionName && playedCard == "images/Eichelkarte7.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.9;       console.log("yes");

      } else if (person == maxChampionName && playedCard == "images/Eichelkarte8.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.8; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Eichelkarte9.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.7; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/EichelkarteK.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.6; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Eichelkarte10.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.5;   console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/EichelkarteA.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.4; console.log("yes");
      }
      else if (person == maxChampionName && playedCard == "images/Laubkarte7.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.9; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Laubkarte8.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.8; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Laubkarte9.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.7; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/LaubkarteK.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.6; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Laubkarte10.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.5; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/LaubkarteA.jpg"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.4; console.log("yes");
      }

      else if (person == maxChampionName && playedCard == "images/Schellenkarte7"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.9; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Schellenkarte8"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.8; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Schellenkarte9"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.7; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/SchellenkarteK"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.6; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/Schellenkarte10"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.5; console.log("yes");
      } else if (person == maxChampionName && playedCard == "images/SchellenkarteA"){
        arr[arr.map(a => a.name).indexOf(playedCard)].sauspiel = 14.4; console.log("yes");
      }console.log(arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].sauspiel);
      console.log(arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].sauspiel);
      console.log(arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].sauspiel);
    }




    // function to find out who is the roundwinnner
    function roundWinnerInOrder () {
      if (Sauspiel === true) {
        willPlayer1Win = arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].sauspiel;
        willPlayer2Win = arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].sauspiel;
        willPlayer3Win = arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].sauspiel;
        willPlayer4Win = arr[arr.map(a => a.name).indexOf(yourPlayedCard)].sauspiel;
        console.log(willPlayer1Win);
        if (willPlayer1Win == 15 && willPlayer2Win == 15 && willPlayer3Win == 15 && willPlayer4Win == 15) {

        }
      } if (Wenz === true) {
        willPlayer1Win = arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].wenz;
        willPlayer2Win = arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].wenz;
        willPlayer3Win = arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].wenz;
        willPlayer4Win = arr[arr.map(a => a.name).indexOf(yourPlayedCard)].wenz;
      } if (Eichel === true) {
        willPlayer1Win = arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].eichelsolo;
        willPlayer2Win = arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].eichelsolo;
        willPlayer3Win = arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].eichelsolo;
        willPlayer4Win = arr[arr.map(a => a.name).indexOf(yourPlayedCard)].eichelsolo;
      } if (Laub === true) {
        willPlayer1Win = arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].laubsolo;
        willPlayer2Win = arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].laubsolo;
        willPlayer3Win = arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].laubsolo;
        willPlayer4Win = arr[arr.map(a => a.name).indexOf(yourPlayedCard)].laubsolo;
      } if (Herz === true) {
        willPlayer1Win = arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].herzsolo;
        willPlayer2Win = arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].herzsolo;
        willPlayer3Win = arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].herzsolo;
        willPlayer4Win = arr[arr.map(a => a.name).indexOf(yourPlayedCard)].herzsolo;
      } if (Schellen === true) {
        willPlayer1Win = arr[arr.map(a => a.name).indexOf(handPlayer1OnlyName[0])].schellensolo;
        willPlayer2Win = arr[arr.map(a => a.name).indexOf(handPlayer2OnlyName[0])].schellensolo;
        willPlayer3Win = arr[arr.map(a => a.name).indexOf(handPlayer3OnlyName[0])].schellensolo;
        willPlayer4Win = arr[arr.map(a => a.name).indexOf(yourPlayedCard)].schellensolo;
      }
    }



    // function to count the cards each round
    function countCardValue () {
      //player1
      if (handPlayer1OnlyName[0].slice(-5) == "O.jpg") {
        player1Value += 3;
      }
      if (handPlayer1OnlyName[0].slice(-5) == "U.jpg") {
        player1Value += 2;
      }
      if (handPlayer1OnlyName[0].slice(-5) == "K.jpg") {
        player1Value += 4;
      }
      if (handPlayer1OnlyName[0].slice(-5) == "0.jpg") {
        player1Value += 10;
      }
      if (handPlayer1OnlyName[0].slice(-5) == "A.jpg") {
        player1Value += 11;
      }
      //player2
      if (handPlayer2OnlyName[0].slice(-5) == "O.jpg") {
        player2Value = +3;
      }
      if (handPlayer2OnlyName[0].slice(-5) == "U.jpg") {
        player2Value = +2;
      }
      if (handPlayer2OnlyName[0].slice(-5) == "K.jpg") {
        player2Value = +4;
      }
      if (handPlayer2OnlyName[0].slice(-5) == "0.jpg") {
        player2Value = +10;
      }
      if (handPlayer2OnlyName[0].slice(-5) == "A.jpg") {
        player2Value = +11;
      }
      //player3
      if (handPlayer3OnlyName[0].slice(-5) == "O.jpg") {
        player3Value = +3;
      }
      if (handPlayer3OnlyName[0].slice(-5) == "U.jpg") {
        player3Value = +2;
      }
      if (handPlayer3OnlyName[0].slice(-5) == "K.jpg") {
        player3Value = +4;
      }
      if (handPlayer3OnlyName[0].slice(-5) == "0.jpg") {
        player3Value = +10;
      }
      if (handPlayer3OnlyName[0].slice(-5) == "A.jpg") {
        player3Value = +11;
      }
      if (yourPlayedCard.slice(-5) == "O.jpg") {
        player4Value = +3;
      }
      if (yourPlayedCard.slice(-5) == "U.jpg") {
        player4Value = +2;
      }
      if (yourPlayedCard.slice(-5) == "K.jpg") {
        player4Value = +4;
      }
      if (yourPlayedCard.slice(-5) == "0.jpg") {
        player4Value = +10;
      }
      if (yourPlayedCard.slice(-5) == "A.jpg") {
        player4Value = +11;
      }


      roundWinnerInOrder();
      //check who is the winner of the round
      const roundChampion = [willPlayer1Win, willPlayer2Win, willPlayer3Win, willPlayer4Win];
      const  maxValue = Math.min.apply(Math.min, roundChampion);
      const  ChampionNames = ["willPlayer1Win", "willPlayer2Win", "willPlayer3Win", "willPlayer4Win"];
      maxChampionName = ChampionNames[roundChampion.indexOf(maxValue)];


      if (maxChampionName == "willPlayer1Win") {
        gameValuePlayer1 += player1Value + player2Value + player3Value + player4Value;
      }
      if (maxChampionName == "willPlayer2Win") {
        gameValuePlayer2 += player1Value + player2Value + player3Value + player4Value;
      }
      if (maxChampionName == "willPlayer3Win") {
        gameValuePlayer3 += player1Value + player2Value + player3Value + player4Value;
      }
      if (maxChampionName == "willPlayer4Win") {
        gameValuePlayer4 += player1Value + player2Value + player3Value + player4Value;
      }
      player1Value = 0;
      player2Value = 0;
      player3Value = 0;
      player4Value = 0;
      console.log("player1: "+gameValuePlayer1);
      console.log("player2: "+gameValuePlayer2);
      console.log("player3: "+gameValuePlayer3);
      console.log("player4: "+gameValuePlayer4);
    }



      //Function to animate your picked card
      function animate() {
      requestID = requestAnimationFrame(animate);
      if (posY >= 470) {
        posY -= 5.5;
        posX += xanimation;
        currentGame();

        let img1 = new Image();
        img1.addEventListener("load", function () {
          ctx.drawImage(img1, posX, posY, 180, 230);
        }, false);
        img1.src = yourPlayedCard;

        cardsOfOtherPlayers ();
        } else {
            cancelAnimationFrame(requestID);
            countCardValue ();
            firstCardCounts("willPlayer1Win", handPlayer1OnlyName[0]);
            firstCardCounts("willPlayer2Win", handPlayer2OnlyName[0]);
            firstCardCounts("willPlayer3Win", handPlayer3OnlyName[0]);
            firstCardCounts("willPlayer4Win", yourPlayedCard);
            deletePlayedCards();
            currentGame();
            cardsOfOtherPlayersNewRound();
          }
        }


      // add click listener on your cards

      //choose card1 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard1) && (pickCard1===false) ) {
          posX = 0;
          posY = 700;
          xanimation = 7;
          pickCard1 = true;
          yourPlayedCard = whichSourceToLoad.card1;
          round++;
          animate();
        }
      }, false);
      //choose card2 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard2) && (pickCard2===false) ) {
          posX = 87;
          posY = 700;
          xanimation = 5;
          pixelsPerFrame = 5.5;
          pickCard2 = true;
          rectCard1.width = 174;
          yourPlayedCard = whichSourceToLoad.card2;
          round++
          animate();
        }
      }, false);
      //choose card3 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard3) && (pickCard3===false) ) {
          posX = 174;
          posY = 700;
          xanimation = 3;
          pixelsPerFrame = 5.5;
          pickCard3 = true;
          rectCard2.width = 174;
          yourPlayedCard = whichSourceToLoad.card3;
          round++
          animate();
        }
      }, false);
      //choose card4 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard4) && pickCard4===false ) {
          posX = 261;
          posY = 700;
          xanimation = 1;
          pixelsPerFrame = 5.5;
          pickCard4 = true;
          rectCard3.width = 174;
          yourPlayedCard = whichSourceToLoad.card4;
          round++
          animate();
        }
      }, false);
      //choose card5 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard5) && pickCard5===false ) {
          posX = 348;
          posY = 700;
          xanimation = -1.1;
          pixelsPerFrame = 5.5;
          pickCard5 = true;
          rectCard4.width = 174;
          yourPlayedCard = whichSourceToLoad.card5;
          round++
          animate();
        }
      }, false);
      //choose card6 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard6) && pickCard6===false ) {
          posX = 435;
          posY = 700;
          xanimation = -3.2;
          pixelsPerFrame = 5.5;
          pickCard6 = true;
          rectCard5.width = 174;
          yourPlayedCard = whichSourceToLoad.card6;
          round++
          animate();
        }
      }, false);
      //choose card7 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard7) && pickCard7===false ) {
          posX = 522;
          posY = 700;
          xanimation = -5.2;
          pixelsPerFrame = 5.5;
          pickCard7 = true;
          yourPlayedCard = whichSourceToLoad.card7;
          rectCard6.width = 174;
          round++
          animate();
        }
      }, false);



      //choose card8 to play
      canvas.addEventListener('click',function (event) {
        const mousePos = getMousePos(canvas, event);
        if (isInside(mousePos,rectCard8) && pickCard8===false ) {
          posX = 609;
          posY = 700;
          xanimation = -7.4;
          pixelsPerFrame = 5.5;
          pickCard8 = true;
          rectCard7.width = 174;
          yourPlayedCard = whichSourceToLoad.card8;
          round++
          animate();
        }
      }, false);
      }
    }, false);
  }, 2000);
}
eachGame();
}) ();
