var boob = {};
boob.volume = new Tone.Gain(0.5).toMaster();
boob.sound = new Tone.FMSynth().connect(boob.volume);

nx.onload = function(){
  love.on('*', function(){
    boob.volume.gain.value = this.val;
  })
  signal.on('*', function(){
    boob.sound.triggerAttackRelease("C5", "4n");
  })
}
