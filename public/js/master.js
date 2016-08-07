var boob = {};
boob.vol = new Tone.Gain(0.8).toMaster();
boob.crush = new Tone.BitCrusher(3).connect(boob.vol);
boob.sound = new Tone.MonoSynth().connect(boob.crush);

nx.onload = function(){
  love.on('*', function(){
    boob.vol.gain.value = this.val.value;
  })
  signal.on('*', function(){
    boob.sound.triggerAttackRelease("C5", "1n");
  })
}
