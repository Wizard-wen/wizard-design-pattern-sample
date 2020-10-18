/**
 *
 */

export abstract class AbstractComponent {
  protected parent: Component;

  public setParent(parent: Component) {
    this.parent = parent;
  }

  public getParent(): Component {
    return this.parent;
  }

  public add(component: Component): void {

  }

  public remove(component: Component): void {

  }

  public isComponent(): boolean {
    return false;
  }

  public abstract operation(): string;
}
