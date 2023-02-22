//12 minutes tuto
$(function () {
    let the_game = function (){
        if (check_egg_hits_floor(egg1)){
            set_egg_to_initial_position(egg1);
        }
        //falling egg infinitly
        egg_down(egg1)
        //launch the script of the game
        let anim_id = requestAnimationFrame(the_game);
    };

    anim_id = requestAnimationFrame(the_game);
});