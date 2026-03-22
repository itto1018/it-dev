# it_dev

Next.js + TypeScript + Tailwind CSS + microCMS で構築されたウェブサイト。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **CMS**: microCMS (`microcms-js-sdk`)
- **パッケージマネージャー**: pnpm

## コマンド

```bash
pnpm dev       # 開発サーバー起動
pnpm build     # ビルド
pnpm start     # ビルド済みアプリの起動
pnpm lint      # ESLint
```

## 環境変数

`.env.local` を作成し、以下を設定：

```
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

## ディレクトリ構成

```
src/
├── app/          # Next.js App Router ページ
│   ├── about/
│   ├── blog/
│   ├── contact/
│   └── perform/
├── lib/          # ユーティリティ（microCMS クライアントなど）
├── types/        # 型定義
├── constants/    # 定数
└── styles/       # グローバルスタイル
```
