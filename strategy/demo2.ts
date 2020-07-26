
// 上下文定义了客户端感兴趣的接口
class Context {
    /**
     * 这个上下文维护了一个指向某个策略类的引用。
     * 上下文并不清楚策略类的具体实现。
     * 它可以通过Strategy接口执行所有的策略类。
     */
    private strategy: Strategy;
    /**
     * 上下文通常通过构造器接收一个策略类，同时提供一个
     * 能在运行时更改策略类的setter函数。
     */
    constructor(strategy: Strategy){
        this.strategy = strategy;
    }
    // 上下文通常允许z在运行时替换策略类对象
    public setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }
    /**
     * 上下文并没有在自身类中去实现多种算法，而是将一些工作委托给策略类。
     */
    public doSomeBusinessLogic(): void {
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd']);
        console.log(result.join(','));
    }
}
/**
 * 策略接口声明某些算法的所有受支持版本共有的操作。
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 * 上下文使用这个接口去调用具体实现类定义的算法
 */
interface Strategy {
    doAlgorithm(data: string[]): string[];
}
/**
 * 具体策略在遵循基本策略接口的同时实现算法。 
 * 该接口使它们在上下文中可以互换。
 */
class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[]{
        return data.reverse();
    }
}

/**
 * 客户代码选择一种具体的策略，并将其传递给上下文。 
 * 客户应了解策略之间的差异，以便做出正确的选择。
 */
const context = new Context(new ConcreteStrategyA());
context.doSomeBusinessLogic();