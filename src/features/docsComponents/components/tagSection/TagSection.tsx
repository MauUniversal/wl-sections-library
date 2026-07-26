import type { TagVariant } from "@shared/ui/tags/tag/Tag.elements";
import { Tag } from "@shared/ui/tags/tag/Tag";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocButtonRowElement,
    DocPreviewColumnElement,
    DocPreviewElement,
    DocPreviewGridElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
    DocVariantGroupElement,
    DocVariantTitleElement,
} from "../docSection/DocSection.elements";
import {
    tagMainVariants,
    tagProps,
    tagSizeRows,
    tagSizes,
    tagSoftVariants,
    tagStatusVariants,
    tagUsageCode,
    tagVariantRows,
} from "../../data";

const TagVariantPreview = ({ variant }: { variant: TagVariant }) => {
    return (
        <DocVariantGroupElement>
            <DocVariantTitleElement>{variant}</DocVariantTitleElement>
            <DocButtonRowElement>
                {tagSizes.map((size) => (
                    <Tag key={size} variant={variant} size={size}>
                        {variant}
                    </Tag>
                ))}
            </DocButtonRowElement>
        </DocVariantGroupElement>
    );
};

export const TagSection = () => {
    return (
        <DocSection
            title="Tag"
            description="Etiqueta/pill del design system. Ancho fijo 92px, weight 600, padding 0 12px, radius pill. Font S 11 / M 12 / L 13."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={tagUsageCode} />
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
                            {tagProps.map((prop) => (
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

            <DocSectionBlock title="Tamaños">
                <DocTableWrapperElement>
                    <DocTableElement>
                        <thead>
                            <tr>
                                <DocTableHeadCellElement>Size</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Altura</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Ancho</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Font</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Weight</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {tagSizeRows.map((row) => (
                                <tr key={row.size}>
                                    <DocTableCellElement>{row.size}</DocTableCellElement>
                                    <DocTableCellElement>{row.height}</DocTableCellElement>
                                    <DocTableCellElement>{row.width}</DocTableCellElement>
                                    <DocTableCellElement>{row.font}</DocTableCellElement>
                                    <DocTableCellElement>{row.weight}</DocTableCellElement>
                                </tr>
                            ))}
                        </tbody>
                    </DocTableElement>
                </DocTableWrapperElement>
            </DocSectionBlock>

            <DocSectionBlock title="Variantes">
                <DocTableWrapperElement>
                    <DocTableElement>
                        <thead>
                            <tr>
                                <DocTableHeadCellElement>Variante</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Texto</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Background</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Borde</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {tagVariantRows.map((row) => (
                                <tr key={row.variant}>
                                    <DocTableCellElement>{row.variant}</DocTableCellElement>
                                    <DocTableCellElement>{row.text}</DocTableCellElement>
                                    <DocTableCellElement>{row.background}</DocTableCellElement>
                                    <DocTableCellElement>{row.border}</DocTableCellElement>
                                </tr>
                            ))}
                        </tbody>
                    </DocTableElement>
                </DocTableWrapperElement>
            </DocSectionBlock>

            <DocSectionBlock title="Preview">
                <DocPreviewElement>
                    <DocPreviewGridElement $columns={3}>
                        <DocPreviewColumnElement>
                            {tagMainVariants.map((variant) => (
                                <TagVariantPreview key={variant} variant={variant} />
                            ))}
                        </DocPreviewColumnElement>

                        <DocPreviewColumnElement>
                            {tagSoftVariants.map((variant) => (
                                <TagVariantPreview key={variant} variant={variant} />
                            ))}
                        </DocPreviewColumnElement>

                        <DocPreviewColumnElement>
                            {tagStatusVariants.map((variant) => (
                                <TagVariantPreview key={variant} variant={variant} />
                            ))}
                        </DocPreviewColumnElement>
                    </DocPreviewGridElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
