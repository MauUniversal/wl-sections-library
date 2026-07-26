import type { ComponentType, SVGProps } from "react";
import {
    ArrowForwardIcon,
    BellIcon,
    BookOpenIcon,
    BroadcastIcon,
    ChariotIcon,
    ChatbubbleIcon,
    ChatIcon,
    ChevronBackIcon,
    ChevronDownIcon,
    ChevronForwardIcon,
    CirclesFourIcon,
    CloseIcon,
    DicesIcon,
    DocumentTextIcon,
    DownloadIcon,
    EyeIcon,
    EyeOffIcon,
    FacebookIcon,
    FlagIcon,
    GiftIcon,
    GreyhoundIcon,
    HeadphonesIcon,
    HorseRiderIcon,
    LoadingSpinnerIcon,
    MailIcon,
    MenuIcon,
    PercentIcon,
    PlayIcon,
    SearchIcon,
    SparklesIcon,
    StarIcon,
    TicketIcon,
    TrendingUpIcon,
    TrophyIcon,
    TvIcon,
    TwitterIcon,
    UserIcon,
    UsersIcon,
    WalletIcon,
    YoutubeIcon,
} from "@assets/icons";
import { Button } from "@shared/ui/buttons/button/Button";
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
import { iconsRules, iconsUsageCode } from "../../data";
import {
    IconCardElement,
    IconNameElement,
    IconPreviewElement,
    IconsGridElement,
} from "./IconsSection.elements";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const reactIconsCatalog: { name: string; Icon: IconComponent }[] = [
    { name: "MenuIcon", Icon: MenuIcon },
    { name: "CloseIcon", Icon: CloseIcon },
    { name: "WalletIcon", Icon: WalletIcon },
    { name: "DownloadIcon", Icon: DownloadIcon },
    { name: "BellIcon", Icon: BellIcon },
    { name: "UserIcon", Icon: UserIcon },
    { name: "SearchIcon", Icon: SearchIcon },
    { name: "DicesIcon", Icon: DicesIcon },
    { name: "TrophyIcon", Icon: TrophyIcon },
    { name: "FlagIcon", Icon: FlagIcon },
    { name: "CirclesFourIcon", Icon: CirclesFourIcon },
    { name: "FacebookIcon", Icon: FacebookIcon },
    { name: "TwitterIcon", Icon: TwitterIcon },
    { name: "YoutubeIcon", Icon: YoutubeIcon },
    { name: "MailIcon", Icon: MailIcon },
    { name: "TvIcon", Icon: TvIcon },
    { name: "BookOpenIcon", Icon: BookOpenIcon },
    { name: "ArrowForwardIcon", Icon: ArrowForwardIcon },
    { name: "PlayIcon", Icon: PlayIcon },
    { name: "TicketIcon", Icon: TicketIcon },
    { name: "EyeIcon", Icon: EyeIcon },
    { name: "EyeOffIcon", Icon: EyeOffIcon },
    { name: "LoadingSpinnerIcon", Icon: LoadingSpinnerIcon },
    { name: "ChevronDownIcon", Icon: ChevronDownIcon },
    { name: "ChevronBackIcon", Icon: ChevronBackIcon },
    { name: "ChevronForwardIcon", Icon: ChevronForwardIcon },
    { name: "SparklesIcon", Icon: SparklesIcon },
    { name: "UsersIcon", Icon: UsersIcon },
    { name: "DocumentTextIcon", Icon: DocumentTextIcon },
    { name: "PercentIcon", Icon: PercentIcon },
    { name: "TrendingUpIcon", Icon: TrendingUpIcon },
    { name: "GiftIcon", Icon: GiftIcon },
    { name: "ChatbubbleIcon", Icon: ChatbubbleIcon },
    { name: "BroadcastIcon", Icon: BroadcastIcon },
    { name: "HeadphonesIcon", Icon: HeadphonesIcon },
    { name: "ChatIcon", Icon: ChatIcon },
];

const customIconsCatalog: { name: string; Icon: IconComponent }[] = [
    { name: "StarIcon", Icon: StarIcon },
    { name: "HorseRiderIcon", Icon: HorseRiderIcon },
    { name: "GreyhoundIcon", Icon: GreyhoundIcon },
    { name: "ChariotIcon", Icon: ChariotIcon },
];

const IconCard = ({ name, Icon }: { name: string; Icon: IconComponent }) => {
    return (
        <IconCardElement>
            <IconPreviewElement>
                <Icon />
            </IconPreviewElement>
            <IconNameElement>{name}</IconNameElement>
        </IconCardElement>
    );
};

export const IconsSection = () => {
    return (
        <DocSection
            title="Icons"
            description="Barrel central en @assets/icons. Incluye alias de react-icons y SVGs custom (Figma). Siempre importá desde ahí, nunca react-icons directo."
        >
            <DocSectionBlock title="Uso">
                <DocCodeBlock code={iconsUsageCode} />
            </DocSectionBlock>

            <DocSectionBlock title="Reglas">
                <DocTableWrapperElement>
                    <DocTableElement>
                        <thead>
                            <tr>
                                <DocTableHeadCellElement>Regla</DocTableHeadCellElement>
                                <DocTableHeadCellElement>Detalle</DocTableHeadCellElement>
                            </tr>
                        </thead>
                        <tbody>
                            {iconsRules.map((row) => (
                                <tr key={row.rule}>
                                    <DocTableCellElement>{row.rule}</DocTableCellElement>
                                    <DocTableCellElement>{row.detail}</DocTableCellElement>
                                </tr>
                            ))}
                        </tbody>
                    </DocTableElement>
                </DocTableWrapperElement>
            </DocSectionBlock>

            <DocSectionBlock title="React Icons (aliases)">
                <DocPreviewElement>
                    <IconsGridElement>
                        {reactIconsCatalog.map(({ name, Icon }) => (
                            <IconCard key={name} name={name} Icon={Icon} />
                        ))}
                    </IconsGridElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="Custom (SVG)">
                <DocPreviewElement>
                    <IconsGridElement>
                        {customIconsCatalog.map(({ name, Icon }) => (
                            <IconCard key={name} name={name} Icon={Icon} />
                        ))}
                    </IconsGridElement>
                </DocPreviewElement>
            </DocSectionBlock>

            <DocSectionBlock title="En Button">
                <DocPreviewElement>
                    <DocButtonRowElement>
                        <Button icon={<DownloadIcon />}>Descargar</Button>
                        <Button variant="secondary" icon={<ArrowForwardIcon />}>
                            Continuar
                        </Button>
                        <Button variant="ghost" icon={<HorseRiderIcon />}>
                            Carreras
                        </Button>
                    </DocButtonRowElement>
                </DocPreviewElement>
            </DocSectionBlock>
        </DocSection>
    );
};
