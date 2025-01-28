import { ElementType } from "react";

export interface TitleProps {
    primary: string;
    secondary: string;
    icon: ElementType;
}

export default function Title(props: TitleProps) {
    return (
        <div className="flex gap-2">
            <props.icon size={55} stroke={1}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.primary}</h1>
                <h2 className="text-zinc-400">{props.secondary}</h2>
            </div>
        </div>
    );
}