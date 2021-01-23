diplay_input_box_array = []; 
function submit() {
    var display_input_box_array=[];
    for (var j=1,j<=7,j++){
    display_input_box_array.push(document.getElementById("parral_input_box_"+j).value); 
}
document.getElementById("parra").innerHTML=display_input_box_array.join(".");}
    