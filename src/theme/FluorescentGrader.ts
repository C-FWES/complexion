// dynamically determines color of slide based on first slide color and slide index
const initialHsl = "hsl(190, 100%, 45%)"

export const gradeSlideFluorescentHsl = (i) => {
    const hslOrientation = 190 + (i * 20);
    console.log(hslOrientation)
    return `hsl(${hslOrientation}, 100%, 50%)`;
}