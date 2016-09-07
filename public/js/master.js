var instr = {};
instr.rand = function(){ return (Math.floor(Math.random() * 6))};
instr.vol = new Tone.Gain(0.5).toMaster();
instr.reverb = new Tone.JCReverb(0.4);
instr.delay = new Tone.FeedbackDelay(0.5).connect(instr.vol);
instr.sound = new Tone.PolySynth().chain(instr.reverb, instr.delay);

instr.synth = new Tone.Synth();
instr.synth.toMaster();
var pattern = new Tone.Pattern(function(time, note){
  instr.synth.triggerAttackRelease(note, 0.15);
}, ["C4", "Eb4", "G4", "Ab4"]);

instr.test = ["D5", "C5","Ab4","F5", "Eb5", "G4"];

Tone.Transport.bpm.value = 340;
pattern.start(0);


nx.onload = function(){
  nx.colorize("lightblue");
  slide.val.value = 0.5;
  slide.draw();
  // banner1.colors.accent = "#6d3480";
  // banner1.draw();
  switched.colors.border = "white";
  switched.draw();

  slide.on('*', function(){
    instr.vol.gain.value = this.val.value;
  })
  signal.on('*', function(){
    instr.sound.triggerAttackRelease(instr.test[instr.rand()], "1n");
  })
  switched.on('*', function(){
    if(switched.val.value === 1){
      Tone.Transport.start();
    } else
      Tone.Transport.stop();
  })

}
