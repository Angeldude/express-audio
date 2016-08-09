var instr = {};
instr.rand = function(){ return (Math.floor(Math.random() * 35) + 40)};
instr.vol = new Tone.Gain(0.0).toMaster();
instr.sound = new Tone.FMSynth().connect(instr.vol);

nx.onload = function(){
  nx.colorize("lightblue");
  slide.val.value = 0;
  slide.draw();
  slide.on('*', function(){
    instr.vol.gain.value = this.val.value;
  })
  signal.on('*', function(){
    instr.sound.triggerAttackRelease(nx.mtof(instr.rand()), "8n");
  })
}
