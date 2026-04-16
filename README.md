# it_dev

Next.js + TypeScript + Tailwind CSS v4 + microCMS で構築されたポートフォリオサイト。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **CMS**: microCMS (`microcms-js-sdk`)
- **パッケージマネージャー**: pnpm

## ページ構成

| パス | 概要 |
|------|------|
| `/` | トップページ（Hero・スペシャリティ・最新ブログ） |
| `/about` | プロフィール・スキルセット・経歴 |
| `/perform` | 実績・プロジェクト一覧 |
| `/blog` | ブログ記事一覧 |
| `/blog/[id]` | ブログ記事詳細 |
| `/contact` | お問い合わせ（各SNSリンク・Google Forms） |

## セットアップ

### 1. 依存パッケージのインストール

```bash
pnpm install
```

### 2. 環境変数の設定

`.env.local` を作成し、microCMS の認証情報を設定：

```
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 3. microCMS のコンテンツ設定

以下のAPIエンドポイントを microCMS 上で作成してください：

| エンドポイント | 種別 | 主なフィールド | 用途 |
|--------------|------|-------------|-------------|
| `profile` | オブジェクト | name, position, image, description | profileページのプロフィール情報 |
| `skills` | リスト | title, level, category, categoryColor, displayFlg, discription | profileページのスキルセット |
| `career` | リスト | company, role, discription, startDate, endDate | profileページの経歴 |
| `perform` | リスト | title, category, date, description, tech, pageLink, github | performページの実績情報 |
| `blog` | リスト | title, category, description, content, tech | blogページのブログ記事 |

## コマンド

```bash
pnpm dev       # 開発サーバー起動
pnpm build     # ビルド
pnpm start     # ビルド済みアプリの起動
pnpm lint      # ESLint
pnpm format    # Prettier でコード整形
```

## ディレクトリ構成

```
src/
├── app/
│   ├── about/          # プロフィール・スキル・経歴ページ
│   ├── blog/           # ブログ一覧・詳細ページ
│   ├── contact/        # お問い合わせページ
│   ├── perform/        # 実績ページ
│   ├── components/     # 共通コンポーネント（Header, Footer など）
│   └── data/           # microCMS データ取得関数
├── constants/          # 定数・静的データ
├── lib/                # microCMS クライアント設定
├── types/              # 型定義
└── styles/             # グローバルスタイル
```
