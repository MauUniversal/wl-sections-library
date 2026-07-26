import { Navigate, Route, Routes } from "react-router-dom";
import { DocsComponentsPage } from "@features/docsComponents";
import { DocsSectionsPage } from "@features/docsSections";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/docs_components" replace />} />
    <Route path="/docs_components" element={<DocsComponentsPage />} />
    <Route path="/docs_sections" element={<DocsSectionsPage />} />
    <Route path="*" element={<Navigate to="/docs_components" replace />} />
  </Routes>
);
