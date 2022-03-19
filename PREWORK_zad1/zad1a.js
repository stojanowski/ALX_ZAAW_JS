const products = [
    { name: "Bananas", pricePerUnit: 1.49, quantity: 2 },
    { name: "Bread", pricePerUnit: 3.29, quantity: 1 },
    { name: "Chocolate", pricePerUnit: 5, quantity: 2 },
  ];
  
  function sumItems(prod) {
    // Tu napisz swój kod
    let sum = 0;
    prod.forEach(element => {
        console.log(element);
        sum += (element.pricePerUnit * element.quantity);
    });

    return sum;
  }
  
  console.log(sumItems(products));
   //powinno zwrócić 16.27