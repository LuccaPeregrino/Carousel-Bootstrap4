function get_urls(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://picsum.photos/v2/list');
    const urls = [];

    xhr.onreadystatechange = () => {

        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                const aux = JSON.parse(xhr.responseText);
                //first image
                var div = document.createElement("div");
                    div.className = "carousel-item active";
                    div.id = "div 0";
                    document.getElementById("carousel-inner").appendChild(div);
                    
                    var imagem = document.createElement("img");
                    imagem.className = "img-fluid d-block";
                    imagem.alt = "Responsive image";
                    imagem.id = 0;
                    document.getElementById(div.id).appendChild(imagem);   
                    document.getElementById(imagem.id).setAttribute("src", aux[0].download_url);
                    
                //oder image
                for (let i = 1; i < 30; i++) {
                    var div = document.createElement("div");
                    div.className = "carousel-item";
                    div.id = "div" + i;
                    document.getElementById("carousel-inner").appendChild(div);

                    var imagem = document.createElement("img");
                    imagem.className = "img-fluid d-block";
                    imagem.alt = "Responsive image";
                    imagem.id = i;
                    document.getElementById(div.id).appendChild(imagem);   
                    document.getElementById(imagem.id).setAttribute("src", aux[i].download_url);
                }
            }
        }
    };
    xhr.send();
}
get_urls();
