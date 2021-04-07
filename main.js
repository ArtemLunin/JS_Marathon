const player1 = {
    name: 'Scorpion',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'shotgun',
        'saw',
        'launcher',
    ],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
};

const player2 = {
    name: 'Liukang',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [
        'sword',
        'knife ',
    ],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
};

const $arenas = document.querySelector('.arenas');


function createPlayer(playerClass, playerObject) {
    const $divPlayer = document.createElement('div');
    const $divProgressbar = document.createElement('div');
    const $divLife = document.createElement('div');
    const $divName = document.createElement('div');
    const $divCharacter = document.createElement('div');
    const $tagImg = document.createElement('img');

    $tagImg.src = playerObject.img;
    $divLife.style.width = `${playerObject.hp}%`;
    $divName.innerText = playerObject.name;

    $divPlayer.classList.add(playerClass);
    $divProgressbar.classList.add('progressbar');
    $divLife.classList.add('life');
    $divName.classList.add('name');
    $divCharacter.classList.add('character');

    $divProgressbar.appendChild($divLife);
    $divProgressbar.appendChild($divName);
    $divCharacter.appendChild($tagImg);
    $divPlayer.appendChild($divProgressbar);
    $divPlayer.appendChild($divCharacter);
    return $divPlayer;
}

$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));

player1.attack();
player2.attack();