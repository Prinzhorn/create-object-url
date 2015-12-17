var createObjectURL;

if(self.URL) {
	createObjectURL = URL.createObjectURL;
} else if(self.webkitURL) {
	createObjectURL = webkitURL.createObjectURL;
} else {
	createObjectURL = function() {
		return '';
	};
}

module.exports = createObjectURL;