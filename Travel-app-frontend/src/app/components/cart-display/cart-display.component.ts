import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../models/cartModel';
import { cartDisplayService } from '../../services/cartDisplay.service';
import { removeFromCartService } from '../../services/removeFromCart.service';
import { Travel } from '../../models/addToCart';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss'],
  providers:[cartDisplayService,removeFromCartService]
})
export class CartDisplayComponent implements OnInit {

  @Input() cartItems : Cart[]
  selectedCartItem: Cart;
  selectedItem: Travel;
  flag = false;
  
  constructor(private cartDisplayService: cartDisplayService,private removeFromCartService: removeFromCartService) { }

  ngOnInit() {
    let search:String = "";
    // console.log(this.search);
    // let searchFound = false;
    this.cartDisplayService.cartDisplay(search).then( /*product assignment*/ 
      product => 
      {
        this.cartItems = (product);
        console.log(this.cartItems);
        // searchFound = true;
      }
    );
    if(this.cartItems == null)
      this.flag = true;
    console.log(this.flag);
  }

  // for()

  isValidForm() {
    return this.flag;
  }

  remove(cartItem: Travel){
    this.selectedItem = cartItem;
    this.removeFromCartService.remove(this.selectedItem).then();
    window.location.reload();
    alert("Package has been removed from cart successfully");
  }
  
  

}
