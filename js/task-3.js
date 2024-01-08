function getElementWidth(content, padding, border) {
    const contentWidth = parseInt(content) || 0;
    const paddingWidth = parseInt(padding) || 0;
    const borderWidth = parseInt(border) || 0;
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));