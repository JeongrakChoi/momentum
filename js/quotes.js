const quotes = [
    {
      quote: "삶이 있는 한 희망은 있다",
      author: "키케로",
    },
    {
      quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
      author: "사무엘 존슨",
    },
    {
      quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
      author: "엘버트 허버드",
    },
    {
      quote: "행복한 삶을 살기위해 필요한 것은 거의 없다. ",
      author: "마르쿠스 아우렐리우스 안토니우스",
    },
    {
      quote: "피할수 없으면 즐겨라",
      author: "로버트 엘리엇",
    },
    {
      quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
      author: "앙드레 말로",
    },
    {
      quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
      author: "괴테",
    },
    {
      quote: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다.",
      author: "괴테",
    },
    {
      quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
      author: "헬렌 켈러",
    },
    {
      quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
      author: "발타사르 그라시안",
    },
  ];
  
  const quote = document.querySelector(".quote p:first-child");
  const author = document.querySelector(".quote p:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;