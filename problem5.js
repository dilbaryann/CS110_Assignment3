// problem n5
let n = 20;
let binary = '';
while (n > 0) {
  binary = (n % 2) + binary;
  n = Math.floor(n / 2);
}
console.log(binary);

