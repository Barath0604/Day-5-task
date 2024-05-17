//**************************TYPE SCRIPT************************
class Circle {
    private radius: number;
    private color: string;

    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string);
    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public toString(): string {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    public getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const circle1 = new Circle();
console.log(circle1.toString()); // Circle [radius=1, color=red]

const circle2 = new Circle(2.5);
console.log(circle2.toString()); // Circle [radius=2.5, color=red]

const circle3 = new Circle(3.5, "blue");
console.log(circle3.toString()); // Circle [radius=3.5, color=blue]

console.log(circle3.getArea()); // Area of circle3
console.log(circle3.getCircumference()); // Circumference of circle3

circle3.setRadius(4.5);
circle3.setColor("green");
console.log(circle3.toString()); // Circle [radius=4.5, color=green]
