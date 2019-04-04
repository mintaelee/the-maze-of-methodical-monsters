const boss = {
    maxHitPoints : 50,
    hitPoints: 50,
    expGiven: 50,
    level : 1,
    maxLevel: 1,
    isAlive: true,
    lastDamageTaken : 0,
    baseAttackDamage: 10,

    calculateRawDamage(){
        let rawDamage = Math.ceil(Math.random()*this.baseAttackDamage);
        return rawDamage + 1;
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
        this.baseAttackDamage = Math.floor(this.baseAttackDamage * Math.pow(1.2, this.level-1))
    }
};