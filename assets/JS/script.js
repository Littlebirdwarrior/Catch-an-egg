//12 minutes tuto
$(function () {
    let the_game = function (){
        //******egg1
        //since the egg1 dont hit the floor or the basket, he is falling down
        if (check_egg_hits_floor(egg1) || check_egg_hits_basket(egg1))
        {
            set_egg_to_initial_position(egg1);
        } else {
        //falling egg infinitly
        egg_down(egg1);
        }

        //Same for egg2 and egg3 (don't have the same speed)
        //******egg2
        if (check_egg_hits_floor(egg2) || check_egg_hits_basket(egg2))
        {
            set_egg_to_initial_position(egg2);
        } else {
            //falling egg infinitly
            egg_down(egg2);
        }
        //******egg3
        if (check_egg_hits_floor(egg3) || check_egg_hits_basket(egg3))
        {
            set_egg_to_initial_position(egg3);
        } else {
            //falling egg infinitly
            egg_down(egg3);
        }

        //******launch and stop **********/
        //launch the script of the game (only if life greater than 0)
        if(life > 0){
        let anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);
});