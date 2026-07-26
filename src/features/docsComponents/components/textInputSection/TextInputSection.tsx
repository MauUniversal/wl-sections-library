import { MailIcon, SearchIcon } from "@assets/icons";
import { TextInput } from "@shared/ui/inputs/textInput/TextInput";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
    DocPreviewElement,
    DocPreviewGridElement,
    DocTableCellElement,
    DocTableElement,
    DocTableHeadCellElement,
    DocTableWrapperElement,
} from "../docSection/DocSection.elements";
import { textInputProps, textInputTypes, textInputUsageCode } from "../../data";

export const TextInputSection = () => {
    return (
        <DocSection
            title="TextInput"
            description="Campo de texto del design system (text, email, password, number, tel). Altura 44px, padding 0 14px, font 13/400. El borde default usa color.border.field y cambia según hover, focus, error, success, disabled y readOnly."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={textInputUsageCode} />
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
                            {textInputProps.map((prop) => (
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

            <DocSectionBlock title="Types">
                <DocPreviewElement>
                    <DocPreviewGridElement>
                        {textInputTypes.map((type) => (
                            <TextInput
                                key={type}
                                type={type}
                                label={type}
                                placeholder="Placeholder"
                                helperText="Helper text"
                                showPasswordToggle={type === "password"}
                                fullWidth
                            />
                        ))}
                    </DocPreviewGridElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="States">
                <DocPreviewElement>
                    <DocPreviewGridElement>
                        <TextInput
                            label="Default"
                            placeholder="Placeholder"
                            helperText="Helper text"
                            fullWidth
                        />
                        <TextInput
                            label="Filled"
                            defaultValue="Value"
                            helperText="Helper text"
                            fullWidth
                        />
                        <TextInput
                            label="Success"
                            defaultValue="Value"
                            success="Looks good."
                            fullWidth
                        />
                        <TextInput
                            label="Error"
                            defaultValue="Value"
                            error="This field is required."
                            fullWidth
                        />
                        <TextInput
                            label="Disabled"
                            placeholder="Placeholder"
                            helperText="Helper text"
                            disabled
                            fullWidth
                        />
                        <TextInput
                            label="Read only"
                            defaultValue="Value"
                            helperText="Read-only field."
                            readOnly
                            fullWidth
                        />
                        <TextInput
                            label="Required"
                            required
                            placeholder="Placeholder"
                            helperText="Helper text"
                            fullWidth
                        />
                        <TextInput
                            placeholder="Without label"
                            helperText="Helper text"
                            fullWidth
                        />
                        <TextInput placeholder="Minimal" fullWidth />
                        <TextInput
                            label="Leading icon"
                            placeholder="Email"
                            leadingIcon={<MailIcon />}
                            helperText="Helper text"
                            fullWidth
                        />
                        <TextInput
                            label="Trailing icon"
                            placeholder="Search"
                            trailingIcon={<SearchIcon />}
                            helperText="Helper text"
                            fullWidth
                        />
                        <TextInput
                            type="password"
                            label="Password + ojito"
                            placeholder="••••••••"
                            showPasswordToggle
                            helperText="Toggle visibility"
                            fullWidth
                        />
                    </DocPreviewGridElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
