
function days(){ 
    
    let age = prompt("How old are you?");
    //let ageInDays = (age * 365);
    
    //Made If else statement restricting the numbers used and only numbers
    if ((age >= 0) && (age < 101)) {
        let ageInDays = (age * 365);

        let x = document.createElement('x');
    //Create "answer" to create a string --> shown = createTextNode = (String + Integer + String);
    let answer = document.createTextNode('You are ' + ageInDays + ' days old!');
    //Program still continues without setAttribute
    x.setAttribute('id', 'ageInDays');
    //"x" is now "answer"
    x.appendChild(answer);
    //"x" will print under the id "result" in index.html
    document.getElementById('result').appendChild(x);
    //function end(){
    //    document.getElementById(ageInDays).remove();
    //}
    }
    else{
       alert("Error: Enter numbers between 1 and 100");
    }
    //let ageInDays = (age * 365);


    //Sends the results
    //create "x" to get an element
    //let x = document.createElement('x');
    //Create "answer" to create a string --> shown = createTextNode = (String + Integer + String);
    //let answer = document.createTextNode('You are ' + ageInDays + ' days old!');
    //Program still continues without setAttribute
    //x.setAttribute('id', 'ageInDays');
    //"x" is now "answer"
    //x.appendChild(answer);
    //"x" will print under the id "result" in index.html
    //document.getElementById('result').appendChild(x);
    
}
function end(){
    document.getElementById('ageInDays').remove();
}

//Kinda works
function myFunction() {
    confirm("Are you above the age of 18?");
    
    
}