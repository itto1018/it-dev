# 起動とインストールを一気に行う
setup:
	docker compose up -d
	docker compose exec -e CI=true app pnpm install --frozen-lockfile

# アプリのコンテナに入る
shell:
	docker compose exec app /bin/bash

# Claude Codeを起動する
claude:
	docker exec -it it_dev-claude-code-1 claude