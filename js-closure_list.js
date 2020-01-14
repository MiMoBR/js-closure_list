function list(){
  let items = [];
  
  return {
    addItems: function(){
      items.push(...arguments);
    },
    getItems: function(){
      console.log(items);
    }
  }
}

const grocery = list();

grocery.addItems('eggs','bike');
grocery.getItems();

const shopping = list();

shopping.addItems('bread','car');
shopping.getItems();

-------------------------------
["eggs", "bike"]
["bread", "car"]
