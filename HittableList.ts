import Hitable from "./Hittable";
import Sphere from "./Sphere";
import Ray from "./Ray";
import HitRecord from "./HitRecord";

// 광선이 교차할 수 있는 세계 입니다. Hittable을 상속받아 구현하는 컨크리트 클래스 입니다.
class HitableList extends Hitable {
    private hitableList: Sphere[] = [];
    clear () {
        this.hitableList = []
    }

    add (hitable:Sphere) {
        this.hitableList.push(hitable)
    }

    getHitableList():Sphere[] {
        return this.hitableList
    }

    hit(r: Ray, t_min: number, t_max: number, rec: HitRecord): boolean {
        const hitableList = this.hitableList;
        // for(let i=0; i<hitableList.length; i++) {
        //     return hitableList[i].hit(r, t_min, t_max, rec);
        // }
        for(let i=0; i<hitableList.length; i++) {
            const hitalbe = hitableList[i];

        }
        // let outward_normal = (rec.point.sub(rec.t)).div(rec.t);
        // rec.set_face_normal(r, outward_normal);
        // return true;
    }
}

export default HitableList;