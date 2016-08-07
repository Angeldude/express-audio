var instr = {};
instr.vol = new Tone.Gain(0.8).toMaster();
instr.crush = new Tone.BitCrusher(3).connect(instr.vol);
instr.sound = new Tone.MonoSynth().connect(instr.crush);

nx.onload = function(){
  knob.on('*', function(){
    instr.vol.gain.value = this.val.value;
  })
  signal.on('*', function(){
    instr.sound.triggerAttackRelease("C5", "1n");
  })
}
