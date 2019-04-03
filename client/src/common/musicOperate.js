let operateFunctions = {
  play(event) {
    var audio = document.getElementById("play");
    //未播放
    if (!this.toggle) {
      var state = !this.toggle;
      this.$store.commit("changeTog", state);
      audio.play();
    } else {
      var state = !this.toggle;
      this.$store.commit("changeTog", state);
      audio.pause();
    }
  },
  nextSong() {
    if (this.$store.state.songPlayList) {
      this.$store.commit("nextSong", 1);
      var audio = document.getElementById("play");
      audio.addEventListener(
        "canplaythrough",
        function() {
          audio.play();
        },
        false
      );
      if (!this.toggle) {
        var state = !this.toggle;
        this.$store.commit("changeTog", state);
      }
    }
  },
  prevSong() {
    this.$store.commit("prevSong", 1);
    var audio = document.getElementById("play");
    audio.addEventListener(
      "canplaythrough",
      function() {
        audio.play();
      },
      false
    );
    if (!this.toggle) {
      var state = !this.toggle;
      this.$store.commit("changeTog", state);
    }
  }
};
module.exports = operateFunctions;
