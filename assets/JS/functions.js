//move the basket with movemove
$(document).on('mousemove', function (event) {
    basket.css('left', event.pageX);
});

//move the basket with keydown (ne marche pas pour l'instant)
$(document).keydown(function(event){
    let basket = $('#basket'); // select the basket
    let position = basket.position();//get basket position
    switch(event.which){
        case 37: //left
            basket.css('left'.position.left -10);
            break;
        case 38: //top
            basket.css('top'.position.left -10);
            break;
        case 39: //right
            basket.css('left'.position.left +10);
            break;
        case 40: //bottom
            basket.css('top'.position.left +10);
            break;

        default:
            return;//get out of the function when an over keydown happen
    }
    event.preventDefault(); // Stop the page scoll if an over keydown happen
});


//falling egg infinitely
function egg_down(egg){
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + 2)
}

//stop egg on the floor and return in initial position
function check_egg_hits_floor(egg) {
    if(collision(egg, floor)){
        return true;
    }
    return false;
}

function set_egg_to_initial_position(egg){
    egg.css('top', egg_initial_position);
}
