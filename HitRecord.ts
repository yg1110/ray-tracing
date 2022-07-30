// 광선이 교차하면, 교차된 지점의 정보를 보관하는 객체
import Vec3, {dot, neg} from "./Vector";
import Ray from "./Ray";

class HitRecord {
    public p:Vec3 = new Vec3(0.0, 0.0, 0.0); //교차점 위치
    public normal:Vec3 = new Vec3(0.0, 0.0, 0.0); //교차점의 노말벡터
    public t:number = 0.0 //교차점 까지 거리, 혹은 시간
    public front_face:boolean = false; //안쪽면이 보이게 할건지, 바깥면이 보이게 할건지 결정함
    constructor() {

    }

    set_face_normal(r:Ray, outward_normal: Vec3):void {
        this.front_face = dot(r.getDirection(), outward_normal) < 0.0;
        if (this.front_face) {
            this.normal = outward_normal;
        }
        else {
            this.normal = neg(outward_normal);
        }
    }
}

export default HitRecord;