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
      setTimeout(typeWrite, typingSpeed);
    }
  }

function percentage_progress() {
    var i;
    var element;
    element = document.getElementById("percent")
    console.log(element);
    for (i=1; i < 101; i++) {
      element.innerHTML += i + ("% <br>") 
      window.scrollBy(0,element.clientHeight/i)
    }
  }

function setupTypeWrite() {
  pos = 0;
  typingSpeed = 1;
  entryContent = document.getElementById("page".concat(1)).querySelector('.text');
  text = entryContent.innerHTML.replace(/\s+/g, ' ');
  buffer = text;
  entryContent.innerHTML = '';
  typing = true;
}

function question_answer(question) {
  var a;
  var q;
  q = question;
  a = document.getElementById("answer_field");
  if (q=1);
    a.innerHTML=("lorem ipsum");
}

document.getElementById("question_1").addEventListener('click', question_answer(1))