FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# Install Node.js LTS
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install pnpm and Claude Code globally
RUN npm install -g pnpm @anthropic-ai/claude-code

# Install Playwright system dependencies for headless Chromium
RUN npx playwright@latest install-deps chromium
