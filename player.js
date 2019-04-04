const player = { 
    hitPoints : 100,
    experience : 0,
    expNeeded : 100,
    level : 1,
    isAlive : true,
    lastDamageTaken : 0,
    baseAttackDamage : 5,

    fight(enemy) {
        let rawDamage = enemy.calculateRawDamage();
        let damage = Math.floor(Math.max(1,rawDamage - (1.2*this.level)));
        this.lastDamageTaken = damage;
        this.hitPoints -= damage;

        enemy.takeDamage(this.calculateRawDamage());

        if (this.hitPoints <= 0){
            this.isAlive = false;
        }
        
    },

    calculateRawDamage() {
        let rawDamage = Math.ceil(Math.random() * this.baseAttackDamage);
        return rawDamage;
    },

    expUp(enemy) {
        let expGained = enemy.calculateExpGiven(player);
        this.experience += expGained;
        if (this.experience >= this.expNeeded){
            this.experience -= this.expNeeded;
            this.levelUp();
        } else {
            this.hitPoints = Math.min(100, this.hitPoints + Math.floor(.5* monster.maxHitPoints));
        }
    },

    levelUp() {
        this.level ++;
        this.hitPoints = 100;
        this.expNeeded = this.expNeeded + 50*(this.level-1);
        this.baseAttackDamge = Math.floor(this.baseAttackDamage * 1.5);
    }

}