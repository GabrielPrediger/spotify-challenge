export type TruncateOptions = {
  max?: number; // tamanho máximo total (inclui ellipsis)
  ellipsis?: string; // texto de continuação (padrão "...")
  preserveWords?: boolean; // evitar cortar no meio da última palavra
};
