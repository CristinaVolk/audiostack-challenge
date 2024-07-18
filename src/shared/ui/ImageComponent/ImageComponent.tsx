import React, { FunctionComponent, ImgHTMLAttributes } from 'react';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement>{}

type SlideProps = Pick<ImgProps, "src" | "alt" | "onClick" | "className" | "width" | "height">;

export const ImageComponent: FunctionComponent<SlideProps> = (props: ImgProps) => {
    const {
        src,
        alt,
        onClick,
        className,
        width,
        height,
    } = props

    return (
        <img
            src={src}
            alt={alt}
            width={width ?? '100%'}
            height={height ?? '100%'}
            onClick={onClick}
            className={className}
        />
    );
};
