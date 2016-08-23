function Account(holder, balance) {
  this.holder = holder;
  this.balance = balance;
}

Account.prototype.withdrawal = function(amount) {
  this.balance -= amount;
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
}


$(document).ready(function(){
  

});
