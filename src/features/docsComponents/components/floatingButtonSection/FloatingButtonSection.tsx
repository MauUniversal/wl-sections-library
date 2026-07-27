import { FloatingButton } from "@shared/ui/buttons/floatingButton/FloatingButton";
import { BellIcon, ChatIcon, TicketIcon } from "@assets/icons";
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
    floatingButtonProps,
    floatingButtonSizeRows,
    floatingButtonSizes,
    floatingButtonUsageCode,
    floatingButtonVariants,
} from "../../data";

export const FloatingButtonSection = () => {
    return (
        <DocSection
            title="FloatingButton"
            description="Botón flotante fijo al borde del viewport (por defecto 100px desde el bottom). Reutilizable con cualquier ícono de @assets/icons. aria-label obligatorio."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={floatingButtonUsageCode} />
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
                            {floatingButtonProps.map((prop) => (
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
                            {floatingButtonSizeRows.map((row) => (
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
                    {floatingButtonVariants.map((variant) => (
                        <DocVariantGroupElement key={variant}>
                            <DocVariantTitleElement>{variant}</DocVariantTitleElement>
                            <DocButtonRowElement>
                                {floatingButtonSizes.map((size) => (
                                    <FloatingButton
                                        key={size}
                                        position="relative"
                                        icon={<TicketIcon />}
                                        variant={variant}
                                        size={size}
                                        aria-label={`${variant} ${size}`}
                                    />
                                ))}
                                <FloatingButton
                                    position="relative"
                                    icon={<TicketIcon />}
                                    variant={variant}
                                    disabled
                                    aria-label={`${variant} disabled`}
                                />
                            </DocButtonRowElement>
                        </DocVariantGroupElement>
                    ))}

                    <DocVariantGroupElement>
                        <DocVariantTitleElement>iconos</DocVariantTitleElement>
                        <DocButtonRowElement>
                            <FloatingButton
                                position="relative"
                                icon={<TicketIcon />}
                                aria-label="Tickets"
                            />
                            <FloatingButton
                                position="relative"
                                icon={<ChatIcon />}
                                aria-label="Chat"
                            />
                            <FloatingButton
                                position="relative"
                                icon={<BellIcon />}
                                variant="surface"
                                aria-label="Alertas"
                            />
                        </DocButtonRowElement>
                    </DocVariantGroupElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
