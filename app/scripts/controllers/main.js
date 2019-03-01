'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('MainCtrl', function ($scope,Events) {

    console.log("inside main controller");
      $scope.show = true;
    $scope.getData = ()=>{
        Events.getWeatherApi($scope.zipCode).then(success=>{
            console.log("herreeeeee",success.data.main.humidity);
            $scope.humidity = success.data.main.humidity;
            document.getElementById("openModel1").click();
        }).catch(error=>{

        });
        $scope.show = false;
    };







      // $(window).bind('load', function () {
      //     const raf = function (entry) {
      //         window.requestAnimationFrame(entry);
      //     };
      //     const random = function (min, max) {
      //         max = max + 1;
      //         return Math.floor(Math.random() * (max - min) + min);
      //     }
      //
      //     var
      //         container = document.getElementById('container'),
      //         cContainer = $('#c-container'),
      //         mainCanvas = document.getElementById('c'),
      //         c2Container = $('#c2-container'),
      //         mainCanvas2 = document.getElementById('c2'),
      //         mainContext = c.getContext('2d'),
      //         mainContext2 = c2.getContext('2d'),
      //         particlesLoaded = false,
      //         Particle,
      //         Particle2,
      //         canvas,
      //         w,
      //         h,
      //         w2,
      //         h2,
      //         hue = random(180, 215),
      //         globalGrassNum = 200,
      //         globalGrassLw = [],
      //         globalGrassHeight = [],
      //         globalGrassX = [],
      //         globalGrassHue = [],
      //         containerHue = random(0, 360),
      //         globalHue = 180,
      //         globalHue2 = globalHue,
      //         globalSat = 100,
      //         globalSat2 = globalSat,
      //         globalLight = 70,
      //         globalLight2 = 10,
      //         globalOpacity = 0.2,
      //         globalOpacity2 = globalOpacity,
      //         mouseX = null,
      //         mouseY = null,
      //         canvas2;
      //
      //     container.style.opacity = 1;
      //
      //     w = mainCanvas.width = mainCanvas.offsetWidth;
      //     h = mainCanvas.height = mainCanvas.offsetHeight;
      //
      //     w2 = mainCanvas2.width = mainCanvas2.offsetWidth;
      //     h2 = mainCanvas2.height = mainCanvas2.offsetHeight;
      //
      //     for (var i = 0; i < globalGrassNum; i++) {
      //         globalGrassX.push(random(0, w));
      //         globalGrassLw.push(1);
      //         globalGrassHeight.push(random(1, 100) * 0.05);
      //         globalGrassHue.push(random(120, 160));
      //     }
      //
      //     TweenMax.set(c2Container, {
      //         transformOrigin: 'center bottom',
      //         scaleY: -1,
      //         opacity: 1
      //     });
      //
      //     TweenMax.set(mainCanvas2, {
      //         filter: 'blur(5px)'
      //     });
      //
      //
      //     var grd = mainContext.createLinearGradient(0, 0, w, 0),
      //         grd2 = mainContext2.createLinearGradient(0, 0, w, 0);
      //     grd.addColorStop(0, "#48c9ff");
      //     grd.addColorStop(1, "#005aff");
      //     grd2.addColorStop(0, "#6483f5");
      //     grd2.addColorStop(1, "#1635ac");
      //
      //     //INITIAL CANVAS DRAW
      //     mainContext.fillStyle = 'rgba(0,0,0,1)';
      //     mainContext.fillRect(0, 0, w, h);
      //     mainContext2.fillStyle = 'rgba(0,0,0,1)';
      //     mainContext2.fillRect(0, 0, w2, h2);
      //
      //     function particleFactory(thisCanvas, thisContext, thisParticleName, thisCanvasFunction) {
      //
      //         var particleIndex = 0,
      //             grassIndex = 0,
      //             particles = {},
      //             grass = {},
      //             particleNum = 4,
      //             grassNum = globalGrassNum,
      //             Grass,
      //             c = thisCanvas,
      //             cx = thisContext,
      //             particlesLoaded = false,
      //             grassLoaded = false;
      //
      //         Grass = function () {
      //
      //             this.grassLw = globalGrassLw[grassIndex];
      //
      //             this.grassHue = globalGrassHue[grassIndex];
      //             this.grassSat = 100;
      //             this.grassLight = random(10, 40);
      //             this.grassOpacity = 1;
      //
      //             this.grassX = globalGrassX[grassIndex];
      //             this.grassY = h - 1;
      //             this.grassHeight = globalGrassHeight[grassIndex];
      //             this.grassXEnd = this.grassX;
      //             this.grassYEnd = this.grassY * 0.9;
      //             this.grassXIntensity = 10;
      //             this.grassX0 = random(this.grassXEnd - this.grassXIntensity, this.grassXEnd + this.grassXIntensity);
      //             this.grassY0 = this.grassY - (5 * this.grassHeight);
      //             this.grassX1 = this.grassXEnd;
      //             this.grassY1 = this.grassY - (10 * this.grassHeight);
      //             this.grassX2 = random(this.grassXEnd - this.grassXIntensity, this.grassXEnd + this.grassXIntensity);
      //             this.grassY2 = this.grassY - (15 * this.grassHeight);
      //             this.grassX3 = this.grassXEnd;
      //             this.grassY3 = this.grassY - (20 * this.grassHeight);
      //
      //             this.tick = 0;
      //             this.tickInc = random(1, 5) * 0.05;
      //             this.tickMin = -5;
      //             this.tickMax = 5;
      //
      //             grass[grassIndex] = this;
      //             this.id = grassIndex;
      //             grassIndex++;
      //         }
      //
      //         Grass.prototype.draw = function () {
      //
      //             this.tick += this.tickInc;
      //
      //             //GRASS
      //             cx.beginPath();
      //             cx.strokeStyle = `hsla(${this.grassHue},${this.grassSat}%,${this.grassLight}%,${this.grassOpacity})`;
      //             cx.lineWidth = this.grassLw;
      //             cx.moveTo(this.grassX, this.grassY);
      //             cx.quadraticCurveTo(this.grassX0 + this.tick, this.grassY0, this.grassX1 + this.tick, this.grassY1);
      //             cx.quadraticCurveTo(this.grassX2 + this.tick, this.grassY2, this.grassX3 + this.tick, this.grassY3);
      //             cx.stroke();
      //             if (this.tick > this.tickMax) {
      //                 this.tickInc *= -1;
      //             }
      //             if (this.tick < this.tickMin) {
      //                 this.tickInc *= -1;
      //             }
      //         }
      //
      //         thisParticleName = function () {
      //             this.rStart = 1;
      //             this.r = this.rStart;
      //             this.rTop = 10;
      //
      //             this.lw = this.r * 2;
      //
      //             this.rChange = 0.25;
      //             this.rChangeDown = -0.25;
      //             this.rEnd = 50;
      //             this.xPosition = random(1, 2);
      //             this.xPos1 = w * 0.35 - this.r / 2;
      //             this.xPos2 = w * 0.65 - this.r / 2;
      //             this.xInit = () => {
      //                 switch (true) {
      //                     case this.xPosition === 1:
      //                         return this.xPos1;
      //                         break;
      //                     case this.xPosition === 2:
      //                         return this.xPos2;
      //                         break;
      //                 }
      //             };
      //             this.x = this.xInit();
      //             this.dir = this.xPosition === 1 ? 5 : -5;
      //             this.vx = mouseX != null ? ((mouseX - (w / 2)) * -0.01) : this.dir;
      //             this.xOld;
      //             this.xNew;
      //
      //             this.neutral = random(1, 2) === 1;
      //
      //             this.yInit = h - this.r / 2;
      //             this.y = this.yInit;
      //             this.vyInit = random(-15, -5);
      //             this.vy = this.vyInit;
      //             this.yOld;
      //             this.yNew;
      //
      //             this.gravity = 0.5;
      //
      //             this.hue = random(180, 215);
      //             this.sat = 100;
      //             this.light = 50;
      //
      //             this.opacity = c === mainCanvas ? 1 : 0.5;
      //             this.opacityChange = -0.1;
      //             this.opacityEnd = 0;
      //             this.life = 0;
      //             this.maxLife = 250;
      //             this.doneBouncing = false;
      //             this.hasHitGround = false;
      //
      //             this.counter = 0;
      //             this.counterInc = 0.05;
      //
      //             particles[particleIndex] = this;
      //             this.id = particleIndex;
      //             particleIndex++;
      //
      //         }
      //
      //         thisParticleName.prototype.draw = function () {
      //             this.counter += this.counterInc;
      //             this.xOld = this.x;
      //             this.yOld = this.y;
      //             if (this.neutral) {
      //                 this.x -= this.vx;
      //                 this.y += this.vy;
      //             } else {
      //                 this.x -= this.vx;
      //                 this.y += this.vy;
      //             }
      //
      //             this.xNew = this.x;
      //             this.yNew = this.y;
      //             cx.beginPath();
      //             cx.fillStyle = `hsla(${this.hue},${this.sat}%,${this.light}%,${this.opacity})`;
      //             cx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      //             cx.fill();
      //
      //             //SPRINKLE TRAIL
      //             cx.beginPath();
      //             cx.strokeStyle = `hsla(${this.hue},${this.sat}%,${this.light}%,${this.opacity})`;
      //             cx.lineWidth = this.lw;
      //             cx.moveTo(this.xOld, this.yOld);
      //             cx.lineTo(this.x, this.y);
      //             cx.stroke();
      //
      //             if (this.r > this.rTop) {
      //                 this.rPeakHit = true;
      //             }
      //
      //             if (!this.hasHitGround) {
      //                 if (!this.rPeakHit) {
      //                     this.r += this.rChange;
      //                     this.lw = this.r * 2;
      //                 } else {
      //                     this.r += this.rChangeDown;
      //                     this.lw = this.r * 2;
      //                 }
      //             } else {
      //                 this.r += this.rChangeDown;
      //                 this.lw = this.r * 2;
      //             }
      //
      //             if (this.y > h - this.r) {
      //                 this.hasHitGround = true;
      //                 if (this.vy < 0.35) {
      //                     this.doneBouncing = true;
      //                 }
      //                 this.vx *= 0.5;
      //                 this.vy *= -0.5;
      //                 this.y = h - this.r;
      //             }
      //             this.life++;
      //             this.vy += this.gravity;
      //             if (this.life > this.maxLife) {
      //                 this.opacity += this.opacityChange;
      //             }
      //             if ((this.opacity < this.opacityEnd) || (this.r < 0.5)) {
      //                 delete particles[this.id];
      //             }
      //             if (this.doneBouncing) {}
      //         }
      //
      //         thisCanvasFunction = function () {
      //             thisContext.globalCompositeOperation = 'source-over';
      //             if (c === mainCanvas) {
      //                 thisContext.fillStyle = grd;
      //             } else {
      //                 thisContext.fillStyle = grd2;
      //             }
      //             thisContext.fillRect(0, 0, c.width, c.height);
      //             if (!particlesLoaded) {
      //                 //                                particlesLoaded = true;
      //                 for (var i = 0; i < particleNum; i++) {
      //                     new thisParticleName();
      //                 }
      //             }
      //             //            thisContext.globalCompositeOperation = 'lighter';
      //             for (var i in particles) {
      //                 particles[i].draw();
      //             }
      //             if (!grassLoaded) {
      //                 grassLoaded = true;
      //                 for (var i = 0; i < grassNum; i++) {
      //                     new Grass();
      //                 }
      //             }
      //             for (var i in grass) {
      //                 grass[i].draw();
      //             }
      //
      //             raf(thisCanvasFunction);
      //         }
      //         raf(thisCanvasFunction);
      //
      //     }
      //
      //     $(window).resize(function initial() {
      //         window.addEventListener('mousemove', mouseCoord, false);
      //
      //         w = mainCanvas.width = mainCanvas.offsetWidth;
      //         h = mainCanvas.height = mainCanvas.offsetHeight;
      //
      //         w2 = mainCanvas2.width = mainCanvas2.offsetWidth;
      //         h2 = mainCanvas2.height = mainCanvas2.offsetHeight;
      //
      //         return initial;
      //     }());
      //
      //     particleFactory(mainCanvas, mainContext, Particle, canvas);
      //     particleFactory(mainCanvas2, mainContext2, Particle2, canvas2);
      //
      //     window.addEventListener('mousemove', mouseCoord, false);
      //
      //     function mouseCoord(e) {
      //         mouseX = e.clientX;
      //         mouseY = e.clientY;
      //     }
      // });


  });
