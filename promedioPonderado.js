const notes1 = [
  {
    course: 'Phyton',
    note: 10,
    credit: 2,
  },
  {
    course: 'JavaScript',
    note: 8,
    credit: 10,
  },
  {
    course: 'SQL',
    note: 7,
    credit: 5,
  },
  {
    course: 'PL SQL',
    note: 9,
    credit: 3,
  },
  {
    course: 'PHP',
    note: 11,
    credit: 4,
  },
]

function pPonderado(notes) {
  const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
  });
  
  const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newValue) {
    return sum + newValue;
  });
  
  const credits = notes.map(function (noteObject) {
    return noteObject.credit;
  })
  
  const sumOfCredits = credits.reduce(function (sum = 0, newValue) {
    return sum + newValue;
  })
  
  const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
  return promedioPonderadoNotasConCreditos;
}

console.log(pPonderado(notes1));