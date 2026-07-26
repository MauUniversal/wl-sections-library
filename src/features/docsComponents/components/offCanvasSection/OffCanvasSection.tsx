import { useState } from "react";
import { Button } from "@shared/ui/buttons/button/Button";
import { OffCanvas, type OffCanvasSide } from "@shared/ui/overlays/offCanvas/OffCanvas";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocButtonRowElement,
    DocPreviewElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
} from "../docSection/DocSection.elements";
import { offCanvasProps, offCanvasSides, offCanvasUsageCode } from "../../data";
import { OffCanvasDocPanelElement } from "./OffCanvasSection.elements";

export const OffCanvasSection = () => {
    const [open, setOpen] = useState(false);
    const [side, setSide] = useState<OffCanvasSide>("left");

    const openFrom = (nextSide: OffCanvasSide) => {
        setSide(nextSide);
        setOpen(true);
    };

    return (
        <DocSection
            title="OffCanvas"
            description="Panel deslizante con backdrop. Sale desde left o right, bloquea scroll del body y cierra con overlay o Escape."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={offCanvasUsageCode} />
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
                            {offCanvasProps.map((prop) => (
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
                    <DocButtonRowElement>
                        {offCanvasSides.map((value) => (
                            <Button key={value} size="S" onClick={() => openFrom(value)}>
                                Abrir {value}
                            </Button>
                        ))}
                    </DocButtonRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <OffCanvas
                open={open}
                onClose={() => setOpen(false)}
                side={side}
                aria-label={`OffCanvas ${side}`}
            >
                <OffCanvasDocPanelElement>
                    Panel desde {side}. Tocá el backdrop o Escape para cerrar.
                </OffCanvasDocPanelElement>
            </OffCanvas>
        </DocSection>
    );
};
