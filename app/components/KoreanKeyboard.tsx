import css from "./koreanKeyboard.module.css";

export const KoreanKeyboard = () => {
    return (
        <svg width="510" height="180" xmlns="http://www.w3.org/2000/svg">
            <rect width="510" height="180" fill="#f5f5f5" stroke="black"/>
            
            <g>
                <rect className={css.key} x="10" y="20" width="40" height="40"/>
                <text className={css.label} x="30" y="45">ㅂ</text>
                <text className={css.shiftLabel} x="30" y="30">ㅃ</text>

                <rect className={css.key} x="60" y="20" width="40" height="40"/>
                <text className={css.label} x="80" y="45">ㅈ</text>
                <text className={css.shiftLabel} x="80" y="30">ㅉ</text>

                <rect className={css.key} x="110" y="20" width="40" height="40"/>
                <text className={css.label} x="130" y="45">ㄷ</text>
                <text className={css.shiftLabel} x="130" y="30">ㄸ</text>

                <rect className={css.key} x="160" y="20" width="40" height="40"/>
                <text className={css.label} x="180" y="45">ㄱ</text>
                <text className={css.shiftLabel} x="180" y="30">ㄲ</text>

                <rect className={css.key} x="210" y="20" width="40" height="40"/>
                <text className={css.label} x="230" y="45">ㅅ</text>
                <text className={css.shiftLabel} x="230" y="30">ㅆ</text>

                <rect className={css.key} x="260" y="20" width="40" height="40"/>
                <text className={css.label} x="280" y="45">ㅛ</text>

                <rect className={css.key} x="310" y="20" width="40" height="40"/>
                <text className={css.label} x="330" y="45">ㅕ</text>

                <rect className={css.key} x="360" y="20" width="40" height="40"/>
                <text className={css.label} x="380" y="45">ㅑ</text>

                <rect className={css.key} x="410" y="20" width="40" height="40"/>
                <text className={css.label} x="430" y="45">ㅐ</text>
                <text className={css.shiftLabel} x="430" y="30">ㅒ</text>

                <rect className={css.key} x="460" y="20" width="40" height="40"/>
                <text className={css.label} x="480" y="45">ㅔ</text>
                <text className={css.shiftLabel} x="480" y="30">ㅖ</text>

                <rect className={css.key} x="20" y="70" width="40" height="40"/>
                <text className={css.label} x="40" y="95">ㅁ</text>

                <rect className={css.key} x="70" y="70" width="40" height="40"/>
                <text className={css.label} x="90" y="95">ㄴ</text>

                <rect className={css.key} x="120" y="70" width="40" height="40"/>
                <text className={css.label} x="140" y="95">ㅇ</text>

                <rect className={css.key} x="170" y="70" width="40" height="40"/>
                <text className={css.label} x="190" y="95">ㄹ</text>

                <rect className={css.key} x="220" y="70" width="40" height="40"/>
                <text className={css.label} x="240" y="95">ㅎ</text>

                <rect className={css.key} x="270" y="70" width="40" height="40"/>
                <text className={css.label} x="290" y="95">ㅗ</text>

                <rect className={css.key} x="320" y="70" width="40" height="40"/>
                <text className={css.label} x="340" y="95">ㅓ</text>

                <rect className={css.key} x="370" y="70" width="40" height="40"/>
                <text className={css.label} x="390" y="95">ㅏ</text>

                <rect className={css.key} x="420" y="70" width="40" height="40"/>
                <text className={css.label} x="440" y="95">ㅣ</text>

                <rect className={css.key} x="40" y="120" width="40" height="40"/>
                <text className={css.label} x="60" y="145">ㅋ</text>

                <rect className={css.key} x="90" y="120" width="40" height="40"/>
                <text className={css.label} x="110" y="145">ㅌ</text>

                <rect className={css.key} x="140" y="120" width="40" height="40"/>
                <text className={css.label} x="160" y="145">ㅊ</text>

                <rect className={css.key} x="190" y="120" width="40" height="40"/>
                <text className={css.label} x="210" y="145">ㅍ</text>

                <rect className={css.key} x="240" y="120" width="40" height="40"/>
                <text className={css.label} x="260" y="145">ㅠ</text>

                <rect className={css.key} x="290" y="120" width="40" height="40"/>
                <text className={css.label} x="310" y="145">ㅜ</text>

                <rect className={css.key} x="340" y="120" width="40" height="40"/>
                <text className={css.label} x="360" y="145">ㅡ</text>
            </g>
        </svg>
    )
}