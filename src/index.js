module.exports = function toReadable (number) {
  
    var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');

  if(number == 0) {
      return 'zero'
  }
  
  if (number<20) {
    return (ones[number]).trim()
  } 
  
  if (number<100) {
        return (tens[Math.floor(number/10)] + ones[number%10]).trim()
  }
  
  if(number<1000) {
    hundreds = ones[Math.floor(number/100)] + ' hundred '
    tens_number = number%100==0 ? '' : toReadable(number%100)
    return (hundreds + tens_number).trim()
  } 
}
