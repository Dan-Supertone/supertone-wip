let teamKo = [
  `<em class="name" onclick="teamDetailLoad('kayle')">이교구</em>의 닉네임은 <em>Kayle</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('kayle')">이교구</em>는 <em>수퍼톤 호의 선장이자 Co-founder</em>로 <em>키를 조정하여 목표한 곳으로 갑</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('kayle')">이교구</em>는 <em>클래식락과 모던락 그리고 추리소설을 좋아합</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('kayle')">이교구</em>는 <em>서울대학교 전기공학부를 졸업하고 스탠포드 대학에서 컴퓨터음악 및 음향학 박사학위를 받았습</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('remy')">허훈</em>의 닉네임은 <em>Remy</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('remy')">허훈</em>은 <em>수퍼톤의 CTO이자 Co-founder</em>이며 <em>복잡한 기술을 제품으로 만들기 위해 고민합</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('remy')">허훈</em>은 <em>공학과 예술의 경계에서 발생하는 창조적인 일들로부터 짜릿함을 느낍</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('remy')">허훈</em>은 <em>서울대학교에서 오디오 공학을 공부</em>하고 <em>삼성전자에서 AI 사운드 기능을 개발했</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('beck')">최희두</em>의 닉네임은 <em>Beck</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('beck')">최희두</em>는 <em>수퍼톤의 COO이자 Co-founder</em>이며 <em>창작자와 엔지니어에게 존경을 담아 일하는 사업가</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('beck')">최희두</em>는 <em>드럼을 치고 디제잉을 합</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('beck')">최희두</em>는 <em>한양대학교에서 전자공학을 공부</em>하고 <em>카카오에서 뮤직 테크 비즈니스</em>를 했습니다.`,
  `<em class="name" onclick="teamDetailLoad('deja')">원성준</em>의 닉네임은 <em>Deja</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('deja')">원성준</em>은 <em>수퍼톤의 사운드 엔지니어</em>이며 <em>모듈러 신디사이저를 메인으로 전자음악을 합</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('deja')">원성준</em>은 <em>롱보드 타는 것을 무척 좋아합</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('deja')">원성준</em>은 <em>상명대학교 대학원 뉴미디어 음악학부에서 박사논문을 쓰고 있</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('nick')">이영국</em>의 닉네임은 <em>Nick</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('nick')">이영국</em>은 <em>수퍼톤 스튜디오의 팀장이자 프로듀서</em>이며 <em>기술을 활용해 멋진 콘텐츠를 제작</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('nick')">이영국</em>은 <em>좋아하는 사람들과 술 한잔하는 것을 즐깁</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('nick')">이영국</em>은 <em>‹쇼미더머니›, ‹불후의명곡›, ‹너의 목소리가 보여› 등에서 편곡과 음악감독을 했</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('nick')">이영국</em>은 <em>‘더 어쿠스틱’이라는 2인조 밴드로 활동하고 있</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('kiro')">왕환웅</em>의 닉네임은 <em>KIrO</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('kiro')">왕환웅</em>은 <em>수퍼톤 스튜디오의 사운드 엔지니어</em>이며 <em>기술을 활용해 콘텐츠를 생산</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('kiro')">왕환웅</em>은 <em>영화에 깊은 애정을 가지고 있</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('kiro')">왕환웅</em>은 <em>일본 TSM에서 작편곡을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('suri')">이수연</em>의 닉네임은 <em>Suri</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('suri')">이수연</em>은 <em>수퍼톤 스튜디오의 인턴</em>이며 <em>오디오와 영상을 편집</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('suri')">이수연</em>은 <em>술과 음악을 좋아</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('suri')">이수연</em>은 <em>중앙대학교에서 연기를 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('jacob')">이수봉</em>의 닉네임은 <em>Jacob</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('jacob')">이수봉</em>은 <em>수퍼톤 스튜디오의 프로듀서</em>이며 <em>좋은 사운드를 만들기 위해 노력</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('jacob')">이수봉</em>은 <em>캠핑을 하며 온전히 자신의 취향이 담긴 공간에서 행복을 느낍</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('jacob')">이수봉</em>은 <em>기타와 작곡을 공부하고 레코딩 스튜디오를 운영하며 다양한 녹음 경험</em>을 했습니다.`,
  `<em class="name" onclick="teamDetailLoad('konsole')">김환승</em>의 닉네임은 <em>Konsole</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('konsole')">김환승</em>은 <em>수퍼톤 스튜디오의 프로듀서</em>이며 <em>AI와 함께 창작</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('konsole')">김환승</em>은 <em>다음 생에는 축구선수가 되기를 꿈꿉</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('konsole')">김환승</em>은 <em>여러 음반에 피쳐링, 프로듀싱 등</em>을 했습니다.`,
  `<em class="name" onclick="teamDetailLoad('adam')">박승원</em>의 닉네임은 <em>Adam</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('adam')">박승원</em>은 <em>수퍼톤의 리서치 인턴</em>이며 <em>음성과 텍스트 사이의 정렬에 대해 연구</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('adam')">박승원</em>은 <em>마인크래프트 스피드런</em>을 즐깁니다.`,
  `<em class="name" onclick="teamDetailLoad('adam')">박승원</em>은 <em>서울대학교에서 물리학과 컴퓨터공학을 전공</em>했고 <em>마인즈랩에서 수석 연구원을 역임</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('cream')">김형주</em>의 닉네임은 <em>Cream</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('cream')">김형주</em>는 <em>수퍼톤의 리서치 연구원</em>이며 <em>ML을 연구하느라 바쁩</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('cream')">김형주</em>는 <em>연구가 잘 풀리지 않을 때 개발을 하며 머리를 식힙</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('cream')">김형주</em>는 <em>서울대학교에서 다양한 머신러닝 분야를 연구</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('gene')">김강욱</em>의 닉네임은 <em>Gene</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('gene')">김강욱</em>은 <em>수퍼톤의 리서치 연구원</em>이며 <em>언어의 올바른 발음에 대해 연구</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('gene')">김강욱</em>은 <em>여유로운 날에 풋살을 즐깁</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('gene')">김강욱</em>은 <em>마인즈랩에서 음성 합성 연구를 주도</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('dominic')">김완수</em>의 닉네임은 <em>Dominic</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('dominic')">김완수</em>는 <em>여행을 다니며 풍경과 거리의 사진을 찍는 것을 좋아</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('dominic')">김완수</em>는 <em>서울대학교에서 박사학위 취득을 위해 공부</em>하고 있습니다.`,
  //``,
  `<em class="name" onclick="teamDetailLoad('haeon')">이주헌</em>의 닉네임은 <em>Haeon</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('haeon')">이주헌</em>은 <em>수퍼톤의 Co-founder</em>이며 <em>인공지능이 노래하게 합</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('haeon')">이주헌</em>은 <em>아름다운 소품을 구매하는 것</em>을 좋아합니다.`,
  `<em class="name" onclick="teamDetailLoad('haeon')">이주헌</em>은 <em>서울대학교에서 미학과 전기정보공학을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('issac')">최형석</em>의 닉네임은 <em>Issac</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('issac')">최형석</em>은 <em>수퍼톤의 Co-founder</em>이며 <em>컴퓨터가 말하고 듣게</em> 합니다.`,
  `<em class="name" onclick="teamDetailLoad('issac')">최형석</em>은 <em>기타 치고 노래 부르는 것</em>을 좋아합니다.`,
  //`<em class="name" onclick="teamDetailLoad('issac')">최형석</em>은 <em>서울대학교에서 음악 오디오 인공지능을 공부하여 박사학위를 취득</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('yangyangii')">양진혁</em>의 닉네임은 <em>Yangyangii</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('yangyangii')">양진혁</em>은 <em>수퍼톤의 리서치 연구원</em>이며 <em>기술을 고도화</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('yangyangii')">양진혁</em>은 <em>영화, 드라마, 소설에 미쳐있</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('yangyangii')">양진혁</em>은 <em>엔씨소프트에서 딥러닝 기반 음성 기술을 연구</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('chunbok')">이지환</em>의 닉네임은 <em>Chunbok</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('chunbok')">이지환</em>은 <em>수퍼톤의 ML엔지니어</em>이며 <em>수퍼톤의 기술을 여러 사람이 사용할 수 있도록 다듬고 배포</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('chunbok')">이지환</em>은 <em>자신의 취향에 맞는 음악을 찾는 일을 즐깁</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('chunbok')">이지환</em>은 <em>서울대학교 음악 오디오 연구실에서 오디오 관련 인공지능을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('june')">최일지</em>의 닉네임은 <em>June</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('june')">최일지</em>는 <em>수퍼톤의 ML엔지니어</em>이며 <em>데이터로부터 ML Model Serving까지의 전반적인 개발을 담당</em>하고 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('june')">최일지</em>는 <em>편안하고 포근한 목소리의 노래</em>를 좋아합니다.`,
  `<em class="name" onclick="teamDetailLoad('june')">최일지</em>는 <em>카카오브레인에서 리서치 연구원</em>으로 일했습니다.`,
  `<em class="name" onclick="teamDetailLoad('db')">성두용</em>의 닉네임은 <em>dB</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('db')">성두용</em>은 <em>수퍼톤의 ML엔지니어링 팀장</em>이며 <em>리서치팀과 코어팀의 다리 역할</em>을 하고 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('db')">성두용</em>은 <em>우연히 만나는 취미를 새로 시작하는 것에 열정을 느낍</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('db')">성두용</em>은 <em>서울대학교에서 학사, 석사를 마치고 박사과정 중</em>에 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('db')">성두용</em>은 <em>한국 퀄컴에서 선임연구원</em>으로 일했습니다.`,
  `<em class="name" onclick="teamDetailLoad('jade')">이재원</em>의 닉네임은 <em>Jade</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('jade')">이재원</em>은 <em>수퍼톤의 개발자</em>이며 <em>머신러닝 결과물을 다른 개발자들이 보다 쉽게 사용할 수 있도록</em> 합니다.`,
  `<em class="name" onclick="teamDetailLoad('jade')">이재원</em>은 <em>게임을 좋아하지만 요즘은 게임을 할 수 있는 시간이 줄었</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('jade')">이재원</em>은 <em>정보통신공학과 무선통신공학을 한성대학교와 한양대학교 대학원에서 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('james')">백진욱</em>의 닉네임은 <em>James</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('james')">백진욱</em>은 <em>수퍼톤의 개발자</em>이며 <em>개발</em>을 합니다.`,
  `<em class="name" onclick="teamDetailLoad('james')">백진욱</em>은 <em>오늘도 살아있음에 감사</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('james')">백진욱</em>은 <em>연세대학교에서 컴퓨터과학을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('sky')">유새결</em>의 닉네임은 <em>Sky</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('sky')">유새결</em>은 <em>수퍼톤의 개발자</em>이며 <em>오디오 플러그인 제작에 힘쓰고</em> 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('sky')">유새결</em>은 <em>날씨 좋은 날에 오토바이 타는 것</em>을 좋아합니다.`,
  `<em class="name" onclick="teamDetailLoad('sky')">유새결</em>은 <em>UPenn에서 컴퓨터과학과 순수미술을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('whybe')">최요한</em>의 닉네임은 <em>Whybe</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('whybe')">최요한</em>은 <em>수퍼톤의 코어개발팀장</em>이며 <em>게으른 개발자</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('whybe')">최요한</em>은 <em>고양이 집사</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('whybe')">최요한</em>은 <em>아주대학교에서 컴퓨터공학과 전자공학을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('gray')">심준식</em>의 닉네임은 <em>Gray</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('gray')">심준식</em>은 <em>수퍼톤의 어플리케이션 개발팀장이자 프론트엔드 개발자</em>이며 <em>수퍼톤의 기술을 사용자에게 전달</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('gray')">심준식</em>은 <em>사람들과 한 잔 하는 것</em>을 좋아합니다.`,
  `<em class="name" onclick="teamDetailLoad('gray')">심준식</em>은 <em>카카오에서 잔여 백신과 QR체크인 서비스를 개발</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('ricky')">성창훈</em>의 닉네임은 <em>Ricky</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('ricky')">성창훈</em>은 <em>수퍼톤의 어플리케이션 개발자</em>이며 <em>기술과 사용자가 맞닿는 영역에서 재미있는 것들을 만듭</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('ricky')">성창훈</em>은 <em>쇼스타코비치의 음악을 좋아하고 클라리넷을 연주</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('ricky')">성창훈</em>은 <em>한양대학교에서 기계공학을 공부</em>하고 <em>펄어비스에서 게임엔진 개발에 참여</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('suto')">추교선</em>의 닉네임은 <em>Suto</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('suto')">추교선</em>은 <em>수퍼톤의 사업개발팀장</em>이며 <em>기술을 활용한 콘텐츠 비즈니스를 만들고</em> 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('suto')">추교선</em>은 <em>문화 예술 애호가이자 헤비 리스너</em>입니다. 예전에는 <em>보컬리스트</em>를 꿈꿨습니다.`,
  `<em class="name" onclick="teamDetailLoad('suto')">추교선</em>은 <em>카카오에서 콘텐츠 비즈니스를 담당</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('jiji')">윤지승</em>의 닉네임은 <em>Jiji</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('jiji')">윤지승</em>은 <em>수퍼톤의 경영지원 매니저</em>이며 <em>경영에 필요한 A부터 Z까지의 일을 수행</em>하고 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('jiji')">윤지승</em>은 <em>취미부자이고 멋진 인생을 살기 위해 노력</em>하고 있습니다.`,
  `<em class="name" onclick="teamDetailLoad('jiji')">윤지승</em>은 <em>특별히 쓸 말이 없</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('rosa')">곽나현</em>의 닉네임은 <em>Rosa</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('rosa')">곽나현</em>은 <em>수퍼톤의 경영지원 매니저</em>이며 <em>신뢰 높은 회계정보를 제공</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('rosa')">곽나현</em>은 <em>노래를 부르고 동물을 볼 때 행복을 느낍</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('rosa')">곽나현</em>은 <em>스타트업에서부터 중견기업까지 경영지원 업무</em>를 맡았습니다.`,
  `<em class="name" onclick="teamDetailLoad('mario')">박정진</em>의 닉네임은 <em>Mario</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('mario')">박정진</em>은 <em>수퍼톤의 경영지원 본부장</em>으로서 <em>구성원들의 성공을 지원하며 대화를 환영</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('mario')">박정진</em>은 <em>테니스 애호가</em>이자 <em>영화와 음악을 사랑</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('mario')">박정진</em>은 <em>서강대학교에서 신문방송학을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('mario')">박정진</em>은 <em>삼성, TMON, 신세계인터코스, FNC 등에서 경영지원</em>을 했습니다.`,
  `<em class="name" onclick="teamDetailLoad('arold')">조형래</em>의 닉네임은 <em>Arold</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('arold')">조형래</em>는 <em>수퍼톤의 사업개발 매니저</em>로 <em>회사의 비전을 고민</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('arold')">조형래</em>는 <em>심포닉 메탈</em>을 즐겨듣습니다.`,
  `<em class="name" onclick="teamDetailLoad('arold')">조형래</em>는 <em>서울대학교에서 경영전략을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('d')">엄주일</em>의 닉네임은 <em>D</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('d')">엄주일</em>은 <em>수퍼톤의 BX본부장</em>이며 <em>브랜드/고객/사용자 경험을 고민</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('d')">엄주일</em>은 <em>열대 관엽식물을 보살피며 행복을 느낍</em>니다.`,
  `<em class="name" onclick="teamDetailLoad('d')">엄주일</em>은 <em>한양대학교와 홍익대학교에서 HCI와 디자인경영을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('d')">엄주일</em>은 <em>삼성전자에서 뮤직서비스 기획을 책임</em>졌습니다.`,
  `<em class="name" onclick="teamDetailLoad('jay')">김정민</em>의 닉네임은 <em>Jay</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('jay')">김정민</em>은 <em>수퍼톤의 BX팀장</em>이며 <em>수퍼톤의 온/오프라인 경험을 만들고 연결</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('jay')">김정민</em>은 <em>자연에서의 백패킹</em>을 즐깁니다.`,
  `<em class="name" onclick="teamDetailLoad('jay')">김정민</em>은 <em>한양대학교에서 그래픽디자인을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('dan')">한정원</em>의 닉네임은 <em>Dan</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('dan')">한정원</em>은 <em>수퍼톤의 디자이너</em>이며 <em>수퍼톤의 가치를 시각언어로 번역</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('dan')">한정원</em>은 <em>알고 싶은 것이 많</em>습니다.`,
  `<em class="name" onclick="teamDetailLoad('dan')">한정원</em>은 <em>대학에서 순수미술과 시각디자인을 공부</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('jaehyeon')">박재현</em>의 닉네임은 <em>Jaehyeon</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('jaehyeon')">박재현</em>은 <em>수퍼톤의 코어개발팀 개발자</em>이며 <em>SDK를 개발하여 지원</em>합니다.`,
  `<em class="name" onclick="teamDetailLoad('jaehyeon')">박재현</em>은 <em>여유로운 날에 요리하는 것을 좋아하지만 아직 초보</em>입니다.`,
  `<em class="name" onclick="teamDetailLoad('jaehyeon')">박재현</em>은 <em>아주대학교에서 임베디드 소프트웨어를 전공</em>했습니다.`,
  `<em class="name" onclick="teamDetailLoad('jaehyeon')">박재현</em>은 <em>티맥스오에스에서 멀티미디어 프레임워크와 협업툴 서비스 개발 프로젝트에 참여</em>했습니다.`
];

let teamEn = [
  '<em>Cheolsu Kim</em> is a<br><em>BX lead</em><br><em>of Supertone</em> and <br><em>design</em><br><em>a brand.</em>',
  '<em>Nami Park</em> is a <br><em>SW developer</em><br><em>of Supertone</em> and <br><em>likes rock</em>.',
  '<em>Heedu Choi</em> is a<br><em>COO</em><br><em>of Supertone</em> <br>and an <em>outstanding</em><br><em>drummer</em>.',
  '<em>Yeonghee Jang</em> is a<br><em>manager of</em><br><em>Supertone</em> and <br><em>provides reliable</em><br><em>accounting</em><br><em>information</em>.'
];

let randomInterval = true;

$(document).ready(function () {
  $('.random-ko').html(randomItem(teamKo));
  $('.random-en').html(randomItem(teamEn));
});

$('.random, .click-caption').click(function (e) {
  let $target = $(e.target);
  let $popbtn = $target.hasClass('name');

  if (!$popbtn) {
    randomInterval = false;
    $('.random-ko').html(randomItem(teamKo));
    $('.random-en').html(randomItem(teamEn));
  };
});

setInterval(function () {
  if (randomInterval == true) {
    $('.random-ko').html(randomItem(teamKo));
    $('.random-en').html(randomItem(teamEn));
  };
}, 1500);

function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
};