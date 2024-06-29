import React from 'react'
import Image from "next/image";

const SearchBar = (searchPrompt: { searchPrompt?: string }) => {
    const searchIconLink = "https://cdn.builder.io/api/v1/image/assets/TEMP/8fb0b3e5c337500e8aa6e4877e8962b51bbdb555c61fb475b3a74844858d3db7?apiKey=ec176c9ef0f544afb57e6aaa7782d686&"

    return (
        <div className="flex gap-4 px-4 py-3 text-sm rounded-md bg-neutral-100 text-zinc-500">
            <Image src={searchIconLink} className="shrink-0 aspect-square w-[22px]" alt='search' fill />

            <div className="flex-auto">
                Search for anything...
            </div>
        </div>
    );
}

export default SearchBar;