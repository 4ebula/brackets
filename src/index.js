module.exports = function check(str, bracketsConfig) {
  if (str.lenght & 1) return false;
  let position, length;
  do{
    length = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
      while (~(position = str.indexOf(bracketsConfig[i].join('')))) {
          str = str.substr(0, position) + str.substr(position + 2, str.length);
        }
    }
  }while(str.length < length && str.length != 0);
  return !str.length;

}
