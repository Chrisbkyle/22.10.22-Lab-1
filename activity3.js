function addNum(a,b)  {
    return a + b
    //Function returns the sum of a and b
};


// Test if wrong data type is used
if (addNum(a,b) != typeof(number))  {
    console.log("Test failed, please input number")
}  else  {
    console.log("Passed")
}
