module.exports = function check(str, bracketsConfig) {
  if (str.lenght & 1) return false;
  let position;
  let switcher = true;
  while(switcher){
    switcher = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
      while (true) {
        position = str.indexOf(bracketsConfig[i].join(''));
        if (~position) {
          str = str.substr(0, position) + str.substr(position + 2, str.length);
          switcher = true;
        }
        else break;
      }
    }
  }
  return !str.length

}
