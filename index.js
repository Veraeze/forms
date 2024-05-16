const blue = document.getElementById('header1');
let uni_image = document.createElement('img');
    uni_image.src = 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB14SIpB?w=300&h=250&q=60&m=6&f=jpg&u=t'
    uni_image.alt = 'school';
    uni_image.style = "width: 100%; height: 100%;"


blue.addEventListener("mouseover", function () {
    blue.appendChild(uni_image);
})
blue.addEventListener("mouseout", function() {
    blue.removeChild(uni_image);
})