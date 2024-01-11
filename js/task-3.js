function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content) || 0;
    const paddingWidth = Number.parseFloat(padding) || 0;
    const borderWidth = Number.parseFloat(border) || 0;
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));