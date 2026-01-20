((a, b) => {
    var sizes = [a.screen.width, a.screen.height]
    var ratio = sizes[0]/sizes[1]
    b.log("screen size: "+sizes[0].toLocaleString()+":"+sizes[1].toLocaleString()+" ratio of "+ratio.toLocaleString())
})(window, console)