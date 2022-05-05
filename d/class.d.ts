declare class Dog {
    private name;
    constructor(name: string);
    readonly legs: number;
    protected color: string;
    static run(): void;
    voice(): void;
}
declare let myDog: Dog;
declare class Husky extends Dog {
    constructor(name: string);
    color: string;
    tail: string;
    getColor(): void;
}
declare abstract class Animal {
    constructor(name: string);
    name: string;
    abstract legs: number;
    abstract getVoice(): void;
    getColor(voice: string): void;
}
declare class Cat extends Animal {
    name: string;
    constructor(name: string);
    legs: number;
    getVoice(): void;
    getEmotion(): void;
}
declare let tom: Animal;
declare class Dahuang extends Animal {
    legs: number;
    getVoice(): void;
}
declare let dahuang: Dahuang;
declare let animals: Animal[];
declare class WorkFlow {
    step1(): this;
    step2(): this;
    step3(): void;
}
declare class Myflow extends WorkFlow {
    next(): this;
}
interface animals {
    legs: number;
    getVoice?(): void;
}
declare class Ani implements animals {
    legs: number;
    getVoice(): void;
}
interface bio extends animals {
    type?: string;
    getTypes(): string;
}
declare class Bio implements bio {
    getTypes(): string;
    legs: number;
}
declare class Sea {
    size: string;
    private color;
}
interface sea extends Sea {
}
declare class allSea extends Sea implements sea {
    size: string;
}
