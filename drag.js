function drag(id) {
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(e) {
        disX = e.pageX - obj.offsetLeft;
        disY = e.pageX - obj.offsetTop;
        document.onmousemove=function(e){
        	obj.style.left=e.clientX-disX+'px';
        	obj.style.Top=e.clientY-disY+'px';
        }
    }
}