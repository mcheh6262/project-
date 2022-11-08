
function numbers(x){
    switch(true) {
case (x > 0 && x < 20):
    return 'd'
    
case (x > 20 && x < 55):
    return 'c'
    
case (x > 55 && x < 70):
    return 'b'
    
case (x > 70 && x < 90):
    return 'a'
    
case (x > 90 && x < 100):
    return 'a+'
    
    }
}
numbers(31)
console.log(numbers(31))
