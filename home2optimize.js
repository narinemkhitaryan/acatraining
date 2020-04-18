function isPrime(n) {
  for (let i = 2; i <= Math.round(Math.sqrt(n)); i++) {
      let message;
    (n % i === 0) ?  message = "no" : message = "yes";
    return message
  }
}
alert(isPrime(17));
