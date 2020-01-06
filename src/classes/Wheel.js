import { currentPlayer } from '../index.js'

class Wheel {
  constructor(elements) {
    this.elements = elements;
    this.currentCard;
    this.color = ['deeppink','black','darkturquoise','darkviolet','deeppink','darkturquoise', 'darkviolet', 'black', 'darkturquoise'];
    this.label = ['10', '200','50','100','5','500', 'Bankrupt', 'Lose A Turn', '1 Million'];
    this.slices = 9;
    this.sliceDeg = 360/this.slices;
    this.deg = 40;
    this.ctx = canvas.getContext('2d');
    this.width = 500;
    this.center = this.width/2;
  }

  createWheel() {
    for(var i = 0; i < this.slices; i++){
      this.drawSlice(this.deg, this.color[i]);
      this.drawText(this.deg + this.sliceDeg/2, this.label[i]);
      this.deg += this.sliceDeg;
    }
  }

  deg2rad(deg) {
    return deg * Math.PI/180;
  }

  drawSlice(deg, color){
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.moveTo(this.center, this.center);
    this.ctx.arc(this.center, this.center, this.width/2, this.deg2rad(deg), this.deg2rad(deg+this.sliceDeg));
    this.ctx.lineTo(this.center, this.center);
    this.ctx.fill();
  }

  drawText(deg, text) {
    this.ctx.save();
    this.ctx.translate(this.center, this.center);
    this.ctx.rotate(this.deg2rad(deg));
    this.ctx.textAlign = "right";
    this.ctx.fillStyle = "#fff";
    this.ctx.font = 'bold 30px sans-serif';
    this.ctx.fillText(text, 130, 10);
    this.ctx.restore();
  }

  runBonusWheel() {
  }
  chooseWheelElement() {
    let chosenElement = this.label[Math.floor(Math.random() * this.label.length)]
    this.evaluateCurrentCard(chosenElement);
  }
  evaluateCurrentCard(card) {
    // display results of each wheel spin on DOM

    if (card === 'Bankrupt') {
      console.log(card);
      // player.roundScore = 0;
    } else if (card === 'Lose A Turn') {
      console.log(card);
      // current players turn is over, move to next player
    } else {
      currentPlayer.chooseConsonant()
    }
  }
}

export default Wheel;
