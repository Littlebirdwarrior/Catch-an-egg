//12 minutes tuto
$(function () {
    let the_game = function (){
        if (check_egg_hits_floor(egg1) || check_egg_hits_basket(egg1))
        {
            set_egg_to_initial_position(egg1);
        }
        //falling egg infinitly
        egg_down(egg1)
        //launch the script of the game (only if life greater than 0)
        if(life > 0){
        let anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);
});