//打印出命令行参数的和

let sum = 0;
for (let count = 0; count < process.argv.length - 2; count++) {
  sum += Number(process.argv[2 + count]);
}
console.log(sum);