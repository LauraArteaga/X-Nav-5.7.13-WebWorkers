self.onmessage = function(event) {
  number = event.data;
  var primelist = buscarPrimos(number);
  self.postMessage(primelist);
  self.postMessage("Fin");
}


function buscarPrimos(number) {
  var n = 1;
  result = "";
  search: while (n<number) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    result += " " + n;
  }
  return result;
}
