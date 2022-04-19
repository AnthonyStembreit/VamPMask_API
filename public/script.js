
$("#end-points").click(e =>{
    e.preventDefault();
    navigator.clipboard.writeText(e.target.value);
})