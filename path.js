//Your code below
Function buildpath(p,n){
  let path = [];
  for(x=0;x<n.length;x++){
  let r = Math.random();
  if(r<=p){
    path[x] = false;
  }
  else{
    path[x] = true;
  }
}
  path[x] = true;
  return path[x]
  }

  Function stroll(path,links){
if(index == path.length){
  return 1;
}
else if(index > path.length){
  return 0;
}
else{
  return stroll(path,links)
}

  }
  Function rsj(path,links){
    if(index = .length-1){
      return 1;
    else if( index > path.length-1){
    }
    }
  }



//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true]],0));
console.log(stroll([true,true,true]],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
