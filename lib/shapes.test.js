const Shape = require('./shapes')

describe('render', () => {
    it('should return a string of SVG syntax containing the corresponding text/shape/colors', () => {
      const shape = new Shape('JS', 'black', 'Square', 'yellow' );
      
      expect(shape.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="200" height="200" fill='yellow'/>
    <text x="25%" y="75%" fill='black' font-size="5em">JS</text>
</svg>`);
    });
  });

