#!/bin/bash
# Script para levantar el servidor WebSocket de Claude Talk to Figma
# Ejecutar ANTES de hacer click en "Connect" en el plugin de Figma

REPO_DIR="$HOME/cursor-talk-to-figma-mcp"

if [ ! -d "$REPO_DIR" ]; then
  echo "📦 Clonando repositorio por primera vez..."
  git clone https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp "$REPO_DIR"
  cd "$REPO_DIR"
  npm install
else
  cd "$REPO_DIR"
fi

echo "🚀 Levantando servidor WebSocket en puerto 3055..."
echo "👉 Una vez que veas el servidor activo, hacé click en 'Connect' en el plugin de Figma"
echo ""
npm run socket
