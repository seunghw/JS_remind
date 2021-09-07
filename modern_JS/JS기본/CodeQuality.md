# Modern javascript tutorial

## Code Quality(코드품질)

### 문법

몇가지 추천할만한 규칙들은 아래 차트 시트에 표시했습니다.

![img](https://raw.githubusercontent.com/seunghw/JS_remind/main/modern_JS/JS%EA%B8%B0%EB%B3%B8/codeQuality.png)

### 중괄호

대부분의 자바스크립트 프로젝트에서 여는 중괄호는 ‘이집션(Egyptian)’ 스타일을 따라 새로운 줄이 아닌 상응하는 키워드와 같은 줄에 작성합니다. 여기에 더하여 여는 중괄호 앞엔 공백이 하나 있어야 합니다. 아래와 같이 말이죠.

```javascript
if (condition) {
  // 코드 1
  // 코드 2
  // ...코드 n...
}
```

여기 부분을 읽어보면서 제가 잘못된 부분들이 있는지 체크해보았습니다.

가독성을 올리려면 아래 예시들처럼 작성해아한다고 합니다.

1. 중괄호 없이 새로운 줄에 코드를 작성할 수도 있는데, 이렇게 하면 새로운 코드 라인을 추가할 때 에러가 발생합니다. 절대 이 방법은 쓰지 마세요.

```javascript
if (n < 0) {
  alert(`Power ${n} is not supported`);
}
```

2. 가장 추천하는 방법은 다음과 같습니다

```javascript
if (n < 0) {
  alert(`Power ${n} is not supported`);
}
```

`if (cond) return null`처럼 코드가 간단하다면 세 번째 예시같이 한 줄에 몰아서 작성해도 괜찮습니다. 그렇지만 네 번째 예시처럼 코드 블록을 사용하는 방법이 가장 가독성이 좋으므로 이 방법을 추천합니다.

### 가로길이

### 들여쓰기

### 세미콜론

### 중첩 레벨

## 함수의 위치

## 스타일 가이드
