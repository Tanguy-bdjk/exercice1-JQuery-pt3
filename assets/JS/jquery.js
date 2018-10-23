// $(function() {
//   $('#counter').data('count', 0);
// $('#update').click(function(){
//     $('#counter').html(function(){
//          $this = $(this),
//             count = $this.data('count') + 1;
//         $this.data('count', count);
//         return count;
//     });
// });
// });

//La méthode .data () nous permet d’attacher des données de tout type aux éléments
//DOM de manière à éviter les références circulaires et donc les fuites de mémoire.
// .val

$(function(){
$("button").click(function() {
    var count = $('#count').val();
    count++;
    $("#count").val(count);
    if (count == 20){
      alert("Wahouuuuu tu a cliquer 20 fois");
    }
});
});
