Polymer("marker-list", {

  recalcDistanse: function(){
    console.log("recalcDistanse ->");
  },
  ready: function(){
    window.addEventListener('markerDetached', this.recalculateDistanse);
    window.addEventListener('markerAttached', this.recalculateDistanse);
    console.log("Height client = " + this.clientHeight );
    console.log("Height inner  = " + this.innerHeight  );
    console.log("Height offset = " + this.offsetHeight );


  },
  recalculateDistanse: function(){


    var totalDistanceTop = 0;

    var barMarginTop = 0;

    var aMarker = this.querySelectorAll('song-marker');
    console.log("aMarker")
    console.log(aMarker);

    var totalDistanceTop = 0;
    var barMarginTop = 0;
    var timeBarHeight = 300; //vertical distance of time bar
    for (var i=0; i<aMarker.length; i++){
      var songTime = 190; // total song time;


      var markerHeight = aMarker[i].clientHeight;
      var markerMargin = aMarker[i].mTop;
      var markerTime = aMarker[i].time;

      var freeDistanceToTop = timeBarHeight * markerTime / songTime

      var marginTop = freeDistanceToTop - totalDistanceTop + barMarginTop
      totalDistanceTop = freeDistanceToTop + markerHeight + barMarginTop;

      aMarker[i].mTop = marginTop;
      console.log( "markerHeight = " + markerHeight + ", markerTIme = " + markerTime);
//      aMarker[i].mTop = aMarker[i].time - sumTime;
//      sumTime = aMarker[i].time
    }

/*
    while(child){
      var songTime = 190; // the length of the song
      var markerTime = child.time;


      var myRowHeight = child.clientHeight;

      var freeDistanceToTop = timeBarHeight * markerTime / songTime;

      var marginTop = freeDistanceToTop - totalDistanceTop + barMarginTop;
      totalDistanceTop = freeDistanceToTop + myRowHeight + barMarginTop;

      child.mTop =  marginTop;
      child = child.nextSibling;

    }

    var sumTime = 0;

    for (var i=0; i<aMarker.length; i++){
      aMarker[i].mTop = aMarker[i].time - sumTime;
      sumTime = aMarker[i].time
    }
*/
  },
  addMarker: function(name, time){
    console.log("addMarker -> name = " + name + ", time = " + time);

  },
  printHeight: function(){
    console.log("Height client = " + this.clientHeight );
    console.log("Height inner  = " + this.innerHeight  );
    console.log("Height offset = " + this.offsetHeight );
  }

});