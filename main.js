window.onload = init;

function init() {
    document.querySelector('#fight').addEventListener(`click`, attackRound);
}

function attackRound(event) {
    event.preventDefault();
    
    if (monster.isAlive === false) {
        player.expUp(monster);
        monster.respawn(player);
        updateLevel();
    } else {
        if (player.isAlive === true) {
            player.fight(monster)
        }
    }
    
    updateHtml();
}

function updateHtml() {
    updateDamage();
    updateHealthBars();
    updateResult();
}   

function updateDamage() {
    let monsterDamageAction = getAction(monster.lastDamageTaken)
    let playerDamageAction = getAction(player.lastDamageTaken);

    const monsterDamageText = `You ${monsterDamageAction} the monster for ${monster.lastDamageTaken} damage.`

    const playerDamageText = `The monster ${playerDamageAction} you for ${player.lastDamageTaken} damage.`;
    
    document.querySelector('#player-damage-taken').innerText = playerDamageText;
    document.querySelector('#monster-damage-taken').innerText = monsterDamageText;
}

function getAction(damage) {
    if (damage < 2) {
        return 'barely scratched';
    } else if (damage < 4) {
       return 'hit';
    } else {
       return 'clobbered';
    }
}

function updateHealthBars() {
    const playerHealth = document.querySelector('#player-health');
    playerHealth.innerText = `${player.hitPoints}`
    playerHealth.style.width = `${player.hitPoints * 2}px`;
    
    const monsterHealth = document.querySelector('#monster-health');
    monsterHealth.innerText = `${monster.hitPoints}`
    monsterHealth.style.width = `${monster.hitPoints * 2}px`;
}

function updateResult() {
    let result = '';
    if (player.isAlive === false) {
        result = 'You died. Game over.';
    } else if (monster.isAlive === false) {
        result = `You slayed the monster, leveled up, and got a slight heal. But here comes another...`; 
    }
    
    document.querySelector('#results').innerText = result;
}

function updateLevel() {
    document.querySelector('#level-number').innerText = player.level;
    document.querySelector('#exp-number').innerText = player.expNeeded - player.experience;

    document.querySelector('#monster-level').innerText = monster.level;


}

