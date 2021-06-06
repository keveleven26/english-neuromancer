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

function question_answer(question,answer) {
  q = document.getElementById("question_field")
  a = document.getElementById("answer_fiels")
  q.innerHTML(question)
  a.innerHTML(answer)
}