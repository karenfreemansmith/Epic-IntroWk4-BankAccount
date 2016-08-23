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
    $(".transactions").show();
    $(".registration").hide();
    showBalance();
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
      // $(".balance").show();
      showBalance();
      $("#deposit").val("");
      $("#withdrawal").val("");
  });
});

function showBalance() {
  $("#holder").text(newAccount.holder);
  $("#balance").text("$" + newAccount.balance);
  if (newAccount.balance > 1000000) {
    $("#photo").html("<img src='img/jet.jpg'>");
  } else if (newAccount.balance > 100000) {
    $("#photo").html("<img src='img/leo.jpg'>");
  } else if (newAccount.balance > 10000) {
    $("#photo").html("<img src='img/spa.jpg'>");
  } else if(newAccount.balance>1000) {
    $("#photo").html("<img src='img/middle-class.jpg'>");
  } else if(newAccount.balance>0) {
    $("#photo").html("<img src='img/i-owe.jpg'>");
  } else {
    $("#photo").html("<img src='img/guy.jpg'>");
  }

}
