var pic_list = document.getElementById('portfolio').getElementsByTagName('a');
var pic_background = document.getElementById('body');

for(var i=0; i< pic_list.length; i++){
    pic_list[i].onclick = function(event){
        event.preventDefault();
        var pic_href = this.getAttribute('href');
        console.log(pic_href);
        pic_background.style.backgroundImage= 'url('+pic_href+')';
//        pic_background.setAttribute('background-image', pic_href);
    }
}