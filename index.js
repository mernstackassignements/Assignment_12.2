/// Javascript code 

var numbers = [10, 8, 12, 36];

load = function(){
    document.getElementById('display').innerHTML = numbers.toString();
}

double = function(counter,actionType){
   numbers  =  numbers.map(function(item){
        return item*2;
    });
  
  document.getElementById('display').innerHTML = numbers.toString();  
}

filter = function(){
 
    numbers  =  numbers.filter(function(item){
        return item >= 20;
    });
  
  document.getElementById('display').innerHTML = numbers.toString();  
}

sum = function(){
    let sum = numbers.reduce(function(acc ,item){
       return acc+item;     
    });

    document.getElementById('display').innerHTML = sum;  
}