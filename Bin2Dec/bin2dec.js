function bin2dec() {
    const bina = document.getElementById("bin").value;
    let b2d = parseInt(bina, 2);

    var pieces = bina
    .split('')
    .filter(item => item <= 1)
    .join('');

    if (bina.length === pieces.length && bina.length > 0) {
    document.getElementById("dec").innerHTML = b2d;
    } else {
    alert("Invalid number!");
    }
}


