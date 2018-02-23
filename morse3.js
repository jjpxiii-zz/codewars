
var decodeBitsAdvanced = function (bits) {
    console.log(bits);
    if (!bits) return null;
    bits = bits.replace(/^0*|0*$/gi, "");

    var rateMin = Math.min.apply(null, bits.match(/0+|1+/g).map(function (b) { return b.length }));
    var matching = bits.match(/0+|1+/gi);
    var elements = matching.length
    var ratefloat = matching.map(function (b) { return b.length }).reduce(function (a, b) { return a + b; }) / elements;
    var rate = Math.floor(ratefloat).toString() + "," + (Math.ceil(ratefloat)).toString();
    var rate2 = Math.ceil(ratefloat + 1).toString() + ",";
    var rate3 = (Math.ceil(rateMin)).toString() + ",";
    console.log(rateMin);

    var k = 1 

    bits = bits.replace(longSpaces, '   ');


    var dashes = RegExp(1 + '{' + (rateMin * 3 + 1) + ',}', 'g');
    var bitsTemp = bits.replace(dashes, '-');
    if (bitsTemp === bits) {
        k = 0
    }

    var longSpaces = RegExp(0 + '{' + (rateMin * 7 + k) + ',}', 'g');
    var spaces = RegExp(0 + '{' + (rateMin * 3 + k) + ',}', 'g');
    dashes = RegExp(1 + '{' + (rateMin * 3 + k) + ',}', 'g');
    var dots = RegExp(1 + '{' + rateMin + ',' + (rateMin * 3 - (1-k)) + '}', 'g');

    bits = bits.replace(longSpaces, '   ');
    bits = bits.replace(dashes, '-');
    bits = bits.replace(dots, '.');
    // bits = bits.replace(/[1]+/g, '.');
    bits = bits.replace(/[01]+/g, '');

    bits = bits.replace(/   /g, '#');
    bits = bits.replace(/  /g, '@');
    //  bits = bits.replace(/ /g,'');
    bits = bits.replace(/#/g, ' # ');
    bits = bits.replace(/@/g, ' ');
    console.log(bits);
    return bits;
}

  var decodeMorse = function (morseCode) {
  if (!morseCode) return '';
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    var r = morseCode.trim().split(' ');
    var res = r.map(function (word) {
      return word == "#" ? " " : MORSE_CODE[word];
    }
    );
    return res.join("");
  }

  console.log(decodeMorse(decodeBitsAdvanced('11111000001111111000011111100000111111111111111000011111111111111000000111111111111111100001110000011111100000001111000000000000000011111111111111000000111110000011111111111111100000011110000011111111111111100001111111111111110000000000000000000000000000000000011111111111111110000000000000001111000000111110000011110000000111100000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000011111000001111111111111100000000000000001111111000000111111000000011111111111111000000000000000011110000001111100000000000000011111111111111100000111111000111111111111111000011110000000000000000111111111111110000000111100000111111111111110000000000000000000000000000000000011111111111111100000111111000011111000000111110000000000000001111110000111111111111111100000011110000000000000011111111111111100001111111111111110000111111111111110000000000000001111100000001111111111111110000000111111111111111110000000000000000111111111111111000001111100000000000000000000000000000000000011110001111100000011111111111111110000011100000000000000011111111111111110000011111111111110000001111111111111111000000000000001111111111111110000001111100001111110000001111111111111111000000000000000000000000000000000011110000011111111111111100000011111111111111100001111111111111111000000000000001111110001111000011111111111100000000000000001111111111111100000011111111111111100000000000000110000011111111111111100000111111111111111100000111110000000000000001111110000111110000111111000000000000000000000000000000000011111111111111110001111111111111111000001111111111111111000000000000000111100000111110000111100000111111111111111000000000000000111111000000000000000111000000111111111111111000111100000000000000000000000000000000000011111111111111100000000000000011111110000111100000111111000001111110000000000000001111110000000000000000000000000000000000000111111000111111111111111100000111100000011111110000000000000011110000111111111111111000000000000011111111111111000001111111111111111000001111100001111100000000000000011111111111111000001111110000011111111111111111000011111111111111100000000000000000000000000000000000001111111111111111000001111110000011110000000000000111111111111111000001111111111111111000011111111111111110000000000000001111111111111100000011111111111111100000111100000000000000011111100000111111111111110000001110000011111111111111110000011111000011111111111111')))