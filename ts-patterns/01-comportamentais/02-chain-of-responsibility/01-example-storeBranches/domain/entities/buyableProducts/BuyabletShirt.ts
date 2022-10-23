import { Buyable } from "../../interfaces/Iproduct";

class BuyableTShirt implements Buyable {
  price = 42.7;
  quantity = 10;
  name = "T-Shirt";
}

export default BuyableTShirt;
