import Ray from "./Ray";
import HitRecord from "./HitRecord";

//광선이 교차할 수 있는 모든 오브젝트가 상속받는 abstract 입니다.
abstract class Hitable {
    constructor() {}
    // hit 함수는 광선이 교차하면 true, 아니라면 false를 내밷습니다. 교차 시 입력된 rec 인수에 교차 정보를 담습니다.
    // t_min 은 광선의 출발점이 적어도 t_min보다 커야 한다는 것입니다. 즉 작으면 교차하지 않았다 고 판단합니다.
    // t_max 는 광선이 t_max거리 이상이면 교차하지 않았다고 판단합니다.
    // 알고리즘은 가장 간단한 완전탐색으로 하세요. 나중에 최적화 합니다.
    abstract hit(r: Ray, t_min: number, t_max: number, rec: HitRecord): boolean
}

export default Hitable;