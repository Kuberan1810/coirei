import { type JSX } from 'react';

interface ImagePreviewProps {
    image: string;
    alt: string;
    id: string;
}

export default function ImagePreview({ image, alt, id }: ImagePreviewProps): JSX.Element {
    return (
        <div className="relative">
            <div className="bg-gradient-to-br from-teal-600 to-rose-900 rounded-3xl p-8 shadow-2xl">
                <img
                    key={id}
                    src={image}
                    alt={alt}
                    className="w-full h-auto rounded-2xl shadow-xl object-cover transition-opacity duration-500"
                />
            </div>
        </div>
    );
}