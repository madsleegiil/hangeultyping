
export const oneBlockWords = [
    "말", "눈", "밤", "달", "빛", "집", "문", "불", "땅", "돌", "강", "개", "산", "꿈", "짐", "몸", "점", "밥", "술", "김", "살",
    "먹", "줍", "참", "봄", "붐", "좁", "넓", "씁", "낮", "덥", "춥", "밝", "작", "많", "늦", "높", "젊", "얇", "검", "저", "너",
    "나", "내", "네", "그", "이", "한", "새", "첫", "참", "좀", "꼭", "더", "덜", "잘", "늘", "또", "막", "홧", "만", "도", "의",
    "랑", "에", "와", "과", "로", "아", "어", "야", "응", "네", "헉", "허", "쉿", "꽃", "삶", "꿈", "잠", "힘", "털", "색", "손",
    "발", "신", "별", "방", "선", "말", "공", "춤", "글", "돈", "냄", "땀"
]

export const pickRandomWord = (words: string[]): [string, string[]] => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return [randomWord, words.filter((word) => word !== randomWord)]
}

// TODO: Handle JAMO blocks
export const mapLatinToHangeul = (keys: string): string =>
    keys.split("").map((key) => {
        const hangeulKey = latinKeyToHangeul.get(key);
        return hangeulKey ? hangeulKey : key;
    }).join("");

const latinKeyToHangeul = new Map<string, string>([
    ["q" ,"ㅂ"],
    ["w" ,"ㅈ"],
    ["e" ,"ㄷ"],
    ["r" ,"ㄱ"],
    ["t" ,"쇼"],
    ["y" ,"ㅕ"],
    ["u" ,"ㅑ"],
    ["i" ,"ㅐ"],
    ["o" ,"ㅔ"],
    ["a" , "ㅁ"],
    ["s" , "ㄴ"],
    ["d" , "ㅇ"],
    ["f" , "ㄹ"],
    ["g" , "ㅎ"],
    ["h" , "ㅗ"],
    ["j" , "ㅓ"],
    ["k" , "ㅏ"],
    ["l" , "ㅣ"],
    ["z" , "ㅋ"],
    ["x" , "ㅌ"],
    ["c" , "ㅊ"],
    ["v" , "ㅍ"],
    ["b" , "ㅠ"],
    ["n" , "ㅜ"],
    ["m" , "ㅡ"],
    ["Q" , "ㅃ"],
    ["W" , "ㅉ"],
    ["E" , "ㄸ"],
    ["R" , "ㄲ"],
    ["T" , "ㅆ"],
    ["O", "ㅒ"],
    ["P", "ㅖ"],
])
