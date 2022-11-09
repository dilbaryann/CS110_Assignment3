const n = 5;
let i = 0;
while(i < n) {
  let j = 0;
  while (j < n) {
    process.stdout.write('+');
    j++;
  }
  console.log();
  i++;
}
