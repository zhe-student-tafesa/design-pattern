// Factory Method Pattern: Defines an interface for creating objects, allowing subclasses to decide which class to instantiate. The Factory Method pattern defers instantiation of a class to its subclasses.！！
// Define product interface
interface Car {
  startEngine(): boolean;
  turnOffEngine(): void;
}

// Specific Product A
class ModelA implements Car {
  startEngine(): boolean {
    console.log("ModelA startEngine");
    return true;
  }

  turnOffEngine(): void {
    console.log("ModelA turnOffEngine");
  }
}

// Specific Product B
class ModelB implements Car {
  startEngine(): boolean {
    console.log("ModelB startEngine");
    return true;
  }

  turnOffEngine(): void {
    console.log("ModelB turnOffEngine");
  }
}

// Factory Interface
interface CarFactory {
  makeCar(): Car | null;
}

// Specific Factory A
class ModelAFactory implements CarFactory {
  makeCar(): Car | null {
    const modelA = new ModelA();
    if (modelA.startEngine()) {
      modelA.turnOffEngine();
      return modelA;
    } else {
      return null;
    }
  }
}

// Specific Factory B
class ModelBFactory implements CarFactory {
  makeCar(): Car | null {
    const modelB = new ModelB();
    if (modelB.startEngine()) {
      modelB.turnOffEngine();
      return modelB;
    } else {
      return null;
    }
  }
}

// Client class
class TuringStorage {
  carStorage: (Car | null)[] = new Array(10);

  importCars(): void {
    const factoryA = new ModelAFactory();
    const factoryB = new ModelBFactory();

    for (let i = 0; i < 5; i++) {
      this.carStorage[i] = factoryA.makeCar();
    }

    for (let i = 5; i < 10; i++) {
      this.carStorage[i] = factoryB.makeCar();
    }
  }
}

// Program entry point
const storage = new TuringStorage();
storage.importCars();
