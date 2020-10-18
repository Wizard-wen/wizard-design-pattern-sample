/**
 * 饿汉模式
 * 类加载时就初始化
 */
export class Singleton {
  private static instance = new Singleton()

  static getInstance(): Singleton {
    return Singleton.instance;
  }
}

/**
 * 懒汉模式
 * 需要时才创建实例对象
 */
export class Singleton1 {
  private static instance: Singleton1;

  private constructor() {
  }

  static getInstance(): Singleton1 {
    if (!Singleton1.instance) {
      Singleton1.instance = new Singleton1();
    }
    return Singleton1.instance
  }
}
