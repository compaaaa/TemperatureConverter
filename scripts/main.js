document.addEventListener("DOMContentLoaded", ()=>{
    //ADD OUR DEFERRED CODE HERE

    //FIND ALL INPUTS
    const inputlist = document.getElementsByTagName("input")
    //IF THERE ARE ANY
    if(inputlist.length > 0){
        // SET FOCUS TO THE FIRST ONE
        inputlist[0].focus()
    }
    
});