
function startGame(){
  let start = document.getElementById("startGame_button");
  let next = document.getElementById("next_button");
  let image = document.getElementById("game_image");
  next.removeAttribute("hidden");
  image.removeAttribute("hidden");
  start.setAttribute("hidden", "hidden");
  randomNumber("start")
}
function randomNumber(operate){
  if (operate=="start"){
    count=1;
    numbers=[0,0,0,0,0,0,0,0];
    var ran=Math.floor(Math.random() * 7)+1;
    numbers[ran-1]=ran;
  }else if (operate=="repeate"){
    alert("repeate")
    var ran=Math.floor(Math.random() * 7)+1;
    if (numbers[ran-1]==ran) {
      random_number("repeate");
    }else{
      numbers[ran-1]=ran;
    }
  } else if (operate=="next" && count!=7){
    let image = document.getElementById("game_image");
    image.src="";
    count+=1
    var ran=Math.floor(Math.random() * 7)+1;
    alert(ran);
    alert(numbers[ran-1]);
    if (numbers[ran-1]==ran) {
      randomNumber("repeate");
    } else{
      numbers[ran-1]=ran;
    }
  }
  alert(ran);
  alert(count)
  let image = document.getElementById("game_image");
  image.src="images/"+ran+".png";
  let text = document.getElementById("game_text");
  text.innerHTML=ran;
  alert(image.src);
  if (count==7){
    let element = document.getElementById("title");
    element.innerHTML="Finished";
  }
  
}