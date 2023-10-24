setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   a');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r-  b');
}, 5000);

setTimeout(() => {
  process.stdout.write('\r\\   c'); 
}, 7000);

setTimeout(() => {
  process.stdout.write('\r-   d'); 
}, 8000);

setTimeout(() => {
  process.stdout.write('\r|   e'); 
}, 9000);