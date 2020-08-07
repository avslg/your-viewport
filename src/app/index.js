import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '../style/app.scss';
/*
class App {
  static vpWidth; = document.documentElement.clientWidth;
  static vpHeight = document.documentElement.clientHeight;

  static getViewportWidth() {
    return this.vpWidth;
  }
  static getViewportHeight() {
    return this.vpHeight;
  }
}
*/

const widthDiv = document.querySelector('div.result-width');
const heightDiv = document.querySelector('div.result-height');
const resultText = document.querySelector('p#result-text');

function clearSize() {
  widthDiv.innerHTML = '';
  heightDiv.innerHTML = '';
  resultText.innerHTML = '';
}

const app = (function application() {
  return {
    vpWidht: document.documentElement.clientWidth,
    vpHeight: document.documentElement.clientHeight,
    getViewportWidth() {
      this.vpWidht = document.documentElement.clientWidth;
      return this.vpWidht;
    },
    getViewportHeight() {
      this.vpHeight = document.documentElement.clientHeight;
      return this.vpHeight;
    },
  };
}());

function updateSize() {
  clearSize();
  widthDiv.innerHTML = `${app.getViewportWidth()} px`;
  heightDiv.innerHTML = `${app.getViewportHeight()} px`;
  resultText.innerHTML = `${app.getViewportWidth()}px X 
  ${app.getViewportHeight()}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateSize();
});

window.addEventListener('resize', () => {
  updateSize();
});
