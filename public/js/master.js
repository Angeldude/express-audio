var instr = {};

// EFFECTS SETUP
instr.vol = new Tone.Gain(0.5).toMaster();
instr.reverb = new Tone.JCReverb(0.4);
instr.delay = new Tone.FeedbackDelay(0.5).connect(instr.vol);

//  INSTRUMENT SETUP
instr.rand = function(){ return (Math.floor(Math.random() * 7))};
instr.sound = new Tone.PolySynth(6, Tone.Synth).chain(instr.reverb, instr.delay);
instr.synth = new Tone.Synth().toMaster();

// MUSIC LOGIC
var pattern = new Tone.Pattern(function(time, note){
  instr.synth.triggerAttackRelease(note, "8n");
}, ["C4", "Eb4", "G4", "Ab4"], "alternateUp");

instr.test = ["D5", "C5", "Ab4", "C4", "F5", "Eb5", "G4"];
instr.delay.wet.value = 0.4;
instr.reverb.wet.value = 0.5;

Tone.Transport.bpm.value = 240;
pattern.start(0);

// UI STYLING
nx.onload = function(){
  nx.colorize("lightblue");
  slide.val.value = 0.5;
  slide.draw();
  banner1.colors.accent = "#6d1480";
  banner1.draw();
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
