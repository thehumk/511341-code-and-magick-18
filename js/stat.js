'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TITLE_X = 120;
var TITLE_Y = 30;
var FONT_GAP = 20;
var SHADOW_GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;
var BAR_X = 130;
var BAR_Y = 240;
var NAME_Y = 250;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TITLE_X, TITLE_Y);
  ctx.fillText('Список результатов:', TITLE_X, TITLE_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var time = times[i].toFixed();
    var barHeight = times[i] * BAR_HEIGHT_MAX / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, NAME_Y);
    ctx.fillText(time, BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - barHeight - FONT_GAP);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }

    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -barHeight);
  }
};
