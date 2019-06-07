/* TODO: Import api.js! */
/* Friend extensions */

function PopConfirm (title, text, callbackOk, okText, cancelText) {
	
	// Need this
	if( !callbackOk ) return;
	
	if (!title) {
		title = 'Please confirm';
	}
	if (!text) {
		text = 'Are you sure?';
	}
	if (!okText) okText = 'Ok';
	if (!cancelText) cancelText = 'Cancel';
	
	// Gui
	var d = document.createElement( 'div' );
	d.className = 'ConfirmDialog Hidden';
	d.innerHTML = '<div class="Title">' + title + '</div><div class="Text">' + text + '</div>';
	
	// Buttons
	var b = document.createElement( 'div' );
	b.className = 'Buttons';
	var o = document.createElement( 'button' );
	o.innerHTML = okText;
	o.onclick = function (e) {
		d.classList.add( 'Hidden' );
		d.classList.remove( 'Open' );
		setTimeout( function() {
			document.body.removeChild( d );
			callbackOk(e);
		}, 250 );
	}
	var c = document.createElement( 'button' );
	c.innerHTML = cancelText;
	c.onclick = function (e) {
		d.classList.add( 'Hidden' );
		d.classList.remove( 'Open' );
		setTimeout( function() {
			document.body.removeChild( d );
		}, 250 );
	}
	b.appendChild( o );
	b.appendChild( c );
	d.appendChild( b );
	
	// Add it
	document.body.appendChild( d );
	
	setTimeout( function() { 
		d.classList.add( 'Opening' );
		d.classList.remove( 'Hidden' );
		setTimeout( function() {
			d.classList.add( 'Open' );
			d.classList.remove( 'Opening' );
		}, 250 );
	}, 50 );
}

