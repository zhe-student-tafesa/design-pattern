// Observer Interface
interface Observer {
  update(message: string): void;
}

// Specific     observers
class Reader implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`Notification to ${this.name}: ${message}`);
  }
}

// Observable Interface
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Specific Observed Entity (Publisher)
class NewsletterPublisher implements Subject {
  private readers: Observer[] = [];
  private latestNewsletter = "";

  registerObserver(observer: Observer): void {
    this.readers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.readers = this.readers.filter((r) => r !== observer);
  }

  publish(newsletter: string): void {
    this.latestNewsletter = newsletter;
    this.notifyObservers();
  }

  notifyObservers(): void {
    for (const reader of this.readers) {
      reader.update(this.latestNewsletter);
    }
  }
}

// Test
const publisher = new NewsletterPublisher();

const alice = new Reader("Alice");
const bob = new Reader("Bob");
const charlie = new Reader("Charlie");

publisher.registerObserver(alice);
publisher.registerObserver(bob);

publisher.publish("New edition of the newsletter is out!");

publisher.registerObserver(charlie);
publisher.removeObserver(alice);

publisher.publish("Another edition of the newsletter is here!");
