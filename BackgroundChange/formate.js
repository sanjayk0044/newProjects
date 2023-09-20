const getColor = () => {
    const backgroundColorNum = Math.floor(Math.random() * 16777215);
    const backgroundRandomColor = '#' + backgroundColorNum.toString(16);

    document.body.style.backgroundColor = backgroundRandomColor;
    document.getElementById('code').innerText = backgroundRandomColor;
    navigator.clipboard.writeText(backgroundRandomColor);
}

document.getElementById('btn').addEventListener(
    "click",
    getColor
)

getColor();