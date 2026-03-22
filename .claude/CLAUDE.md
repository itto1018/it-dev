# it_dev Project
## Package Manager
pnpm

## Framework
Next.js 15 (App Router)

## Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Next.js build
- `pnpm start` - Start production server
- `pnpm lint` - ESLint

## microCMS
- SDK: `microcms-js-sdk`
- クライアント: `src/lib/microcms.ts`
- 型定義: `src/types/microcms.ts`
- 環境変数: `.env.local`（`MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY`）
- コンテンツ型は `src/types/microcms.ts` に追加していく

## CLAUDE
- スキル: skillsディレクトリに配置
- ルール: rulesディレクトリに配置
- 応答: 常に日本語で応答すること