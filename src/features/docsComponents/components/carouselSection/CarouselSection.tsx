import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import { Tag } from "@shared/ui/tags/tag/Tag";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocPreviewElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
    DocVariantGroupElement,
    DocVariantTitleElement,
} from "../docSection/DocSection.elements";
import { carouselProps, carouselUsageCode } from "../../data";

const DemoSlideElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${pxToRem(120)};
    border-radius: ${({ theme }) => theme.radii.medium};
    background: ${({ theme }) => theme.color.background.secondary};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

const demoSlides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

export const CarouselSection = () => {
    return (
        <DocSection
            title="Carousel"
            description="Carrusel genérico basado en Embla. Cada hijo es un slide; sirve para cards, tags, banners u otro contenido."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={carouselUsageCode} />
            </DocSectionBlock>

            <DocSectionBlock title="Props">
                <DocTableWrapperElement>
                    <DocTableElement>
                        <thead>
                            <tr>
                                <DocTableHeadCellElement>Prop</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Tipo</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Default</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Descripción</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {carouselProps.map((prop) => (
                                <tr key={prop.name}>
                                    <DocTableCellElement>{prop.name}</DocTableCellElement>
                                    <DocTableCellElement>{prop.type}</DocTableCellElement>
                                    <DocTableCellElement>{prop.default}</DocTableCellElement>
                                    <DocTableCellElement>{prop.description}</DocTableCellElement>
                                </tr>
                            ))}
                        </tbody>
                    </DocTableElement>
                </DocTableWrapperElement>
            </DocSectionBlock>

            <DocSectionBlock title="Preview">
                <DocPreviewElement>
                    <DocVariantGroupElement>
                        <DocVariantTitleElement>default + dots</DocVariantTitleElement>
                        <Carousel gap={16} slideSize="70%" showDots>
                            {demoSlides.map((label) => (
                                <DemoSlideElement key={label}>{label}</DemoSlideElement>
                            ))}
                        </Carousel>
                    </DocVariantGroupElement>

                    <DocVariantGroupElement>
                        <DocVariantTitleElement>arrows + loop</DocVariantTitleElement>
                        <Carousel loop showArrows showDots slideSize="55%" gap={12}>
                            {demoSlides.map((label) => (
                                <DemoSlideElement key={label}>{label}</DemoSlideElement>
                            ))}
                        </Carousel>
                    </DocVariantGroupElement>

                    <DocVariantGroupElement>
                        <DocVariantTitleElement>con Tags</DocVariantTitleElement>
                        <Carousel gap={12} slideSize="auto" showDots>
                            <Tag variant="primary">Primary</Tag>
                            <Tag variant="secondary">Secondary</Tag>
                            <Tag variant="success">Success</Tag>
                            <Tag variant="warning">Warning</Tag>
                            <Tag variant="error">Error</Tag>
                            <Tag variant="info">Info</Tag>
                        </Carousel>
                    </DocVariantGroupElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
