import { Children, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronBackIcon, ChevronForwardIcon } from "@assets/icons";
import { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
import {
    CarouselArrowNextElement,
    CarouselArrowPrevElement,
    CarouselContainerElement,
    CarouselDotElement,
    CarouselDotsElement,
    CarouselElement,
    CarouselSlideElement,
    CarouselViewportElement,
    type CarouselDotsTone,
} from "./Carousel.elements";

export type CarouselAlign = NonNullable<EmblaOptionsType["align"]>;

interface CarouselProps {
    children: ReactNode;
    loop?: boolean;
    align?: CarouselAlign;
    dragFree?: boolean;
    gap?: number;
    slideSize?: string;
    showArrows?: boolean;
    showDots?: boolean;
    dotsOverlay?: boolean;
    dotsBottom?: number;
    dotsTone?: CarouselDotsTone;
    options?: EmblaOptionsType;
    className?: string;
}

export const Carousel = ({
    children,
    loop = false,
    align = "start",
    dragFree = false,
    gap = 16,
    slideSize = "80%",
    showArrows = false,
    showDots = false,
    dotsOverlay = false,
    dotsBottom = 12,
    dotsTone = "light",
    options,
    className,
}: CarouselProps) => {
    const slides = Children.toArray(children);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop,
        align,
        dragFree,
        ...options,
    });
    const [, setSlideEpoch] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onChange = () => {
            setSlideEpoch((epoch) => epoch + 1);
        };

        emblaApi.on("select", onChange);
        emblaApi.on("reInit", onChange);

        return () => {
            emblaApi.off("select", onChange);
            emblaApi.off("reInit", onChange);
        };
    }, [emblaApi]);

    const selectedIndex = emblaApi?.selectedScrollSnap() ?? 0;
    const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
    const canScrollNext = emblaApi?.canScrollNext() ?? false;
    const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

    if (slides.length === 0) return null;

    return (
        <CarouselElement className={className}>
            <CarouselViewportElement ref={emblaRef}>
                <CarouselContainerElement $gap={gap}>
                    {slides.map((slide, index) => (
                        <CarouselSlideElement
                            key={index}
                            $slideSize={slideSize}
                            $gap={gap}
                        >
                            {slide}
                        </CarouselSlideElement>
                    ))}
                </CarouselContainerElement>
            </CarouselViewportElement>

            {showArrows && (
                <>
                    <CarouselArrowPrevElement>
                        <IconButton
                            icon={<ChevronBackIcon />}
                            variant="surface"
                            shape="circle"
                            size="S"
                            aria-label="Anterior"
                            disabled={!canScrollPrev}
                            onClick={() => emblaApi?.scrollPrev()}
                        />
                    </CarouselArrowPrevElement>
                    <CarouselArrowNextElement>
                        <IconButton
                            icon={<ChevronForwardIcon />}
                            variant="surface"
                            shape="circle"
                            size="S"
                            aria-label="Siguiente"
                            disabled={!canScrollNext}
                            onClick={() => emblaApi?.scrollNext()}
                        />
                    </CarouselArrowNextElement>
                </>
            )}

            {showDots && scrollSnaps.length > 1 && (
                <CarouselDotsElement $overlay={dotsOverlay} $bottom={dotsBottom}>
                    {scrollSnaps.map((_, index) => (
                        <CarouselDotElement
                            key={index}
                            type="button"
                            $active={index === selectedIndex}
                            $tone={dotsTone}
                            aria-label={`Ir al slide ${index + 1}`}
                            aria-current={index === selectedIndex ? "true" : undefined}
                            onClick={() => emblaApi?.scrollTo(index)}
                        />
                    ))}
                </CarouselDotsElement>
            )}
        </CarouselElement>
    );
};
