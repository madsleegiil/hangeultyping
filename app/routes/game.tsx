import {LoaderFunction, LoaderFunctionArgs} from "@remix-run/node";
import {Header} from "~/components/Header";
import {GamePlay, GameSettings} from "~/components/GamePlay";
import {useLoaderData} from "@remix-run/react";
import * as sea from "node:sea";

const sanitizeNumberInput = (number: string | null, min: number, max: number, defaultValue: number) => {
    if (number == undefined) return defaultValue;
    if (isNaN(Number(number))) return defaultValue;
    const asNumber = Number(number);
    if (asNumber < min) return defaultValue;
    if (asNumber > max) return defaultValue;
    return asNumber
}

export const loader: LoaderFunction = ({request}: LoaderFunctionArgs): GameSettings => {
    const searchParams = new URL(request.url).searchParams;

    const numberOfWordsParam = searchParams.get("numberOfWords")
    const numberOfBlocksPerWordParam = searchParams.get("numberOfBlocksPerWord")

    return {
        numberOfWords: sanitizeNumberInput(numberOfWordsParam, 3, 30, 10),
        numberOfBlocksPerWord: sanitizeNumberInput(numberOfBlocksPerWordParam, 1, 3, 1)
    } as GameSettings
}

export default function Game() {
    const settings= useLoaderData<typeof loader>();
    console.log("Settings", settings);

    return (
        <div>
            <Header/>
            <GamePlay gameSettings={settings}/>
        </div>
    )
}