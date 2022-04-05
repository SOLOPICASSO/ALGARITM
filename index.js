function random(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
let son = +prompt('nechta misol yechmoqchisiz?')

for(let i = 1; i <= son; i++){
  let son1 = random(100,300)
  let son2 = random(1,99)
  if (son1 < 150) {
    let yourAnswer = prompt(`misolni yeching ${son1} + ${son2}`)
  } else if (son1 < 200) {
    let yourAnswer = prompt(`misolni yeching ${son1} - ${son2}`)
  } else if(son1 < 250){
    let yourAnswer = prompt(`misolni yeching ${son1} / ${son2}`)
  }else if (son1 < 300){
    let yourAnswer = prompt(`misolni yeching ${son1} * ${son2}`)
  }
}

console.log(random);