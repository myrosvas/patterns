// Цей патерн використовується у ситуаціях, коли потрібно створити простий інтерфейс для частини складного коду, щоб приховати його складність.

class CreditHistory {
  check (name) {
    // API call to get the credit history and find out, is it bad or not
    return isCreditHistoryOk;
  }
}

class TradeIn {
  getPrice (vehicle) {
  // Getting the vehicle parameters (year, mileage etc) and counting the price
  return price;
 }
}
 
class Fees {
  getFeesSum(state) {
  //getting all fees for the selected state and summing them
  return fees;
  }
}
 
class Purchase {
  constructor (name, state) {
    this.name = name,
    this.state = state
  }

  applyFor (vehicle) {
    const isCreditHistoryOk = new CreditHistory().check(this.name);
    const tradeInPrice = new TradeIn().getPrice(this.vehicle);
    const feesSum = new Fees().getFeesSum(this.state);
    
    if (isCreditHistoryOk) {
        const finalPrice = tradeInPrice + feesSum;
        return finalPrice;
    } else {
        return `${this.name} has been denied to buy a new car because of a bad credit history.`
    }
  }
 }
 
//  Usage:
 const newPurchase = new Purchase('John Doe', 'Arizona');
 const carPurchase = newPurchase.applyFor('Mercedez Bens 1999');
