type vectorSetType = [number] | [number, number] | [number, number, number]
class Vector3 {
    private x:number = 0.0;
    private y:number = 0.0;
    private z:number = 0.0;
    static _vectors: Vector3[];
    constructor(x:number, y:number, z:number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    setX(x:number) {
        this.x = x;
    }

    valueOf() {
        return Vector3._vectors.push(this);
    }

    toString() {
        return JSON.stringify({ x: this.x, y: this.y });
    }

    static _setter(value:number) {
        const vectors = Vector3._vectors;

        if (vectors.length === 1) {
            const first = vectors[0];

            this.x = first.x * value;
            this.y = first.y * value;
        } else if (vectors.length === 2) {
            var first = vectors[0];
            var second = vectors[1];

            switch (value) {
                case 3:
                    this.x = first.x + second.x;
                    this.y = first.y + second.y;
                    break;
                case -1:
                    this.x = first.x - second.x;
                    this.y = first.y - second.y;
                    break;
            }
        }

        vectors.length = 0;
    }
}

const main = () => {
    const vector:Vector3 = new Vector3(1, 2, 3);
    console.log(vector.valueOf());
    console.log(vector.toString())
}
main();
// export default Vec3;