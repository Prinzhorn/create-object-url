module.exports = self.URL.createObjectURL || self.webkitURL.createObjectURL || function() {
	return '';
};