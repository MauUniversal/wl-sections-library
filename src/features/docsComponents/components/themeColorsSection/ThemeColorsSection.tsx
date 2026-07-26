import { useTheme } from "styled-components";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import { DocPreviewElement } from "../docSection/DocSection.elements";
import {
    ColorInteractiveRowElement,
    ColorScaleRowElement,
    ColorSemanticRowElement,
    ColorSwatchCardElement,
    ColorSwatchElement,
    ColorSwatchLabelElement,
    ColorSwatchMetaElement,
    ColorSwatchValueElement,
    ColorTokenPathElement,
} from "./ThemeColorsSection.elements";

const scaleTones = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;
const interactiveStates = ["default", "hover", "pressed", "disabled", "loading"] as const;

const themeUsageCode = `import { theme } from "@shared/theme/Theme";
// En styled-components: \${({ theme }) => theme.color.primary[500]}

theme.color.brand.primary
theme.color.primary[500]
theme.color.secondary[500]
theme.color.neutral[900]
theme.color.button.primary.default
theme.color.button.secondary.hover
theme.color.danger.default
theme.color.danger.loading
theme.color.danger.soft.background
theme.color.success.soft.border
theme.color.warning.soft.text
theme.color.info.soft.background
theme.color.text.primary
theme.color.background.primary
theme.color.overlay
theme.color.border.primary
theme.color.border.field
theme.color.text.placeholder`;

interface ColorSwatchProps {
    label: string;
    value: string;
}

const ColorSwatch = ({ label, value }: ColorSwatchProps) => {
    return (
        <ColorSwatchCardElement>
            <ColorSwatchElement $color={value} />
            <ColorSwatchMetaElement>
                <ColorSwatchLabelElement>{label}</ColorSwatchLabelElement>
                <ColorSwatchValueElement title={value}>{value}</ColorSwatchValueElement>
            </ColorSwatchMetaElement>
        </ColorSwatchCardElement>
    );
};

export const ThemeColorsSection = () => {
    const theme = useTheme();
    const { color } = theme;

    return (
        <DocSection
            title="Theme Colors"
            description="Paleta completa del theme. Las escalas primary / secondary / neutral (50–900) se mantienen para uso general. Los botones usan color.button.primary/secondary y danger/success/warning con estados default/hover/pressed/disabled/loading. brand, text.tertiary y background.tertiary dependen de la marca activa."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={themeUsageCode} />
            </DocSectionBlock>

            <DocSectionBlock title="Brand">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.brand</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="primary" value={color.brand.primary} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Primary">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.primary</ColorTokenPathElement>
                    <ColorScaleRowElement>
                        {scaleTones.map((tone) => (
                            <ColorSwatch key={tone} label={tone} value={color.primary[tone]} />
                        ))}
                    </ColorScaleRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Secondary">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.secondary</ColorTokenPathElement>
                    <ColorScaleRowElement>
                        {scaleTones.map((tone) => (
                            <ColorSwatch key={tone} label={tone} value={color.secondary[tone]} />
                        ))}
                    </ColorScaleRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Neutral">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.neutral</ColorTokenPathElement>
                    <ColorScaleRowElement>
                        {scaleTones.map((tone) => (
                            <ColorSwatch key={tone} label={tone} value={color.neutral[tone]} />
                        ))}
                    </ColorScaleRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Button (interactive)">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.button.primary</ColorTokenPathElement>
                    <ColorInteractiveRowElement>
                        {interactiveStates.map((state) => (
                            <ColorSwatch key={state} label={state} value={color.button.primary[state]} />
                        ))}
                    </ColorInteractiveRowElement>
                    <ColorTokenPathElement>color.button.secondary</ColorTokenPathElement>
                    <ColorInteractiveRowElement>
                        {interactiveStates.map((state) => (
                            <ColorSwatch key={state} label={state} value={color.button.secondary[state]} />
                        ))}
                    </ColorInteractiveRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Danger">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.danger</ColorTokenPathElement>
                    <ColorInteractiveRowElement>
                        {interactiveStates.map((state) => (
                            <ColorSwatch key={state} label={state} value={color.danger[state]} />
                        ))}
                        <ColorSwatch label="highlight" value={color.danger.highlight} />
                    </ColorInteractiveRowElement>
                    <ColorTokenPathElement>color.danger.soft</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="text" value={color.danger.soft.text} />
                        <ColorSwatch label="background" value={color.danger.soft.background} />
                        <ColorSwatch label="border" value={color.danger.soft.border} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Success">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.success</ColorTokenPathElement>
                    <ColorInteractiveRowElement>
                        {interactiveStates.map((state) => (
                            <ColorSwatch key={state} label={state} value={color.success[state]} />
                        ))}
                    </ColorInteractiveRowElement>
                    <ColorTokenPathElement>color.success.soft</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="text" value={color.success.soft.text} />
                        <ColorSwatch label="background" value={color.success.soft.background} />
                        <ColorSwatch label="border" value={color.success.soft.border} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Warning">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.warning</ColorTokenPathElement>
                    <ColorInteractiveRowElement>
                        {interactiveStates.map((state) => (
                            <ColorSwatch key={state} label={state} value={color.warning[state]} />
                        ))}
                    </ColorInteractiveRowElement>
                    <ColorTokenPathElement>color.warning.soft</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="text" value={color.warning.soft.text} />
                        <ColorSwatch label="background" value={color.warning.soft.background} />
                        <ColorSwatch label="border" value={color.warning.soft.border} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Info">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.info.soft</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="text" value={color.info.soft.text} />
                        <ColorSwatch label="background" value={color.info.soft.background} />
                        <ColorSwatch label="border" value={color.info.soft.border} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Text">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.text</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="primary" value={color.text.primary} />
                        <ColorSwatch label="secondary" value={color.text.secondary} />
                        <ColorSwatch label="tertiary" value={color.text.tertiary} />
                        <ColorSwatch label="placeholder" value={color.text.placeholder} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Background">
                <DocPreviewElement>
                    <ColorTokenPathElement>color.background</ColorTokenPathElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="primary" value={color.background.primary} />
                        <ColorSwatch label="secondary" value={color.background.secondary} />
                        <ColorSwatch label="tertiary" value={color.background.tertiary} />
                        <ColorSwatch label="quaternary" value={color.background.quaternary} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Overlay & Border">
                <DocPreviewElement>
                    <ColorSemanticRowElement>
                        <ColorSwatch label="overlay" value={color.overlay} />
                        <ColorSwatch label="border.primary" value={color.border.primary} />
                        <ColorSwatch label="border.field" value={color.border.field} />
                    </ColorSemanticRowElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
