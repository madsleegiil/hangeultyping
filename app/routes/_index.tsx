import type {MetaFunction} from "@remix-run/node";
import {GamePlay} from "~/components/GamePlay";
import {Header} from "~/components/Header";
import {NewGame} from "~/components/NewGame";

export const meta: MetaFunction = () => {
    return [
        {title: "hangeultyping"},
        {name: "hangeultyping", content: "Learn typing"},
    ];
};

export default function Index() {
    return (
        <div>
            <Header/>
            <div className="mt-8">
                <NewGame />
            </div>
        </div>

    );
}
