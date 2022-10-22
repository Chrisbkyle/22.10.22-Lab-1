function getSum(a,b)  {
    return false;
    //return a + b
    //Function returns the sum of a and b
};

if (getSum(1,2) == 3){
    console.log('getSum -> Test 1 : Passed');}
    else{    console.log('getSum -> Test 1 : Failed')
}
if (getSum(20) == 20){
    console.log('getSum -> Test 2 : Passed');
}else{
    console.log('getSum -> Test 2 : Failed')
}

if (getSum(20, 0) == 20){
    console.log('getSum -> Test 3 : Passed');
}else{
    console.log('getSum -> Test 3 : Failed')
}

if (getSum(20, 'ABC') == 20){
    console.log('getSum -> Test 4 : Passed');
}else{
    console.log('getSum -> Test 4 : Failed')
}

if (getSum(20, 0/10) == 20){
    console.log('getSum -> Test 5 : Passed');
}else{
    console.log('getSum -> Test 5 : Failed')
}


if (getSum(20, 01/0) == 20){
    console.log('getSum -> Test 6 : Passed');
}else{
    console.log('getSum -> Test 6 : Failed')
}
