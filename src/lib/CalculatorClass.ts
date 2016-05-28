export class CalculatorClass {
    constructor(public number1: number, public number2: number) {

    }

    public async addNumbers(): Promise<number> {
        return this.number1 + this.number2;
    }

    public addNumbersSync(): number {
        return this.number1 + this.number2;
    }
}
