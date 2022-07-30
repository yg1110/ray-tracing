//각도를 입력받아 라디안으로 변환하는 함수
export const INFINITY: number = Number.MAX_SAFE_INTEGER;
export const PI:number = 3.1415926535897932385;
export const degree_to_radians = (degree:number) => {
    return degree * PI / 180.0
}