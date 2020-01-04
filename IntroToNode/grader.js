 
function average1(array){
    var totalScore = 0;
    for(var i=0;i<array.length;i++){
        totalScore+=array[i];
    }
    var average = Math.round(totalScore/array.length);
    console.log(average);
    return average; 
}

var scores = [90,98,89,100,100,86,94];
average1(scores);

var scores2 = [40,65,77,82,80,54,73,63,95,49];
average1(scores2);
