import { currentPlayer, switchPlayer } from '../index.js'

import $ from 'jquery';

class Wheel {
  constructor(elements) {
    this.elements = elements;
    this.currentCard;
    this.color = ['deeppink','black','darkturquoise','darkviolet','deeppink','darkturquoise', 'darkviolet', 'black', 'darkturquoise'];
    this.label = ['Wren Steitle','Jordan Holtkamp','Linda Le','Wren Steitle','Jordan Holtkamp','Linda Le','Wren Steitle','Jordan Holtkamp','Linda Le'];
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
    this.ctx.fillText(text, 220, 10);
    this.ctx.restore();
  }

  chooseWheelElement() {
    let result;
    let chosenElement = this.label[Math.floor(Math.random() * this.label.length)]
    if (chosenElement === result) {
      chooseWheelElement();
    }
    result = chosenElement;
    this.evaluateCurrentCard(chosenElement);
  }
  evaluateCurrentCard(card) {
    this.currentCard = card;
    if (card === 'Bankrupt') {
      currentPlayer.roundScore = 0;
      $(`#p-${currentPlayer.playerNumber}-score`).html(`${currentPlayer.roundScore}`);
      switchPlayer();
    } else if (card === 'Lose A Turn') {
      switchPlayer();
    } else {
      currentPlayer.chooseConsonant()
    }
  }
}

export default Wheel;
