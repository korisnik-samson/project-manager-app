import React from 'react'
import { AvatarProps, ISubtaskCardType } from "@/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { iconLinks } from "@/constants";

const CommentIcon = ({ count }: { count: number }) => {
    return (
        <div className='flex gap-1.5 self-stretch my-auto'>
            <Image src={iconLinks.comment.link} alt='comment_icon'
                   width={16} height={16} className='shrink-0 w-4 aspect-square' />
            <div className="my-auto">{count}</div>
        </div>
    );
}

const FileIcon = ({ count }: { count: number }) => {
    return (
        <div className='flex gap-1.5 self-stretch my-auto'>
            <Image src={iconLinks.comment.icon} alt='file_icon'
                   width={16} height={16} className='shrink-0 w-4 aspect-square' />
            <div className="my-auto">{count}{' '} files</div>
        </div>
    );
}

const Avatar = ({ imgUrl }: { imgUrl: string }) => {
    return <Image src={imgUrl} alt='avatar' width={63} height={24}
          className='shrink-0 self-stretch rounded-full border border-white border-solid aspect-[2.63] w-[63px]' />
}

const SubtaskCard = ({ title, priority, members, description, imgUrl }: ISubtaskCardType) => {
    return (
        <div className='flex flex-col p-5 bg-white rounded-2xl max-w-[324px]'>
            <div className='flex gap-5 justify-between'>
                <div className='justify-center px-1.5 py-2 text-xs font-medium text-orange-400 whitespace-nowrap
                 rounded bg-orange bg-opacity-20'>
                    {priority}
                </div>
                <Button className='my-auto text-base font-extrabold tracking-tighter text-size-900' variant='secondary'>
                    ...
                </Button>
                <h2 className='mt-2 text-lg font-bold text-slate-900'>{title}</h2>

                <Image src={imgUrl} alt={title} width={314} height={123}
                       className='mt-2 w-full aspect-[2.56]' />

                <footer className='flex gap-4 justify-between items-center mt-7 text-xs font-medium text-zinc-500'>
                    {/*<Avatar imgUrl={members.map()} />*/}
                    <CommentIcon count={3} />
                    <FileIcon count={2} />
                </footer>
            </div>
        </div>
    );
}

export default SubtaskCard;