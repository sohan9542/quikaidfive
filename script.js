// go to step 2
document.querySelector(".step_1_yes").addEventListener("click", ()=>{
    document.querySelector(".step_1_control").classList.add("hide_this")
    document.querySelector(".step_2_control").classList.remove("hide_this")
})
// back to step 1
document.querySelector(".back_step_1").addEventListener("click", ()=>{
    document.querySelector(".step_2_control").classList.add("hide_this")
    document.querySelector(".step_1_control").classList.remove("hide_this")
})

// go to step 3
document.querySelector(".step_2_yes").addEventListener("click", ()=>{
    document.querySelector(".step_2_control").classList.add("hide_this")
    document.querySelector(".step_3_control").classList.remove("hide_this")
})
// back to step 2
document.querySelector(".back_step_2").addEventListener("click", ()=>{
    document.querySelector(".step_3_control").classList.add("hide_this")
    document.querySelector(".step_2_control").classList.remove("hide_this")
})

// go to step 4
document.querySelector(".step_3_yes").addEventListener("click", ()=>{
    document.querySelector(".step_3_control").classList.add("hide_this")
    document.querySelector(".step_4_control").classList.remove("hide_this")
})
// back to step 3
document.querySelector(".back_step_3").addEventListener("click", ()=>{
    document.querySelector(".step_4_control").classList.add("hide_this")
    document.querySelector(".step_3_control").classList.remove("hide_this")
})
// go to step 5
document.querySelector(".step_4_yes").addEventListener("click", ()=>{
    document.querySelector(".step_4_control").classList.add("hide_this")
    document.querySelector(".step_5_control").classList.remove("hide_this")
})
// back to step 4
document.querySelector(".back_step_4").addEventListener("click", ()=>{
    document.querySelector(".step_5_control").classList.add("hide_this")
    document.querySelector(".step_4_control").classList.remove("hide_this")
})
// go to step 6
document.querySelector(".step_5_yes").addEventListener("click", ()=>{
    document.querySelector(".step_5_control").classList.add("hide_this")
    document.querySelector(".step_6_control").classList.remove("hide_this")
})

// back to step 5
document.querySelector(".back_step_5").addEventListener("click", ()=>{
    document.querySelector(".step_6_control").classList.add("hide_this")
    document.querySelector(".step_5_control").classList.remove("hide_this")
})
// go to step 7
document.querySelector("#next1").addEventListener("submit", (event)=>{
    event.preventDefault();
    document.querySelector(".step_6_control").classList.add("hide_this")
    document.querySelector(".step_7_control").classList.remove("hide_this")
})

// back to step 5
document.querySelector(".back_step_6").addEventListener("click", ()=>{
    document.querySelector(".step_7_control").classList.add("hide_this")
    document.querySelector(".step_6_control").classList.remove("hide_this")
})

// go to step 8
document.querySelector("#next2").addEventListener("submit", (event)=>{
    event.preventDefault();
    document.querySelector(".step_7_control").classList.add("hide_this")
    document.querySelector(".step_8_control").classList.remove("hide_this")
})

// go to step 7
document.querySelector(".close1").addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".step_8_control").classList.add("hide_this")
    document.querySelector(".step_1_control").classList.remove("hide_this")
})
