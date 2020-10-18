
interface Component {
    operation(): string;
}

export class ConcentreteComponent implements Component {
    public operation(): string {
        return '';
    }
}

export class Decorator implements Component {
    protected component: Component;
    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

export class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `A(${super.operation()})`
    }
}

export class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `B(${super.operation()})`
    }
}

const simple = new ConcentreteComponent();
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log(1);
console.log(decorator2.operation());
