function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(name)
}

function appendKitten(name){
  var appendKittens= [...kittens,name]
  return appendKittens
}

function prependKitten(name){
  
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}