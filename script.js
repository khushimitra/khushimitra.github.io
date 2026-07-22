// const submit = document.querySelector(".submit-btn"); 
// submit.addEventListener( "click", ()=>{ alert( "Feedback Submitted Successfully!" ); } );





// let selected = 0;

// const ratingButtons =
// document.querySelectorAll(
// ".rating button"
// );

// ratingButtons.forEach(
// (btn,index)=>{

// btn.addEventListener(
// "click",
// ()=>{

// ratingButtons.forEach(
// b=>b.classList.remove(
// "active"
// )
// );

// btn.classList.add(
// "active"
// );

// selected=index+1;

// }
// );

// }
// );

// const submit =
// document.querySelector(
// ".submit-btn"
// );

// submit.addEventListener(
// "click",
// ()=>{

// const popup=
// document.createElement(
// "div"
// );

// popup.className=
// "popup";

// popup.innerHTML=
// `✨ Feedback Submitted Successfully`;

// document.body.appendChild(
// popup
// );

// setTimeout(
// ()=>popup.classList.add(
// "show"
// ),
// 100
// );

// setTimeout(
// ()=>{

// popup.classList.remove(
// "show"
// );

// setTimeout(
// ()=>popup.remove(),
// 500
// );

// },
// 2500
// );

// });










let rating=0;
const buttons=
document.querySelectorAll(
".rating button"
);
buttons.forEach(
(btn,index)=>{
btn.addEventListener(
"click",
()=>{
buttons.forEach(
b=>b.classList.remove(
"active"
)
);
btn.classList.add(
"active"
);
rating=index+1;
navigator.vibrate?.(50);
}
);
}
);
document
.querySelector(
".submit-btn"
)
.addEventListener(
"click",
()=>{
if(rating===0){
alert(
"Please select rating ⭐"
);
return;
}
const toast=
document.createElement(
"div"
);
toast.className=
"toast";
toast.innerHTML=
"🚀 Feedback Submitted";
document.body.appendChild(
toast
);
setTimeout(
()=>toast.classList.add(
"show"
),
100
);
setTimeout(
()=>{
toast.remove();
},
3500
);
}
);

