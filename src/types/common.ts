// src/types/common.ts

export type IdKeys = 'id' | 'idContrato' | 'idContratante';

export type BaseTableData = Partial<Record<IdKeys, number>> & Record<string, unknown>;