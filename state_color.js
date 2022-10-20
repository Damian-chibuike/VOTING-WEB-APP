//function that changes the state's color based on which candidate has the highest vote
function stateColor() {
    for (const key in simplemaps_usmap_mapdata.state_specific) {
        if (simplemaps_usmap_mapdata.state_specific[key].votes.edward > simplemaps_usmap_mapdata.state_specific[key].votes.elon) {
            simplemaps_usmap_mapdata.state_specific[key].color = "black";
        }
        else if (simplemaps_usmap_mapdata.state_specific[key].votes.elon > simplemaps_usmap_mapdata.state_specific[key].votes.edward) {
            simplemaps_usmap_mapdata.state_specific[key].color = "brown";
        }
        else {
            simplemaps_usmap_mapdata.state_specific[key].color = "grey";
        }
    }
}
