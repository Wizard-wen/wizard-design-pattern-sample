var performanceS = function(){};
performanceS.prototype.calculate = function(salary){
    return salary * 4;
}

var performanceA = function(){}
performanceA.prototype.calculate = function(salary){
    return salary * 3;
}

var performanceB = function(){}
performanceB.prototype.calculate = function(salary){
    return salary * 2;
}

var Bonus = function(){
    this.salary = null; // 原始工资
    this.strategy = null; // 绩效等级对应的策略对象
}

Bonus.prototype.setSalary = function(salary){
    this.salary = salary;
}

Bonus.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
}

Bonus.prototype.getBonus = function(){
    if (!this.strategy) {
        return this.strategy.calculate(this.salary);
    }
}