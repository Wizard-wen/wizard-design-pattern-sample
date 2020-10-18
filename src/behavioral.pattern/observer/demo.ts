export interface Subject {
  attach(observer: Observer): void;

  detach(observer: Observer): void;

  notify(): void;
}

class ConcreteSubject implements Subject {
  public state: number;

  private observers: Observer[] = [];

  public attach(observe: Observer): void {
    const isExist = this.observers.includes(observe);
    if (isExist) {
      console.log('Subject: observer has been attached already');
    }
    console.log('Subject: Attached an observer.');
    this.observers.push(observe);
  }

  public detach(observer: Observer) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log('Subject: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notify() {
    console.log('Subject: Notifying observers...');
    for (let index = 0; index < this.observers.length; index += 1) {
      this.observers[index].update(this);
    }
  }

  public someBusinessLogic(): void {
    this.state = Math.floor(Math.random() * (10 + 1));
    this.notify();
  }
}

export interface Observer {
  update(subject: Subject): void;
}
