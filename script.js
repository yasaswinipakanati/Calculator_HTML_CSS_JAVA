let ip = document.getElementById('inputfield')
//console.log(ip)
let allbuttons = document.querySelectorAll("button");
let numoparray = Array.from(allbuttons);
let s = ""
numoparray.forEach(element => {
element.onclick = function(){

    if(element.innerHTML  == 'C')
    {
        s="";
        ip.value = s
    }
    else if(element.innerHTML  == 'D')
    {
        s = s.slice(0, -1);
        ip.value = s
    }
    else if(element.innerHTML  == 'sqrt')
    {
        let x = parseInt(s);
        ip.value = Math.sqrt(x);
    }
    else if(element.innerHTML  == '=')
    {
        s = eval(s);
        ip.value = s;
    }
    else
    {
        s+= element.innerHTML;
        ip.value = s; 
    }
};
});
