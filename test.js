//'use strict';
var teacher = 'Kyle';

function otherClass() {
  teacher = 'Suzy';
  function ask(question) {
    console.log(teacher, question);
  }
  ask('why?');
}
otherClass();
//ask('????');
