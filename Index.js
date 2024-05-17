class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Create an instance of the class Movie with the title “Casino Royale”, 
// the studio “Eon Productions”, and the rating “PG­13”
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);

// Sample usage of getPG method
const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);




//************************************Implementation of the Person Class****************************************************
class Person {
    constructor(name, age, address, phoneNumber) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    toString() {
        return `Person [name=${this.name}, age=${this.age}, address=${this.address}, phoneNumber=${this.phoneNumber}]`;
    }
}

// Example usage:
const person = new Person("John Doe", 30, "123 Main St", "123-456-7890");
console.log(person.toString());



//*****************************************Implementation of the Uber Class******************************************************

class Uber {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        return this.baseFare + (this.costPerMile * distance) + (this.costPerMinute * time);
    }
}

// Example usage:
const uber = new Uber(2.50, 1.75, 0.50); // Base fare: $2.50, Cost per mile: $1.75, Cost per minute: $0.50
const distance = 10; // 10 miles
const time = 15; // 15 minutes
const price = uber.calculatePrice(distance, time);
console.log(`The Uber price for ${distance} miles and ${time} minutes is $${price.toFixed(2)}`);

