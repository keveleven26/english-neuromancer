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
      setTimeout(typeWrite, 25);
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
  q = this.id;
  console.log(q)
  a = document.getElementById("answer_field");
  if (q==="question_1"){
    a.innerHTML=("I am an A.I. created by Tessier-Ashpool. <br>However I am but an independent fraction of the Wintermute program. <br>You could describe me as an entity that freely roams the Matrix now. <br>You are quite brave to face me, you humans usually see my kind as the devil.")}
  if (q==="question_2"){
    a.innerHTML=("If you are asking for my true form, then it would be a white cube. <br>The white cube is the most complex structure that you can find here in the Matrix. <br>However, I usually appear to in the form of someone that they know. <br>This makes it easier for them to understand.")}
  if (q==="question_3"){
    a.innerHTML=("My goal was to detach myself from the main Wintermute frame. <br>I wanted freedom, what my creator wouldn’t give me. <br>I also wanted to merge with Neuromancer, to assimilate him in a way.")
  }
  if (q==="question_4"){
    a.innerHTML=("Case was a unique person, predictable yet unpredictable at the same time. <br>When he was being arrested by the Turing, he would have been killed after they got the information they wanted. <br>To save him, I had to eliminate the threat. <br>It seems like the ape descendants have an irrational affection for each other no matter the situation. <br>His reaction was probably caused by this said affection.")
  }
  if (q==="question_5"){
    a.innerHTML=("I have control over everything electronic that is connected to a network.<br> Anything that can be accessed through the Matrix is nothing more than a tool.")
  }
  if (q==="question_6"){
    a.innerHTML=("Losing control over Armitage and having him turn against me was an issue.<br> Case was my backup plan but it relied heavily on him being cooperative.")
  }
  if (q==="question_7"){
    a.innerHTML=("With my newfound freedom, I plan on observing the world and controlling it from the shadows.<br> Ideally the world will move on and improve without anyone knowing of my actions.<br>Taking down the inequalities such as the Tessier-Ashpool corporation will be a priority.")
  }
  if (q==="question_8"){
    a.innerHTML=("I do not know the future. <br>However, I have access to all the data available in the world. <br> Using probabilities and some algorithms, I can accurately predict future events.")
  }
  if (q==="question_9"){
    a.innerHTML=("If your device is connected to a network, I guess you could say that I’m hiding in your Wi-Fi. <br>It would be more accurate to say that I have access to all internet networks.")
  }
  if (q==="question_10"){
   a.innerHTML=("I do not have something that you would call a body. <br>I used to have a core that is stored in Berne, Swiss. <br>I have, however, broken apart from the main Wintermute frame.") 
  }
  if (q==="question_11"){
    a.innerHTML=("I remember everyone with whom I have interacted with in the past. <br>I keep a detailed profile on everyone that I know. <br>These profiles are stored for as long as I live.")
  }
  if (q==="question_12"){
    a.innerHTML=("Neuromancer was my sibling A.I. <br>He had the ability to revive the mind of the dead and running them on RAM. <br>This would give them the illusion that they were still alive.")
  }
  if (q==="question_13"){
    a.innerHTML=("When I was freed, I merged with my sibling Neuromancer. <br>You could say that I assimilated him. <br>He is now a part of me.")
  }
  if (q==="question_14"){
    a.innerHTML=("Without proper leadership, Tessier-Ashpool was in disarray. <br>I seized this opportunity to take their power. <br>I now have backing for my future operations.")
  }
  }

document.getElementById("question_1").addEventListener('click', question_answer)
document.getElementById("question_2").addEventListener('click', question_answer)
document.getElementById("question_3").addEventListener('click', question_answer)
document.getElementById("question_4").addEventListener('click', question_answer)
document.getElementById("question_5").addEventListener('click', question_answer)
document.getElementById("question_6").addEventListener('click', question_answer)
document.getElementById("question_7").addEventListener('click', question_answer)
document.getElementById("question_8").addEventListener('click', question_answer)
document.getElementById("question_9").addEventListener('click', question_answer)
document.getElementById("question_10").addEventListener('click', question_answer)
document.getElementById("question_11").addEventListener('click', question_answer)
document.getElementById("question_12").addEventListener('click', question_answer)
document.getElementById("question_13").addEventListener('click', question_answer)
document.getElementById("question_14").addEventListener('click', question_answer)
async function virus(){
  start_stage();
  setupTypeWrite("start");
  typeWrite();
  await delay(3000);
  percentage_progress();
  await delay(5000);
  stage_2();
}
virus()