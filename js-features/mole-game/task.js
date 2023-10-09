function getHole(index) {
  let holeId = document.getElementById(`hole${index}`);
  return holeId;
}
let deadCount = 0;
let lostCount = 0;

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).classList.contains('hole_has-mole')) {
      deadCount++;
      document.getElementById('dead').textContent = deadCount;
      if (deadCount === 10) {
        alert('Ура, победа!');
        location.reload();
      }
    } else {
      lostCount++;
      document.getElementById('lost').textContent = lostCount;
        if (lostCount === 5) {
          alert('ГГ, мы проиграли');
          location.reload();
        }
    }
  }
}