<script>
function showSuccess() {
    document.getElementById("success").classList.add("show");
    setTimeout(() => {
        document.getElementById("success").classList.remove("show");
    }, 3000);
}

<script>
function payUPI(){
  let amount = document.getElementById("upiAmount").value;

  if(amount === "" || amount <= 0){
    alert("Please enter valid amount");
    return;
  }

  let upiID = "YOURUPI@bank";  // 🔴 apni UPI ID yaha daalo
  let name = "OMKAR CABLE NETWORK";

  let upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

  window.location.href = upiLink;
}
</script>

