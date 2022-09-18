const testimonials = [
    {
        name: "Cherise G",
        photoUrl : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "I couldn't have asked for more than this. Apple is worth much more than I paid. Apple did exactly what you said it does. I will let my mum know about this, she could really make use of Apple!",
    },
    {
        name: "Rosette Q",
        photoUrl : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text : "I don't know what else to say. I love your system. Apple was worth a fortune to my company. Thank you for making it painless, pleasant and most of all hassle free!",
    },
    {
        name : "Jordana Q",
        photoUrl :"https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text : "Since I invested in Apple I made over 100,000 dollars profits. I would be lost without Apple. This is simply unbelievable!",
    },
];

imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let idx = 0;

function updateTestimonial(){
    const{name,photoUrl,text}=testimonials[idx]
    imgEli.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name;
    idx++
    if(idx === testimonial.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial();
    }, 10000)
}