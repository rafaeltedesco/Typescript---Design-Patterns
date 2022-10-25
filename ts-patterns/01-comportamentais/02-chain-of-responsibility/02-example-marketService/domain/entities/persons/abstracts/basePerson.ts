import IFood from "../../../interfaces/ifood";
import FoodOutput from "../../../../types/foodOutput";

abstract class BasePerson {
  protected _money = 0;
  protected _name: string;
  protected _boughtedFoods: FoodOutput[] = [];
  constructor(name: string, money?: number) {
    this._name = name;
    if (money) this._money = money;
  }

  get money(): number {
    return this._money;
  }

  buy(food: IFood) {
    if (!food.hasInStock()) return;
    food.sell();
    this._money -= food.price;
    this._boughtedFoods.push({ name: food.name, isHealthy: food.isHealthy });
  }

  protected hasEnoughMoney(food: IFood): boolean {
    return this._money - food.price >= 0;
  }

  get boughtedFoods(): FoodOutput[] {
    return [...this._boughtedFoods];
  }

  get name(): string {
    return this._name;
  }
}

export default BasePerson;
