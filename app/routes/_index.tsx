import type {MetaFunction} from "@remix-run/node";
import {GamePlay} from "~/components/GamePlay";
import {Header} from "~/components/Header";

export const meta: MetaFunction = () => {
    return [
        {title: "TypeMonkey"},
        {name: "TypeMonkey", content: "Learn typing"},
    ];
};

export default function Index() {
    return (
        <div>
            <Header/>
            <GamePlay />
        </div>

    );
}
