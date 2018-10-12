function mandelbrot(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext( '2d' );
    let height = canvas.height;
    let width = canvas.width;

    let minReal = -2.0;
    let maxReal = 1.0;
    let minImaginary = -1.2;
    let maxImaginary = minImaginary + (maxReal - minReal) * (height / width);
    let realFactor = (maxReal - minReal) / (width - 1);
    let imaginaryFactor =  (maxImaginary - minImaginary) / (width - 1 );
    let maxIterations = 30;

    for(let y = 0; y < height; ++y){
        let cImaginary = maxImaginary - (y * imaginaryFactor);
        for(let x = 0; x < width; ++x){
            let cReal = minReal + (x * realFactor);
            let zReal = cReal;
            let zImaginary = cImaginary;
            let isInside = true;
            for(let n = 0; n < maxIterations; ++n){
                let zReal2 = zReal * zReal;
                let zImaginary2 = zImaginary * zImaginary;
                if(zReal2 + zImaginary2 > 4){
                    isInside = false;
                    break;
                }
                zImaginary = 2 * zReal * zImaginary + cImaginary;
                zReal = zReal2 - zImaginary2 + cReal;
            }
            if(isInside){
                context.fillRect(x, y, 1, 1);
            }
        }
    }
}

console.log(mandelbrot());
