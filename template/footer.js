
	// Insert Scripts
	var value, url, scriptEl, appendEl = document.head;
	for ( i=0,n=includes.length; i<n; ++i ) {
		// Prepare
		value = includes[i];
		url = window.GENTICS_Aloha_base + value;

		// Append
		scriptEl = document.createElement('script');
		scriptEl.src = url;
		scriptEl.setAttribute('defer','defer');
		appendEl.appendChild(scriptEl);
	}

// </closure>
})(window);
