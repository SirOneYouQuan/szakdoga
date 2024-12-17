var r = document.querySelector(':root');

function darkmod() {
    var btn = document.getElementById("gomb");

    if (btn.innerText === 'Sötét mód') {
        btn.innerText = 'Világos mód';
        r.style.setProperty('--text', '#ece5fa');
        r.style.setProperty('--background', '#0f3925');
        r.style.setProperty('--primary', '#02502b');
        r.style.setProperty('--secondary', '#5fab7e');
        r.style.setProperty('--accent', '#42a923');
        localStorage.setItem('darkmode', 'true');

    } else {
        btn.innerText = 'Sötét mód';
        r.style.setProperty('--text', '#0c051a');
        r.style.setProperty('--background', '#c8f1de');
        r.style.setProperty('--primary', '#b0fdd9');
        r.style.setProperty('--secondary', '#55a074');
        r.style.setProperty('--accent', '#76dc57');

    }
}
