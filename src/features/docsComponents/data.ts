import type { ButtonVariant } from "@shared/ui/buttons/button/Button.elements";

export const buttonSizes = ["S", "M", "L", "XL"] as const;

export const buttonVariants: ButtonVariant[] = [
    "primary",
    "secondary",
    "ghost",
    "contrast",
    "danger",
    "success",
    "warning",
];

export const buttonMainVariants: ButtonVariant[] = [
    "primary",
    "secondary",
    "ghost",
    "contrast",
];

export const buttonStatusVariants: ButtonVariant[] = [
    "danger",
    "success",
    "warning",
];

export const buttonUsageCode = `import { Button } from "@shared/ui/buttons/button/Button";
import { ArrowForwardIcon } from "@assets/icons";

<Button>Button</Button>
<Button variant="secondary" size="L">Guardar</Button>
<Button variant="ghost" size="S">Cancelar</Button>
<Button variant="contrast">Emitir ticket</Button>
<Button variant="danger" onClick={handleDelete}>Eliminar</Button>
<Button variant="success" fullWidth>Confirmar</Button>
<Button variant="warning" disabled>Warning</Button>
<Button loading>Guardando</Button>
<Button icon={<ArrowForwardIcon />}>Continuar</Button>
<Button fontSize={18} height={48} width={200}>Custom</Button>`;

export const buttonProps = [
    {
        name: "variant",
        type: '"primary" | "secondary" | "ghost" | "contrast" | "danger" | "success" | "warning"',
        default: '"primary"',
        description: "Estilo/color del botón. contrast = fondo claro + texto oscuro.",
    },
    {
        name: "size",
        type: '"S" | "M" | "L" | "XL"',
        default: '"M"',
        description: "Preset de font, altura y ancho. Se sobreescribe con fontSize/height/width.",
    },
    {
        name: "fontSize",
        type: "number",
        default: "—",
        description: "Font-size en px (opcional). Sobreescribe el font del preset size.",
    },
    {
        name: "height",
        type: "number",
        default: "—",
        description: "Altura en px (opcional). Sobreescribe la altura del preset size.",
    },
    {
        name: "width",
        type: "number",
        default: "—",
        description: "Ancho en px (opcional). Sobreescribe el ancho del preset. Ignorado si fullWidth.",
    },
    {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        description: "Ocupa el 100% del ancho disponible.",
    },
    {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Estado loading: spinner, bg loading del theme y bloquea interacción.",
    },
    {
        name: "icon",
        type: "ReactNode",
        default: "—",
        description: "Icono opcional a la derecha del texto. No se muestra si loading es true.",
    },
    {
        name: "children",
        type: "ReactNode",
        default: "—",
        description: "Contenido del botón.",
    },
    {
        name: "...rest",
        type: "ButtonHTMLAttributes",
        default: "—",
        description: "Props nativas de <button> (onClick, type, disabled, aria-*, etc.).",
    },
] as const;

export const buttonSizeRows = [
    { size: "S", font: "13px", height: "36px", width: "164px" },
    { size: "M", font: "14px", height: "44px", width: "196px" },
    { size: "L", font: "15px", height: "52px", width: "216px" },
    { size: "XL", font: "16px", height: "60px", width: "244px" },
] as const;

export const buttonVariantRows = [
    {
        variant: "primary",
        source: "color.button.primary",
        default: "#E91E91",
        hover: "#EC3EA0",
        pressed: "#B61771",
        disabled: "#811854",
        loading: "#E91E91",
    },
    {
        variant: "secondary",
        source: "color.button.secondary",
        default: "#8B3A8B",
        hover: "#9B569B",
        pressed: "#6C2D6C",
        disabled: "#502650",
        loading: "#8B3A8B",
    },
    {
        variant: "ghost",
        source: "color.button.primary (borde + texto)",
        default: "#E91E91",
        hover: "#E91E91",
        pressed: "#E91E91",
        disabled: "opacity 0.55",
        loading: "#E91E91",
    },
    {
        variant: "danger",
        source: "color.danger",
        default: "#DC2626",
        hover: "#E14444",
        pressed: "#AC1E1E",
        disabled: "#7B1C1C",
        loading: "#DC2626",
    },
    {
        variant: "success",
        source: "color.success",
        default: "#22C55E",
        hover: "#41CD75",
        pressed: "#1B9A49",
        disabled: "#1A6F39",
        loading: "#22C55E",
    },
    {
        variant: "warning",
        source: "color.warning",
        default: "#FBBF24",
        hover: "#FCC843",
        pressed: "#C4951C",
        disabled: "#8B6B1B",
        loading: "#FBBF24",
    },
] as const;

export const iconButtonSizes = ["S", "M", "L"] as const;

export const iconButtonVariants = ["surface", "brand", "ghost"] as const;

export const iconButtonShapes = ["rounded", "circle"] as const;

export const iconButtonUsageCode = `import { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
import { BellIcon, DownloadIcon, MenuIcon, UserIcon } from "@assets/icons";

<IconButton icon={<MenuIcon />} aria-label="Menú" />
<IconButton icon={<DownloadIcon />} variant="brand" aria-label="Depositar" />
<IconButton icon={<BellIcon />} shape="circle" badge={2} aria-label="Notificaciones" />
<IconButton icon={<UserIcon />} variant="ghost" aria-label="Perfil" />
<IconButton icon={<MenuIcon />} size="L" width={44} height={44} iconSize={22} aria-label="Custom" />`;

export const iconButtonProps = [
    {
        name: "icon",
        type: "ReactNode",
        default: "—",
        description: "Ícono del botón (obligatorio).",
    },
    {
        name: "aria-label",
        type: "string",
        default: "—",
        description: "Label accesible (obligatorio; es icon-only).",
    },
    {
        name: "variant",
        type: '"surface" | "brand" | "ghost"',
        default: '"surface"',
        description: "surface = fondo sutil, brand = marca + glow, ghost = sin fondo.",
    },
    {
        name: "shape",
        type: '"rounded" | "circle"',
        default: '"rounded"',
        description: "rounded usa radii.medium (8px), circle es 50%.",
    },
    {
        name: "size",
        type: '"S" | "M" | "L"',
        default: '"M"',
        description: "Preset cuadrado: S 32/16, M 40/20, L 48/24 (box/icon).",
    },
    {
        name: "width",
        type: "number",
        default: "—",
        description: "Ancho custom en px.",
    },
    {
        name: "height",
        type: "number",
        default: "—",
        description: "Alto custom en px.",
    },
    {
        name: "iconSize",
        type: "number",
        default: "—",
        description: "Tamaño del ícono en px.",
    },
    {
        name: "badge",
        type: "number | string | boolean",
        default: "—",
        description: "Badge superior derecho. true = punto; número/string = contenido.",
    },
    {
        name: "...rest",
        type: "ButtonHTMLAttributes",
        default: "—",
        description: "Props nativas de <button> (onClick, disabled, etc.).",
    },
] as const;

export const iconButtonSizeRows = [
    { size: "S", box: "32px", icon: "16px" },
    { size: "M", box: "40px", icon: "20px" },
    { size: "L", box: "48px", icon: "24px" },
] as const;

export const floatingButtonUsageCode = `import { FloatingButton } from "@shared/ui/buttons/floatingButton/FloatingButton";
import { TicketIcon, ChatIcon, BellIcon } from "@assets/icons";

<FloatingButton icon={<TicketIcon />} aria-label="Tickets" onClick={handleOpen} />
<FloatingButton icon={<ChatIcon />} variant="surface" side="left" aria-label="Chat" />
<FloatingButton icon={<BellIcon />} size="L" offset={24} aria-label="Alertas" />`;

export const floatingButtonProps = [
    {
        name: "icon",
        type: "ReactNode",
        default: "—",
        description: "Ícono del botón (cualquier icono de @assets/icons).",
    },
    {
        name: "aria-label",
        type: "string",
        default: "—",
        description: "Label accesible (obligatorio; es icon-only).",
    },
    {
        name: "variant",
        type: '"brand" | "surface"',
        default: '"brand"',
        description: "brand = color de marca; surface = fondo sutil.",
    },
    {
        name: "side",
        type: '"right" | "left"',
        default: '"right"',
        description: "Lado de la pantalla donde flota el botón.",
    },
    {
        name: "size",
        type: '"M" | "L"',
        default: '"M"',
        description: "Preset: M 56/28, L 64/32 (box/icon).",
    },
    {
        name: "position",
        type: '"fixed" | "relative"',
        default: '"fixed"',
        description: "fixed = flota en viewport; relative = inline (útil en docs/preview).",
    },
    {
        name: "offset",
        type: "number",
        default: "16",
        description: "Distancia al borde lateral en px (solo con position fixed).",
    },
    {
        name: "bottomOffset",
        type: "number",
        default: "—",
        description: "Si se pasa, fija el botón a N px del bottom. Sin prop = centrado vertical.",
    },
    {
        name: "iconSize",
        type: "number",
        default: "—",
        description: "Tamaño del ícono en px (override del preset).",
    },
    {
        name: "...rest",
        type: "ButtonHTMLAttributes",
        default: "—",
        description: "Props nativas de <button> (onClick, disabled, etc.).",
    },
] as const;

export const floatingButtonVariants = ["brand", "surface"] as const;
export const floatingButtonSizes = ["M", "L"] as const;

export const floatingButtonSizeRows = [
    { size: "M", box: "56px", icon: "28px" },
    { size: "L", box: "64px", icon: "32px" },
] as const;

export const textInputTypes = ["text", "email", "password", "number", "tel"] as const;

export const textInputUsageCode = `import { TextInput } from "@shared/ui/inputs/textInput/TextInput";
import { MailIcon, SearchIcon } from "@assets/icons";

<TextInput label="Label" placeholder="Placeholder" helperText="Helper text" />
<TextInput type="email" label="Email" placeholder="name@mail.com" />
<TextInput type="password" label="Password" showPasswordToggle />
<TextInput type="number" label="Amount" />
<TextInput type="tel" label="Phone" placeholder="+54 11 1234-5678" />
<TextInput label="Required" required helperText="Helper text" />
<TextInput error="This field is required." label="Error" defaultValue="Value" />
<TextInput success="Looks good." label="Success" defaultValue="Value" />
<TextInput leadingIcon={<MailIcon />} label="With icon" placeholder="Email" />
<TextInput trailingIcon={<SearchIcon />} label="Search" placeholder="Search" />
<TextInput width={280} label="Fixed width" placeholder="280px" />
<TextInput fullWidth maxWidth={400} label="Full + max" placeholder="100% hasta 400px" />
<TextInput disabled label="Disabled" placeholder="Placeholder" helperText="Helper text" />
<TextInput readOnly label="Read only" defaultValue="Value" helperText="Read-only field." />`;

export const textInputProps = [
    {
        name: "type",
        type: '"text" | "email" | "password" | "number" | "tel"',
        default: '"text"',
        description: "Tipo nativo del input.",
    },
    {
        name: "label",
        type: "string",
        default: "—",
        description: "Label arriba del campo.",
    },
    {
        name: "helperText",
        type: "string",
        default: "—",
        description: "Texto de ayuda debajo del campo.",
    },
    {
        name: "error",
        type: "boolean | string",
        default: "—",
        description: "Estado error. Si es string, se muestra como helper.",
    },
    {
        name: "success",
        type: "boolean | string",
        default: "—",
        description: "Estado success. Si es string, se muestra como helper.",
    },
    {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Marca el label con * rojo y setea required nativo.",
    },
    {
        name: "showPasswordToggle",
        type: "boolean",
        default: "false",
        description: "Solo password: muestra el ojito para revelar/ocultar.",
    },
    {
        name: "leadingIcon",
        type: "ReactNode",
        default: "—",
        description: "Icono a la izquierda del campo.",
    },
    {
        name: "trailingIcon",
        type: "ReactNode",
        default: "—",
        description: "Icono a la derecha. En password con toggle, gana el ojito.",
    },
    {
        name: "width",
        type: "number",
        default: "—",
        description: "Ancho en px (opcional). Sin esto, el input ocupa 100%.",
    },
    {
        name: "maxWidth",
        type: "number",
        default: "—",
        description: "max-width en px. Ideal con fullWidth / width 100% para limitar el ancho.",
    },
    {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        description: "Fuerza width 100%. Gana sobre width si ambos están seteados. Combina con maxWidth.",
    },
    {
        name: "...rest",
        type: "InputHTMLAttributes",
        default: "—",
        description: "Props nativas de <input> (name, value, onChange, onBlur, placeholder, disabled, readOnly, etc.).",
    },
] as const;

export const tagSizes = ["S", "M", "L"] as const;

export const tagVariants = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
] as const;

export const tagMainVariants = [
    "default",
    "primary",
    "secondary",
] as const;

export const tagSoftVariants = [
    "success",
    "warning",
    "error",
] as const;

export const tagStatusVariants = [
    "info",
] as const;

export const tagUsageCode = `import { Tag } from "@shared/ui/tags/tag/Tag";

<Tag>Default</Tag>
<Tag variant="primary" size="S">Primary</Tag>
<Tag variant="secondary" size="M">Secondary</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="warning" size="L">Warning</Tag>
<Tag variant="error">Error</Tag>
<Tag variant="info">Info</Tag>
<Tag width={120} height={32} padding={16}>Custom</Tag>`;

export const tagProps = [
    {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "success" | "warning" | "error" | "info"',
        default: '"default"',
        description: "Estilo visual de la tag.",
    },
    {
        name: "size",
        type: '"S" | "M" | "L"',
        default: '"M"',
        description: "Altura: S 24px, M 28px, L 34px. Font: S 11px, M 12px, L 13px. Ancho fijo 92px.",
    },
    {
        name: "width",
        type: "number",
        default: "92",
        description: "Ancho custom en px. Sobrescribe el ancho por defecto.",
    },
    {
        name: "height",
        type: "number",
        default: "—",
        description: "Alto custom en px. Sobrescribe la altura del size.",
    },
    {
        name: "padding",
        type: "number",
        default: "12",
        description: "Padding horizontal custom en px (vertical queda en 0).",
    },
    {
        name: "children",
        type: "ReactNode",
        default: "—",
        description: "Texto / contenido de la tag.",
    },
    {
        name: "...rest",
        type: "HTMLAttributes",
        default: "—",
        description: "Props nativas del span (className, onClick, aria-*, etc.).",
    },
] as const;

export const tagSizeRows = [
    { size: "S", height: "24px", width: "92px", font: "11px", weight: "600" },
    { size: "M", height: "28px", width: "92px", font: "12px", weight: "600" },
    { size: "L", height: "34px", width: "92px", font: "13px", weight: "600" },
] as const;

export const tagVariantRows = [
    { variant: "default", text: "text.primary", background: "transparent", border: "border.field (#343434)" },
    { variant: "primary", text: "primary.900", background: "primary.100", border: "primary.400" },
    { variant: "secondary", text: "secondary.900", background: "secondary.100", border: "secondary.400" },
    { variant: "success", text: "success.soft.text", background: "success.soft.background", border: "success.soft.border" },
    { variant: "warning", text: "warning.soft.text", background: "warning.soft.background", border: "warning.soft.border" },
    { variant: "error", text: "danger.soft.text", background: "danger.soft.background", border: "danger.soft.border" },
    { variant: "info", text: "info.soft.text", background: "info.soft.background", border: "info.soft.border" },
] as const;

export const carouselUsageCode = `import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import { Tag } from "@shared/ui/tags/tag/Tag";

<Carousel gap={16} slideSize="70%" showDots>
  <Tag variant="primary">Slide 1</Tag>
  <Tag variant="secondary">Slide 2</Tag>
  <Tag variant="success">Slide 3</Tag>
  <Tag variant="info">Slide 4</Tag>
</Carousel>

<Carousel loop showArrows showDots slideSize="50%">
  <div>Card A</div>
  <div>Card B</div>
  <div>Card C</div>
</Carousel>`;

export const carouselProps = [
    {
        name: "children",
        type: "ReactNode",
        default: "—",
        description: "Cada hijo se convierte en un slide.",
    },
    {
        name: "loop",
        type: "boolean",
        default: "false",
        description: "Loop infinito de slides.",
    },
    {
        name: "align",
        type: '"start" | "center" | "end" | number',
        default: '"start"',
        description: "Alineación de los slides en el viewport.",
    },
    {
        name: "dragFree",
        type: "boolean",
        default: "false",
        description: "Arrastre libre sin snap estricto.",
    },
    {
        name: "gap",
        type: "number",
        default: "16",
        description: "Separación entre slides en px.",
    },
    {
        name: "slideSize",
        type: "string",
        default: '"80%"',
        description: "Ancho de cada slide (CSS flex-basis), ej. 80%, 200px, 50%.",
    },
    {
        name: "showArrows",
        type: "boolean",
        default: "false",
        description: "Muestra flechas prev/next (IconButton).",
    },
    {
        name: "showDots",
        type: "boolean",
        default: "false",
        description: "Muestra indicadores de posición.",
    },
    {
        name: "dotsOverlay",
        type: "boolean",
        default: "false",
        description: "Coloca los dots encima del carousel (abajo al centro).",
    },
    {
        name: "dotsBottom",
        type: "number",
        default: "12",
        description: "Offset inferior de los dots en px (solo con dotsOverlay).",
    },
    {
        name: "dotsTone",
        type: '"light" | "brand"',
        default: '"light"',
        description: "Color del dot activo: blanco (light) o brand.primary (brand).",
    },
    {
        name: "options",
        type: "EmblaOptionsType",
        default: "—",
        description: "Opciones extra de Embla (escape hatch).",
    },
    {
        name: "className",
        type: "string",
        default: "—",
        description: "className del contenedor raíz.",
    },
] as const;

export const offCanvasUsageCode = `import { useState } from "react";
import { Button } from "@shared/ui/buttons/button/Button";
import { OffCanvas } from "@shared/ui/overlays/offCanvas/OffCanvas";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Abrir menú</Button>

<OffCanvas
  open={open}
  onClose={() => setOpen(false)}
  side="left"
  aria-label="Menú"
>
  Contenido del panel
</OffCanvas>`;

export const offCanvasProps = [
    {
        name: "open",
        type: "boolean",
        default: "—",
        description: "Controla si el panel está visible.",
    },
    {
        name: "onClose",
        type: "() => void",
        default: "—",
        description: "Se dispara al tocar el backdrop, Escape o un cierre interno.",
    },
    {
        name: "side",
        type: '"left" | "right" | "bottom"',
        default: '"left"',
        description: "Lado desde el que entra el panel.",
    },
    {
        name: "width",
        type: "number",
        default: "300",
        description: "Ancho del panel en px (left/right; capado a 85vw).",
    },
    {
        name: "height",
        type: "number",
        default: "680",
        description: "Alto del panel en px (solo bottom; capado a 90dvh).",
    },
    {
        name: "surface",
        type: '"default" | "sheet"',
        default: '"default"',
        description:
            "sheet = bottom sheet (radius 40, border, background.sheet, shadows.sheet).",
    },
    {
        name: "children",
        type: "ReactNode",
        default: "—",
        description: "Contenido del panel.",
    },
    {
        name: "aria-label",
        type: "string",
        default: '"Panel"',
        description: "Label accesible del dialog.",
    },
] as const;

export const offCanvasSides = ["left", "right", "bottom"] as const;

export const countryFlagUsageCode = `import { CountryFlag } from "@shared/ui/flags/countryFlag/CountryFlag";

<CountryFlag code="US" title="Estados Unidos" />
<CountryFlag code="AR" />
<CountryFlag code="DO" width={28} height={20} />`;

export const countryFlagProps = [
    {
        name: "code",
        type: "CountryCode",
        default: "—",
        description: "Código ISO 3166-1 alpha-2 (US, AR, DO, ...).",
    },
    {
        name: "title",
        type: "string",
        default: "code",
        description: "Tooltip / accesibilidad del SVG.",
    },
    {
        name: "className",
        type: "string",
        default: "—",
        description: "Clase CSS del SVG.",
    },
    {
        name: "width / height",
        type: "string | number",
        default: "—",
        description: "Tamaño del SVG.",
    },
] as const;

export const countryFlagPreviewCodes = ["US", "DO", "CA", "AR", "GB", "BR", "UY", "CL"] as const;

export const switchUsageCode = `import { useState } from "react";
import { Switch } from "@shared/ui/inputs/switch/Switch";

const [checked, setChecked] = useState(true);

<Switch checked={checked} onChange={setChecked} label="Cuotas" />
<Switch checked={false} onChange={() => undefined} aria-label="Sin label" />
<Switch checked disabled onChange={() => undefined} label="Disabled" />`;

export const switchProps = [
    {
        name: "checked",
        type: "boolean",
        default: "—",
        description: "Estado controlado del switch.",
    },
    {
        name: "onChange",
        type: "(checked: boolean) => void",
        default: "—",
        description: "Callback al cambiar el estado.",
    },
    {
        name: "label",
        type: "string",
        default: "—",
        description: "Texto a la derecha del track.",
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Deshabilita la interacción.",
    },
    {
        name: "aria-label",
        type: "string",
        default: "label",
        description: "Label accesible si no hay texto visible.",
    },
] as const;

export const iconsUsageCode = `import {
  MenuIcon,
  DownloadIcon,
  ArrowForwardIcon,
  HorseRiderIcon,
  GreyhoundIcon,
  ChariotIcon,
} from "@assets/icons";
import { Button } from "@shared/ui/buttons/button/Button";

// Uso suelto (hereda currentColor del contenedor)
<MenuIcon />
<HorseRiderIcon />

// Tamaño / color
<DownloadIcon size={24} color="#E91E91" />
<GreyhoundIcon width={40} height={16} style={{ color: "white" }} />

// En un Button
<Button icon={<DownloadIcon />}>Descargar</Button>
<Button icon={<ArrowForwardIcon />}>Continuar</Button>`;

export const iconsRules = [
    {
        rule: "Importá solo desde @assets/icons",
        detail: "Nunca importes react-icons directo en features/components.",
    },
    {
        rule: "Nombres semánticos + sufijo Icon",
        detail: "Ej: MenuIcon, DownloadIcon, HorseRiderIcon.",
    },
    {
        rule: "Iconos custom (SVG de Figma)",
        detail: "Componente en src/assets/icons/customIcons/<Name>Icon.tsx + export en index.ts. Usar currentColor.",
    },
    {
        rule: "Color",
        detail: "Usan currentColor: heredan color del texto/padre o vía prop color / style.",
    },
] as const;
