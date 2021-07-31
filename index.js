fetch("https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "339c8461dbmshdf04f82021ff450p10fcefjsned65af1af8a4",
		"x-rapidapi-host": "shazam.p.rapidapi.com"
	}
})
.then(async (response) => {
    const res = await response.json();
    const track = res?.tracks?.hits[0]?.track?.url;
    return track;
})
.catch(err => {
	console.error(err);
});