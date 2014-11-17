Polymer("song-marker", {
  ready: function(){
    this.startValue = this.value;
  },
  detached: function(){
    this.fire("markerDetached");
  },
  attached: function(){
    this.fire("markerAttached");
    this.visualTime = this.secToDisp(this.time);
  },
  removeMe: function(){

    this.remove();

    this.fire("markerDetached");
  },
  secToDisp: function(sec){
    return sec;
  },
  edit: function(){
    console.log("edit ->")
  }
});

