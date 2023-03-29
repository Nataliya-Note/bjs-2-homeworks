// // 1
function parseCount(value) {
    if (isNaN(parseFloat(value))) {
      throw new Error('Невалидное значение')
    }
    
    return parseFloat(value);
  }
  
  function validateCount(value) {
    try {
      const parsedValue = parseCount(value);
      return parsedValue;
    }
    catch (error) {
      return error;
    }
  }
  
  // // 2
  class Triangle {
    constructor(a, b, c) {
      if (a + b < c || b + c < a || c + a < b) {
        throw new Error('Треугольник с такими сторонами не существует')
      }
        
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = (this.a + this.b + this.c) / 2;
      const s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
      return parseFloat(s.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      const triangle = new Triangle(a, b, c);
      return triangle;
    }
    catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
  }
  