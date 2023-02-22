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
        show_bulls_eye(egg);
        decrement_life();
        return true;
    }
    return false;
}

function set_egg_to_initial_position(egg){
    egg.css('top', egg_initial_position);
}

//show bull eye, related to the data attribute un html,
//with a concatemation of string, we target the good attribute
function show_bulls_eye(egg){
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num)

}

//hide the bullseye 800 ms after it's appeared
function hide_bulls_eye(bullseye_num){
    setTimeout(function () {
    $('#bullseye' + bullseye_num).hide();
    }, 800);
}

//decrement life when eggs hit the floor
function decrement_life(){
    life--;
    life_span.text(life);
}

//manage when the eggs hit the basket
function check_egg_hits_basket(egg){
    if(collision(egg, basket)) { //when eggs hit basket, it return to it's inital position
        //condition, if the basket start is not hitten by the egg top, it is a loss
        egg_top = parseInt(egg.css('top'));
        if(egg_top < basket_top) {
        update_score();
        return true;
        }
    }
    return false
}

//update score when the egg hit the basket
function update_score(){
    score++;
    score_span.text(score);
    score_1.text(score);
}

//End the game



