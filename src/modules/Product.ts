import Asus from './Asus';
import Macbook from './Macbook';

let asus = new Asus('Zenbook v100', 'Zenbook', true, false);
console.log('asus:', asus);

let macbook = new Macbook('Macbook m2 pro', 'Macbook', true, false);
console.log('mac:', macbook);
macbook.shiftWinA();
