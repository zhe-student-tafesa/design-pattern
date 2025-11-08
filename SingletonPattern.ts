class Worker {
  constructor(private name: string) {}

  serveCustomer(): void {
    console.log(`${this.name} is serving customer`);
  }
}
// private constructor(): The `new CustomerServiceCenter()` method cannot be used outside the class.
// Instances can only be created inside the class.

// private static instance: CustomerServiceCenter | null = null;: It stores a unique instance. Static properties mean that all objects share the same copy.

// Public static access method: static getInstance(): CustomerServiceCenter { ... } 
//      ::Provides a single entry point for instance access. If the instance does not exist, it will be created; otherwise, it will be returned directly.

class CustomerServiceCenter {
  private static instance: CustomerServiceCenter | null = null;
  private holiday = false;
  private holidayWorkers: Worker[];
  private nonHolidayWorkers: Worker[];

  private constructor() {
    this.holidayWorkers = [
      new Worker("holiday worker 1"),
      new Worker("holiday worker 2"),
      new Worker("holiday worker 3"),
    ];
    this.nonHolidayWorkers = [
      new Worker("non-holiday worker 1"),
      new Worker("non-holiday worker 2"),
      new Worker("non-holiday worker 3"),
    ];
  }

  static getInstance(): CustomerServiceCenter {
    if (this.instance === null) {
      this.instance = new CustomerServiceCenter();
    }
    return this.instance;
  }

  setHoliday(value: boolean): void {
    this.holiday = value;
  }

  serveCustomer(): void {
    const workers = this.holiday ? this.holidayWorkers : this.nonHolidayWorkers;
    for (const worker of workers) {
      worker.serveCustomer();
    }
  }
}

// Test
const service1 = CustomerServiceCenter.getInstance();
const service2 = CustomerServiceCenter.getInstance();

service1.serveCustomer(); // Non-holidays
service2.setHoliday(true);
service1.serveCustomer(); // Holiday worker services
