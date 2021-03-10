# 이해 안되는 점
1. onClick 이벤트에 observable 함수를 바로 넣으면 this 인식이 안됨
   근데 함수를 따로 만들어서 넣으면, this 인식이 됨. 이거 왜이럼???
2. mobx 값으로 화면을 갱신시킬려면, 반환하는 컴포넌트를 useObserver 로 묶어야함 (mobx-react 지원함수)
   이건 hook 전용을 위한거인듯?