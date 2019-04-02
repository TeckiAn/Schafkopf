// all cards in the array
//2. value is sorted for Sauspiel
let arr =[
   {name: "images/Eichelkarte7.jpg", sauspiel: 15, wenz: 11, eichelsolo: 14, laubsolo: 20, herzsolo: 20, schellensolo: 20 ,value: 0},
   {name: "images/Eichelkarte8.jpg", sauspiel: 15, wenz: 10, eichelsolo: 13, laubsolo: 19, herzsolo: 19, schellensolo: 19,value: 0},
   {name: "images/Eichelkarte9.jpg", sauspiel: 15, wenz: 9, eichelsolo: 12, laubsolo: 18, herzsolo: 18, schellensolo: 18,value: 0},
   {name: "images/Eichelkarte10.jpg", sauspiel: 15, wenz: 6, eichelsolo: 10, laubsolo: 16, herzsolo: 16, schellensolo: 16,value: 10},
   {name: "images/EichelkarteA.jpg", sauspiel: 15, wenz: 5, eichelsolo: 9, laubsolo: 15, herzsolo: 15, schellensolo: 15,value: 11},
   {name: "images/EichelkarteU.jpg", sauspiel: 5, wenz: 1, eichelsolo: 5, laubsolo: 5, herzsolo: 5, schellensolo: 5,value: 2},
   {name: "images/EichelkarteO.jpg", sauspiel: 1, wenz: 8, eichelsolo: 1, laubsolo: 1, herzsolo: 1, schellensolo: 1,value: 3},
   {name: "images/EichelkarteK.jpg", sauspiel: 15, wenz: 7, eichelsolo: 11, laubsolo: 17, herzsolo: 17, schellensolo: 17,value: 4},

   {name: "images/Herzkarte7.jpg", sauspiel: 14, wenz: 25, eichelsolo: 26, laubsolo: 26, herzsolo: 14, schellensolo: 32,value: 0},
   {name: "images/Herzkarte8.jpg", sauspiel: 13, wenz: 24, eichelsolo: 25, laubsolo: 25, herzsolo: 13, schellensolo: 31,value: 0},
   {name: "images/Herzkarte9.jpg", sauspiel: 12, wenz: 23, eichelsolo: 24, laubsolo: 24, herzsolo: 12, schellensolo: 30,value: 0},
   {name: "images/Herzkarte10.jpg", sauspiel: 10, wenz: 20, eichelsolo: 22, laubsolo: 22, herzsolo: 10, schellensolo: 28,value: 10},
   {name: "images/HerzkarteA.jpg", sauspiel: 9, wenz: 19, eichelsolo: 21, laubsolo: 21, herzsolo: 9, schellensolo: 27,value: 11},
   {name: "images/HerzkarteU.jpg", sauspiel: 7, wenz: 3, eichelsolo: 7, laubsolo: 7, herzsolo: 7, schellensolo: 7,value: 2},
   {name: "images/HerzkarteO.jpg", sauspiel: 3, wenz: 22, eichelsolo: 3, laubsolo: 3, herzsolo: 3, schellensolo: 3,value: 3},
   {name: "images/HerzkarteK.jpg", sauspiel: 11, wenz: 21, eichelsolo: 23, laubsolo: 23, herzsolo: 11, schellensolo: 29,value: 4},

   {name: "images/Laubkarte7.jpg", sauspiel: 15, wenz: 18, eichelsolo: 20, laubsolo: 14, herzsolo: 26, schellensolo: 26,value: 0},
   {name: "images/Laubkarte8.jpg", sauspiel: 15, wenz: 17, eichelsolo: 19, laubsolo: 13, herzsolo: 25, schellensolo: 25,value: 0},
   {name: "images/Laubkarte9.jpg", sauspiel: 15, wenz: 16, eichelsolo: 18, laubsolo: 12, herzsolo: 24, schellensolo: 24,value: 0},
   {name: "images/Laubkarte10.jpg", sauspiel: 15, wenz: 13, eichelsolo: 16, laubsolo: 10, herzsolo: 22, schellensolo: 22,value: 10},
   {name: "images/LaubkarteA.jpg", sauspiel: 15, wenz: 12, eichelsolo: 15, laubsolo: 9, herzsolo: 21, schellensolo: 21,value: 11},
   {name: "images/LaubkarteU.jpg", sauspiel: 6, wenz: 2, eichelsolo: 6, laubsolo: 6, herzsolo: 6, schellensolo: 6,value: 2},
   {name: "images/LaubkarteO.jpg", sauspiel: 2, wenz: 15, eichelsolo: 2, laubsolo: 2, herzsolo: 2, schellensolo: 2,value: 3},
   {name: "images/LaubkarteK.jpg", sauspiel: 15, wenz: 14, eichelsolo: 17, laubsolo: 11, herzsolo: 23, schellensolo: 23,value: 4},

   {name: "images/Schellenkarte7.jpg", sauspiel: 15, wenz: 32, eichelsolo: 32, laubsolo: 32, herzsolo: 32, schellensolo: 14,value: 0},
   {name: "images/Schellenkarte8.jpg", sauspiel: 15, wenz: 31, eichelsolo: 31, laubsolo: 31, herzsolo: 31, schellensolo: 13,value: 0},
   {name: "images/Schellenkarte9.jpg", sauspiel: 15, wenz: 30, eichelsolo: 30, laubsolo: 30, herzsolo: 30, schellensolo: 12,value: 0},
   {name: "images/Schellenkarte10.jpg", sauspiel: 15, wenz: 27, eichelsolo: 28, laubsolo: 28, herzsolo: 28, schellensolo: 10,value: 10},
   {name: "images/SchellenkarteA.jpg", sauspiel: 15, wenz: 26, eichelsolo: 27, laubsolo: 27, herzsolo: 27, schellensolo: 9,value: 11},
   {name: "images/SchellenkarteU.jpg", sauspiel: 8, wenz: 4, eichelsolo: 8, laubsolo: 8, herzsolo: 8, schellensolo: 8,value: 2},
   {name: "images/SchellenkarteO.jpg", sauspiel: 4, wenz: 29, eichelsolo: 4, laubsolo: 4, herzsolo: 4, schellensolo: 4,value: 3},
   {name: "images/SchellenkarteK.jpg", sauspiel: 15, wenz: 28, eichelsolo: 29, laubsolo: 29, herzsolo: 29, schellensolo: 11,value: 4}
 ];
