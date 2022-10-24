const advertisingBox = `<div class="adverticing box border">
<h3>Have some CSS and HTML tricks? 🔮</h3>
<p>
  Feel free to contact me back at
  <a href="https://www.freshorangedesign.com/" target="_blank">https://www.freshorangedesign.com/</a>
</p>
</div><div class="float-bottom">🐈</div>`;
console.log(advertisingBox);

const adverticingDiv = document.querySelector("#adverticing");
adverticingDiv.innerHTML = advertisingBox;
