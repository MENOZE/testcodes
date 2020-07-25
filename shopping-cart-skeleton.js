//DISPLAY ITEMS IN CART/ARRAY FUNCTION
  function displayCart(){
      var cartArray = shoppingCart.listCart();
      
      var output = "";
      for (var i in cartArray){
        output += "html"
      }
      $('.class').html(output);
      
      shoppingCart.countCart() //items in cart
      shoppingCart.totalCart() //cost of cart
      //add html properties to display above variables
  }

// SHOPPING CART FUNCTIONS---------------------------------------------------------------
  var shoppingCart = {};
  shoppingCart.cart= [];
  
  //ITEM CONSTRUCTOR 
  shoppingCart.Item = function(name, price, count, size){
      this.name = name
      this.price = price
      this.count = count
      this.size = size
  };
  
  //FUNCTION ADDS ITEM TO CART
  shoppingCart.addItemToCart = function(name, price, count, size){
      for (var i in this.cart) {//LOOP THROUGH CART ITEMS
          if (this.cart[i].name === name && this.cart[i].size === size){//IF MATCH ADD TO QUANTITY FOR THAT VALUE
              this.cart[i].count += count;
              shoppingCart.saveCart();
              return;
          }
      }
      var item = new shoppingCart.Item(name, price, count, size);
      this.cart.push(item);
      this.saveCart();
  };
  
  //FUNCTION SETS COUNT FOR ITEM BY USER
   shoppingCart.setCountForItem = function (size,count){
       for (var i in this.cart){
           if (this.cart[i].size === size){
               this.cart[i].count = count;
               break;
           }
       } 
       this.saveCart();
   }
   
  //FUNCTION REMOVES 1 OF ITEM TYPE
  shoppingCart.removeItemFromCart = function (name,size){
      for (var i in this.cart) {
          if (this.cart[i].name === name && this.cart[i].size === size){
              this.cart[i].count --;
              if (this.cart[i].count === 0){
                  this.cart.splice(i, 1);
              }
              break;
          }
      }
      this.saveCart();
  };
  
  //FUNCTION REMOVES ALL OF ITEM TYPE
  shoppingCart.removeItemFromCartAll = function(name,size){
      for(var i in this.cart){
          if (this.cart[i].name === name && this.cart[i].size === size){
              this.cart.splice(i,1);
              console.log(this.cart);
              break;
          }
      }
      this.saveCart();
  };
  
  //FUNCTION REMOVES ALL ITEMS FROM CART
  shoppingCart.clearCart = function(){
      this.cart = [];
      this.saveCart();
  };
  
  //FUNCTION RETURN NUMBER OF ITEMS
  shoppingCart.countCart = function(){
      var totalCount = 0;
      for(var i in this.cart){
          totalCount += this.cart[i].count;
      }
      return totalCount;
  };
  
  //FUNCTION RETURNS COST OF CART ITEMS
  shoppingCart.totalCart = function(){
      var totalCost = 0;
      // loops through cart for price and collets
      for(var i in this.cart){
          totalCost += this.cart[i].price * this.cart[i].count;
      }
      return totalCost.toFixed(2); //round cost to 2 decimal places
  };
  
  //FUNCTION ADDS ITEMS TO CART
  shoppingCart.listCart = function(){
      var cartCopy = [];
      for (var i in this.cart){
          var item = this.cart[i];
          var itemCopy = {};
          for (var p in item){
              itemCopy[p] = item[p];
          }
          itemCopy.total = (item.price * item.count).toFixed(2);
          cartCopy.push(itemCopy);
      }
      return cartCopy;
  };
  
  //FUNCTION SAVES CART TO LOCAL STORAGE
  shoppingCart.saveCart = function(){
      localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
  };
  
  //FUNCTION LOADS CART FROM LOCAL STORAGE
  shoppingCart.loadCart = function(){
      this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
       if(this.cart == null){//IF NOTHING FOUND IN LOCAL STOARAGE
            this.cart = []; // SET CART TO EMPTY
      };
  };

  shoppingCart.loadCart();//ON LOAD ATTEMPT TO LOAD FROM LOCAL STORAGE
  displayCart();//UPDATE DISPLAY AFTER EVERY FUNCTION
