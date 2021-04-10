const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
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
    player: 2,
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [
        'sword',
        'knife ',
    ],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
};

function createElement(tag, className)
{
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObject) {
    const $divPlayer = createElement('div', 'player' + playerObject.player);
    const $divProgressbar = createElement('div', 'progressbar');
    const $divLife = createElement('div', 'life');
    const $divName = createElement('div', 'name');
    const $divCharacter = createElement('div', 'character');
    const $tagImg = createElement('img');

    $tagImg.src = playerObject.img;
    $divLife.style.width = `${playerObject.hp}%`;
    $divName.innerText = playerObject.name;

    $divProgressbar.appendChild($divLife);
    $divProgressbar.appendChild($divName);
    $divCharacter.appendChild($tagImg);
    $divPlayer.appendChild($divProgressbar);
    $divPlayer.appendChild($divCharacter);
    return $divPlayer;
}

function changeHP(player, opponent){
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp <= 0 ) {
        player.hp = 0;
        $arenas.appendChild(playerWins(opponent.name));
        $randomButton.disabled = true;
    }
    $playerLife.style.width = `${player.hp}%`;
}

function playerLose (name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

function playerWins (name) {
    const $winsTitle = createElement('div', 'winsTitle');
    $winsTitle.innerText = name + ' wins';

    return $winsTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(player1, player2);
    changeHP(player2, player1);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

// player1.attack();
// player2.attack();