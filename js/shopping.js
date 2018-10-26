function handler(event) {
                event.preventDefault();
                var name= this.getAttribute("data-name");
                var productid= this.getAttribute("data-prdId");
                var price= this.getAttribute("data-price");

                shoppingCart.addItemToCart(name, productid, price, 1);
                displayCart();
            }

        var add = document.getElementsByClassName('add-to-cart');
        for (var i = 0; i < add.length; i++) {
            add[i].addEventListener('click', handler, false)
        }

           /* $(".add-to-cart").click(function(event){
                event.preventDefault();
                var name = $(this).attr("data-name");
                var price = Number($(this).attr("data-price"));

                shoppingCart.addItemToCart(name, price, 1);
                displayCart();
            });*/
            document.getElementById('clear-cart').addEventListener('click', function(event){
                shoppingCart.clearCart();
                displayCart();
            });
            /*$("#clear-cart").click(function(event){
                shoppingCart.clearCart();
                displayCart();
            });*/
            var showCart = document.getElementById("show-cart");
            var countCart = document.getElementById("count-cart");
            var totalCart = document.getElementById("total-cart");

            function displayCart() {
                var cartArray = shoppingCart.listCart();
                console.log(cartArray);
                var output = "<tr><th>Product_Id</th><th>Name</th><th>Quantity</th><th>Price</th><th>Total Amount</th></tr>";

                for (var i in cartArray) {
                    output += "<tr>"
                        +"<td>" +cartArray[i].productid + "</td>"
                        +"<td>" +cartArray[i].name +"</td>"
                        +"<td>" +cartArray[i].count +"</td>"
                        +"<td>" +cartArray[i].price +"</td>"
                        +"<td>" +cartArray[i].total +"</td>"
                        +"</tr>";
                }
                   output+='<tr><td></td><td></td><td></td><td></td>'
                   +'<td>'+shoppingCart.totalCart()+'</td><tr/>';
                
                showCart.innerHTML= output;

                 
                countCart.innerHTML= shoppingCart.countCart();

                
                totalCart.innerHTML= shoppingCart.totalCart();

               
            }
                
                  showCart.addEventListener('click', function(event) {
                if (event.target.className == 'delete-item') {
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
