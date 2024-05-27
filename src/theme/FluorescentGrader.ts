// dynamically determines color of slide based on first slide color and slide index
const initialHsl = "hsl(190, 100%, 45%)"

export const gradeSlideFluorescentHsl = (i) => {
    const hslOrientation = 190 + (i * 30);
    // console.log(hslOrientation)
    return `hsl(${hslOrientation}, 100%, 45%)`;
}

export const gradeSlideIdFluorescentHsl = (i) => {
    const hslOrientation = 190 + (i * 30);
    // console.log(hslOrientation)
    return `hsla(${hslOrientation}, 100%, 45%, 0.2)`;
}

export const gradeSlideBorderFluorescentHsl = (i) => {
    const hslOrientation = 190 + (i * 30);
    // console.log(hslOrientation)
    return `hsl(${hslOrientation}, 100%, 75%)`;
}