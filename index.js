// Read the JSON data from the food.json file
const foodData = require('./food.json');

// MICRO PROJECT 03 TASKS
// 01 -> LIST ALL THE FOOD ITEMS
console.log(listFood(foodData,""));
// 02 -> LIST ALL THE FOOD ITEMS WITH CATEGORY VEGETABLES
console.log(listFood(foodData,"Vegetable"));
// 03 -> LIST ALL THE FOOD ITEMS WITH CATEGORY FRUIT
console.log(listFood(foodData,"Fruit"));
// 04 -> LIST ALL THE FOOD ITEMS WITH CATEGORY PROTIEN
console.log(listFood(foodData,"Protein"));
// 05 -> LIST ALL THE FOOD ITEMS WITH CATEGORY NUTS
console.log(listFood(foodData,"Nuts"));
// 06 -> LIST ALL THE FOOD ITEMS WITH CATEGORY GRAINS
console.log(listFood(foodData,"Grain"));
// 07 -> LIST ALL THE FOOD ITEMS WITH CATEGORY DAIRY
console.log(listFood(foodData,"Dairy"));
// 08 -> LIST ALL THE FOOD ITEMS WITH CALORIE ABOVE 100
console.log(listCalFood(foodData,0,100));
// 09 -> LIST ALL THE FOOD ITEMS WITH CALORIE BELOW 100
console.log(listCalFood(foodData,1,100));

// 10
// descending
console.log(sort('protein'))

// 11
// ascedning
console.log(sort('carb'))


function listFood(foods,cat){
  if(cat.length>0){
    return foods.filter((item)=>item.category===cat)
  }
  else{
    return foods
  }
}

function listCalFood(foods,flag,limit){
  if(flag==0){
    return foods.filter((item) => item.calorie < limit)
  }
  else if(flag==1){
    return foods.filter((item) => item.calorie > limit)
  }
}

function sort(type){
  if(type==="protein"){
    return foodData.sort((a, b) => b.protiens - a.protiens)
  }
  else if(type==="carb"){
    return foodData.sort((a, b) => a.cab - b.cab)
  }
}