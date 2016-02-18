function doMove(obj, json, fx, d) {
	clearInterval(obj.iTimer);
	var iStartTime = +new Date();
	var b = {};
	var c = {};
	var d = d || 1000;
	var fx = fx || 'linear';
	
	for (var attr in json) {
		if ( attr == 'opacity' ) {
			b[attr] = Math.round ( css( obj, 'opacity' ) * 100 );
		} else {
			b[attr] = parseInt( css( obj, attr ) );
		}
		c[attr] = json[attr] - b[attr];
	}
	
	obj.iTimer = setInterval(function() {
		
		var t = +new Date() - iStartTime;
		
		if ( t >= d ) {
			clearInterval(obj.iTimer);
			t = d;
		}
		
		for (var attr in json) {
			
			var v = Tween[fx](t, b[attr], c[attr], d);
			if ( attr == 'opacity' ) {
				obj.style.opacity = v / 100;
				obj.style.filter = 'alpha(opacity='+v+')';
			} else {
				obj.style[attr] = v + 'px';
			}
			
		}
		
	}, 15);
}

function css(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}