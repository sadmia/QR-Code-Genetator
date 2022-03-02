"use strict";

let images = document.getElementById('imagesSelect');
let input = document.getElementById('inputSelect');
let btn = document.getElementById('btnSelect');


btn.addEventListener("click", ()=> {
	let url = `https://api.qrserver.com/v1/create-qr-code/?size=100%x240px&data=${input.value}`
	images.src = url;
})