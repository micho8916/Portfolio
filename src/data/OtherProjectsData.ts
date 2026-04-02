import ProjectData from '@/data/ProjectData.ts'

export default [
    // 프로젝트 1: 유니티 유틸리티 (계산기)
    new ProjectData(
        "unity-calculator", 
        "유니티 심플 계산기", 
        "img/projects/calc-icon.png", 
        `
        <div class="paragraph">
            <strong>유니티 심플 계산기</strong>는 유니티 엔진의 UI 시스템(UGUI)과 C# 로직을 익히기 위해 제작한 유틸리티 프로젝트입니다.
        </div>
        <div class="paragraph">
            <strong>주요 기능 :</strong>
            <ul>
                <li>사칙연산 로직 구현</li>
                <li>TextMeshPro를 활용한 깔끔한 숫자 출력</li>
                <li>버튼 클릭 이벤트 시스템 이해</li>
            </ul>
        </div>
        <div class="paragraph">
            <div class="notice">
                C#의 기초를 다지며 완성한 결과물입니다.
            </div>
        </div>
        `, 
        "#D2B48C"
    ),
];
