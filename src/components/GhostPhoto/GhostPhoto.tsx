import { GhostPhotoProps } from "@/types";

export default function GhostPhoto({ ghostPhoto }: GhostPhotoProps) {

    if (typeof ghostPhoto === 'string') return (
        <div className="animate-pulse-max-opacity-50 rounded-md overflow-hidden h-fit m-1">
            <img src={ghostPhoto} className="w-full object-cover" />
        </div>
    );
}