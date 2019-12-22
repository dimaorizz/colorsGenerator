function genHtmlColor() {
    const alphabet = '0123456789abcdef';
    let color = '#';

    for(let i = 0; i < 6; i++){ // 6 is a length of html color
        color += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return color;
}

function colorOutput() {
    const $colorText = document.getElementById('html-color'),
          $color = document.getElementById('clr');
    let color = genHtmlColor();
    $colorText.innerHTML = color;
    $color.style.backgroundColor = `${color}`;
}

const $colorButton = document.getElementById('genColor');
$colorButton.addEventListener('click', colorOutput);