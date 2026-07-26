import { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
import type { IconButtonVariant } from "@shared/ui/buttons/iconButton/IconButton.elements";
import { BellIcon, DownloadIcon, MenuIcon, UserIcon } from "@assets/icons";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocButtonRowElement,
    DocPreviewElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
    DocVariantGroupElement,
    DocVariantTitleElement,
} from "../docSection/DocSection.elements";
import {
    iconButtonProps,
    iconButtonShapes,
    iconButtonSizeRows,
    iconButtonSizes,
    iconButtonUsageCode,
    iconButtonVariants,
} from "../../data";

const variantIcons: Record<IconButtonVariant, typeof MenuIcon> = {
    surface: MenuIcon,
    brand: DownloadIcon,
    ghost: UserIcon,
};

export const IconButtonSection = () => {
    return (
        <DocSection
            title="IconButton"
            description="Botón solo-ícono para chrome (header, toolbars). Cuadrado o circular, con badge opcional. aria-label obligatorio."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={iconButtonUsageCode} />
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
                            {iconButtonProps.map((prop) => (
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
                                <DocTableHeadCellElement>Box</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Icon</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {iconButtonSizeRows.map((row) => (
                                <tr key={row.size}>
                                    <DocTableCellElement>{row.size}</DocTableCellElement>
                                    <DocTableCellElement>{row.box}</DocTableCellElement>
                                    <DocTableCellElement>{row.icon}</DocTableCellElement>
                                </tr>
                            ))}
                        </tbody>
                    </DocTableElement>
                </DocTableWrapperElement>
            </DocSectionBlock>

            <DocSectionBlock title="Preview">
                <DocPreviewElement>
                    {iconButtonVariants.map((variant) => {
                        const Icon = variantIcons[variant];

                        return (
                            <DocVariantGroupElement key={variant}>
                                <DocVariantTitleElement>{variant}</DocVariantTitleElement>
                                <DocButtonRowElement>
                                    {iconButtonSizes.map((size) => (
                                        <IconButton
                                            key={size}
                                            icon={<Icon />}
                                            variant={variant}
                                            size={size}
                                            aria-label={`${variant} ${size}`}
                                        />
                                    ))}
                                    {iconButtonShapes.map((shape) => (
                                        <IconButton
                                            key={shape}
                                            icon={<Icon />}
                                            variant={variant}
                                            shape={shape}
                                            aria-label={`${variant} ${shape}`}
                                        />
                                    ))}
                                    <IconButton
                                        icon={<Icon />}
                                        variant={variant}
                                        disabled
                                        aria-label={`${variant} disabled`}
                                    />
                                </DocButtonRowElement>
                            </DocVariantGroupElement>
                        );
                    })}

                    <DocVariantGroupElement>
                        <DocVariantTitleElement>badge</DocVariantTitleElement>
                        <DocButtonRowElement>
                            <IconButton
                                icon={<BellIcon />}
                                shape="circle"
                                badge={2}
                                aria-label="Notificaciones"
                            />
                            <IconButton
                                icon={<BellIcon />}
                                badge={12}
                                aria-label="Notificaciones 12"
                            />
                            <IconButton
                                icon={<BellIcon />}
                                badge
                                aria-label="Notificaciones nuevas"
                            />
                        </DocButtonRowElement>
                    </DocVariantGroupElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
