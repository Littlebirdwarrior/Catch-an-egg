//12 minutes tuto
$(function () {
    let the_game = function (){
        egg_down(egg1)
        let anim_id = requestAnimationFrame(the_game);
    };

    anim_id = requestAnimationFrame(the_game);
});