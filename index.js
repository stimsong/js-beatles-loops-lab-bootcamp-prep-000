function theBeatlesPlay (musicians, instruments) {
  var BeatlesArray = [];
  for (var i = 0; i < 4; i++) {
    BeatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return BeatlesArray;
}

function johnLennonFacts(facts) {
  var johnLennonExclamation = [];
  var i = 0;
  while(i === true) {
    johnLennonExclamation.push(facts[i] + "!!!");
    i++;
  }
  return johnLennonExclamation;
}