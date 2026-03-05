# it_dev Project

## Overview
Vite + React + TypeScript project.

## Tech Stack
- React 19
- TypeScript 5.9
- Vite 7
- ESLint (typescript-eslint)

## Package Manager
pnpm

## Commands
- `pnpm dev` - Start dev server
- `pnpm build` - TypeScript check + Vite build
- `pnpm lint` - ESLint
- `pnpm preview` - Preview build

## microCMS
- SDK: `microcms-js-sdk`
- クライアント: `src/lib/microcms.ts`
- 型定義: `src/types/microcms.ts`
- 環境変数: `.env.local`（`VITE_MICROCMS_SERVICE_DOMAIN`, `VITE_MICROCMS_API_KEY`）
- コンテンツ型は `src/types/microcms.ts` に追加していく
