function Account(holder, balance) {
  this.holder = holder;
  this.balance = balance;
}

Account.prototype.withdrawal = function(amount) {
  this.balance -= parseFloat(amount);
}

Account.prototype.deposit = function(amount) {
  this.balance += parseFloat(amount);
}

var newAccount;

$(document).ready(function(){
  $("form#register").submit(function(event){
    event.preventDefault();
    var inputName = $("#name").val();
    var inputInitialDeposit = parseFloat($("#initialDeposit").val());
    newAccount = new Account(inputName, inputInitialDeposit);
    $(".balance").show();
    $("#holder").text(newAccount.holder);
    $("#balance").text("$" + newAccount.balance);
  });
  $("form#funds").submit(function(event){
    event.preventDefault();
    var inputAmount = 0;


    if ($("#deposit").val()>0) {
      inputAmount=parseFloat($("#deposit").val());
      newAccount.deposit(inputAmount);
    } else if($("#withdrawal").val()>0) {
      inputAmount=parseFloat($("#withdrawal").val());
      newAccount.withdrawal(inputAmount);
    } else {
        alert("You can only deposit money in this account, you may want to consider a safety deposit box.");
      }
      $(".balance").show();
      $("#holder").text(newAccount.holder);
      $("#balance").text("$" + newAccount.balance);
      $("#deposit").val("");
      $("#withdrawal").val("");
  });
});
