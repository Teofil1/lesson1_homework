enum Color {
    red = "red",
    green = "green",
    blue = "blue",
    yellow = "yellow",
    orange = "orange",
}

interface Fruit {
    name: string;
    color: Color;

    grows: () => void; 
}

class Orange implements Fruit {
    name: string;
    color: Color;

    constructor() {
        this.name = "orange";
        this.color = Color.green;
    }

    grows(): void {
        this.color = Color.orange;
    }
}

class FruitTree<T extends Fruit> {

    private fruits: Array<T> = [];
    private type: treeType;

    constructor(type: treeType) {
        this.type = type;
    }

    public fructify(fruit: T): void {
        fruit.grows();
        this.fruits.push(fruit);
    }

    public getFruits(): Array<T> {
        return this.fruits;
    }
}

type treeType = "exotic" | "normal";

const orangeTree = new FruitTree("exotic");
const orange = new Orange();

orangeTree.fructify(orange);
orangeTree.getFruits();

