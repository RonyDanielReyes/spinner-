const animations = [
  {char: '|', delay: 1000},
  { char: '/', delay: 3000 },
  { char: '-', delay: 5000 },
  { char: '\\', delay: 7000 },
  { char: '-', delay: 8000 },
  { char: '|', delay: 9000 }
];

for (let i of animations) {
 // console.log(i)
  setTimeout(() => {
    process.stdout.write('\r' + i.char);
  }, i['delay']);
  
}




