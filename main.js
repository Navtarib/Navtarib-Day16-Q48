"use strict";
/*Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different
 sets of laptops. Use the spread operator to combine these arrays into a single array sorted in
  ascending order, then log the result.

  let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);*/
/*Practiced the above code..
let priceSet1 = [1200, 1500, 1400];
let pricesSet2= [1000,1100,1300];
let combinedPrices = [...priceSet1, ...pricesSet2].sort((a,b) => a-b);
console.log(combinedPrices);*/
//similar code but this time for food items in a restuaran
let biryaniprices1 = [200, 250, 150];
let biryaniprices2 = [300, 100, 275];
let combinedprices = [...biryaniprices1, ...biryaniprices2].sort((a, b) => a - b);
console.log(combinedprices);
