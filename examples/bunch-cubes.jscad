// title: Bunch of Cubes
// author: Rene K. Mueller
// license: MIT License
// description: creating 100 cubes in space ...

var cubes = new Array();

function main() {
   for(var i=0; i<100; i++) {
      cubes[i] = translate([
         150*Math.random()-75,
         150*Math.random()-75,
         150*Math.random()-75],
         cube(5).
            setColor(hsl2rgb(Math.random()*0.2+0.7,1,0.5)));
   }
   return cubes;
}
