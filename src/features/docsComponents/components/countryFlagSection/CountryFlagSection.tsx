import {
    CountryFlag,
    type CountryCode,
} from "@shared/ui/flags/countryFlag/CountryFlag";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocPreviewElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
} from "../docSection/DocSection.elements";
import {
    countryFlagPreviewCodes,
    countryFlagProps,
    countryFlagUsageCode,
} from "../../data";
import {
    CountryFlagPreviewGridElement,
    CountryFlagPreviewIconElement,
    CountryFlagPreviewItemElement,
    CountryFlagPreviewLabelElement,
} from "./CountryFlagSection.elements";

export const CountryFlagSection = () => {
    return (
        <DocSection
            title="CountryFlag"
            description="Bandera SVG por código de país (country-flag-icons 3x2). Usar siempre este wrapper, no importar la lib directo en features."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={countryFlagUsageCode} />
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
                            {countryFlagProps.map((prop) => (
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
                    <CountryFlagPreviewGridElement>
                        {countryFlagPreviewCodes.map((code) => (
                            <CountryFlagPreviewItemElement key={code}>
                                <CountryFlagPreviewIconElement>
                                    <CountryFlag code={code as CountryCode} />
                                </CountryFlagPreviewIconElement>
                                <CountryFlagPreviewLabelElement>{code}</CountryFlagPreviewLabelElement>
                            </CountryFlagPreviewItemElement>
                        ))}
                    </CountryFlagPreviewGridElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
