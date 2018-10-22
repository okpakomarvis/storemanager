function handler(event) {
                event.preventDefault();
                var name= this.getAttribute("data-name");
                var productid=this.getAttribute("data-prdId");
                var price= this.getAttribute("data-price");

                shoppingCart.addItemToCart( name, productid, price, 1);
                displayCart();
            }

        var add = document.getElementsByClassName('add-to-cart');
        for (var i = 0; i < add.length; i++) {
            add[i].addEventListener('click', handler, false);
        }

            document.getElementById('clear-cart').addEventListener('click', function(event){
                shoppingCart.clearCart();
                displayCart();
            });
            
            var showCart = document.getElementById("showItems");
            var countCart = document.getElementById("count-cart");
            var totalCart = document.getElementById("total-cart");

            function displayCart() {
                var cartArray = shoppingCart.listCart();
                console.log(cartArray);
                var output = "";

                for (var i in cartArray) {
                    output += "<li>"
                        +cartArray[i].name
                        +" <input class='item-count' type='number' data-name='"
                        +cartArray[i].name
                        +"' value='"+cartArray[i].count+"' >"
                        +" x "+cartArray[i].price
                        +" = "+cartArray[i].total +" = "+ cartArray[i].productid
                        +" <button class='plus-item' data-name='"
                        +cartArray[i].name+"'>+</button>"
                        +" <button class='subtract-item' data-name='"
                        +cartArray[i].name+"'>-</button>"
                        +" <button class='delete-item' data-name='"
                        +cartArray[i].name+"'>X</button>"
                        +"</li>";
                }
                
                
                showCart.innerHTML= output;

                 
                countCart.innerHTML= shoppingCart.countCart();

                
                totalCart.innerHTML= shoppingCart.totalCart();

               
            }
                
                  showCart.addEventListener('click', function(event){
                if (event.target.className == 'delete-item'){
                  callback();
                }
                    });
                
                function callback(){
                   for (var i = 0; i < add.length; i++) {
                        
                   var name= add[i].getAttribute("data-name");
               }
                   shoppingCart.removeItemFromCartAll(name);
                displayCart();
                }
        
                  showCart.addEventListener('click', function(event) {
                if (event.target.className == 'subtract-item') {
                  callbacktwo();
                }
                    });
                
                function callbacktwo(){
                   for (var i = 0; i < add.length; i++) {
                        
                   var name= add[i].getAttribute("data-name");
               }
                  shoppingCart.removeItemFromCart(name);
                displayCart();
                }
            

               
                  showCart.addEventListener('click', function(event) {
                if (event.target.className == 'plus-item') {
                  callbackthree();
                }
            });
                
                function callbackthree(){
                   for (var i = 0; i < add.length; i++) {
                        
                   var name= add[i].getAttribute("data-name");
               }
                   shoppingCart.addItemToCart(name, 0, 1);
                displayCart();
                }
            
                  showCart.addEventListener('click', function(event) {
                if (event.target.className == 'item-count') {
                  callbackfour();
                }
            });
              
                function callbackfour(){
                    for (var i = 0; i < add.length; i++) {
                        
                   var name= add[i].getAttribute("data-name");
               }
                   shoppingCart.setCountForItem(name, count);
                displayCart();
                }
            


            displayCart();
