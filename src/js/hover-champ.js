// Criar array pra vincular a lista e modificar onde tem que mostrar
const champIds = ['ravik', 'alskaire', 'panda', 'calvo', 'toguro', 'selina', 'naomi', 'cybervara',
                        'robot', 'claus', 'ellaria', 'beatrix'];

function changeImg(imgChanger) {
    document.getElementById('champImg').src = imgChanger;
}

// Iterando ID's e buscando nos assets a imagem do champ
champIds.forEach(champId => {
    const fotoChamp = document.getElementById(champId);

    if (fotoChamp) {
        fotoChamp.addEventListener('mouseover', function() {
            // Chama a função changeImg quando o mouse passar sobre a imagem
            changeImg(`./src/assets/cards/card__${champId}.svg`);
        });
    }
});

