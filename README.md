# Vue 3 + TypeScript + Vite で Vitestの勉強をするためのリポジトリ
- ゴール
  - Vitestでテストを動かす
  - google map api を用いたテストを書いてみる
   
## 環境構築
- [Vitest Getting Started](https://vitest.dev/guide/)
- [Vue.js + Vitest でテストを実行できる環境を作る](https://qiita.com/_kt15_/items/e4a16b2ff2a96cda1d32)で環境構築を実施

## 起動

```sh
 ❯❯❯ yarn
yarn install v1.22.22
info No lockfile found.
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 60.74s.

❯❯❯ yarn dev
yarn run v1.22.22
$ vite
Re-optimizing dependencies because lockfile has changed

  VITE v5.3.2  ready in 952 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```


## テスト実行

```sh
❯❯❯ yarn test
yarn run v1.22.22
$ vitest

 DEV  v1.6.0 /Users/nishimuraisamu/workspace/vitest-try

 ✓ src/test/components/HelloWorld.spec.ts (1)
   ✓ 初期表示

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  19:16:22
   Duration  397ms (transform 76ms, setup 0ms, collect 103ms, tests 11ms, environment 80ms, prepare 43ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```