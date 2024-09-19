// ==UserScript==
// @name       🔥 TigerTech Client for Shell Shockers Aimbot, CrossHair Mod, Auto-Move, Ping Monitor and MOAR!🔥
// @namespace  https://greasyfork.org/en/scripts/489957-%E0%A6%94%E0%A7%A3%C9%A8n%C4%91%C9%A8%E2%B1%A5-%C5%A7%C5%82%C7%A5%C9%87%C9%BD%E0%A6%94%E0%A7%A3-aimbot-for-shell-shockers/code
// @license      GPL-3.0
// @version      1.4.4pre44
// @author      onlypuppy7 and🔥TigerTech Networkঔৣ🔥
// @description  Get ready for a brand new update! TigerTechOfficial Mod for Shell Shockers Aimbot, ESP and MOAR! It allows players to see opponents through walls, display lines to them, and automatically aim at targets. The script includes a GUI for toggling features and works on various Shell Shockers domains. Use of this script may violate game terms of service and ethical considerations.

// @match        *://algebra.best/*
// @match        *://algebra.vip/*
// @match        *://biologyclass.club/*
// @match        *://deadlyegg.com/*
// @match        *://deathegg.world/*
// @match        *://eggcombat.com/*
// @match        *://egg.dance/*
// @match        *://eggfacts.fun/*
// @match        *://egghead.institute/*
// @match        *://shellshockers.today/*
// @match        *://eggisthenewblack.com/*
// @match        *://eggsarecool.com/*
// @match        *://geometry.best/*
// @match        *://geometry.monster/*
// @match        *://geometry.pw/*
// @match        *://geometry.report/*
// @match        *://hardboiled.life/*
// @match        *://hardshell.life/*
// @match        *://humanorganising.org/*
// @match        *://mathdrills.info/*
// @match        *://mathfun.rocks/*
// @match        *://mathgames.world/*
// @match        *://math.international/*
// @match        *://mathlete.fun/*
// @match        *://mathlete.pro/*
// @match        *://overeasy.club/*
// @match        *://scrambled.best/*
// @match        *://scrambled.tech/*
// @match        *://scrambled.today/*
// @match        *://scrambled.us/*
// @match        *://scrambled.world/*
// @match        *://shellshockers.club/*
// @match        *://shellshockers.site/*
// @match        *://shellshockers.us/*
// @match        *://shellshockers.world/*
// @match        *://softboiled.club/*
// @match        *://violentegg.club/*
// @match        *://violentegg.fun/*
// @match        *://yolk.best/*
// @match        *://yolk.life/*
// @match        *://yolk.rocks/*
// @match        *://yolk.tech/*
// @match        *://shellshock.io/*
// @match        *://zygote.cafe/*

// @discord      https://discord.gg/qUJSdRJvVV/*
// @homepage     https://greasyfork.org/en/scripts/492659/
// @github       https://github.com/Indian81/India-Shell-Shockers-Mod--Aimbot-ESP-and-MOAR-
// @greasyfork   https://greasyfork.org/en/users/1228152-%E0%A6%94%E0%A7%A3%C9%A8-%E2%86%81%C9%A8%E2%B1%A5%E0%A6%94%E0%A7%A3/
// @icon         https://t3.ftcdn.net/jpg/06/21/52/32/240_F_621523283_93JNEJ1v1X2OjTRnN31vNUVIwivyyOx9.jpg


// @grant        none

// @run-at       document-start

// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require      https://unpkg.com/guify@0.12.0/lib/guify.min.js
// @require      https://cdn.jsdelivr.net/npm/babylonjs@3.3.0/babylon.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js


// @downloadURL https://update.greasyfork.org/scripts/492659/%F0%9F%94%A5%20TigerTech%20Client%20for%20Shell%20Shockers%20Aimbot%2C%20CrossHair%20Mod%2C%20Auto-Move%2C%20Ping%20Monitor%20and%20MOAR%21%F0%9F%94%A5.user.js
// @updateURL https://update.greasyfork.org/scripts/492659/%F0%9F%94%A5%20TigerTech%20Client%20for%20Shell%20Shockers%20Aimbot%2C%20CrossHair%20Mod%2C%20Auto-Move%2C%20Ping%20Monitor%20and%20MOAR%21%F0%9F%94%A5.meta.js
// ==/UserScript==


alert("Thank you for installing TigerTechOfficial Mod! 💖💖 If you have any problems reload the page or head to the Discord Server! Delete line 76 to stop this message! \n Press C for Aimbot \n Press V for ESP \n Press N for Tracers \n Press 1 for AutoWalk \n Press 2 for AutoJump \n Press 3 for AutoDefenseTrainer \n 4 for AutoMelee \n Press 5 for Autorelaod (Still in Making) Please give us your feedback on greasyfork.");

(function() {
    'use strict';
    const correctPassword = 'Tigertech';
    let userPassword = prompt('Enter the password to access this Shell Shockers- Head to our discord server:');
    if (userPassword !== correctPassword) {
        document.body.innerHTML = '<h1>Access Denied. Check the userscripts home page to learn more or go to the discord server!</h1>';
    } else {
        alert('Access Granted!');
    }
})();


(function() {
  const addScript = () => {
    document.title = ' TigerTechOfficial Mod in Use!';setTimeout(function(){
    document.getElementById("logo").innerHTML = "<img src='https://t3.ftcdn.net/jpg/06/21/52/32/240_F_621523283_93JNEJ1v1X2OjTRnN31vNUVIwivyyOx9.jpg'>";
}, 4000);
let style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://t3.ftcdn.net/jpg/06/21/52/32/240_F_621523283_93JNEJ1v1X2OjTRnN31vNUVIwivyyOx9.jpg';
document.head.appendChild(style);
  };
  document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
})();

(function() {
    setTimeout(()=>{document.getElementById("chatOut").style.userSelect="text"},5e3);
})();


(function() {
    'use strict';

    let autoWalkInterval;
    let autoJumpInterval;
    let autoDodgeInterval;
    let autoWhiskInterval;
    let autoReloadInterval;
    let isGrenadeThrowing = false;
    let grenadeMaxPowerDuration = 1000;
    let autoClickInterval;
    let autofireEnabled = false;
    const keySequence = ['a', 'w', 'd', ' '];
    let currentIndex = 0;

    const watermark = document.createElement('div');
    watermark.style.position = 'fixed';
    watermark.style.bottom = '10px';
    watermark.style.left = '10px';
    watermark.style.padding = '5px 10px';
    watermark.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    watermark.style.color = '#ff0000';
    watermark.style.fontFamily = 'Agency FB, sans-serif';
    watermark.style.fontStyle = 'Italic';
    watermark.style.fontWeight ='Bold';
    watermark.style.fontSize = '14px';
    watermark.style.borderRadius = '5px';
    watermark.style.display = 'none';
    document.body.appendChild(watermark);

    function updateWatermark(text, enabled) {
        watermark.textContent = text + (enabled ? 'Enabled' : 'Disabled');
        watermark.style.display = 'block';
        setTimeout(() => {
            watermark.style.display = 'none';
        }, 2000);
    }

    function autoWalk() {
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'w'}));
        setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent('keyup', {'key': 'w'}));
        }, 100);
    }

    function autoJump() {
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': ' '}));
        setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent('keyup', {'key': ' '}));
        }, 100);
    }

    function triggerKey(key) {
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
        setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent('keyup', {'key': key}));
        }, 500);
    }

    function autoDodge() {
        triggerKey(keySequence[currentIndex]);
        currentIndex = (currentIndex + 1) % keySequence.length;
    }

    function autoWhisk() {
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'f'}));
        setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent('keyup', {'key': 'f'}));
        }, 100);
    }

    function autoReload() {
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'r'}));
        setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent('keyup', {'key': 'r'}));
        }, 7000);
    }

    function startGrenadeThrow() {
        if (!isGrenadeThrowing) {
            isGrenadeThrowing = true;
            document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'q'}));
            setTimeout(() => {
                document.dispatchEvent(new KeyboardEvent('keyup', {'key': 'q'}));
                isGrenadeThrowing = false;
            }, grenadeMaxPowerDuration);
        }
    }

    function autoClick() {
        if (autofireEnabled) {
            document.dispatchEvent(new MouseEvent('mousedown', {'button': 0}));
            setTimeout(() => {
                document.dispatchEvent(new MouseEvent('mouseup', {'button': 0}));
            }, 1000);
        }
    }

    document.addEventListener('keydown', function(event) {
        if (!event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey) {
            switch(event.key) {
                case '1':
                    if (!autoWalkInterval) {
                        autoWalkInterval = setInterval(autoWalk, 200);
                        updateWatermark('Auto Walk ', true);
                    } else {
                        clearInterval(autoWalkInterval);
                        autoWalkInterval = null;
                        updateWatermark('Auto Walk ', false);
                    }
                    break;
                case '2':
                    if (!autoJumpInterval) {
                        autoJumpInterval = setInterval(autoJump, 200);
                        updateWatermark('Auto Jump ', true);
                    } else {
                        clearInterval(autoJumpInterval);
                        autoJumpInterval = null;
                        updateWatermark('Auto Jump ', false);
                    }
                    break;
                case '3':
                    if (!autoDodgeInterval) {
                        autoDodgeInterval = setInterval(autoDodge, 500);
                        updateWatermark('Auto Dodge ', true);
                    } else {
                        clearInterval(autoDodgeInterval);
                        autoDodgeInterval = null;
                        updateWatermark('Auto Dodge ', false);
                    }
                    break;
                case '4':
                    if (!autoWhiskInterval) {
                        autoWhiskInterval = setInterval(autoWhisk, 200);
                        updateWatermark('Auto Whisk ', true);
                    } else {
                        clearInterval(autoWhiskInterval);
                        autoWhiskInterval = null;
                        updateWatermark('Auto Whisk ', false);
                    }
                    break;
                case '5':
                    if (!autoReloadInterval) {
                        autoReloadInterval = setInterval(autoReload, 200);
                        updateWatermark('Auto Reload ', true);
                    } else {
                        clearInterval(autoReloadInterval);
                        autoReloadInterval = null;
                        updateWatermark('Auto Reload ', false);
                    }
                    break;
                case '6':
                    startGrenadeThrow();
                    updateWatermark('Grenade Throw ', true);
                    break;
                case '7':
                    autofireEnabled = !autofireEnabled;
                    if (autofireEnabled) {
                        autoClickInterval = setInterval(autoClick, 200);
                        updateWatermark('Auto Click ', true);
                    } else {
                        clearInterval(autoClickInterval);
                        autoClickInterval = null;
                        updateWatermark('Auto Click ', false);
                    }
                    break;
                default:
                    break;
            }
        }
    });
})();




//Credits to the DeathB, OG Old Creator of Crackware-TD Stuart and the Shark of Shell Shockers -SharkBucks!//



(function () {
  "use strict";

  window.mod = {
    loadGui: () => {},
    modMenu: {
      instruction: {},
      credit: {},
      crosshairSettings: {
        type: "None", // None, White Cross, Black Cross, White Circle, Black Circle, White Square, Black Square Etc................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................. If You Reached all the way here you are goated!
        container: {
          label: {},
        },
      },
    },
  };

  window._utils = {};
  window._utils.requirelib = async function (url, global) {
    return new Promise(async function (resolve) {
      async function getCode() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
      }
      let code = await getCode();

      if (global) {
        code += 'window["' + global + '"] = ' + global + ";";
      }
      let evaluateCode = new Function(code);
      evaluateCode();
      resolve("done");
    });
  };

  window._utils
    .requirelib("https://unpkg.com/guify@0.12.0/lib/guify.min.js")
    .then(() => {
      window.mod.loadGui();
    });

  const y = document.createElement("div");
  y.id = "crossY";
  const z = document.createElement("div");
  z.id = "crossZ";
  const w = document.createElement("div");
  w.id = "crossW";
  const x = document.createElement("div");
  x.id = "crossX";

  document.body.appendChild(y);
  document.body.appendChild(z);
  document.body.appendChild(w);
  document.body.appendChild(x);

  function updateCrosshair(type) {
    if (type == "None") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "White Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:White;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:White;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Black Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:White;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:White;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Red Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Orange Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Yellow Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Green Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Blue Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Purple Cross") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:5px;height:17px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "White Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Red Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Orange Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Yellow Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Green Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Blue Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Purple Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Black Circle") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "White Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ffffff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffffff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffffff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Red Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Orange Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Yellow Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Green Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Blue Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Purple Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Black Square") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:9px;height:9px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "White Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Red Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ff0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Orange Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ff9900;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Yellow Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ffff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "White Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Green Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#00ff00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Blue Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#0000ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Purple Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ff00ff;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "Black Long Width") {
      let y = document.getElementById("crossY");
      let z = document.getElementById("crossZ");
      let w = document.getElementById("crossW");
      let x = document.getElementById("crossX");

      y.style.cssText = `width:17px;height:5px;background-color:#FFFFFF;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
    }

    if (type == "--- RED ---") {
      alert(
        `You can not set RED as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- ORANGE ---") {
      alert(
        `You can not set ORANGE as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- YELLOW ---") {
      alert(
        `You can not set YELLOW as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- GREEN ---") {
      alert(
        `You can not set  GREEN as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- BLUE ---") {
      alert(
        `You can not set BLUE as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- PURPLE ---") {
      alert(
        `You can not set PURPLE as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- WHITE ---") {
      alert(
        `You can not set WHITE as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
    if (type == "--- BLACK ---") {
      alert(
        `You can not set BLACK as your crosshair. \nPlease choose a crosshair that does not start with a "---".`
      );
    }
  }

  window.mod.loadGui = function () {
    const crosshairGui = new window.guify({
      title: "Crosshair",
      theme: "dark",
      align: "right",
      width: 300,
      barMode: "none",
      opacity: 0.95,
      root: document.body,
      open: true,
    });

    crosshairGui.Register({
      type: "folder",
      label: "Instructions",
      open: false,
    });

    window.mod.modMenu.instruction = crosshairGui.Register({
      type: "text",
      label: "Credits",
      folder: "Instructions",
    });

    window.mod.modMenu.instruction.container.innerHTML = `<p style="color:yellow;font-size: small;margin-bottom: 0px;padding-left: 2.5px;">Thank you for installing and using Crosshair Mods & TigerTechOfficial Mod for Shell Shockers!</p><p style="color:white;font-size: small;margin-top: 0px;padding-left: 2.5px;">1. Below are the settings for the mod as you can see(Crosshair).</p><p style="color:white;font-size: small;margin-top: 0px;padding-left: 2.5px;">2. Select the settings you would want to use, they will appear in the center of the screen.</p><p style="color:white;font-size: small;margin-top: 0px;padding-left: 2.5px;">3. You can not set to anything that start or end with a "---" as they are markers/labels.</p><p style="color:white;font-size: small;margin-top: 0px;padding-left: 2.5px;">4. Take this mod into a game and try it out!</p><p style="color:orange;font-size: small;margin-top: 0px;padding-left: 2.5px;">[WARNING] : This has not been publicly allowed or disallowed in Shell League!</p><p style="color:red;font-size: small;margin-top: 0px;padding-left: 2.5px;">[NOTE] : Do not reproduce, reupload, or take this mod as your own as the mods worked hard on this. If you do please credit us as we worked on this, any modifications will be yours, but the framework will still be ours, due to reason of the creators. Subscribe to SharksBucks as it helps the creators! Links in the menu of TigerTechOfficial Mod.</p>`;

    crosshairGui.Register({
      type: "folder",
      label: "Crosshair Settings",
      open: false,
    });

    crosshairGui.Register({
      type: "select",
      label: "Types",
      object: window.mod.modMenu.crosshairSettings,
      property: "type",
      folder: "Crosshair Settings",
      options: [
        "None",
        "--- RED ---",
        "Red Cross",
        "Red Circle",
        "Red Square",
        "Red Long Width",
        "--- ORANGE ---",
        "Orange Cross",
        "Orange Circle",
        "Orange Square",
        "Orange Long Width",
        "--- YELLOW ---",
        "Yellow Cross",
        "Yellow Circle",
        "Yellow Square",
        "Yellow Long Width",
        "--- GREEN ---",
        "Green Cross",
        "Green Circle",
        "Green Square",
        "Green Long Width",
        "--- BLUE ---",
        "Blue Cross",
        "Blue Circle",
        "Blue Square",
        "Blue Long Width",
        "--- PURPLE ---",
        "Purple Cross",
        "Purple Circle",
        "Purple Square",
        "Purple Long Width",
        "--- WHITE ---",
        "White Cross",
        "White Circle",
        "White Square",
        "White Long Width",
        "--- BLACK ---",
        "Black Cross",
        "Black Circle",
        "Black Square",
        "Black Long Width",
      ],
      onChange: updateCrosshair,
    });

    window.mod.modMenu.credit = crosshairGui.Register({
      type: "text",
      label: "Credits",
    });

    window.mod.modMenu.credit.container.innerHTML = `<p style="color:gray;font-size: medium;margin-bottom: 0px;padding-left: 15px;">Made by Sharkb. & DeathB.</p><p style="color:gray;font-size: medium;margin-top: 0px;padding-left: 15px;">With the help of TDStuart!</p>`;

    let titleTextElm = crosshairGui.panel.panel.childNodes[0];
    titleTextElm.style.color = "rgb(255, 196, 0)";
    titleTextElm.style.fontWeight = "bold";
  };
})();

//--------Credits to onlypuppy7(Aimbot, ESP and Tracers)--------------//


(function () {

    let originalReplace = String.prototype.replace;
    String.prototype.originalReplace = function() {
        return originalReplace.apply(this, arguments);
    };

    let enableESP = true;
    let enableTracers = true;
    let RMB = false;


    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRGetResponse = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'response');
    let shellshockjs;
    XMLHttpRequest.prototype.open = function(...args) {
        const url = args[1];
        if (url && url.includes("js/shellshock.js")) {
            shellshockjs = this;
        }
        originalXHROpen.apply(this, args);
    };
    Object.defineProperty(XMLHttpRequest.prototype, 'response', {
        get: function() {
            if (this === shellshockjs) {
                return applyLibertyMutual(originalXHRGetResponse.get.call(this));
            }
            return originalXHRGetResponse.get.call(this);
        }
    });

    let F = [];
    let H = {};
    let functionNames = [];
    let ESPArray = [];

    const getScrambled = function() {
        return Array.from({length: 10}, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
    };

    const createAnonFunction = function(name, func) {
        const funcName = getScrambled();
        window[funcName] = func;
        F[name] = window[funcName];
        functionNames[name] = funcName;
    };

    const fetchTextContent = function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false); // Make the request synchronous
        xhr.send();
        if (xhr.status === 200) {
            return xhr.responseText;
        } else {
            console.error("Error fetching text content. Status:", xhr.status);
            return null;
        }
    };

    const applyLibertyMutual = function(js) {
        let hash = CryptoJS.SHA256(js).toString(CryptoJS.enc.Hex);
        let clientKeys;
        onlineClientKeys = fetchTextContent("https://raw.githubusercontent.com/StateFarmNetwork/client-keys/main/libertymutual_" + hash + ".json");

        if (onlineClientKeys == "value_undefined" || onlineClientKeys == null) {
            let userInput = prompt('Valid keys could not be retrieved online. Enter keys if you have them. Join the StateFarm Network Discord server to generate keys! https://discord.gg/HYJG3jXVJF', '');
            if (userInput !== null && userInput !== '') {
                alert('Aight, let\'s try this. If it is invalid, it will just crash.');
                clientKeys = JSON.parse(userInput);
            } else {
                alert('You did not enter anything, this is gonna crash (LOL).');
            }
        } else {
            clientKeys = JSON.parse(onlineClientKeys);
        }

        H = clientKeys.vars;

        let injectionString = "";

        const modifyJS = function(find,replace) {
            let oldJS = js;
            js = js.originalReplace(find,replace);
            if (oldJS !== js) {
                console.log("%cReplacement successful! Injected code: "+replace, 'color: green; font-weight: bold; font-size: 0.6em; text-decoration: italic;');
            } else {
                console.log("%cReplacement failed! Attempted to replace "+find+" with: "+replace, 'color: red; font-weight: bold; font-size: 0.6em; text-decoration: italic;');
            }
        };

        console.log('%cATTEMPTING TO START LIBERTYMUTUAL', 'color: magenta; font-weight: bold; font-size: 1.5em; text-decoration: underline;');
        const variableNameRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
        for (let name in H) {
            deobf = H[name];
            if (variableNameRegex.test(deobf)) {
                injectionString = `${injectionString}${name}: (() => { try { return ${deobf}; } catch (error) { return "value_undefined"; } })(),`;
            } else {
                alert("Message from the LibertyMutual Devs: WARNING! The keys inputted contain non-variable characters! There is a possibility that this could run code unintended by the LibertyMutual team, although possibly there is also a mistake. Do NOT proceed with using this, and report to the LibertyMutual developers what is printed in the console.");
                console.log("REPORT THIS IN THE DISCORD SERVER:", clientKeys);
                const crashplease = "balls";
                crashplease = "balls2";
            }
        }
        console.log(injectionString);
        console.log('%cLIBERTYMUTUAL INJECTION: INJECT VAR RETRIEVAL FUNCTION AND MAIN LOOP', 'color: yellow; font-weight: bold; font-size: 1.2em; text-decoration: underline;');
        modifyJS(H.SCENE+'.render',`window["${functionNames.retrieveFunctions}"]({${injectionString}},true)||${H.SCENE}.render`);
        console.log('%cSuccess! Variable retrieval and main loop hooked.', 'color: green; font-weight: bold;');
        modifyJS(`{if(${H.CULL})`,`{if(true)`);
        console.log('%cSuccess! Cull inhibition hooked.', 'color: green; font-weight: bold;');
        modifyJS("Not playing in iframe", "LIBERTYMUTUAL ACTIVE!");
        console.log(H);
        return js;
    };

    createAnonFunction("retrieveFunctions", function(vars) {
        ss = vars;
        F.LIBERTYMUTUAL();
    });

    createAnonFunction("LIBERTYMUTUAL", function() {
        ss.PLAYERS.forEach(PLAYER => {
        if (PLAYER.hasOwnProperty("ws")) {
            ss.MYPLAYER = PLAYER;
        }
    });

    H.actor = findKeyWithProperty(ss.MYPLAYER, H.mesh);

    let TARGETED;
    let CROSSHAIRS = new BABYLON.Vector3();
    CROSSHAIRS.copyFrom(ss.MYPLAYER[H.actor][H.mesh].position);
    const horizontalOffset = Math.sin(ss.MYPLAYER[H.actor][H.mesh].rotation.y);
    const verticalOffset = Math.sin(-ss.MYPLAYER[H.pitch]);
    CROSSHAIRS.x += horizontalOffset;
    CROSSHAIRS.y += verticalOffset + 0.4;
    CROSSHAIRS.z += Math.cos(ss.MYPLAYER[H.actor][H.mesh].rotation.y);

    const timecode = Date.now();
    let minValue = 99999;
    ss.PLAYERS.forEach(PLAYER => {
        if (PLAYER) {
            PLAYER.timecode = timecode;
            if ((PLAYER !== ss.MYPLAYER) && ((ss.MYPLAYER.team == 0) || (PLAYER.team !== ss.MYPLAYER.team))) {
                if ((!PLAYER.generatedESP)) {
                    const boxSize = { width: 0.4, height: 0.65, depth: 0.4 };
                    const vertices = [
                        new BABYLON.Vector3(-boxSize.width / 2, 0, -boxSize.depth / 2),
                        new BABYLON.Vector3(boxSize.width / 2, 0, -boxSize.depth / 2),
                        new BABYLON.Vector3(boxSize.width / 2, 0 + boxSize.height, -boxSize.depth / 2),
                        new BABYLON.Vector3(-boxSize.width / 2, 0 + boxSize.height, -boxSize.depth / 2),
                        new BABYLON.Vector3(-boxSize.width / 2, 0, boxSize.depth / 2),
                        new BABYLON.Vector3(boxSize.width / 2, 0, boxSize.depth / 2),
                        new BABYLON.Vector3(boxSize.width / 2, 0 + boxSize.height, boxSize.depth / 2),
                        new BABYLON.Vector3(-boxSize.width / 2, 0 + boxSize.height, boxSize.depth / 2),
                    ];

                    const arrowSize = 0.1;
                    const arrowPoints = [
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(-arrowSize, arrowSize, -arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(arrowSize, arrowSize, -arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(arrowSize, arrowSize, arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(-arrowSize, arrowSize, arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(-arrowSize, -arrowSize, -arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(arrowSize, -arrowSize, -arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(arrowSize, -arrowSize, arrowSize)],
                        [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(-arrowSize, -arrowSize, arrowSize)]
                    ];

                    const lines = [];
                    for (let i = 0; i < 8; i++) {
                        lines.push([arrowPoints[i][0].add(vertices[i]), arrowPoints[i][1].add(vertices[i])]);
                    }

                    for (let i = 0; i < 4; i++) {
                        lines.push([vertices[i], vertices[(i + 1) % 4]]);
                        lines.push([vertices[i + 4], vertices[(i + 1) % 4 + 4]]);
                        lines.push([vertices[i], vertices[i + 4]]);
                    }

                    const box = BABYLON.MeshBuilder.CreateLineSystem(getScrambled(), { lines }, PLAYER[H.actor].scene);
                    box.renderingGroupId = 1;
                    box.parent = PLAYER[H.actor][H.mesh];

                    const sphereRadius = 0.01; // Adjust the size of the sphere/'Balls' as needed
                    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: sphereRadius * 2 }, PLAYER[H.actor].scene);
                    sphere.renderingGroupId = 1;
                    sphere.parent = box;

                    const tracers = BABYLON.MeshBuilder.CreateLines('lines', { points: [PLAYER[H.actor][H.mesh].position, CROSSHAIRS] }, PLAYER[H.actor].scene);
                    tracers.alwaysSelectAsActiveMesh = true;
                    tracers.renderingGroupId = 1;

                    PLAYER.box = box;
                    PLAYER.tracers = tracers;
                    PLAYER.generatedESP = true;
                    ESPArray.push([box, tracers, PLAYER]);
                }
                PLAYER.tracers.setVerticesData(BABYLON.VertexBuffer.PositionKind, [CROSSHAIRS.x, CROSSHAIRS.y, CROSSHAIRS.z, PLAYER[H.actor][H.mesh].position.x, PLAYER[H.actor][H.mesh].position.y, PLAYER[H.actor][H.mesh].position.z]);
                PLAYER.box.visibility = enableESP;
                PLAYER.tracers.visibility = (PLAYER[H.playing] && enableTracers);

                const distance = Math.hypot(PLAYER[H.x] - ss.MYPLAYER[H.x], PLAYER[H.y] - ss.MYPLAYER[H.y], PLAYER[H.z] - ss.MYPLAYER[H.z]);

                if (distance < minValue) {
                    if (!RMB || !TARGETED || !TARGETED[H.playing]) {
                        TARGETED = PLAYER;
                    }
                    minValue = distance;
                }
            }
        }
    });

    if (RMB && TARGETED && TARGETED[H.playing]) {
        const directionVector = {
            [H.x]: TARGETED[H.x] - ss.MYPLAYER[H.x],
            [H.y]: TARGETED[H.y] - ss.MYPLAYER[H.y] - 0.05,
            [H.z]: TARGETED[H.z] - ss.MYPLAYER[H.z],
        };
        ss.MYPLAYER[H.yaw] = F.calculateYaw(directionVector);
        ss.MYPLAYER[H.pitch] = F.calculatePitch(directionVector);
    }

    for (let i = 0; i < ESPArray.length; i++) {
        if (ESPArray[i][2] && ESPArray[i][2].timecode == timecode) {} else {
            ESPArray[i][0].dispose();
            ESPArray[i][1].dispose();
            ESPArray.splice(i, 1);
        }
    }
});

createAnonFunction("setPrecision", function (value) {
    return Math.floor(value * 8192) / 8192;
});

createAnonFunction("calculateYaw", function (pos) {
    return F.setPrecision(Math.mod(Math.atan2(pos[H.x],pos[H.z]), Math.PI2));
});

createAnonFunction("calculatePitch", function (pos) {
    return F.setPrecision(-Math.atan2(pos[H.y],Math.hypot(pos[H.x],pos[H.z]))%1.5);
});



    let guiVisible = true;
    let espColor = { r: 255, g: 255, b: 255 };
    let espLineColor = { r: 255, g: 255, b: 255 };

    const findKeyWithProperty = function(obj, propertyToFind) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key === propertyToFind) {
                    return [key];
                } else if (
                    typeof obj[key] === 'object' &&
                    obj[key] !== null &&
                    obj[key].hasOwnProperty(propertyToFind)
                ) {
                    return key;
                }
            }
        }
        return null;
    };
    const guiHtml = `
<style>

#TigerTechGui {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: black;
    color: red;
    padding: 10px;
    border: 4px solid red;
    border-radius: 5px;
    z-index: 9999;
    font-family: 'Agency FB', sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 10px;

    }
 #TigerTechGui input[type="range"] {
   width: 100px;
   margin-bottom: 5px;
   }
   #toggleGuiButton {
   margin-top: 5px;
   padding: 5px;
   cursor: pointer;

    #TigerTechGui h3 {
        color: #ff0000;
        text-align: center;
        border-bottom: 1px solid #ff0000;
        padding-bottom: 10px;
        margin-bottom: 12px;
    }

details {
    margin-top: 10px;
    border: 1px solid #ff0000;
    border-radius: 5px;
    overflow: hidden;
}


    details summary {
        font-weight: bold;
        cursor: pointer;
        padding: 10px;
        color: #ff0000;
        border-radius: 5px;
        outline: none;
        list-style: none;
    }

    details summary::-webkit-details-marker {
        display: none;
    }

    details[open] summary {
        border-bottom: 1px solid #ff0000;
    }

    .setting-section {
        padding-left: 20px;
        padding-bottom: 10px;
    }

    label {
        color: #ff0000;
        display: block;
        margin: 5px 0;
    }

    input[type="checkbox"], input[type="range"], input[type="number"] {
        margin-top: 5px;
    }


    input[type="button"], button {
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        background-color: #4CAF50;
        color: red;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    a {
        color: #0066cc;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .links-section a {
        display: block;
        padding: 2px 0;
    }

.section-title {
    color: #ff0000;
    text-align: center;
    border-bottom: 1px solid #ff0000;
    padding-bottom: 10px;
    margin-bottom: 12px;
}

.details-content {
    padding-left: 20px;
}

.setting-label {
    color: #ff0000;
    display: block;
    margin: 5px 0;
}

.input-container {
    margin-top: 5px;
}

.button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

details {
    margin-top: 10px;
    border: 1px solid #ff0000;
    border-radius: 5px;
    overflow: hidden;
}


details > div {
    max-height: 0;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
}


details[open] > div {
    max-height: 1000px;
    opacity: 1;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}


details[open] > div {
    animation: fadeIn 0.3s ease;
}

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .pulse-animation {
        animation: pulse 1s infinite ease-in-out;
    }

        .draggable {
            cursor: move;
            user-select: none;
        }
</style>



</style>
<div id="TigerTechGui" style="font-family: 'Agency FB', sans-serif; font-style: italic; font-weight: bold; font-color: #ff0000; padding: 14px; border: 2px solid #ff0000; border-radius: 5px; background: #000; position: fixed; top: 20px; left: 20px; z-index: 9999;">
    <h3 style="color: #ff0000; text-align: center; border-bottom: 1px solid #ff0000; padding-bottom: 10px;">TigerTech Client V1 1.4.4</h3>
    <details id="ESPDetails">
        <summary style="font-weight: bold; font-color: #ff0000; cursor: pointer;">ESP Settings</summary>
        <div style="padding-left: 20px;">
            <div style="margin-bottom: 10px;">
            </div>
            <div>
                <input type="range" id="redSlider" min="0" max="255" value="255">
                <input type="number" id="redValue" min="0" max="255" value="255">
                <span style="color: red;">ESP RED</span>
            </div>
            <div>
                <input type="range" id="greenSlider" min="0" max="255" value="255">
                <input type="number" id="greenValue" min="0" max="255" value="255">
                <span style="color: red;">ESP GREEN</span>
            </div>
            <div>
                <input type="range" id="blueSlider" min="0" max="255" value="255">
                <input type="number" id="blueValue" min="0" max="255" value="255">
                <span style="color: red;">ESP BLUE</span>
            </div>
        </div>
    </details>
    <details id="tracersDetails">
        <summary style="font-weight: bold; font-color: #ff0000; cursor: pointer;">Tracers Settings</summary>
        <div style="padding-left: 20px;">
            <div style="margin-bottom: 10px;"></div>
            <div>
                <input type="range" id="espRedSlider" min="0" max="255" value="255">
                <input type="number" id="espRedValue" min="0" max="255" value="255">
                <span style="color: red;">TRACERS RED</span>
            </div>
            <div>
                <input type="range" id="espGreenSlider" min="0" max="255" value="255">
                <input type="number" id="espGreenValue" min="0" max="255" value="255">
                <span style="color: red;">TRACERS GREEN</span>
            </div>
            <div>
                <input type="range" id="espBlueSlider" min="0" max="255" value="255">
                <input type="number" id="espBlueValue" min="0" max="255" value="255">
                <span style="color: red;">TRACERS BLUE</span>
            </div>
        </div>
    </details>
    <details>
        <summary style="font-weight: bold; font-color: #ff0000; cursor: pointer;">Aimbot Settings</summary>
        <div style="padding-left: 20px;">
            <label for="aimbotSensitivity">Aimbot Sensitivity:</label>
            <input type="range" id="aimbotSensitivity" min="1" max="10" value="5">
            <span id="aimbotSensitivityValue">5</span><br>
            <input type="range" id="projectileSpeedSlider" min="0" max="100" step="1" value="50">
            <span id="projectileSpeedValue">50</span> m/s
        </div>
    </details>
    <details id="linksDetails">
        <summary style="font-weight: bold; font-color: #ff0000; cursor: pointer;">Links</summary>
        <div style="padding-left: 20px; padding-top: 5px;">
            <a href="https://greasyfork.org/en/users/1228152-%E0%A6%94%E0%A7%A3%C9%A8n%C4%91%C9%A8%E2%B1%A5%E0%A6%94%E0%A7%A3">Author's Page</a><br>
            <a href="https://greasyfork.org/en/scripts/492659">Homepage</a><br>
            <a href="https://discord.gg/qUJSdRJvVV">Discord</a><br>
            <a href="https://www.youtube.com/c/sharkbucks">SharkBucks</a><br>
            <a href="https://github.com/Indian81/India-Shell-Shockers-Mod--Aimbot-ESP-and-MOAR-">Github</a><br>
            <a href="https://www.youtube.com/@5514Modding">5514 Modding</a><br>
        </div>
    </details>
    <details open id="guideDetails">
        <summary style="font-weight: bold; font-color: #ff0000; cursor: pointer;">Guide</summary>
        <div style="padding-left: 20px; padding-top: 5px;">
            <p>C for Aimlocking<br>
            V for ESP/Hitbox<br>
            N for Tracers/ESP Lines<br>
            1 for Autowalk<br>
            2 for AutoJump<br>
            3 for AutoDodge<br>
            4 for AutoWhisk<br>
            5 for AutoReload<br>
            6 for AutoGrenade<br>
            Adjust the ESP and Tracer Color with the ESP and Tracers Settings Folder in the Menu<br>
            Make sure to share this script w/ others!<br>
            Credits to onlypuppy7, CrypticX, HydroFlame521, TD Stuart, SharkB, and DeathB</p><br>
            <button id="reloadPageButton" style="width: 100%; margin-top: 10px; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">Reload Page</button><br>
            <button id="duplicatePageButton" style="width: 100%; margin-top: 10px; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">Duplicate Page</button><br>
            <button id="loadRandomDomainButton" style="width: 100%; margin-top: 10px; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">Load Random Domain</button><br>
        </div>
    </details>
    <details>
        <summary>Gui Theming</summary>
        <div class="setting-section">
            <label for="themeSelect">Select Theme:</label>
            <select id="themeSelect">
                <option value="default">Default</option>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
                <option value="blue">Blue Theme</option>
                <option value="green">Green Theme</option>
                <option value="purple">Purple Theme</option>
            </select>
            <label for="fontSize">Font Size:</label>
            <input type="number" id="fontSize" min="10" max="50" value="16">
            <label for="fontSelect">Select Font:</label>
            <select id="fontSelect">
                <option value="Agency FB">Agency FB</option>
                <option value="Arial">Arial</option>
                <option value="Vijaya">Vijaya</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Boucherie Block">Boucherie Block</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Impact">Impact</option>
                <option value="Calibri">Calibri</option>
                <option value="Webdings">Webdings</option>
            </select>
            <div class="font-style-options">
                <input type="checkbox" id="italicCheckbox"><br>
                <label for="italicCheckbox">Italic</label><br>
                <input type="checkbox" id="boldCheckbox"><br>
                <label for="boldCheckbox">Bold</label><br>
            </div>
        </div>
    </details>
    <button id="toggleGuiButton" style="font-family: 'Agency FB', sans-serif; font-style: italic; font-weight: bold; font-color: #ff0000; width: 100%; margin-top: 10px; padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Toggle GUI [H]</button><br>
</div>

    `;

    document.body.insertAdjacentHTML('beforeend', guiHtml);

    document.addEventListener("DOMContentLoaded", function() {
    const fontSelect = document.getElementById("fontSelect");
    const guiText = document.getElementById("TigerTechGui");

    fontSelect.addEventListener("change", function() {
        guiText.style.fontFamily = fontSelect.value;
        Array.from(guiText.querySelectorAll('*')).forEach(el => {
            el.style.fontFamily = fontSelect.value;
        });
    });

    const italicCheckbox = document.getElementById("italicCheckbox");
    const boldCheckbox = document.getElementById("boldCheckbox");

    italicCheckbox.addEventListener("change", function() {
        guiText.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
        Array.from(guiText.querySelectorAll('*')).forEach(el => {
            el.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
        });
    });

    boldCheckbox.addEventListener("change", function() {
        guiText.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
        Array.from(guiText.querySelectorAll('*')).forEach(el => {
            el.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const guiElement = document.getElementById("TigerTechGui");
    const sliders = document.querySelectorAll("input[type='range']");

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    guiElement.addEventListener("mousedown", function(event) {
        if (!event.target.closest("input[type='range']")) {
            isDragging = true;
            offsetX = event.clientX - guiElement.getBoundingClientRect().left;
            offsetY = event.clientY - guiElement.getBoundingClientRect().top;
        }
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;
            guiElement.style.left = newX + "px";
            guiElement.style.top = newY + "px";
        }
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });
});

    function reloadPage() {
        location.reload();
    }


    document.getElementById('reloadPageButton').addEventListener('click', reloadPage);

    function duplicatePage() {
        var currentUrl = window.location.href;
        window.open(currentUrl, '_blank');
    }

    document.getElementById('duplicatePageButton').addEventListener('click', duplicatePage);

    var domains = [
        "https://algebra.best",
        "https://algebra.vip",
        "https://biologyclass.club",
        "https://deadlyegg.com",
        "https://deathegg.world",
        "https://egg.dance",
        "https://eggboy.club",
        "https://eggboy.me",
        "https://eggboy.xyz",
        "https://eggcombat.com",
        "https://eggcombat.com",
        "https://eggfacts.fun",
        "https://egghead.institute",
        "https://eggisthenewblack.com",
        "https://eggsarecool.com",
        "https://eggshooter.best",
        "https://geometry.best",
        "https://geometry.monster",
        "https://geometry.pw",
        "https://geometry.report",
        "https://hardboiled.life",
        "https://hardshell.life",
        "https://humanorganising.org",
        "https://mathactivity.club",
        "https://mathactivity.xyz",
        "https://mathdrills.info",
        "https://mathdrills.life",
        "https://mathfun.rocks",
        "https://mathgames.world",
        "https://math.international",
        "https://mathlete.fun",
        "https://mathlete.pro",
        "https://overeasy.club",
        "https://scrambled.tech",
        "https://risenegg.com",
        "https://scrambled.today",
        "https://scrambled.us",
        "https://scrambled.world",
        "https://shellsocks.com",
        "https://shellshockers.best",
        "https://shellshockers.club",
        "https://shellshockers.life",
        "https://shellshockers.site",
        "https://shellshockers.us",
        "https://shellshockers.world",
        "https://shellshockers.xyz",
        "https://softboiled.club",
        "https://urbanegger.com",
        "https://violentegg.club",
        "https://violentegg.fun",
        "https://yolk.best",
        "https://yolk.life",
        "https://yolk.quest",
        "https://yolk.rocks",
        "https://yolk.tech",
        "https://yolk.today",
        "https://zygote.cafe"

    ];

    function loadRandomDomain() {
        var currentDomain = window.location.origin;
        domains.sort(() => Math.random() - 0.5);
        var randomDomain = domains[0];
        if (randomDomain === currentDomain) {
            document.getElementById('loadRandomDomainButton').disabled = true;
        } else {
            window.open(randomDomain, '_blank');
        }
    }
    document.getElementById('loadRandomDomainButton').addEventListener('click', loadRandomDomain);

function updateTheme(theme) {
    const root = document.documentElement;
    const TigerTechGui = document.getElementById('TigerTechGui');

    if (theme === 'dark') {
        root.style.setProperty('--background-color', '#000');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--border-color', '#000');
    } else if (theme === 'light') {
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--border-color', '#000');
    } else if (theme === 'blue') {
        root.style.setProperty('--background-color', '#3498db');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--border-color', '#2980b9');
    } else if (theme === 'green') {
        root.style.setProperty('--background-color', '#2ecc71');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--border-color', '#27ae60');
    } else if (theme === 'purple') {
        root.style.setProperty('--background-color', '#9b59b6');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--border-color', '#8e44ad');
    } else {
        // Default theme
        root.style.setProperty('--background-color', '#000');
        root.style.setProperty('--text-color', '#ff0000');
        root.style.setProperty('--border-color', '#ff0000');
    }


    TigerTechGui.style.backgroundColor = getComputedStyle(root).getPropertyValue('--background-color');
    TigerTechGui.style.color = getComputedStyle(root).getPropertyValue('--text-color');
    TigerTechGui.style.borderColor = getComputedStyle(root).getPropertyValue('--border-color');
}

function handleThemeChange(event) {
    const theme = event.target.value;
    updateTheme(theme);
}

const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', handleThemeChange);

updateTheme(themeSelect.value);


document.getElementById('redSlider').addEventListener('input', function() {
    espColor.r = parseInt(this.value);
    document.getElementById('redValue').value = this.value;
    updateESPColor();
});

document.getElementById('greenSlider').addEventListener('input', function() {
    espColor.g = parseInt(this.value);
    document.getElementById('greenValue').value = this.value;
    updateESPColor();
});

document.getElementById('blueSlider').addEventListener('input', function() {
    espColor.b = parseInt(this.value);
    document.getElementById('blueValue').value = this.value;
    updateESPColor();
});

document.getElementById('espRedSlider').addEventListener('input', function() {
    espLineColor.r = parseInt(this.value);
    document.getElementById('espRedValue').value = this.value;
    updateESPLineColor();
});

document.getElementById('espGreenSlider').addEventListener('input', function() {
    espLineColor.g = parseInt(this.value);
    document.getElementById('espGreenValue').value = this.value;
    updateESPLineColor();
});

document.getElementById('espBlueSlider').addEventListener('input', function() {
    espLineColor.b = parseInt(this.value);
    document.getElementById('espBlueValue').value = this.value;
    updateESPLineColor();
});

document.getElementById('redValue').addEventListener('input', function() {
    espColor.r = parseInt(this.value);
    document.getElementById('redSlider').value = this.value;
    updateESPColor();
});

document.getElementById('greenValue').addEventListener('input', function() {
    espColor.g = parseInt(this.value);
    document.getElementById('greenSlider').value = this.value;
    updateESPColor();
});

document.getElementById('blueValue').addEventListener('input', function() {
    espColor.b = parseInt(this.value);
    document.getElementById('blueSlider').value = this.value;
    updateESPColor();
});

document.getElementById('espRedValue').addEventListener('input', function() {
    espLineColor.r = parseInt(this.value);
    document.getElementById('espRedSlider').value = this.value;
    updateESPLineColor();
});

document.getElementById('espGreenValue').addEventListener('input', function() {
    espLineColor.g = parseInt(this.value);
    document.getElementById('espGreenSlider').value = this.value;
    updateESPLineColor();
});

document.getElementById('espBlueValue').addEventListener('input', function() {
    espLineColor.b = parseInt(this.value);
    document.getElementById('espBlueSlider').value = this.value;
    updateESPLineColor();
});


document.getElementById('toggleGuiButton').addEventListener('click', function() {
    guiVisible = !guiVisible;
    document.getElementById('TigerTechGui').style.display = guiVisible ? 'block' : 'none';
});

// Add event listener to all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const confirmed = window.confirm('Are you sure you want to leave this page?');
        if (confirmed) {
            window.location.href = this.href;
        }
    });
});


//-------------Credits to GPT 3.5(Binds' Event Listeners)-------------//
document.addEventListener('keydown', function(event) {
    const elementType = event.target.tagName.toLowerCase();
    if (elementType === 'input' || elementType === 'textarea') {
        return;
    }


    if (event.key === 'h' || event.key === 'H') {
        guiVisible = !guiVisible;
        document.getElementById('TigerTechGui').style.display = guiVisible ? 'block' : 'none';
        displayWatermark('Toggled Panel');
    }

    if (event.key === 'v' || event.key === 'V') {
        enableESP = !enableESP;
        displayWatermark(`ESP ${enableESP ? "!Enabled!" : "!Disabled!"}`);
        console.log("ESP is now:", enableESP ? "enabled" : "disabled");
        espCheckbox.checked = enableESP;
    }

    if (event.key === 'n' || event.key === 'N') {
        enableTracers = !enableTracers;
        displayWatermark(`Tracers ${enableTracers ? "!Enabled!" : "!Disabled!"}`);
        console.log("ESP lines are now:", enableTracers ? "enabled" : "disabled");
        tracersCheckbox.checked = enableTracers;
    }

    if (event.key === 'c' || event.key === 'C') {
        RMB = !RMB;
        displayWatermark(` Aimbot ${RMB ? "Enabled" : "Disabled"}`);
        console.log(" (Aimbot) is now:", RMB ? "enabled" : "disabled");
        rmbCheckbox.checked = RMB;
    }




function displayWatermark(text) {
    const watermark = document.createElement('div');
    watermark.textContent = text;
    watermark.style.position = 'fixed';
    watermark.style.bottom = '10px';
    watermark.style.left = '10px';
    watermark.style.padding = '5px 10px';
    watermark.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    watermark.style.color = 'red';
    watermark.style.borderRadius = '1px';
    watermark.style.zIndex = '9999';
    watermark.style.fontFamily = 'Agency FB, sans-serif';
    watermark.style.fontSize = '18px';
    watermark.style.fontWeight = 'bold';
    watermark.style.textTransform = 'uppercase';
    watermark.style.border = '2px solid #ff0000';
    watermark.style.cursor = 'move';
    watermark.style.userSelect = 'none';
    watermark.draggable = true;
    watermark.style.opacity = '0';
    watermark.style.transform = 'scale(0.8) rotate(-5deg)';
    document.body.appendChild(watermark);

    const keyframes = document.createElement('style');
    keyframes.textContent = `
        @keyframes borderGlow {
            0% { box-shadow: 0 0 10px 3px red, inset 0 0 10px 3px red; }
            25% { box-shadow: 10px 0 10px 3px red, inset 10px 0 10px 3px red; }
            50% { box-shadow: 0 10px 10px 3px red, inset 0 10px 10px 3px red; }
            75% { box-shadow: -10px 0 10px 3px red, inset -10px 0 10px 3px red; }
            100% { box-shadow: 0 -10px 10px 3px red, inset 0 -10px 10px 3px red; }
        }
        .watermark {
            animation: borderGlow 2s linear infinite;
        }
    `;
    document.head.appendChild(keyframes);


    function isOverlap(element) {
        const rect1 = element.getBoundingClientRect();
        const existingWatermarks = document.querySelectorAll('.watermark');
        for (const existing of existingWatermarks) {
            const rect2 = existing.getBoundingClientRect();
            if (!(rect1.right < rect2.left ||
                  rect1.left > rect2.right ||
                  rect1.bottom < rect2.top ||
                  rect1.top > rect2.bottom)) {
                return true;
            }
        }
        return false;
    }

    function positionWatermark(element) {
        let x = 20;
        let y = 20;
        while (isOverlap(element)) {
            x += 10;
            y += 10;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        }
    }

    positionWatermark(watermark);
    function animateClick() {
        watermark.style.transition = 'transform 0.2s ease';
        watermark.style.transform = 'scale(1.1)';
        setTimeout(function() {
            watermark.style.transform = 'scale(1)';
        }, 200);
    }
      function pulsate() {
        watermark.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.7)';
        setTimeout(function() {
            watermark.style.boxShadow = 'none';
        }, 2000);
    }


    watermark.addEventListener('mouseenter', function() {
        pulsate();
        watermark.style.transition = 'transform 0.2s ease';
        watermark.style.transform = 'scale(1.1)';
    });

    watermark.addEventListener('mouseleave', function() {
        watermark.style.transition = 'transform 0.2s ease';
        watermark.style.transform = 'scale(1)';
    });

    watermark.addEventListener('click', function() {
        watermark.style.transition = 'transform 0.5s ease';
        watermark.style.transform = 'rotate(360deg)';
        setTimeout(function() {
            watermark.style.transform = 'rotate(0deg)';
        }, 500);
    });


    function updatePosition(x, y) {
        watermark.style.left = x + 'px';
        watermark.style.top = y + 'px';
    }

    watermark.addEventListener('dragstart', function(event) {
        const offsetX = event.clientX - watermark.getBoundingClientRect().left;
        const offsetY = event.clientY - watermark.getBoundingClientRect().top;
        event.dataTransfer.setDragImage(watermark, offsetX, offsetY);
    });

    watermark.addEventListener('drop', function(event) {
        const newX = event.clientX - watermark.offsetWidth / 2;
        const newY = event.clientY - watermark.offsetHeight / 2;
        updatePosition(newX, newY);
    });

    watermark.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    setTimeout(function() {
        watermark.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        watermark.style.opacity = '1';
        watermark.style.transform = 'scale(1) rotate(0deg)';
    }, 100);

    setTimeout(function() {
        watermark.style.boxShadow = '0 0 20px red';
    }, 2000);


    setTimeout(function() {
        watermark.style.transition = 'opacity 1s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 0.5s ease';
        watermark.style.opacity = '0';
        watermark.style.transform = 'scale(1.2) rotate(10deg)';
        watermark.style.boxShadow = '0 0 0 red';
        setTimeout(function() {
            watermark.remove();
        }, 1000);
    }, 4000);
}
});

  function updateESPLineColor() {
    for (let i = 0; i < ESPArray.length; i++) {
        const tracers = ESPArray[i][1];
        if (tracers) {
            tracers.color.r = espLineColor.r / 255;
            tracers.color.g = espLineColor.g / 255;
            tracers.color.b = espLineColor.b / 255;
        }
    }
}
    function updateESPColor() {
        for (let i = 0; i < ESPArray.length; i++) {
            const box = ESPArray[i][0];
            if (box) {
                box.color.r = espColor.r / 255;
                box.color.g = espColor.g / 255;
                box.color.b = espColor.b / 255;
            }
        }
    }
})();

'use strict';
(function(window, e) {
  if ("object" === typeof exports && "undefined" !== typeof module) {
    module.exports = e();
  } else {
    if ("function" === typeof define && define.amd) {
      define(e);
    } else {
      window.Stats = e();
    }
  }
})(this, function() {
  var init = function() {
    function addPanel(panel) {
      container.appendChild(panel.dom);
      return panel;
    }
    function showPanel(id) {
      var i = 0;
      for (; i < container.children.length; i++) {
        container.children[i].style.display = i === id ? "block" : "none";
      }
      p = id;
    }
    var p = 0;
    var container = document.createElement("div");
    container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    container.addEventListener("click", function(event) {
      event.preventDefault();
      showPanel(++p % container.children.length);
    }, false);
    var beginTime = (performance || Date).now();
    var prevTime = beginTime;
    var value = 0;
    var fpsPanel = addPanel(new init.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new init.Panel("PING", "#0f0", "#020"));
    if (self.performance && self.performance.memory) {
      var memPanel = addPanel(new init.Panel("MB", "#f08", "#201"));
    }
    showPanel(0);
    return {
      REVISION : 16,
      dom : container,
      addPanel : addPanel,
      showPanel : showPanel,
      begin : function() {
        beginTime = (performance || Date).now();
      },
      end : function() {
        value++;
        var time = (performance || Date).now();
        msPanel.update(time - beginTime, 200);
        if (time > prevTime + 1E3 && (fpsPanel.update(1E3 * value / (time - prevTime), 100), prevTime = time, value = 0, memPanel)) {
          var m = performance.memory;
          memPanel.update(m.usedJSHeapSize / 1048576, m.jsHeapSizeLimit / 1048576);
        }
        return time;
      },
      update : function() {
        beginTime = this.end();
      },
      domElement : container,
      setMode : showPanel
    };
  };
  init.Panel = function(label, container, position) {
    var t = Infinity;
    var val = 0;
    var round = Math.round;
    var r = round(window.devicePixelRatio || 1);
    var w = 80 * r;
    var h = 48 * r;
    var right = 3 * r;
    var padding = 2 * r;
    var x = 3 * r;
    var y = 15 * r;
    var width = 74 * r;
    var height = 30 * r;
    var elem = document.createElement("canvas");
    elem.width = w;
    elem.height = h;
    elem.style.cssText = "width:130px;height:68px";
    var context = elem.getContext("2d");
    context.font = "bold " + 11 * r + "px Helvetica,Arial,sans-serif";
    context.textBaseline = "top";
    context.fillStyle = position;
    context.fillRect(0, 0, w, h);
    context.fillStyle = container;
    context.fillText(label, right, padding);
    context.fillRect(x, y, width, height);
    context.fillStyle = position;
    context.globalAlpha = .9;
    context.fillRect(x, y, width, height);
    return {
      dom : elem,
      update : function(i, radius) {
        t = Math.min(t, i);
        val = Math.max(val, i);
        context.fillStyle = position;
        context.globalAlpha = 1;
        context.fillRect(0, 0, w, y);
        context.fillStyle = container;
        context.fillText(round(i) + " " + label + " (" + round(t) + "-" + round(val) + ")", right, padding);
        context.drawImage(elem, x + r, y, width - r, height, x, y, width - r, height);
        context.fillRect(x + width - r, y, r, height);
        context.fillStyle = position;
        context.globalAlpha = .9;
        context.fillRect(x + width - r, y, r, round((1 - i / radius) * height));
      }
    };
  };
  return init;
});

(function() {
  'use strict';

  const stats = new Stats();
  const statsParentNode = document.body;

  statsParentNode.appendChild(stats.dom);


  requestAnimationFrame(function loop() {
    stats.update();
    requestAnimationFrame(loop);
  });
})();
