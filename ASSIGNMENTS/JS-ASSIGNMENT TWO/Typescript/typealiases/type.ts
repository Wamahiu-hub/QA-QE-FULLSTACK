type Rectangle = {
    width: number
    height: number
}

let Rect1 : Rectangle ={
    width: 96,
    height: 87
}


const getRectangleArea = (rectangle:Rectangle) => {
    return rectangle.width * rectangle.height;
  };
  
  const getRectanglePerimeter = (rectangle:
  Rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
  };
console.log(getRectangleArea(Rect1))
console.log(getRectangleArea(Rect1))
  