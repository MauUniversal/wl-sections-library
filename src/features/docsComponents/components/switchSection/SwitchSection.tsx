import { useState } from "react";
import { Switch } from "@shared/ui/inputs/switch/Switch";
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
import { switchProps, switchUsageCode } from "../../data";

export const SwitchSection = () => {
    const [checked, setChecked] = useState(true);

    return (
        <DocSection
            title="Switch"
            description="Toggle on/off reutilizable. Track brand cuando está activo; label opcional a la derecha."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={switchUsageCode} />
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
                            {switchProps.map((prop) => (
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
                        <Switch checked={checked} onChange={setChecked} label="Cuotas" />
                        <Switch
                            checked={!checked}
                            onChange={(value) => setChecked(!value)}
                            label="Inverso"
                        />
                        <Switch checked disabled onChange={() => undefined} label="Disabled" />
                    </DocButtonRowElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
