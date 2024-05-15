// checks if a markdown header is a top level header, subheading, or subsubheading
export const parsePrefix = (stem: string) => {
    if (stem.startsWith('# ')) {
        return 'h1';
    } else if (stem.startsWith('## ')) {
        return 'h2';
    } else if (stem.startsWith('###')) {
        return 'h3';
    }
}