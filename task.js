let shoppingItems = [
    {
      name: "Socks",
      price: 100
    },
    {
      name: "Mobile",
      price: 20000
    },
    {
        name: "Earphones",
        price: 1500
    },
    {
        name: 'Washing Machine',
        price: 6000
    },
    {
        name: 'Iron',
        price: 800
    }
  ];

// pluck("name") => [Socks, Mobile, Earphones, Washing Machine, Iron]
// pluck("price") => [12,20000]
// Total => 9283
// Discount(10) => discount on total price
// tax(18.5) => add tax
// deliverTo(TN, country) => add address


const percent = (total, percentVal) => {
    return (total / 100) * percentVal;
}

const pluck = (props) => ()=>{
    return shoppingItems.map(item => item[props]);
}

const total = (names) =>{
    return names.reduce((accum, item) => accum += item, 0);
    // console.log('total -> ', sum)
}
const discount = (discValue) => (sum) =>{
    return sum - percent( sum,discValue); 
    // console.log('disc -> ', discountedPrice, 'd -> ', percent( sum,discValue))
}

const tax = (taxValue) => (discountedPrice) => {
    return discountedPrice + percent(discountedPrice, taxValue);
    // console.log('tax -> ',taxedAmount, 't -> ', percent( discountedPrice,taxValue));
}

const addressTo = (address) => (taxedAmount)=> {
    return{
        items: shoppingItems, 
        amount: taxedAmount, 
        address: address
    };
}
      

let pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

console.log(pipe(pluck("price"), total, discount(10), tax(10), addressTo("Chennai, Tamil Nadu"))(0));