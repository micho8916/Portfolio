import ProjectData from '@/data/ProjectData.ts'

export default [
    // 새로운 프로젝트 데이터를 생성합니다. 
    // 순서: ("아이디", "제목", "아이콘경로", "상세내용(HTML)", "테마색상", "모바일여부")
    new ProjectData(
        "sugarbee-applepang", // 프로젝트 고유 ID (영문)
        "슈가비의 사과팡(Sugarbee's ApplePang)", // 사이트에 표시될 큰 제목
        "img/projects/Sugarbee'sApplePang_Title.png",
        `
        <div class="paragraph">
            <strong>슈가비의 사과팡</strong>은 동화풍의 따뜻한 그래픽이 특징인 3-매치 캐주얼 퍼즐 게임입니다.
            <br/>현재 유니티(Unity)를 통해 활발히 제작 중입니다.
        </div>

        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/영상아이디" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="paragraph">
            <strong>주요 특징 :</strong>
            <ul>
                <li>따뜻한 동화책 느낌의 UI 디자인</li>
                <li>남녀노소 즐길 수 있는 직관적인 퍼즐 시스템</li>
                <li>유니티 TextMeshPro를 활용한 고해상도 텍스트 구현</li>
            </ul>
        </div>

        <div class="paragraph">
            <div class="notice">
                현재 제작 진행 중이며, 곧 깃허브를 통해 소스코드를 공개할 예정입니다.
            </div>
        </div>

        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/apple-pang-1.png" alt="사과팡 스크린샷 1" />
            <img class="pc-screenshot" src="img/projects/apple-pang-2.png" alt="사과팡 스크린샷 2" />
        </div>
        `, 
        "#D2B48C",
        true // PC 기반 게임이면 false, 모바일이면 true
    ),

    // 두 번째 프로젝트 (가챠 시뮬레이터 예시)
    new ProjectData(
        "myowngacha", 
        "마이온가챠(My Own Gacha)", 
        "img/projects/gacha-icon.png", 
        `
        <div class="paragraph">
            <strong>마이온가챠</strong>는 유저가 직접 만든 콘텐츠를 가챠 형태로 패키징하여 URL 하나로 공유하는 웹 기반 커스텀 굿즈 시뮬레이터입니다.
        </div>
        <div class="paragraph">
            <div class="notice">
                현재 구상단계중입니다.
            </div>
        </div>
        `, 
        "#D2B48C"
    )
];
