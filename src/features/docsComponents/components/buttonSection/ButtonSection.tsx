import type { ButtonVariant } from "@shared/ui/buttons/button/Button.elements";
import { Button } from "@shared/ui/buttons/button/Button";
import { ArrowForwardIcon, DownloadIcon } from "@assets/icons";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocButtonRowElement,
    DocPreviewColumnElement,
    DocPreviewElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
    DocVariantGroupElement,
    DocVariantTitleElement,
} from "../docSection/DocSection.elements";
import {
    buttonMainVariants,
    buttonProps,
    buttonSizes,
    buttonSizeRows,
    buttonStatusVariants,
    buttonUsageCode,
    buttonVariantRows,
} from "../../data";

const ButtonVariantPreview = ({ variant }: { variant: ButtonVariant }) => {
    return (
        <DocVariantGroupElement>
            <DocVariantTitleElement>{variant}</DocVariantTitleElement>

            <DocButtonRowElement>
                {buttonSizes.map((size) => (
                    <Button key={size} variant={variant} size={size}>
                        Button
                    </Button>
                ))}
            </DocButtonRowElement>

            <DocButtonRowElement>
                {buttonSizes.map((size) => (
                    <Button key={size} variant={variant} size={size} disabled>
                        Button
                    </Button>
                ))}
            </DocButtonRowElement>

            <DocButtonRowElement>
                {buttonSizes.map((size) => (
                    <Button key={`${size}-loading`} variant={variant} size={size} loading>
                        Button
                    </Button>
                ))}
            </DocButtonRowElement>
        </DocVariantGroupElement>
    );
};

export const ButtonSection = () => {
    return (
        <DocSection
            title="Button"
            description="Botón base del proyecto con variantes de color/estilo, tamaños fijos (altura + ancho) y estado loading. Radius 8px (radii.medium). Extiende los atributos nativos de <button>."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={buttonUsageCode} />
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
                            {buttonProps.map((prop) => (
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
                                <DocTableHeadCellElement>Font</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Altura</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Ancho</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {buttonSizeRows.map((row) => (
                                <tr key={row.size}>
                                    <DocTableCellElement>{row.size}</DocTableCellElement>
                                    <DocTableCellElement>{row.font}</DocTableCellElement>
                                    <DocTableCellElement>{row.height}</DocTableCellElement>
                                    <DocTableCellElement>{row.width}</DocTableCellElement>
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
                                <DocTableHeadCellElement>Origen (theme)</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Default</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Hover</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Pressed</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Disabled</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Loading</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {buttonVariantRows.map((row) => (
                                <tr key={row.variant}>
                                    <DocTableCellElement>{row.variant}</DocTableCellElement>
                                    <DocTableCellElement>{row.source}</DocTableCellElement>
                                    <DocTableCellElement>{row.default}</DocTableCellElement>
                                    <DocTableCellElement>{row.hover}</DocTableCellElement>
                                    <DocTableCellElement>{row.pressed}</DocTableCellElement>
                                    <DocTableCellElement>{row.disabled}</DocTableCellElement>
                                    <DocTableCellElement>{row.loading}</DocTableCellElement>
                                </tr>
                            ))}
                        </tbody>
                    </DocTableElement>
                </DocTableWrapperElement>
            </DocSectionBlock>

            <DocSectionBlock title="Preview">
                <DocPreviewElement>
                    <DocPreviewColumnElement>
                        {buttonMainVariants.map((variant) => (
                            <ButtonVariantPreview key={variant} variant={variant} />
                        ))}
                        {buttonStatusVariants.map((variant) => (
                            <ButtonVariantPreview key={variant} variant={variant} />
                        ))}
                    </DocPreviewColumnElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Custom size (px)">
                <DocPreviewElement>
                    <DocButtonRowElement>
                        <Button fontSize={18} height={48} width={200}>
                            Custom 200×48
                        </Button>
                        <Button variant="secondary" fontSize={12} height={32} width={120}>
                            Custom 120×32
                        </Button>
                        <Button variant="ghost" fontSize={20} height={56} width={240}>
                            Custom 240×56
                        </Button>
                    </DocButtonRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="With icon">
                <DocPreviewElement>
                    <DocButtonRowElement>
                        <Button icon={<ArrowForwardIcon />}>Continuar</Button>
                        <Button variant="secondary" size="L" icon={<ArrowForwardIcon />}>
                            Continuar
                        </Button>
                        <Button variant="ghost" icon={<DownloadIcon />}>
                            Descargar
                        </Button>
                        <Button variant="danger" icon={<ArrowForwardIcon />} disabled>
                            Continuar
                        </Button>
                    </DocButtonRowElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
