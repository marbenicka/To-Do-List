const myInput = document.querySelector('input');
const forTask = document.getElementsByClassName('fortask');
const addButton = document.getElementById('add');
const saveButton = document.getElementById('save');


//Delete default value from input
function clearInput() {
  if (myInput.value !== ""){
    myInput.value = "";
  };
}

function addTask() {
  //Create task
  var newLi = document.createElement('li');
  var myTask = myInput.value;
  var forTask = document.getElementById('fortask');
  var closeX = document.createElement('button');
  closeX.textContent = 'X';
  closeX.className = 'close';
  var del = document.createElement('div');
  del.className = 'del';
  newLi.append(del);
  newLi.append(myTask);
  newLi.append(closeX);
  forTask.append(newLi);

  newLi.className = 'task';
//Event for checked and delete button
  newLi.addEventListener('click', function delDel(){
    if (del.className == 'delanim'){
      del.className = 'del';
    } else {
      del.className = 'delanim';
    }
  })
  closeX.addEventListener('click', function removeTask() {
    newLi.remove();
  });
}

//Update date on calendar
function updateDate(e){
  var calday = document.getElementById('day');
  var calmonth = document.getElementById('month');
  var now = new Date;
  var day = now.getDate();
  var monthNumber = now.getMonth();

  var monthArray = ""
  monthArray = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
  var month = monthArray[monthNumber];

  calday.innerHTML= day;
  calmonth.innerHTML= month;
};

myInput.addEventListener('focus', clearInput, false);
addButton.addEventListener('click', addTask, false);
window.addEventListener('load', updateDate, false);
saveButton.addEventListener('click', function saving(){

})
