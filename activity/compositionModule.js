export function increase(value, amount){
    return value + amount;


}

export function decrease(value, amount){
    return value - amount >= 0 ?value - amount : 0;
}