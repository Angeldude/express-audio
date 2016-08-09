var instr = {};
instr.mtof = function(midi){ return (440 * (Math.pow(2,(midi - 69)/12)))};
instr.rand = function(){ return (Math.floor(Math.random() * 35) + 40)};
instr.vol = new Tone.Gain(0.0).toMaster();
instr.sound = new Tone.FMSynth().connect(instr.vol);

nx.onload = function(){
  nx.colorize("lightblue");
  knob.on('*', function(){
    instr.vol.gain.value = this.val.value;
  })
  signal.on('*', function(){
    instr.sound.triggerAttackRelease(instr.mtof(instr.rand()), "8n");
  })
}
