var stage = 1;
var tagOpen = false;
var text;
var buffer;
var entryContent;
var pos;
var typing;
var typingSpeed;
var percentage=0;
var delay_yeet=0;
function typeWrite() {
    if (pos < text.length && typing) {
      if (text.charAt(pos) == '<') {
        tagOpen = true;
      }
  
      if (!tagOpen) {
        entryContent.innerHTML += text.charAt(pos);
      }
  
      if (text.charAt(pos) == '>') {
        tagOpen = false;
        entryContent.insertAdjacentHTML('beforeend', '<br>');
      }
  
      pos++;
      setTimeout(typeWrite, 5);
    }
  }

function start_stage(){
  document.getElementById("page2").style.display="none"
}

function stage_2(){
  document.getElementById("page1").style.display="none"
  document.getElementById("page2").style.display="block"
}


function percentage_progress() {
    var element;
    element = document.getElementById("percent")
    console.log(element);
    if (percentage<=100){
      element.innerHTML += percentage + ("% <br>") 
      window.scrollBy(0,element.clientHeight/percentage)
      percentage++;
      setTimeout(percentage_progress, 30);
    }
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function setupTypeWrite(id) {
  pos = 0;
  typingSpeed = 1;
  entryContent = document.getElementById(id);
  text = entryContent.innerHTML.replace(/\s+/g, ' ');
  buffer = text;
  entryContent.innerHTML = '';
  typing = true;
}

function question_answer() {
  var a;
  var q;
  q = this.className;
  a = document.getElementById("answer_field");
  if (q=="question_1");
    a.innerHTML=("lorem ipsum");
}

document.getElementById("question_1").addEventListener('click', question_answer)
async function virus(){
  start_stage();
  setupTypeWrite("start");
  typeWrite();
  await delay(3000);
  percentage_progress();
  await delay(6000);
  stage_2();
}
virus()