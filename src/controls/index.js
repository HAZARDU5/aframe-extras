module.exports = {
  'gamepad-controls':   require('./gamepad-controls'),
  'hmd-controls':       require('./hmd-controls'),
  'keyboard-controls':  require('./keyboard-controls'),
  'mouse-controls':     require('./mouse-controls'),
  'touch-controls':     require('./touch-controls'),
  'universal-controls': require('./universal-controls'),
  registerAll: function (AFRAME) {
    if (this._registered) return;

    AFRAME = AFRAME || window.AFRAME;
    AFRAME = AFRAME.aframeCore || AFRAME;

    if (this.extras) this.extras.math.registerAll();
    if (!AFRAME.components['gamepad-controls'])   AFRAME.registerComponent('gamepad-controls',    this['gamepad-controls']);
    if (!AFRAME.components['hmd-controls'])       AFRAME.registerComponent('hmd-controls',        this['hmd-controls']);
    if (!AFRAME.components['keyboard-controls'])  AFRAME.registerComponent('keyboard-controls',   this['keyboard-controls']);
    if (!AFRAME.components['mouse-controls'])     AFRAME.registerComponent('mouse-controls',      this['mouse-controls']);
    if (!AFRAME.components['touch-controls'])     AFRAME.registerComponent('touch-controls',      this['touch-controls']);
    if (!AFRAME.components['universal-controls']) AFRAME.registerComponent('universal-controls',  this['universal-controls']);

    this._registered = true;
  }
};
