const changeColor = (hex) => {
    const hexSymbols = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    }
   let red = hex.slice(1,3).toUpperCase()
   let green = hex.slice(3, 5).toUpperCase()
   let blue = hex.slice(5, 7).toUpperCase()
   
    red = hexSymbols[red[0]] * 16 + hexSymbols[red[1]] * 1
    green = hexSymbols[green[0]] * 16 + hexSymbols[green[1]] * 1
    blue = hexSymbols[blue[0]] * 16 + hexSymbols[blue[1]] * 1
    
    if(Number.isNaN(red)  === false && Number.isNaN(green)  === false && Number.isNaN(blue)  === false) {
        
        return `rgb(${red},${green},${blue})`
    }
    else {
        return `Ошибка!`
    }
}

export default changeColor