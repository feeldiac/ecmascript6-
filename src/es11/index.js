//Dynamic import
const btn = document.getElementById('btn');

btn.addEventListener('click', async function(){
    const module = await import("./file.js");
    module.hello();
});

