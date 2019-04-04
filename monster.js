const monster = {
    maxHitPoints : 30,
    hitPoints: 30,
    expGiven: 30,
    level : 1,
    maxLevel: 1,
    isAlive: true,
    lastDamageTaken : 0,
    currentAttackDamage: 5,
    baseAttackDamage: 5,

    calculateRawDamage(){
        let rawDamage = Math.ceil(Math.random()*this.currentAttackDamage);
        return rawDamage + 2;
    },

    takeDamage(rawDamage) {
        this.lastDamageTaken = Math.max(1, rawDamage);
        this.hitPoints -= rawDamage;

        if (this.hitPoints <= 0){
            this.isAlive = false;
        }
    },

    respawn(player){
        let prob = Math.random();
        if (player.level > this.maxLevel){
            this.levelUp();
        }
        this.randomLevel();
        this.hitPoints = this.maxHitPoints;
        this.isAlive = true;
        lastDamageTaken = 0;
    },

    calculateExpGiven(){
        this.expGiven = this.level * 30;
        return this.expGiven
    },

    levelUp() {
        this.maxLevel ++;
    },
    
    randomLevel() {
        this.level = Math.ceil(Math.random()*this.maxLevel);
        this.maxHitPoints = 30 + 10*(this.level-1);
        this.currentAttackDamage = Math.floor(this.baseAttackDamage * Math.pow(1.2, this.level-1));
    }
};