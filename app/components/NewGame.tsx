

export const NewGame = () => {
    return (
        <form className="flex flex-col items-center gap-4" action={`game`}>
            <h1 className="text-4xl">Start game</h1>
            <div className="flex flex-col items-center">
                <label>Number of words</label>
                <select name="numberOfWords">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
            <div className="flex flex-col items-center">
                <label>Number of blocks per word</label>
                <select name="numberOfBlocksPerWord">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <button className="btn md:mx-auto">Start</button>
        </form>
    )
}