const quoteTag = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
  {
    quote: "친구는 기쁨을 두배로 만들고 슬픔은 반으로 줄인다.",
    author: "실러",
  },
  {
    quote: "지나간 슬픔에 새 눈물을 낭비하지 마라.",
    author: "에우리피데스",
  },
  {
    quote: "성실한 한마디의 말은 백만 마디의 헛된 찬사보다 낫다.",
    author: "카네기",
  },
  {
    quote: "거짓말은 그 자체가 죄일 뿐 아니라 정신을 더럽힌다.",
    author: "플라톤",
  },
  {
    quote: "어리석은 사람은 자기 혓바닥을 억제하지 못한다.",
    author: "초서",
  },
  {
    quote: "눈물 속에서는 갈 길을 못 본다.",
    author: "윌리엄 베넘",
  },
  {
    quote: "구두쇠는 항상 빈곤하다.",
    author: "호라티우스",
  },
  {
    quote: "역경은 청년에게 있어서 빛나는 가치이다.",
    author: "에머슨",
  },
  {
    quote: "일찍 일어나는 새가 벌레를 잡는다.",
    author: "캠던",
  },
  {
    quote: "훌륭한 말은 훌륭한 무기이다.",
    author: "풀러",
  },
];

const todayOfQuote = quotes[Math.floor(Math.random() * quotes.length)];

function printQuote() {
  quoteTag.classList.remove(HIDDEN_CLASSNAME);
  quote.innerText = todayOfQuote.quote;
  author.innerText = `-${todayOfQuote.author}-`;
}

if (savedUsername) {
  printQuote();
}
