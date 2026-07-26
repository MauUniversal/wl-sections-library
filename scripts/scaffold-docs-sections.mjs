import fs from "node:fs";
import path from "node:path";

const docsRoot = path.resolve("src/features/docsSections");

const write = (rel, content) => {
  const full = path.join(docsRoot, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.replace(/\r\n/g, "\n"), "utf8");
  console.log("wrote", rel);
};

const sections = [
  {
    folder: "featuredPromotionsSection",
    component: "FeaturedPromotionsSection",
    type: "FeaturedPromotions",
    importPath: "@sections/featuredPromotions",
    exportName: "FeaturedPromotions",
    description:
      "Carrusel de promociones destacadas con badge y monto. Type: FeaturedPromotions.",
    dataKey: "featuredPromotions",
    props: [
      ["title", "string", '"Promociones Destacadas 🔥"', "Título de la sección."],
      ["items", "FeaturedPromoCardData[]", "3 promos demo", "Cards del carrusel."],
      ["seeAllLabel", "string", '"Ver"', "Label del link Ver."],
      ["onSeeAllPress", "() => void", "—", "Callback del botón Ver."],
    ],
  },
  {
    folder: "recommendationsSection",
    component: "RecommendationsSection",
    type: "Recommendations",
    importPath: "@sections/recommendations",
    exportName: "Recommendations",
    description:
      "Carrusel de recomendaciones personalizadas. Type: Recommendations.",
    dataKey: "recommendations",
    props: [
      ["title", "string", '"Recomendados para vos"', "Título de la sección."],
      ["items", "RecommendationCardData[]", "3 cards demo", "Cards del carrusel."],
    ],
  },
  {
    folder: "sportsEventsSection",
    component: "SportsEventsSection",
    type: "SportsEvents",
    importPath: "@sections/sportsEvents",
    exportName: "SportsEvents",
    description: "Carrusel de eventos deportivos con cuotas. Type: SportsEvents.",
    dataKey: "sportsEvents",
    props: [
      ["title", "string", '"Eventos Deportivos"', "Título de la sección."],
      ["items", "SportsEventCardData[]", "5 eventos demo", "Cards del carrusel."],
      ["seeAllLabel", "string", '"Ver"', "Label del link Ver."],
      ["onSeeAllPress", "() => void", "—", "Callback del botón Ver."],
    ],
  },
  {
    folder: "casinoGamesSection",
    component: "CasinoGamesSection",
    type: "CasinoGames",
    importPath: "@sections/casinoGames",
    exportName: "CasinoGames",
    description: "Grilla 3 columnas de juegos de casino. Type: CasinoGames.",
    dataKey: "casinoGames",
    props: [
      ["title", "string", '"Juegos de Casino"', "Título de la sección."],
      ["items", "CasinoGameCardData[]", "6 juegos demo", "Cards de la grilla."],
      ["seeAllLabel", "string", '"Ver"', "Label del link Ver."],
      ["onSeeAllPress", "() => void", "—", "Callback del botón Ver."],
    ],
  },
  {
    folder: "latestWinnersSection",
    component: "LatestWinnersSection",
    type: "LatestWinners",
    importPath: "@sections/latestWinners",
    exportName: "LatestWinners",
    description:
      "Lista de últimos ganadores con tabs Live / Top 10. Type: LatestWinners.",
    dataKey: "latestWinners",
    props: [
      ["title", "string", '"Últimos Ganadores"', "Título de la sección."],
      ["liveItems", "LatestWinnerCardData[]", "demo live", "Items del tab Live."],
      ["top10Items", "LatestWinnerCardData[]", "demo top10", "Items del tab Top 10."],
      ["defaultTab", '"live" | "top10"', '"live"', "Tab activo al montar."],
    ],
  },
];

let dataAppend = "\n";

for (const s of sections) {
  const usageVar = `${s.dataKey}UsageCode`;
  const jsonVar = `${s.dataKey}JsonExample`;
  const propsVar = `${s.dataKey}Props`;

  dataAppend += `export const ${usageVar} = \`import { ${s.exportName} } from "@wl/sections-library";
// o en el playground:
import { ${s.exportName} } from "${s.importPath}";

<${s.exportName} />
\`;

export const ${jsonVar} = \`{
  "pages": {
    "home": [
      { "type": "${s.type}" }
    ]
  }
}\`;

export const ${propsVar} = [
${s.props
  .map(
    ([name, type, def, description]) => `  {
    name: "${name}",
    type: "${type}",
    default: ${JSON.stringify(def)},
    description: "${description}",
  }`,
  )
  .join(",\n")}
] as const;

`;

  write(
    `components/${s.folder}/${s.component}.tsx`,
    `import { ${s.exportName} } from "${s.importPath}";
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
  ${jsonVar},
  ${propsVar},
  ${usageVar},
} from "../../data";

export const ${s.component} = () => {
  return (
    <DocSection
      title="${s.type}"
      description="${s.description}"
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"${s.type}"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={${usageVar}} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={${jsonVar}} />
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
              {${propsVar}.map((prop) => (
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
          <${s.exportName} />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};
`,
  );
}

const dataPath = path.join(docsRoot, "data.ts");
const existing = fs.readFileSync(dataPath, "utf8");
if (!existing.includes("featuredPromotionsUsageCode")) {
  fs.writeFileSync(dataPath, existing.replace(/\r\n/g, "\n") + dataAppend, "utf8");
  console.log("appended docs data");
} else {
  console.log("docs data already has featured promotions — skip append");
}

console.log("docs sections scaffolded");
