const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({
		bye: 'thereeeee',
		another: 'what up',
		oneMore: 'heyyy',
		andAnother: 'should work'
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
