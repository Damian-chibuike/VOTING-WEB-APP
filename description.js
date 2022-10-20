//function to display the description - vote counts for Edward and Elon on the homePage
function description() {
  for (const key in simplemaps_usmap_mapdata.state_specific) {
    simplemaps_usmap_mapdata.state_specific[key].description = `Edward: ${simplemaps_usmap_mapdata.state_specific[key].votes.edward}, Elon: ${simplemaps_usmap_mapdata.state_specific[key].votes.elon}`;
    console.log(simplemaps_usmap_mapdata.state_specific[key]);
  }
}

