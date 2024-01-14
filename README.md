# ゆめみ フロントエンドコーディング試験

## 作成したアプリケーション

https://yumemi-frontend-selection.vercel.app/

## 開発

### 作業場所

miro: https://miro.com/app/board/uXjVN9VLgEM=/

### デザイン

figma: https://www.figma.com/file/0OiPlcJiMzE1Ypy6qHDe9o/Untitled?type=design&node-id=0%3A1&mode=design&t=XwPFbzOdK2Dzhdme-1  
storybook(chromatic): https://www.chromatic.com/library?appId=659cee5ac28827410a1ce25e

### 技術選定

| カテゴリ | 名前                                                      |
| -------- | --------------------------------------------------------- |
| App      | React, Next.js, TypeScript, TailwindCSS, clsx, Highcharts |
| Test     | Jest                                                      |
| Format   | ESLint, Prettier, lint-staged(+husky)                     |
| UI       | Storybook, Chromatic, Figma                               |
| Deploy   | Vercel                                                    |
| Other    | Docker                                                    |

### コマンド

開発用サーバーを起動

```
npm run dev
```

ビルド & サーバー起動

```
npm run build
npm run start
```

ビルド & サーバー起動 (With Docker)

```
npm run docker:build
npm run docker:start
```

フォーマット

```
npm run lint
npm run fix
```

テスト

```
npm run test
```

Storybook

```
npm run storybook
```
