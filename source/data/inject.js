//document.getElementById('pagelet_ego_pane_w').innerHTML='blocked';
function ReplaceContentInContainer(matchClass,content)
    {
    var elems = document.getElementsByTagName('*'),i;
    for (i in elems)
        {
        if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ") > -1)
            {
            elems[i].innerHTML = content;
            }
        }
    }
window.onload=function(){
    doit();
//    alert("doing it");
};

var myVar=setInterval(function(){doit()},10000);


function doit(){
//    alert("doing it");
    ReplaceContentInContainer("ego_section", "We have removed all the annoying people you may know and advertice of facebook as much as we can.\nIf you still face a problem then <a href='http://sadaf2605.appspot.com/blog/Frefox%20Irritating%20fb%20ad%20hider%20Add-on'>let us know.</a>");
//    alert(""+con+doingcount);
    
}

function myStopFunction()
{
//alert("end doing it");
clearInterval(myVar);
}